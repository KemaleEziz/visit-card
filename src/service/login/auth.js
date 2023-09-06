
import axios from 'axios';

let obj = {
  "firstName": "string",
  "lastName": "string",
  "middleName": "string",  "title": "string",
  "companyName": "string",
  "slogan": "string",
  "description": "string",
  "address": "string",
  "phoneNumber": "string",
  "email": "string",
  "website": "string"
}

axios.post('http://card.somee.com/api/card', obj)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })




