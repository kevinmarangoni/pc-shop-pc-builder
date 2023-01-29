import paginate from "/pages/api/handlers/pagination.js";
import sorting from "/pages/api/handlers/sorting.js";

export default async function (req, rawData){
    let data = rawData
    const query = req.query;
    const params = {
      limit: query.limit ?? 10,
      page: query.page ?? 1,
      sortBy: query.sortBy ?? "none", //'alphabetical', 'price', 'none'
      flow: query.flow ?? "descending", // 'descending', 'ascending'
    };
    
    data = await sorting(params.sortBy,params.flow ,data)
    data = await paginate(data, params.page, params.limit);

    return data
}
