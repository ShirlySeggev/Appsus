import { MailPreview } from './MailPreview.jsx'



export function MailList({ mails, onDelete ,onOpenMail,toggleRead,onStarColor}) {
  return <section className="mail-list">
    {mails.map(mail => <MailPreview onStarColor={onStarColor} mail={mail} toggleRead={toggleRead} onOpenMail={onOpenMail}   key={mail.id} onDelete ={(mailId)=> {onDelete(mailId)}}/>)}
  </section>

}