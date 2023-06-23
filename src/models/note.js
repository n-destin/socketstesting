import mongoose, { Model, Schema } from "mongoose";

const NoteSchema = new Schema({
    Title: String,
    x: Number,
    y: Number,
    z_index: Number,
    content: String,  
}, 
{
    toJSON : {virtuals: true},
    toObject: {virtuals: true}
})


const Note =  mongoose.model('Notes', NoteSchema);
export default Note;