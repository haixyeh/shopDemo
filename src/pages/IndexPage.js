import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Layout } from 'antd';

// 引入路由需要的组件
import { Switch } from 'dva/router';
import SubRoutes, { RedirectRoute, NoMatchRoute } from '../utils/SubRoutes';

import NavBar from './NavBar';
import styles from './IndexPage.less';

const { Header, Content } = Layout;

function IndexPage(props) {
  const { routes, app } = props;

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <NavBar {...props} />
      </Header>
      <Content className={styles.content}>
        <Switch>
          {routes.map((route, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <SubRoutes key={i} {...route} app={app} />
          ))}
          {/* <Redirect to="/home" /> */}
          <RedirectRoute exact from="/" routes={routes} />
          {/* 輸入的Route不存在,跳轉到NoMatch */}
          <NoMatchRoute />
        </Switch>
      </Content>
    </Layout>
  );
}

IndexPage.propTypes = {
  routes: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired
};

export default connect()(IndexPage);
