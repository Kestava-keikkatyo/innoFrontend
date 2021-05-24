/**
 * @module service/file
 * @desc file requests to backend.
 */
 import {v4 as uuidv4}  from 'uuid'
 import axios from 'axios'
 import {File} from '../types/types'
 import { loadUser } from '../utils/storage'

 const baseUrl = 'http://localhost:3001/api/uploads'


 /**
  * @function
  * @desc Helper function for setting up request header.
  */
 const authHeader = () => {
   return {
     headers: { 'x-access-token': `${loadUser().token}` }
   }
 }



 /**
  * @function
  * @desc Posts new feeling to the route.
  * @param {File} upload new file object
  */
 const postFile = async (upload: File) => {
   //return await axios.post(baseUrl, file, authHeader())

   console.log("SERVICE upload",upload)

   let fileUploaded:any = upload.file

   let file:any = fileUploaded.name;
   // split the filename to get the name and type
   let fileParts = fileUploaded.name.split('.');
  console.log("fileUploaded",fileUploaded.name)
   let fileName = fileParts[0]
   let fileType = fileParts[1]
   console.log("preparing the upload")

   // Generate unique id to add it to the filename, since AWS S3 overrides files which have the same name
   const uniqueId = uuidv4()+'-'

   file = uniqueId+file;
   fileName = uniqueId+fileName;

   let newFile:any = {
    file: file,
    fileName: fileName,
    fileType: fileType
  }

  let res:any ={
    data:{
      mediaUrl:''
    }
  }

   await axios.post(baseUrl, newFile).then(response => {
     let returnData = response.data.data.returnData
     let signedReguest = returnData.signedRequest
     let url = returnData.url
     res.data.mediaUrl = returnData.url

     console.log("retrunData ", returnData)
     console.log("signedReguest ", signedReguest)
     console.log("url ",url)

     // put the fileType in the headers for the upload
     let options = {
       headers:{
         'content-Type': newFile.fileType
       }
     }

     axios.put(signedReguest, fileUploaded, options).then(result => {
       console.log("Response from s3")
     }).catch(error => {console.log(error)})

   })
   console.log("file uploaded successfully");
   return res

 }

 export default {
   postFile
 }