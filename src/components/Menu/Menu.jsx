import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import { useTelasData, usePolifibrasData, useAccesoriosData } from "../Data/Data";
import { Store } from "../../App";
import CollapseItem from "./CollapseItem";
import DropdownItem from "./DropdownItem";

const Menu = () => {
  const store = useContext(Store);
  const [activeSection, setActiveSection] = useState("telas");
  const { data: telasData, loading: telasLoading, error: telasError } = useTelasData();
  const { data: polifibrasData, loading: polifibrasLoading, error: polifibrasError } = usePolifibrasData();
  const { data: accesoriosData, loading: accesoriosLoading, error: accesoriosError } = useAccesoriosData();
  const [groupedTelas, setGroupedTelas] = useState({});
  const [groupedPolifibras, setGroupedPolifibras] = useState({});
  const [groupedAccesorios, setGroupedAccesorios] = useState({});
  const [size, setSize] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (telasData.length > 0) {
      const grouped = groupByCategory(telasData);
      setGroupedTelas(grouped);
    }
  }, [telasData]);

  useEffect(() => {
    if (polifibrasData.length > 0) {
      const grouped = groupByCategory(polifibrasData);
      setGroupedPolifibras(grouped);
    }
  }, [polifibrasData]);

  useEffect(() => {
    if (accesoriosData.length > 0) {
      const grouped = groupByCategory(accesoriosData);
      setGroupedAccesorios(grouped);
    }
  }, [accesoriosData]);

  useEffect(() => {
    // Seleccionar el primer elemento disponible al cargar
    if (!store.currentData) {
      selectFirstAvailableItem();
    }
  }, [groupedTelas, groupedPolifibras, groupedAccesorios]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const groupByCategory = (items) => {
    const groupedData = {};

    items.forEach((item) => {
      const categories = item.categoriasDeProductos?.nodes?.map((cat) => cat.name) || [];

      if (categories.length > 0) {
        categories.forEach((category) => {
          if (!groupedData[category]) {
            groupedData[category] = [];
          }
          groupedData[category].push(item);
        });
      } else {
        // Directly add the item without category under "Sin Categoria"
        if (!groupedData["Sin Categoria"]) {
          groupedData["Sin Categoria"] = [];
        }
        groupedData["Sin Categoria"].push(item);
      }
    });

    return groupedData;
  };

  const handleItemClick = (item) => {
    store.setCurrentData(item);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const selectFirstAvailableItem = () => {
    const firstTelasItem = telasData?.[0];
    const firstPolifibrasItem = polifibrasData?.[0];
    const firstAccesoriosItem = accesoriosData?.[0];

    if (firstTelasItem) {
      store.setCurrentData(firstTelasItem);
    } else if (firstPolifibrasItem) {
      store.setCurrentData(firstPolifibrasItem);
    } else if (firstAccesoriosItem) {
      store.setCurrentData(firstAccesoriosItem);
    }
  };

  if (telasLoading || polifibrasLoading || accesoriosLoading) return <p>Loading...</p>;
  if (telasError || polifibrasError || accesoriosError) return <p>Error: {telasError?.message || polifibrasError?.message || accesoriosError?.message}</p>;

  const isMobile = size < 1280;

  const categorizedTelasItems = Object.entries(groupedTelas).filter(
    ([group]) => group !== "Sin Categoria"
  );
  const uncategorizedTelasItems = groupedTelas["Sin Categoria"] || [];

  const categorizedPolifibrasItems = Object.entries(groupedPolifibras).filter(
    ([group]) => group !== "Sin Categoria"
  );
  const uncategorizedPolifibrasItems = groupedPolifibras["Sin Categoria"] || [];

  const categorizedAccesoriosItems = Object.entries(groupedAccesorios).filter(
    ([group]) => group !== "Sin Categoria"
  );
  const uncategorizedAccesoriosItems = groupedAccesorios["Sin Categoria"] || [];

  const isActiveItem = (item) => store.currentData && store.currentData.title === item.title;

  console.log(isActiveItem)

  return (
    <div id="menu-section">
      {/* Section for Telas */}
      <div
        className={`collapse collapse-arrow bg-white overflow-hidden xl:overflow-visible mb-5 ${
          activeSection === "telas"
            ? ""
            : "border-2 border-primary border-solid"
        }`}
      >
        <input
          type="radio"
          name="my-accordion-2"
          checked={activeSection === "telas"}
          onChange={() => handleSectionChange("telas")}
        />
        <div
          className={`collapse-title text-base md:text-xl font-medium uppercase ${
            activeSection === "telas"
              ? "text-white bg-primary rounded-2xl mb-5"
              : ""
          }`}
        >
          Telas
        </div>
        <div className="collapse-content">
          {categorizedTelasItems.map(([group, items]) =>
            isMobile ? (
              <CollapseItem
                key={group}
                title={group}
                items={items}
                active={activeSubmenu === group}
                onChange={() => toggleSubmenu(group)}
                onItemClick={handleItemClick}
                isMobile={isMobile}
                isActiveItem={isActiveItem}
              />
            ) : (
              <DropdownItem
                key={group}
                title={group}
                items={items}
                onItemClick={handleItemClick}
                isActiveItem={isActiveItem}
              />
            )
          )}
          {uncategorizedTelasItems.map((item) => (
            <div
              key={item.title}
              style={{ borderBottom: "1px solid" }}
              className={`btn m-1 w-full justify-start hover:bg-transparent bg-transparent text-secondary shadow-none p-0 font-semibold text-sm md:text-base rounded-none border-secondary ${
                isActiveItem(item) ? "bg-primary text-white active-item" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* Section for Polifibras y Guata */}
      <div
        className={`collapse collapse-arrow bg-white overflow-hidden xl:overflow-visible mb-5 ${
          activeSection === "polifibras"
            ? ""
            : "border-2 border-primary border-solid"
        }`}
      >
        <input
          type="radio"
          name="my-accordion-2"
          checked={activeSection === "polifibras"}
          onChange={() => handleSectionChange("polifibras")}
        />
        <div
          className={`collapse-title text-base md:text-xl font-medium uppercase ${
            activeSection === "polifibras"
              ? "text-white bg-primary rounded-2xl mb-5"
              : ""
          }`}
        >
          POLIFIBRAS Y GUATA
        </div>
        <div className="collapse-content">
          {categorizedPolifibrasItems.map(([group, items]) =>
            isMobile ? (
              <CollapseItem
                key={group}
                title={group}
                items={items}
                active={activeSubmenu === group}
                onChange={() => toggleSubmenu(group)}
                onItemClick={handleItemClick}
                isMobile={isMobile}
                isActiveItem={isActiveItem}
              />
            ) : (
              <DropdownItem
                key={group}
                title={group}
                items={items}
                onItemClick={handleItemClick}
                isActiveItem={isActiveItem}
              />
            )
          )}
          {uncategorizedPolifibrasItems.map((item) => (
            <div
              key={item.title}
              style={{ borderBottom: "1px solid" }}
              className={`btn rounded-none m-1 w-full justify-start hover:bg-transparent bg-transparent text-secondary shadow-none p-0 font-semibold text-sm md:text-base border-b border-primary ${
                isActiveItem(item) ? "bg-primary text-white active-item" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* Section for Accesorios */}
      <div
        className={`collapse collapse-arrow bg-white overflow-hidden xl:overflow-visible mb-5 ${
          activeSection === "accesorios"
            ? ""
            : "border-2 border-primary border-solid"
        }`}
      >
        <input
          type="radio"
          name="my-accordion-2"
          checked={activeSection === "accesorios"}
          onChange={() => handleSectionChange("accesorios")}
        />
        <div
          className={`collapse-title text-base md:text-xl font-medium uppercase ${
            activeSection === "accesorios"
              ? "text-white bg-primary rounded-2xl mb-5"
              : ""
          }`}
        >
          ACCESORIOS
        </div>
        <div className="collapse-content">
          {categorizedAccesoriosItems.map(([group, items]) =>
            isMobile ? (
              <CollapseItem
                key={group}
                title={group}
                items={items}
                active={activeSubmenu === group}
                onChange={() => toggleSubmenu(group)}
                onItemClick={handleItemClick}
                isMobile={isMobile}
                isActiveItem={isActiveItem}
              />
            ) : (
              <DropdownItem
                key={group}
                title={group}
                items={items}
                onItemClick={handleItemClick}
                isActiveItem={isActiveItem}
              />
            )
          )}
          {uncategorizedAccesoriosItems.map((item) => (
            <div
              key={item.title}
              style={{ borderBottom: "1px solid" }}
              className={`btn rounded-none m-1 w-full justify-start hover:bg-transparent bg-transparent text-secondary shadow-none p-0 font-semibold text-sm md:text-base border-b border-primary ${
                isActiveItem(item) ? "bg-primary text-white active-item" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
