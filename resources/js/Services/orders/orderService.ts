import { CreateOrderUserSchemaType } from '@/Schemas/Admin/Order/createOrderUserSchema'
import type { User } from '@/Types'

//
export function userDataToOrderUser(
  user: User
): CreateOrderUserSchemaType {
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
