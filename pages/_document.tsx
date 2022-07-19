import Document, {Html,Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
  render(){
    return(
    <Html>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
   
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="Ajudamos sua empresa a encontrar com seus clientes.
                                             Criação de websites, Lojas on-line e Sistemas web." />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://vector-zero.vercel.app/" />
    <meta property="og:image" content="/images/img_w.jpg" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
    </Html>
    )
  }
}