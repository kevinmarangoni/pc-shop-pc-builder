import fs from "fs";
import existingIds from "/pages/api/database/newTables/existingIds.json";
import request from "request-promise";
import cheerio from "cheerio";

export async function modifyPropertyValue(table, tableName, key) {
  table.forEach((item) => {
    if (item[key] && item[key] != "") {
      const array = item[key].split(" ");
      item[key] = {
        value: Number(array[0]) ?? 0,
        unit: array[1] ?? "",
      };
    }
    if (item[key] == "") {
      item[key] = {
        value: 0,
        unit: "",
      };
    }
  });

  fs.writeFileSync(
    `pages/api/database/${tableName}.json`,
    JSON.stringify(table)
  );
  return table;
}

export async function updateIds(table, tableName) {
  table.forEach((item) => {
    item.id = generateASIN(existingIds);
    existingIds.push(item.id);
  });
  fs.writeFileSync(
    `pages/api/database/${tableName}.json`,
    JSON.stringify(table)
  );
  fs.writeFileSync(
    `pages/api/database/newTables/existingIds.json`,
    JSON.stringify(existingIds)
  );
  return table;
}

function generateASIN(existingIds) {
  let id = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // array com os ids existentes
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

export async function imageFixing(tableData, tableName, tag, xpath) {
  try {
    const data = tableData
    const getImages = async (link) => {
      const page = await request({
        uri: link,
        transform: (body) => cheerio.load(body),
      });
      const images = [];
      page(tag, xpath).each((i, elem) => {
        images.push(elem.attribs.src);
      });
      return images;
    };

    (async () => {
      for (const obj of data) {
        obj.img = await getImages(obj.link);
      }
      fs.writeFileSync(`pages/api/database/${tableName}.json`, JSON.stringify(data, null, 2));
    })();
    return data;
  } catch (err) {
    console.log("error at getting images from link: ", err);
  }
}
