const router = require("express").Router()
const posteControler=require('../controlers/posteControler')
router.post('/api/createPoste', posteControler.createPoste);
router.get('/api/getPoste',posteControler.getPoste)
router.delete('/api/deletePoste/:id',posteControler.deletePoste)
router.put('/api/updatePoste/:id',posteControler.updatePoste)
module.exports = {
    posteRouter:router
};