class Coffee{// kelas diusahakan menggunakan huruf besar agar bisa membedakan dan agar tidak terjadi error

    //asli
    // constructor(obj = {}){//mendeskripsikan isi
    // this.bean = obj.bean,
    // this.method = obj.method
    // }

    // Tambahan category
        constructor(obj = {}){//mendeskripsikan isi
        this.bean = obj.bean,
        this.method = obj.method
        this.category = obj.category
        }

        //cara 2 (cara lama)
        // constructor(bean,method, category){//mendeskripsikan isi
        //     bean,
        //     method,
        //     category
        //     }
}
//dicomment karena sudah ditaruk ke dalam detail cafe, tidak dikoment juga tidak masalah tujuan dikomen supaya tidak pusing
// const newCoffee = new Coffee( {
//     //isi objek
//     bean:'Gayo red honey',
//     method: 'Manual Brewing',
//     category: 'Arabica'
// })

class Teh{
    constructor(obj = {}){
        this.tehName = obj.name
    }
}


//class extend
class Cafe extends Coffee {
    constructor(obj = {}){
        super(obj)
        this.name = obj.name
    }
}
//cara 1
// const detailCafe = new Cafe({
//     bean:'Gayo red honey',
//     method: 'Manual Brewing',
//     category: 'Arabica',
//     name : 'Sevendays'

//cara 2
const detailCafe = new Cafe({
    bean:['Gayo red honey','sidikalang',{robusta: 'Kapal Tanker', sachet:'Kapal Api'}],
    method: 'Manual Brewing',
    category: 'Arabica',
    tehName: 'Sariwangi',//class teh tidak bisa diakses karena dia extends ke dalam kopi.
    name : 'Sevendays'
})
console.log(detailCafe);

class Location extends Cafe{
    constructor(obj = {}){
        super(obj)
        this.long = obj.long //jarak timur ke barat
        this.lat = obj.lat //jarak selatan ke utara
    }
}
// const locationMap = new Location({
    //untuk long dan lat jika dipindahkan ke atas juga tidak masalah karena dia langsung menyesuaikan dengan yang kita ketik terlebih dahulu.
//     long: '-27417412',
//     lat: '49324-9234',
//     bean:['Gayo red honey','sidikalang',{robusta: 'Kapal Tanker', sachet:'Kapal Api'}],
//     method: 'Manual Brewing',
//     category: 'Arabica',
//     tehName: 'Sariwangi',//class teh tidak bisa diakses karena dia extends ke dalam kopi.
//     name : 'Sevendays'
// })
const locationMap = new Location({
    bean:['Gayo red honey','sidikalang',{robusta: 'Kapal Tanker', sachet:'Kapal Api'}],
    method: 'Manual Brewing',
    category: 'Arabica',
    tehName: 'Sariwangi',//class teh tidak bisa diakses karena dia extends ke dalam kopi.
    name : 'Sevendays',
    long: '-27417412',
    lat: '49324-9234'
})
console.log(locationMap);