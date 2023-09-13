// let user = {
//     id: 6,
//     firstName: "String",
//     lastName: "Qasimov",
//     middleName: "asadeeefff",
//     companyName: "string",
//     slogan: "Bu slogandir",
//     description: "Buda aciqlamadir",
//     address: "Samaxi",
//     phoneNumber: "0556543221",
//     email: "testSecond@gmail.com",
//     website: "agile.az",
//     title: "bu title-dir"
// }



export async function postDAta (data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch('http://card.somee.com/api/card', requestOptions);
   const res = await response.json();
   return res
   
}



// updateData(user)



