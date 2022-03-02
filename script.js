/* Very Simply Expand/Collapse Question & Answer */
let coll = document.getElementsByClassName("question");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
/* -------------------------------------------- */

let beginlab = document.getElementById('beginlab');
let prelim = document.getElementById('prelim');
let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');
let step5 = document.getElementById('step5');
let summary = document.getElementById('summary');

let nb = document.getElementById('nb');
let np = document.getElementById('np');
let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let n5 = document.getElementById('n5');
let ns = document.getElementById('ns');

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function allTransparent() {
  nb.style.backgroundColor = "transparent";
  np.style.backgroundColor = "transparent";
  n1.style.backgroundColor = "transparent";
  n2.style.backgroundColor = "transparent";
  n3.style.backgroundColor = "transparent";
  n4.style.backgroundColor = "transparent";
  n5.style.backgroundColor = "transparent";
  ns.style.backgroundColor = "transparent";
  setTimeout(scrollToTop, 50); 
}

function allHide() {
  beginlab.style.display = "none";
  prelim.style.display = "none";
  step1.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";
  step5.style.display = "none";
  summary.style.display = "none";
}

function moveTo(step){
 switch(step) {
   case 'begin':
    allTransparent();
    allHide();     
    beginlab.style.display = "block";
     nb.style.backgroundColor = "#217b6d";
     break;
   case 'prelim':
    allTransparent();
    allHide();     
     prelim.style.display = "block";
     np.style.backgroundColor = "#217b6d";
    break;
   case 's1':
    allTransparent();
    allHide();     
    step1.style.display = "block";
    n1.style.backgroundColor = "#217b6d";
    break;
   case 's2':
    allTransparent();
    allHide();     
    step2.style.display = "block";
    n2.style.backgroundColor = "#217b6d";
    break;
   case 's3':
    allTransparent();
    allHide();        
    step3.style.display = "block";
    n3.style.backgroundColor = "#217b6d";
    break;
   case 's4':
    allTransparent();
    allHide();        
    step4.style.display = "block";
    n4.style.backgroundColor = "#217b6d";
    break;
   case 's5':
    allTransparent();
    allHide();        
    step5.style.display = "block";
    n5.style.backgroundColor = "#217b6d";
    break;
   case 'sum':
    allTransparent();
    allHide();        
    summary.style.display = "block";
    ns.style.backgroundColor = "#217b6d";
    break;
  default:
    console.log('The content requested is not currently available.')
  } 
}

/* ---- Copy to Clipboard ---- */

document.getElementById('copyToClipboard-a').addEventListener('click', function() {
  let text = document.getElementById('textA');
  text.select();
  document.execCommand('copy');
  let notif = document.getElementById('notif');
  notif.innerText = "Copied!";
})

/* ---- Options Menu ---- */

function toggleOptions(){
  let menu = document.getElementById('optionsMenu');

  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
};


var highlights = false;

function updates() {
  let optionTitle = document.getElementById("highlightedUpdates");
  let allUpdates = document.getElementsByClassName("UPDATE");

  if (highlights) { //highlights true
    console.log("currently " + highlights + " | Turning OFF updates...");
    optionTitle.innerHTML = "[Highlight 6/30/2020 Updates]";
    //optionTitle.classList.remove("sel");
      
    len = allUpdates !== null ? allUpdates.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates[i].classList.remove("highlighted");
    }
      highlights = false;
  }

  else {
    console.log("currently " + highlights + " | Turning ON updates...");
    optionTitle.innerHTML = "[Highlight 6/30/2020 Updates ✅]";
    //optionTitle.classList.add("sel");

    len = allUpdates !== null ? allUpdates.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates[i].classList.add("highlighted");
    }
      highlights = true;
  }
}

function updates2() {
  let optionTitle2 = document.getElementById("highlightedUpdates2");
  let allUpdates2 = document.getElementsByClassName("UPDATE2");

  if (highlights) { //highlights true
    console.log("currently " + highlights + " | Turning OFF updates...");
    optionTitle2.innerHTML = "[Highlight 7/14/2020 Updates]";
      
    len = allUpdates2 !== null ? allUpdates2.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates2[i].classList.remove("highlighted2");
    }
      highlights = false;
  }

  else {
    console.log("currently " + highlights + " | Turning ON updates...");
    optionTitle2.innerHTML = "[Highlight 7/14/2020 Updates ✅]";

    len = allUpdates2 !== null ? allUpdates2.length : 0, i = 0;
    for (i; i < len; i++) {
      allUpdates2[i].classList.add("highlighted2");
    }
      highlights = true;
  }
}

/* Keep at Top */

function keepTop() { 
  let menu = document.getElementById('optionsMenu');
  let keepTop = document.getElementById('keepTop');

  if (menu.style.position === "fixed") {
        menu.style.position = "relative";
    keepTop.style.color = "black";
        menu.style.top = "0px";
    keepTop.innerHTML = "[Keep at top]";
  }
  else {
    menu.style.position = "fixed";
    menu.style.top = "50px";
    keepTop.style.color = "green";
    keepTop.innerHTML = "[Keep at top ✅]";
  }

}



/* ---- Preliminary Functions ---- */

let windowExample = document.getElementById("windowExample");

let input = document.getElementById("labnameVal");
let confirmText = document.getElementById("confirmText");

let defaultValue = "YourLabName";
let labnames = document.getElementsByClassName("labnameHere");

let allGitLinks = document.getElementsByClassName("LABUSER_GIT_LINK");

