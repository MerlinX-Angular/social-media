import {db} from '../database';

export function readAllPosts(req, res) {
  let posts = db.readAllPosts();
  return res.status(200).json(posts);
}
