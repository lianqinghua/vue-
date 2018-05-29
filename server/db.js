// 引入mockjs文件
const Mock = require('mockjs')
const Random = Mock.Random
module.exports = function() {
  let data = {
    store: [],
    goods: [],
    // 加入购物车数据
    cartData: [
      {
        id: 0,
        storename: '歌莉娅官方旗舰店',
        goods: [
          {
            id: 0,
            img: '../../static/goodsImg1.jpg',
            name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
            color: 'red',
            size: 's',
            oldprice: 200,
            price: 123,
            num: 1,
            stock: 10,
            monSales: 123
          },
          {
            id: 1,
            img: '../../static/goodsImg1.jpg',
            name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
            color: 'red',
            size: 's',
            price: 123,
            num: 1,
            stock: 10,
            oldprice: 200,
            monSales: 123
          }
        ]
      },
      {
        id: 1,
        storename: '歌莉娅官方旗舰店',
        goods: [
          {
            id: 0,
            img: '../../static/goodsImg1.jpg',
            name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
            color: 'red',
            size: 's',
            oldprice: 200,
            price: 123,
            num: 1,
            stock: 10,
            monSales: 123
          },
          {
            id: 1,
            img: '../../static/goodsImg1.jpg',
            name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
            color: 'red',
            size: 's',
            oldprice: 200,
            price: 123,
            num: 1,
            stock: 10,
            monSales: 123
          }
        ]
      }
    ]
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
  for (let i = 1; i < 10; i++) {
    let content = Random.cparagraph(0, 3)
    //商品 '../../static/goodsImg1.jpg'
    data.goods.push({
      id: i,
      storeId: 1 + Math.random() * 9,
      img: images,
      name: '歌莉娅女装 2016冬装新款 连衣帽针织衫 显瘦身 15DJ8C040',
      color: 'red',
      size: 's',
      oldprice: 200,
      price: 123,
      num: 1,
      stock: 10,
      monSales: 123
    })
  }
  return data
}
