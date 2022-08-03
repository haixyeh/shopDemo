import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// 色系轉換
const lOffsetMap = {
  default: 0,
  lightest: 35,
  lighten: 15,
  darken: -15,
};

function parseHslValue(h, s, l, modifier = 'default') {
  return `hsl(${h}, ${s}%, ${l + lOffsetMap[modifier]}%)`;
}

// isLight: 預設主題設定（亮色系）
const lightTheme = {
  basicBackground: '#EEE',
  primaryColor: parseHslValue(0, 0, 0, 'default'),
  primaryColorText: parseHslValue(0, 0, 0, 'lightest'),
  primaryColorTextHover: parseHslValue(100, 100, 100, 'lightest'),
  // 商品主選單
  menuBackgroundColor: '#FFF',
  menuDropdownArrow: parseHslValue(0, 0, 0, 'lightest')
};

// 暗色系
const darkTheme = {
  basicBackground: '#000',
  primaryColor: '#FF0E0E',
  primaryColorText: '#FFF',
  primaryColorTextHover: '#EA4C4C',
  // 商品主選單
  menuBackgroundColor: '#232323',
  menuDropdownArrow: '#FFF'
}

/**
 * RyanThemeProvider 共用主題（共用樣式設定）
 * @param {Object} props
 * @param {Object} props.theme 主題設定
 * @param {node} props.children 內容
 * @return {node}
 */
function RyanThemeProvider(props) {
  const { children, theme, isDark } = props;

  const themeProxy = useMemo(
    () => ({
      ...(isDark ? darkTheme : lightTheme),
      ...theme,
      isDark
    }),
    [isDark, theme]
  );

  return <ThemeProvider theme={themeProxy}>{children}</ThemeProvider>;
}

RyanThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  isDark: PropTypes.bool
};

RyanThemeProvider.defaultProps = {
  children: null,
  theme: null,
  isDark: false
};

export default RyanThemeProvider;
