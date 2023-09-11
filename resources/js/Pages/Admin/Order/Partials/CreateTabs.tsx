/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactNode, useState } from 'react'
import { forms, colors } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import OrderUserTab from '@/Pages/Admin/Order/Partials/Tabs/OrderUserTab'
import OrderShippingTab from '@/Pages/Admin/Order/Partials/Tabs/OrderShippingTab'
import OrderProductsTab from '@/Pages/Admin/Order/Partials/Tabs/OrderProductsTab'
import type { User, Shipping, OrderDetail } from '@/Types'
import { CreateOrderUserSchemaType } from '@/Schemas/Admin/Order/createOrderUserSchema'
import { CreateOrderShippingSchemaType } from '@/Schemas/Admin/Order/createOrderShippingSchema'

const tabs = css`
  border-bottom: 1px solid ${colors.gray};
`

type TabPanelProps = {
  children?: ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, index, value } = props
  return value === index && <div>{children}</div>
}

export default function CreateTabs() {
  // タブの選択
  const [value, setValue] = useState(0)
  // タブの切り替え
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // 顧客の検索から選択
  const [user, setUser] = useState<User | undefined>(undefined)
  // 注文者
  const [orderUser, setOrderUser] = useState<
    CreateOrderUserSchemaType | undefined
  >(undefined)
  // 配送先
  const [orderShipping, setOrderShipping] = useState<
    CreateOrderShippingSchemaType | undefined
  >(undefined)
  // 購入書品
  const [orderProducts, setOrderProducts] = useState<OrderDetail[] | undefined>(
    undefined,
  )

  return (
    <Card title="受注登録">
      <Tabs value={value} onChange={handleTabChange} css={tabs}>
        <Tab label="注文者" />
        <Tab label="配送先" />
        <Tab label="購入商品" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <OrderUserTab
          user={user}
          setUser={setUser}
          orderUser={orderUser}
          setOrderUser={setOrderUser}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderShippingTab
          orderUser={orderUser}
          orderShipping={orderShipping}
          setOrderShipping={setOrderShipping}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderProductsTab />
      </TabPanel>
    </Card>
  )
}
