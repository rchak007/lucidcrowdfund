// import fs from 'fs';
import readline from 'readline';

// Define a function to read the first line from a file

export function readFirstLineFromFile(filePath: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const fileStream = fs.createReadStream(filePath);
    console.log("from file-Utils - filePath = ", filePath)
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let lineRead = false; // Flag to track if a line was read
    let line; // Define line here    

    rl.on('line', (readLine) => {
      line = readLine; // Assign readLine to line
      rl.close();
      console.log("from file-Utils - line = ", line)
      lineRead = true;
      console.log("from file-Utils - lineRead 1st from line = ", lineRead)
      resolve(line);
      
    });

    rl.on('close', () => {
      console.log("from file-Utils - lineRead = ", lineRead)
      if(!lineRead) {           // Only reject if no line was read
        reject(new Error('File is empty.'));
        // resolve(line);
      }
    });

    rl.on('error', (error) => {
      if(!lineRead) { 
        reject(error);
      }
    });
  });
}