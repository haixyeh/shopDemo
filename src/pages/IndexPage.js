import React, { useEffect, useState, Suspense, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
// 引入路由需要的组件
import { router, useDispatch, useSelector } from 'dva';
import RyanThemeProvider from '../components/RyanThemeProvider/RyanThemeProvider';
import SubRoutes, { RedirectRoute, NoMatchRoute } from '../utils/SubRoutes';

import ScrollToTop from '../components/ScrollToTop';
import TopNavBar from '../components/TopNavBar';
import lessStyled from './IndexPage.less';

const { Header, Content } = Layout;
const { Switch } = router;

function Main(props) {
  const { isDark, setIsDark, routes, app } = props;
  return (
    <Layout className={lessStyled.layout}>
      {/* theme 傳入該版面樣式 */}
      <RyanThemeProvider theme={{}} isDark={isDark}>
        <Header className={lessStyled.topHeader}>
          <TopNavBar
            {...props}
            toggleTheme={() => {
              setIsDark(preIsDark => {
                localStorage.setItem('isDark', !preIsDark);
                return !preIsDark;
              });
            }}
          />
        </Header>
        <Content 
          className={classNames(lessStyled.content, 'clearfix')}
          style={{ background: isDark ? '#4C4C4C' : '#FFF' }}
        >
          <Switch>
            {routes.map((route, i) => (
            // eslint-disable-next-line react/no-array-index-key
              <SubRoutes key={i} {...route} app={app} />
            ))}
            <RedirectRoute exact from="/" routes={routes} />
            {/* 輸入的Route不存在,跳轉到NoMatch */}
            <NoMatchRoute />
          </Switch>
        </Content>
      </RyanThemeProvider>
      <ScrollToTop />
    </Layout>
  );
}

Main.propTypes = {
  routes: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired,
  isDark: PropTypes.bool.isRequired,
  setIsDark: PropTypes.func.isRequired
};


function IndexPage(props) {
  const { routes, app } = props;
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') ? localStorage.getItem('isDark') === 'true' : true);
  const { i18n } = useTranslation();
  const i18nRef = useRef(i18n.language);
  const dispatch = useDispatch();

  const { menus } = useSelector(
    ({ global }) => ({
      menus: global.menus,
    })
  );

  useEffect(() => {
    if (i18n.language === i18nRef.current && menus.length > 0) return;
    dispatch({
      type: 'global/fetchMenu', payload: { lang: i18n.language }
    })
    i18nRef.current = i18n.language;
  }, [dispatch, i18n.language, menus.length]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Main
        isDark={isDark}
        setIsDark={setIsDark}
        routes={routes}
        app={app}
      />
    </Suspense>
  );
}

IndexPage.propTypes = {
  routes: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired
};

export default IndexPage;
