let baseUrl = 'http://localhost:3001/api';

if(process.env.NODE_ENV === 'production'){
  baseUrl = 'http://18.197.146.251:3001/api';
}

 export default baseUrl;