import React from 'react';
import { Tabs } from 'antd';
import { Switch } from 'dva/router';
import style from './index.scss';
import SubRoutes, { RedirectRoute } from '../../utils/SubRoutes';

const { TabPane } = Tabs;

const onChangeTabs = ({key, history, pathname}) => {
  if (key !== pathname) {
    history.push(key);
  }
}

const Index = ({ routes, app, history, location: { pathname } }) => {
  return (
    <div className={style.about}>
      <Tabs
        tabPosition="left"
        className={style.tabs}
        onChange={(key) => onChangeTabs({key, history, pathname})}
        activeKey={pathname}
      >
        <TabPane tab="歷史訂餐" key="/about/history" />
        <TabPane tab="聯繫我們" key="/about/contact" />
        <TabPane tab="點餐文檔" key="/about/orderingguide" />
        <TabPane tab="快遞信息" key="/about/delivery" />
      </Tabs>
      <div className={style.routes}>
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

export default Index;
