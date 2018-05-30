// 引入mockjs文件
const Mock = require('mockjs')
const Random = Mock.Random
module.exports = function() {
  let data = {
    store: [],
    goods: [],
    // 加入购物车数据
    cartData: []
  }
  var images = [1, 2, 3].map(x =>
    Random.image('200x100', Random.color(), Random.word(2, 6))
  )
  for (let i = 1; i < 10; i++) {
    let content = Random.cparagraph(2, 3)
    //店铺
    data.store.push({
      id: i,
      storename: content + '官方旗舰店'
    })
  }
  //分类
  let arr = [
    '热门推荐',
    '潮流女装',
    '品牌男装',
    '内衣配饰',
    '电脑办公',
    '手机数码',
    '母婴频道',
    '图书音像',
    '家用电器',
    '家具器材',
    '家居生活'
  ]
  for (let i = 1; i < 120; i++) {
    let content = Random.cparagraph(1)
    //商品 '../../static/goodsImg1.jpg'
    data.goods.push({
      id: i,
      storeId: Math.round(1 + Math.random() * 8),
      img: images,
      name: content,
      color: 'red',
      size: 's',
      oldprice: 200 + i,
      price: Math.round(123 + Math.random() * 20 + i),
      stock: Math.round(1 + Math.random() * 20),
      monSales: Math.round(1 + Math.random() * 20),
      num: 1,
      category: arr[Math.round(Math.random() * 11)]
    })
  }
  return data
}
