const mongoose = require('mongoose')


randomisedUserSchema = mongoose.Schema({
    randomisedUserList: {
        type:Array
    },
    event:{
        type:String
    }
})




const randomisedUsers = mongoose.model('RandomisedUsers',randomisedUserSchema)


module.exports = randomisedUsers

//basically this database is used to store the users registered in particular event. then matches between those users are fixed. 
//this table is for event dashboard section at UI.  