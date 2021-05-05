import { MailServices } from '../Mail/services/mail-sevice.js'


export function MailPreview({ mail }) {
  return (
    
      <table className="mail-preview">
        <tbody>
        <tr className="mail-preview">
        <td>{mail.id}.</td>
        <td className="subject">{mail.subject} : </td>
        <td>{mail.body}</td>
        <td>{mail.sentAt}</td>
        <td> <button onClick={() => {MailServices.deleteMail(mail.id)}}>Delete</button></td>
        <td><img src="../mail/assets/img/closed.jpg"/></td>
      </tr>
      </tbody>
      </table>
    
  )
}