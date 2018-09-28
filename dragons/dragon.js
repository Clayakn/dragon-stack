const TRAITS = require('./traits');

const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    // if write birthdate: new Date(), then will get date when object is created, not when new instance of dragon is created, use get to get new date when needed
    get birthdate() {
        return new Date()
    },
    get randomTraits(){
        const traits = [];
        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;
            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ];

            traits.push({ traitType, traitValue })
        });
        return traits;
    }
}

class Dragon {
    // if object is undefined, default will be empty object
    constructor({birthdate, nickname, traits} = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}

module.exports = Dragon;