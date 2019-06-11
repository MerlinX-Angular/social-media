import {db} from '../database';

export function addNewPost(req,res){
  db.postAdd(req.body,req['userId']);
  res.status(200).json({message:'success'})
}
