import { MailServices } from '../Mail/services/mail-sevice.js'
import { utilService } from '../../../util-service'
import { MailOptions } from './cmps/MailOptions.jsx'


export class ComposeMail extends React.Component {
    state = {
        id:utilService.makeId(3),
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
            // console.log(this.state)
        })
        
        // setState(this.state)
    }
    onSendMail=(ev) => {
        ev.preventDefault();
        console.log(this.state.id,this.state);
        console.log( this.props);
        // MailServices.gMails.push(this.state)

    }
        // MailServices.sendMail(this.state.id,this.state)
        //     .then((mail) => {
        //         console.log(mail);
        //         this.setState(mail)
                // this.props.history.push(`/book`)
            // })
    
    
    render() {
        const {id,to,subject,body,isRead,sentAt}= this.state
        return (
            <div className="compose-mail">
                <header>new massage</header>
                <form className="review-form" onSubmit={this.onSendMail}>
                    <input className="to" type="text" id="to" name="to"onChange={this.handleChange} value={this.state.to} placeholder="to" />
                    <input className="subject" type="text" id="subject" name="subject"onChange={this.handleChange} value={this.state.subject} placeholder="Subject" />
                    <input className="body" type="text" id="body" name="body"onChange={this.handleChange} value={this.state.body} placeholder="body" />
                    <button type="submit" >Send</button>
                    
                </form>
            </div>
        )
    }

}
    
