import { Router } from 'express';
import Quote from '../models/quote';
import logger from '../utils/logger';
import uuidv4 from 'uuid/v4';
const router = Router();

router.get('/add', (req, res) => {
  res.status(200).render('add', {
    title: 'CVCC - Quote Registry'
  });
});

router.post('/submit', (req, res) => {
  const q = new Quote({
    id: uuidv4(),
    author: req.body.author,
    quote: req.body.quote
  });
  q.save(function(err) {
    if (err) {
      logger.error('Failed to save quote- ' + err);
      res.redirect('/add?error=' + err);
      return;
    }
    res.redirect('/');
  });
});

/**
 * GET home page
 */
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find({}).sort('-created');
    logger.info('getting all quotes...');

    res.render('home', {
      title: 'CVCC - Quote Registry',
      quotes: quotes
    });
  } catch (err) {
    logger.error('Error in getting quotes- ' + err);
    res.send('Got error in getAll');
  }
});

export default router;
