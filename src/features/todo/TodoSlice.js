import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: 1,
    title: "Backlog",
    cards: [
      { name: "tasks 1", stage: 0, cid: uuidv4() },
      { name: "tasks 2", stage: 0, cid: uuidv4() },
    ],
  },
  {
    id: 2,
    title: "Todo",
    cards: [],
  },
  {
    id: 3,
    title: "InProgress",
    cards: [],
  },
  {
    id: 4,
    title: "Done",
    cards: [],
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { name: action.payload, stage: 0, cid: uuidv4() };
      state[0].cards = [...state[0].cards, newTodo];
    },
    backlogToTodo: (state, { payload }) => {
      state[0].cards = state[0].cards.filter(
        (item) => item.cid !== payload.cid
      );
      state[1].cards = [...state[1].cards, { ...payload, stage: 1 }];
    },
    todoToProgress: (state, { payload }) => {
      state[1].cards = state[1].cards.filter(
        (item) => item.cid !== payload.cid
      );
      state[2].cards = [...state[2].cards, { ...payload, stage: 2 }];
    },
    progessToDone: (state, { payload }) => {
      state[2].cards = state[2].cards.filter(
        (item) => item.cid !== payload.cid
      );
      state[3].cards = [...state[3].cards, { ...payload, stage: 3 }];
    },
    doneToBacklog: (state, { payload }) => {
      state[3].cards = state[3].cards.filter(
        (item) => item.cid !== payload.cid
      );
      state[0].cards = [...state[0].cards, { ...payload, stage: 0 }];
    },
    progessToBacklog: (state, { payload }) => {
      state[2].cards = state[2].cards.filter(
        (item) => item.cid !== payload.cid
      );
      state[0].cards = [...state[0].cards, { ...payload, stage: 0 }];
    },
    todoToBacklog: (state, { payload }) => {
      state[1].cards = state[1].cards.filter(
        (item) => item.cid !== payload.cid
      );
      state[0].cards = [...state[0].cards, { ...payload, stage: 0 }];
    },
    deleteBacklog: (state, { payload }) => {
      state[0].cards = state[0].cards.filter(
        (item) => item.cid !== payload.cid
      );
    },
    deleteTodo: (state, { payload }) => {
      state[1].cards = state[1].cards.filter(
        (item) => item.cid !== payload.cid
      );
    },
    deleteProgress: (state, { payload }) => {
      state[2].cards = state[2].cards.filter(
        (item) => item.cid !== payload.cid
      );
    },
    deleteDone: (state, { payload }) => {
      state[3].cards = state[3].cards.filter(
        (item) => item.cid !== payload.cid
      );
    },
  },
});

export default todoSlice.reducer;
export const {
  addTodo,
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
} = todoSlice.actions;
