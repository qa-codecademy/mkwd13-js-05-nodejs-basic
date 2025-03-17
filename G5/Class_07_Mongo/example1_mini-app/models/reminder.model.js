import { getDB } from '../config/db.js';

const ReminderModel = {
	async getReminders() {
		const reminders = await getDB().collection('reminders').find({}).toArray();

		return reminders;
	},
};

export default ReminderModel;
