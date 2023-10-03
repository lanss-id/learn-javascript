class MailService {
    constructor(sender){
        this.sender = sender;
    }
    sendMessage(message, receiver){
        console.log(`[${this.sender}] mengirim pesan: "${message}" ke [${receiver}]`);
    }
}

class WhatsappMessage extends MailService{
    sendBroadcastMessage(message, receivers){
        for(const receiver of receivers){
            this.sendMessage(message, receiver)
        }
    }
}

class EmailMessage extends MailService{
    sendDelayMessage(message, receiver, delay){
        setTimeout(() =>
            {this.sendMessage(message, receiver)}, delay
        )
    }
}

const whatsapp = new WhatsappMessage('Alan');
const email = new EmailMessage('Maulana');

whatsapp.sendMessage('Bro Besok kita jogging yuk', 'Agym')
whatsapp.sendBroadcastMessage('Halo yuk kita kenalan', ['dimas', 'bayu', 'budi']);
email.sendMessage('Selamat siang PT. Indraleksana', 'PT. Indraleksana');
email.sendDelayMessage('Saya akan mengirim pesan dalam waktu 5 detik kepada Rafi', 'Rafi', 5000)