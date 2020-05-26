function showUsersTable(sortedPersons = []) {

    let averageAge = 0;
    let minAge = sortedPersons[0].age;
    let maxAge = sortedPersons[0].age;
    let innerHtmlTableBody = '';

    for (let i = 0; i < sortedPersons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + sortedPersons[i].name + '</td><td>' + sortedPersons[i].age + '</td><td>' + sortedPersons[i].city + '</td></tr>';
        averageAge += +sortedPersons[i].age;
        if (sortedPersons[i].age > maxAge)
            maxAge = sortedPersons[i].age;
        if (sortedPersons[i].age < minAge)
            minAge = sortedPersons[i].age;
    }
  

document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
document.querySelector('tfoot div.alert').innerHTML = 'name: ' + name + ' eMail: ' + eMail + ' Feedback: ' + Feedback;
   

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.Feedback = document.querySelector('input[name=eMail]').value;
    person.eMail = document.querySelector('input[name=Feedback]').value;

    persons.push(person);

    showUsersTable(persons);

    document.querySelector('input[name=name]').value = '';
    document.querySelector('input[name=eMail]').value = '';
    document.querySelector('input[name=Feedback]').value = '';
    document.querySelector("input[name=Number of Record]").value='';
});

const name = document.getElementById('name');
const eMail = document.getElementById('eMail');
const Feedback = document.getElementById('Feedback');

let clicks= 0;
function click() {
    clicks += 1;
    document.getElementById("Number of Record").innerHTML = clicks;
};
}