const mongo = require('mongoose')
require('dotenv').config()

module.exports = async () => {
    try {
        await mongo.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.${process.env.DBHOST}.mongodb.net/client?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('DB Connected Successfully!')
    } catch (err) {
        if(err) {
            console.log(err.message)
            process.exit(1)
        }
    }
}