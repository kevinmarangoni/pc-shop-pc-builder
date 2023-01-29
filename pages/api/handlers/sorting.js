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

export default async function (sortingBy, data) {
  try {
    switch (sortingBy) {
      case "alphaAsc":
        return sortAlphabeticalAscending(data);
      case "alphaDesc":
        return sortAlphabeticalDescending(data);
      case "priceAsc":
        return sortPriceAscending(data);
      case "priceDesc":
        return sortPriceDescending(data);
      case null:
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
