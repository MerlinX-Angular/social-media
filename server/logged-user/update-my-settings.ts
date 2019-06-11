import {db} from '../database'

export function updateMySettings(req,res){
  db.updateUserSettings(req['userId'],req.body);
  res.status(200).json({message:'success'});
}
