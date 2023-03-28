let baseUrl = 'http://localhost:3001/api';

if(process.env.NODE_ENV === 'production'){
  baseUrl = 'http://3.75.196.188:3001/api';
}

 export default baseUrl;