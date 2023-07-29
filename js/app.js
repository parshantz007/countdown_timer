const endDate="29 July 2023 04:30  PM"
document.getElementById("endDate").innerText=endDate;

const inputs=document.getElementsByTagName("input")

const clock=()=>{
    const end=new Date(endDate)
    const now=new Date()
    // console.log(end);
    // console.log(now);
    const diff=(end-now)/1000;
    // console.log(diff);
   
    if(diff<0)
    {
        document.getElementById("timer-area").style.display = "none";
        document.getElementById("change-theme").innerText="We are live now hurray";
        return
    }
    inputs[0].value=Math.trunc((diff/3600)/24);
    inputs[1].value=Math.trunc(diff/3600)%24;
    inputs[2].value=Math.trunc((diff/60)%60);
    inputs[3].value=Math.trunc(diff%60);



}

// history
// 1day=24hour
// 1hour=60 minutes
// 1minute=60seconds
// and diff in milliseconds, so first convert it in seconds
// 
// history
// ji

setInterval(
    ()=>{
        clock()
    },
    1000
)

// clock()