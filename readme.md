#Overload.js

Contributers&ensp;·&ensp;[Hunter Larco](http://hunterlarco.com)

> Overload.js provides a means for javascript developers to experience the benefit of overloading methods&mdash;including overloading via types.

## Example

```javascript
var funct = Overload.function(function DefaultFunction(){
  console.log('I dont know how to handle these arguments', arguments);
});

funct.overload(function(a){return a*2;}, [Number]);
funct.overload(function(a, b){return a+b;}, [Number, Number]);
funct.overload(function(a, b){return [a].concat(b);}, [Number, Array]);

console.log(funct(4) == 8);
console.log(funct(4, 6) == 10);
console.log(funct(1, [2,3]));
funct('this', 'wont', 'work');
```

## Installation
Download [overload.min.js](./overload.min.js) and place it in your project's root directory
```html
<script type='text/javascript' src='overload.min.js'></script>
```

## Methods

* `Overload.function(defaultFunction)` Creates a new overloadable function. The `defaultFunction` is optional and in its absense any unrecognized parameters will throw an error.
  * `.overload(funct, [types])` Overloads the parent function with the provided function including types.
    * **Types**
      * A list of constructors that will be matched against the constructors of each argument in the order provided