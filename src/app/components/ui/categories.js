/**
 * Created by andrii on 17.05.15.
 */

"use strict";

define(
  'components/ui/categories',
  [
    'flight/component',
    'jquery',
    'basisTemplates',
    'components/data/categoriesData'
  ],
  function(defineComponent, $, basisTemplates, categoriesData) {
    return defineComponent(Categories);

    function Categories() {
      this.defaultAttrs({
        template: "id:categoryTemplate",
        container: ".categories ul",
        item: ".categories li",
        products: "#products"
      });

      this.setCategories = function(data) {
        var template = bt(this.attr.template).createInstance();
        /* clean container */
        this.select('container').empty();
        for(var i = 0; i < data.length; i++) {
          template.set('id', data[i].id);
          template.set('title', data[i].title);

          this.select('container').append($(template.element).clone());
        }
      };

      this.after('initialize', function() {
        this.on('dataChanged', function(event, data) {
          this.setCategories(data.categories);
        }.bind(this));

        this.on('click', {
          item: function(event) {
            this.trigger($(this.attr.products), 'changeProducts', {
              category_id:$(event.target).data('id')
            });
            this.select('item').find('a').removeClass('active');
            $(event.target).addClass('active');
          }
        });

        categoriesData.attachTo(this.node);
      });
    }
  }
);