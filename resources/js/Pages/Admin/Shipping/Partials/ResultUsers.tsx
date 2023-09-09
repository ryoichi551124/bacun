/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forms } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import type { User } from '@/Types'

type ResultUsersProps = {
  users: User[]
  setUserId: React.Dispatch<React.SetStateAction<number | undefined>>
}

/**
 * 顧客検索の結果（セレクトボックス）
 */
export default function ResultUsers({ users, setUserId }: ResultUsersProps) {
  /** 顧客の検索結果から選択 */
  const handleSelectUsers = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value && setUserId(Number(event.target.value))
  }

  return (
    <Card title="顧客の選択">
      <div css={forms.container}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <label htmlFor="users" css={forms.label}>
              検索結果から選ぶ
            </label>
            <select
              defaultValue={users[0].id}
              onChange={handleSelectUsers}
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
      </div>
    </Card>
  )
}
