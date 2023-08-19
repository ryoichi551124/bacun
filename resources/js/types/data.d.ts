import { Role, Sex, Statuses } from '@/Types/config'
import type { AlertColor } from '@mui/material'

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
  status: Statuses
}

export type UserAuth = {
  auth: {
    user: User
  }
}

export type Admin = {
  id: number
  name: string
  email: string
  email_verified_at: string
  role: Role
}

export type AdminAuth = {
  auth: {
    user: Admin
  }
}

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

export type Shop = {
  shop_name: string
  shop_kana: string
  shop_message: string
}

export type Basic = {
  basic: Partial<Company> & Partial<Shop>
}

export type FlashMessage = {
  severity: AlertColor
  message: string
}
