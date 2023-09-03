// 管理者権限
export type AdminRoles = Record<Role, string>
export type Role = 'admin' | 'member'

// 顧客ステータス
export type UserStatus = Record<number, string>
// 性別
export type Sex = '1' | '2'
// 都道府県
export type Pref = Record<number, string>

// 商品タイプ
export type ProductType = Record<string, string>
// 商品ステータス
export type ProductStatus = Record<string, string>
// 商品タグ
export type ProductTag = Record<string, string>

// ファイルタイプ
export type FileType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/gif'
  | 'video/mp4'
  | 'video/quicktime'
  | 'application/pdf'
