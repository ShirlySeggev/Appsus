import { NotePreview } from './NotePreview.jsx'

export function NotesList({notes, onDeleteNote, onUpdateNote}) {
  return (
    <div className="note-list">
      {notes.map(note => 
          <NotePreview note={note} key={note.id} onDeleteNote={onDeleteNote} onUpdateNote={onUpdateNote}/>
          )}
    </div>
  )
}