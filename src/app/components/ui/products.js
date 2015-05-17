/**
 * Created by andrii on 17.05.15.
 */

"use strict";

define(
  'components/ui/products',
  [
    'flight/component',
    'jquery',
    'basisTemplates',
    'components/data/productsData',
    'components/mixin/withTemplateSet'
  ],
  function(defineComponent, $, basis, productsData, withTemplateSet) {
    return defineComponent(Products, withTemplateSet);

    function Products() {
      this.defaultAttrs({
        template: "id:productTemplate"
      });

      this.setProducts = function(data) {
        var template = bt(this.attr.template).createInstance();
        this.$node.empty();

        console.log("tmpl", template);

        for(var i = 0; i < data.length; i++) {
          this.$node.append(
            $(this.setTemplate(template, data[i])).clone()
          );
        }
      };

      this.after('initialize', function() {

        this.on('dataChanged', function(event, data) {
          console.log(data);
          this.setProducts(data.products);
        }.bind(this));

        productsData.attachTo(this.node);

      });
    }
  }
);