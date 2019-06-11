import {db} from '../database'

export function filterFollowingPeople(req,res){
  const user = db.findUserById(req['userId']);
  const username = req.params.id;
  const result = db.filterFollowingPeople(user,username);
  res.status(200).json(result);
}
