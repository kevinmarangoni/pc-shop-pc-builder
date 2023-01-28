

export async function sortPriceAscending(data, key) {
    return data.sort((a, b) => {
        return a[key] > b[key] ? 1 : -1;
    });
}

export async function sortPriceDescending(data, key) {
    return data.sort((a, b) => {
        return a[key] < b[key] ? 1 : -1;
    });
}

export async function sortAlphabeticalAscending(data, key) {
    return data.sort((a, b) => {
        return a[key].localeCompare(b[key]);
    });
}

export async function sortAlphabeticalDescending(data, key) {
    return data.sort((a, b) => {
        return b[key].localeCompare(a[key]);
    });
}