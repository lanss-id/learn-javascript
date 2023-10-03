class Buku {
    constructor(judul, dipinjam) {
        this.judul = judul;
        this.dipinjam = dipinjam;
    }
    tanggal = (hariKeDepan) => {
        const tanggalSekarang = new Date()
        tanggalSekarang.setDate(tanggalSekarang.getDate() + hariKeDepan)
        const formatter = new Intl.DateTimeFormat('id-ID', { dateStyle: 'full' });
        return formatter.format(tanggalSekarang)
    }
    pinjam() {
        if (this.dipinjam) {
            return `Buku ${this.judul} mulai dipinjam di hari ${this.tanggal(0)}`
        } else {
            return `Buku ${this.judul} belum bisa dipinjam`;
        }
    }

    kembalikan() {
        if (this.dipinjam) {
            this.dipinjam = false;
            return `Buku yang telah anda pinjam berjudul ${this.judul} akan dikembalikan pada hari ${this.tanggal(3)}`;
        } else {
            return false;
        }
    }
}

const sewaBuku = new Buku('Psicology of Money', true)
console.log(sewaBuku.judul + '\n' + sewaBuku.pinjam() + '\n' + sewaBuku.kembalikan())
console.log(sewaBuku.pinjam())