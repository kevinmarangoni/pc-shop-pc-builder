import { imageFixing } from "/pages/api/handlers/modificators.js";
import { getTables } from "/pages/api/handlers/tables.js";
export default async function handler(req, res) {
  try {
    let allTables = await getTables();
    const query = req.query;
    let { table } = query;
    if (table && typeof table !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid table parameter. Table must be a string." });
    }
    let tag = "img"
    let xpath = "/html/body/div[1]/div[2]/div[9]/div[6]/div[3]/div[1]/div[1]/div/div/div[1]/ul/li[4]/span/span/span/span/img"
    let data = await imageFixing(allTables[table], table, tag, xpath);
    res
      .status(200)
      .json({ response: "All items updated successfully", data: data });
  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
