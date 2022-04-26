var contacts=[{
"firstname":"nikhil",
"lastname":"soni",
"number":"2345435345355",
"likes":["js","c","c++"]


},
{
"firstname":"nanda",
"lastname":"soni",
"number":"765409138",
"likes":["python","cooking","c++"]


}
,
{
"firstname":"mummy",
"lastname":"soni",
"number":"2233345355",
"likes":["js","java","python"]


}

];
function lookuprofile(name,prop){
    for(var i=0;i<contacts.length;i++){
        if(contacts[i].firstname===name){
            return contacts[i][prop]||"no such contact";
        }

    }
    return "no such contact";
}
var data=lookuprofile("nikhil","likes");
console.log(data);