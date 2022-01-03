import React, { useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  return (
    <>
      <div className="header text-center">
        <h1>To Do List</h1>
        <button className="btn btn-p mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="main-section">
        <div className="task-container">
          {taskList &&
            taskList.map((obj, index) => (
              <Card
                key={index}
                index={index}
                taskObj={obj}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            ))}
        </div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
      </div>
    </>
  );
};

export default TodoList;
