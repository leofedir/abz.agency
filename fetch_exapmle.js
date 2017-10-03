// fetch('http://504080.com/api/v1/services/categories')
//     .then(
//         function(response) {
//             if (response.status !== 200) {
//                 console.log('Looks like there was a problem. Status Code: ' +
//                     response.status);
//                 return;
//             }
//
//             // Examine the text in the response
//             response.json().then(function(data) {
//                 console.log(data);
//             });
//         }
//     )
//     .catch(function(err) {
//         console.log('Fetch Error :-S', err);
//     });

// let base64 = require('base-64');

// let url = 'http://504080.com/api/v1/services/categories';
// let username = 'test@abz.agency';
// let password = '123456';
// let clientToken = 'f30fa27afb096d10078a384ebbb4da9e4be6a466'
// let headers = new Headers();
//
// //headers.append('Content-Type', 'text/json');
// // headers.append('Authorization', 'Basic' + username + ":" + password);
//
// headers: {
//     'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + clientToken
//         // 'Host': 'api.producthunt.com'
// }
//
// fetch(url, {method:'GET',
//     headers: headers,
//     //credentials: 'user:passwd'
// })
//     .then(response => response.json())
// .then(json => console.log(json));
// //.done();
//
// function parseJSON(response) {
//     return response.json()
// }

// fetch('servicelist.json')
//     .then(response => response.json())
// .then(jsonResponse => console.log(jsonResponse))

// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }
//
// readTextFile("file:///D:/ProjectJS/abz.agency/servicelist.json");
//
// function readSingleFile(e) {
//     var file = e;
//     if (!file) {
//         return;
//     }
//     var reader = new FileReader();
//     reader.onload = function(e) {
//         var contents = e.target.result;
//         // Display file content
//         console.log(contents);
//     };
//     reader.readAsText(file);
// }
//
// readSingleFile("file:///D:/ProjectJS/abz.agency/servicelist.json")
//
//
// var r = new FileReader();
// var file = "file:///D:/ProjectJS/abz.agency/servicelist.json";
// r.onload = function() {
//     // we have the file data
//     alert('file size = ' + r.result.length);
//     // data is in r.result
//     process(r.result);
// }
// r.readAsText(file); // read as BASE64 format

// let base64 = require('base-64');

let url = 'http://eu.httpbin.org/basic-auth/user/passwd';
let username = 'user';
let password = 'passwd';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));

fetch(url, {method:'GET',
    headers: headers,
    //credentials: 'user:passwd'
})
    .then(response => response.json())
.then(json => console.log(json));
//.done();

function parseJSON(response) {
    return response.json()
}