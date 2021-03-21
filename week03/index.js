(function() {
    var header = document.getElementsByTagName('header')[0];
    var firstName = document.getElementById("first-name");
    var studentInfo = document.getElementsByClassName('student')[0];
    var headerRow = document.querySelector('#header-row');
    var student = document.querySelectorAll('.student');

    header.innerHTML += ' Marks';

    var th = document.createElement('th');
    th.innerHTML = 'Action';
    headerRow.appendChild(th);

    var markTh = document.createElement('th');
    var text = document.createTextNode('Marks');
    markTh.append(text);

    th.before(markTh);

    var td = document.createElement('td');
    td.innerHTML = '6';
    td.setAttribute('id','mark');

    var deleteBtnCell = document.getElementById('delete');
    deleteBtnCell.before(td);

    deleteBtnCell.children[0].addEventListener('click',function(event){
        var studentToDelete = event.target.parentNode.parentNode;
        studentToDelete.parentNode.removeChild(studentToDelete);
    })

    var addButtton = document.getElementsByName('add')[0];
    addButtton.addEventListener('click',addStudent)
})();

function addStudent(event){
    event.preventDefault();

    var firstName = document.querySelector('[name="first-name"]');
    var lastName = document.querySelector('[name="last-name"]');
    var fn = document.querySelector('[name="fn"]');
    var mark = document.querySelector('[name="mark"]');
    
    appentTable({ firstName, lastName, fn, mark });

    firstName.value = '';
    lastName.value = '';
    fn.value = 0;
    mark.value = 0;
}

function appentTable(studentInfo){
    var tbody = document.getElementsByTagName('tbody')[0];

    var tr = document.createElement('tr');
    tr.setAttribute('class', 'student');

    var firstNameId = document.createElement('td');
    firstNameId.innerHTML = studentInfo.firstName.value;

    var lastNameId = document.createElement('td');
    lastNameId.innerHTML = studentInfo.lastName.value;

    var fnId = document.createElement('td');
    fnId.innerHTML = studentInfo.fn.value;

    var marksId = document.createElement('td');
    marksId.innerHTML = studentInfo.mark.value;

    var deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click',function(event){
        var studentToDelete = event.target.parentNode.parentNode;
        studentToDelete.parentNode.removeChild(studentToDelete);
    })
    deleteBtn.innerHTML = "Delete";
    
    var deleteId = document.createElement('td');
    deleteId.appendChild(deleteBtn);

    tr.append(firstNameId, lastNameId, fnId, marksId, deleteId);

    tbody.appendChild(tr);
}