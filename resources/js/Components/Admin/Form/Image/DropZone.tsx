/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '@/Styles'
import React, { useState, useRef, useCallback } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import { FileType } from '@/Types'

const focus = css`
  border-color: #000;
`
const error = css`
  border-color: ${colors.error};
`
const inputFile = css`
  display: none;
`

/** ドラッグイベントの判定 */
const isDragEvent = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer
}
/** インプットイベントの判定 */
const isInput = (value: EventTarget | null): value is HTMLInputElement => {
  return value !== null
}
/**
 * ドラッグかインプットか判定しファイルを取得
 * そのままでは配列として扱えないため、明示的に配列に変換
 */
const getFilesFromEvent = (e: React.DragEvent | React.ChangeEvent): File[] => {
  // ドラッグの場合
  if (isDragEvent(e)) {
    return Array.from(e.dataTransfer.files)
    // インプットの場合
  } else if (isInput(e.target) && e.target.files) {
    return Array.from(e.target.files)
  }
  return []
}

type DropZoneProps = {
  value?: File[]
  name?: string
  acceptedFileTypes?: FileType[]
  hasError?: boolean
  width?: string
  height?: string
  onDrop?: (files: File[]) => void
  onChange?: (files: File[]) => void
}

/**
 * ドロップゾーン
 */
export default function DropZone(props: DropZoneProps) {
  const {
    value = [],
    name,
    acceptedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    hasError,
    width,
    height,
    onDrop,
    onChange,
  } = props

  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState<boolean>(false)

  // CSS
  const container = css`
    border: 1px dashed ${colors.gray};
    cursor: pointer;
    width: ${width};
    height: ${height};
  `
  const dropContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${width};
    height: ${height};
  `

  /** インプット画像の変更 */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false)
    // 保存可能なファイルか判定
    const files = value.concat(
      getFilesFromEvent(e).filter((f) =>
        acceptedFileTypes.includes(f.type as FileType),
      ),
    )
    // ファイルの変更
    onDrop && onDrop(files)
    onChange && onChange(files)
  }

  /** ドラッグアンドドロップのイベント */
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(false)
    // 保存可能なファイルか判定
    const files = value.concat(
      getFilesFromEvent(e).filter((f) =>
        acceptedFileTypes.includes(f.type as FileType),
      ),
    )
    // アラートメッセージ
    if (files.length == 0) {
      return window.alert(
        `次のファイルフォーマットは指定出来ません${acceptedFileTypes.join(
          ' ,',
        )}`,
      )
    }
    // ファイルの変更
    onDrop && onDrop(files)
    onChange && onChange(files)
  }

  /** ドラッグイン */
  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(true)
  }, [])
  /** ドラッグが領域内に入っている */
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])
  /** ドラッグアウト */
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(false)
  }, [])

  /** ドロップゾーンをクリック */
  const handleClick = () => {
    // 削除したデータが残っていた場合、同じデータを選ぶとonChangeイベントが発生しないため一旦削除する
    if (inputRef.current?.value) {
      inputRef.current.value = ''
    }
    // 非表示インプットをクリックする
    inputRef.current?.click()
  }

  return (
    <>
      {/* ドロップゾーン */}
      <div
        css={[container, isFocused && focus, hasError && error]}
        ref={rootRef}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        {/* 非表示インプット */}
        <input
          css={inputFile}
          ref={inputRef}
          type="file"
          name={name}
          accept={acceptedFileTypes.join(',')}
          onChange={handleChange}
        />
        {/* アイコン（ドロップゾーン内） */}
        <div css={dropContent}>
          <FileUploadIcon />
        </div>
      </div>
    </>
  )
}
