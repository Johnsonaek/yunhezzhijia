## 调用方式

- 视图调用

```html
<v-tabs
  :tabs="[1,2,3,4]"
  height="45px"
  v-model="activeTab"
  color="#333"
  activeColor="#1abc9c"
  fontSize="14px"
  activeFontSize="16px"
  :lineHeight="4px"
  :lineScale="0.8"
  lineColor="#1abc9c"
/>
```

- js 调用

```js
import vTabs from '@/components/v-tabs'
export default {
  components: {
    vTabs,
  },
  data() {
    activeTab: 0
  },
}
```

- 参数说明

|      参数       |       类型       | 默认值  |   说明   |
| :-------------: | :--------------: | :-----: | :----------: |
|      value      | String 或 Number |    0    |     必传     |
|      tabs       |      Array       |   []    |  tabs 数量   |
|      height       |      String       |   '45px'    |  tab 高度   |
| backgroundColor |      String      |   ''    |   选中背景   |
|  borderRadius   |      String      |   5px   |     圆角     |
|      color      |      String      | #333333 | 默认文字颜色 |
|   activeColor   |      String      | #333333 | 选中文字颜色 |
|    fontSize     |      String      |  14px   | 默认文字大小 |
| activeFontSize  |      String      |  14px   | 选中文字大小 |
|    lineScale    |      Number      |   0.6   |  下划线缩放  |
|   lineHeight    | [Number, String] |    3    |  下划线高度  |
|    lineColor    |      Sring       | #007AFF |  下划线颜色  |


## 事件

|事件名称|参数|
|:-----:|:-----:|
|@change|activeTab|


## 更新日志

### 2020-06-09

1. 修复小程序端选中的下划线不显示问题
2. 新增 tab 高度设置
3. `lineHeight` 修改为只支持 `String` 方式

### 2020-06-11

1. 添加 `change` 事件
2. 修复插件内容问题
3. 修复下划线不居中问题