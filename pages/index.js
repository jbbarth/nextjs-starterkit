import Layout from '../components/Layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import _ from 'lodash'

const Index = ({ kvs }) => (
  <Layout>
    <h2>KVs</h2>
    <div className="inline-block w-auto border-t border-b border-grey-light overflow-hidden relative">
      <div className="overflow-y-auto scrollbar-w-2 scrollbar-track-grey-lighter scrollbar-thumb-rounded scrollbar-thumb-grey scrolling-touch">
        <table className="text-left table-collapse">
          <thead>
            <tr>
              {_.map(["id", "key", "value"], (title, i) => (
                <th key={i} className="text-sm font-semibold text-grey-darker py-2 px-3 bg-grey-lightest">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="align-baseline">
            {_.map(kvs, (kv, i) => (
              <tr key={i}>
                <td className="py-2 px-3 border-t border-grey-light font-mono text-xs text-purple-dark whitespace-no-wrap">
                  {kv.id}
                </td>
                <td className="py-2 px-3 border-t border-grey-light font-mono text-xs text-purple-dark whitespace-no-wrap">
                  {kv.key}
                </td>
                <td className="py-2 px-3 border-t border-grey-light font-mono text-xs text-purple-dark whitespace-no-wrap">
                  <code>{JSON.stringify(kv.value, null, 2)}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
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
