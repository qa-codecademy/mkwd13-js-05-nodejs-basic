import { Router } from 'express';
import ReminderController from '../controllers/reminder.controller.js';

const router = Router();

// localhost:3000/api/reminders
router.get('/', ReminderController.getReminders);
router.post('/', ReminderController.createReminder);
router.put('/:id', ReminderController.updateReminder);
router.delete('/:id', ReminderController.deleteReminder);

export default router;
