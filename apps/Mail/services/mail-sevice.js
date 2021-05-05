export const MailServices = {
    query,
    searchMail,
    deleteMail,
<<<<<<< HEAD
    sendMail,
    show
=======
    gMails
>>>>>>> cbe6bd5cd0ac3138d0e3406b80199d25a854c519
}

function query() {
    console.log(gMails);
    return Promise.resolve(gMails)
}
var current = new Date()

var gMails = [
<<<<<<< HEAD
    { id: utilService.makeId(), subject: 'Wassap', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', isRead: false, isShown: false, sentAt: current.toLocaleTimeString() },
    { id: utilService.makeId(), subject: 'bla', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', isRead: false, isShown: false, sentAt: current.toLocaleTimeString() },
    { id: utilService.makeId(), subject: 'da', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum', isRead: false, isShown: false, sentAt: current.toLocaleTimeString() }
=======
    { id: 1, subject: 'Wassap?', body: 'ck!', isRead: false, sentAt: current.toLocaleTimeString() },
    { id: 2, subject: 'bla?', body: 'Pp!', isRead: false, sentAt: current.toLocaleTimeString() },
    { id: 3, subject: 'da?', body: 'sh!', isRead: false, sentAt: current.toLocaleTimeString() }
>>>>>>> cbe6bd5cd0ac3138d0e3406b80199d25a854c519
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
<<<<<<< HEAD
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
=======
>>>>>>> cbe6bd5cd0ac3138d0e3406b80199d25a854c519
}