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
        subject: '1',
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

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

   const selectedProffys = await db.all("SELECT * FROM proffys")
   //console.log(selectedProffys)

   const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id =  1;
   `)
   //console.log(selectedClassesAndProffys)

   const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= 520
        AND class_schedule.time_to > 520
   `)

   //console.log(selectClassesSchedules)
   
})