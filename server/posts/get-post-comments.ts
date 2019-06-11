import {db} from '../database';

export function getPostComments(req,res){
  const commentId = req.params.commentId;
  const userPosts = db.getPostComments(commentId);
  res.status(200).json(userPosts);
}
