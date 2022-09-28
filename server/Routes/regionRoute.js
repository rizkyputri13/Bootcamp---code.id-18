import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
import uploadDownload from '../../middleware/uploadDownload'
const router = Router()


router.get('/',indexCtrl.RegCtrl.findAll)
router.get('/:id',indexCtrl.RegCtrl.findOne)
router.post('/',uploadDownload.send,indexCtrl.RegCtrl.create)
router.put('/:id',uploadDownload.send,indexCtrl.RegCtrl.update)
router.delete('/:id',indexCtrl.RegCtrl.deleted)
router.get ('/sql/:id',indexCtrl.RegCtrl.querySQL)
export default router