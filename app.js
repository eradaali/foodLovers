'use strict';
let myTable=document.getElementById("myTable"); //table
let myForm=document.getElementById("myForm"); // my form
let src;
let r=[]; //array
// let foodType=[shawarma,pizza,burger];
//counstractor
function FoodLovers(customerName,img){
this.customerName=customerName;    
this.img=img;
r.push(this);
this.max=30;
this.min=10;
this.price=getRandomInt(this.min,this.max);
setData();
}
// random for price
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  myForm.addEventListener('submit',handelSubmit);
  
 function handelSubmit(event){
     event.preventDefault();
     let customerName=event.target.customerName.value;
     let img=event.target.img.value;
     //let price=event.target.price.value;
new FoodLovers(customerName,img);
// if(imgName == shawerma){
//     src="img/shawarma.jpg";
// }
// else if(imgName == burger){
//     src="img/burger.jpg"
// }else if (imgName == pizza){
//     src="img/pizza.jpg";
// } else{
//     setData();
// }
createTable();
 } 
 function createTable(){
    //  myTable.textContent="";
     let tr=document.createElement('tr');
     myTable.appendChild(tr);
    
     let th1=document.createElement('th');
     tr.appendChild(th1);
     th1.textContent='Order Image';

     let th2=document.createElement('th');
     tr.appendChild(th2);
     th2.textContent='Order Detials';

     for (let row = 0; row < r.length; row++) {
         let trEl=document.createElement('tr');
         myTable.appendChild(trEl);

         for (let cloumn  = 0; cloumn < 2; cloumn++) {
             let tdEl=document.createElement('td');
             trEl.appendChild(tdEl);
             
            if(cloumn==0){
                let img=document.createElement('img');
                
                img.setAttribute('src',r[row].img);
                tdEl.appendChild(img);
            } else if(cloumn==1){
                tdEl.textContent=r[row].customerName;
                // tdEl.textContent= r[row].price;
                // tdEl.textContent=`Customer Name ${r[row].customerName} food Type Food Price ${r[row].price}`;

            }
             
         }

         
     }
 }
 function setData(){
     let data=JSON.stringify(r);
     localStorage.setItem('data',data);
 }
 function getData(){
     let stringObject=localStorage.getItem('data');
     let normalObject=JSON.parse(stringObject);

     if(normalObject !==null){
         r=normalObject;
         createTable();
     }
 }
 getData();

 let allfood=[];
 function lovers(customerName,img,foodType){
this.customerName=customerName;
this.img=img;
this.foodType=foodType;
r.push(this);
 }
//  let src;
//  let myForm=document.getElementById("myForm");
//  myForm.addEventListener('submit',sumit);
//  function sumit(event){
//      event.preventDefault();
//      let customerName=event.target.customerName.value;
//      let img=event.target.img.value;
     
//      if (foodType === 'burger'){
//          src="img/burger.jpg"
//      }else if (foodType === 'pizza'){
//          src="img/pizza.jpg"
//      }
//      else  (foodType === 'shawerma'){
//          src="img/shawarma.jpg"
//          setItem();
//      }
//     let foodType=event.target.foodType.value;
//     let newObj=new lovers(customerName,img,foodType); 
//  }
//  function render(newObj)
// {

//  }