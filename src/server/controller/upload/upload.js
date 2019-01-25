const multer = require('multer');

const storage = multer.diskStorage({
  destination: '../../../../public/',
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

module.exports = upload;
