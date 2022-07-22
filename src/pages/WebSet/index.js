import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import style from './index.less';


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
  }, [dispatch, txt, text, name, count]);


  return (
    <div className={style.webSet}>
      { text }
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
