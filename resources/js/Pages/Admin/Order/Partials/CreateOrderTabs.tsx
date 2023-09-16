/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactNode, useState } from 'react'
import { colors } from '@/Styles'
import Card from '@/Components/Admin/Common/Card'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import OrderUserTab from '@/Pages/Admin/Order/Partials/Tabs/OrderUserTab'
import OrderShippingTab from '@/Pages/Admin/Order/Partials/Tabs/OrderShippingTab'
import OrderDetailsTab from '@/Pages/Admin/Order/Partials/Tabs/OrderDetailsTab'
import type { User } from '@/Types'

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

export default function CreateOrderTabs() {
  // タブの選択
  const [value, setValue] = useState(0)
  // タブの切り替え
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // 顧客の検索から選択
  const [user, setUser] = useState<User | undefined>(undefined)

  return (
    <Card title="受注新規作成">
      <Tabs value={value} onChange={handleTabChange} css={tabs}>
        <Tab label="注文者" />
        <Tab label="配送先" />
        <Tab label="購入商品" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <OrderUserTab user={user} setUser={setUser} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderShippingTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrderDetailsTab />
      </TabPanel>
    </Card>
  )
}
