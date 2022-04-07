import { appSlice } from "./appSlice";

export const GET_RESULT = "app/getResult";

export const GET_RESULT_BY_NAME = "app/getResultByName";

export const {
  setResult,
  setResultByName,
  setSortHigh,
  setSortLow,
  insertSelectItem,
  deleteSelectItem,
  insertSelectItemAll,
  deleteSelectItemAll,
} = appSlice.actions;

export const getResult = () => ({ type: GET_RESULT });

export const getResultByName = (name) => ({
  type: GET_RESULT_BY_NAME,
  payload: name,
});
