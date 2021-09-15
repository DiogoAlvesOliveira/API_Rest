import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequeired from '../middlewares/loginRequeired';

const router = new Router();
router.get('/', alunoController.index);
router.get('/:id', alunoController.show);
router.post('/', loginRequeired, alunoController.store);
router.put('/:id', loginRequeired, alunoController.update);
router.delete('/:id', loginRequeired, alunoController.delete);

export default router;
