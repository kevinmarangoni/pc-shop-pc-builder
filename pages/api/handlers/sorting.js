

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

export default async function (sortingBy, flow, data) {
    switch (sortingBy) {
      case "aphabetical":
        if(flow == 'descending'){
  
        }
        if(flow == 'ascending'){
          
        }
        return ;
      case "price":
        if(flow == 'descending'){
  
        }
        if(flow == 'ascending'){
          
        }
        return;
      case "none":
        
        return;
  
      default:
        console.log("error at choosing sorting method");
        break;
    }
  }