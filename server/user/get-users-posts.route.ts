import {db} from '../database'

export function getUserPosts(req,res){
const userPosts = db.getUsersPosts(req.params.id);

if(userPosts) {
  res.status(200).json({userPosts:userPosts});
}
else {
  res.status(204);
}

}
