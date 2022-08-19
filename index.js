const cron = require('node-cron');
const {sendReminders} = require('./controller/reminder.controller')

// // console.log(reminderCheck())

// dateToInput = 'Thu Aug 18 2022 15:07:26 GMT+0530 (India Standard Time)'

// // console.log(Date.parse(dateToInput))

// const dateToCron = (date) => {
//     var dateArr = date.split(" ")
//     return `${dateArr[4].split(":")[2]} ${dateArr[4].split(":")[1]} ${dateArr[4].split(":")[0]} ${dateArr[2]} ${dateArr[1]} ${dateArr[0]}`
// }

// console.log(dateToCron(dateToInput))

// cron.schedule(dateToCron(dateToInput), () =>  {
//   console.log('0 second task');
// });


// job done every minute
cron.schedule('0 * * * * *', () => {
    sendReminders()
})