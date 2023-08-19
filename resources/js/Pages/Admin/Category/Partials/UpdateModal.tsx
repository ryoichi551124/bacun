/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { modal, colors } from '@/Styles'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import { forms, mt0, fontSizes } from '@/Styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import EditIcon from '@mui/icons-material/Edit'
import { useForm } from 'react-hook-form'
import updateCategorySchema, {
  UpdateCategorySchemaType
} from '@/Schemas/Admin/Category/UpdateSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Category } from '@/Types'

const icon = css`
  color: ${colors.secondary};
  margin: 0 0.5rem;
  &:hover {
    transform: scale(1.1, 1.1);
    transition: 0.5s;
  }
`
const title = css`
  font-size: ${fontSizes.md};
  font-weight: bold;
  padding-bottom: 1rem;
`
const button = css`
  margin-top: 1rem;
`

export default function CategoryUpdateModal({ id, name }: Category) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateCategorySchemaType>({
    defaultValues: { name },
    reValidateMode: 'onBlur',
    resolver: zodResolver(updateCategorySchema),
  })

  const updateCategory = (data: UpdateCategorySchemaType) => {
    setOpen(false)
    router.put(`/admin/category/edit/update/${id}`, data)
  }

  return (
    <>
      <Button onClick={handleOpen}>
        <EditIcon css={icon} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box css={modal}>
          <form onSubmit={handleSubmit(updateCategory)}>
            <div css={title}>カテゴリーの編集</div>
            {/* 名前 */}
            <label htmlFor="name" css={forms.label}>
              名前
            </label>
            <input
              id="name"
              placeholder="新規カテゴリー名を入力"
              css={[forms.input, mt0, errors.name && forms.error]}
              {...register('name')}
            />
            {/* エラーメッセージ */}
            {errors.name && (
              <div css={forms.errText}>{errors.name.message}</div>
            )}
            {/* ボタン */}
            <Button type="submit" variant="contained" css={button}>
              作成
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
