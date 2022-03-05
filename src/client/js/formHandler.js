function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let textContent = document.getElementById('text-content').value;
    Client.checkForName(textContent)

    console.log("::: Form Submitted :::")
// this http request to get massege only :
    fetch('http://localhost:8080/test')
        .then( res => res.json())
        .then(function(res){
            document.getElementById('results').innerHTML = res.message
        })
}

export {handleSubmit}