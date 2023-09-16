import request from '@/utils/request'

// 新建车辆(管理员)
export function createOrder(data) {
  return request({
    url: '/createOrder',
    method: 'post',
    data
  })
}

// 获取商品信息(空json{}可以查询所有，指定proprietor可以查询指定客户名下车辆)
export function queryOrder(data) {
  return request({
    url: '/queryOrder',
    method: 'post',
    data
  })
}
