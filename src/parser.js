import fs from 'fs';
import path from 'path';

const readingFile = (filePath) => {
    const absolutePath = path.resolve(process.cwd(), filePath);
    const fileString = fs.readFileSync(absolutePath, 'utf-8');
    return fileString;
};
const parsingFile = (filePath) => JSON.parse(readingFile(filePath));
export default parsingFile;

