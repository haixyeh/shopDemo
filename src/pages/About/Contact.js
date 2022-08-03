import React from 'react';
import PropTypes from 'prop-types';
import { router } from 'dva';
import SubRoutes, { RedirectRoute } from '../../utils/SubRoutes';

const { Link, Switch } = router;

const Contact = ({ routes, app }) => {
  return (
    <div>
      <p>聯繫我們</p>
      <div>
        <Link to="/about/contact/phone">電話</Link>
        &nbsp;|&nbsp;
        <Link to="/about/contact/address">地址</Link>
      </div>
      <div>
        <Switch>
          {routes.map((route) => {
            return (
              <SubRoutes key={route.path} {...route} app={app} />
            )
          })}
          <RedirectRoute exact from="/about" routes={routes} />
        </Switch>
      </div>
    </div>
  );
}

Contact.propTypes = {
  routes: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired
}

export default Contact;
