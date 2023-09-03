import { Role, Sex, UserStatus } from '@/Types/config'
import type { AlertColor } from '@mui/material'

// フラッシュメッセージ
export type FlashMessage = {
  severity: AlertColor
  message: string
}

// 顧客
export interface User {
  id: number
  email: string
  password: string
  password_confirmation: string
  last_name: string
  first_name: string
  last_kana: string
  first_kana: string
  zip_code1: string
  zip_code2: string
  pref: string
  city: string
  address: string
  building?: string
  tel1: string
  tel2: string
  tel3: string
  sex: Sex
  birth_year: string
  birth_month: string
  birth_day: string
  memo: string
  status: string
}

// ユーザーのログイン情報
export type UserAuth = {
  auth: {
    user: User
  }
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
