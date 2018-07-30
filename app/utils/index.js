const instance = null
class Utils {
    constructor() {
        if (!instance) {
            this.logger = logger
            this.logger.init()
            instance = this
        }
        return instance
    }
    async log (msg) {
        if (process.env.NODE_ENV=='dev') {
            console.log(msg)
        }
    }
}

module.exports = new Utils()