/**
 * Created by andrii on 17.05.15.
 */

"use strict";

define(
  'components/data/galleriesData',
  [
    'flight/component',
    'jquery'
  ],
  function (defineComponent, $) {
    return defineComponent(Galleries);

    function Galleries() {
      this.defaultAttrs({
        apiUrl: "data/galleries.json"
      });

      this.getGalleries = function () {
        return $.ajax({
          url: this.attr.apiUrl,
          method: "get"
        });
      };

      this.after('initialize', function () {
        this.getGalleries().then(function (data) {
          this.trigger('dataChanged', data);
        }.bind(this));
      });
    }
  }
);