
import { ADMIN_PASS } from '$env/static/private';
import {supabase} from '$lib/supabaseClient'
import { json } from '@sveltejs/kit';



export async function load(event) {
    let isAuth
    console.log("isAuth: ",event.locals.isAuth)
    const {data,error}  =await supabase
    .from("studentsClass")
    .select(`*`);
    if (error)
    {
        console.error('supabase error on teachersfolders: ',error.message)
    }
    if(event.cookies.get('session')  != ADMIN_PASS){
        isAuth=false
        
    }
    else{
        
        console.log('cookies requgnaized')
        isAuth=true
    }
    let ans  =await supabase
    .from("teachersFolders")
    .select(`
    id,
    folderName,
    teachersFiles (id,fileName,fileLink)`);
    if (ans.error)
    {
        console.error('supabase error on teachersfolders: ',ans.error.message)
    }
    
       
    console.log(data)                
    return {classes:data??[],books:ans.data??[],isAuth:isAuth };
};

export const actions={
    editClass: async(event)=>{
        if (event.cookies.get('session') != ADMIN_PASS)
            return{error:'you are not admin!'}
        
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
    addClass:async({request,cookies})=>{
        const myCookie = cookies.get('session')
        if (myCookie != ADMIN_PASS){
            return{error:'you are not admin!'}
        }
        else{

        const data = await request.formData();    
        let header = data.get("header")
        let subHeader = data.get("subHeader")
        let text = data.get("text")
        let linkText= data.get('linkText')
        let link = data.get("link")
        let className = data.get('className')        
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
    }
        return{message:"add class seccesful", status:200}
    },
    authPass: async({request,cookies})=>{
        const data = await request.formData();
        let pass = data.get("password")
        if (pass == '123')
            {
                cookies.set('session', pass, {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',            
                    maxAge: 60 * 60   // one hour
                }); 
            return {isAuth:true}
            }   
        else{ return {isAuth:false, worngPass:true}}
    },    

};