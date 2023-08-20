import pool from "./db/dbClient.js";

export async function insert(table, columns, values) {
  if (columns.length === values.length) {
    const columnsStr = columns.join(", ");
    let valuesStr = "";
    for (let i = 0; i < values.length; i++) valuesStr += "$" + (i + 1) + ", ";
    return pool.query({
      text: `INSERT INTO ${table} (${columnsStr}) VALUES (${valuesStr.substring(
        0,
        valuesStr.length - 2
      )})`,
      values: values,
    });
  }
}
