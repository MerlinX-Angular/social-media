import {db} from '../database'

export function filterFollowingPosts(req,res){
  const user = db.findUserById(req['userId']);
  const id = req.params.id;
  const result = db.filterFollowingPosts(user,id);
  res.status(200).json(result);
}
