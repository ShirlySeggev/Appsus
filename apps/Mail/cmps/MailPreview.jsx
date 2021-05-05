//import { MailServices } from '../Mail/services/mail-sevice.js'



export function MailPreview({ mail, onDelete,isLongTxtShown}) {

  return (
    
      <div className="mail-preview">
        <span>{mail.id}.</span>
        <span className="subject">{mail.subject} :</span>
        <span>{mail.body}</span>
        {/* < body={mail.body} isLongTxtShown={isLongTxtShown} showMore={this.showMore} /> */}
        <span>{mail.sentAt}</span>
        <span><button onClick={()=>{
          
          onDelete(mail.id);
        }}>Delete</button></span>
        <span><img className="envelope" src="apps\Mail\assets\img\closed.jpg"/></span>
      </div>
    
  )
}