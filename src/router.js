import React from 'react';
import { Router, Switch } from 'dva/router';
import SubRoutes from './utils/SubRoutes';

// 路由的開關
const isAuthority = true;

const RouteConfig = [
  {
    path: '/',
    component: () => import('./pages/IndexPage'),
    model: [],
    routes: [
      {
        path: '/home',
        component: () => import('./pages/Home'),
        model: [import('./models/home')],
        redirect: true,
        isAuthority
      },
      {
        path: '/webSet',
        component: () => import('./pages/WebSet'),
        model: [import('./models/webSet')],
        redirect: true,
        isAuthority
      },
      {
        path: '/menus',
        component: () => import('./pages/Menus'),
        model: [import('./models/menus')],
        isAuthority
      },
      {
        path: '/admin',
        component: () => import('./pages/Admin'),
        model: [import('./models/admin')],
        isAuthority
      },
      {
        path: '/about',
        component: () => import('./pages/About'),
        model: [],
        routes: [
          {
            path: '/about/history',
            model: [],
            component: () => import('./pages/About/History')
          },
          {
            path: '/about/contact',
            model: [],
            component: () => import('./pages/About/Contact'),
            routes: [
              {
                path: '/about/contact/phone',
                model: [],
                component: () => import('./pages/About/Phone')
              },
              {
                path: '/about/contact/address',
                model: [],
                component: () => import('./pages/About/Address')
              }
            ]
          },
          {
            path: '/about/orderingguide',
            model: [],
            component: () => import('./pages/About/OrderingGuide')
          },
          {
            path: '/about/delivery',
            model: [],
            component: () => import('./pages/About/Delivery')
          }
        ]
      },
      {
        path: '/login',
        component: () => import('./pages/Users/Login'),
        model: []
      },
      {
        path: '/register',
        component: () => import('./pages/Users/Register'),
        model: []
      }
    ]
  }
];

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {RouteConfig.map((route, i) => (
          // 調用封裝組件
          // eslint-disable-next-line react/no-array-index-key
          <SubRoutes key={i} {...route} app={app} />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
