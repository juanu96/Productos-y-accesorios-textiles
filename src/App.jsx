import React, { createContext, useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Content from "./components/Content/Content";

export const Store = createContext(null);

function App() {
  const [CurrentData, setCurrentData] = useState(null);
  
  return (
    <Store.Provider value={{ CurrentData, setCurrentData }}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-3">
          <Menu />
        </div>
        <div className="col-span-12 xl:col-span-9 grid grid-cols-9 gap-6">
          <div className="col-span-9 xl:col-span-4">
            <img
              src={
                CurrentData
                  ? CurrentData?.content?.image?.node?.mediaItemUrl
                  : "https://via.placeholder.com/357x475"
              }
              alt="Placeholder"
              className="w-full h-full object-cover max-h-[512px]"
            />
          </div>
          <div className="col-span-9 xl:col-span-5">
            <Content
              content={CurrentData?.content}
              title={CurrentData?.title}
              tonos={CurrentData?.tonos}
              tamanos={CurrentData?.tamanosDisponibles?.tamano}
              accesorios={CurrentData?.accesoriosDisponibles?.accesorio}
            />
          </div>
        </div>
      </div>
    </Store.Provider>
  );
}

export default App;
