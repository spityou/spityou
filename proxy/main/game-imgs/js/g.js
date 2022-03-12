const database = [
    {
        name: "Retro Bowl",
        id: "retro",
        type: "em",
        icon: "./game-imgs/retro-bowl.jpg",
        path: "./gainly/retro-bowl/index.html"
    },
    {
        name: "Clumsy Bird",
        id: "clumsy",
        type: "html",
        icon: "./game-imgs/clumsy.png",
        path: "./gainly/clumsy-bird/index.html"
    },
    {
        name: "2048",
        id: "2048",
        type: "html",
        icon: "./game-imgs/2048.png",
        path: "./gainly/2048/index.html"
    },
    {
        name: "Hextris",
        id: "hex",
        type: "html",
        icon: "./game-imgs/hextris.png",
        path: "./gainly/hextris/index.html"
    },
    {
        name: "JavaScript Racer",
        type: "html",
        icon: "./game-imgs/jsracer.png",
        path: "./gainly/javascript-racer/v4.final.html"
    },
    {
        name: "Tower Building",
        type: "html",
        icon: "./game-imgs/tower.gif",
        path: "./gainly/tower-building/index.html"
    }
]

function selectElement(selector) {
    return document.querySelector(selector);
}

//this clear result upon a new letter (to prevent caking of results)
function clearRES() {
    selectElement('.results').innerHTML = ""
}

//this will show a result based on the text the user puts in the search input
function getResults() {
    const search = selectElement('.gamesSEARCH').value;

    clearRES();
    for(let i = 0; i < database.length; i++) {
        if(database[i].name.toLowerCase().includes(search.toLowerCase()) || database[i].type.toLowerCase().includes(search.toLowerCase())) {
            selectElement(".results").innerHTML += `<i onclick="window.open('${database[i].path}', '_self')" class="gameLINK emL"><img src="${database[i].icon}" class="thumbnail"><h3 class="title">${database[i].name}</h3></i>`
            selectElement(".games").classList.add("hide");
            if(selectElement(".results").classList.contains("hardhide")) {
                selectElement(".results").classList.add("showRES");
                selectElement(".results").classList.remove("hardhide");
                selectElement(".gamesSEARCH").style.marginLeft = "0px";
                selectElement(".help").classList.add("hardhide");
            } else {
                selectElement(".results").classList.add("hardshow");
            }
        } 
        if(document.getElementById("gamesSEARCH").value == 0) {
            selectElement(".results").innerHTML = '';
            selectElement(".results").classList.remove("showRES")
            selectElement(".results").classList.add("hardhide");
            selectElement(".help").classList.remove("hardhide");
            selectElement(".games").classList.remove("hide");
            selectElement(".gamesSEARCH").style.marginLeft = "-8px";
        }
    }
}

selectElement(".gamesSEARCH").addEventListener("keyup", getResults);

const g1 = selectElement(".g1");
const g2 = selectElement(".g2");
const g3 = selectElement(".g3");
const g4 = selectElement(".g4");
const g5 = selectElement(".g5");
const g6 = selectElement(".g6");

g1.addEventListener("click", () => {
    window.open("./gainly/retro-bowl/index.html", "_self");
});

g2.addEventListener("click", () => {
    window.open("./gainly/clumsy-bird/index.html", "_self");
});

g3.addEventListener("click", () => {
    window.open("./gainly/2048/index.html", "_self");
});

g4.addEventListener("click", () => {
    window.open("./gainly/hextris/index.html", "_self");
});

g5.addEventListener("click", () => {
    window.open("./gainly/javascript-racer/v4.final.html", "_self");
});

g6.addEventListener("click", () => {
    window.open("./gainly/tower-building/index.html", "_self");
});

// function setFFR() {
//     window.open(`${database[i].path}`);
// }
const gameGEN = document.createElement("i");

// var tabs = document.querySelectorAll(".tab li button.tablinks");
// let tabALL = document.querySelector(".allL");
// let tabHTML = document.querySelector(".htmlL");
// let tabFLASH = document.querySelector(".flashL");
// let all = document.querySelectorAll(".gameLINK")

// tabs.forEach((tab) => {
//     tab.addEventListener("click", ()=>{
// 		tabs.forEach((tab)=>{
// 			tab.classList.remove("active");
// 		})
// 		tab.classList.add("active");
// 		var tabval = tab.getAttribute("data-tabs");

// 		all.forEach((item)=>{
// 			item.style.visibility = "collapse";
// 		});

// 		if(tabval == "html"){
//             tabHTML.forEach((game) => {
//                 game.style.visibility = "visible";
//             })
//             // tabHTML.style.visibility = "visible";
// 		}
// 		else if(tabval == "flash"){
// 			tabFLASH.style.visibility = "visible";
// 		} else if(tabval == "em") {
//             let tabEM = document.querySelector(".emL");
//             console.log(tabEM);
//             tabEM.style.visibility = "visible";
//         } else {
// 			all.forEach((item)=>{
// 				item.style.visibility = "visible";
// 			})
// 		}
// 	})
// })

// tabALL.addEventListener("click", (e) => {
//     if(tabALL.classList.contains("active")) {
//         console.log("fuck");
//         return;
//     } else if(tabALL.classList.contains("notact")) {
//         const active = document.querySelector(".active");
//         active.classList.add("notact");
//         active.classList.remove("active");
//         tabALL.classList.add("active");
    
//     }
// });

// tabHTML.addEventListener("click", (e) => {
//     if(tabHTML.classList.contains("active")) {
//         return;
//     } else if(tabHTML.classList.contains("notact")) {
//         const active = document.querySelector(".active");
//         active.classList.add("notact");
//         active.classList.remove("active");
//         tabHTML.classList.add("active");
//     }
// });

// tabFLASH.addEventListener("click", (e) => {
//     if(tabFLASH.classList.contains("active")) {
//         console.log("fuck");
//         return;
//     } else if(tabFLASH.classList.contains("notact")) {
//         const active = document.querySelector(".active");
//         active.classList.add("notact");
//         active.classList.remove("active");
//         tabFLASH.classList.add("active");
//     }
// });

// tabEM.addEventListener("click", (e) => {
//     if(tabEM.classList.contains("active")) {
//         return;
//     } else if(tabEM.classList.contains("notact")) {
//         const active = document.querySelector(".active");
//         active.classList.add("notact");
//         active.classList.remove("active");
//         tabEM.classList.add("active");
//     }
// });

// if (localStorage.getItem("theme") === "lime") {
//     document.getElementById("rels").href = "../styles/limeg.css";
// } else if (localStorage.getItem("theme") === "amoled") {
//     document.getElementById("rels").href = "../styles/amoledg.css";
// } else if(localStorage.getItem("theme") === "classic") {
//     document.getElementById("rels").href = "../styles/g.css";
// }