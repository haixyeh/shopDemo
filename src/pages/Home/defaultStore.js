import { TypeEnum } from '../../components/Banner';

export const bannerInfo = {
  banners: [
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
  ],
  dynamicMode: TypeEnum.SLIDER,
}

export const mainMenuDefault = [
  {
    mainId: 1,
    parentId: 1,
    menuCategory: 'MAIN',
    folderSwitch: 'NO',
    title: '首頁',
    link: 'home',
  },
  {
    mainId: 12,
    parentId: 12,
    menuCategory: 'MAIN',
    folderSwitch: 'YES',
    title: '選單',
    link: '',
    linkData: '',
    linkDetail: null,
    sub: [
      {
        mainId: 123,
        parentId: 123,
        menuCategory: 'SUB',
        folderSwitch: 'NO',
        title: '子選單',
        link: '',
        linkData: '',
        linkDetail: null,
      },
      {
        mainId: 124,
        parentId: 124,
        menuCategory: 'SUB',
        folderSwitch: 'NO',
        title: '未命名 1',
        link: '',
        linkData: '',
        linkDetail: null,
      },
    ],
  },
  {
    mainId: 13,
    parentId: 0,
    menuCategory: 'MAIN',
    folderSwitch: 'NO',
    title: '全站',
    link: 'setCategoryView',
    linkData: '0',
    linkDetail: {
      text: '商品分類',
      value: 'setCategoryView',
      data: {
        meta: {
          title: '商品分類',
          url: '',
          urlAndroid: '',
          urlIos: '',
        },
        list: [
          {
            title: 'Ryan',
            url: '/category/1',
            link: 'setCategory',
            linkData: '1',
            sub: [],
          },
          {
            title: '家電',
            url: '/category/2',
            link: 'setCategoryView',
            linkData: '2',
            sub: [
              {
                title: '冰箱',
                url: '/category/21',
                link: 'setCategory',
                linkData: '21',
                sub: [],
              },
              {
                title: '冰櫃/冷凍櫃',
                url: '/category/22',
                link: 'setCategory',
                linkData: '22',
                sub: [],
              },
              {
                title: '冷氣/暖氣',
                url: '/category/23',
                link: 'setCategory',
                linkData: '23',
                sub: [],
              },
              {
                title: '除濕機',
                url: '/category/24',
                link: 'setCategory',
                linkData: '24',
                sub: [],
              },
              {
                title: '掃地機',
                url: '/category/25',
                link: 'setCategory',
                linkData: '25',
                sub: [],
              },
            ],
          },
          {
            title: '3C',
            url: '/category/3',
            link: 'setCategoryView',
            linkData: '3',
            sub: [
              {
                title: '手機/平板',
                url: '/category/31',
                link: 'setCategory',
                linkData: '31',
                sub: [],
              },
              {
                title: '手機/平板配件',
                url: '/category/32',
                link: 'setCategory',
                linkData: '32',
                sub: [],
              },
              {
                title: '相機/相機配件',
                url: '/category/33',
                link: 'setCategory',
                linkData: '33',
                sub: [],
              },
              {
                title: '數位週邊',
                url: '/category/34',
                link: 'setCategory',
                linkData: '34',
                sub: [],
              },
            ],
          },
          {
            title: '休閒服',
            url: '/category/40',
            link: 'setCategoryView',
            linkData: '40',
            sub: [],
          },
          {
            title: '精品',
            url: '/category/49',
            link: 'setCategoryView',
            linkData: '49',
            sub: [],
          },
          {
            title: '休閒服',
            url: '/category/62',
            link: 'setCategoryView',
            linkData: '62',
            sub: [
              {
                title: '歐美品牌',
                url: '/category/63',
                link: 'setCategoryView',
                linkData: '63',
                sub: [
                  {
                    title: 'FILA',
                    url: '/category/67',
                    link: 'setCategory',
                    linkData: '67',
                    sub: [],
                  },
                  {
                    title: 'CK',
                    url: '/category/66',
                    link: 'setCategory',
                    linkData: '66',
                    sub: [],
                  },
                  {
                    title: 'ARMANI EXCHANGE',
                    url: '/category/65',
                    link: 'setCategory',
                    linkData: '65',
                    sub: [],
                  },
                  {
                    title: 'America Eagle',
                    url: '/category/64',
                    link: 'setCategory',
                    linkData: '64',
                    sub: [],
                  },
                ],
              },
              {
                title: '休閒服飾',
                url: '/category/68',
                link: 'setCategoryView',
                linkData: '68',
                sub: [
                  {
                    title: '北歐小刺蝟',
                    url: '/category/70',
                    link: 'setCategory',
                    linkData: '70',
                    sub: [],
                  },
                  {
                    title: 'ONEDER旺達',
                    url: '/category/69',
                    link: 'setCategory',
                    linkData: '69',
                    sub: [],
                  },
                  {
                    title: 'Aaron1982',
                    url: '/category/71',
                    link: 'setCategory',
                    linkData: '71',
                    sub: [],
                  },
                ],
              },
            ],
          },
          {
            title: '書籍類',
            url: '/category/43',
            link: 'setCategoryView',
            linkData: '43',
            sub: [
              {
                title: '文學小說',
                url: '/category/44',
                link: 'setCategoryView',
                linkData: '44',
                sub: [
                  {
                    title: '英國翻譯小說',
                    url: '/category/45',
                    link: 'setCategory',
                    linkData: '45',
                    sub: [],
                  },
                ],
              },
            ],
          },
          {
            title: '廚房系列',
            url: '/category/88',
            link: 'setCategoryView',
            linkData: '88',
            sub: [
              {
                title: '微波爐',
                url: '/category/90',
                link: 'setCategory',
                linkData: '90',
                sub: [],
              },
              {
                title: '氣炸鍋',
                url: '/category/89',
                link: 'setCategory',
                linkData: '89',
                sub: [],
              },
            ],
          },
          {
            title: '生活家具',
            url: '/category/93',
            link: 'setCategoryView',
            linkData: '93',
            sub: [
              {
                title: ' 沙發',
                url: '/category/92',
                link: 'setCategory',
                linkData: '92',
                sub: [],
              },
            ],
          },
          {
            title: '櫃子',
            url: '/category/94',
            link: 'setCategoryView',
            linkData: '94',
            sub: [
              {
                title: '衣櫃/系統櫃',
                url: '/category/95',
                link: 'setCategory',
                linkData: '95',
                sub: [],
              },
            ],
          },
          {
            title: '防疫用品',
            url: '/category/186',
            link: 'setCategoryView',
            linkData: '186',
            sub: [],
          },
          {
            title: '測試第二分類用',
            url: '/category/187',
            link: 'setCategory',
            linkData: '187',
            sub: [],
          },
        ],
      },
    },
    sub: [],
  },
  {
    mainId: 11,
    parentId: 11,
    menuCategory: 'MAIN',
    folderSwitch: 'NO',
    title: '最新活動',
    link: 'newEventView',
    linkData: '',
    linkDetail: {
      text: '最新活動',
      value: 'newEventView',
      data: {
        meta: {
          title: '最新活動',
          url: '',
          urlAndroid: '',
          urlIos: '',
        },
        list: [],
      },
    },
    sub: [],
  },
];


export default {
  bannerInfo,
  mainMenuDefault
};