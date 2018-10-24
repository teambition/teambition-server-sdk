## Teambition Server SDK
  Teambition 服务端 Node SDK，封装如下方法:

- [ ] 数据处理: 常用的数据加工处理方法
- [ ] 官方 API: 常用的 `Teambition` 主站官方 API 封装，使用者不应该关注具体 URL 的变动
- [ ] 工具函数: 封装与 `Teambition` 强相关的业务需要使用到的工具函数

### 数据处理

**JobSlice(分片执行)**

```js
// JS Demo
function request (sliceRaw) {
  // do anything
}
const raw = new Array(20)
const datafactory = new TeambitionSDK.DataFactory(raw)

datafactory.JobSlice(request)
```

### 官方 API
