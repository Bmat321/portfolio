import React from "react";

const ListPortfolio = ({ title, active, id, setSelected }) => {
  return (
    <li
      className={
        active
          ? "text-sm mr-12 p-2 bg-red-950 rounded-2xl "
          : "text-sm mr-12 p-2"
      }
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default ListPortfolio;
