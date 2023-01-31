import {getTables} from "/pages/api/handlers/tables.js"
import {list, findById} from "/pages/api/handlers/request.js"

export default async function handler(req, res) {
  try {
    let {motherboard} = await getTables()
    let { limit, sortBy, page, title, brand } = req.query;
    limit = limit ?? 10
    sortBy = sortBy ?? 'none'
    page = page ?? 1
    title = title ?? null
    brand = brand ?? null

    const data = await list(req, motherboard)
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
