
function handleSubmitTwo(event) {
    event.preventDefault()
    
    let text = document.querySelector('#text').value;
    let lang = document.querySelector('#lang').value;
    const agreement = document.querySelector('#agreement');
    const irony = document.querySelector('#irony');
    const type = document.querySelector('#type');

// POST HTTP
const postData = async (url,data) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    try {
        let newData = await response.text();
        // your requirments in this place:
        return newData;  // veru important
    } catch (error) {
        console.log("ERROR", error);
    }
    }
// :::::::::::::::::::::::::::::::::::::::
    postData('/meaningCloud').then((res) => {
        // meaningCloud API function 
        const formdata = new FormData();
        formdata.append("key", res)
        formdata.append("txt", text);
        formdata.append("lang", lang);  // 2-letter code, like en es fr ...
        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(response => ({
        status: response.status, 
        body: response.json()
        }))
        .then(({ status, body }) => {
            // console.log(body)
            body.then(function (newData) {
                console.log(newData);
                // set the important value in HTML Elements
                agreement.innerHTML = newData.agreement;
                irony.innerHTML = newData.irony;
                type.innerHTML = newData.sentimented_concept_list[0].type;
            })
        })
        .catch(error => console.log('error', error));
    })
}

export { handleSubmitTwo }