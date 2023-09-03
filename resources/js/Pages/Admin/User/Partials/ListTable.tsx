import { usePage } from '@inertiajs/react'
import AlertMessage from '@/Components/Admin/FeedBack/AlertMessage'
import NoTableData from '@/Components/Admin/Common/NoTableData'
import Card from '@/Components/Admin/Common/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import AddLinkIcon from '@/Components/Admin/Icon/AddLinkIcon'
import EditLinkIcon from '@/Components/Admin/Icon/EditLinkIcon'
import DeleteLinkIcon from '@/Components/Admin/Icon/DeleteLinkIcon'
import type { User, UserStatus, FlashMessage } from '@/Types'

type UserData = {
  users: User[]
  statuses: UserStatus
  flash: FlashMessage
}

/**
 * 顧客一覧
 */
export default function UserListTable() {
  const { users, statuses, flash } = usePage<UserData>().props

  return (
    <>
      {flash.message && <AlertMessage {...flash} />}
      <Card title="顧客一覧" icon={<AddLinkIcon addLink="admin.user.create" />}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>メール</TableCell>
              <TableCell>ステータス</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          {users.length === 0 ? (
            <NoTableData />
          ) : (
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell>
                    {user.last_name} {user.first_name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{statuses[Number(user.status)]}</TableCell>
                  <TableCell align="right" width="150">
                    {user.status}
                    <EditLinkIcon editLink="/admin/user/edit/" id={user.id} />
                    <DeleteLinkIcon
                      deleteLink="/admin/user/list/delete/"
                      id={user.id}
                      target={`${user.last_name}${user.first_name}`}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </Card>
    </>
  )
}
