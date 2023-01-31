import { modifyPropertyValue } from "/pages/api/handlers/modificators.js";
import { getTables } from "/pages/api/handlers/tables.js";
export default async function handler(req, res) {
  try {
    let allTables = await getTables();
    const query = req.query;
    let { table, key } = query;
    if (table && typeof table !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid table parameter. Table must be a string." });
    }
    if (key && typeof key !== "string") {
      return res
        .status(400)
        .json({ error: "Invalid key parameter. Key must be a string." });
    }
    let data = await modifyPropertyValue(allTables[table], table ,key);
    res
      .status(200)
      .json({ response: "All items updated successfully", data: data });
  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
