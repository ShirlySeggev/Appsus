
import { MailServices } from '../Mail/services/mail-sevice.js'
// import { utilServices } from 'services/util-service.js'
import { MailList } from './cmps/MailList.jsx'
import { MailOptions } from './cmps/MailOptions.jsx'
import { SearchMail } from './cmps/searchMail.jsx'


export class MailApp extends React.Component {
    state = {
        mails: null,
        filterBy:null
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

    render() {
        const { mails } = this.state
        if (!mails) return <div>Loading...</div>
        console.log(this.state.mails);
        return (
            <section>
                <SearchMail className="search-mails" />
                <div className="flex">
                <MailOptions className="options" /> 
                <MailList  mails={mails} className="mails" />
                </div>
            </section>
        )

    }
}