function setLabName() {
    if (input.value === "") {
      confirmText.innerHTML = "Please enter your IBM email first.";
      confirmText.style.display = "inline-block";
    return
    }
  
  defaultValue = input.value.toLowerCase();
  defaultValue = defaultValue.replace(/\./g, "-");

  confirmText.innerHTML =
    "<b>" +
    defaultValue +
    "</b> is your labname. For your convenience, custom links and references in this lab have been updated! Please continue reading below.";
  confirmText.style.display = "inline-block";

  for (var i = 0, len = allGitLinks.length | 0; i < len; i = (i + 1) | 0) {
    allGitLinks[i].href =
      "https://github.ibm.com/GSC-2020-lab-1/" + defaultValue + "-2020-lab";
    allGitLinks[i].textContent =
      "https://github.ibm.com/GSC-2020-lab-1/" + defaultValue + "-2020-lab";
  }

  for (var i = 0, len = labnames.length | 0; i < len; i = (i + 1) | 0) {
    labnames[i].textContent = defaultValue;
  }

  tabsDisplayURL("instructions");
   windowExample.classList.add("visible");
  
}

function createCollapseButton(nav) {
  const collapseBtn = document.createElement("div");
  collapseBtn.classList.add("collapse-button");

  const expandedState = document.createElement("div");
  expandedState.classList.add("collapse-button__collapse");
  const expandedStateIcon = document.createElement("span");
  expandedStateIcon.classList.add("collapse-button__collapse--icon");
  expandedStateIcon.classList.add("material-icons");
  expandedStateIcon.innerText = "arrow_back";
  const expandedStateLabel = document.createElement("span");
  expandedStateLabel.classList.add("collapse-button__collapse--label");
  expandedStateLabel.innerText = "Collapse";
  expandedState.appendChild(expandedStateIcon);
  expandedState.appendChild(expandedStateLabel);
  collapseBtn.appendChild(expandedState);

  const collapsedState = document.createElement("div");
  collapsedState.classList.add("collapse-button__expand");
  const collapsedStateIcon = document.createElement("span");
  collapsedStateIcon.classList.add("collapse-button__expand--icon");
  collapsedStateIcon.classList.add("material-icons");
  collapsedStateIcon.innerText = "arrow_forward";
  const collapsedStateLabel = document.createElement("span");
  collapsedStateLabel.classList.add("collapse-button__expand--label");
  collapsedStateLabel.innerText = "Expand";
  collapsedState.appendChild(collapsedStateIcon);
  collapsedState.appendChild(collapsedStateLabel);
  collapseBtn.appendChild(collapsedState);

  nav.querySelector(".tabs__list").appendChild(collapseBtn);
}

const navs = document.querySelectorAll(".tabs");
navs.forEach(function (nav) {
  const linksArray = nav.querySelectorAll(".tab");
  let activeLink = nav.querySelector(".active");

  function removeActive() {
    activeLink.classList.remove("active");
  }

  linksArray.forEach(function (link) {
    link.addEventListener("click", function () {
      removeActive();
      link.classList.add("active");
      activeLink = nav.querySelector(".active");
    });
  });
  if (nav.classList.contains("tabs--vertical")) {
    let collapseBtn = nav.querySelector(".collapse-button");
    if (collapseBtn) {
      collapseBtn.addEventListener("click", function () {
        nav.classList.toggle("is-collapsed");
      });
    } else {
      createCollapseButton(nav);
      collapseBtn = nav.querySelector(".collapse-button");
      collapseBtn.addEventListener("click", function () {
        nav.classList.toggle("is-collapsed");
      });
    }
  }
});

function tabsDisplayURL(tab) {
  let url = document.getElementById("tabs_url");
  let des = document.getElementById("tabs_description");

  switch (tab) {
    case "instructions":
      url.innerHTML =
        "<a href='https://pages.github.ibm.com/dallas-gsc-gov/dronelab' target='_blank'>https://pages.github.ibm.com/dallas-gsc-gov/dronelab</a>";
      des.innerHTML =
        "- This current tab.<br/>- <b>Your browser should only have this tab open right now.</b><br/>- During the lab, you'll be clicking back to this tab often!<br/>- Now click on the [GitHub] tab to the right.";
      break;
    case "github":
      url.innerHTML =
        "<a href='https://github.ibm.com/GSC-2020-lab-1/" +
        defaultValue +
        "-2020-lab' target='_blank'>https://github.ibm.com/GSC-2020-lab-1/" +
        defaultValue +
        "-2020-lab</a>";
      des.innerHTML =
        "- Your git repository was provided in an email. <br/> <b>- Click the URL link above to open this in a new tab.</b> Then come back to this tab. <br/> - You should now have 2 tabs in your browser. <br/> - Now click on the last tab [IBM Cloud].";
      break;
    case "cloud":
      url.innerHTML =
        "<a href='https://cloud.ibm.com' target='_blank'>https://cloud.ibm.com</a>";
      des.innerHTML =
        "- Your IBM Cloud dashboard will provide access to the OpenShift web console. <br/>- Eventually, it will display the cluster overview. <br/> - <b>Click the URL link above to open this in a new tab.</b> Then come back to this tab. <br/> -  The 3 tabs now open in your browser will be used at the start of the lab. Keep reading below.";
      break;
    case "openshift":
      url.innerHTML = "TBD (will be opened later in the lab)";
      des.innerHTML =
        "This tab will <b>eventually</b> show the Topology, or visual diagram, view of your applications.";
      break;
    case "app":
      url.innerHTML = "TBD (will be created and opened at the end!)";
      des.innerHTML =
        "Your remote drone console application will <b>eventually</b> be deployed at the end of the lab.";
      break;
    default:
      console.log("not available");
  }
}
