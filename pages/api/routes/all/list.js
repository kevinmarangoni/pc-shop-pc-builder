import {getAllItemsRandomized} from "../../handlers/tables";

import request from "/pages/api/handlers/request.js"

export default async function handler(req, res) {
  try {
    let data = await getAllItemsRandomized()
    data = await request(req, data)
    res.status(200).json(data);

  }
  catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err}` });
  }
}
