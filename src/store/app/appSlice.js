import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
  resultByName: {},
  selectMap: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setResultByName: (state, action) => {
      state.resultByName[action.payload.key] = action.payload.value;
    },
    setSortHigh: (state, action) => {
      const { targetTable, columnKey, name } = action.payload;
      if (targetTable === "main") {
        if (columnKey === "foxtrot") {
          state.result.sort((a, b) => a[1] - b[1]);
        } else {
          state.result.sort((a, b) => a[2] - b[2]);
        }
      } else {
        if (columnKey === "foxtrot") {
          state.resultByName[name].sort((a, b) => a[1] - b[1]);
        } else {
          state.resultByName[name].sort((a, b) => a[2] - b[2]);
        }
      }
    },
    setSortLow: (state, action) => {
      const { targetTable, columnKey, name } = action.payload;
      if (targetTable === "main") {
        if (columnKey === "foxtrot") {
          state.result.sort((a, b) => b[1] - a[1]);
        } else {
          state.result.sort((a, b) => b[2] - a[2]);
        }
      } else {
        if (columnKey === "foxtrot") {
          state.resultByName[name].sort((a, b) => b[1] - a[1]);
        } else {
          state.resultByName[name].sort((a, b) => b[2] - a[2]);
        }
      }
    },
    insertSelectItem: (state, action) => {
      state.selectMap[action.payload] = true;
    },
    deleteSelectItem: (state, action) => {
      delete state.selectMap[action.payload];
    },
    insertSelectItemAll: (state, action) => {
      state.selectMap = { ...state.selectMap, ...action.payload };
    },
    deleteSelectItemAll: (state, action) => {
      Object.keys(state.selectMap).forEach((key) => {
        if (key.includes(action.payload)) {
          delete state.selectMap[key];
        }
      });
    },
  },
});

export default appSlice.reducer;
