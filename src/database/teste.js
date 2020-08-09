const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    proffyValue = {
        name: 'Maria',
        avatar: 'https://avatars2.githubusercontent.com/u/66148213?s=460&u=501462ad57bf5de7e1e7a76195a58b5ca4fba270&v=4',
        whatsapp: '956985968596',
        bio:'Instrutor de educação fisica',
    }

    classValue = {
        subject: 'Educação fisica',
        cost: '20',
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ] 

    await createProffy(db, {proffyValue, classValue, classScheduleValues})
})