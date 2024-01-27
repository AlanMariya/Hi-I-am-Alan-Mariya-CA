// // setInterval(() => {
// //     console.log("Hello");
// // }, 3000);

// // // setInterval(() => {
// // //     console.log("Hai");
// // // }, 4000);

// // setTimeout(() => {
// //     console.log("Hai");
// // }, 4000);



// // setTimeout(() => {
// //     console.log("Hello!");
// // }, 2000);

// // setTimeout(() => {
// //     console.log("Hai");
// // }, 3000);

// // setTimeout(() => {
// //     console.log("Hi");
// // }, 4000);


// // //callback
// // var btn = document.getElementById("new")
// // btn1.addEventListener("click",()=>{
// //     alert("button clicked")
// // })



// // //normal function
// // function add(a,b){
// //     var sum=a+b
// //     return sum
// // }
// // function display(val)
// // {
// //     document.getElementById("textc").innerText= `The sum is ${val}`
// // }

// // var result = add(9,5)
// // display(result)



// // function mult(a,b){
// //     var multisum = a*b
// //     return multisum
// // }
// // function display(val)
// // {
// //     document.getElementById("textc").innerText= `This is muliplticated sum = ${val}`
// // }
// // var result = mult(2,4)
// // display(result)

// // //callback function
// // function add1(a,b,callback){
// //     var sum= a+b
// //     callback(sum)
// // }
// // function display(val){
// //     document.getElementById("textc").innerText = `The sum is ${val}`
// // }
// // add1(10,20,display)


// // function add1(a,b){
// //     let promise = new promise((resolve,reject)=>{
// //         var sum = a+b
// //         if (sum>10) {
// //             resolve(sum)
// //         }
// //         else{
// //             reject("sum is not greater than 10")

// //         }
// //     })
// //     console.log(promise)
// // }
// // add1(2,)

// function add1(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sum = a+b
//         if (sum>10) {
//             resolve(sum)
//         }
//         else{
//             reject("sum is not greater than 10")

//         }
//     })
//     //console.log(promise)
//     promise.then((val)=>{
//         document.getElementById("textc").innerText =`The sum is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("textc").innerText= `The error message is ${err}`
//     })
// }    
// add1(2,6)




// // function add1(a,b){
// //     return promise = new Promise((resolve,reject)=>{
// //         var sum = a+b
// //         if (sum>10) {
// //             resolve(sum)
// //         }
// //         else{
// //             reject("sum is not greater than 10")

// //         }
// //     }) 
// // }    
// // add1(2,10)
// // promise.then((val)=>{
// //     document.getElementById("textc").innerText =`The sum is ${val}`
// // })
// // .catch((err)=>{
// //     document.getElementById("textc").innerText= `The error message is ${err}`
// // })


// // function sub(a,b){
// //     let promise = new Promise((resolve,reject)=>{
// //         var subsum = a-b
// //         if (subsum>10) {
// //             resolve(subsum)
// //         }
// //         else{
// //             reject("Subtracted sum is not greater than 10")

// //         }
// //     })
// //     //console.log(promise)
// //     promise.then((val)=>{
// //         document.getElementById("texta").innerText =`The sum is ${val}`
// //     })
// //     .catch((err)=>{
// //         document.getElementById("texta").innerText= `The error message is ${err}`
// //     })
// // }    
// // sub(46,26)




// function div(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var divsum = a/b
//         if (divsum>10) {
//             resolve(divsum)
//         }
//         else{
//             reject("Division sum is not greater than 10")

//         }
//     })
//     //console.log(promise)
//     promise.then((val)=>{
//         document.getElementById("textb").innerText =`The sum is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("textb").innerText= `The error message is ${err}`
//     })
// }    
// div(4,2)



// function multi(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var multisum = a*b
//         if (multisum>10) {
//             resolve(multisum)
//         }
//         else{
//             reject("multiplicated sum is not greater than 10")

//         }
//     })
//     //console.log(promise)
//     promise.then((val)=>{
//         document.getElementById("textd").innerText =`The sum is ${val}`
//     })
//     .catch((err)=>{
//         document.getElementById("textd").innerText= `The error message is ${err}`
//     })
// }    
// multi(10,6)



// async function add1(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sum =a+b
//         if (sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("textc").innerHTML = `The sum is ${ans}`
// }
// add1(10,2)


// async function sub(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var subsum = a-b
//         if (subsum>10){
//             resolve(subsum)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("texta").innerHTML = `The subtracted sum is ${ans}`
// }
// sub(15,2)


// async function add1(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sum =a+b
//         if (sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("textc").innerHTML = `The sum is ${ans}`
// }
// add1(15,2)



// async function multi(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var multisum =a*b
//         if (multisum>10){
//             resolve(multisum)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("textb").innerHTML = `The multiplicated sum is ${ans}`
// }
// multi(10,2)


//https://dummyjson.com/products



function ajaxcall(){
    var xhttp = new XMLHttpRequest()
        xhttp.open('GET','https://dummyjson.com/products',true)
        xhttp.send()
        xhttp.onreadystatechange = function(){
            let promise = new Promise((resolve,reject)=>{
                if(this.readyState==4 && this.status==200){
                    resolve("it is done")
                }
            })
            promise.then((val)=>{
                document.getElementById("textc").innerHTML= `The result is ${val}`
            })
        }
}
ajaxcall()