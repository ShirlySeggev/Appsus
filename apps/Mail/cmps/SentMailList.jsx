import { SentMailPreview } from './SentMailPreview.jsx'



export function SentMailList({sentMails}) {
    console.log(sentMails);
  return <section className="sent-mail-list">
    {sentMails.map(sentMail => <SentMailPreview sentMail={sentMail} key={sentMail.id}/>)}
  </section>

}