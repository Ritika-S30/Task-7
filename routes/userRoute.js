// import express from 'express';
// import {fetch,create,update} from '../controller/userController.js'
// const router =express.Router();


// router.get('/fetch',fetch);
// router.post('/create',create);
// router.put('/update',update);

// export default router;


import express from 'express';
import { fetch,create,update } from '../controller/userController.js';
const router = express.Router();
router.get('/fetch',fetch);
router.post('/create',create);
router.put('/update/:id',update);

export default router;