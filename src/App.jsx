import { useEffect, useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const initialList = () => {
    const storedList = localStorage.getItem("itemList");
    return storedList ? JSON.parse(storedList) : [];
  };

  const [itemList, setItemList] = useState(initialList);
  const [nextId, setNextId] = useState(
    Number(localStorage.getItem("nextId")) || 1
  );

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
    localStorage.setItem("nextId", nextId);
  }, [itemList, nextId]);

  const addNewItem = (item) => {
    setItemList([
      ...itemList,
      { id: nextId, itemName: item.itemName, isDone: false },
    ]);
    setNextId(nextId + 1);
  };

  const deleteItem = (id) => {
    const item = itemList.find((item) => item.id === id);
    toast.success(`The item: ${item.itemName} has been deleted`);
    const updatedList = itemList.filter((item) => item.id !== id);
    setItemList(updatedList);
  };

  const onCheck = (id) => {
    const updatedList = itemList.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setItemList(updatedList);
  };

  return (
    <main className="section-center">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Form onForm={addNewItem} />
      <Items itemList={itemList} onDelete={deleteItem} onCheck={onCheck} />
    </main>
  );
};

export default App;
