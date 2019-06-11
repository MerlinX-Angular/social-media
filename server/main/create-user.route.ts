import {db} from "../database";
import { createSessionToken } from '../security/security';
const bcrypt = require('bcrypt');
const saltRounds = 10;

export function createUser(req,res) {
  const userInfo = req.body;
  createUserAndSession(res,userInfo);
}

async function createUserAndSession(res,userInfo) {
  let checkEmail = db.findUserByEmail(userInfo.email);
  let checkUsername = db.findUserByUsername(userInfo.username);
  if(!!checkUsername && !!checkEmail) {
    return res.status(422).json({message:'such username and email already exist'})
  }
  else if(!!checkUsername){
    return res.status(422).json({message:'such username already exists'})
  }
  else if(!!checkEmail) {
    return res.status(422).json({message:'such email already exists'})
  }
  else {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = await bcrypt.hashSync(userInfo.password, salt);
    const user = db.createUser(userInfo.email,hash,userInfo.username);
    const sessionToken = await createSessionToken(user.id.toString());
    res.cookie('siteCookie', sessionToken);
    res.send([
      {'id':user.id,
      'email':userInfo.email,
      'username':userInfo.username,
      'sessionID':sessionToken}]
    )
  }
}
