import randomizer from "./randomizer";

export async function sortPriceAscending(data) {
  return data.sort((a, b) => {
    return a.price > b.price ? 1 : -1;
  });
}

export async function sortPriceDescending(data) {
  return data.sort((a, b) => {
    return a.price < b.price ? 1 : -1;
  });
}

export async function sortAlphabeticalAscending(data) {
  return data.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
}

export async function sortAlphabeticalDescending(data) {
  return data.sort((a, b) => {
    return b.title.localeCompare(a.title);
  });
}

export default async function (sortingBy, flow, data) {
  try {
    switch (sortingBy) {
      case "alphabetical":
        if (flow == "descending") {
          return sortAlphabeticalDescending(data);
        }
        if (flow == "ascending") {
          return sortAlphabeticalAscending(data);
        }
        break;
      case "price":
        if (flow == "descending") {
          return sortPriceDescending(data);
        }
        if (flow == "ascending") {
          return sortPriceAscending(data);
        }
        break;
      case "none":
        return await randomizer(data);
      default:
        console.log(
          "error at choosing sorting method, returning randomized data instead"
        );
        return randomizer(data);
    }
  } catch (err) {
    console.log(`error at choosing sorting method, ${err}`);
  }
}
