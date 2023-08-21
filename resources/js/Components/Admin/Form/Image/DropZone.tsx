/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { colors } from '@/Styles'
import React, { useState, useRef, useCallback, useEffect } from 'react'
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

const isDragEvent = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer
}

const isInput = (value: EventTarget | null): value is HTMLInputElement => {
  return value !== null
}

const getFilesFromEvent = (e: React.DragEvent | React.ChangeEvent): File[] => {
  if (isDragEvent(e)) {
    return Array.from(e.dataTransfer.files)
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false)

    const files = value.concat(
      getFilesFromEvent(e).filter((f) =>
        acceptedFileTypes.includes(f.type as FileType),
      ),
    )
    onDrop && onDrop(files)
    onChange && onChange(files)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(false)

    const files = value.concat(
      getFilesFromEvent(e).filter((f) =>
        acceptedFileTypes.includes(f.type as FileType),
      ),
    )

    if (files.length == 0) {
      return window.alert(
        `次のファイルフォーマットは指定出来ません${acceptedFileTypes.join(
          ' ,',
        )}`,
      )
    }
    onDrop && onDrop(files)
    onChange && onChange(files)
  }

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(true)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(false)
  }, [])

  const handleClick = () => {
    inputRef.current?.click()
  }

  return (
    <>
      {/* ドロップゾーン */}
      <div
        ref={rootRef}
        css={[container, isFocused && focus, hasError && error]}
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
        {/* アイコン */}
        <div css={dropContent}>
          <FileUploadIcon />
        </div>
      </div>
    </>
  )
}
