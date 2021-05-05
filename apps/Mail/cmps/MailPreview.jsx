import { MailServices } from '../Mail/services/mail-sevice.js'


export function MailPreview({ mail, onDelete,onOpenMail}) {
  function toggleShow(){
    if (!mail.isShown){
      // count++;
      // console.log(count);
      <img className="envelope-closed" src="apps\Mail\assets\img\closed.jpg"/>
      return `hidden`
    }}

  return (
    
      <div className="mail-preview" onClick={()=>{
        onOpenMail(mail);
      }}  >
        <span>{mail.id}.</span>
        <span  className="subject">{mail.subject}</span>
        <span>{mail.subject}</span>
        <span className={`body ` + toggleShow()}>{mail.body}</span>
        <span>{mail.sentAt}</span>
        <span><button onClick={()=>{
  
          onDelete(mail.id);
        }}>Delete</button></span>
        <span><img className="envelope" src="apps\Mail\assets\img\open.jpg"/></span>
      </div>
    
  )
}