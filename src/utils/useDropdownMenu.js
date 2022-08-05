import { useState, useCallback } from 'react';

/**
 * ProductMenu, Navigation 專用控制 hook
 * ```jsx
 * const { show, bindEvent, bindDropdownMenu } = useDropdownMenu()
 *
 * <div>
 *   <p {...bindEvent()}>Hover me<p>
 *   <p onClick={show}>Click Open</p>
 *   <Navigation {...bindDropdownMenu()}>
 * </div>
 * ```
 *
 * @returns {function} show - 顯示選單
 * @returns {function} hide - 隱藏選單
 * @returns {function} bindEvent - 綁定 onMouseEnter, onMouseLeave event
 * @returns {function} bindDropdownMenu - 綁定狀態至 MegaMenu or Navigation
 * @returns {boolean} visible - 選單顯示狀態
 */
export default function useDropdownMenu() {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => setVisible(true), []);
  const hide = useCallback(() => setVisible(false), []);
  const bindEvent = useCallback(
    () => ({
      onMouseEnter: show,
      onMouseLeave: hide,
    }),
    [show, hide]
  );

  const bindDropdownMenu = useCallback(() => ({ active: visible }), [visible]);

  return { show, hide, bindEvent, bindDropdownMenu, visible };
}
