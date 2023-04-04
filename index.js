// Add your code here

function submitData(name, email){
    
return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then( res => res.json())
    .then( data => {
        const newID = document.createElement('p');
        newID.textContent = data.id;
        document.querySelector('body').appendChild(newID);
    
    })
    .catch ( error => {
        const newError = document.createElement('p');
        newError.textContent = error.message;
        document.querySelector('body').appendChild(newError);
    })


}

submitData('Jay', 'jyegon504@gmail.com');

