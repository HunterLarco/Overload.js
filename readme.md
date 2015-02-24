#Overload.js

Contributers&ensp;·&ensp;[Hunter Larco](http://larcolabs.com)

> Overload.js provides a means for javascript developers to experience the benefit of overloading methods&mdash;including overloading via types.

## Example

```javascript
var funct = Overload.function();

funct.overload(function(a){return a*2;});
funct.overload(function(a, b){return a+b;});
funct.overload(function(a, b){return [a].concat(b);}, ['number', 'array']);

console.log(funct(4) == 8);
console.log(funct(4, 6) == 10);
console.log(funct(1, [2,3]));
console.log(funct() == undefined);
```

## Installation
Download [overload.min.js](./build/overload.min.js) and place it in your project's root directory
```html
<script type='text/javascript' src='overload.min.js'></script>
```

## Methods

* `Overload.function()` Creates a new overloadable function.
  * `.overload(funct)` Overloads the parent function with the provided function. Types are disregarded, only argument count is considered.
  * `.overload(funct, types)` Overloads the parent function with the provided function including types. Any missing types are replaced with a wildcard.
    * **Types**
      * `*` ~ *wildcard*
      * `function`
      * `number`
      * `string`
      * `array`
      * `object`