import mongoose from 'mongoose'



const slideSchema = mongoose.Schema({

    name:{
        type : String,
        required: true
    },
    images:{
        type : String,
        required: true
    },
    description:{
        type : String,
        required: true
    },
    creator: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },

});

const Slide = mongoose.model('Slide', slideSchema)  

export default Slide