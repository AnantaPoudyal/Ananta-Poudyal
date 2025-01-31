function about_me(){
    var intro = document.getElementById("my_introduction").value;
    intro.innerHTML = "Hello, my name is <strong>John Doe</strong>. I am a <strong>web developer</strong> and I am currently learning <strong>JavaScript</strong>.";

    console.log(intro);
}
about_me();