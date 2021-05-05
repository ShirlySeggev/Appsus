
import { MailServices } from './services/mail-sevice.js'
// import { utilService } from 'services/util-service.js'
import { MailList } from './cmps/MailList.jsx'
import { MailOptions } from './cmps/MailOptions.jsx'
import { SearchMail } from './cmps/searchMail.jsx'


export class MailApp extends React.Component {
    state = {
        mails: null,
        filterBy:null,
        isLongTxtShown: false
        
    }

    componentDidMount() {
        this.loadMail();
    }

    loadMail = () => {
        MailServices.query()
            .then((mails) => {
                this.setState({ mails })
            });
    }

    onDelete = (mailId)=> {
        MailServices.deleteMail(mailId);
        this.loadMail();
    }
    onOpenMail = (mailId)=> {
        MailServices.openMail(mailId);
        this.loadMail();
    }
    showMore = () => {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown });
    }
    onSendMail=(mail) => {
        MailServices.sendMail(mail)
        .then(mails => {this.setState(mails)})

    }
    onOpenMail = (mail) => {
        console.log(mail.id);
        MailServices.show(mail.id)
        .then(mails => {this.setState(mails)})
    }
    render() {
        const { mails } = this.state
        if (!mails) return <div>Loading...</div>
        console.log(this.state.mails);
        return (
            <section>
                <SearchMail className="search-mails" />
                <div className="flex">
                <MailOptions className="options" onSendMail={this.onSendMail} mails={mails} /> 
                <MailList   mails={mails} className="mails" onOpenMail={(mailId) => this.onOpenMail(mailId)} onDelete={(mailId) => this.onDelete(mailId)} />
                </div>
            </section>
        )

    }
}