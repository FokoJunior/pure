const fs = require('fs');
const docxPath = 'Website Content.docx';
const mammoth = require('mammoth');

async function extract() {
    try {
        let docxData = await mammoth.extractRawText({ path: docxPath });
        fs.writeFileSync('docx_out.txt', docxData.value);
        console.log('DOCX extracted successfully to docx_out.txt');
    } catch (docxErr) {
        console.error('DOCX Failed:', docxErr.message);
    }
}
extract();
