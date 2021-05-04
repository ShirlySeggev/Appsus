
export function NotePreview({ note }) {
    const { type } = note

    const DynamicCmp = (note) => {
        switch (type) {
            case 'NoteText':
                return <NoteText note={note} />
            case 'NoteImg':
                return <NoteImg note={note} />
            case 'NoteTodos':
                return <NoteTodos note={note} />

            default:
                return //...some default error view
        }
    }

    return (
        <section className="note-preview">
            <DynamicCmp note={note} />
        </section>
    )
}

function NoteText({ note }) {
    const { txt, title } = note.note.info;
    return (
        <div>
            <h3>{title}</h3>
            <h3>{txt}</h3>
        </div>
    )
}
function NoteImg({ note }) {
    const { url, title } = note.note.info;
    return (
        <div>
            <h3>{title}</h3>
            <img src={url} alt="" />
        </div>
    )
}
function NoteTodos({ note }) {
    const { todos, title } = note.note.info;
    return (
        <div>
            <h3>{title}</h3>
            {todos.map(todo => <li key={todo.doneAt}>{todo.txt}</li>)}
        </div>
    )
}
