/* import multer from "multer";
import { handleUpload } from "../../../../helper";

import Exercice from "../../../../db/models/exercice";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const myUploadMiddleware = upload.single("sample_file");

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
//req.body.id
const handler = async (req, res) => {
  try {
    await runMiddleware(req, res, myUploadMiddleware);
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);

    if (cldRes) {
      const exerciceToUpdate = await Exercice.updateOne(
        { _id: req.query.id },
        {
          $addToSet: { images: cldRes.url },
        }
      );

      return res.status(200).json(placeToUpdate);
    }
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
};
export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
 */
