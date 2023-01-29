import {getTables} from "/pages/api/handlers/tables.js"
import handleRequest from "/pages/api/handlers/request.js"

export default async function handler(req, res) {
  try {
    let {cpu} = await getTables()
    const data = await handleRequest(req, cpu)
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
