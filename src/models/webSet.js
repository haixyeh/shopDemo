
import { delay } from 'redux-saga';

export default {
    namespace: 'webSet',
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
        *setYourName({ payload }, { call, put}) {
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
            state.count ++

            return { ...state, ...action.payload }
        },
        setName(state, action) {
            console.log(action.payload)
            return { ...state, ...action.payload };
        },
        overAddCount(state, action) {
            return { ...state, ...action.payload };
        }
    },
};
