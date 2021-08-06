/**
 * Callback:
 * 
 */

 const body = document.body;


function displayUsers(data){
     const ul = document.createElement('ul');

     if(!data){
         ul.append(`<p>Loading...</p>`)
     }
     data.map(item=>{
         const li = document.createElement('li');
         li.innerHTML=`
           <h1>${item.name}</h1>
         `
         ul.append(li)
     });
     body.append(ul)
}

// Read URL data
function readURLData(data) {
    displayUsers(data)
}

 function fetchData(URL, cb){
     const xhr = new XMLHttpRequest(URL);
     console.log(xhr);
    
     fetch(URL)
     .then(response=>response.json())
         .then(data => cb(data))
 }

fetchData('https://jsonplaceholder.typicode.com/users', readURLData)
 



function styles(el){
    return styles=>{
        el.style = styles
         return el
    }
}

const el = styles('div')`
color:red;
`
console.log('el',el)