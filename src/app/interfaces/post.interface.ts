import { Author } from './author.interface';

export interface Post {
  title:string,
  commentId:string, // must be number
  slug:string,
  body:string,
 createAt:string,  // maybe number
 updatedAt:string,  // maybe number
  tagList:Array<string>,
  description:string,
  author:Author,
}
