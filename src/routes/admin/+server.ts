import { supabase } from "$lib/supabaseClient";
import { json } from "@sveltejs/kit";
import type { forEachChild } from "typescript";

export async function POST({request,cookies}){
        
    const{addToBook,editBook,deleteFromBook} = await request.json();
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
 
 return json('secces',{status:201})
 }