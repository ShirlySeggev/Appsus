import { ComposeMail } from './ComposeMail.jsx'

const { Link } = ReactRouterDOM;

export function MailOptions() {
    return (
      <h1 className="mail-list">
         <button className="compose" onClick={() => { ComposeMail.onComposeMail;} }> Compose +</button>
         <button className="inbox" >Inbox</button>
         <button className="Starred">Starred</button>
         <button className="Sent" >Sent</button>
         <button className="Drafts">Drafts</button>
      </h1>
    )
  }