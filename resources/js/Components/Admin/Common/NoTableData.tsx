/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

export default function NoTableData() {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={4}>データがありません</TableCell>
      </TableRow>
    </TableBody>
  )
}
