
import { delay } from 'redux-saga';

export default {
  namespace: 'menus',
  state: {
    name: 'Ryan',
    text: "this is the home Components",
    count: 0,
    loading: false
  },
  subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *addAfterSecond(action, { call, put }) {
      // eslint-disable-next-line no-undef
      yield put({
        type: 'addCount',
        payload: {loading: true}
      });
      yield call(delay, 500);
      yield put({
        type: 'overAddCount',
        payload: {loading: false}
      });
    },
    *setYourName({ payload }, { put}) {
      yield put({
        type: 'setName',
        payload
      });
    }
  },
  reducers: {
    getList(state, {payload}) {
      return {...state, ...payload};
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
    addCount(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.count += 1;

      return { ...state, ...action.payload }
    },
    setName(state, action) {
      return { ...state, ...action.payload };
    },
    overAddCount(state, action) {
      return { ...state, ...action.payload };
    }
  },
};
