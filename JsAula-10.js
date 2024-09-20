// conhecendo mais sobre o JS

console.log('Situações que retornam verdadeiro: ');
console.log('"String vazia": ',!!"");
console.log('"String com um espaço apenas": ',!! " ");
console.log('String com varios espaços: ',!! "     ");
console.log('3: ',!!3);
console.log('-1: ',!!-1);
console.log('Atenção à precendência de operadores'); // é como na matemática
console.log('!!5+5: ',!!5+5); //retorna 6
console.log('5+5: ', !!(5+5)); //retorna true
console.log('5-5: ', !!(5-5)); //retorna 4
console.log('5-5 retorna : ' ,!!(5-5)); //retorna false, 5-0=0
console.log(' : ', !!'');
console.log('{}: ', !!{});
console.log('[] : ', !![]);
console.log('infinity: ',!!Infinity);
console.log('- infinity: ',!!-Infinity);
console.log('infinity-infinity: ',!!(Infinity-Infinity));
console.log('Situações que retornam falso: ');
console.log('5-5: ',!!(5-5)); //retorna false
console.log('5-5: ',(!!5)-5); //retorna -5. Primeiro gera 1, depois subtrai 5
console.log('vazia: ',!!"");
console.log('Nan: ', !!NaN);
console.log('undefined: ',!!undefined);
console.log('null: ',!!null);
