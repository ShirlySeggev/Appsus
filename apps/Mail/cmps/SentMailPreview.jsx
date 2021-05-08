export function SentMailPreview({ sentMail}) {
// ;console.log('pre sentMail',sentMail);
    return (
        <div className="sent-mail-preview" >
          <span className="span-img-sent"><img className="envelope-sent"  src="apps\Mail\assets\img\sent.png"/></span>
          <span className="mail-id">{sentMail.id}.</span>
          <span className="subject">{sentMail.subject}</span>
          <span className="body" >{sentMail.body}</span>
          <span>{sentMail.sentAt}</span>
        </div>
    )
  }