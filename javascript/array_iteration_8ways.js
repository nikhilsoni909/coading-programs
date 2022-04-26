// for each
[1,3,3].forEach(
    function(item,index){
    console.log(item,index);
}
)

// map
const three=[1,2,3];
const doubled=three.map(
    function(item){
        return item*2;
    }
    );
    console.log(doubled);

    // filter   
    const ints=[1,2,3];
    const even=ints.filter(function(item){return item%2===0});
    console.log(even);


    // reduce
    const sum=[1,2,3].reduce(function(result,item){return result+item
    },0)//initializing result with zero
    console.log(sum);

    // some
    const hasnegativenum=[1,2,3.,-1,-5].some(function(item){return item<0});
console.log(hasnegativenum);

  // every
    const everyhasnegativenum=[1,2,3.,-1,-5].every(function(item){return item<0});
console.log(everyhasnegativenum);
    
// find
const  objects=[{id:'a'},{id:'b'},{id:'c'},{id:'d'}];
const found=objects.find(function(item){return item.id==='b';});
console.log(found);


// find index
const  objects1=[{id:'a'},{id:'b'},{id:'c'},{id:'d'}];
const foundIndex=objects1.findIndex(function(item){return item.id==='b';});
console.log(foundIndex);
