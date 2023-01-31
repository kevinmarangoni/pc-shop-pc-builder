
export function searchById(data, id) {
    return data.find(item => item.id === id);
}

export function searchByTitle(data, searchString) {
    return data.filter(item => item.title.toLowerCase().includes(searchString.toLowerCase()));
}

export function searchByBrand(data, brand) {
    return data.filter(item => item.brand === brand);
}

