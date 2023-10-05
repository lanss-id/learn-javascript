class PesanSurel{
    constructor(pengirim) {
        this.pengirim = pengirim;
    }
    kirimPesan(pesan, penerima) {
        console.log(`[${this.pengirim}] mengirim pesan: "${pesan}" ke [${penerima}]`);
    }
}

class LayananWhatsapp extends PesanSurel {
    // Overriding constructor
    constructor(pengirim, isBusiness) {
        super(pengirim);
        this.isBusiness = isBusiness 
    }
    // Overriding method
    kirimPesan(pesan, penerima) {
        console.log(`[${this.pengirim}] mengirim pesan: "${pesan}" ke [${penerima}] via WhatsApp ${this.isBusiness}`)
    }

    kirimBanyakPesan(pesan, paraPenerima) {
        for(const penerima of paraPenerima){
            super.kirimPesan(pesan, penerima) 
        }
    }
}

class LayananEmail extends PesanSurel {
    kirimPesanTertunda(pesan, penerima, delay){
        setTimeout(() =>
            {this.kirimPesan(pesan, penerima)}, delay
        )
    }
}

const whatsapp = new LayananWhatsapp('Saya', 'Bisnis');

whatsapp.kirimPesan('Bro gua mau minjem motor lu yaa', 'Akbar');
whatsapp.kirimBanyakPesan('PENGUMUMAN!! Besok gua ultah, dateng ke grand livina yaa!',
                    ['Toni', 'Ilham', 'Dodi', 'Galih'])
console.log(whatsapp instanceof LayananWhatsapp);
console.log(whatsapp instanceof PesanSurel);
console.log(whatsapp instanceof LayananEmail);

const email = new LayananEmail('Alan');

email.kirimPesan('Selamat siang pak Ridwan, apakah hari ini luang?', 'Pak Ridwan');
email.kirimPesanTertunda('Pesan ini akan tertunda 4 detik, silahkan coba sendiri', 'testing', 4000)

console.log(email instanceof LayananEmail)
console.log(email instanceof PesanSurel)
console.log(email instanceof LayananWhatsapp)