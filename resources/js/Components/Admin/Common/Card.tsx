/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors, utils, fontSizes } from '@/Styles'
import { PropsWithChildren, ReactNode } from 'react'

const container = css`
  padding: 1.5rem 0;
`
const card = css`
  width: 100%;
  box-shadow: ${utils.cardShadow};
  border-radius: 10px;
`
const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.lightGray};
  font-size: ${fontSizes.md};
  padding: 1rem 1.5rem;
  border-radius: 10px 10px 0 0;
`

type CardProps = {
  title: string
  icon?: ReactNode
}

/**
 * 管理画面用カード（各コンテンツ表示用）
 */
export default function Card({
  title,
  icon,
  children,
}: PropsWithChildren & CardProps) {
  return (
    <div css={container}>
      <div css={card}>
        <div css={header}>
          <div>{title}</div>
          {icon}
        </div>
        {children}
      </div>
    </div>
  )
}
