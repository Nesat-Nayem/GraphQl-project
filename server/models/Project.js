const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:['Not Startet', 'In Progress', 'Complited'],
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
    }
});

module.exports = mongoose.model('Project', ProjectSchema);