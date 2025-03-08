function save (student){
    let val =JSON.stringfy (student);
    localStorage.setItem ('student', val);
}

function read(){
    if(!data){//Not data?
        return[];
         //create the array
}  else{
    return JSON.parse(data);
}

}