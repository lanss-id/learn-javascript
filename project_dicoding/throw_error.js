const json = '{"name": "Maulana Kayyis", "age": 19}'

try{
    const user = JSON.parse(json)

    if(!user.name){
        throw new SyntaxError("'name', is required!") // trow error line ini tidak muncul karena tidak ada handler dari catch nya
    }

    console.log(`Halo nama gue ${user.name}`)
    console.log(`Umur gue ${user.age} tahun`)

// buat if statement di dalam catch agar trow di line 7 bisa muncul
} catch (error) {
    if(error instanceof SyntaxError){
        console.log(`JSON Error: ${error.message}`) // dengan instaceof dapat membuat percabangan bagaimana cara menangani eror
    } else if(error instanceof ReferenceError){
        console.log(error.message)
    } else{
        console.log(error.stack)
    }
}