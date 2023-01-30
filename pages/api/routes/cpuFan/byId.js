import {getTables} from "/pages/api/handlers/tables.js"
import {findById} from "/pages/api/handlers/request.js"

export default async function handler(req, res) {
  try {
    let {cpuFan} = await getTables()
    let { id } = req.query;
    if(!id){
        return res.status(400).json({response: 'Missing id...'});
    }
    const data = await findById(cpuFan, id)
    if (!data){
        return res.status(404).json({response: `No matching items found`})
    }
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
