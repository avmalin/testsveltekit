// src/routes/api/writeFile.js
import fs from 'fs/promises';
import path from 'path';



export const POST = ()=> {
  try { 
    // Define the file path where you want to write the file
    const filePath = path.resolve('./data.txt');

    // Data received from the client (assuming it's sent in the request body)
    const  data  = "eqruest.body";

    // Write data to the file
     fs.writeFile(filePath, data, 'utf-8');

    console.log('Data has been written to the file successfully.');

    return {
      status: 200,
      body: { message: 'Data has been written to the file successfully.' }
    };
  } catch (error) {
    console.error('Error writing data to file:', error);
    return {
      status: 500,
      body: { message: 'Internal server error' }
    };
  }
}
