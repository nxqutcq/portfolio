interface ImageComponentProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  ...props
}) => {
  const handleContextMenu = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault()
  }

  return (
    <img
      onContextMenu={handleContextMenu}
      src={src}
      alt={alt || 'image'}
      {...props}
    />
  )
}
