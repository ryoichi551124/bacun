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

/**
 * 画像の入力・表示
 */
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

  /** 入力されているファイルをFile型として扱う */
  const files = useMemo(
    () => images.map((img: FileData) => img.file as File),
    [images],
  )

  /** 表示しているファイル（URL)の削除 */
  const onRemove = useCallback(
    (src: string) => {
      // 入力済みのファイルURLと同じか判定
      const image = images.find((img: FileData) => img.src === src)
      const newImages = images.filter((img: FileData) => img.src !== src)
      // 同じファイルであれば削除
      if (image) {
        if (image.file && image.src) {
          // 一時的に作ったファイルのURLを削除
          URL.revokeObjectURL(image.src)
          delete image.src
        }
        onChange && onChange(newImages)
      }
    },
    [images, onChange],
  )

  /** 選択されているファイルと同じで無ければ変更する */
  const onDrop = useCallback(
    (files: File[]) => {
      const newImages = []
      // 入力されているファイルの変更を確認
      for (const file of files) {
        const img = images.find((img: FileData) => img.file === file)
        // 一時的なファイルのURLを作成
        !img && newImages.push({ file, src: URL.createObjectURL(file) })
      }
      onChange && onChange(newImages)
    },
    [images, onChange],
  )

  // ファイル未選択ならドロップゾーン、選択済みであればプレビュー表示
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
