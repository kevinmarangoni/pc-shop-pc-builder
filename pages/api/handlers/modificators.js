import fs from 'fs';
import existingIds from '/pages/api/database/newTables/existingIds.json'

export async function modifyPropertyValue(table, tableName, key) {
    table.forEach(item => {
        if(item[key] && Object.keys(item[key]).length == 0){
            const array = item[key].split(" ");
            item[key] = {
                value: Number(array[0]),
                unit: array[1]
            }
        }
    });

    fs.writeFileSync(`pages/api/database/newTables/${tableName}.json`, JSON.stringify(table));
    return table;
}

export async function updateIds(table, tableName) {
    table.forEach(item => {
        item.id = generateASIN(existingIds);
        existingIds.push(item.id);
    });
    fs.writeFileSync(`pages/api/database/newTables/${tableName}.json`, JSON.stringify(table));
    fs.writeFileSync(`pages/api/database/newTables/existingIds.json`, JSON.stringify(existingIds));
    return table;
}



function generateASIN(existingIds) {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';// array com os ids existentes
    while (true) {
        for (let i = 0; i < 10; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        if (!existingIds.includes(id)) {
            break;
        }
    }
    existingIds.push(id.toLocaleUpperCase());
    return id.toLocaleUpperCase();
}