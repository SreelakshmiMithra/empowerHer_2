//a) What is the output?
if (true) {
  let x = 10;
  var y = 20;
}

console.log(y);
console.log(x);


//b) Access safely using optional chaining

const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
//Access safely using optional chaining

console.log(profile.user?.details?.email);  
console.log(profile.user?.details?.phone);  

//c)Correct version using optional chaining:
const data = {
  id: 1,
  product: null
};

console.log(data.product?.details?.price); 
