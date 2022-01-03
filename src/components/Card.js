import React, { useState } from "react";
import { Colors } from "./data/Colors";
import EditTask from "../modals/EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const handleDelete = () => {
    deleteTask(index);
  };

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index)
  };

  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ backgroundColor: Colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ backgroundColor: Colors[index % 5].secondaryColor }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>
        <div className="btns">
          <i
            className="ri-edit-fill"
            style={{ color: Colors[index % 5].primaryColor }}
            onClick={() => setModal(true)}
          ></i>
          <i
            className="ri-delete-bin-fill"
            style={{ color: Colors[index % 5].primaryColor }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
