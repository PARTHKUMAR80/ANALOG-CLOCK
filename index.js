setInterval(() => {
    d=new Date();
    hourr=d.getHours();
    minn=d.getMinutes();
    secc=d.getSeconds();
    hr=30*hourr+minn/2;
    mr=6*minn;
    sr=6*secc;
    hour.style.transform=`rotate(${hr}deg)`;
    minute.style.transform=`rotate(${mr}deg)`;
    second.style.transform=`rotate(${sr}deg)`;
}, 1000);