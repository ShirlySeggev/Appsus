import { MailServices } from '../services/mail-sevice.js'


export function MailPreview({ mail, onDelete,onOpenMail,toggleRead,onStarColor}) {

  function toggleShow(){
    if (!mail.isShown){
      // var x=MailServices.getReadCountMails()
      // x++
      // console.log(x);
      return `hidden`}
    }
    // function onStarColor(){
    //   //get the mail by id and change isStar field

    //   return`checked`
    // }

    function changePic(mail){
      if(mail.isRead)return `apps/Mail/assets/img/open.png`
      return `apps/Mail/assets/img/close1.png`
    }


  return (
      <div className="mail-preview" >
        <span className="span-img"><img onClick={()=>toggleRead(mail.id)} className="envelope"  src={changePic(mail) }/></span>
        <span className="mail-id">{mail.id}.</span>
        <span className="subject">{mail.subject}</span>
        <span onClick={()=>{onOpenMail(mail);}} ><img className="read-icon" src="apps\Mail\assets\img\icon-readmore.png"/></span>
        <span className={`body ` + toggleShow()}>{mail.body}</span>
        <span>{mail.sentAt}</span>
        <span><button className="Delete" onClick={()=>{onDelete(mail.id);}}>Delete</button></span>
        <span onClick={()=>{onStarColor(mail);}} className={'fa fa-star' +( mail.isStar ? ' star' : '')}></span>
      </div>
  )
}