// const close = document.querySelector("#closebtn");
// const overlay = document.querySelector("#overlay");
// const makebtn = document.querySelector("#makebtn");
// const maketask = document.querySelector("#maketask");
// const title = document.querySelector("#title");
// const data = document.querySelector("#data");
// const vacant = document.querySelector(".vacant");
// const card = document.querySelector(".card");


// if(localStorage.getItem("tasks") === null){
//     localStorage.setItem("tasks", JSON.stringify([]))
// }  

// close.addEventListener("click", function(){
//     overlay.style.display = "none";
// });

// makebtn.addEventListener("click", function(){
//     overlay.style.display = "initial";
// });

// maketask.addEventListener("click", function(){
//     const valueoftitle = document.querySelector("#title").value;
//     const valueofdata = document.querySelector("#data").value;
    
//     const dataofinputs = {
//         title:valueoftitle,
//         data:valueofdata,
//     }

//     //pahle ke tasks nikalo
//     const allprevioiustasks = localStorage.getItem("tasks");
//     //unko parso karo
//      const allprevioiustasksparsed = JSON.parse(allprevioiustasks);
//     //usme ak or task jodo
//      allprevioiustasksparsed.push(dataofinputs);
//      //fir se usko stringify karo
//       const stringifiedtasks = JSON.stringify(allprevioiustasksparsed);
//     //add kardo localstorage me 
//     localStorage.setItem("tasks" , stringifiedtasks);

//     //overlay screen ko hatao and inputs ko khali kar do 
//     title.value = "";
//     data.value = "";

//     overlay.style.display = "none";
//     printer();
// });


// function printer(){
//     //data nikalo
//     const alltasks = localStorage.getItem("tasks");
//     //parse karo
//     const parsedtasks = JSON.parse(alltasks)
//     //is array pe loop karo and har baar ak member add karo clutter variable me

//     var clutter = "";
//     parsedtasks.forEach(function(elem){
//     clutter += `<div class="card w-40 p-4 rounded-md bg-red-200">
//                  <h1 class="text-2xl">${elem.title}</h1>
//                      <p class="text-sm tracking-tight mt-3">${elem.data}</p>
//                 </div>`;
//     })
//     document.querySelector(".cards").innerHTML = clutter;
    
//     if(parsedtasks.length > 0){
//         vacant.style.display = "none";
//     }
   
// }
// printer();







///by using chatgpt


const close = document.querySelector("#closebtn");
const overlay = document.querySelector("#overlay");
const makebtn = document.querySelector("#makebtn");
const maketask = document.querySelector("#maketask");
const title = document.querySelector("#title");
const data = document.querySelector("#data");
const vacant = document.querySelector(".vacant");
const card = document.querySelector(".card");

if(localStorage.getItem("tasks") === null){
    localStorage.setItem("tasks", JSON.stringify([]))
}  

close.addEventListener("click", function(){
    overlay.style.display = "none";
});

makebtn.addEventListener("click", function(){
    overlay.style.display = "initial";
});

maketask.addEventListener("click", function(){
    const valueoftitle = document.querySelector("#title").value;
    const valueofdata = document.querySelector("#data").value;
    
    const dataofinputs = {
        title: valueoftitle,
        data: valueofdata,
        timestamp: new Date().toLocaleString() // Add timestamp
    }

    // Previous tasks retrieval and update
    const allprevioiustasks = localStorage.getItem("tasks");
    const allprevioiustasksparsed = JSON.parse(allprevioiustasks);
    allprevioiustasksparsed.push(dataofinputs);
    const stringifiedtasks = JSON.stringify(allprevioiustasksparsed);
    localStorage.setItem("tasks", stringifiedtasks);

    // Reset inputs and hide overlay
    title.value = "";
    data.value = "";
    overlay.style.display = "none";
    
    printer(); // Update the displayed tasks
});

function printer(){
    const alltasks = localStorage.getItem("tasks");
    const parsedtasks = JSON.parse(alltasks);
    
    var clutter = "";
    
    parsedtasks.forEach(function(elem){
        clutter += `<div class="card w-40 p-4 rounded-md bg-red-200">
                        <h1 class="text-2xl">${elem.title}</h1>
                        <p class="text-sm tracking-tight mt-3">${elem.data}</p>
                        <p class="text-xs mt-2">${elem.timestamp}</p>
                    </div>`;
    })
    
    document.querySelector(".cards").innerHTML = clutter;
    
    if(parsedtasks.length > 0){
        vacant.style.display = "none";
    }
}

printer(); // Initial display