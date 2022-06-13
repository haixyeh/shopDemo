import { hasPrefixSuffix } from "antd/lib/input/ClearableLabeledInput";

export default {

  namespace: 'global',

  state: {
    userInfo: {
      email: 'haix.yeh@gmail.com',
      pwd: null,
      key: 7867861782
    }
  },

  subscriptions: {},

  effects: {
    // dispatch 用户信息
    *setUserInfo({ payload }, { put }) {
      // eslint-disable-line
      yield put({ type: 'set_userinfo', payload });
    }
  },

  reducers: {
    // 设置用户信息 userInfo的state
    set_userinfo(state, { payload }) {
      return { ...state, userInfo: payload };
    }
  }

};
