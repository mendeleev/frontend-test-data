/**
 * Created by andrii on 17.05.15.
 */

"use strict";


define(
  'components/gallery',
  [
    'flight/component',
    'jquery',
    'components/ui/categories',
    'components/ui/products'
  ],
  function (defineComponent, $, categories, products) {
    return defineComponent(Gallery);

    function Gallery() {
      this.defaultAttrs({
        categories: "#categories",
        products: "#products"
      });

      this.after('initialize', function () {
        categories.attachTo(this.select('categories'));
        products.attachTo(this.select('products'));
      });
    }
  }
);