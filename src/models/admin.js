
import { delay } from 'redux-saga';

export default {
  namespace: 'admin',
  state: {
    name: 'Ryan',
    query: {},
    listData: [
      {
        id: 1,
        name: 'Haix',
        age: 18,
        address: 'no way'
      },
      {
        id: 2,
        name: 'Ryan',
        age: 29,
        address: 'no way'
      },
      {
        id: 3,
        name: 'Wendy',
        age: 29,
        address: '台中市西屯區'
      },
      {
        id: 4,
        name: 'Ian',
        age: 28,
        address: '台中市西屯區'
      }
    ],
    info: {
      current_page: "1",
      limit: "20",
      total: "2",
      total_page: "1"
    }
  },
  subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save', payload });
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
      return { ...state, query: { ...action.payload } };
    },
    addCount(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.count += 1
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
