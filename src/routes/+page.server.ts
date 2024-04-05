/** @type {import('./$types').PageServerLoad} */
import { google } from 'googleapis';
import type {drive_v3} from 'googleapis'
import{CLIENT_ID,CLIENT_SECRET,REDIRECT_URI,REFRESH_TOKEN } from '$env/static/private'
import { writable } from 'svelte/store';
import fs from 'fs/promises';
import path from 'path';
import { json } from 'stream/consumers';
import{name} from '$lib/cachedData.json'
const cacheFilePath = path.resolve('./src/lib/cachedData.json');

export async function load() {
    console.log("test");
    if(false){

    
    const folderId = '1PZy3CPHkyDKbXhWA1U57k7TZHo-gHDEx'

    

    const oauth2Client = new google.auth.OAuth2({

        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirectUri: REDIRECT_URI,
    });
    console.log("test 2")
    
    const authorizationUrl= oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
    
    const drive = google.drive({
        version:'v3',
        auth:oauth2Client

    })
    
    const response = await drive.files.list({
        q:` '${folderId}' in parents`,
        fields: 'files(id, name, webViewLink)',
      });

    console.log(response.data.files)
    const fileList:drive_v3.Schema$File[]|undefined = response.data.files
    
    const dataStore =  writable(null)
    if (fileList !== undefined){
        try{
        fs.writeFile(cacheFilePath, JSON.stringify({'name':fileList}), 'utf-8');
        console.log("test3")
        }
        catch(error)
            {
                console.error("errrpr ", error)
            }
    console.log(JSON.stringify(fileList))
    }
    
    console.log("test3")
    console.log(JSON.stringify(fileList))}

    return  {name};
}