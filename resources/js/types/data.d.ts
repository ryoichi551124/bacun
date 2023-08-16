import { Role } from '@/Types/config'
import type { AlertColor } from '@mui/material'

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string
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
