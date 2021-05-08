import { LongTxt } from "../../../cmps/LongTxt.jsx";

export class NoteText extends React.Component {
    state = {
        isLongTxtShown: false
    }

    componentDidMount() {
        this.setState({ isLongTxtShown: false });
    }

    showMore = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown });
    }

    render(){
        const { txt } = this.props.note.note.info;
        const { isLongTxtShown } = this.state;
        return (
            <div>
                <LongTxt description={txt} isLongTxtShown={isLongTxtShown} showMore={this.showMore} />
            </div>
        )

    }
}


