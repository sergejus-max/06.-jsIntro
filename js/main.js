console.log('labas rytas');

// sudedamosios dalys:
//  -kintamieji - переменные
//  -funkcios - функции
/*  -event'ai (listener'iai) - событие (нажатие кнопки клавиатуры или мышкой, изменение резолюци, фулскрин, подключении вэбкамеры и многое другое) 
        Основные нишевые события (95%):
            нажатие левой кнопки мыши
            нажатие правой кнопки мыши
            нажатая кнопка клавиатуры
            отжатая кнопка клавиатуры 
            просто кнопка была или нажата, или отжата 
        Ненишевые события - подключение к компьютеру сторонних девайсов (например руля) */

// UZDUOTIS:
// Kintamuju inicijavimas

const PI = 3.1415;
    console.log(PI);

let amzius = (0); // переменная объявленная через LET, видна на том же уровне кода и ниже 
console.log('mano amzius',amzius);
amzius = (18)
console.log('mano amzius',amzius);
amzius = (55);
console.log('mano amzius',amzius);


var imia = 'Sergej'; // переменная объявленная через VAR, видна на всех уровнях
console.log('Cia mano vardas:', imia);

const a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];  // переменные типа "список" (sarasas, nasyvas, arrey)
console.log(a);

const abc = [['a, b, c, d, e'], 'a', 'b', 'c', 'd',
 15, 25, 30, [a]];
console.log(abc);
 
const sar1 = ['a', 'b', 'c', '4', '5'];
console.log(sar1);



// VEIKSMAI SU SKAICIAIS 
const a1 = 33;
const b1 = 15;
const c1 = -7;
console.log(a1 + b1 +c1);
// Второй вариант решения:
const suma = a1 +b1 +c1;
console.log(suma);

// Все матиматические действия типа число + текст, число + список, выводятся текстом.

const a2 = 'aadad ';
const b2 = 'kh;qilrhvn';
console.log(a2 + b2);

const a3 = 1;
const b3 = 2;
const c3 = 3;
const d3 = 4;
const e3 = 5;
const suma2 = a3 - b3 + c3 - d3 +e3;
console.log(suma2);
console.log(a3 - b3 + c3 - d3 + e3);

const z = [5, 23, 54, 36, 18, 45, 29, 33];
const zSuma = z[0] - z[1] + z[2] - z[3] + z[4];
console.log('z:', zSuma);

console.log(z.length);
console.log(z[ 6 ]); // выводит n-ый член списка (n = n'-1), n' - длинна списка (отсчет идёт от 0);
console.log(z[ z.length - 1 ]); // выводит последний член списка;
console.log(z[ 0 ]);

const y = ['k', 'l', 'm', 'n', 'o' ];
console.log(y[4] + ', ' + y[3] + ', ' + y[2] + ', ' + y[1] + ', ' + y[0]);
console.log(y.join(', ')); // join - соединить. В кавычках определяем, как должны быть разделены члены (например: пробелами, запятыми)
console.log(y.join(''));




console.log('---------------------------');
// +-*/ - matematines operacijos, o patis simboliai - operatoriai, kuriu veikimas priklausys nuo to, kas aplinkui juos uzrasyta:
// jeigu aplinkui operatoriu + bus skaiciai, jis juos susumuos. O jeigu bent is vienos operatoriaus + puses bus tekstas, arba masyvas, jis juos sujungs
console.log(2 + 5);
console.log(2 + 'asd');

const tavoVardas = 'Sergej';
const kreipiuosi = 'labas';
const kreipinioSakinys = kreipiuosi + ', ' + tavoVardas;
console.log(kreipinioSakinys);
 
console.log('------------------------');
console.log('KINTAMUJU PALYGINIMAS');
console.log('------------------------');

const k1 = 44;
const k2 = 7;
if ( k1 > k2 ) {
    console.log( 'k1-k2 sekmes tekstas');    
}

const k3 = 7;
const k4 = 7;
if ( k3 == k4 ) {
    console.log( 'k1-k2 sekmes tekstas');    
}
 
const k5 = 44;
const k6 = 7;
if ( k5 >= k6 ) {
    console.log( 'k1-k2 sekmes tekstas');    
}

const k7 = 4;
const k8 = 7;
if ( k7 <= k8 ) {
    console.log( 'k1-k2 sekmes tekstas');    
}

const k9 = 44;
const k10 = 7;
if ( k9 != k10 ) { // != не равны, точнее - противоположное значение
    console.log( 'k1-k2 sekmes tekstas');    
}

// vartotini: >, <, >=, <=, ===, !== 
// nevartotini: ==, != 
// !=, == проверяет только значения объекта; 
// !==, === проверяет значение и тип объекта - более строгое сравнение

const l1 = 21;
const l2 = '21';
if( l1 === l2 ) {
    console.log('k1-k2 sekmes tekstas');    
} else {
    console.log(':('); // если l1 = l2, выводим первый текст, в противном случае выводим второй. Другими словами: если условие не соответствует действительности, выводим второй текст.
}
console.log('-----------------------');

// const akys = 'melynos';

// // if(akys === 'zalios') {
// // console.log('zaliaakys');
// // }

// // if (akys === 'rudos') {
// // console.log('melagis ');
// // }

// // if(akys === 'melynos') {
// // console.log('gerulis');
// // }

const akys = 'zalios';

if ( akys === 'zalios' ) {
    console.log('zaliakys');
} else { 
if ( akys === 'melynos') {
    console.log('gerulis');       
    } else {
        if ( akys === 'rudos') {
            console.log('melagis');   
        }  else {
            console.log('o tu turi akys?');           
        }       
    }
}

if ( akys === 'zalios' ) {
    console.log('zaliakys');
} else if  ( akys === 'melynos') {
    console.log('gerulis');       
} else if ( akys === 'rudos') {
    console.log('melagis');
} else {
    console.log('o tu turi akys?');
}

console.log('-------------------');

if ( 4 < 2) {
    console.log('tiesa');    
} else {
    console.log('melas');    
}

console.log('------------------------');
console.log('CIKLAI');
console.log('-------------------------');

// У циклов 3 основных момента - сколько повторений, когда цикл остановить и что зацикливать.

//for ( // здесь условия сколько раз повторять цикл с проверкой когда остановиться ) {
   // здесь пишется логика, которую надо повторять

// 1-ое - нужно определиться с которой итерации начинается цикл. = 0ж
// 2-ое - до которой итерации будет зациклено;
// 3-е - определить шаг итерации i+1;

for( let i=0; i<5; i=i++) {
    console.log(i);    
}




    










    

                
