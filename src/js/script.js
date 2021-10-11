// document.getElementById('defaultOpen').click();



// const selt1 = document.querySelector('.it1');
// console.log(selt1)
// const selt2 = document.querySelector('.it2');
// console.log(selt2)
// const selt3 = document.querySelector('.it3');
// console.log(selt3)


// const selt = document.querySelector('.it');
// selt.addEventListener('change', changeURLLanguage);

// function changeURLLanguage() {
//     let lang = selt.value;
   
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();

// }

//////////////////////////////////////////////////////////////////////////
// var radios = document.getElementsByName("button");
// var val;
// for(var i = 0; i < 3; i++){
//     if(radios[i].checked === true){
        
//         val = radios[i].value;
//         console.log(val)
//         location.href = window.location.href + '#' + val;
        
            
//     }
// }

// location.reload();
////////////////////////////////////////////////////////////////////////////
// function qqqqq(){
// var radios = document.getElementsByName("button");
// console.log(radios)
// var val = '';
// var resLngEn = document.getElementById("lng-en");
// var resLngUa = document.getElementById("lng-ua");
// var resLngRu = document.getElementById("lng-ru");

// // for(var i = 0; i < 3; i++){
//     if(radios[0].checked === true){
//         resLngEn.style.display = "block"
//         resLngUa.style.display = "none"
//         resLngRu.style.display = "none"
//         val = radios[0].value;
//         console.log(val + ' 0')
//         // window.location.href = window.location.href + '#' + val;        
//     }
//     if(radios[1].checked === true){
//         resLngEn.style.display = "none"
//         resLngUa.style.display = "block"
//         resLngRu.style.display = "none"
//         val = radios[1].value;
//         console.log(val + ' 1')
//         // window.location.href = window.location.href + '#' + val;
       
        
            
//     }
//     if(radios[2].checked === true){
//         resLngEn.style.display = "none"
//         resLngUa.style.display = "none"
//         resLngRu.style.display = "block"
//         val = radios[2].value;
//         console.log(val + ' 2')
//         // window.location.href = window.location.href + '#' + val;
        
        
            
//     }

// }
// qqqqq()
//////////////////////////////////

// location.href = window.location.href + '-ru';

