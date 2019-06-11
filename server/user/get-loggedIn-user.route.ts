import {db} from '../database'

export function getLoggedInUser(req,res){
  if(req['userId']){
    const user = db.findUserById(req['userId']);
    return res.status(200).json({id:user.id, email:user.email, username:user.username, image:user.image, bio:user.bio});
  }
  else {
    return res.status(204).json({message:'null'});
  }
}
