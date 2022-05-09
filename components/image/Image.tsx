import NextImage, { ImageLoader } from 'next/image'

import { IMAGE_LOADER_URL } from 'config/env'

export interface ImageProps {
  alt?: string
  className?: string
  height: number
  src: string
  width: number
}

const customLoader: ImageLoader = ({ src, width, quality = 75 }) => `${IMAGE_LOADER_URL}${src}?w=${width}&q=${quality}`

const Image = ({ alt, className, height, src, width }: ImageProps) => (
  <NextImage alt={alt} className={className} height={height} loader={customLoader} src={src} width={width} />
)

export default Image
