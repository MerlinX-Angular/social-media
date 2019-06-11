import {db} from '../database'

export function deleteFollowingPerson(req,res){
  let userID = req.params.id;
  const user = db.findUserById(req['userId']);
  const result = db.deleteFollowingPerson(user,userID);
  res.status(200).json({message:'success'});
}
