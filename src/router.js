import React from 'react';
import PropTypes from 'prop-types';
import { router} from 'dva';
import SubRoutes from './utils/SubRoutes';

const { Router, Switch } = router;
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
        path: '/category/:id',
        component: () => import('./pages/Category'),
        model: [import('./models/category')],
        redirect: true,
        isAuthority
      },
      {
        path: '/about',
        component: () => import('./pages/About'),
        model: [],
        routes: [
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
            path: '/about/history',
            model: [],
            component: () => import('./pages/About/History')
          },
          {
            path: '/about/orderingguide',
            model: [],
            component: () => import('./pages/About/OrderingGuide')
          },
          {
            path: '/about/event',
            model: [],
            component: () => import('./pages/About/Event')
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

RouterConfig.propTypes = {
  history: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired
}

export default RouterConfig;
