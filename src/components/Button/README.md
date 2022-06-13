# Button (待整理成後台專案)

## API

*號為必填
| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| children | - | Any | - |
| icon | 按鈕圖標樣式 | String | - |
| iconColor | 圖標顏色 | String | - |
| iconClassName | 圖標 className | String | - |
| className | - | String | - |
| size | 按鈕大小 | Object | buttonSizeEnum.DEFAULT |
| type | 外觀樣式 | Object | buttonTypeEnum.DEFAULT |
| disabled | 是否禁用 | Boolean | false |
| loading | 是否顯示載入中樣式 | Boolean | false |
| href | 連結(品牌前台使用) | String | - |
| target | 目標頁面(品牌前台使用) | String | '_self' |
| onClick | 目標頁面 | (event) => void | - |


## 範例: 表格動作欄位 (type 不同)
### icon="udi-eye" 請參照 @/components/IconsBackstage/Icon

```JSX
  <Tooltip title={<Trans i18nKey="button:view">view</Trans>}>
    <Button
      size={buttonSizeEnum.SMALL}
      type={buttonTypeEnum.LINK}
      icon="udi-eye"
      onClick={() => router.push(`view/${row.authGroupId}`)}
    />
  </Tooltip>
```
## 範例: 表格內的按鈕 (type 不同)

```JSX
  <Authorized authority="chaman_IMPORT">
    <Button
      size={buttonSizeEnum.SMALL}
      type={buttonTypeEnum.DEFAULT}
      className="emptyGrayBtn"
      onClick={() => router.push(`importCategory/${data.channelStoreNo}`)}
    >更新通路分類
    </Button>
  </Authorized>
```
