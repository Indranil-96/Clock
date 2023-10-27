let t=document.getElementById('time');
let d=document.getElementById('date');

let h=0,m=0,date=0,month=0,yr=0,formatime=0,formatdate=0;

  const update=()=>{
    let a= new Date();
    h=a.getHours();
    m=a.getMinutes();
    s=a.getSeconds();
    date=a.getDate();
    month=a.getMonth();
    yr=a.getFullYear();

    formatime=`Time:${h}:${m}:${s}||`;
    formatdate=`Date:${date}/${month}/${yr}`;


t.innerHTML=formatime;
d.innerHTML=formatdate;
  }
  setInterval(update,1000);


