export * from '@/Types/config'
export * from '@/Types/data'
export * from '@/Types/global'

import { User } from '@/Types'
import { FlashMessage } from '@/Types/data'

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User
  }
} & {
  flash: FlashMessage
}
