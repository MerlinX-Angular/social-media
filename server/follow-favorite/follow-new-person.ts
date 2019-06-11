import {db} from '../database'

export function followNewPerson(req,res){
  const authorName = req.body.authorID;
  const user = db.findUserById(req['userId']);
  user.followingPeople.push(authorName);
  res.status(200).json({message:'success'});
}
