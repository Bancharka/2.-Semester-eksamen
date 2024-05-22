let menuOptions = [
  { title: "PRODUKTER", url: "#"},
  { title: "VIDEN OG INSPIRATION", url: "#"},
  { title: "MILJØ OG KLIMA", url: "#"},
  { title: "SUPPORT", url: "index.html"},
  { title: "COMMUNITY", url: "community.html"},
  { title: "OM OS", url:"#"},
];

function openNav() {
  let sidenav = document.getElementById("mySidenav");
  sidenav.innerHTML = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';

  menuOptions.forEach(function(option) {
      let link = document.createElement("a");
      link.href = option.url;
      link.textContent = option.title;
      sidenav.appendChild(link);
  });

  sidenav.style.width = "280px";
  
  if (2 + 2 === 4) {
      console.log("Hello World");
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
