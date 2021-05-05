import { MailPreview } from './MailPreview.jsx'


<<<<<<< HEAD

export function MailList({ mails, onDelete,isLongTxtShown ,onOpenMail}) {
  return <section className="mail-list">
    {mails.map(mail => <MailPreview mail={mail} onOpenMail={onOpenMail} isLongTxtShown={isLongTxtShown}  key={mail.id} onDelete ={(mailId)=> {onDelete(mailId)}}/>)}
=======
export function MailList({ mails }) {
  console.log(mails);
  return <section className="mail-list">
    {/* <h1>Inbox:</h1> */}
    {mails.map(mail => <MailPreview mail={mail} key={mail.id} />)}
>>>>>>> cbe6bd5cd0ac3138d0e3406b80199d25a854c519
  </section>

}