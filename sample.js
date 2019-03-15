/** Shorter version of:
 * if (typeof Product === "undefined") {
 *     var Product = {};
 * } 
 */
var Product = Product || {
   name: function(price) {
      this.price = price;
      this.discountPrice = function(discount) {
         return this.price - (this.price * discount);
      };
      this.name = function(name) {
         return name;
      };
      this.derp = {
         value: 'derp',
         number: 12
      };
   },
   tax: function(base) {
      this.base = base;
      this.calculateVat = function(vat) {
         return this.base * (1 + vat);
      }
   },
   doCalculations: function() {
      var n = new Product.name(100);
      console.log('stuff in obj: ', this.calculateVat(n.getPrice()));
   }
};

var n = new Product.name(150);
console.log('price: ', n.price);
console.log('discountPrice: ', n.discountPrice(0.25));
console.log('name: ', n.name('Scott'));
console.log('derp: ', n.derp.value);
console.log('derp: ', n.derp.number);

var b = new Product.tax(100);
console.log('calculateVat: ', b.calculateVat(0.07));
