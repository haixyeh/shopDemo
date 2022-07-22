import { TypeEnum, WidthTypeEnum } from '../../components/Banner';

export const firstSliderInfo = {
  banners: [
    {
      id: 1,
      url: 'https://seasalt.ai/',
      img: 'https://seasalt.ai/images/new/product.png',
    },
    {
      id: 2,
      url: 'https://tw.news.yahoo.com/%E8%8B%91%E8%A3%A1%E8%A4%87%E5%90%88%E5%BC%8F%E7%AB%A5%E8%A9%B1%E5%B0%8F%E9%8E%AE%EF%BC%8C%E5%93%88%E6%AF%94%E5%B1%8B%E3%80%81%E6%97%A5%E6%9C%AC%E9%B3%A5%E5%B1%85%E3%80%81%E8%AE%8A%E5%BD%A2%E9%87%91%E5%89%9B%E3%80%81%E6%AD%90%E6%B4%B2%E9%A2%A8%E8%BB%8A%E8%B6%85%E8%B7%B3tone%EF%BC%8C%E5%9C%92%E5%8D%80%E5%85%A7%E9%82%84%E6%9C%89%E4%BD%8F%E5%AE%BF%E8%B7%9F%E9%9C%B2%E7%87%9F-163648116.html',
      img: 'https://s.yimg.com/ny/api/res/1.2/mBGAF1VaB8itY8JVFLoM3g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2022-04/b76a8740-b36a-11ec-9fe2-59b84ebad34f',
    },
    {
      id: 3,
      url: 'https://bravel.yas.com.hk/wp-content/uploads/2020/03/80745625_1330225683814530_2522022551606001664_o.jpg',
      img: 'https://bravel.yas.com.hk/wp-content/uploads/2020/03/80745625_1330225683814530_2522022551606001664_o.jpg',
    },
  ],
  dynamicMode: TypeEnum.SLIDER,
}

export const secondSliderInfo = {
  banners: [
    {
      id: 1,
      url: 'https://seasalt.ai/',
      img: 'https://seasalt.ai/images/new/product.png',
    },
    {
      id: 2,
      url: 'https://media.zenfs.com/zh-tw/newtalk.tw/89a679eaa4d833692e806824bf63ae4e',
      img: 'https://media.zenfs.com/zh-tw/newtalk.tw/89a679eaa4d833692e806824bf63ae4e',
    },
    {
      id: 3,
      url: 'https://bravel.yas.com.hk/wp-content/uploads/2020/03/80745625_1330225683814530_2522022551606001664_o.jpg',
      img: 'https://bravel.yas.com.hk/wp-content/uploads/2020/03/80745625_1330225683814530_2522022551606001664_o.jpg',
    },
    {
      id: 4,
      url: 'https://www.into-you.jp/wp-content/uploads/2017/08/okayama2.jpg',
      img: 'https://www.into-you.jp/wp-content/uploads/2017/08/okayama2.jpg',
    },
  ],
  dynamicMode: TypeEnum.FADE,
  moduleMaxWidth: WidthTypeEnum.CUSTOMIZE,
  moduleWidth: 420,
  bgColor: "#2975CE"
}



export default firstSliderInfo;