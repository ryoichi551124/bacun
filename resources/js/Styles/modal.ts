/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { utils } from './utils'
import { colors } from './colors'

export const modal = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background: ${colors.lightGray};
  box-shadow: ${utils.cardShadow};
  padding: 3rem;
`
