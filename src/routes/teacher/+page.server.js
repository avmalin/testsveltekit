/** @type {import('./$types').PageServerLoad} */
import {supabase} from '$lib/supabaseClient.ts'
export async function load() {
    const {data,error}  =await supabase
    .from("teachersFolders")
    .select(`
    id,
    folderName,
    teachersFiles (id,fileName,fileLink,priority)`);
    if (error)
    {
        console.error('supabase error on teachersfolders: ',error.message)
    }
       
            console.log(data)
        
        
    return {folders:data ?? []};
};