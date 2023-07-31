/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { theme } from '@/Theme/theme'

export const formContainer = css`
  padding: 1rem 1.5rem;
  margin-bottom: 3rem;
`

export const input = css`
  display: block;
  width: 40%;
  margin-top: 0.5rem;
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;
  color: ${theme.colors.font};
`

export const error = css`
  border: 1px solid ${theme.colors.error};
`

export const errText = css`
  color: ${theme.colors.error};
  font-size: ${theme.fontSize.xs};
`
