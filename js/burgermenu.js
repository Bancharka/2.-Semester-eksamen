let menuOptions = [
  { title: "PRODUKTER", url: "https://www.lk.dk/produkter/"},
  { title: "VIDEN OG INSPIRATION", url: "https://www.lk.dk/professionel/viden-og-inspiration/erhvervsbyggeri/"},
  { title: "MILJØ OG KLIMA", url: "https://www.lk.dk/om-os/miljo-klima/"},
  { title: "SUPPORT", url: "index.html"},
  { title: "COMMUNITY", url: "community.html"},
  { title: "OM OS", url:"https://www.lk.dk/om-os/"},
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
