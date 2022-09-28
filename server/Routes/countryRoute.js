import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.CtsCtrl.findAll)
router.get('/:id',indexCtrl.CtsCtrl.findOne)
router.post('/',indexCtrl.CtsCtrl.create)
router.put('/:id',indexCtrl.CtsCtrl.update)
router.delete('/:id',indexCtrl.CtsCtrl.deleted)
router.get ('/sql/:id',indexCtrl.CtsCtrl.querySQL)
export default router