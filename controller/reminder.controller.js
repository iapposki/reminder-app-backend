const {createReminder, loggingReminders} = require('../services/reminder.service')

// var testDate = Date.now()
// date below should be in the format 'Fri Aug 19 2022 02:07:12 GMT+0530 (India Standard Time)'
const setReminder = async (user, date) => {
    createReminder("konark", Date.parse(date))
}

const sendReminders = async () => {
    loggingReminders()
}

module.exports = {
    setReminder,
    sendReminders,
}