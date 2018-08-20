var xenomorph = {
   name: 'Xenomorph',
   origin: 'unknown',
   discovered: 'LV-426',
   hazardous: true,
   attributes: {
      blood: 'acid',
      skeletal_system: 'exoskeleton'
   },
   weapons: ['claws', 'proboscis', 'tail', 'acidic blood']
};

var predator = {
   name: 'Predator',
   origin: 'unknown',
   discovered: 'unknown',
   hazardous: true,
   attributes: {
      blood: 'green',
      skeletal_system: 'endoskeleton'
   },
   weapons: ['shoulder-mounted cannon', 'retractable blades']
};

var et = {
   name: 'E.T.',
   origin: 'unknown',
   discovered: 'unknown',
   hazardous: false,
   attributes: {
      blood: 'white',
      skeletal_system: 'endoskeleton'
   },
   weapons: []
};

var utilities = {
   getMembers: function(targetObject) {
      var members = '';

      // take 'targetObject' and loop through all of its members
      for(i in targetObject) {
         members += (targetObject[i]);
      }

      return members;
   }
};

var Alien = function(options) {
   this.name       = options.name;
   this.origin     = options.origin;
   this.discovered = options.discovered;
   this.hazardous  = options.hazardous;
   this.attributes = options.attributes;
   this.weapons    = options.weapons;
};

// add property "message" to Alien obj
Alien.prototype.message = function(text) {
   return text;
};

var alien = new Alien(xenomorph);


if(alien.hazardous) {
   console.log(alien.name + ' is hazardous! Avoid contact!');
   console.log('Weapons include: ' + utilities.getMembers(alien.weapons));
   console.log(alien.message(alien.name + ' will kill you. Run for your life!'));
} else {
   console.log(alien.name + ' is friendly. Go ahead and pet the little fella!');
   console.log(alien.message(alien.name + ' gets homesick.'));
};
