const express = require("express")
const next = require("next")
const setupApi = require("./api")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev, dir: "./client" })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // serve /api/* endpoints first
    setupApi(server)

    // server-side clean urls
    // server.get('/p/:id', (req, res) => {
    //   const actualPage = '/post'
    //   const queryParams = { id: req.params.id }
    //   app.render(req, res, actualPage, queryParams)
    // })

    // serve all remaining routes with nextjs' handler
    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      /* eslint no-console:0 */
      console.log("> Ready on http://localhost:3000")
    })
  })
  .catch(ex => {
    /* eslint no-console:0 */
    console.error(ex.stack)
    process.exit(1)
  })
