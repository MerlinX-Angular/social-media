import {db} from '../database'

export function followNewPost(req,res){
  const newPost = req.body.slug;
  const user = db.findUserById(req['userId']);
  user.followingPost.push(newPost);
  res.status(200).json({message:'success'});
}
