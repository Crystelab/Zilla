import express from 'express';
import fs from 'fs';
import path from 'path';
import { ILabel } from '../models/Label';

const router = express.Router();
const filePath = path.resolve(__dirname, '../data/label.json');

/**
 * @swagger
 * /api/labels:
 *   get:
 *     summary: Get all labels
 *     tags: [Labels]
 *     responses:
 *       200:
 *         description: List of all labels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Label'
 *       500:
 *         description: Internal server error
 */
router.get('/labels', (req: express.Request, res: express.Response) => {
  try {
    const data: ILabel[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    res.json(data);
  } catch (error) {
    console.error('Error in /labels endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;