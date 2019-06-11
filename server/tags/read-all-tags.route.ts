import {db} from "../database";

export function readAllTags(req, res) {
  let tags = db.getPopularTags();
  return res.status(200).json(tags);
}
