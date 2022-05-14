const getAdvice=()=>{

    return new Promise((resolve,reject)=>{
        const url=`https://api.adviceslip.com/advice`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            let ad=data.slip
            document.getElementById('advice').innerHTML=ad.advice;
            document.getElementById('title').innerHTML='Advice #'+ad.id;
            document.querySelector('.spinner').style.display='none';
        })
        .catch(err=>{
            reject(err);
        })
    })
}


window.onload=getAdvice();