/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors, fontSizes } from '@/Styles'

export const forms = {
  container: css`
    padding: 1rem 1.5rem;
    margin-bottom: 3rem;
    font-size: ${fontSizes.ss};
  `,
  wrap: css`
    padding: 0.5rem 0;
  `,
  label: css`
    font-weight: bold;
  `,
  input: css`
    display: block;
    width: 50%;
    margin-top: 0.5rem;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    color: ${colors.font};
  `,
  buttonWrap: css`
    padding: 1.5rem 0;
  `,
  error: css`
    border: 1px solid ${colors.error};
  `,
  errText: css`
    color: ${colors.error};
    font-size: ${fontSizes.xs};
  `,
}
