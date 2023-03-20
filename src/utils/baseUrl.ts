
let baseUrl = 'http://localhost:3001/api';

if(process.env.NODE_ENV === 'production'){
  baseUrl = 'http://3.65.218.23:3001/api';
}

 export default baseUrl;