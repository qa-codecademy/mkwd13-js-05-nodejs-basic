import ReminderModel from '../models/reminder.model.js';

const ReminderController = {
	async getReminders(req, res) {
		const reminders = await ReminderModel.getReminders();

		res.send(reminders);
	},

	async createReminder(req, res) {
		const newReminder = await ReminderModel.createReminder(req.body);

		res.send(newReminder);
	},

	async updateReminder(req, res) {
		const updatedReminder = await ReminderModel.updateReminder(
			req.params.id,
			req.body
		);

		res.send(updatedReminder);
	},

	async deleteReminder(req, res) {
		await ReminderModel.deleteReminder(req.params.id);

		res.sendStatus(204);
	},
};

export default ReminderController;
