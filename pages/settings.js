import React from "react"
import Layout from "../components/Layout.js"
import Link from "next/link"
import fetch from "isomorphic-unfetch"
import _ from "lodash"

const Settings = ({ kvs }) => (
  <Layout>
    <h1>Settings</h1>
    <p>
      Those settings are fetched from the <code>kvs</code> database table.
    </p>
    <div className="inline-block w-auto border-t border-b border-grey-light overflow-hidden relative">
      <div className="overflow-y-auto scrollbar-w-2 scrollbar-track-grey-lighter scrollbar-thumb-rounded scrollbar-thumb-grey scrolling-touch">
        <table className="text-left table-collapse">
          <thead>
            <tr>
              {_.map(["id", "key", "value"], (title, i) => (
                <th
                  key={i}
                  className="font-semibold text-orange-darker py-2 px-3 bg-grey-lightest"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="align-baseline text-grey-darker">
            {_.map(kvs, (kv, i) => (
              <tr key={i}>
                <td className="py-2 px-3 border-t border-grey-light font-mono whitespace-no-wrap">
                  {kv.id}
                </td>
                <td className="py-2 px-3 border-t border-grey-light font-mono whitespace-no-wrap">
                  {kv.key}
                </td>
                <td className="py-2 px-3 border-t border-grey-light font-mono whitespace-no-wrap">
                  <pre>{JSON.stringify(kv.value, null, 2)}</pre>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
)

Settings.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/kvs")
  const data = await res.json()
  return {
    kvs: data,
  }
}

export default Settings
