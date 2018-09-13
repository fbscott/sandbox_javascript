/*****************************************************************************
 * Import Modules
 ****************************************************************************/
var Aliens = require('./aliens.js');
var Utilities = require('./utilities');

/*****************************************************************************
 * Alien Constructor Function
 ****************************************************************************/
function Alien(options) {
    // Scope-safe check. Makes sure all instances of "Alien" are called with
    // the "new" keyword.
    if(!(this instanceof Alien)) {
        return new Alien(options);
    }

    // Loop through properties of "options" object and assign them to "this."
    // Same as if each property was mapped individually.
    // E.g.: this.name   = options.name;
    //       this.origin = options.origin;
    //       etc.
    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            // Doesn't work with dot-notation (this.property). Don't know why.?.?
            this[property] = options[property];
        }
    }
}

/*****************************************************************************
 * Add a "message" method to the Alien Constructor
 ****************************************************************************/
Alien.prototype.message = function(text) {
    return this.name + ' ' + text;
}

/*****************************************************************************
 * Add a "loop" method to the Alien Constructor to demonstrate the difference
 * between standard and arrow functions with respect to the "this" keyword
 ****************************************************************************/
Alien.prototype.loop = function() {
    // Create a new variable "that" for use in subroutines
    var that = this;

    setInterval(function() {
        // Must use var "that" since "this" is scoped to the "loop" method, not
        // the setInterval function.
        console.log(that.discovered); // <--- that
    }, 1000);

    // Arrow functions fix the "this" problem. Now "this" is appropriately
    // scoped. Note: This function is exactly the same as the one above.
    // setInterval(() => {
    //    console.log(this.name); // <--- this
    // }, 1000);
}

/*****************************************************************************
 * New instance of Alien()
 ****************************************************************************/
var alien = new Alien(Aliens.xenomorph);

/*****************************************************************************
 * IIFE - Run some consoles for testing purposes
 ****************************************************************************/
(function() {
    if(alien.hazardous) {
        console.log(alien.message('is HAZARDOUS!!! AVOID CONTACT!!!'));
        console.log('Weapons include: ' + Utilities.getMembers(alien.weapons));
        console.log(alien.message(alien.info + ' Run for your life!'));
        alien.loop();
    } else {
        console.log(alien.message('is friendly. Go ahead and pet the little fella!'));
        console.log(alien.message(alien.info));
    };
})();
