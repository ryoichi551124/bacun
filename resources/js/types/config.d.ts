export type AdminRoles = Record<Role, string>
export type Role = 'admin' | 'member'

export type UserStatuses = Record<Statuses, number>
export type Statuses = '0' | '1' | '2'
export type Sex = '1' | '2'

export type Pref = Record<number, string>
