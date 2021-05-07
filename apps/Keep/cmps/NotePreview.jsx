import { NoteText } from '../cmps/NoteText.jsx';
import { NoteTodos } from '../cmps/NoteTodos.jsx';
import { NoteImg } from '../cmps/NoteImg.jsx';
import { NoteVideo } from '../cmps/NoteVideo.jsx';
import { NoteAudio } from '../cmps/NoteAudio.jsx';

export function NotePreview({ note, onDeleteNote, onUpdateNote, onChangeBackground, onChangeColor, onPin, onSendToMail }) {
    const { id, type } = note;
    const { backgroundColor, color } = note.style;
    const { title } = note.info;

    const DynamicCmp = (note) => {
        switch (type) {
            case 'NoteText':
                return <NoteText note={note} />
            case 'NoteImg':
                return <NoteImg note={note} />
            case 'NoteTodos':
                return <NoteTodos note={note} />
            case 'NoteVideo':
                return <NoteVideo note={note} />
            case 'NoteAudio':
                return <NoteAudio note={note} />
            default:
                return console.log('no note type');
        }
    }

    return (
        <section className="note-preview" style={{ backgroundColor: `${backgroundColor}` }} >
            <div>
                <h4 style={{ color: `${color}` }}>{title}</h4>
                <DynamicCmp note={note} />
            </div>
            <div className="note-btns">
                <button className="note-btn" onClick={() => { onDeleteNote(id) }}><i className="fa fa-trash fa-keep"></i></button>
                <button className="note-btn" onClick={() => { onUpdateNote(id) }}><i className="fa fa-pencil-square-o fa-keep"></i></button>
                <button className="note-btn" onClick={() => { onPin(id) }}><i className="fa fa-thumb-tack fa-keep"></i></button>
                <button className="note-btn" onClick={() => { onSendToMail(id) }}><i className="fa fa-share-square-o fa-keep"></i></button>
                <input type="color" id="noteBcg" className="note-btn" onChange={(ev) => { onChangeBackground(id, ev.target.value) }} /><i className="fa fa-adjust fa-keep"></i>
                <input type="color" id="noteColor" className="note-btn" onChange={(ev) => { onChangeColor(id, ev.target.value) }} /><i className="fa fa-paint-brush fa-keep"></i>
            </div>
        </section>
    )
}


/////////CLASS COMPONENT//////////

// export class NotePreview extends React.Component {
//     // state = {
//     //     isLongTxtShown: false
//     // }

//     // showMore = () => {
//     //     console.log('more');
//     //     this.setState({ isLongTxtShown: !this.state.isLongTxtShown });
//     // }

//     note = this.props.note.note;
//     DynamicCmp(note) {
//         switch (note.note.type) {
//             case 'NoteText':
//                 return <NoteText note={note} />
//             case 'NoteImg':
//                 return <NoteImg note={note} />
//             case 'NoteTodos':
//                 return <NoteTodos note={note} />
//             case 'NoteVideo':
//                 return <NoteVideo note={note} />
//             default:
//                 return console.log('no note type');
//         }
//     }

//     render() {
//         const { note } = this.props;
//         const { id } = this.props.note;
//         const { title } = this.props.note.info;
//         const { backgroundColor, color } = this.props.note.style;
//         // const { isLongTxtShown } = this.state;
//         return (
//             <section className="note-preview" style={{ backgroundColor: `${backgroundColor}` }} >
//                 <div>
//                     <h4 style={{ color: `${color}` }}>{title}</h4>
//                     <this.DynamicCmp note={note}  />
//                     {/* <this.DynamicCmp note={note} isLongTxtShown={isLongTxtShown} showMore={this.showMore} /> */}
//                 </div>
//                 <div className="note-btns">
//                     <button className="note-btn" onClick={() => { this.props.onDeleteNote(id) }}><i className="fa fa-trash"></i></button>
//                     <button className="note-btn" onClick={() => { this.props.onUpdateNote(id) }}><i className="fa fa-pencil-square-o"></i></button>
//                     <button className="note-btn" onClick={() => { this.props.onPin(id) }}><i className="fa fa-thumb-tack"></i></button>
//                     <input type="color" id="noteBcg" className="note-btn" onChange={(ev) => { this.props.onChangeBackground(id, ev.target.value) }} /><i className="fa fa-adjust"></i>
//                     <input type="color" id="noteColor" className="note-btn" onChange={(ev) => { this.props.onChangeColor(id, ev.target.value) }} /><i className="fa fa-paint-brush"></i>
//                 </div>
//             </section>
//         )
//     }
// }









