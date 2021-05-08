import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service'
export const MailServices = {
    query,
    searchMail,
    deleteMail,
    sendMail,
    show,
    star,
    isRead,
    getReadCountMails,
    querySent,
    _saveSentToStorage,
    _saveStarToStorage

}
const KEY = 'mails';
const KEYSENT = 'sentMails';
const KEYSTAR = 'STAR';

var current = new Date()
var gMails
var gSentMails
_createMails()
_createSentMails()

function _createMails() {
    var mails = storageService.loadFromStorage(KEY);
    if (!mails || mails.length <= 0) {
        mails = [
            { id: utilService.makeId(), subject: 'Cancel meeting', body: 'sorry,things gone wrong,I need to cancel.call me', isRead: false, isShown: false, isStared: false, sentAt: current.toLocaleTimeString() },
            { id: utilService.makeId(), subject: 'Call me', body: 'I was looking for you,call me asap 0522259066', isRead: true, isShown: false, isStared: false, sentAt: current.toLocaleTimeString() },
            { id: utilService.makeId(), subject: 'Thursday night', body: 'reminder!!!', isRead: false, isShown: false, isStared: true, sentAt: current.toLocaleTimeString() },
            { id: utilService.makeId(), subject: 'May 1st meeting', body: 'Let the show begin,dont forget ypur sunglasses', isRead: false, isShown: false, isStared: false, sentAt: current.toLocaleTimeString() },
            { id: utilService.makeId(), subject: 'Google info', body: 'reminder!!!', isRead: false, isShown: false, isStared: true, sentAt: current.toLocaleTimeString() },
            { id: utilService.makeId(), subject: 'GROUPON SALE', body: 'Let the show begin,dont forget ypur sunglasses', isRead: false, isShown: false, isStared: false, sentAt: current.toLocaleTimeString() }
        ];
    }
    gMails = mails
    _saveToStorage()
}

function _createSentMails() {
    var sentMails = storageService.loadFromStorage(KEYSENT);
    if (!sentMails || sentMails.length <= 0) {
        sentMails = [
            { id: utilService.makeId(), subject: 'Let Date', body: 'Let the show begin,dont forget ypur sunglasses', sentAt: current.toLocaleTimeString() },
            { id: utilService.makeId(), subject: 'Thursday night', body: ' you have a lot to do,contact me when you are free', sentAt: current.toLocaleTimeString() },
            { id: utilService.makeId(), subject: 'Congratulations', body: ' publishing software like Aldus PageMaker including versions of Lorem Ipsum', sentAt: current.toLocaleTimeString() }
        ];
    }
    gSentMails = sentMails
    console.log(gSentMails);
    _saveSentToStorage()
}

function query(titleToSearch) {
    if (titleToSearch) {
        const filteredMails = gMails.filter(mail => {
            return ((mail.subject).toLowerCase()).includes(titleToSearch.toLowerCase());
        })
        return Promise.resolve(filteredMails);
    }
    return Promise.resolve(gMails);
}

function querySent() {
    return Promise.resolve(gSentMails);
}

function searchMail(subject) {
    return gMails.map(mail => {
        if (subject === mail.subject) {
            return subject
        }
    })
}

function deleteMail(mailId) {
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    gMails.splice(mailIdx, 1);
    _saveToStorage()
    return Promise.resolve(gMails);
}

function sendMail(sentmail) {
    console.log(sentmail);
    gSentMails.push(sentmail);
    console.log('gSentMails', gSentMails);
    _saveSentToStorage()
    return Promise.resolve(gSentMails);
}

function show(mailId) {
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    gMails[mailIdx].isShown = !gMails[mailIdx].isShown
    return Promise.resolve(gMails);
}

function star(mailId) {
    const mailIdx = gMails.findIndex(mail => mail.id === mailId);
    gMails[mailIdx].isStar = !gMails[mailIdx].isStar
    _saveStarToStorage()
    return Promise.resolve(gMails);
}



function _saveToStorage() {
    storageService.saveToStorage(KEY, gMails);
}

function _saveStarToStorage() {
    storageService.saveToStorage(KEY, gMails);
}

function _saveSentToStorage() {
    storageService.saveToStorage(KEYSENT, gSentMails);
}

function isRead(idx) {
    console.log(idx);
    const mailIdx = gMails.findIndex(mail => mail.id === idx);
    gMails[mailIdx].isRead = !gMails[mailIdx].isRead
    _saveToStorage()
    return Promise.resolve(gMails)
}

function getReadCountMails() {
    var counter = 0
    gMails.forEach(mail => {
        if (!mail.isRead) {
            counter++
        }
    })

    return counter
}