import { ObjectId } from 'mongodb';
import { getDB } from '../config/db.js';

const ReminderModel = {
	async getReminders() {
		const reminders = await getDB().collection('reminders').find({}).toArray();

		return reminders;
	},

	async createReminder(body) {
		const result = await getDB().collection('reminders').insertOne(body);

		console.log(result);

		return body;
	},

	async updateReminder(id, body) {
		const result = await getDB()
			.collection('reminders')
			.updateOne({ _id: new ObjectId(id) }, { $set: body });

		console.log(result);

		return body;
	},

	async deleteReminder(id) {
		const result = await getDB()
			.collection('reminders')
			.deleteOne({ _id: new ObjectId(id) });

		console.log(result);
	},
};

export default ReminderModel;
