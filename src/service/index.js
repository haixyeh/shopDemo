import axios from "axios";
import evnMap from "../../config/evn";

/* eslint-disable compat/compat */
const banners = [
  {
    id: 1,
    url: 'https://www.bastillepost.com/hongkong/article/7367422-%E7%9B%A4%E9%BB%9Ekakao-friends-ryan%E5%91%A8%E9%82%8A%E5%95%86%E5%93%81-%E6%9E%95%E9%A0%AD-%E9%A0%AD%E5%B8%B6-%E5%9E%83%E5%9C%BE%E6%A1%B6%E5%8B%81%E5%8F%AF%E6%84%9B%EF%BC%81',
    img: 'https://cf.creatrip.com/original/blog/8482/0lwy8w14dhb09zgzha67vdu456ntqpha.png?d=1200&q=80&f=webp',
  },
  {
    id: 2,
    url: 'https://dappei.com/articles/3185',
    img: 'https://images.dappei.com/uploads/article_image/image/42814/medium_982b0ed057990a03.jpg',
  },
  {
    id: 3,
    url: 'https://bravel.yas.com.hk/wp-content/uploads/2020/03/80745625_1330225683814530_2522022551606001664_o.jpg',
    img: 'https://s.yimg.com/ny/api/res/1.2/lbEGPMkfN4h3RIKnmYZdOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTI4Mg--/https://s.yimg.com/uu/api/res/1.2/_2sJy5Plkk6lHn42iOxQDA--~B/aD0yNjQ7dz02MDA7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/zh-Hant-TW/homerun/tc.koreastardaily.com/e31f2e949a4a8801768fe7b5f01794e9',
  },
]

/**
 *  * 以下為模擬API行為
 * @param {*} data 
 * @param {*} isError 
 */
const fakeApiFetch = (data, isError) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (!isError) {
      resolve(data);
      return;
    }
    reject(new Error("api don't work"));
  }, 600);
});
/**
 * getBannerInfo 輪播圖資訊
 * */
export async function getBannerInfo(needError) {
  return fakeApiFetch(banners, needError);
}

export async function getMenuData({ url }) {
  return axios.get(`mock/${evnMap[process.env.NODE_ENV].ROOT_PATH}${url}`)
    .then(res => {
      return res;
    })
    .catch(error => {
      console.error("getMenuData api錯誤了", error);
    })
}

export default { getBannerInfo };