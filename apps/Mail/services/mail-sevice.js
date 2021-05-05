export const MailServices = {
    query,
    searchMail,
    deleteMail,
    gMails
}

function query() {
    console.log(gMails);
    return Promise.resolve(gMails)
}
var current = new Date()

var gMails = [
    { id: 1, subject: 'Wassap?', body: 'ck!', isRead: false, sentAt: current.toLocaleTimeString() },
    { id: 2, subject: 'bla?', body: 'Pp!', isRead: false, sentAt: current.toLocaleTimeString() },
    { id: 3, subject: 'da?', body: 'sh!', isRead: false, sentAt: current.toLocaleTimeString() }
];


function searchMail(subject) {
    return gMails.map(mail => {
        if (subject === mail.subject) {
            return subject
        }
    })

}
// getMailById(mailId)

// function getMailById(mailId) {
//     var mail = gMails.find(mail => {
//         return mailId === mail.id;
//     })
//     console.log(mail);
//     return Promise.resolve(mail);
// }

function deleteMail(mailId) {
    console.log(mailId);
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    console.log(mailIdx);
    gMails.splice(mailIdx, 1);
    return Promise.resolve(gMails);
}