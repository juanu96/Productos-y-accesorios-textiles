import React from "react";
import PropTypes from "prop-types";

const DropdownItem = ({ title, items, onItemClick, isActiveItem }) => (
  <div className="dropdown dropdown-hover w-full bg-transparent border-solid border-b border-primary">
    <div
      tabIndex={0}
      role="button"
      className="btn m-1 w-full justify-between bg-transparent hover:bg-transparent text-secondary shadow-none p-0 font-semibold text-sm md:text-base"
    >
      <span>{title}</span>
      <span className="flex items-center ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M7.29289 7.70711L1.70711 13.2929C1.07714 13.9229 -6.65859e-08 13.4767 -1.05529e-07 12.5858L-5.93854e-07 1.41421C-6.32796e-07 0.523309 1.07714 0.0771398 1.7071 0.707105L7.29289 6.29289C7.68342 6.68342 7.68342 7.31658 7.29289 7.70711Z" fill="#565756"/>
        </svg>
      </span>
    </div>
    <ul
      tabIndex={0}
      className="dropdown-content z-[1] menu px-2 shadow bg-white w-52 top-0 bottom-0 left-full flex-nowrap h-max"
    >
      {items.map((item) => (
        <li key={item.title}>
          <a
            className={`border-solid border-b border-primary rounded-none ${
              isActiveItem(item) ? "bg-primary text-white active-item" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onItemClick(item);
            }}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/* DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func.isRequired,
  isActiveItem: PropTypes.func.isRequired, // New prop for active state
};
 */
export default DropdownItem;
