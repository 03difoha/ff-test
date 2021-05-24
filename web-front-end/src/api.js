URL_base = 'https://crsuhfhhz7.execute-api.us-east-1.amazonaws.com/dev/todos'


function get_posts(){
    fetch(URL_base)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })    
}

get_posts()