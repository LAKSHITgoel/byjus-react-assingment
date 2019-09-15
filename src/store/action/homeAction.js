import * as types from "../types";

export const getData = () => ({
  type: types.GET_DATA
});

export const changePageSize = obj => ({
  type: types.CHANGE_PAGE_SIZE,
  payload: {
    ...obj
  }
});

export const jumpToPage = obj => ({
  type: types.JUMP_TO_PAGE,
  payload: {
    ...obj
  }
});

export const sortByOrder = obj => ({
  type: types.CHANGE_SORT_ORDER,
  payload: { ...obj }
});

export const sortByParam = obj => ({
  type: types.CHANGE_SORT_PARAM,
  payload: { ...obj }
});

export const setSortedData = obj => ({
  type: types.SET_SORTED_DATA,
  payload: { ...obj }
});

export const setSearchResults = arr => ({
  type: types.SET_SEARCH_RESULTS,
  payload: [...arr]
});

export const unSetSearchResults = () => ({
  type: types.UNSET_SEARCH_RESULTS
});
