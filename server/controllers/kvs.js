/* eslint import/named:0 */
import { KV } from "../models"

const getKVProps = kv => {
  return {
    id: kv.id,
    key: kv.key,
    value: kv.value,
    createdAt: kv.createdAt,
    updatedAt: kv.updatedAt,
  }
}

module.exports = {
  async list(req, res) {
    try {
      const kvs = await KV.findAll()
      return res.status(200).send(kvs.map(getKVProps))
    } catch (err) {
      /* eslint no-console:0 */
      console.log(err)
      return res.status(500).send(err)
    }
  },

  async get(req, res) {
    try {
      const id = parseInt(req.params.id, 10)
      const kv = await KV.findById(id)
      if (!kv) {
        return res.status(404).send({
          message: `No object matching ID=${id}`,
        })
      }
      return res.status(200).send(getKVProps(kv))
    } catch (err) {
      /* eslint no-console:0 */
      console.log(err)
      return res.status(500).send(err)
    }
  },
}
