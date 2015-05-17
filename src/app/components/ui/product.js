/**
 * Created by andrii on 17.05.15.
 */

define(
  'components/ui/product',
  [
    'flight/component',
    'jquery',
    'components/mixin/withTemplateSet',
    'components/ui/form/number'
  ],
  function(defineComponent, $, withTemplateSet, number) {
    return defineComponent(Product, withTemplateSet);

    function Product() {
      this.defaultAttrs({
        template: {},
        container: {}
      });

      this.setProduct = function(data) {
        this.setTemplate(this.attr.template, data);
        this.attr.container.append(this.node);
      };

      this.after('initialize', function() {
        this.on('changeProduct', function(event, data) {
          number.attachTo(this.node, {max: data.product.quantity});
          this.setProduct(data.product);
        }.bind(this));

      });
    }

  }
);