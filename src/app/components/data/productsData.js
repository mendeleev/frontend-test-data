/**
 * Created by andrii on 17.05.15.
 */

"use strict";

define(
  'components/data/productsData',
  [
    'flight/component',
    'jquery'
  ],
  function(defineComponent, $) {
    return defineComponent(Products);

    function Products() {
      this.defaultAttrs({
        apiUrl: "data/products.json"
      });

      this.getProducts = function() {
        return $.ajax({url:this.attr.apiUrl});
      };

      this.after('initialize', function() {
        this.getProducts().then(function(data) {
          this.trigger('dataChanged', data);
        }.bind(this));
      })
    }
  }
);