interface fullname{
    firstname:string
    lastname:string
}
let obje ={
    firstname:'turing',
    lastname:'tong1'
};
function say({firstname,lastname}:fullname):void{
    console.log('my name is$(firstname)_$(lastname)');
}
say(obje)