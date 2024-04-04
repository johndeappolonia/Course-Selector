var courseList = [
    {
        courseCode: "BTP100", courseName: "Programming Fundamentals Using C",
        courseOutline: "https://ict.senecacollege.ca/course/btp100"
    },
    {
        courseCode: "BTI225", courseName: "Web Programming Principles",
        courseOutline: "https://ict.senecacollege.ca/course/bti225"
    },
    {
        courseCode: "BTI325", courseName: "Web Programming Tools and Frameworks",
        courseOutline: "https://ict.senecacollege.ca/course/bti325"
    },
    {
        courseCode: "BTI425", courseName: "Web Programming for Apps and Services",
        courseOutline: "https://ict.senecacollege.ca/course/bti425"
    }
];


function clearTable() {
    var Table = document.querySelector("#t-rows");
    Table.innerHTML = "";
}

function search() {

    var format = /^[aA-zZ]{3}[0-9]$/;

    document.getElementById("cTable").style.display = "table";
    var search = document.getElementById("courseCode").value;
    clearTable();

    for (var i = 0; i < this.courseList.length; i++) {

        if (search.toLowerCase() == courseList[i].courseCode.toLowerCase() || format.test(search) == true) {
            courseToRow(courseList[i]);
            break;
        }

        if (search.toLowerCase().substring(0, 3) == courseList[i].courseCode.toLowerCase().substring(0, 3) || format.test(search) == true) {
            courseToRow(courseList[i]);
        }

        if (search == "") {
            courseToRow(courseList[i]);
        }
    }
}

function courseToRow(course) {

    var tRow = document.createElement("tr");

    tRow.innerHTML = `<td>${course.courseCode}</td>
          <td>${course.courseName}</td>
          <td>${course.courseOutline}</td>`

    var element = document.querySelector("#t-rows");
    element.appendChild(tRow);

    return tRow;

}


var NameError = "";
var NumError = "";

document.getElementById("submit").disable;

function fullFormCheck() {
    var check = false;

    studentNameCheck();

    document.getElementById("submitError").innerHTML = NameError;

    studentNumCheck();

    document.getElementById("submitError").innerHTML = NumError;

    if (NameError == "" && NumError == "") {
        check = true;
    }

    else {
        document.getElementById('submit').disabled = false;
    }

    return check;
}

function studentNameCheck() {
    nameError = "";
    var correctNameFormat = /^[a-zA-Z '`]+$/
    var usersFirstName = document.getElementById("studentName").value;

    if (correctNameFormat.test(usersFirstName) == false) {
        nameError = "Invalid First Name (Only alphabetical and must start with caps)";
        document.getElementById('submit').disabled = true;
    }

    else {
        document.getElementById('submit').disabled = false;
    }

    document.getElementById("studentNameError").innerHTML = nameError;

    if (nameError != "") {
        document.getElementById("studentName").style.backgroundColor = "red";
    }

    else {
        document.getElementById("studentName").style.backgroundColor = "green";
    }
}

function studentNumCheck() {

    sNumError = "";

    var min = 210000;
    var max = 219999;
    var studentNum = document.getElementById("sNumber").value;

    if (!isNaN(studentNum)) {

        if ((studentNum < min || studentNum > max)) {
            sNumError = "Invalid Student Number (210000 - 219999)";
            document.getElementById("submit").disabled = true;
        }

        else {
            document.getElementById("submit").disabled = false;
        }

    }

    else {
        sNumError = "Invalid Student Number (210000 - 219999)";
        document.getElementById("submit").disabled = true;
    }

    document.getElementById("sNumError").innerHTML = sNumError;

    if (sNumError != "") {
        document.getElementById("sNumber").style.backgroundColor = "red";
    }

    else {
        document.getElementById("sNumber").style.backgroundColor = "green";
    }
    
}