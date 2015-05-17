/**
 * Created by andrii on 17.05.15.
 */

"use strict";

define(
  'components/mixin/withTemplateSet',
  [],
  function() {
    return function() {
      this.setTemplate = function(template, data) {
        for(var name in data) {
          template.set(name, data[name]);
        }
        return template ? template.element : null;
      }
    }
  }
);