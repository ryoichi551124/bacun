/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useCallback, useMemo } from 'react'
import ImagePreview from '@/Components/Admin/Form/Image/ImagePreview'
import DropZone from '@/Components/Admin/Form/Image/DropZone'

const container = css`
  margin-top: 0.5rem;
`

export type FileData = {
  src?: string
  file?: File
}

type InputImageProps = {
  name?: string
  images: FileData[]
  hasError?: boolean
  width?: string
  height?: string
  onChange: (images: FileData[]) => void
}

export default function InputImage(props: InputImageProps) {
  const {
    name,
    images,
    hasError,
    width = '200px',
    height = '200px',
    onChange,
  } = props

  const isDropZoneDisplay = images.length === 0 ? 'block' : 'none'

  const files = useMemo(
    () => images.map((img: FileData) => img.file as File),
    [images],
  )

  const onRemove = useCallback(
    (src: string) => {
      const image = images.find((img: FileData) => img.src === src)
      const newImages = images.filter((img: FileData) => img.src !== src)

      if (image) {
        if (image.file && image.src) {
          URL.revokeObjectURL(image.src)
          delete image.src
        }
        onChange && onChange(newImages)
      }
    },
    [images, onChange],
  )

  const onDrop = useCallback(
    (files: File[]) => {
      const newImages = []

      for (const file of files) {
        const img = images.find((img: FileData) => img.file === file)
        !img && newImages.push({ file, src: URL.createObjectURL(file) })
      }
      onChange && onChange(newImages)
    },
    [images, onChange],
  )

  return (
    <div css={container}>
      {/* 画像プレビュー表示 */}
      {images?.length > 0 && (
        <ImagePreview
          src={images[0].src}
          width={width}
          height={height}
          onRemove={onRemove}
        />
      )}
      {/* 画像ファイルドロップゾーン */}
      <div style={{ display: isDropZoneDisplay }}>
        <DropZone
          value={files}
          name={name}
          hasError={hasError}
          width={width}
          height={height}
          onDrop={onDrop}
        />
      </div>
    </div>
  )
}
