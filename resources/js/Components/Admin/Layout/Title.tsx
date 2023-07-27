/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import BreadCrumbs from '@/Components/Admin/Layout/BreadCrumbs'
import { theme } from '@/Theme/theme'

type TitleProps = {
  title: string
}

const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const titleText = css`
  font-size: ${theme.fontSize.lg};
`

export default function Title({ title }: TitleProps) {
  return (
    <div css={container}>
      <h1 css={titleText}>{title}</h1>
      <BreadCrumbs />
    </div>
  )
}
