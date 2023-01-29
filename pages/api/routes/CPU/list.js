import {getTables} from "/pages/api/handlers/tables.js"
import {list, findById} from "/pages/api/handlers/request.js"

export default async function handler(req, res) {
  try {
    let {cpu} = await getTables()
    let { limit, sortBy, page, title, brand } = req.query;
    limit = limit ?? 10
    sortBy = sortBy ?? 'none'
    page = page ?? 1
    title = title ?? null
    brand = brand ?? null


    if (isNaN(limit) || limit < 1) {
      return res.status(400).json({ error: "Invalid limit parameter. Limit must be higher than 0." });
    }
    if (isNaN(page) || page < 1) {
      return res.status(400).json({ error: "Invalid limit parameter. Limit must be higher than 0." });
    }
    if (!['none', 'priceAsc', 'priceDesc', 'alphaAsc', 'alphaDesc'].includes(sortBy)) {
      return res.status(400).json({ error: "Invalid sortingBy parameter. Available options are: none, priceAsc, priceDesc, alphaAsc, alphaDesc" });
    }
    if (title && typeof title !== 'string') {
      return res.status(400).json({ error: "Invalid search parameter. Search must be a string." });
    }
    if (brand && typeof brand !== 'string') {
      return res.status(400).json({ error: "Invalid brand parameter. Brand must be a string." });
    }
    const data = await list(req, cpu)
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
