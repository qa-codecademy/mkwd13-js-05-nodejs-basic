import { Router } from 'express';
import ReminderController from '../controllers/reminder.controller.js';

const router = Router();

// localhost:3000/api/reminders
router.get('/', ReminderController.getReminders);

export default router;
