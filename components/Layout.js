import Head from 'next/head'
import Header from './Header'

const Layout = (props) => (
  <div className="container">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <style jsx global>{`
      * { box-sizing:border-box; }
      body { padding:8px 16px; font-family:'Open Sans', sans-serif; font-size:16px; cursor:default; }
      h1 { margin:0 0 30px; text-align:left; font-size:30px; font-weight:800; color:#333; }
      h2 { text-align:left; font-size:24px; color:#880E4F; font-weight:600; }
      a:hover { cursor:pointer; }
      .subtitle { margin:0 0 15px; font-size:16px; color:#888; text-align:left; font-style:italic; }
      .block { margin:0 0 10px; padding:0; vertical-align:top; }
      .list { display:flex; flex-wrap:wrap; }
      .left { float:left; }
      .contextual { float:right; }
      .center { text-align:center; }

      .container { margin:10px 20px; }
    `}</style>
    {props.children}
  </div>
)

export default Layout
