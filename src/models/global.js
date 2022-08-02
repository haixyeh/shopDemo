import { getBannerInfo } from '../service';

export default {
  namespace: 'global',
  state: {
    userInfo: {
      email: 'haix.yeh@gmail.com',
      pwd: null,
      key: 7867861782
    },
    banners: [],
    loading: false
  },

  subscriptions: {},

  effects: {
    // dispatch 用户信息
    *setUserInfo({ payload }, { put }) {
      // eslint-disable-line
      yield put({ type: 'set_userinfo', payload });
    },
    *fetchBannerInfo(_, { call, put }) {
      yield put({ type: 'setLoading', payload: true });
      const response = yield call(getBannerInfo);

      if (response) {
        yield put({
          type: 'setBannerInfo',
          payload: response,
        });
        yield put({ type: 'setLoading', payload: false });

        return;
      }
      yield put({ type: 'setLoading', payload: false });
    }
  },

  reducers: {
    setLoading(state, action) {
      return { ...state, loading: action.payload }
    },
    // 设置用户信息 userInfo的state
    set_userinfo(state, { payload }) {
      return { ...state, userInfo: payload };
    },
    setBannerInfo(state, action) {
      return {
        ...state,
        banners: action.payload,
      };
    },
  }

};
