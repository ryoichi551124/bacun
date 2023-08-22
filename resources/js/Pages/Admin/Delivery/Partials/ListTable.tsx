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
import type { Delivery, FlashMessage } from '@/Types'

type DeliveryData = {
  deliveries: Delivery[]
  flash: FlashMessage
}

export default function DeliveryListTable() {
  const { deliveries, flash } = usePage<DeliveryData>().props

  return (
    <>
      {flash.message && <AlertMessage {...flash} />}
      <Card
        title="送料一覧"
        icon={<AddLinkIcon addLink="admin.delivery.create" />}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>送料</TableCell>
              <TableCell>配送区分</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          {deliveries.length === 0 ? (
            <NoTableData />
          ) : (
            <TableBody>
              {deliveries.map((delivery) => (
                <TableRow
                  key={delivery.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {delivery.id}
                  </TableCell>
                  <TableCell>{delivery.name}</TableCell>
                  <TableCell>{`${delivery.delivery_fee1}(${delivery.delivery_fee2})`}</TableCell>
                  <TableCell>{delivery.category}</TableCell>
                  <TableCell align="right" width="150">
                    <EditLinkIcon
                      editLink="/admin/delivery/edit/"
                      id={delivery.id}
                    />
                    <DeleteLinkIcon
                      deleteLink="/admin/delivery/list/delete/"
                      id={delivery.id}
                      target={delivery.name}
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