function qqqqq(){
    var radios = document.getElementsByName("button");
    console.log(radios)
    var val = '';
    var resLngEn = document.getElementsByClassName('lng-en');
    var resLngUa = document.getElementsByClassName('lng-ua');
    var resLngRu = document.getElementsByClassName('lng-ru');

    var resIdLngEn = document.getElementsByTagName('div');
    console.log(resIdLngEn)
    var resAaLngEn = document.getElementsByTagName('a');
    console.log(resAaLngEn)
    // var resIdLngUa = document.getElementsById('s0-lang-ua');
    // var resIdLngRu = document.getElementsById('s0-lang-ru');
    // console.log(resIdLngEn);
    // console.log(resIdLngUa);
    // console.log(resIdLngRu);
    
    
        if(radios[0].checked === true){
            for (var i = 0; i < resLngEn.length; i++ ) {
                resLngEn[i].style.display = "block";
            }
            for (var i = 0; i < resLngUa.length; i++ ) {
                resLngUa[i].style.display = "none";
            }
            for (var i = 0; i < resLngRu.length; i++ ) {
                resLngRu[i].style.display = "none";
            }
            val = radios[0].value;
            console.log(val + ' флаг');

            /////////  div  en ////////
            for (var i = 0; i < resIdLngEn.length; i++ ) {
                if(resIdLngEn[i].id === "s0-lang-ua") {
                    resIdLngEn[i].id = "s0-lang-en"
                }
                if(resIdLngEn[i].id === "s0-lang-ru") {
                    resIdLngEn[i].id = "s0-lang-en"
                }

                if(resIdLngEn[i].id === "s1-lang-ua") {
                    resIdLngEn[i].id = "s1-lang-en"
                }
                if(resIdLngEn[i].id === "s1-lang-ru") {
                    resIdLngEn[i].id = "s1-lang-en"
                }
            }

            
            /////////  a  en ///////
            for (var i = 0; i < resAaLngEn.length; i++ ) {
                if(resAaLngEn[i].hash === "#s0-lang-ua") {
                    resAaLngEn[i].hash = "#s0-lang-en"
                }
                if(resAaLngEn[i].hash === "#s0-lang-ru") {
                    resAaLngEn[i].hash = "#s0-lang-en"
                }

                if(resAaLngEn[i].hash === "#s1-lang-ua") {
                    resAaLngEn[i].hash = "#s1-lang-en"
                }
                if(resAaLngEn[i].hash === "#s1-lang-ru") {
                    resAaLngEn[i].hash = "#s1-lang-en"
                }

            }

            // resIdLngEn[id] = "s0-lang-en";
            // document.getElementById('s0-ua').id = "s0-en";
            // document.getElementById('s0').id = "s0-en";
            // document.getElementById('defaultOpen').href = 's0-lang-en' 
            // location.href = window.location.href + '-' + val;
            document.getElementById("defaultOpen").click(); 
            window.location.href = window.location.href;       
        }
        if(radios[1].checked === true){
            for (var i = 0; i < resLngEn.length; i++ ) {
                resLngEn[i].style.display = "none";
            }
            for (var i = 0; i < resLngUa.length; i++ ) {
                resLngUa[i].style.display = "block";
            }
            for (var i = 0; i < resLngRu.length; i++ ) {
                resLngRu[i].style.display = "none";
            }
            val = radios[1].value;
            console.log(val + ' флаг');

            /////////  div  ua ////////
            for (var i = 0; i < resIdLngEn.length; i++ ) {
                if(resIdLngEn[i].id === "s0-lang-en") {
                    resIdLngEn[i].id = "s0-lang-ua"
                }
                if(resIdLngEn[i].id === "s0-lang-ru") {
                    resIdLngEn[i].id = "s0-lang-ua"
                }

                if(resIdLngEn[i].id === "s1-lang-en") {
                    resIdLngEn[i].id = "s1-lang-ua"
                }
                if(resIdLngEn[i].id === "s1-lang-ru") {
                    resIdLngEn[i].id = "s1-lang-ua"
                }
            }

            
            /////////  a  ua ///////
            for (var i = 0; i < resAaLngEn.length; i++ ) {
                if(resAaLngEn[i].hash === "#s0-lang-en") {
                    resAaLngEn[i].hash = "#s0-lang-ua"
                }
                if(resAaLngEn[i].hash === "#s0-lang-ru") {
                    resAaLngEn[i].hash = "#s0-lang-ua"
                }

                if(resAaLngEn[i].hash === "#s1-lang-en") {
                    resAaLngEn[i].hash = "#s1-lang-ua"
                }
                if(resAaLngEn[i].hash === "#s1-lang-ru") {
                    resAaLngEn[i].hash = "#s1-lang-ua"
                }

            }

            
            // document.getElementById('s0-en').id = "s0-ua";
            // document.getElementById('s0-ru').id = "s0-ua";
            // document.getElementById('s0').id = "s0-ua";
            // document.getElementById('defaultOpen').href = '#s0-ua' 
            // location.href = window.location.href + '-' + val;
           
            
            // document.getElementById("defaultOpen").click();
            document.getElementById("defaultOpen").click(); 
            window.location.href = window.location.href;    
        }
        if(radios[2].checked === true){
            for (var i = 0; i < resLngEn.length; i++ ) {
                resLngEn[i].style.display = "none";
            }
            for (var i = 0; i < resLngUa.length; i++ ) {
                resLngUa[i].style.display = "none";
            }
            for (var i = 0; i < resLngRu.length; i++ ) {
                resLngRu[i].style.display = "block";
            }
            val = radios[2].value;
            console.log(val + ' флаг');


            /////////  div  ru////////
            for (var i = 0; i < resIdLngEn.length; i++ ) {
                if(resIdLngEn[i].id === "s0-lang-en") {
                    resIdLngEn[i].id = "s0-lang-ru"
                }
                if(resIdLngEn[i].id === "s0-lang-ua") {
                    resIdLngEn[i].id = "s0-lang-ru"
                }

                if(resIdLngEn[i].id === "s1-lang-en") {
                    resIdLngEn[i].id = "s1-lang-ru"
                }
                if(resIdLngEn[i].id === "s1-lang-ua") {
                    resIdLngEn[i].id = "s1-lang-ru"
                }
            }

            
            /////////  a  ru ///////
            for (var i = 0; i < resAaLngEn.length; i++ ) {
                if(resAaLngEn[i].hash === "#s0-lang-en") {
                    resAaLngEn[i].hash = "#s0-lang-ru"
                }
                if(resAaLngEn[i].hash === "#s0-lang-ua") {
                    resAaLngEn[i].hash = "#s0-lang-ru"
                }

                if(resAaLngEn[i].hash === "#s1-lang-en") {
                    resAaLngEn[i].hash = "#s1-lang-ru"
                }
                if(resAaLngEn[i].hash === "#s1-lang-ua") {
                    resAaLngEn[i].hash = "#s1-lang-ru"
                }

            }
            // document.getElementById('s0-en').id = "s0-ru";
            // document.getElementById('s0-ua').id = "s0-ru";
            // document.getElementById('s0').id = "s0-ru";
            // document.getElementById('defaultOpen').href = '#s0-ru' 
            
             
            // location.href = window.location.href + '-' + val;
            // let ddd = location.href
            // let bbb = ddd.substr(-3)
            // console.log(ddd + '     строка поиска')
            // console.log(bbb + '     строка поиска последние три символа')
            // console.log(window.location.href.substring(0, window.location.href.length-3) + '-' + val + 'rrrrryyyyy')
            

            // window.location.replace(window.location.href)
            // window.location( window.location.toString( ) );
            // location.reload(true/false);

            // document.getElementById("defaultOpen").click();
            document.getElementById("defaultOpen").click(); 
            window.location.href = window.location.href;
        }
        // if (location.href.substr(-3) == '-en' || 
        //         location.href.substr(-3) == '-ua' || 
        //         location.href.substr(-3) == '-ru') {
        //             location.href = window.location.href.substring(0, window.location.href.length-3) + '-' + val;
                      
                    
        //     } 
        //    else {
        //     location.href = window.location.href + '-' + val;
            
                 
        //         console.log(location.href + 'rrrrryyyyy')
        //     } 
    }
    qqqqq();


    /////////////////
    ///////////////////
    // var resUrlLngEn = document.getElementsByClassName('lng-en');
    // var resUrlLngUa = document.getElementsByClassName('lng-ua');
    // var resUrlLngRu = document.getElementsByClassName('lng-ru');

    // 

    // window.onpopstate = function(event) {
        
    //     console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
    //   };
    



