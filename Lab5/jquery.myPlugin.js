(function( $ ) {
    var methods = {
      start : function () {
        var words = [ "лаба", "студент", "лама", "огурец" ,"математика"];
				var word = words[Math.floor(Math.random()*words.length)];
				var answer = []; 
				for (var i=0; i<word.length; i++){
				answer[i] = "_ ";}
				var remain = word.length; 
					while (remain > 0){
				alert(answer.join(""));
				
				var guess = prompt("Введите букву!");
				if (guess === null){	
				break;}
				else if (guess.length !== 1){
				alert("Пожалуйста, введите только одну букву. ");}
				else {
				  for (var j=0; j < word.length; j++){	
				if (word[j]=== guess) {
				  answer[j] = guess; 
				  remain--;}
				}}}
				
				
				alert(answer.join(" "));
				alert ("Отлично! Было загадано слово "+word);
        
}}
     $.fn.myPlugin = function(method) { 
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
          } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
          } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
          } 
          return this.each(methods[start]);
          
        };
      })( jQuery );