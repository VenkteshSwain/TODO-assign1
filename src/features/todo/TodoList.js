import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import TaskCard from "./TaskCard";

const TodoList = () => {
  const tasks = useSelector((state) => {
    return [
      { backlogs: state.todo[0].cards },
      { todos: state.todo[1].cards },
      { inProgress: state.todo[2].cards },
      { done: state.todo[3].cards },
    ];
  });
  console.log(tasks);
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <div>BACKLOG</div>
        {tasks[0].backlogs.map((backlog) => (
          <TaskCard key={backlog.cid} task={backlog} />
        ))}
      </Grid>
      <Grid item xs={3}>
        <div>TODO</div>
        {tasks[1].todos.map((todo) => (
          <TaskCard key={todo.cid} task={todo} />
        ))}
      </Grid>
      <Grid item xs={3}>
        <div>PROGRESS</div>
        {tasks[2].inProgress.map((progress) => (
          <TaskCard key={progress.cid} task={progress} />
        ))}
      </Grid>
      <Grid item xs={3}>
        <div>DONE</div>
        {tasks[3].done.map((completed) => (
          <TaskCard key={completed.cid} task={completed} />
        ))}
      </Grid>
    </Grid>
  );
};

export default TodoList;
