var count=0;
function addSection(){
    count++;
    let row=document.getElementById("newrow");
    let tbody=document.getElementById("sections");
    let clone=row.cloneNode(true);
    clone.id="newrow"+count;
    clone.style.display='';
    clone.lastElementChild.firstElementChild.id=count;
    tbody.appendChild (clone);
}
function minus(id){
    document.getElementById("sections").removeChild(document.getElementById("newrow"+id));
}

function showInfo(){
    const person={
        firstName:"",
        lastName:"",
        dob:"",
        email:"",
        address:"",
        graduYear:"",
        education:[],
    };
    if(document.getElementById("firstName").value!==''){person.firstName=document.getElementById("firstName").value}else return;
    if(document.getElementById("lastName").value!==''){person.lastName=document.getElementById("lastName").value}else return ;
    if(document.getElementById("dob").value!==''){person.dob=document.getElementById("dob").value}else return ;
    if(document.getElementById("email").value!==''){person.email=document.getElementById("email").value}else return ;
    if(document.getElementById("address").value!==''){person.address=document.getElementById("address").value}else return;
    if(document.getElementById("graduation-year").value!==''){person.graduYear=document.getElementById("graduation-year").value}else return ;
    let edu=document.getElementsByClassName("education");
    let j=0;
    for(let i=0;i<edu.length;i++){
        if(edu[i].style.display!=='none'){
            person.education.push({});
            if(edu[i].getElementsByClassName("degree")[0].value!==''){    person.education[j].degree_Board=edu[i].getElementsByClassName("degree")[0].value;}else return;
            if(edu[i].getElementsByClassName("school")[0].value!==''){    person.education[j].school_college=edu[i].getElementsByClassName("school")[0].value;}else return;
            if(edu[i].getElementsByClassName("startDate")[0].value!==''){    person.education[j].start_Year=edu[i].getElementsByClassName("startDate")[0].value;}else return;
            if(edu[i].getElementsByClassName("endDate")[0].value!==''){    person.education[j].passOut_Year=edu[i].getElementsByClassName("endDate")[0].value;}else return;
            if(edu[i].getElementsByClassName("percentage")[0].value!==''){    person.education[j].percentage=edu[i].getElementsByClassName("percentage")[0].value;}else return;
            person.education[j].backlog=edu[i].getElementsByClassName("backlog")[0].value;
            j++;
        }
    }
    document.getElementById("form").reset();
    document.getElementById("fullname").innerHTML=("Name: "+person.firstName+" "+person.lastName);
    document.getElementById("doba").innerHTML="DOB: "+person.dob;
    document.getElementById("add").innerHTML="Address: "+person.address;
    document.getElementById("passout").innerHTML="Graduation: "+person.graduYear;
    let showcontent=document.getElementById("show-content");
    showcontent.removeChild;
    for(let i=0;i<j;i++){
        let row=showcontent.insertRow(i);
        row.insertCell(0).innerText=person.education[i].degree_Board;
        row.insertCell(1).innerText=person.education[i].school_college;
        row.insertCell(2).innerText=person.education[i].start_Year;
        row.insertCell(3).innerText=person.education[i].passOut_Year;
        row.insertCell(4).innerText=person.education[i].percentage;
        row.insertCell(5).innerText=person.education[i].backlog;
    }
}