// function calculation(a, b, type) {
//   if (type == 'sum') {
//     return a + b;
//   } else if (type == 'sub') {
//     return a - b;
//   } else if (type == 'mul') {
//     return a * b;
//   }
// }
// console.log(calculation(1, 2, 'sum'));
// console.log(calculation(1, 2, 'sub'));
// console.log(calculation(1, 2, 'mul'));

// var aaa = 'Jemin';
// aaa += ' Patel';
// aaa = aaa + ' Patel';
// console.log(aaa);

// var bbb = 10;
// // bbb += 20
// bbb = bbb + 20;
// console.log(bbb);

// for (var i = 1; i < 5; i++) {
//   console.log('=======', i);
//   setTimeout(() => {
//     console.log(i);
//   }, 1);
// }

var details = [
  {
    name: {
      firstName: {
        prefix: 'Mr.',
        namne: 'Jemin',
      },
      lastName: 'Patel',
    },
    city: 'Surat',
    job: ['D&K', 'Techvedika', 'Google'],
  },
  {
    name: {
      firstName: {
        prefix: 'Mr.',
        namne: 'Pavitra',
      },
      lastName: 'Patel',
    },
    city: 'Kim',
    job: ['D&K', 'Amazon', 'Google'],
  },
];
console.log(details);
details.forEach((res) => {
  console.log(
    `${res.name.firstName.namne}-${res.name.lastName}-${res.city}-${res.job}`
  );
});
// console.log("===",details[1].name.firstName.namne);

for (var i = 0; i < details.length; i++) {
  console.log('===', details[i].name.firstName.namne);
}

//console.log((details.name.firstName.namne = 'Jemin P'));
// console.log((details.name.firstName.email = 'jemin@'));
// console.log(details.job.splice(2));
// console.log(
//   details.job.findIndex((res) => {
//     return res == 'Google';
//   })
// );
// console.log(details.job.indexOf('Google'));
// console.log(details.job);

// console.log(
//   details.job.map((res, index) => {
//     return index;
//   })
// );
