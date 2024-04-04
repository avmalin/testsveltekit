/** @type {import('./$types').PageServerLoad} */
import { google } from 'googleapis';
import{CLIENT_ID,CLIENT_SECRET,REDIRECT_URI,REFRESH_TOKEN } from '$env/static/private'

export async function load() {
    console.log("test");
    
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
    const fileList = response.data.files
    
    
    

    return  {namefile:fileList};
}