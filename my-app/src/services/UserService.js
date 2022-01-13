
export async function getAllMeun(){
    try{
        console.log('start');
        const response = await fetch('/api/menu')
        
        return await response.json();
        
    }catch(error){
        console.log(error)
        return [];
    }
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

export async function removeUesr(data){
    const response = await fetch(`/api/remove`,{
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({user:data})
    })
    return await response.json();
}