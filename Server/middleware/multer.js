const multer = require("multer")
const path=require('path')
const aws=require("aws-sdk")
const multers3=require("multer-s3")


aws.config.update({
  secretAccessKey: 'gQntRaXuVhzyDnsVVQr0Kq7FaEwXq7vI/01KuKbH',
  accessKeyId: 'AKIAQQG7SHE77Q3X4O4W',
  region: 'ap-south-1'
});

const s3 = new aws.S3();

const upload = multer({
  storage: multers3({
    s3: s3,
    bucket: 'prdouctmanagment',
    acl: 'public-read', // this is optional and can be set to "private" or other permissions
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, `${Date.now().toString()}_${file.originalname}`);
    }
  })
});

module.exports=upload
