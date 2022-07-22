import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Button, Input } from 'antd';
import style from './index.scss';

// eslint-disable-next-line compat/compat
const ajaxSimulator = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('異步資料', 2000);
  }, 2000);
})

const Menus = (props) => {
  const [txt, setTxt] = useState('隨機數字顯示');
  const { dispatch } = props;
  const { text = null, name = '', count = 0, loading = false} = props;
  useEffect(() => {
    dispatch({
      type: "home/getList"
    }) 

    ajaxSimulator().then((res) => {
      setTxt(res);
    })
  }, [dispatch, txt, text, name, count])

  const addCount = () => {
    dispatch({
      type: "home/addAfterSecond"
    }) 
  }
  const setYourName = (e) => {
    dispatch({
      type: "home/setYourName",
      payload: {'name': e.target.value}
    }) 
  }
    

  return (
    <>
      <div className={style.menus}>
        <div className={style.background}>
          <h1>歡迎大家來到Ryan pizza</h1>
          <h2>喝喝喝喝喝喝!~~~ {loading && '加載中，請稍候'}</h2>
          <p>{text} - {name}</p>
          <p>{count}</p>
          <Input placeholder="Enter your names" onChange={setYourName} />
        </div>
        <Button type="button" onClick={addCount} disabled={loading}>按我加1</Button>
        <div>
          {txt}
        </div>
        <Button
          type="button"
          onClick={() => {
            setTxt(Math.floor(Math.random() * 10));
          }}
        >隨機產生數字
        </Button>
      </div>
    </>

  );
}

const mapStateToProps = (state) => {
  return {
    text: state.menus?.text,
    name: state.menus.name,
    count: state.menus.count,
    loading: state.menus.loading
  }
}

export default connect(mapStateToProps)(Menus);
