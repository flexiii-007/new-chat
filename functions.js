// if this hard python more than this

// [1] use function of jquery

// [1-1]inside the function jquery create function names sendMessage()

$(()=>{
    let db = {
        nickname:"wadie",
        img:"../img/characters/7.png",
        text:"nicee",
        type: "admin"
    };

    const sendMessage = (data)=>{
        let icon="";
        if(data.type=="admin"){
            icon = '<img src="./img-room/icon/crown.svg" alt="">';
        }
        else if(data.type=="night"){
            icon = '<img src="./img-room/icon/star.svg" alt="">'
        };
        $(".messages").append(` <li class="msg-right">
        <div>
         <div class="user-pic"> <img src="${data.img}" alt=""></div>
        </div>

         <div class="text-send">
           <h2> ${data.nickname} ${icon} </h2>
           <div> ${data.text} </div>
       </div>
       </li>`);
    };











    const app = ()=>{
        sendMessage(db);
    };

    // here where the app runs.
    app();
});



