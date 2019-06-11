import {db} from '../database';

export function deletePost(req,res){
  const userPosts = db.postDelete(req.params.slug);
  res.status(200).json({message:'success'});
}
