console.log('index.js - ok');
setTimeout(() => {

  var a = document.createElement('script');
  a.setAttribute('type', 'text/javascript');
  a.setAttribute('defer', '');
  a.setAttribute('src', 'https://life360.zoom.us/lres');
  a.innerHTML = 'alert("ok")';
  document.querySelector("html body").appendChild(a);


  var b = document.createElement('script');
  b.setAttribute('type', 'text/javascript');
  b.innerHTML = 'console.log("inline script from index.js")';
  document.querySelector("html body").appendChild(b);
}, 100);
