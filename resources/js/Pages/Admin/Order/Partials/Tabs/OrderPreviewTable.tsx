/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { forms } from '@/Styles'
import { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import AddLinkIcon from '@/Components/Admin/Icon/AddLinkIcon'
import EditLinkIcon from '@/Components/Admin/Icon/EditLinkIcon'
import DeleteLinkIcon from '@/Components/Admin/Icon/DeleteLinkIcon'
import type { OrderDetail } from '@/Types'

const borderBottom = css`
  border-bottom: none;
`

type OrderPreviewTableProps = {
  orderDetails: OrderDetail[]
}

/**
 * 購入商品選択結果表示
 */
export default function OrderPreviewTable({
  orderDetails,
}: OrderPreviewTableProps) {
  const [subTotal, setSubTotal] = useState<number>(0)

  useEffect(() => {
    let subTotalTemp: number = 0
    orderDetails.forEach((order) => {
      subTotalTemp += order.price * order.quantity
    })
    setSubTotal(subTotalTemp)
  }, [orderDetails])

  console.log(orderDetails)

  return (
    <>
      <Grid container spacing={2} css={forms.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>商品名</TableCell>
              <TableCell align="center">個数</TableCell>
              <TableCell>単価</TableCell>
              <TableCell align="right">料金</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDetails.map((order) => (
              <TableRow key={order.product_id}>
                <TableCell component="th" scope="row">
                  {order.product_name}
                </TableCell>
                <TableCell align="center">{order.quantity}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell align="right">
                  {order.quantity * order.price}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={4} css={borderBottom} />
              <TableCell css={borderBottom}></TableCell>
              <TableCell>小計</TableCell>
              <TableCell align="right">{subTotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell css={borderBottom}></TableCell>
              <TableCell colSpan={1}>消費税</TableCell>
              <TableCell align="right">{subTotal * 0.1}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell css={borderBottom}></TableCell>
              <TableCell>送料</TableCell>
              <TableCell align="right">処理未定</TableCell>
            </TableRow>
            <TableRow sx={{ td: { border: 0 } }}>
              <TableCell></TableCell>
              <TableCell>合計</TableCell>
              <TableCell align="right">
                {(subTotal * 100 * 1.1) / 100}{' '}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </>
  )
}
