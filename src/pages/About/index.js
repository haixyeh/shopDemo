import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { router } from 'dva';
import styled from './index.less';
import SubRoutes, { RedirectRoute } from '../../utils/SubRoutes';

const { TabPane } = Tabs;
const { Switch } = router;

const onChangeTabs = ({key, history, pathname}) => {
  if (key !== pathname) {
    history.push(key);
  }
}

const About = ({ routes, app, history, location: { pathname } }) => {
  return (
    <div className={styled.about}>
      <Tabs
        tabPosition="left"
        className={styled.tabs}
        onChange={(key) => onChangeTabs({key, history, pathname})}
        activeKey={pathname}
      >
        <TabPane tab="聯繫我們" key="/about/contact" />
        <TabPane tab="最新活動" key="/about/event" />
        <TabPane tab="點餐文檔" key="/about/orderingguide" />
        <TabPane tab="歷史訂餐" key="/about/history" />
      </Tabs>
      <div className={styled.routes}>
        <Switch>
          {routes.map((route, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <SubRoutes key={i} {...route} app={app} />
          ))}
          {/* <Redirect to="/home" /> */}
          <RedirectRoute exact from="/about" routes={routes} />
        </Switch>
      </div>
    </div>
        
  );
}

About.propTypes = {
  routes: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default About;
