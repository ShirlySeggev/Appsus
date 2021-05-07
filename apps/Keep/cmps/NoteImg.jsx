export function NoteImg({ note }) {
    const { url } = note.note.info;
    return (
        <img src={url} alt="" />
    )
}
