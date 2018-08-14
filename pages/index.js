import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import _ from 'lodash'

const Index = ({ kvs }) => (
  <Layout>
    <ul>
    {_.map(kvs, (kv, i) => (
      <li key={i}>id={kv.id} key={kv.key} value=<code>{JSON.stringify(kv.value)}</code></li>
    ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/kvs")
  const data = await res.json()
  return {
    kvs: data,
  }
}

export default Index
