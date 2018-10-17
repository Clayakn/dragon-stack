const TRAITS = require('../../data/traits');


// Use default properties when data isnt given by user
const DEFAULT_PROPERTIES = {
    dragonId: undefined,
    nickname: 'unnamed',
    generationId: undefined,
    // if write birthdate: new Date(), then will get date when object is created, not when new instance of dragon is created, use get to get new date when needed
    get birthdate() {
        return new Date()
    },
    // Get random trait, property/key is traitType, value is traitValue
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

// all new instances of Dragon will be built off this class
class Dragon {
    // if object is undefined, default will be empty object
    constructor({ dragonId, birthdate, nickname, traits, generationId } = {}) {
        this.dragonid = dragonId || DEFAULT_PROPERTIES.dragonId;
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;