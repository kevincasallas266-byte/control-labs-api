import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/search', UserController.getUserById);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUserById);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteteUser);

export default router;