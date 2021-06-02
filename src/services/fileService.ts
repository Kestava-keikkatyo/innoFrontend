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

   let res:any ={
      data:{
        fileUrl:''
      }
    }

    console.log("SERVICE upload",upload)

    let fileUploaded:any = upload.file

    // get the filename and replace the space or multiple spaces with '-'
    let filename:any = fileUploaded.name.replace(/\s+/g, '-');


    // Generate unique id to add it to the filename, since AWS S3 overrides files which have the same name
    const uniqueId = uuidv4()+'-'

    filename = uniqueId+filename;

    // get the file type
    let fileType:any = fileUploaded.type

    // split the file type 'image/png' to get the type and the extention separately
    let typeParts = fileType.split('/');
    let typePartOne:any = typeParts[0]
    let typePartTwo = typeParts[1]

    let newFile:any = {
      file: filename,
      fileType: fileType,
      typePartOne: typePartOne,
      typePartTwo: typePartTwo
    }

    await axios.post(baseUrl, newFile, authHeader()).then(response => {
      let returnData = response.data.data.returnData
      let signedReguest = returnData.signedRequest
      //let url = returnData.url
      res.data.fileUrl = returnData.url

      console.log("retrunData ", returnData)

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