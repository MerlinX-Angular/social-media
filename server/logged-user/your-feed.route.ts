import {db} from '../database'

export function getYourFeed(req,res){
const user = db.findUserById(req['userId']);

if(user) {
  const feed = db.findYourFeed(user.followingPeople);
  res.status(200).json({filteredFeed:feed});
}
else {
  res.status(204).json({message:'no user found'});
}

}
