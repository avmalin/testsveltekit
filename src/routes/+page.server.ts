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
    

        
    const folderId = '104O3rDgf5t1fEv3GYO8hGD6S1LPabeoW'
    let filesName:{[key:string]:{}}={} ;
    let folderNames:drive_v3.Schema$File[]=[]
    
    //create client to connect to google api
    const oauth2Client = new google.auth.OAuth2({

        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        redirectUri: REDIRECT_URI,
    });
    console.log("test 2")
    //set the refresh token
    const authorizationUrl= oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN});
    
    const drive = google.drive({
        version:'v3',
        auth:oauth2Client

    })
    try {
        // request the folders inside folderId
        const response = await drive.files.list({
          q: `mimeType='application/vnd.google-apps.folder' and '${folderId}' in parents`,
          fields: 'files(id, name)',
        });
        folderNames =  response.data.files??[]
         //folderNames?.forEach (async (folder)=>
         for (const folder of folderNames){
            console.log(folder.id);
            const response = await drive.files.list({
                q:` '${folder.id}' in parents`,
                fields: 'files(id, name, webViewLink)',
              });
            //insert the response into list
            console.log(response.data.files);
            filesName[folder.id??'']=response.data.files??'';
            console.log('\n hi');
        }
    
        // Extract folders from response
        const folders = response.data.files;
    }
    catch (error) {
        console.error('Error fetching folders or files:', error);
    
      }

    // print the data
    
    console.log(folderNames)
    console.log('file name->')
    console.log(filesName)
    console.log('<-file name')
    
    // combine the folders name and the file name
    let myData = {'filesName':filesName,'foldersName':folderNames};
        try{
        // write the data into a file
        fs.writeFile(cacheFilePath, JSON.stringify(myData), 'utf-8');
        console.log("test3")
        }
        catch(error)
            {
                console.error("error write into file: ", error)
            }
    console.log(JSON.stringify(myData))
    }
    return  {name};
}
