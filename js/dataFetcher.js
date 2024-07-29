var script = document.createElement("SCRIPT");
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName("head")[0].appendChild(script);

$(document).ready(() => {
    let data = []
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        success: (res) => {
            console.log(res);
            data = res;
            getDetails();
        },
        error: (err) => { console.log(err) }
    })
    const getDetails=()=>{
        const usertable = $("table");
        for (let i = 0; i < data.length; i++) {
            const component = `
            <tr>
        <td>
            <div class="profile">
                <img class="profile-icon" src=${data[i].profileImage}>
                <span>${data[i].name}</span> 
            </div>
        </td>
        <td class="female">${data[i].gender}</td>
        <td class="section">
            <span>Sales</span>
            <span>HR</span>
            <span>Finance</span>
        </td>
        <td class="price">
            &#8377 ${data[i].salary}
        </td>
        <td class="start-date">
        ${data[i].startDate}
        </td>
        <td class="icons">
            <span><img class="delete-icon" src="../assets/delete-black-18dp.svg"></span>
            <span><img class="edit-icon" src="../assets/create-black-18dp.svg"></span>
        </td>
    </tr>`;
    usertable.append(component);
        }
    }
})