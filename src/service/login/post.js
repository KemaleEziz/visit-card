

export async function postDAta (data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch('http://card.somee.com/api/card', requestOptions);
    const res = await response.json();
    console.log("Apiden gelen data: ", res);
   
}




