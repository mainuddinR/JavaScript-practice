const ages=[23 ,45,23,11,41,26,35];
const ages2=[87,98,56,47,32,17];
//old version
const allAges=ages.concat(ages2);
console.log(allAges);

const ages3=[1,2,3,4,5,6];
const threeAll=ages.concat(ages2).concat([100,200]).concat(ages3);
console.log(threeAll);

//ES6
//normal 
const allAges2=[ages,ages2,100,200,ages3];
console.log(allAges2);
// output
// [
//   [
//     23, 45, 23, 11,
//     41, 26, 35
//   ],
//   [ 87, 98, 56, 47, 32, 17 ],
//   100,
//   200,
//   [ 1, 2, 3, 4, 5, 6 ]
// ]
//jeta array hoy nai tai array korar jonno
const allAges3=[...ages,...ages2,100,200,...ages3];
console.log(allAges3);
// output
// [
//     23, 45, 23, 11, 41, 26,  35,
//     87, 98, 56, 47, 32, 17, 100,
//    200,  1,  2,  3,  4,  5,   6
//  ]

const business=650;
const minister=450;
const sochib=350;
const maximum=Math.max(business,minister,sochib);
console.log(maximum);

// const takaPrice=[650,450,350];
// const max=Math.max(takaPrice); //Kaz korbe na NaN ashbe
// console.log(max); 

const takaPrice=[680,490,350,735];
const max=Math.max(...takaPrice); //akhon max value return korbe
console.log(max); 

