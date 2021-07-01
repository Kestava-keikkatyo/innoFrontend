
let baseurl = 'http://localhost:3001';

if(process.env.NODE_ENV === 'production'){
  baseurl = 'http://';
}
 export default baseurl;