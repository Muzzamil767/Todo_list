let arr = [];
let arrayindex = [];
let i = 0;
let niptaindex = 0;

function add2(){
    let data = document.getElementById("enter").value;
    arr = [];
    arr.push(data);
    arr.forEach((element) => {

        let z = `<input type="button" value="Remove"  class="btn btn-danger" id="${i}"  onclick="remove(${i})">&nbsp;&nbsp;<input type="button" value="Edit" class="btn btn-info" id="${i}" onclick="edit(${i})" > <br> `;
        let p2 = '<li class="Test1" id="${i}"><span id="todo${i}">' + element + '</span>&nbsp;&nbsp;'  + z + '</li>';
        arrayindex.push(p2);
    });

    i++;
    document.getElementById("ul").innerHTML = arrayindex.join(" ");
    document.getElementById("enter").value = "";
}

 function remove(inp) {
    let node = document.getElementById(inp);
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
    arrayindex.splice(inp, 1);
}

function edit(inp){
    alert(44);
    niptaindex = inp;
    let c = document.getElementById("todo"+niptaindex).innerHTML;
    document.getElementById("edit2").value=c;
}
function ok()
{
    let data2=document.getElementById("edit2").value;
    let a1 =  document.getElementById('todo'+niptaindex).innerHTML = data2;
    let z = `<input type="button"  class="btn btn-danger" value="Remove" id="${niptaindex}"  onclick="remove(${niptaindex})">&nbsp;&nbsp;<input type="button" value="Edit"  class="btn btn-info" id="${niptaindex}" onclick="edit(${niptaindex})" > <br> `;
    let p2 = '<li class="Test1" id="${niptaindex}"><span id="todo${niptaindex}">' + data2 + '</span>&nbsp;&nbsp;'  + z + '</li>';
    arrayindex[niptaindex] = p2;
    data2.value = "" ;
    document.getElementById("edit2").value="";
}
