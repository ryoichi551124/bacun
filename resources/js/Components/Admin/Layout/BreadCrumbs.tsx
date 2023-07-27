/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const container = css`
  display: flex;
  align-items: center;
`

export default function BreadCrumbs() {
  return (
    <div css={container}>
      <div>ダッシュボード</div>
      <div>/</div>
      <div>管理者設定</div>
    </div>
  )
}
