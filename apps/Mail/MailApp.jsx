
import { MailServices } from './services/mail-sevice.js'
// import { utilService } from 'services/util-service.js'
import { MailList } from './cmps/MailList.jsx'
import { MailOptions } from './cmps/MailOptions.jsx'
import { MailSearch } from './cmps/MailSearch.jsx'
import { SentMailList } from './cmps/SentMailList.jsx'


export class MailApp extends React.Component {
    state = {
        mails: null,
        sentMails:null,
        filterBy:null,
        countsRead:null,
        isInbox:true
    }

    componentDidMount() {
        this.loadMail();
        this.loadSentMail()
        this.setState({countsRead:MailServices.getReadCountMails()})
    }

    loadMail = () => {
        MailServices.query(this.state.titleToSearch)
            .then((mails) => {
                this.setState({ mails })
            });
     
        }
    loadSentMail = () => {
        MailServices.querySent()
            .then((sentMails) => {
                this.setState({ sentMails })
                console.log(sentMails);
            });
        }
    onDelete = (mailId)=> {
            MailServices.deleteMail(mailId);
        this.loadMail();
    }
    
    onSendMail=(sentmail) => {
        console.log('sentmail',sentmail);
        MailServices.sendMail(sentmail)
        .then(gSentMails => {this.setState(gSentMails)})

    }
    
    onOpenMail = (mail) => {
        // console.log(mail.id);
        MailServices.show(mail.id)
        .then(mails => {this.setState(mails)})
    }
    onStarColor = (mail) => {
        MailServices.star(mail.id)
        .then(mails => {this.setState(mails)})
        this.setState
    }
    
    onSetFilter = (titleToSearch) => {
        this.setState({ titleToSearch }, this.loadMail);
    }
    toggleRead=(mailId)=>{
        console.log(mailId);
       var mail= MailServices.isRead(mailId)
       .then(()=>{this.loadMail()})
       this.setState({countsRead:MailServices.getReadCountMails()})
      }
      OnSentMails=()=>{
    console.log(this.state);
    this.setState({isInbox:false},()=>{})
    ;
    }
    OnInbox=()=>{
        this.setState({isInbox:true},()=>{})
    }

    render() {
        const { mails,countsRead, isInbox } = this.state
        if (!mails) return <div>Loading...</div>
        return (
            <section>
               <MailSearch className="search-mails" onSetFilter={this.onSetFilter}  />
                <div className="flex">
                <MailOptions onOpenMail={(mailId) => this.onOpenMail(mailId)} isInbox={isInbox} true OnInbox={this.OnInbox} countsRead={countsRead} className="options"onStarColor={this.onStarColor} OnSentMails={this.OnSentMails} onSendMail={this.onSendMail} mails={mails} /> 
               {isInbox && <MailList onStarColor={this.onStarColor} mails={mails} className="mails" toggleRead={this.toggleRead}  onOpenMail={(mailId) => this.onOpenMail(mailId)} onDelete={(mailId) => this.onDelete(mailId)} />}
               {!isInbox &&  <SentMailList sentMails={this.state.sentMails} className="sentmails"  />}
                </div>
            </section>
        )

    }
}