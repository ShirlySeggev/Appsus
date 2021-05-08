import { ComposeMail } from './ComposeMail.jsx'
import { MailApp } from './MailApp.jsx'


const { Link } = ReactRouterDOM;
export class MailOptions extends React.Component {
  state = {
    isShown: false,
    isComposeOpen: false,
    isStared: false,
    isRead: false,
    
  }
  componentDidMount() {
    this.setState({ isComposeOpen: false })
  }
  openForm = () => {
    this.setState({ isComposeOpen: !this.state.isComposeOpen }, () => { console.log(this.state.isComposeOpen); })
  }
  render() {
  
    return (
      <h1 className="mail-list">
        <button className="compose" onClick={this.openForm}> Compose +</button>
        <button className="inbox" onClick={this.props.OnInbox} >Inbox</button>
        <button onClick={this.props.OnSentMails} className="Sent" >Sent</button>
        <div className="num">
      {this.props.isInbox && <h6 className="li">Un-Read Mails:</h6>}
      {this.props.isInbox && <span className="un-read-mails"> {this.props.countsRead}</span>}
        </div>

        {this.state.isComposeOpen && <section className="modal-form"><ComposeMail openForm={this.openForm} onSendMail={this.props.onSendMail} /></section>}
      </h1>

    )
  }
}