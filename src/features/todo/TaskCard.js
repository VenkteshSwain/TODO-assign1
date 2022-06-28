import React from "react";
import { useDispatch } from "react-redux";
import {
  todoToBacklog,
  backlogToTodo,
  todoToProgress,
  progessToDone,
  doneToBacklog,
  progessToBacklog,
  deleteTodo,
  deleteProgress,
  deleteDone,
  deleteBacklog,
} from "./TodoSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const handleMoveLeft = (task) => {
    let stage = task.stage;
    switch (stage) {
      case 1: {
        dispatch(todoToBacklog(task));
        break;
      }
      case 2: {
        dispatch(progessToBacklog(task));
        break;
      }
      case 3: {
        dispatch(doneToBacklog(task));
        break;
      }
      default:
        return;
    }
  };
  const handleMoveRight = (task) => {
    let stage = task.stage;
    switch (stage) {
      case 0: {
        dispatch(backlogToTodo(task));
        break;
      }
      case 1: {
        dispatch(todoToProgress(task));
        break;
      }
      case 2: {
        dispatch(progessToDone(task));
        break;
      }
      default:
        return;
    }
  };
  const handleRemove = (task) => {
    let stage = task.stage;
    switch (stage) {
      case 0: {
        dispatch(deleteBacklog(task));
        break;
      }
      case 1: {
        dispatch(deleteTodo(task));
        break;
      }
      case 2: {
        dispatch(deleteProgress(task));
        break;
      }
      case 3: {
        dispatch(deleteDone(task));
        break;
      }
      default:
        return;
    }
  };
  return (
    <div>
      {task.name}
      {task.stage === 0 ? (
        <button disabled>&#8592;</button>
      ) : (
        <button
          onClick={() => {
            handleMoveLeft(task);
          }}
        >
          &#8592;
        </button>
      )}
      <button
        onClick={() => {
          handleRemove(task);
        }}
      >
        &#88;
      </button>
      {task.stage === 3 ? (
        <button disabled>&#8594;</button>
      ) : (
        <button
          onClick={() => {
            handleMoveRight(task);
          }}
        >
          &#8594;
        </button>
      )}
    </div>
  );
};

export default TaskCard;
