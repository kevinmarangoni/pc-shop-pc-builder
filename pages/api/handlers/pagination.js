export default async function paginate(data, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
}