import { Router } from 'express';
import loginRequeired from '../middlewares/loginRequeired';
import photoController from '../controllers/PhotoController';

const router = new Router();
router.post('/', loginRequeired, photoController.store);

export default router;
