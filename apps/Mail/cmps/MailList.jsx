import { MailPreview } from './MailPreview.jsx'



export function MailList({ mails, onDelete ,onOpenMail}) {
  return <section className="mail-list">
    {mails.map(mail => <MailPreview mail={mail} onOpenMail={onOpenMail}   key={mail.id} onDelete ={(mailId)=> {onDelete(mailId)}}/>)}
  </section>

}