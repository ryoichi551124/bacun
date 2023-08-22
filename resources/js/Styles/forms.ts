/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors, fontSizes } from '@/Styles'

export const forms = {
  container: css`
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    font-size: ${fontSizes.ss};
  `,
  flexCenter: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      margin-right: 0.5rem;
      &:not(:first-of-type) {
        margin-left: 0.5rem;
      }
    }
  `,
  flexEnd: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    input {
      margin-right: 0.5rem;
      &:not(:first-of-type) {
        margin-left: 0.5rem;
      }
    }
  `,
  label: css`
    font-weight: bold;
  `,
  input: css`
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    border: 1px solid ${colors.gray};
    border-radius: 5px;
    color: ${colors.font};
    box-sizing: border-box;
    outline: none;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `,
  radioLabel: css`
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
  `,
  radioInput: css`
    margin-right: 0.5rem;
  `,
  buttonWrap: css`
    padding: 1.5rem 0.5rem;
  `,
  error: css`
    border: 1px solid ${colors.error};
  `,
  errText: css`
    color: ${colors.error};
    font-size: ${fontSizes.xs};
  `,
}
