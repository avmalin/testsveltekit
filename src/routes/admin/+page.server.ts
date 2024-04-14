
import {supabase} from '$lib/supabaseClient'
export async function load() {
    const {data,error}  =await supabase
    .from("studentsClass")
    .select(`*`);
    if (error)
    {
        console.error('supabase error on teachersfolders: ',error.message)
    }
       
    console.log(data)
        
        
    return {classes:data??[] };
};

export const actions={
    editClass: async(event)=>{
        
        const data = await event.request.formData();
        let header = data.get("header")
        let subHeader = data.get("subHeader")
        let text = data.get("text")
        let linkText= data.get('linkText')
        let link = data.get("link")
        let id = data.get('id')
        let password = data.get('password')
        console.log(data)
        
        let classData ={}        
        
        classData = {"header":header,"subHeader":subHeader,"text":text,"linkText":linkText,"link":link}    
        await supabase.from('studentsClass')
            .update(classData)
            .eq('id',id)
            .then(response => {
                if( response.error){
                    return{error:response.error.details}
                }
                console.log(response)
            })
        
        
        
        return {message:"update seccesful"}                
    },
    addClass:async(event)=>{
        const data = await event.request.formData();
        let header = data.get("header")
        let subHeader = data.get("subHeader")
        let text = data.get("text")
        let linkText= data.get('linkText')
        let link = data.get("link")
        let className = data.get('className')
        let password = data.get('password')
        console.log(data)
        
        let classData ={}        
        
        classData = {"header":header,"subHeader":subHeader,"text":text,"linkText":linkText,"link":link,"className":className}    
        let res = await supabase.from('studentsClass')
            .insert(classData)
            .then(response => {
                console.log(response.error)                          
                return response
            })
        if( res.error != null){
            return{error:res.error.details}
        }
        return{message:"add class seccesful"}
    },
    authPass: async(event)=>{
        const data = await event.request.formData();
        
        if (data.get("password") == '123')
            {
            
            return {isAuth:true}
            }   
        else{ return {isAuth:false, worngPass:true}}
    }
};