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
import type { FlashMessage, MailTemplate } from '@/Types'

type MailTemplateData = {
  templates: MailTemplate[]
  flash: FlashMessage
}

/**
 * メールテンプレート一覧
 */
export default function MailTempalteListTable() {
  const { templates, flash } = usePage<MailTemplateData>().props

  return (
    <>
      {flash.message && <AlertMessage {...flash} />}
      <Card
        title="メールテンプレート一覧"
        icon={<AddLinkIcon addLink="admin.mailtemplate.create" />}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width={50}>ID</TableCell>
              <TableCell>テンプレート名</TableCell>
              <TableCell>件名</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          {templates.length === 0 ? (
            <NoTableData />
          ) : (
            <TableBody>
              {templates.map((template) => (
                <TableRow
                  key={template.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {template.id}
                  </TableCell>
                  <TableCell>{template.name}</TableCell>
                  <TableCell>{template.subject}</TableCell>
                  <TableCell align="right" width="150">
                    <EditLinkIcon
                      editLink="/admin/mailtemplate/edit/"
                      id={template.id}
                    />
                    <DeleteLinkIcon
                      deleteLink="/admin/mailtemplate/list/delete/"
                      id={template.id}
                      target={template.name}
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
