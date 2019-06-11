import {db} from '../database'

export function filterPostsBySearchTag(req,res){
  const searchTag = req.params.tag;
  const result = db.filterPostsBySearchTag(searchTag);
  res.status(200).json(result);
}
