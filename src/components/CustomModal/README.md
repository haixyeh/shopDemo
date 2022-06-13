# Custom Table for CustomEditForm

## API

*號為必填
| 參數 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| *columns | 給表格的columns config | Object | - |
| *dataSource | 給表格的data object | Object | - |
| *pagination | Option Pagination | Boolean | - |
| *pageView | 是否為檢視頁 | Boolean | - |
| description | Option description | Element | - |
| tableAction | Option Table 的動作 | Element | - |
| disableTopScroll | 是否要加上上方滾動條 | Boolean | - |

`PS: 可以傳入任何原本Ant Design Table組件原本就可以吃的props`

---

## 範例

```JSX
<CustomTable
  columns={this.columns}
  dataSource={this.genRowData(subProdList)}
  pagination={false}
  description={
    <div>
      <Icon className={styles.descriptionIcon} type="info-circle" theme="filled" />{' '}
      <Typography.Text type="secondary">上限 50 項子商品</Typography.Text>
    </div>
  }
  tableAction={
    <div>
      <Button type="primary" ghost onClick={this.showDrawer}>
        加入商品
      </Button>
    </div>
  }
  pageView={pageState.pageView}
/>
```
