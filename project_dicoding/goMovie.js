function withDrawMoney(amount){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(amount > 100){
                reject(new Error(`Saldo anda tidak cukup untuk menarik uang senilai $${amount}`));
            }

            resolve(amount);
        }, 500);
    });
}

function buyCinemaTicket(money){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(money < 15){
                reject(new Error(`Uang anda tidak cukup untuk membeli tiket`));
            }

            resolve('ticket-1');
        }, 500);
    });
}

function goInsideCinema(ticket){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error(`Anda tidak memiliki tiket`));
            }

            resolve(`Silahkan menikmati cinema anda`)
        }, 500);
    });
}

async function watchMovie(amount){
    try{
        const money = await withDrawMoney(amount)
        const ticket = await buyCinemaTicket(money)
        const result = await goInsideCinema(ticket)

        return result;
    } catch (error){
        throw error;
    }
}

watchMovie(15)
  .then((result) => console.log(result)) // enjoy the movie
  .catch((error) => console.log(error.message));

watchMovie(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message)); // not enough money to buy ticket