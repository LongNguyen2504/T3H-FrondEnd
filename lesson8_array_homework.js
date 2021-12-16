var a = [['Nam','PHP2111',8],
                    ['An','PHP2111',7]
                    ,['Kien','PHP2111',9]
                    ,['Sang','PHP2111',6]
                    ,['Binh','PHP2111',4]
                    ,['Phung','PHP2111',3]
                    ,['Tuan','PHP2111',10]]
       


// a.sort(compareFirstColumn);

// function compareFirstColumn(a, b) {
//     if (a[0] === b[0]) {
//         return 0;
//     }
//     else {
//         return (a[0] < b[0]) ? -1 : 1;
//     }
// }

a.sort(compareSecondColumn);

function compareSecondColumn(a, b) {
    if (a[2] === b[2]) {
        return 0;
    }
    else {
        return (a[2] < b[2]) ? -1 : 1;
    }
}


var text = "";
for (x of a) {
    text += "<tr>"
    for(y of x){
        console.log(y);
        text += "<td>" + y + "</td>";
    }
    text += "</tr>"
}


document.getElementById('tbody').innerHTML = text 
