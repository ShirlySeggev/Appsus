import { ComposeMail } from './ComposeMail.jsx'
import { MailApp } from './MailApp.jsx'


const { Link } = ReactRouterDOM;
const Modal =window.ReactBootstrap.Modal; 
export class MailOptions extends React.Component {
  state={
    isShown:false
  }

  componentDidMount() {
    // console.log( MailApp.props.mails);
  }
  handleClose=() => {
    this.setState({isShown:false})
  }

  render(){
    return (
      <h1 className="mail-list">
         <button className="compose" onClick={() =>{this.setState({isShown:true}) }}> Compose +</button>
         <button className="inbox" >Inbox</button>
         <button className="Starred">Starred</button>
         <button className="Sent" >Sent</button>
         <button className="Drafts">Drafts</button>
         <Modal show={this.state.isShown} onHide={this.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <ComposeMail /> </Modal.Body>
      </Modal>
      </h1>
      
    )
         }
  }