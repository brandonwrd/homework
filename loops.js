console.log('This is the loops file');

let i = 0

// ascending from 0-99 (WORKS)
for(let i = 0; i < 100; i++) {
    console.log(i);
}
 
i = 99

// descending from 99-0 (WORKS)
for(let i = 99; i > 0; i--) {
  console.log(i);
}

i = 3

// multiples of 3: 3-90 (WORKS)
for(let i = 3; i <= 90; i++) {
    const multipleOf3 = i % 3 === 0;
    if(multipleOf3) {
      console.log(i);
    }
}

i = 49

// ascending from 49-72 (WORKS)
for(let i = 49; i < 73; i++) {
    console.log(i);
}


i = 81

// descending from 81-26 (WORKS)
for(let i = 81; i > 25; i--) {
    console.log(i);
}