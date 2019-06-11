import { decodeJwt } from './security/security';

export function retrieveUserIdFromRequest(req,res,next) {
  const jwt = req.cookies['siteCookie'];
  if (jwt) {
    handleSessionCookie(jwt, req,res)
    .then(() => next())
    .catch(err => {
      console.error(err);
      next();
    })
  }
  else {
    next();
  }
}

async function handleSessionCookie(jwt,req,res){
  try {
    const payload = await decodeJwt(jwt);
    req["userId"] = payload.sub;
  }
  catch(err){
    return res.clearCookie("siteCookie");
    //  console.log('Error could not extract user from request',err.message)
  }
}
