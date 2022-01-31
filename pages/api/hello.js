// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from './lol.json';
export default function handler(req, res) {
const value = data.filter(detail=>detail.name==req.query.namer)
if(value.length==0){
  res.status(200).json([{name:"Wrong name",email:"",age:0}]);

}else{
  res.status(200).json(value)

}
}
