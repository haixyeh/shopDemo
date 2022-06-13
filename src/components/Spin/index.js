import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.less';

/** 解決: 自製SPIN
 */
const Spin = props => {
  const { children, isShow } = props;

  const total = 8;
  const unread = 1;
  const percentage = unread / total; // 算出百分比
  const strokeDashoffset = 565.2 - 565.2 * percentage; // 未完成占圓周長的多少

  if (isShow) {
    return (
      <>
        <div
          className={`${styles.spinPositioning} 
      ${children && styles.spinPositioningFloat}`}
        >
          <div className={styles.spin}>
            <div className={styles.imgKeyframes} />
            <div className={styles.arcKeyframes}>
              <svg className={styles.arcSvg} width="214" height="214">
                <defs>
                  <linearGradient
                    id="myGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                    spreadMethod="pad"
                  >
                    <stop offset="0%" stopColor="#1890ff" stopOpacity="1" />
                    <stop offset="50%" stopColor="#1890ff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1890ff" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path
                  d="M 107,107m 0, -90 a 90,90 0 1 1 0,180 a 90,90 0 1 1 0,-180"
                  fill="transparent"
                  strokeLinecap="round"
                  stroke="url(#myGradient)"
                  strokeWidth="8px"
                  strokeDasharray="565.2px ,565.2px"
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
            </div>
          </div>
        </div>
        {children}
      </>
    );
  }
  return children;
};

Spin.propTypes = {
  children: PropTypes.node,
};

Spin.defaultProps = {
  children: '',
};

export default Spin;
