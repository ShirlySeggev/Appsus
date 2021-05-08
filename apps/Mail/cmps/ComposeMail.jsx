import { MailServices } from '../Mail/services/mail-sevice.js'
import { utilService } from '../../../util-service'
import { storageService } from '../../../services/storage-service.js'
import { MailOptions } from './cmps/MailOptions.jsx'


export class ComposeMail extends React.Component {
    state = {
        id:utilService.makeId(),
        to: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: new Date().toLocaleTimeString()
    }

    componentDidMount() {
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.type === 'select-one' ? +target.value : target.value;
        this.setState({ ...this.state, [name]: value }, () => {
        })
    
    }
    onSumbit=(ev) => {
        ev.preventDefault();
        console.log(this.state);
        this.props.onSendMail(this.state)
        this.props.openForm()
    }
    
        
    render() {
        const {id,to,subject,body,isRead,sentAt}= this.state
        return (
            <div className="compose-container">
            <div className="compose-mail">
                <header className="header-compose">Compose Mail</header>
                <form className="review-form" onSubmit={this.onSumbit}>
                    <input className="to" type="text" id="to" name="to"onChange={this.handleChange} value={this.state.to} placeholder="to" />
                    <input className="subject" type="text" id="subject" name="subject"onChange={this.handleChange} value={this.state.subject} placeholder="Subject" />
                    <input className="body" type="text" id="body" name="body"onChange={this.handleChange} value={this.state.body} placeholder="body" />
                    <button type="submit" >Send</button>
                </form>
            </div>
            </div>
        )
    }
}

    
