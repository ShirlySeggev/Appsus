import { MailServices } from '../Mail/services/mail-sevice.js'
<<<<<<< HEAD
import { utilService } from '../../../util-service'
import { storageService } from '../../../services/storage-service.js'
import { MailOptions } from './cmps/MailOptions.jsx'
=======
>>>>>>> cbe6bd5cd0ac3138d0e3406b80199d25a854c519


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
<<<<<<< HEAD
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.type === 'select-one' ? +target.value : target.value;
        this.setState({ ...this.state, [name]: value }, () => {
            // console.log(this.state)
        })
    
    }
    onSumbit=(ev) => {
        ev.preventDefault();
        console.log(this.state);
        this.props.onSendMail(this.state)
        // debugger
        // storageService.saveToStorage(mails,this.state)
        this.state()
    }
    
        
=======

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
>>>>>>> cbe6bd5cd0ac3138d0e3406b80199d25a854c519
    render() {
        const {id,to,subject,body,isRead,sentAt}= this.state
        return (
            <div className="compose-mail">
                <header>new massage</header>
<<<<<<< HEAD
                <form className="review-form" onSubmit={this.onSumbit}>
                    <input className="to" type="text" id="to" name="to"onChange={this.handleChange} value={this.state.to} placeholder="to" />
                    <input className="subject" type="text" id="subject" name="subject"onChange={this.handleChange} value={this.state.subject} placeholder="Subject" />
                    <input className="body" type="text" id="body" name="body"onChange={this.handleChange} value={this.state.body} placeholder="body" />
                    <button type="submit" >Send</button>
=======
                <form>
                    <input className="to" type="text" id="to" name="to" value={this.state.to} placeholder="to" />
                    <input className="subject" type="text" id="subject" name="subject" value={this.state.subject} placeholder="Subject" />
                    <input className="body" type="text" id="body" name="body" value={this.state.body} placeholder="body" />
                    <input className="id" type="number" id="id" name="id" value={this.state.id} placeholder="Subject" />
                    <button type="submit">Send</button>
                    <button type="submit">delete</button>
>>>>>>> cbe6bd5cd0ac3138d0e3406b80199d25a854c519
                </form>
            </div>
        )
    }
}

    
