import React from "react";

const TabProjects = ({ handleSelectedTab, tabList, active }) => {
  return (
    <div className="flex gap-2 sm:gap-4">
      {tabList.map((tab) => (
        <button
          className={`text-center px-4 py-2 font-normal text-lg sm:text-xl rounded-full ${
            tab === active ? "bg-green-700 text-white" : "border"
          }`}
          onClick={() => handleSelectedTab(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabProjects;
