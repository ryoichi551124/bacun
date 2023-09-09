import axios from 'axios'
import type { SearchUsersSchemaType } from '@/Schemas/Admin/User/searchUsersSchema'
import type { User } from '@/Types'

export default async function searchUsers(
  data: SearchUsersSchemaType,
): Promise<User[] | undefined> {
  try {
    const res = await axios.post('/admin/api/user/search', data)
    return res.data
  } catch (err) {
    console.log(err)
  }
}
