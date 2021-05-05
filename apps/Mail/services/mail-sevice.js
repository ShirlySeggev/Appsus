import { utilService } from '../../../util-service'


export const MailServices = {
    query,
    searchMail,
    deleteMail,
    openMail
}

function query() {
    console.log(gMails);
    return Promise.resolve(gMails)
}
var current = new Date()

var gMails = [
    { id: utilService.makeId(), subject: 'Wassap?', body: 'ck!', isRead: false, sentAt: current.toLocaleTimeString() },
    { id: utilService.makeId(), subject: 'bla?', body: 'Pp!', isRead: false, sentAt: current.toLocaleTimeString() },
    { id: utilService.makeId(), subject: 'da?', body: 'sh!', isRead: false, sentAt: current.toLocaleTimeString() }
];


function searchMail(subject) {
    return gMails.map(mail => {
        if (subject === mail.subject) {
            return subject
        }
    })

}

function deleteMail(mailId) {
    console.log(mailId);
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    console.log(mailIdx);
    gMails.splice(mailIdx, 1);
    console.log(gMails);
    return Promise.resolve(gMails);
}

function openMail(mailId) {

}