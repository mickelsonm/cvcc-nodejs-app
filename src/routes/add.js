import { Router } from 'express';
const router = Router();

/**
 * GET home page
 */
router.get('/', (req, res) => {
  res.render('add', {
    title: 'CVCC - Quote Registry'
  });
});

export default router;
