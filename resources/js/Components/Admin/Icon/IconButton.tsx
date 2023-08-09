/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  Search,
  PersonOutline,
  ShoppingCart,
  CheckBoxOutlineBlank,
  CheckBox,
  Cancel,
  CloudUpload,
  Close,
  GitHub,
  Person,
} from '@mui/icons-material'
import SvgIcon from '@mui/material/SvgIcon'
import { colors, fontSizes } from '@/Styles'

// list out color types
export type Colors = keyof typeof colors
export type fontSizes = keyof typeof fontSizes

interface IconWrapperProps {
  size: fontSizes
  cursor?: string
  color?: Colors
  backgroundColor?: string
}

const IconWrapper = styled.div<IconWrapperProps>`
  display: inline-block;
  font-size: ${({ size }) => fontSizes[size]};
  width: ${({ size }) => fontSizes[size]};
  height: ${({ size }) => fontSizes[size]};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  color: ${({ color }) => {
    if (color) {
      return colors[color]
    }
  }};
  svg {
    display: block;
  }
`

export type IconButtonProps = {
  onClick?: React.MouseEventHandler<SVGSVGElement>
  color?: Colors
  className?: string
  backgroundColor?: string
  size?: fontSizes
}

/**
 * アイコンボタン
 */
function withIconStyle(
  Icon: typeof SvgIcon,
): React.ComponentType<IconButtonProps> {
  const IconWithStyle = (props: IconButtonProps) => {
    const { onClick, className, size = "sm", ...rest } = props
    const cursor = onClick ? 'pointer' : ''

    return (
      <IconWrapper cursor={cursor} size={size} {...rest}>
        <Icon
          css={className}
          fontSize="inherit"
          color="inherit"
          onClick={onClick}
        />
      </IconWrapper>
    )
  }

  return IconWithStyle
}

export const CloseIcon = withIconStyle(Close)

export const SearchIcon = withIconStyle(Search)

export const CloudUploadIcon = withIconStyle(CloudUpload)

export const CancelIcon = withIconStyle(Cancel)

export const CheckBoxOutlineBlankIcon = withIconStyle(CheckBoxOutlineBlank)

export const CheckBoxIcon = withIconStyle(CheckBox)

export const PersonIcon = withIconStyle(Person)

export const GitHubIcon = withIconStyle(GitHub)

export const PersonOutlineIcon = withIconStyle(PersonOutline)

export const ShoppingCartIcon = withIconStyle(ShoppingCart)
