interface ImageComponentProps {
  src: string
  alt?: string
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt = 'Protected',
}) => {
  const handleContextMenu = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault()
  }

  return (
    <img
      src={src}
      alt={alt}
      onContextMenu={handleContextMenu}
      style={{
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  )
}
