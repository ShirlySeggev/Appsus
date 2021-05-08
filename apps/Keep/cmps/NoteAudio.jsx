export function NoteAudio({ note }) {
    const { url } = note.note.info;
    return (
        <div>
            <div>
                <audio src= { url } controls />
            </div>
        </div>
    )
}

