import React from 'react';
import { Route, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import { connect } from 'dva';
import NoMatch from '../components/NoMatch';


// 解决動態加載路由組件
const dynamicCom = (app, models, component, routes, isAuthority, userInfo) =>
  dynamic({
    app,
    models: () => models,
    component: () =>
      component().then(res => {
        if (isAuthority) {
          // 判断userInfo.id 是否有内容
          if (!userInfo.key || !userInfo.email) {
            return () => <Redirect to="/login" />;
          }
        }
        const Component = res.default || res;
        return props =>{
          return <Component {...props} app={app} routes={routes} />
        };
      })
  });

function SubRoutes({ path, routes, component, app, model, isAuthority, userInfo }) {
  return (
    <Route
      path={path}
      component={dynamicCom(
        app,
        model,
        component,
        routes,
        isAuthority,
        userInfo
      )}
    />
  );
}

// 重定向封装组件
export function RedirectRoute({ routes, from, exact }) {
  const routeR = routes.filter(item => {
    return item.redirect;
  });

  const to = routeR.length ? routeR[0].path : routes[0].path;
  return <Redirect exact={exact} from={from} to={to} />;
}

// NoMatchRoute
export function NoMatchRoute({ status = 404 }) {
  return <Route render={props => <NoMatch {...props} status={status} />} />;
}

// 全域資訊connect
export default connect(({ global }) => ({
  userInfo: global.userInfo
}))(SubRoutes);
