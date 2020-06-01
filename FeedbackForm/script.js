function showUsersTable(persons = []) {

    let innerHtmlTableBody = '';

    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + (i + 1) + '</td><td>' + persons[i].name + '</td><td>' + persons[i].email
            + '</td><td>' + persons[i].feedback + '</td><td>' + persons[i].currentDate + '</td></tr>';
    }
}

document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
document.querySelector('tfoot div.alert').innerHTML = 'name: ' + name + ' eMail: ' + eMail + ' Feedback: ' + Feedback;
document.getElementById('count').innerHTML = "Total number of records: " + persons.length;

let persons = [];

const form$ = document.getElementsByTagName('form')[0];
    form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let person = {};
    persons.push(person);
    document.querySelector('input[name=name]').value = '';
    document.querySelector('input[name=eMail]').value = '';
    document.querySelector('input[name=Feedback]').value = '';
    document.querySelector("input[name=Number of Record]").value='';
    });

        const name = document.getElementById('name');
        const eMail = document.getElementById('eMail');
        const Feedback = document.getElementById('Feedback');
        const NumberOfRecord = document.getElementById('Number of Record');
        const Date = document.getElementById('date');

    let clicks= 0;
    function click() {
    clicks += 1;
    document.getElementById("Number of Record").innerHTML = clicks;
    };

showUsersTable(persons);
document.write(Date());