import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,200&display=swap"
     rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;1,200;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"/>
        <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
            <link
            rel="preload"
            href="/fonts/Magistral/Magistral-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
            <link
            rel="preload"
            href="/fonts/Magistral/Magistral-Book.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
            <link
            rel="preload"
            href="/fonts/Magistral/Magistral-ExtraBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
            <link
            rel="preload"
            href="/fonts/Magistral/Magistral-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/articulat/Articulat_0TF/ArticulatCF-Normal.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}