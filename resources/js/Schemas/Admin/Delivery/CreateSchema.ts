import * as z from 'zod'

const createDeliverySchema = z.object({
  name: z.string().min(1, 'カテゴリー名は必須項目です'),
  description: z.string().optional().nullable(),
  duration: z.string().optional().nullable(),
  delivery_fee1: z.string().min(1, '送料は必須項目です'),
  delivery_fee2: z.string().min(1, '送料（沖縄・離島料金）は必須項目です'),
  category: z.string().optional().nullable(),
  rank: z.number().optional().nullable(),
})

export type CreateDeliverySchemaType = z.infer<typeof createDeliverySchema>

export default createDeliverySchema
