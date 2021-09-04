# API 设计

## 注册

### url 

`/api/user/register`

### method 

`post`

### request body

```js
{
  username: 'test',
  password: 'test'
}
```

### response body

```js
{
  errno:0,
  message:'errno!===0.....的其他信息'
}
```

-----------------------

## 登录

### url 

`/api/user/login`

### method 

`post`

### request body

```js
{
  username: 'test',
  password: 'test'
}
```

### response body

```js
{
  errno:0,
  message:'errno!===0.....的其他信息'
}
```

-----------------------

##  创建收货地址

### url 

`/api/user/address`

### method 

`post`

### request body

```js
{
  city: '北京'，
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三',
  phone: '1008611'
}
```

### response body

```js
{
  errno:0,
  data: {
    _id: '收货地址的id'，
    city: '北京'，
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '1008611'
  }，
  message:'errno!===0.....的其他信息'
}
```

-----------------------

## 获取收货地址

### url

`/api/user/address`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: [
    {
      _id: '收货地址的id'，
      city: '北京'，
      department: 'xx小区',
      houseNumber: '门牌号',
      name: '张三',
      phone: '1008611'
    },
    {
      _id: '收货地址的id'，
      city: '上海'，
      department: 'yy小区',
      houseNumber: '门牌号',
      name: '李四',
      phone: '10010'
    }
  ],
  message:'errno!===0.....的其他信息'
}
```

-----------------------

## 获取单个收货地址

### url

`/api/user/address/:id` // id是动态参数，服务端可获取具体参数值

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data: {
      _id: '收货地址的id'，
      city: '上海'，
      department: 'yy小区',
      houseNumber: '门牌号',
      name: '李四',
      phone: '10010'
  },
  message:'errno!===0.....的其他信息'
}
```

-----------------------

## 更新收货地址

### url

`/api/user/address/:id`

### method

`patch`

### request body

```js
{
    city: '上海'，
    department: 'yy小区',
    houseNumber: '门牌号',
    name: '李四',
    phone: '10010'
}
```

### response body

```js
{
  errno: 0,
  // data 可返回也可以不返回
  data: {
      _id: '收货地址的id'，
      city: '上海'，
      department: 'yy小区',
      houseNumber: '门牌号',
      name: '李四',
      phone: '10010'
  },
  message:'errno!===0.....的其他信息'
}
```

-----------------------

## 附近（热门）店铺

### url

`/api/shop/hot-list`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data:[
    {
      _id: '店铺id'，
      name: '沃尔玛',
      imgUrl: '商品logo',
      sales: 1000, // 月售
      expressLimt: 0, // 起送价格
      expressPrice: 5, //快递价格
      slogan: 'VIP尊享满89元减4元运费券'
    },
    {
      _id: '店铺id'，
      name: '年年丰',
      imgUrl: '商品logo',
      sales: 1222, // 月售
      expressLimt: 0, // 起送价格
      expressPrice: 5, //快递价格
      slogan: 'VIP尊享满89元减4元运费券'
    }
  ],
  message:'errno!===0.....的其他信息'
}
```

-----------------------

## 商店详情

### url

`/api/shop/:id`

### method

`get`

### request body

无

### response body

```js
{
  errno: 0,
  data:{
      _id: '店铺id'，
      name: '年年丰',
      imgUrl: '商品logo',
      sales: 1222, // 月售
      expressLimt: 0, // 起送价格
      expressPrice: 5, //快递价格
      slogan: 'VIP尊享满89元减4元运费券'
  },
  message:'errno!===0.....的其他信息'
}
```

-----------------------

## 查询商店的商品列表

### url

`/api/shop/:id/products`

### query

`tab=all` 
`tab=seckill`
`tab=分类`
`/api/shop/:id/products?tab=all`

### method

`get`

### request body

无

### response body


```js
{
  errno: 0,
  data:[
    {
      _id:'商品id',
      name: '番茄 250g/份',
      imgUrl: 'xxx',
      sales: 10,
      price: 33.2,
      oldPress: 40.9
    },
    {
      _id:'商品id',
      name: '西红柿 250g/份',
      imgUrl: 'xxx',
      sales: 120,
      price: 13.2,
      oldPress: 20.9
    }
  ]
  message:'errno!===0.....的其他信息'
}
```

-----------------------

## 创建订单

### url

`/api/order`

### method

`post`

### request body

```js
{
  addressId: '收货地址id',
  shopId: '商店id',
  shopName: '商店名，
  isCanceled: true, //订单是否取消
  products:[
    {
      id: '1商品id',
      num: 3, //购买数量
    },
    {
      id: '2商品id',
      num: 6, //购买数量
    }
  ]
}
```

### response body

```js
{
  errno: 0,
  data:{
    _id: '订单id',
  },
  message:'errno!===0.....的其他信息'
}
```

