const ImgWithFallback = ({
    src,
    fallback,
    type = 'image/webp',
    ...delegated
  }) => {
    return (
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} alt="" {...delegated} />
      </picture>
    )
  }

  export default ImgWithFallback;