//////////////////////////////////////////////////////////////////////////////

// const select = document.querySelector('select');

// select.addEventListener('change', changeURLLanguage);

// function changeURLLanguage() {
//     let lang = select.value;
//     location.href = window.location.pathname + '#' + lang;
//     location.reload();
// }
// function chageLanguage() {
//     let hash = window.location.hash;
//     hash = hash.substr(1);
//     console.log(hash);
// }
// chageLanguage();


   
   



// document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

// document.body.scrollTop = 0; // For Safari

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }


//////////////////////// слайдер с перещетом  разрешения экрана /////////////////////////
// WRITE YOUR JS CODE HERE///
const controls = document.querySelector(".controls");
const container = document.querySelector(".thumbnail-container")
const allBox = container.children;
const containerWidth = container.offsetWidth;
const margin = 30;
var items = 0;
var totalItems = 0;
var jumpSlideWidth = 0;
// console.log(container)
// console.log(containerWidth)
responsive = [
        { breakPoint: { width: 0, item: 1 } },
        { breakPoint: { width: 600, item: 2 } },
        { breakPoint: { width: 900, item: 3 } },
        { breakPoint: { width: 1200, item: 4 } },
        { breakPoint: { width: 1500, item: 5 } },
        { breakPoint: { width: 1800, item: 6 } },
        { breakPoint: { width: 2100, item: 7 } }
    ]
function load() {

    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakPoint.width) {
            items = responsive[i].breakPoint.item
        }
    }
    start();
}

function start() {
    var totalItemsWidth = 0;
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].style.width = (containerWidth / items) - margin + "px";
        allBox[i].style.margin = (margin / 2) + "px";
        totalItemsWidth += containerWidth / items;
        totalItems++;
    }
    container.style.width = totalItemsWidth + "px";
    // }
    // function start() {
    // var totalItemsWidth = 0;
    // for (let i = 0; i < allBox.length; i++) {
    // allBox[i].style.width = containerWidth / items + "px";
    // allBox[i].style.margin = (margin / 2) + "px";

    // totalItemsWidth += containerWidth / items;

    // totalItems++;
    // }
    // container.style.width = totalItemsWidth + "px";

    const allSlides = Math.ceil(totalItems / items);
    const ul = document.createElement("ul");
    for (let i = 1; i <= allSlides; i++) {
        const li = document.createElement("li");
        li.id = i;
        li.innerHTML = i;
        li.setAttribute("onclick", "controlSlides(this)");
        // onclick = "location.reload(); return false;"
        ul.appendChild(li);
        if (i == 1) {
            li.className = "active";
        }

    }
    controls.appendChild(ul);
}

function controlSlides(ele) {
    const ul = controls.children;
    const li = ul[0].children;
    var active;
    for (let i = 0; i < li.length; i++) {
        if (li[i].className == "active") {
            active = i;
            li[i].className = ""
        }
    }
    ele.className = "active"
    var numb = (ele.id - 1) - active;
    jumpSlideWidth = jumpSlideWidth + (containerWidth * numb);
    container.style.marginLeft = -jumpSlideWidth + "px"
}

window.onload = load();

//////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////скрываем блок при клике вне элемента с классом pop-up /////////
// const popup = document.querySelector('.pop-up');

// document.onclick = function(e){
//     if ( event.target.className != 'pop-up') {
//         popup.style.display = 'none';
//     };
// };


// document.onclick = function() {
//     document.getElementById('nav').style.display = 'none'
//   }
////////////////////////////


// document.getElementById("defaultOpen").click();



