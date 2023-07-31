import { Role } from '@/types/config'

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

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User
  }
}
