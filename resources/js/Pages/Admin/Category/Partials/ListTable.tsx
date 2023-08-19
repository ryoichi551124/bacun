/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { usePage } from '@inertiajs/react'
import NoTableData from '@/Components/Admin/Common/NoTableData'
import Card from '@/Components/Admin/Common/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import EditLinkIcon from '@/Components/Admin/Icon/EditLinkIcon'
import CategoryUpdateModal from '@/Pages/Admin/Category/Partials/UpdateModal'
import DeleteLinkIcon from '@/Components/Admin/Icon/DeleteLinkIcon'
import type { Category } from '@/Types'

type CategoryData = { categories: Category[] }

export default function CategoryListTable() {
  const { categories } = usePage<CategoryData>().props

  return (
    <>
      <Card title="カテゴリー一覧">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 160 }}>ID</TableCell>
              <TableCell>名前</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          {categories.length === 0 ? (
              <NoTableData />
          ) : (
            <TableBody>
              {categories.map((category) => (
                <TableRow
                  key={category.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {category.id}
                  </TableCell>
                  <TableCell>{category.name}</TableCell>
                  <TableCell align="right" width="150">
                    <CategoryUpdateModal
                      id={category.id}
                      name={category.name}
                    />
                    <DeleteLinkIcon
                      deleteLink="/admin/category/list/delete/"
                      id={category.id}
                      target={`カテゴリー「${category.name}」`}
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
