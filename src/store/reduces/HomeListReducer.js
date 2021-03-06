import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
  SEARCH,
} from '../Types/HomeListType';
import {
  _STATE_LOADING,
  _STATE_SUCCESS,
  _STATE_FAIL,
} from '../actions/HomeListAction';

const initialState = {
  payload: _STATE_LOADING,
  Data: [],
  searchData: [],
};

const HomeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        payload: _STATE_LOADING,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        payload: _STATE_SUCCESS,
        Data: action.Data,
        searchData: action.Data,
      };
    case FETCHING_DATA_FAIL:
      return {
        ...state,
        payload: _STATE_FAIL,
      };
    case SEARCH:
      return {
        ...state,
        searchData: state?.Data?.filter((val) =>
          val.text?.includes(action.text),
        ),
      };

    default:
      return state;
  }
};

export default HomeListReducer;
