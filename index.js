!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):t((e=e||self)._)}(this,(function(e){"use strict";(e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e).mixin({permutations:function(t,n){var f=e.values(t);if(f.length<n)return[];var i=function(e,t){if(--t<0)return[[]];var n=[];return e.forEach((function(e,f,o){(o=o.slice()).splice(f,1),i(o,t).forEach((function(t){t.unshift(e),n.push(t)}))})),n};return i(f,n)}})}));
