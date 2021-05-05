
import { MailServices } from '../Mail/services/mail-sevice.js'
// import { utilServices } from 'services/util-service.js'
import { MailList } from './cmps/MailList.jsx'
import { MailOptions } from './cmps/MailOptions.jsx'
import { MailPreview } from './cmps/MailPreview.jsx'
import { SearchMail } from './cmps/searchMail.jsx'
import { LongTxt } from "../cmps/LongTxt.jsx";


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
    render() {
        const { mails,isLongTxtShown } = this.state
        if (!mails) return <div>Loading...</div>
        console.log(this.state.mails);
        return (
            <section>
                <SearchMail className="search-mails" />
                <div className="flex">
                <MailOptions className="options"mails={mails} /> 
                <MailList mails={mails} isLongTxtShown={isLongTxtShown} className="mails" onOpenMail={(mailId) => this.onOpenMail(mailId)} onDelete={(mailId) => this.onDelete(mailId)} />
                </div>
            </section>
        )

    }
}