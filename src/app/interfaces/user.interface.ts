export interface User  {
  id:string,
  username:string,
  email:string,
  image:string
  bio?:string,
  passwordDigest?:string,
  followingPost?:Array<string>,
  followingPeople?:Array<string>
}
