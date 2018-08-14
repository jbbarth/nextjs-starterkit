import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import _ from 'lodash'

const Index = ({ kvs }) => (
  <Layout>
    <h2>KVs</h2>
    <table className="text-left table-collapse">
      <thead>
        <tr>
          {_.map(["id", "key", "value"], (title, i) => (
            <th key={i} className="text-sm font-semibold text-grey-darker p-2 bg-grey-lightest">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="align-baseline">
        {_.map(kvs, (kv, i) => (
          <tr key={i}>
            <td className="p-2 border-t border-grey-light font-mono text-xs text-purple-dark whitespace-no-wrap">
              {kv.id}
            </td>
            <td className="p-2 border-t border-grey-light font-mono text-xs text-purple-dark whitespace-no-wrap">
              {kv.key}
            </td>
            <td className="p-2 border-t border-grey-light font-mono text-xs text-purple-dark whitespace-no-wrap">
              <code>{JSON.stringify(kv.value, null, 2)}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
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
