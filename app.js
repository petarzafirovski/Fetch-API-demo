document.getElementById('getText').addEventListener('click',() => {
    fetch('sample.txt').then((result) =>{
        return result.text();
    }).then((data)=>{
        document.getElementById('output').innerHTML=data;
    }).catch((err) => console.log(err));
});

document.getElementById('getUsers').addEventListener('click',()=>{
    fetch('users.json').then((response) => response.json()).then((data)=>{
        let output=`<h2 class="mb-4 display-3">Users</h2>`;
        data.forEach(user => {
            output +=`
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">E-mail: ${user.email}</li>
                </ul>
            `;
        });
        document.getElementById('output').innerHTML=output;
    })
});

document.getElementById('getPosts').addEventListener('click',()=>{
    fetch('http://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((data)=>{
        let output=`<h2 class="mb-4 display-3">Posts</h2>`;
        data.forEach(post => {
            output +=`
                <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
        document.getElementById('output').innerHTML=output;
    })
});

document.getElementById('addPost').addEventListener('click',(e)=>{
    e.preventDefault();
    
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('http://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Accept': 'applicaiton/json, text/plain, */*',
            'Content-type':'application/json' 
        },
        body:JSON.stringify({title:title, body:body})
    }).then((response) => response.json()).then((data)=>console.log(data));
});