import ReminderModel from '../models/reminder.model.js';

const ReminderController = {
	async getReminders(req, res) {
		const reminders = await ReminderModel.getReminders();

		res.send(reminders);
	},
};

export default ReminderController;
