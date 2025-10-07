const shareBtn = document.querySelector(".article-body .share-btn");
const shareDiv = document.querySelector(".share");


// AI refactoring

function toggleShareView(){
    if(!shareBtn || !shareDiv) return;

    shareBtn.classList.toggle('active');
    const isMobile = window.innerWidth < 832

    if(isMobile){
        shareDiv.style.right = shareDiv.style.right === '0px' ? '-100%' : '0px'
    }else{
        const isVisiable = shareDiv.style.bottom === '90px'
        shareDiv.style.bottom = isVisiable ? '60px' : '90px'
        shareDiv.style.opacity = isVisiable ? '0' : '1'
    }
}

shareBtn.addEventListener('click',toggleShareView)

// // my solution 
// // console.log(document.body.clientWidth);
// // console.log(shareDiv);

// shareBtn.addEventListener("click", (e) => {
//   e.target.classList.toggle("active");
//   if (document.body.clientWidth < 832) {
//     shareOnMobileView();
//   } else {
//     shareOnDesktop();
//   }
// });
// function shareOnMobileView() {
    //   if (shareDiv.style.right != "0px") {
        //     shareDiv.style.right = "0";
        //   } else {
            //     shareDiv.style.right = "-100%";
            //   }
            // }

// function shareOnDesktop() {
//   if (shareDiv.style.bottom != '90px') {
//     shareDiv.style.opacity = "1";
//     shareDiv.style.bottom = "90px";
//   } else {
//     shareDiv.style.opacity = "0";
//     shareDiv.style.bottom = "60px";
//   }
// }

