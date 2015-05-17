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

      /**
       *
       * @returns {*}
       */
      this.getProducts = function(categoryId) {
        return $.ajax({url:this.attr.apiUrl}).then(function(data) {
          var result = [];
          if(categoryId) {
            for(var i = 0; i < data.products.length; i++) {
              if(data.products[i].category_id === categoryId) {
                result.push(data.products[i]);
              }
            }
          } else {
            result = data.products;
          }

          return {products: result};
        });
      };

      this.after('initialize', function() {
        /**
         * listen event for changing data
         */
        this.on('changeData', function(event, params) {
          /**
           * load products data
           */
          this.getProducts(params.category_id).then(function(data) {
            this.trigger('dataChanged', data);
          }.bind(this));

        }.bind(this));
      })
    }
  }
);