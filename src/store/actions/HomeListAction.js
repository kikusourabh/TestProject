import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAIL,
  SEARCH,
} from '../Types/HomeListType';

export const _STATE_LOADING = 'Loading';
export const _STATE_SUCCESS = 'Success';
export const _STATE_FAIL = 'Fail';

export const fetchingData = () => ({
  type: FETCHING_DATA,
  Payload: _STATE_LOADING,
});
export const fetchingDataSuccess = (Data) => ({
  type: FETCHING_DATA_SUCCESS,
  Payload: _STATE_SUCCESS,
  Data: Data,
});
export const fetchingDataFail = () => ({
  type: FETCHING_DATA_FAIL,
  Payload: _STATE_FAIL,
});
export const searchData = (text) => ({
  type: SEARCH,
  text: text,
});
