// let arr=[1,2,3,4,5,"Vaishnavi","True",3454.33]
// console.log(arr)
// // console.log(arr[-1])  it gives undefined

// console.log(arr[5])
// console.log(arr.length)
// console.log(arr[arr.length-1])  // both have difference
// console.log(arr.length-1)


// let a=10;
// let b=10;
// let arr1=[1,2,3,4,5,6]
// let arr2=[1,2,3,4,5,6]          //first it check address then value


// let a=10;
// let b=a;
// b=20;
// console.log(a,b)

// let arr1=[1,2];
// let arr2=arr1;
// arr2[0]=2;
// console.log(arr1)
// console.log(arr2)

// console.log(arr1==arr2)  //true

// // let arr3=[2,2]
// // arr3=arr2;
// // console.log(arr2==arr3)   //true

// let arr3=[2,2]
// arr3==arr2;
// console.log(arr2==arr3)   //false  because it check memory address not value


// arr=[1,2,3,4,5]
// arr.push(6);    // it append value at the end also change the array and didn't return anything    > mutiple value

// arr.pop();   // it removes value from the last and changes the array and also return array        > single value

// // shift > it removes value from the first and changes the array and also return array            >  mutiple value
// // shift > opposite of pop
// // unshift > opposite of push                                                                     >  mutiple value

// let a=arr.shift()
// console.log(a)  // it return first removed value
// console.log(arr)  // it return whole array by removing first value


// CRUD  > splice

// let arr = [1,2,3,4,5,6];
// arr.splice(2,2,"abc","bcd",8,9);
// console.log(arr)
// arr.splice(2,0,30)
// console.log(arr)

// let arr=["apple",'oranges','banana']
// arr.splice(1,1,"pear","plum")
// console.log(arr)

// object shrink or grow karta hai that's why they store in heap memory; buttt
// if we define or assign a variable to an object then it will store in stack memory.
// object grow > push, unshift, splice
// object shirnk > pop, shift, splice



// // splice > push
// let a=[1,2,3].splice(3,0,4);
// console.log(a);    // it return 'a' not the whole array 





//                                       DAY_2


// const arr = [1,2,3]
// arr[0]=2;
// console.log(arr);



// throw error
// const arr = [1,2,3]
// const arr2 = [3,4,5]
// arr=arr2;
// console.log(arr);

// resolve error
// let arr = [1,2,3]
// const arr2 = [3,4,5]
// arr=arr2;
// console.log(arr);



