import { updateIds } from "/pages/api/handlers/modificators.js";
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
    let data = await updateIds(allTables[table], table);
    res
      .status(200)
      .json({ response: "All items updated successfully", data: data });
  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
