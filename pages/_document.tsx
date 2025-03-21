import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-style-mode" content="1" />
        <title>Oitlo Solutions</title>   
           <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" sizes="32x32 64x64 128x128"  />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animation.css" />
        <link rel="stylesheet" href="/css/feature.css" />
        <link rel="stylesheet" href="/css/magnify.min.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/slick-theme.css" />
        <link rel="stylesheet" href="/css/lightbox.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/modernizr.min.js"></script>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/bootstrap.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/waypoint.min.js"></script>
        <script src="/js/wow.min.js"></script>
        <script src="/js/counterup.min.js"></script>
        <script src="/js/feather.min.js"></script>
        <script src="/js/sal.min.js"></script>
        <script src="/js/masonry.js"></script>
        <script src="/js/imageloaded.js"></script>
        <script src="/js/magnify.min.js"></script>
        <script src="/js/lightbox.js"></script>
        <script src="/js/slick.min.js"></script>
        <script src="/js/easypie.js"></script>
        <script src="/js/text-type.js"></script>
        <script src="/js/jquery.style.swicher.js"></script>
        <script src="/js/js.cookie.js"></script>
        <script src="/js/jquery-one-page-nav.js"></script>
        <script src="/js/main.js"></script>
      </body>
    </Html>
  );
}