import React from "react";
import PropTypes from "prop-types";

const CollapseItem = ({ title, items, active, onChange, onItemClick, isMobile, isActiveItem }) => (
  <div className={`collapse collapse-arrow bg-white overflow-hidden mb-5 ${active ? "collapse-open" : "border-b border-primary border-solid rounded-none"}`}>
    <input
      type="checkbox"
      checked={active}
      onChange={onChange}
    />
    <div className={`collapse-title text-base md:text-xl font-medium uppercase border-b border-primary border-solid ${active ? "bg-primary text-white" : ""}`}>
      {title}
    </div>
    <div className="collapse-content">
      {items.map((item) => (
        <div
          key={item.title}
          className={`btn perra m-1 w-full ml-5 border-b border-primary rounded-none justify-start hover:bg-transparent bg-transparent text-secondary shadow-none p-0 font-semibold text-sm md:text-base ${
            isActiveItem(item) ? "bg-primary text-white active-item" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onItemClick(item);
          }}
        >
          {item.title}
        </div>
      ))}
    </div>
  </div>
);

/* CollapseItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  active: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isActiveItem: PropTypes.func.isRequired, // New prop for active state
};
 */
export default CollapseItem;
