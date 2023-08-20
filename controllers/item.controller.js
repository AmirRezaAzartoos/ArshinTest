import pool from "../service/db/dbClient.js";
import { insert } from "../service/query.js";

export async function getAllItems(req, res, next) {
  pool
    .query({
      text: "SELECT * FROM ITEMS;",
      values: [],
    })
    .then((ack) => res.status(200).json(ack.rows))
    .catch((err) => console.log(err));
}

export async function createItem(req, res, next) {
  const { item_price, owner_id } = req.body;
  insert("items", ["item_price", "owner_id"], [item_price, owner_id])
    .then((ack) => res.status(200).json(ack))
    .catch((err) => console.log(err));
}

export async function updateItem(req, res, next) {
  const itemId = req.params.id;
  const { itemPrice } = req.body;
  if (itemId)
    pool
      .query({
        text: "UPDATE ITEMS SET item_price = $2 WHERE item_id = $1;",
        values: [itemId, itemPrice],
      })
      .then((ack) => res.status(200).json(ack))
      .catch((err) => console.log(err));
}
