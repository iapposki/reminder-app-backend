const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

// Create Reminder
const createReminder = async(name, date) =>{
    console.log("creating reminder for user", name)
    await prisma.reminders.create({data : {
        userName: name,
        timeForReminder : date
    }})
}

// Update Reminder
const updateReminder = async(id) => {
    console.log("updating reminder for user with user id ", id)
    await prisma.reminders.update({
        where : {
            id : id,
        },
        data : {
            reminded : true
        }
    })
}

// Check Reminder Loop
const reminderCheck = async () => {
    console.log("checking for reminders to be reminded")
    var res = await prisma.reminders.findMany({
        where : {
            AND : [
                {timeForReminder : {lte : Date.now()}},
                {reminded : false}
            ]
        }
    })
    // console.log(res)
    return  res
}

// Change reminder states and logging timely reminders
const loggingReminders = async() =>{
    var remindersToLog = await reminderCheck()
    for (let element of remindersToLog) {
        console.log(element)
        await updateReminder(element.id)
    } 
}

module.exports = {
    createReminder,
    updateReminder,
    reminderCheck,
    loggingReminders
}