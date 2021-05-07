import { NotePreview } from './NotePreview.jsx'

export function NotesList({ notes, onDeleteNote, onUpdateNote, onChangeBackground, onChangeColor, onPin , onSendToMail}) {

  return (
    <div className="note-list">
      <h3>Pinned notes:</h3>
      <div className="pinnedNote-list-container">
        {notes.map(note =>
          note.isPinned &&
          <NotePreview note={note} key={note.id} onDeleteNote={onDeleteNote} onUpdateNote={onUpdateNote} onChangeBackground={onChangeBackground} onChangeColor={onChangeColor} onPin={onPin} onSendToMail={onSendToMail}/>
        )}
      </div>
      <h3>Notes to display:</h3>
      <div className="note-list-container">
        {notes.map(note =>
          !note.isPinned &&
          <NotePreview note={note} key={note.id} onDeleteNote={onDeleteNote} onUpdateNote={onUpdateNote} onChangeBackground={onChangeBackground} onChangeColor={onChangeColor} onPin={onPin} onSendToMail={onSendToMail}/>
        )}
      </div>
    </div>
  )
}