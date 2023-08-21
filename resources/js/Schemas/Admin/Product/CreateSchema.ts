import { memo } from 'react'
import * as z from 'zod'
import type { FileData } from '@/Components/Admin/Form/Image/InputImage'

const createProductSchema = z
  .object({
    category_id: z.number().optional().nullable(),
    name: z.string().min(1, '入力が必須の項目です'),
    thumbnail: z.custom<FileData[]>(),
    main_img: z.custom<FileData[]>(),
    sub_img1: z.custom<FileData[]>(),
    sub_img2: z.custom<FileData[]>(),
    sub_img3: z.custom<FileData[]>(),
    sub_img4: z.custom<FileData[]>(),
    content1: z.string().optional().nullable(),
    content2: z.string().optional().nullable(),
    content3: z.string().optional().nullable(),
    content4: z.string().optional().nullable(),
    memo: z.string().optional().nullable(),
    stock: z.number().min(1, '入力が必須の項目です'),
    type: z.enum(['1', '2']),
    status: z.enum(['0', '1']),
    tag: z.number().optional().nullable(),
    rank: z.number().optional().nullable(),
    regular_price: z.string().min(1, '入力が必須の項目です'),
    sales_price: z.string().min(1, '入力が必須の項目です'),
    delivery_id: z.string().min(1, '入力が必須の項目です'),
  })

export type CreateProductSchemaType = z.infer<typeof createProductSchema>

export default createProductSchema
