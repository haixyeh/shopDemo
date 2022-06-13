import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { DndProvider } from "react-dnd";  
import { HTML5Backend } from "react-dnd-html5-backend";
import style from './index.less';
import Logo from '../../assets/icon.png';
import Container from './Container';
import { sideBarItems } from './constants';
import SideBarItem from './SideBarItem';

// eslint-disable-next-line compat/compat
const ajaxSimulator = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('異步資料', 2000);
  }, 2000)
});

const WebSet = (props) => {
    const [txt, setTxt] = useState('隨機數字顯示');
    const { dispatch } = props;
    const { text = null, name = '', count = 0 } = props;

    useEffect(() => {
      dispatch({
        type: "webSet/getList"
      }) 

      ajaxSimulator().then((res) => {
        setTxt(res);
      })
    }, [txt, text, name, count])


    return (
      <div className={style.webSet}>
        <DndProvider backend={HTML5Backend}>
          <div className={style.header}>
            <div className={style.logo}>
              <img src={Logo} alt="LOGO" />
            </div>
          </div>

          <div className={style.sidebar}>
            <div className={style.inner}>
              <div className={style.content}>
                {Object.keys(sideBarItems).map((sideBarItem) => (
                  <SideBarItem key={sideBarItems[sideBarItem].id} data={sideBarItems[sideBarItem]} />
                ))}
              </div>
            </div>
          </div>

          <div className={style.content}>
            <div className={style.inner}>
              <Container />
            </div>
          </div>
        </DndProvider>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    text: state.webSet?.text,
    title: state.webSet.name,
    count: state.webSet.count,
    loading: state.webSet.loading
  }
}
export default connect(mapStateToProps)(WebSet);
