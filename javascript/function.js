function wordBlanks(mynoun,myadjective,myverb,myadverb){
    var res="";
    res="the "+myadjective+" "+mynoun+" "+myverb+" "+myadverb+" "+"to the store";
    return res;
}
console.log(wordBlanks("dog","big","ran","quickly"));