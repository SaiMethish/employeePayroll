const redirect = () => {
    window.location.href="../templates/payrollForm.html";

}

const setProfileImage=()=>{
    let ele=document.getElementsByClassName("profile-input");
    for(let i=0;i<ele.length;i++){
        if(ele[i].checked){
            let val=document.getElementById(`profile-input${1}`).src;
            return val;
        }
    }
}
const setGender=()=>{
    let ele=document.getElementsByClassName("gender-radio");
    if(ele[0].checked){
        return ele[0].value;
    }
    return ele[1].value;
}
const setDepartment=()=>{
    let ele=document.getElementsByClassName("checkbox-input");
    for(let i=0;i<ele.length;i++){
        if(ele[i].checked){
            return ele[i].value;
        }
    }
}
const setSalary=()=>{
    let ele=document.getElementById("salary");
    return ele.value;
}
const setDate=()=>{
    let day=document.getElementById("day-select").value;
    let month=document.getElementById("month-select").value;
    let year=$('.year-select').value;
    return `${day}/${month}/${year}`;
}
const submit=()=>{
    const name=document.getElementById("name-input").value;
    const profileImage=setProfileImage();
    const gender=setGender();
    const department=setDepartment();
    const salary=setSalary();
    const date=setDate();
    console.log(date);
}