import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage })

const send = upload.single('file')
export default {
    send
}