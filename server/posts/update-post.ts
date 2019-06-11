import {db} from '../database';

export function updatePost(req,res){
  db.postUpdate(req.params.slug,req.body);
  res.status(200).json({message:'success'});
}
