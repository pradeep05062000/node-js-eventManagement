const mongoose = require('mongoose')



const dateSchema = mongoose.Schema({
    date:{
        type: Date,
        required: true
    }

})


dateSchema.virtual('indoorEventDate',{
	ref:'IndoorEvent',
	localField:'date',
	foreignField: 'date'
})


dateSchema.virtual('outdoorEventDate',{
	ref:'OutdoorEvent',
	localField:'date',
	foreignField: 'date'
})


/******** Here this two virtuals are created to connect indoorEvent/outdoorEvent model with dateEvent model
 * 
 * Here the comparision between indoorEvent/outdoorEvent model and dateEvent model is done using date field from both side
 * as we can see localField is date field of dateEvent model and foreignField is date field of indoorEvent/outdoorEvent model
 */

const dateEvent = mongoose.model('DateEvent',dateSchema)

module.exports = dateEvent

/*
	Basically logic work here is we save all the date in this model (without repating any date(no duplicate)), 
	then using that date we retive all events (indoor as well as outdoor).
*/