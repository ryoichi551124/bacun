/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forms, colors } from '@/Styles'
import { usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'
import searchUsers from '@/Services/users/searchUsers'
import SearchUsers from '@/Pages/Admin/Order/Partials/Tabs/SearchUsers'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import type { SearchUsersSchemaType } from '@/Schemas/Admin/User/searchUsersSchema'
import type { User, Pref, UserStatus } from '@/Types'

const lead = css`
  padding: 1.5rem 0 0 1.5rem;
  font-weight: bold;
`
const infoTitle = css`
  padding-top: 1rem;
  font-weight: bold;
`
const infoContainer = css`
  padding: 0.5rem 0;
  font-size: 1rem;
`
const infoName = css`
  padding-bottom: 0.5rem;
`

type OrderData = {
  prefs: Pref
  statuses: UserStatus
}
type UserTabProps = {
  user: User | undefined
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

export default function UserTab({ user, setUser }: UserTabProps) {
  const { prefs, statuses } = usePage<OrderData>().props
  const [users, setUsers] = useState<User[] | undefined>(undefined)

  // 注文者が設定済みであれば、選択した顧客に設定
  useEffect(() => {
    user && setUsers([user])
  }, [])

  /** 顧客検索 */
  const handleSearchUser = (data: SearchUsersSchemaType) => {
    searchUsers(data).then((res) => {
      if (res) {
        setUsers(res)
        setUser(res[0])
      } else {
        setUsers([])
        setUser(undefined)
      }
    })
  }

  /** 選択した顧客を注文者に設定 */
  const handleSelectUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value &&
      setUser(
        users?.filter((user) => user.id === Number(event.target.value))[0],
      )
  }

  console.log('userTab')
  console.log(user)

  return (
    <>
      <div css={lead}>登録済みの顧客を検索</div>
      {/* 検索フォーム */}
      <SearchUsers onSearchUser={handleSearchUser} users={users} />
      {/* 検索結果から注文者を選ぶ */}
      {users && users.length > 0 && (
        <>
          <hr />
          <Grid container spacing={2} css={forms.container}>
            <Grid xs={6}>
              <label htmlFor="users" css={forms.label}>
                選択した顧客を注文者に設定する
              </label>
              <select
                defaultValue={users[0].id}
                onChange={handleSelectUser}
                css={forms.input}
              >
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.last_name} {user.first_name} {user.email}
                  </option>
                ))}
              </select>
            </Grid>
            <Grid xs={6}></Grid>
          </Grid>
        </>
      )}
    </>
  )
}
