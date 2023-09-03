/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import BreadCrumbs from '@/Components/Admin/Common/BreadCrumbs'
import { fontSizes } from '@/Styles'

type TitleProps = {
  title: string
}

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const titleText = css`
  font-size: ${fontSizes.lg};
`

/**
 * 管理画面タイトル部分
 */
export default function Title({ title }: TitleProps) {
  return (
    <div css={container}>
      <h1 css={titleText}>{title}</h1>
      <BreadCrumbs />
    </div>
  )
}
