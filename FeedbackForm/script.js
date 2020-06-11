let data = [
    {
        id: 1,
        name: 'Vasya',
        email: 'vasja@dc.com',
        feedback: 'vvvvvvvvvvvvv',
        date: new Date(2020, 1, 20 + 2).toLocaleString()

    },
    {
        id: 2,
        name: 'Ivan',
        email: 'ivan@fvfv.com',
        feedback: 'iiiiiiiiiiiiiiiiiiiii',
        date: new Date().toLocaleString()
    },
    {
        id: 3,
        name: 'Petya',
        email: 'petja@eded.com',
        feedback: 'pppppppppppppppp',
        date: new Date(2020, 1, 20).toLocaleString()
    },
];

renderFeedbackTable(data);

let sortedBy = 0; 
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    let feedback = {};
    feedback.id = data.length + 1;
    feedback.name = document.querySelector('form input[name=name]').value;
    feedback.email = document.querySelector('form input[name=email]').value;
    feedback.feedback = document.querySelector('form textarea[name=feedback]').value;

    const date = new Date();
    feedback.date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

    data.push(feedback);

    event.target.reset();

    renderFeedbackTable(data);
})

function renderFeedbackTable(data) {
    let tbody = '';

    data.forEach(value => {
        tbody += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td><td>${value.feedback}</td><td>${value.date}</td></tr>`;
    });

    document.querySelector('table tbody').innerHTML = tbody;
}
function sort(param) {
    let sortedData = [...data];
    console.log(param)
    const valueTHeader =  document.getElementById([param]).innerHTML;

    let $up = valueTHeader + '&uArr;';
    let $down = valueTHeader + '&dArr;';
    if (sortedBy === 0) {
        sortedData.sort((a, b) => {
            document.getElementById(param).innerHTML =  $up; 
            if (a[param] > b[param]) return 1;
            if (a[param] < b[param]) return -1;
            return 0;
        });
        sortedBy = 1;
    } else if (sortedBy === 1) {
        sortedData.sort((a, b) => {
            document.getElementById(param).innerHTML = $down; 
            if (a[param] > b[param]) return -1;
            if (a[param] < b[param]) return 1;
            return 0;
        });
        sortedBy = -1;
    } else {

        document.getElementById(param).innerHTML = param;
        sortedBy = 0;
    }
    renderFeedbackTable(sortedData);
}
/*
function showUsersTable(persons = []) {

    let innerHtmlTableBody = '';

    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + (i + 1) + '</td><td>' + persons[i].name + '</td><td>' + persons[i].email
            + '</td><td>' + persons[i].feedback + '</td><td>' + persons[i].currentDate + '</td></tr>';
    }
    document.getElementById('count').innerHTML = "Total number of records: " + persons.length;
    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
}

let persons = [];

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.email = document.querySelector('input[name=email]').value;
    person.feedback = document.querySelector('textarea[name=feedback]').value;
    
    let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    document.write(utc);
    
    persons.push(person);
    showUsersTable(persons);
})*/