import Note from "../models/note";

export async function createNote(noteContent){
    const newNote = new Note();
    Object.keys(noteContent).forEach(key=>{
        console.log(key);
        newNote[key] = noteContent[key];
    })
    return newNote.save();
}

export async function getNotes(){
    return Note.find({}).then((notes)=>{
        return notes.reduce((results, item)=>{
            results[item.id] = item;
            return results;
        }, {})
    })
}


export async function deleteNote(id){
    return Note.findByIdAndDelete(id).then(note=>{
        console.log('note deleted');
    })
}

export async function updateNote(id, updateContent){
    return Note.findById(id).then(note=>{
        Object.keys(updateContent).forEach(key=>{
            note[key] = updateContent[key]
        })
        return note.save();
    })
}

