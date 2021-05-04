import { MailServices } from '../Mail/services/mail-sevice.js'
import { MailList } from './cmps/MailList.jsx'


export class SearchMail extends React.Component {
   state={
       mailToSearch:'',
       mailsFound: []
   }

   handleChange = ({ target }) => {
    const {value} = target
    this.setState({ mailToSearch: value })
}
onSearchMail = (ev) => {
    ev.preventDefault();
    console.log(MailList.mails);
    MailServices.searchMail(this.state.mailToSearch)
            // console.log(mails);
            this.setState({ mailsFound: MailList.mails })
            console.log(this.state.mailsFound);
        
}

    render() {
        const { bookToSearch, booksFound } = this.state
        return (

            <section>
               <form className="mail-to-search" onSubmit={this.onSearchMail}>
                    <input className="search-input" type="text" id="mailToSearch" name="mailToSearch" value={this.state.mailToSearch} onChange={this.handleChange} placeholder="Search..." />
                    <button type="submit">Search</button>
                </form>
            </section>
        )

    }
}