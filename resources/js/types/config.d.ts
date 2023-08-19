export type AdminRoles = Record<Role, string>
export type Role = 'admin' | 'member'

export type UserStatuses = Record<Statuses, number>
export type Statuses = 'non' | 'main' | 'temporary'

export type Pref = Record<number, string>
