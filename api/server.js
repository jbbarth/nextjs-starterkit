import kv from "./controllers/kvs";

/* eslint import/default:0 */
module.exports = app => {
  app.get("/api", (req, res) => {
    return res.status(200).send({
      message: "API Welcome!",
    });
  });

  app.get("/api/kvs", kv.list);
  app.get("/api/kvs/:id", kv.get);

  app.get("/api/*", (req, res) => {
    return res.status(404).send({
      message: "Route not found"
    })
  })
}
