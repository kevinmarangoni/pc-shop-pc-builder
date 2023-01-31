import {getAllItemsRandomized} from "../../handlers/tables";
import {list} from "/pages/api/handlers/request.js"

export default async function handler(req, res) {
  try {
    let { limit, sortBy, page, title, brand, priceFrom, priceTo } = req.query;
    limit = limit ?? 10
    page = page ?? 1
    sortBy = sortBy ?? null //null, 'priceAsc', 'priceDesc', 'alphaAsc', 'alphaDesc'
    title = title ?? null
    brand = brand ?? null
    priceFrom = priceFrom ?? 0
    priceTo = priceTo ?? Infinity

    if (isNaN(limit) || limit < 1) {
      return res.status(400).json({ error: "Invalid limit parameter. Limit must be higher than 0." });
    }
    if (isNaN(page) || page < 1) {
      return res.status(400).json({ error: "Invalid limit parameter. Limit must be higher than 0." });
    }
    if (![null, 'priceAsc', 'priceDesc', 'alphaAsc', 'alphaDesc'].includes(sortBy)) {
      return res.status(400).json({ error: "Invalid sortingBy parameter. Available options are: none, priceAsc, priceDesc, alphaAsc, alphaDesc" });
    }
    let data = await getAllItemsRandomized()
    data = await list(req, data)
    res.status(200).json(data);
  }
  catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
