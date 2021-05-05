import { utilService } from '../../../util-service'


export const MailServices = {
    query,
    searchMail,
    deleteMail,
    sendMail,
    show
}

function query() {
    console.log(gMails);
    return Promise.resolve(gMails)
}
var current = new Date()

var gMails = [
    { id: utilService.makeId(), subject: 'Wassap', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', isRead: false, isShown: false, sentAt: current.toLocaleTimeString() },
    { id: utilService.makeId(), subject: 'bla', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', isRead: false, isShown: false, sentAt: current.toLocaleTimeString() },
    { id: utilService.makeId(), subject: 'da', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', isRead: false, isShown: false, sentAt: current.toLocaleTimeString() }
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

function sendMail(mail) {
    console.log(mail);
    gMails.push(mail);
    console.log(gMails);
    return Promise.resolve(gMails);
}

function show(mailId) {
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    gMails[mailIdx].isShown = !gMails[mailIdx].isShown
    console.log(mailIdx);
    return Promise.resolve(gMails);
}