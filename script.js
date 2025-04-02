const navBar = document.querySelector(".navbar")
let navItems =  Array.from(document.querySelectorAll(".movable"));
let movedItems = [];
const navLeft = document.querySelector('.nav-left');
const dropDown = document.querySelector(".dropdown");
const rightlength = document.querySelector(".nav-right").offsetWidth;
console.log("right length"+rightlength)

//measure the size of the navBar

const navObserver = new ResizeObserver(entries=>{
    let fullLength = entries[0].contentRect.width;
    console.log("full length"+fullLength)
    let leftLength = document.querySelector(".nav-left").offsetWidth;
    console.log("left length"+leftLength)
    let spaceAvailable = fullLength - rightlength;
    console.log("space available"+spaceAvailable)
    if((spaceAvailable < leftLength +30)&&(window.innerWidth > 1050)){
        console.log('MOVEEEEEEEE');
        //append item 
        let item = navItems.pop();
        // console.log(item)
        movedItems.unshift(item);
        // console.log(movedItems[0]);
        dropDown.appendChild(movedItems[0]);        
    }
    
    
}
);

navObserver.observe(navBar);
    // }else if((spaceAvailable > leftLength +30) && (movedItems.length!=0)){
    //     //remove item from moved items
    //     item = movedItems.pop();
    //     navItems.unshift(item);
    //     navLeft.appendChild(navItems[0]);

    // }