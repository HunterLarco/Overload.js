(function(){
	
	var Overload = new Object();
	Overload.function = function(){
		var funct = function(){return funct['__overload__'].apply(funct, arguments)};
		funct.overload = AddMethod.bind(funct);
		return funct;
	};
	
	function AddMethod(funct, types){
		if(GetType(types) != 'array') types = [];
		
		for(var i=types.length; i<funct.length; i++) types.push('*');
		var old = this['__overload__'];
		
		this['__overload__'] = function(){
			if (funct.length == arguments.length && MatchesTypes(arguments, types)) return funct.apply(this, arguments);
			else if (typeof old == 'function') return old.apply(this, arguments);
		};
	}
	
	function MatchesTypes(arguments, types){
		for(var i=0; i<arguments.length; i++){
			var arg = arguments[i],
					type = types[i];
			if(type == '*') continue;
			if(GetType(arg) != type) return false;
		}
		return true;
	}
	function GetType(variable){
		if(typeof variable != 'object') return typeof variable;
		else if(variable.constructor == Array) return 'array';
		else return 'object';
	}
	
	window.Overload = Overload;
	
})();