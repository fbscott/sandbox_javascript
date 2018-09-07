/*****************************************************************************
 * Aliens Objects
 ****************************************************************************/
var et = {
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
};

var predator = {
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
};

var xenomorph = {
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
};

/*****************************************************************************
 * Alien Constructor Function
 ****************************************************************************/
function Alien(options) {
   // Scope-safe check. Makes sure all instances of "Alien" are called with
   // the "new" keyword.
   if(!(this instanceof Alien)) {
      return new Alien(options);
   }

   this.name       = options.name;
   this.origin     = options.origin;
   this.discovered = options.discovered;
   this.hazardous  = options.hazardous;
   this.attributes = options.attributes;
   this.weapons    = options.weapons;
   this.info       = options.info;
};

/*****************************************************************************
 * Add a "message" method to the Alien Constructor
 ****************************************************************************/
Alien.prototype.message = function(text) {
   return this.name + ' ' + text;
};

/*****************************************************************************
 * UTILITIES: Do stuff with the data
 ****************************************************************************/
var utilities = {
   getMembers: function(targetObject) {
      var members = [];

      // take 'targetObject' and loop through all of its members
      for(i in targetObject) {
         members.push(targetObject[i]);
      }

      return members;
   }
};

/*****************************************************************************
 * New instance of Alien()
 ****************************************************************************/
var alien = new Alien(et);

/*****************************************************************************
 * IIFE - Run some consoles for testing purposes
 ****************************************************************************/
(function() {
   if(alien.hazardous) {
      console.log(alien.message('is HAZARDOUS!!! AVOID CONTACT!!!'));
      console.log('Weapons include: ' + utilities.getMembers(alien.weapons));
      console.log(alien.message(alien.info + ' Run for your life!'));
   } else {
      console.log(alien.message('is friendly. Go ahead and pet the little fella!'));
      console.log(alien.message(alien.info));
   };
})();
