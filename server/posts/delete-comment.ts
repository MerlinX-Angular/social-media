import {db} from '../database';

export function deleteComment(req,res){
  let postCommentID = req.params.postCommentID;
  let deleteCommentID = req.params.deleteCommentID;
  const postComments = db.deleteComment(postCommentID,deleteCommentID);
  res.status(200).json(postComments);
}
