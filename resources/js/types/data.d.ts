import { Role, Sex, UserStatus } from '@/Types/config'
import type { AlertColor } from '@mui/material'

// フラッシュメッセージ
export type FlashMessage = {
  severity: AlertColor
  message: string
}

// 顧客
export type User = {
  id: number
  email: string
  password: string
  password_confirmation: string
  last_name: string
  first_name: string
  last_kana: string
  first_kana: string
  zip_code: string
  pref: number
  city: string
  address: string
  building?: string
  tel: string
  sex: Sex
  birth_year: string
  birth_month: string
  birth_day: string
  memo: string
  status: number
}

// ユーザーのログイン情報
export type UserAuth = {
  auth: {
    user: User
  }
}

// 配送先情報
export type Shipping = {
  id: number
  user_id: number
  last_name: string
  first_name: string
  last_kana: string
  first_kana: string
  zip_code: string
  pref: string
  city: string
  address: string
  building?: string
  memo?: string
}

// 管理者
export type Admin = {
  id: number
  name: string
  email: string
  email_verified_at: string
  role: Role
}

// 管理者のログイン情報
export type AdminAuth = {
  auth: {
    user: Admin
  }
}

// 会社情報
export type Company = {
  company_name: string
  company_kana: string
  zip_code1: string
  zip_code2: string
  address1: string
  address2: string
  tel1: string
  tel2: string
  email1: string
  email2: string
}

// ショップ情報
export type Shop = {
  shop_name: string
  shop_kana: string
  shop_message: string
}

// 基本情報（会社情報 & ショップ情報）
export type Basic = {
  basic: Partial<Company> & Partial<Shop>
}

// 受注ステータス
export type OrderStatus = 'new' | 'paid' | 'shipped' | 'cancel' | 'return'

// 受注
export type Order = {
  user_id: number
  id: number
  last_name: string
  first_name: string
  last_kana: string
  first_kana: string
  zip_code: string
  pref: string
  city: string
  address: string
  building: string
  tel: string
  email: string
  sex?: Sex
  memo?: string
  status: OrderStatus
  tracking_number?: string
  sub_total: number
  total_deliv_fee: number
  tax: number
  total: number
  payment_method: string
  payment_date: Date
  order_detail?: OrderDetail[]
}

// 受注詳細
export type OrderDetail = {
  order_id: number
  product_id: number
  product_name: string
  price: number
  quantity: number
}

// 商品カテゴリー
export type Category = {
  id: number
  name: string
}

// 商品
export type Product = {
  id: number
  category_id?: number
  name: string
  thumbnail?: string
  main_img?: string
  sub_img1?: string
  sub_img2?: string
  sub_img3?: string
  sub_img4?: string
  content1?: string
  content2?: string
  content3?: string
  content4?: string
  memo?: string
  stock: number
  type: string
  status: string
  tag?: number
  rank?: number
  regular_price: number
  sales_price: number
  delivery_id?: number
}

// 送料
export type Delivery = {
  id: number
  name: string
  description?: string
  duration?: string
  delivery_fee1: string
  delivery_fee2: string
  category?: string
  rank?: number
}

// メールテンプレート
export type MailTemplate = {
  id: number
  name: string
  subject: string
  body: string
  from_name: string
  from_address: string
  reply_to_name: string
  reply_to_address: string
  cc_address: string
  bcc_address: string
}
