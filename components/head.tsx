import React from 'react'

const Head = () => {
  return (

    <>
  <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-style-mode" content="1" /> {/* Ensure it's a string */}
      <title>Oitlo Solution</title>
      {/* Favicon */}
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png"sizes="32x32 64x64 128x128" />
      {/* CSS Styles */}
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/css/animation.css" />
      <link rel="stylesheet" href="/css/feature.css" />
      <link rel="stylesheet" href="/css/magnify.min.css" />
      <link rel="stylesheet" href="/css/slick.css" />
      <link rel="stylesheet" href="/css/slick-theme.css" />
      <link rel="stylesheet" href="/css/lightbox.css" />
      <link rel="stylesheet" href="/css/style.css" />
</>
    
  )
}

export default Head