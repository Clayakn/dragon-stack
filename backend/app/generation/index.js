const Dragon = require('../dragon/index');
const { REFRESH_RATE, SECONDS } = require('../config');

const refreshRate = REFRESH_RATE * SECONDS;

// Generation class is created
class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
        this.generationId = undefined;

    }

    // Have generation expiration vary by half increase or decrease
    calculateExpiration() {      
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2))

        const msUntilExpiration = Math.random() < .5 ? 
        refreshRate - expirationPeriod : 
        refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration)
    }

    // Create new dragon if not passed generation expiration otherwise throw error
    newDragon(){
        if(Date.now() > this.expiration) {
            throw new Error(`This generation expired on ${this.expiration}`)
        }
        return new Dragon({ generationId: this.generationId });
    }
}

module.exports = Generation;