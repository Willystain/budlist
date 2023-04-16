import React, { useState } from "react";

const Form = ({ onForm }) => {
  const [item, setItem] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onForm({ itemName: item, isDone: false });
    setItem("");
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <h4>Bud</h4>
      <label htmlFor="item"></label>
      <input
        className="form-input"
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button type="submit" className="btn">
        Add Item
      </button>
    </form>
  );
};

export default Form;
