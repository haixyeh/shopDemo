/* eslint-disable compat/compat */
import React from 'react';
import { Spin, Icon as Icons } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Icon from '../../IconsBackstage/Icon';
import styles from './index.less';

export const buttonSizeEnum = {
  /** 小 */
  SMALL: 'small',
  /** 預設(中) */
  DEFAULT: 'default',
  /** 大 */
  LARGE: 'large',
};

export const buttonTypeEnum = {
  /** 主題色 */
  PRIMARY: 'primary',
  /** 無框透明底 */
  LINK: 'link',
  /** 白底灰框 */
  DEFAULT: 'default',
};

const classNameMap = {
  type: {
    [buttonTypeEnum.PRIMARY]: `ant-btn ${styles.primary}`,
    [buttonTypeEnum.DEFAULT]: `ant-btn ${styles.default}`,
    [buttonTypeEnum.LINK]: `ant-btn ${styles.link}`,
  },
  size: {
    [buttonSizeEnum.DEFAULT]: '', // NOTE: 有預設寬高，不用給 className
    [buttonSizeEnum.SMALL]: `ant-btn-sm ${styles.small}`,
    [buttonSizeEnum.LARGE]: `ant-btn-lg ${styles.large}`,
  },
};

function Button(props) {
  const {
    type,
    size,
    className,
    disabled,
    loading,
    children,
    icon,
    iconColor,
    iconClassName,
    href,
    target,
    onClick,
    block,
    ...restProps
  } = props;

  const actIcon = <Icons type="loading" className={styles.icon} style={{ fontSize: 24 }} />;
  return (
    <button
      {...restProps}
      type="button"
      className={classNames(
        styles.button,
        classNameMap.type[type],
        classNameMap.size[size],
        block && 'ant-btn-block',
        disabled || loading ? styles.disabled : '',
        className
      )}
      disabled={disabled || loading}
      onClick={() => {
        if (href) {
          if (target === '_blank') {
            window.open(href);
          } else {
            window.location.assign(href);
          }
        } else if (typeof onClick === 'function') {
          onClick();
        }
      }}
    >
      {loading && <Spin indicator={actIcon} spinning={loading} className={styles.spinStyle} />}
      {icon && !loading && (
        {/* <Icon type={icon} color={iconColor} className={`${styles.icon} ${iconClassName}`} /> */}
      )}
      {!!children && <span className={styles.text}>{children}</span>}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  /** 顯示 icon (請輸入 icon type, 參考 `@/components/common/Icon`) */
  icon: PropTypes.string,
  /** Icon color */
  iconColor: PropTypes.string,
  /** icon 額外 className */
  iconClassName: PropTypes.string,
  className: PropTypes.string,
  /** 大小 */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(Object.keys(buttonSizeEnum))]),
  /** 是否禁用 */
  disabled: PropTypes.bool,
  // /** HTML 原生 button type 屬性值 */
  // htmlType: PropTypes.string, // NOTE: eslint react/button-has-type 不給放變數，強制要求放純字串
  /** 是否顯示載入中樣式 */
  loading: PropTypes.bool,
  /** 外觀樣式 */
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(Object.keys(buttonTypeEnum))]),
  /** 連結 (與 `<a href />` 相同)
   *
   * NOTE: 如果有定義 href，則 onClick 無效
   */
  href: PropTypes.string,
  /** href 目標頁面 (與 `<a target />` 相同) ref: https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/a */
  target: PropTypes.string,
  /** 點擊事件
   *
   * NOTE: 如果有定義 href，則 onClick 無效
   */
  onClick: PropTypes.func,
  block: PropTypes.bool,
};
Button.defaultProps = {
  children: undefined,
  icon: undefined,
  iconColor: undefined,
  iconClassName: undefined,
  className: undefined,
  size: buttonSizeEnum.DEFAULT,
  disabled: false,
  loading: false,
  type: buttonTypeEnum.DEFAULT,
  href: undefined,
  target: '_self',
  onClick: undefined,
  block: false,
};
export default Button;
