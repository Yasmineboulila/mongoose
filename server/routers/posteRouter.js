const router = require("express").Router()
const posteControler=require('../controlers/posteControler')
const {isAuth}=require("../middleware/isAuth")
router.post('/api/createPoste',isAuth, posteControler.createPoste);
router.get('/api/getPoste',posteControler.getPoste)
router.delete('/api/deletePoste/:id',posteControler.deletePoste)
router.put('/api/updatePoste/:id',posteControler.updatePoste)
module.exports = {
    posteRouter:router
};