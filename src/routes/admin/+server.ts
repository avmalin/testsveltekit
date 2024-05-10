import { ADMIN_PASS } from "$env/static/private";
import { supabase } from "$lib/supabaseClient";
import { json } from "@sveltejs/kit";



export async function POST({request,cookies}){
    
    if(cookies.get('session')!= ADMIN_PASS){
        return json('you are not admin!',{status:401})
    }
    const body = await request.json()
    console.log(body)
    const {action}=body
    if (action == 'update')
    {
        const{addToBook,editBook,deleteFromBook} = body
        console.log('editbook',editBook.id)
        
        //insert new chapters
        for (const row of addToBook){
            let res = await supabase.from('teachersFiles')
            .insert(row)
            .then(response=>{
                console.log(response)
                return response
            })
            if( res.error != null){
                return json(res.error.details,{status:500})
            }
        }
        //update changes
        for (const row of editBook){
            let res = await supabase.from('teachersFiles')
                .update(row)
                .eq('id',row.id)
                .then(response => {
                    console.log(response)                          
                    return response
                })
            if( res.error != null){
                return json(res.error.details,{status:500})
            }
        }
        // remove chapters
        for (const row of deleteFromBook){
            let res = await supabase.from('teachersFiles')
                .delete(row)
                .eq('id',row.id)
                .then(response => {
                    console.log(response)                          
                    return response
                })
            if( res.error != null){
                return json(res.error.details,{status:500})
            }
        }   
    }
    else if (action == 'addBook')
    {
        const{bookName} = body        
        let res =  await supabase.from('teachersFolders')
        .insert({folderName:bookName})
        .then(response =>{
            console.log(response)
            return response
        })
        if( res.error != null){
            return json(res.error.details,{status:500})
        }
        console.log ('addBook respone', res)
        
        
    }
 
 return json('seccess',{status:201})
 }

