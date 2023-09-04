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
import type { Shipping, FlashMessage } from '@/Types'

type ShippingData = {
  shippings: Shipping[]
  flash: FlashMessage
}

/**
 * 配送情報一覧
 */
export default function ShippingListTable() {
  const { shippings, flash } = usePage<ShippingData>().props

  return (
    <>
      {flash.message && <AlertMessage {...flash} />}
      <Card
        title="配送情報一覧"
        icon={<AddLinkIcon addLink="admin.shipping.create" />}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>顧客名</TableCell>
              <TableCell>メール</TableCell>
              <TableCell>住所</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          {shippings.length === 0 ? (
            <NoTableData />
          ) : (
            <TableBody>
              {shippings.map((shipping) => (
                <TableRow
                  key={shipping.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {shipping.id}
                  </TableCell>
                  <TableCell>
                    {shipping.shipping_last_name} {shipping.shipping_first_name}
                  </TableCell>
                  <TableCell>{shipping.shipping_email}</TableCell>
                  <TableCell>{shipping.shipping_city}</TableCell>
                  <TableCell align="right" width="150">
                    <EditLinkIcon
                      editLink="/admin/shipping/edit/"
                      id={shipping.id}
                    />
                    <DeleteLinkIcon
                      deleteLink="/admin/shipping/list/delete/"
                      id={shipping.id}
                      target={`${shipping.shipping_city}${shipping.shipping_pref}${shipping.shipping_address}`}
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
