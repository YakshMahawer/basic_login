const credentials = [
    {
        username: 'yaksh',
        password: 'yaksh'
    },
    {
        username: 'ayush',
        password: 'ayush'
    },
    {
        username: 'uttkarsh',
        password: 'uttkarsh'
    }
]

function login(){
    var username = document.getElementById('username_input').value;
    var password = document.getElementById('password_input').value;
    if(username == ''){
        alert("Fill Username");
    }
    if(password == ''){
        alert("Fill Password");
    }

    var  i = 0;
    while(i < credentials.length){
        if (username == credentials[i].username && password == credentials[i].password){
            alert('Logged In Successfully');
            window.location.href = "http://google.com";
            return;
        }
        i++;
    }
    if(i== credentials.length){
        alert('Wrong Credentials');
    }
}