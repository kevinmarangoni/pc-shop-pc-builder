import paginate from "/pages/api/handlers/pagination.js";
import sorting from "/pages/api/handlers/sorting.js";

export async function list(req, rawData){
    let data = rawData
    const query = req.query;
    const params = {
      limit: query.limit ?? 10,
      page: query.page ?? 1,
      sortBy: query.sortBy ?? null, //null, 'priceAsc', 'priceDesc', 'alphaAsc', 'alphaDesc'
      filterBy: query.filterBy ?? null,
      searchTerm: query.searchTerm ?? null
      // title: query.title ?? null,
      // brand: query.brand ?? null,
      // priceFrom: query.priceFrom ?? 0,
      // priceTo: query.priceTo ?? Infinity,
    };
    
    data = await sorting(params.sortBy, data)
    //data = await filter(data, params.filterBy, )
    data = await paginate(data, params.page, params.limit);

    return data
}

export async function findById(req, rawData){
  let data = rawData
}


