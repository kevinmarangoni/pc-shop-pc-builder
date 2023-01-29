import rawCPUsList from "/pages/api/database/processors.json";
import paginate from "../../handlers/pagination";
import sorting,{
  sortPriceAscending,
  sortPriceDescending,
  sortAlphabeticalAscending,
  sortAlphabeticalDescending,
} from "../../handlers/sorting";
import randomizer from "../../handlers/randomizer";

export default async function handler(req, res) {
  try {
    let randomized = await randomizer(rawCPUsList);
    const query = req.query;

    const params = {
      limit: query.limit ?? 10,
      page: query.page ?? 1,
      sortingBy: query.sortingBy ?? "none", //'aphabetical', 'price', 'none'
      flow: query.flow ?? "descending", // 'descending', 'ascending', 'none'
    };

    let paginated = await paginate(raw, params.page, params.limit); //data, pageNumber, pageSize
    let data;
    res.status(200).json(data);

    
  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
