const data = null;
const baseUrl = 'https://wordsapiv1.p.rapidapi.com';
const endpoint = 'typeOf';

const btn = document.getElementById('btn');
const main1 = document.getElementById('main1');
const main2 = document.getElementById('main2');

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

function jsonToSTR(data) {
    var str = '';
    for (var key in data){
        if (data.hasOwnProperty(key)) {
            str += '<h4>'+key+': '+data[key]+'</h4>';
        }
    }
    document.getElementById('main2').innerHTML = str;
}

function getWord() {
    const word = document.getElementById('requestW').value;
    xhr.open('GET', `${baseUrl}/words/${word}/${endpoint}`);
    xhr.setRequestHeader('X-RapidAPI-Key', '52dd3f970emshaa2634d20398ea9p107875jsn07fe8dc45a01');
    xhr.setRequestHeader('X-RapidAPI-Host', 'wordsapiv1.p.rapidapi.com');

    xhr.onload = function() {
        if (xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            jsonToSTR(data);
        } else {
            console.error('Request failed. Status:', xhr.status);
        }
    };

    main1.style.display='none';
    main2.style.display= 'flex';

    xhr.send(data);
}