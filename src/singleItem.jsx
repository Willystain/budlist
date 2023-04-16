const SingleItem = ({ item, onDelete, onCheck }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleCheck = () => {
    onCheck(item.id);
  };

  const itemStyle = {
    textDecoration: item.isDone ? "line-through" : "none",
  };
  return (
    <div className="single-item">
      <input type="checkBox" checked={item.isDone} onChange={handleCheck} />
      <p style={itemStyle}>{item.itemName}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SingleItem;
