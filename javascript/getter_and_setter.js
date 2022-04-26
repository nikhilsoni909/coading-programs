class book{
    constructor(author){
        this._author=author;

    }
    get writer(){
        return this._author;
    }
set writer(updateauthor){
    this._author=updateauthor;
}

}


function makeclass(){
    class thermostat
{
    constructor(temp){
this._temp=5/9*(temp-32);
    }
get temperature(){
    return this._temp;
}
set temperature(updatedtemp){
    this._temp=updatedtemp;
}
 
    }
 return   thermostat;
}
const thermostet=makeclass();
const thermus=new thermostet(23);
console.log(thermus._temp);
let temp=thermostet.temperature;//get 
thermostet.temperature=27;//set
temp=thermostet.temperature;
console.log(temp);
