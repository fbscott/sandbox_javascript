/*****************************************************************************
 * UTILITIES: Do stuff with the data
 ****************************************************************************/
var utilities = {
    getMembers: function(targetObject) {
    var members = [];

    // take 'targetObject' and loop through all of its members
    for(var property in targetObject) {
        members.push(targetObject[property]);
    }

        return members;
    }
};

module.exports = utilities;
