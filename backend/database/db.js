const mongoose = require("mongoose");

const uri = "mongodb+srv://MongoDb:1@eticaretdb.hvsic29.mongodb.net/?retryWrites=true&w=majority";

const connection = () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log("MongoDb bağlantısı Başarılı"))
        .catch((err) => console.log("Bağlantı Hatası! Hata: " + err.message));
}
module.exports = connection;