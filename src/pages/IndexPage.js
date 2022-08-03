import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
// 引入路由需要的组件
import { router } from 'dva';
import RyanThemeProvider from '../components/RyanThemeProvider/RyanThemeProvider';
import SubRoutes, { RedirectRoute, NoMatchRoute } from '../utils/SubRoutes';

import TopNavBar from '../components/TopNavBar';
import lessStyled from './IndexPage.less';

const { Header, Content } = Layout;
const { Switch } = router;

function IndexPage(props) {
  const { routes, app } = props;
  
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true');

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
  }, [isDark]);

  return (
    <Layout className={lessStyled.layout}>
      {/* theme 傳入該版面樣式 */}
      <RyanThemeProvider theme={{}} isDark={isDark}>
        <Header className={lessStyled.topHeader}>
          <TopNavBar {...props} toggleTheme={() => setIsDark(!isDark)} />
        </Header>
        <Content className={lessStyled.content} style={{ background: isDark ? '#4C4C4C' : '#FFF' }}>
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
      </RyanThemeProvider>
    </Layout>
  );
}

IndexPage.propTypes = {
  routes: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired
};

export default (IndexPage);
