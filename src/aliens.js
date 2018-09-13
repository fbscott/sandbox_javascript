var aliens = {

    /*************************************************************************
     * Aliens Objects
     ************************************************************************/
    et : {
        name: 'E.T.',
        origin: 'unknown',
        discovered: 'Earth',
        hazardous: false,
        attributes: {
            blood: 'white',
            skeletal_system: 'endoskeleton'
        },
        weapons: [],
        info: 'wants to go home.'
    },

    predator : {
        name: 'Predator',
        origin: 'unknown',
        discovered: 'Earth',
        hazardous: true,
        attributes: {
            blood: 'green',
            skeletal_system: 'endoskeleton'
        },
        weapons: ['shoulder-mounted cannon', 'retractable blades'],
        info: 'will remove your spine!'
    },

    xenomorph : {
        name: 'Xenomorph',
        origin: 'unknown',
        discovered: 'LV-426',
        hazardous: true,
        attributes: {
            blood: 'acid',
            skeletal_system: 'exoskeleton'
        },
        weapons: ['claws', 'proboscis', 'tail', 'acidic blood'],
        info: 'will punch through your skull!'
    }

};

module.exports = aliens;
