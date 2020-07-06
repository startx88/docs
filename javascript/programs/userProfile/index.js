const user = {
    name: 'pradeep',
    age: 30,
    email: 'arya.creativemind@gmail.com',
    salary: 50000
};


function display() {
    function getData() {
        let tr = document.createElement('tr')
        for (let usr in user) {
            let td = document.createElement('td');
            td.innerText = user[usr];
            tr.appendChild(td)
        }
        return tr
    }
    document.getElementById('root').innerHTML = `
      <table id="table">
       <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Salary</th>
        <th>Acton</th>
       </tr>
        ${document.getElementById('table').appendChild(getData())}
      </table>
    `
}

display();