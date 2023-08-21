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
import type { Product, FlashMessage } from '@/Types'

type ProductData = {
  products: Product[]
  flash: FlashMessage
}

export default function ProductListTable() {
  const { products, flash } = usePage<ProductData>().props

  return (
    <>
      {flash.message && <AlertMessage {...flash} />}
      <Card
        title="商品一覧"
        icon={<AddLinkIcon addLink="admin.product.create" />}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>商品名</TableCell>
              <TableCell>カテゴリー</TableCell>
              <TableCell>タイプ</TableCell>
              <TableCell>ステータス</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          {products.length === 0 ? (
            <NoTableData />
          ) : (
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.id}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category_id}</TableCell>
                  <TableCell>{product.type}</TableCell>
                  <TableCell>{product.status}</TableCell>
                  <TableCell align="right" width="150">
                    <EditLinkIcon
                      editLink="/admin/product/edit/"
                      id={product.id}
                    />
                    <DeleteLinkIcon
                      deleteLink="/admin/product/list/delete/"
                      id={product.id}
                      target={product.name}
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
