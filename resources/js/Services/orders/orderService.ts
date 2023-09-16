import { CreateOrderShippingSchemaType } from '@/Schemas/Admin/Order/createOrderShippingSchema'
import { CreateOrderUserSchemaType } from '@/Schemas/Admin/Order/createOrderUserSchema'
import type { OrderDetail, Product, User } from '@/Types'

// 顧客情報を注文者情報に変換
export function userDataToOrderUser(user: User): CreateOrderUserSchemaType {
  const orderUser = {
    last_name: user.last_name,
    first_name: user.first_name,
    last_kana: user.last_kana,
    first_kana: user.first_kana,
    zip_code1: user.zip_code.slice(0, 3),
    zip_code2: user.zip_code.slice(3, 7),
    pref: user.pref.toString(),
    city: user.city,
    address: user.address,
    building: user.building,
    tel1: user.tel.slice(0, 3),
    tel2: user.tel.slice(3, 7),
    tel3: user.tel.slice(7, 11),
    email: user.email,
    sex: user.sex,
    memo: user.memo,
  }
  return orderUser
}

// 注文者情報を配送先情報に変換
/*
export function orderUserDataToOrderShipping(orderUser: CreateOrderUserSchemaType): CreateOrderShippingSchemaType {
  const orderShipping = {
    last_name: orderUser.last_name,
    first_name: orderUser.first_name,
    last_kana: orderUser.last_kana,
    first_kana: orderUser.first_kana,
    zip_code1: orderUser.zip_code1,
    zip_code2: orderUser.zip_code2,
    pref: orderUser.pref,
    city: orderUser.city,
    address: orderUser.address,
    building: orderUser.building,
    memo: orderUser.memo,
  }
  return orderShipping
}
*/

// 商品情報を注文詳細データに変換
export function productToOrderDetail(
  product: Product,
  quantity: number,
): OrderDetail {
  const orderDetail = {
    product_id: product.id,
    product_name: product.name,
    price: product.sales_price,
    quantity: quantity,
  }
  return orderDetail
}

export function makeQuantityArray(stock: number): number[] {
  return stock > 10
      ? [...Array(11).keys()].slice(1)
      : [...Array(stock + 1).slice(1)]
}
