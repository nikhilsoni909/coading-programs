var collection={
"123":{
"album":"hello world",
"artist":"nikhil",
"tracks":[
    "yuhuuuu",
    "desikalakar"
]
},
"1234":{
"album":"hello duniya",
"artist":"nikhil soni",
"tracks":[
    "yaar mera jgri",
    "haha ha ha ha "
]
},
"12345":{
"artist":"nik",
"tracks":[
   
]
},

"123456":{

    "album":"gold" 
},

}
var collectioncopy=JSON.parse(JSON.stringify(collection));
function autorecords(id,prop,value){
    if(value===""){
        delete collection[id][prop];
    }
     else if(prop==="tracks"){
         collection[id][prop]=collectioncopy[id][prop]||[];
         collection[id][prop].push(value);
     
        }
        else{
            collection[id][prop]=value;
        }
     return collection;

}
console.log(autorecords(123,"tracks","desikalakar"));