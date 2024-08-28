//import axios
import axios from 'axios'


//api fetching configuration =>put ,post,
export const commonAPI = async(httpMethod,url,reqBody)=>{
    //add video method=>post url =localhost:3000 data: caption ,image,url
    let reqConfig = {
        method:httpMethod,
        url,
        data:reqBody
    
    }
return await axios(reqConfig).then((response)=>{
    return response
})
.catch((error)=>{
    return error
})    
}