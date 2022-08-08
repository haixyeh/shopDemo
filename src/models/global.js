import { getBannerInfo, getMenuData } from '../service';

export default {
  namespace: 'global',
  state: {
    userInfo: {
      email: 'haix.yeh@gmail.com',
      pwd: null,
      key: 7867861782
    },
    banners: [],
    menus: []
  },
  subscriptions: {},
  effects: {
    // dispatch 用户信息
    *setUserInfo({ payload }, { put }) {
      // eslint-disable-line
      yield put({ type: 'set_userinfo', payload });
    },
    *fetchBanner(_, { call, put }) {
      const response = yield call(getBannerInfo);
      yield put({
        type: 'setBannerInfo',
        payload: response,
      });
    },
    *fetchMenu({ payload }, { call, put }) {
      const { lang } = payload;
      const response = yield call(() => getMenuData({ url: `lang/${lang}/menuList.json` }));
      yield put({
        type: 'setMenuInfo',
        payload: response.data,
      });
    }
  },
  reducers: {
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
    setMenuInfo(state, action) {
      return {
        ...state,
        menus: action.payload,
      };
    },
  }

};
