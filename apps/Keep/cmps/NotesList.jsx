import { NotePreview } from './NotePreview.jsx'

export function NotesList({notes}) {
  return (
    <div className="note-list">
      {notes.map(note => 
          <NotePreview note={note} key={note.id} />
          )}
    </div>
  )
}