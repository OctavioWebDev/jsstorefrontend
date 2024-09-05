import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = formidable({
        uploadDir: path.join(process.cwd(), 'public/assets/monthlydeals'),
        keepExtensions: true
      });
      

    form.parse(req, (err, fields, filesData) => {
      if (err) {
        res.status(500).json({ error: 'File upload failed' })
        return
      }

      const files = filesData.file as formidable.File[] | formidable.File;
      const file = Array.isArray(files) ? files[0] : files;
      
      const newPath = path.join(process.cwd(), 'public/assets/monthlydeals', file.originalFilename || file.newFilename);
      fs.renameSync(file.filepath, newPath);
      

      res.status(200).json({ message: 'File uploaded successfully' })
    })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
