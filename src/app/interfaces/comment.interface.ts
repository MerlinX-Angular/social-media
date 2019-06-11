import { Author } from './author.interface';

export interface Comment {

  id:number,
  comments:[
    {
      createdAt:string,
      updatedAt:string,
      body:string,
      author:Author,
    }
  ]
}
