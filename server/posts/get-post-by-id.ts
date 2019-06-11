import {db} from '../database';

export function getPostById(req, res){
  const selectedPost = db.getPostById(req.body.postId);
  return res.status(200).json(selectedPost);
}
