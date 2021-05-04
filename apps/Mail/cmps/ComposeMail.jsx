import { MailServices } from '../Mail/services/mail-sevice.js'


export class ComposeMail extends React.Component {
    state = {
        id,
        to: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: new Date().toLocaleTimeString()
    }

    componentDidMount() {

    }
    onComposeMail = (ev) => {
        ev.preventDefault();
        MailServices.composeMail(this.props.mail.id, this.state)
            .then((mail) => {
                this.props.onComposeMail(mail)
                // this.props.history.push(`/book`)
            })
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({
            car: {
                ...prevState.car,
                [field]: value
            }
        }))
    }
    render() {
        const {id,to,subject,body,isRead,sentAt}= this.state
        return (
            <div className="compose-mail">
                <header>new massage</header>
                <form>
                    <input className="to" type="text" id="to" name="to" value={this.state.to} placeholder="to" />
                    <input className="subject" type="text" id="subject" name="subject" value={this.state.subject} placeholder="Subject" />
                    <input className="body" type="text" id="body" name="body" value={this.state.body} placeholder="body" />
                    <input className="id" type="number" id="id" name="id" value={this.state.id} placeholder="Subject" />
                    <button type="submit">Send</button>
                    <button type="submit">delete</button>
                </form>
            </div>
        )
    }
}

    
