let data;
let type,headline,date,link,author,content;

fetchData();

async function fetchData(){
    try{
        let response=await fetch("https://coding-week-2024-api.onrender.com/api/data");
        data=await response.json();
        Array.from(data).forEach(function(item){
            if(item.id==1){
                type1=item.type;
                headline1=item.headline;
                date1=item.date;
                link1=item.image;
                author1=item.author;
                content1=item.content;

            }
            if(item.id==2){
                type2=item.type;
                headline2=item.headline;
                date2=item.date;
                link2=item.image;
                author2=item.author;
                content2=item.content;

            }
            if(item.id==3){
                type3=item.type;
                headline3=item.headline;
                date3=item.date;
                link3=item.image;
                author3=item.author;
                content3=item.content;

            }
            if(item.id==4){
                type4=item.type;
                headline4=item.headline;
                date4=item.date;
                link4=item.image;
                author4=item.author;
                content4=item.content;

            }
            if(item.id==5){
                type5=item.type;
                headline5=item.headline;
                date5=item.date;
                link5=item.image;
                author5=item.author;
                content5=item.content;

            }
            if(item.id==6){
                headline6=item.headline;
                date6=item.date;
                link6=item.image;
                content6=item.content;
            }
            if(item.id==7){
                headline7=item.headline;
                date7=item.date;
                link7=item.image;
                content7=item.content;
            }
            if(item.id==8){
                headline8=item.headline;
                date8=item.date;
                link8=item.image;
                content8=item.content;
            }
            
            

        });
        console.log(link);
        
        document.querySelector("#line1").innerHTML=headline1;
        document.querySelector("#author1").innerHTML=author1;
        document.querySelector("#date1").innerHTML=date1;
        document.getElementById('article1').style.backgroundImage="url("+link1+")";
        document.querySelector("#type1").innerHTML=type1;
        document.querySelector("#box1").innerHTML=content1;

        document.querySelector("#line4").innerHTML=headline2;
        document.querySelector("#author2").innerHTML=author2;
        document.querySelector("#date2").innerHTML=date2;
        document.getElementById('article2').style.backgroundImage="url("+link2+")";
        document.querySelector("#type2").innerHTML=type2;
        document.querySelector("#box2").innerHTML=content2;

        document.querySelector("#line7").innerHTML=headline3;
        document.querySelector("#author3").innerHTML=author3;
        document.querySelector("#date3").innerHTML=date3;
        document.getElementById('article3').style.backgroundImage="url("+link3+")";
        document.querySelector("#type3").innerHTML=type3;
        document.querySelector("#box3").innerHTML=content3;

        document.querySelector("#line10").innerHTML=headline4;
        document.querySelector("#author4").innerHTML=author4;
        document.querySelector("#date4").innerHTML=date4;
        document.getElementById('article4').style.backgroundImage="url("+link4+")";
        document.querySelector("#type4").innerHTML=type4;
        document.querySelector("#box4").innerHTML=content4;

        document.querySelector("#a").innerHTML=headline5;
        document.querySelector("#b").innerHTML=date5;
        document.getElementById("img1").src=link5;

        document.querySelector("#c").innerHTML=headline6;
        document.querySelector("#d").innerHTML=date6;
        document.getElementById("img2").src=link6;

        document.querySelector("#e").innerHTML=headline7;
        document.querySelector("#f").innerHTML=date7;
        document.getElementById("img3").src=link7;

        document.querySelector("#g").innerHTML=headline8;
        document.querySelector("#h").innerHTML=date8;
        document.getElementById("img4").src=link8;
        







    }
    catch(error){
        console.log("ERROR");
    }

}
