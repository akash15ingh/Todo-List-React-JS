import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState("");
  const [listData, setListData] = useState([]);

  const addItems = () => {
    // setListData([...listData, items]);
    // console.log(listData);
    setListData((listData) => {
      const updatedList = [...listData, items];
      console.log(updatedList);
      setItems("");
      return updatedList;
    });
  };

  const removeItems = (i) => {
    const removeListData = listData.filter((ele, id) => {
      return i !== id;
    });
    setListData(removeListData);
  };

  const removeAll = () => {
    setListData([]);
  };
  return (
    <>
      <div className="container">
        <div className="header">TODO List</div>
        <input
          type="text"
          placeholder="Add Items"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        />
        <button onClick={addItems}>➕</button>
        <p className="List-heading">Your Items📃</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeItems(i)}>❌</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <button onClick={removeAll}>Remove All</button>
        )}
      </div>
    </>
  );
}

export default TodoList;
