export type AdminRoles = Record<Role, string>
export type Role = 'admin' | 'member'

export type UserStatus = Record<number, string>
export type Sex = '1' | '2'
export type Pref = Record<number, string>

export type ProductType = Record<number, string>
export type ProductStatus = Record<number, string>
export type ProductTag = Record<number, string>

export type FileType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/gif'
  | 'video/mp4'
  | 'video/quicktime'
  | 'application/pdf'
