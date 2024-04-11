import fs from 'fs/promises'
import path from 'path';
import { json } from 'stream/consumers';

export const actions={
    addClass: async(event)=>{
        const cacheFilePath = path.resolve('./src/lib/classData.json');
        const data = await event.request.formData();
        let header = data.get("header")
        let subHeader = data.get("subHeader")
        let message = data.get("message")
        let formData =[]
        
        let classData ={}
        classData = {"header":header,"subHeader":subHeader,"message":message}
        formData ["כיתה"] = classData
        fs.writeFile(cacheFilePath,JSON.stringify(formData),'utf-8')
        console.log(classData,"test",formData)

    }
}