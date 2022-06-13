import React, { useState } from 'react';
import { Tabs } from 'antd';
import style from './index.scss';
import { Switch } from 'dva/router';
import SubRoutes, { RedirectRoute, NoMatchRoute } from '../../utils/SubRoutes';
import AboutContext from './context/AboutContext';

const { TabPane } = Tabs;

const onChangeTabs = ({key, history, pathname}) => {
    if (key !== pathname) {
        history.push(key);
    }
}

const Index = ({ routes, app, history, location: { pathname } }) => {
    const [text, setText] = useState('About');
    return (
        <div className={style.about}>
            <Tabs
                tabPosition="left"
                className={style.tabs}
                onChange={(key, tab) => onChangeTabs({key, history, pathname})}
                activeKey={pathname}
            >
                <TabPane tab="歷史訂餐" key="/about/history"></TabPane>
                <TabPane tab="聯繫我們" key="/about/contact"></TabPane>
                <TabPane tab="點餐文檔" key="/about/orderingguide"></TabPane>
                <TabPane tab="快遞信息" key="/about/delivery"></TabPane>
            </Tabs>
            {text}
            <div className={style.routes}>
                <Switch>
                        {routes.map((route, i) => (
                            <SubRoutes key={i} {...route} app={app} />
                        ))}
                        {/* <Redirect to="/home" /> */}
                    
                    <RedirectRoute exact={true} from={'/about'} routes={routes} />
                </Switch>
            </div>
        </div>
        
    );
}

export default Index;
