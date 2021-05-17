

let checkDogs = function(dogsjulia, dogskate){
    
    const dogsjuliacorrected  = dogsjulia.slice();
    dogsjuliacorrected.splice(0,1);
    dogsjuliacorrected.splice(-2);

    const dog =dogsjuliacorrected.concat(dogskate);
    console.log(dog);

   dog.forEach(function(dog,i) {
    if (dog >= 3)
     {
        console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
      }
    else 
    {
        console.log(`Dog number ${i + 1} is still a puppy `);
    }
   });

};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);