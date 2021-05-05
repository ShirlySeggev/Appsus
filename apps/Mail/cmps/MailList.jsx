import { MailPreview } from './MailPreview.jsx'



export function MailList({ mails, onDelete,isLongTxtShown ,onOpenMail}) {
  return <section className="mail-list">
    {mails.map(mail => <MailPreview mail={mail} onOpenMail={onOpenMail} isLongTxtShown={isLongTxtShown}  key={mail.id} onDelete ={(mailId)=> {onDelete(mailId)}}/>)}
  </section>

}