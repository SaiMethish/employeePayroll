const redirect = () => {
    window.location.href = "../templates/payrollForm.html";

}

const setProfileImage = () => {
    let ele = document.getElementsByClassName("profile-input");
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            let val = ele[i].value;
            return val;
        }
    }
}
const setGender = () => {
    let ele = document.getElementsByClassName("gender-radio");
    if (ele[0].checked) {
        return ele[0].value;
    }
    return ele[1].value;
}
const setDepartment = () => {
    let res = [];
    let ele = document.getElementsByClassName("checkbox-input");
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            res.push(ele[i].value);
        }
    }
    return res;
}
const setSalary = () => {
    let ele = document.getElementById("salary");
    return ele.value;
}
const setDate = () => {
    let day = document.getElementById("day-select").value;
    let month = document.getElementById("month-select").value;
    let year = document.getElementById("year-select").value;
    return `${day}/${month}/${year}`;
}
const setNotes = () => {
    let notes = document.getElementById("textarea-input").value;
    console.log(notes);
    return notes;
}
const Submit = () => {
    const name = document.getElementById("name-input").value;
    const profileImage = setProfileImage();
    const gender = setGender();
    const department = setDepartment();
    const salary = setSalary();
    const date = setDate();
    const notes = setNotes();
    const user = {
        name: name,
        profileImage: profileImage,
        gender: gender,
        department: department,
        salary: salary,
        startDate: date,
        notes: notes
    };
    console.log(user);
    $.ajax({
        type:"POST",
        url:"http://localhost:3000/users",
        data:JSON.stringify(user),
        success:(res)=>{
            console.log(res.json())
        },
        error:(err)=>console.log(err)
    })
}


