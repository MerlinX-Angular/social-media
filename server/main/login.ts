import {Request, Response} from "express";
import {db} from "../database";
import {createSessionToken} from '../security/security';
const bcrypt = require('bcrypt');

export function login(req: Request, res: Response) {
  const credentials = req.body;
  const user = db.findUserByEmail(credentials.email);
  if (!user) {
    res.sendStatus(403);
  }
  else {
    loginAndBuildResponse(credentials, user, res);
  }

}

async function loginAndBuildResponse(credentials:any, user,  res: Response) {
  try {
    const sessionToken = await attemptLogin(credentials, user);
    //console.log("Login successful");
    res.cookie("siteCookie", sessionToken, {httpOnly : false} );
    res.status(200).json({id:user.id, email:user.email,username:user.username,image:user.image});
  }
  catch(err) {
    console.log("Login failed:", err);
    res.sendStatus(403);
  }
}

async function attemptLogin(credentials:any, user) {
  const isPasswordValid = bcrypt.compareSync(credentials.password,user.passwordDigest);
  if (!isPasswordValid) {
    throw new Error("Password Invalid");
  }

  return createSessionToken(user.id.toString());
}
