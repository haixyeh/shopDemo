import React from 'react';
// import { Route } from 'dva/router';
import { Link } from 'dva/router';
import { Switch } from 'dva/router';
import SubRoutes, { RedirectRoute } from '../../utils/SubRoutes';

const Index = ({routes, app}) => {
    return (
        <div>
            <p>聯繫我們</p>
            <div>
                <Link to="/about/contact/phone">電話</Link>
                <Link to="/about/contact/address">地址</Link>
            </div>
            <div>
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
