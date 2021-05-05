import { MailPreview } from './MailPreview.jsx'
import { MailApp } from './cmps/MailApp.jsx'


export function MailList({ mails, onDelete,isLongTxtShown }) {
  return <section className="mail-list">
    {mails.map(mail => <MailPreview isLongTxtShown={isLongTxtShown} mail={mail} key={mail.id} onDelete ={(mailId)=> {onDelete(mailId)}}/>)}
  </section>

}