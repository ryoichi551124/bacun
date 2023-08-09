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

export type FlashMessage = {
  severity: AlertColor
  message: string
}
