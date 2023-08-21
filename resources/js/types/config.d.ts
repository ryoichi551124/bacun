export type AdminRoles = Record<Role, string>
export type Role = 'admin' | 'member'

export type UserStatuses = Record<Statuses, number>
export type Statuses = '0' | '1' | '2'
export type Sex = '1' | '2'
export type ProductStatus = '0' | '1'
export type ProductType = '1' | '2'

export type Pref = Record<number, string>

export type FileType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/gif'
  | 'video/mp4'
  | 'video/quicktime'
  | 'application/pdf'
