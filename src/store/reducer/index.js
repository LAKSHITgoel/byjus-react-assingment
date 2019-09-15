import * as types from "../types";

const initialState = {
  loading: true,
  load: 0,
  data: {
    data: [],
    len: 0
  },
  showSearchResult: false,
  searchDataSet: [],
  pageSize: 20,
  startIndex: 0,
  current: 1,
  sortBy: {
    active: false,
    order: "asc",
    param: "default"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        load: action.payload
      };

    case types.SET_DATA:
      return {
        ...state,
        loading: false,
        data: {
          ...action.payload
        }
      };

    case types.CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload.pageSize,
        startIndex: action.payload.startIndex,
        current: action.payload.current
      };

    case types.JUMP_TO_PAGE:
      return {
        ...state,
        startIndex: action.payload.startIndex,
        current: action.payload.current
      };

    case types.CHANGE_SORT_ORDER: {
      return {
        ...state,
        sortBy: {
          ...action.payload
        }
      };
    }
    case types.CHANGE_SORT_PARAM:
      return {
        ...state,
        sortBy: {
          ...action.payload
        }
      };

    case types.SET_SORTED_DATA:
      return {
        ...state,
        sortedData: {
          ...action.payload
        }
      };

    case types.SET_SEARCH_RESULTS:
      return {
        ...state,
        showSearchResult: true,
        searchDataSet: [...action.payload]
      };

    case types.UNSET_SEARCH_RESULTS:
      return {
        ...state,
        showSearchResult: false,
        searchDataSet: []
      };

    default:
      return state;
  }
};
