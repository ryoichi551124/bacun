/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import CloseIcon from '@mui/icons-material/Close'

const image = css`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`

const closeBox = css`
  display: flex;
  align-items: ceenter;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: rgba(44, 44, 44, 0.66);
  cursor: pointer;
`
const close = css`
  color: white;
  width: 20px;
  height: 20px;
`

type ImagePreviewProps = {
  src?: string
  width?: string
  height?: string
  onRemove?: (src: string) => void
}

export default function ImagePreview({
  src,
  width,
  height,
  onRemove,
}: ImagePreviewProps) {
  // CSS
  const container = css`
    position: relative;
    width: ${width};
    height: ${height};
  `

  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onRemove && src && onRemove(src)
    return false
  }

  return (
    <div css={container}>
      {/* 画像表示 */}
      <img src={src} height={height} width={width} css={image} />
      {/* 削除アイコン */}
      <div css={closeBox} onClick={handleCloseClick}>
        <CloseIcon css={close} />
      </div>
    </div>
  )
}
