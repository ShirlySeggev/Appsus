import { MailPreview } from './MailPreview.jsx'
import { MailApp } from './cmps/MailApp.jsx'


export function MailList({ mails }) {
  console.log(mails);
  return <section className="mail-list">
    {/* <h1>Inbox:</h1> */}
    {mails.map(mail => <MailPreview mail={mail} key={mail.id} />)}
  </section>

}