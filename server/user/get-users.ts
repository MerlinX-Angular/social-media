import {db} from "../database";

export function readAllUsers(req, res) {
  let users = db.readAllUsers();
  return res.status(200).json(users);
}
