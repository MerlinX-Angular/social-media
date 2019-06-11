import {db} from "../database";

export function findUsersById(req, res) {
  let user = db.findUserById(req.params.id);
  if(user){
    return res.status(200).json(user);
  }
  else{
    return res.status(204);
  }
}
