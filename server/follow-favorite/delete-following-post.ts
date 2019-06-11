import {db} from '../database'

export function unfollowPost(req,res){
  let userID = req.params.id;
  const user = db.findUserById(req['userId']);
  const result = db.unfollowPost(user,userID);
  res.status(200).json({message:'success'});
}
