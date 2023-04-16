import { useState } from "react";
import SingleItem from "./singleItem";

const Items = ({ itemList, onDelete, onCheck }) => {
  return (
    <div className="items">
      {itemList.map((i, index) => {
        return (
          <SingleItem
            key={index}
            item={i}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        );
      })}
    </div>
  );
};

export default Items;
