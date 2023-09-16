/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors, forms } from '@/Styles'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/Stores'
import { updateOrderQuantity, deleteOrderDetail } from '@/Stores/orderTemp'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DeleteIcon from '@mui/icons-material/Delete'

const borderBottom = css`
  border-bottom: none;
`
const quantityFlex = css`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`
const icon = css`
  color: ${colors.delete};
  margin: 0.5rem 1rem 0;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`

/**
 * 購入商品選択結果表示
 */
export default function OrderPreviewTable() {
  const [subTotal, setSubTotal] = useState<number>(0)

  const { orderDetails } = useSelector(
    (state: RootState) => state.orderTempReducer,
  )
  const dispatch = useDispatch()

  // 小計の計算
  useEffect(() => {
    let newSubTotal: number = 0
    orderDetails.forEach((order) => {
      newSubTotal += order.price * order.quantity
    })
    setSubTotal(newSubTotal)
  }, [orderDetails])

  /** 各商品の個数変更 */
  const handleSelectQuantity = (
    index: number,
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    dispatch(
      updateOrderQuantity({
        index: index,
        quantity: Number(event.target.value),
      }),
    )
  }

  /** 商品の削除 */
  const handleDeleteOrder = (index: number) => {
    dispatch(deleteOrderDetail(index))
  }

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
            {orderDetails.map((order, index) => (
              <TableRow key={order.product_id}>
                <TableCell component="th" scope="row">
                  {order.product_name}
                </TableCell>
                <TableCell align="center">
                  <div css={quantityFlex}>
                    <select
                      value={order.quantity}
                      onChange={(e) => handleSelectQuantity(index, e)}
                      css={forms.input}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                    <button onClick={() => handleDeleteOrder(index)}>
                      <DeleteIcon css={icon} />
                    </button>
                  </div>
                </TableCell>
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
                {Math.ceil(Math.floor(subTotal * 1.1 * 100) / 100)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </>
  )
}
