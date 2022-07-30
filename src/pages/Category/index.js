import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import style from './index.less';
import MainGoodsMenu from '../../components/MainGoodsMenu';



// eslint-disable-next-line compat/compat
const ajaxSimulator = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('異步資料', 2000);
  }, 2000)
});

const Category = (props) => {
  const [txt, setTxt] = useState('隨機數字顯示');
  const { dispatch } = props;
  const { match, text = null, name = '', count = 0 } = props;
  const { params: { id } } = match;
  
  useEffect(() => {
    dispatch({
      type: "category/getList"
    }) 

    ajaxSimulator().then((res) => {
      setTxt(res);
    })
  }, [dispatch, txt, text, name, count]);


  return (
    <div className={style.category}>
      {/* 商品分類 */}
      <MainGoodsMenu />
      { text }
      id: { id }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.category?.text,
    title: state.category.name,
    count: state.category.count,
    loading: state.category.loading
  }
}
export default connect(mapStateToProps)(Category);
