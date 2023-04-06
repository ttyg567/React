async function sigma(limit=10)
{
    sum=0;
    for(i=1; i<=limit; i++)
        sum+=i;
    return sum; // async에 의해서 무조건 Promise 객체로 바뀌어서 전달된다
}

//console.log(sigma(100));
async function showDisplay()
{
        /*
    sigma(100)
    .then((result)=>{
        console.log(result);
    })
        */
   let result = await sigma(1000); //기다린다, 반환값이 프라미스 객체가 아니다
    console.log(result)
}

showDisplay();

// mysql에서 데이터를 끌고 올 때, 시간이 걸려서 컴퓨터가 다른 작업을 먼저 하게됨
// 이럴 때 콜백 함수로 하다보면 코드가 굉장히 난잡해진다
// 그래서 await와 async를 사용하여 강제로 동기모드로(?) 사용하는 것

