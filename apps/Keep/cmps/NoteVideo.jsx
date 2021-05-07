export function NoteVideo({ note }) {
    const { url } = note.note.info;
    return (
        <iframe className="iframe" width="250" height="250" frameBorder="0" src={url}> </iframe>
    )
}