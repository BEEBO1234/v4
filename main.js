var guest_list= []
function show(){
    document.getElementById("div").innerHTML=guest_list;
};
function sub(){
    var v=document.getElementById("e_n").value;

    guest_list.push(v);
};
function sort(){
    guest_list.sort();
};
function search(){
    var va=document.getElementById("Search").value;
    var vr=0;
        for(i=0;i<guest_list.length;i++){
        if(guest_list[i]==va){
            vr=vr+1;
        };
    };
    console.log(va+"found"+vr+"times!");
};


var t="IF YOU SEE THIS THEN YOU ARE NOT INVITED";
console.log(t);