import pool from "../service/db/dbClient.js";
import bcrypt from "bcrypt";
import { insert } from "../service/query.js";

async function hashPassword(plaintextPassword) {
  return await bcrypt.hash(plaintextPassword, 10);
}

export async function getAllUsers(req, res, next) {
  pool
    .query({
      text: "SELECT * FROM USERS;",
      values: [],
    })
    .then((ack) => res.status(200).json(ack.rows))
    .catch((err) => console.log(err));
}

export async function createUser(req, res, next) {
  const { username, password, total_cost } = req.body;
  const hashedPassword = await hashPassword(password);
  insert(
    "users",
    ["username", "password", "total_cost", "created_on"],
    [username, hashedPassword, total_cost, new Date()]
  )
    .then((ack) => res.status(200).json(ack))
    .catch((err) => console.log(err));
}

// export async function updateUser(req, res, next) {
//   const { id, username, password, item_id, itemPrice } = req.body;
//   const hashedPassword = hashPassword(password);
//   pool
//     .query({
//       text: "INSERT INTO USERS (username, password, item_id, itemPrice) VALUES ($1, $2, $3, $4)",
//       values: [username, hashedPassword, item_id, itemPrice],
//     })
//     .then((ack) => res.status(200).json(ack))
//     .catch((err) => console.log(err));
// }
