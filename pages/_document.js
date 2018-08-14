// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    return { html, head, errorHtml, chunks }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/static/css/bundle.css" />
        </Head>
        <body>
          <div className="container mx-auto">
            <Main />
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
