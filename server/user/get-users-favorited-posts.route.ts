import {db} from '../database'

export function getUsersFavoritedPosts(req,res){
const user = db.findUserById(req.params.id);

if(user) {
  const favorite = db.getUsersFavoritedPosts(user.followingPost);
  res.status(200).json({favoritedPosts:favorite});
}
else {
  res.status(204);
}

}
