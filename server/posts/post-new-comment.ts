import {db} from '../database';

export function postNewComment(req,res){
  const commentsID = req.params.commentsID;
  const newComment = req.body.newComment;
  const user = db.findUserById(req['userId']);
  let comments = db.postNewComment(commentsID,newComment,user)
  res.status(200).json(comments);
}
