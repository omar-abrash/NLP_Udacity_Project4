function checkForName(textContent) {
    // HTML Elements
    const agreement = document.querySelector('#agreement');
    const irony = document.querySelector('#irony');
    const confidence = document.querySelector('#confidence');

    // define POST HTTP 
    const postData = async (url, data) => {
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
    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // URL regex test
    let URLpattern = (/(https?:\/\/)?([\da-z\.-]+)\.([a-z]{2,6})([\/\w\.-]*)*\/?/g); // this pattern from (https://regexr.com/3ouav)
    let result = URLpattern.test(textContent);
    // console.log(result);

    if (result) { // if result true ::> URL 
        alert('Hello!, you are add URL ');

        postData('/meaningCloud').then((res) => {
        // meaningCloud API function 
        const formdata = new FormData(); // this formdata from meaningCloud website
        formdata.append("key", res)
        formdata.append("url", textContent);
        formdata.append("lang", "auto");  // 2-letter code, like en es fr ...
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
                if (newData.status.msg === "Operation denied") { // this case when URL in not available
                    alert('your URL is not available');
                    agreement.innerHTML = "";
                    irony.innerHTML = "";
                    confidence.innerHTML = "";
                } else {
                    agreement.innerHTML = newData.agreement;
                    irony.innerHTML = newData.irony;
                    confidence.innerHTML = newData.confidence;
                }
            })
        })
        .catch(error => console.log('error', error));
    })

    } else { // if result false ::> normal text
        alert('Hello!, you are add normal text');

        postData('/meaningCloud').then((res) => {
        // meaningCloud API function 
        const formdata = new FormData();
        formdata.append("key", res)
        formdata.append("txt", textContent);
        formdata.append("lang", "auto");  // 2-letter code, like en es fr ...
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
                if (newData.status.msg === "unknown language") { // this case when using unknown language or Wrong text
                    alert('Unknown language or Wrong text');
                    agreement.innerHTML = "";
                    irony.innerHTML = "";
                    confidence.innerHTML = "";
                } else {
                    agreement.innerHTML = newData.agreement;
                    irony.innerHTML = newData.irony;
                    confidence.innerHTML = newData.confidence;
                }
            })
        })
        .catch(error => console.log('error', error));
        })
    }
}

export { checkForName }
