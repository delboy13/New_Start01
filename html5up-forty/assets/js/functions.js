
// import React from 'React';
// import ReactDOM from 'react-dom';


function getElementLeft(elm) 
{
    var x = 0;

    //set x to elm’s offsetLeft
    x = elm.offsetLeft;

    //set elm to its offsetParent
    elm = elm.offsetParent;

    //use while loop to check if elm is null
    // if not then add current elm’s offsetLeft to x
    //offsetTop to y and set elm to its offsetParent

    while(elm != null)
    {
        x = parseInt(x) + parseInt(elm.offsetLeft);
        elm = elm.offsetParent;
    }
    return x;
}

function getElementTop(elm) 
{
    var y = 0;

    //set x to elm’s offsetLeft
    y = elm.offsetTop;

    //set elm to its offsetParent
    elm = elm.offsetParent;

    //use while loop to check if elm is null
    // if not then add current elm’s offsetLeft to x
    //offsetTop to y and set elm to its offsetParent

    while(elm != null)
    {
        y = parseInt(y) + parseInt(elm.offsetTop);
        elm = elm.offsetParent;
    }

    return y;
}

function Large(obj)
{
    var imgbox=document.getElementById("imgbox");
    imgbox.style.visibility='visible';
    var img = document.createElement("img");
    img.src=obj.src;
    img.style.width='400px';
    img.style.height='600px';
    
    if(img.addEventListener){
        img.addEventListener('mouseout',Out,false);
    } else {
        img.attachEvent('onmouseout',Out);
    }             
    imgbox.innerHTML='';
    imgbox.appendChild(img);
    imgbox.style.left=(getElementLeft(obj)+50) +'px';
    imgbox.style.top=(getElementTop(obj)+50) + 'px';
}

function Out()
{
    document.getElementById("imgbox").style.visibility='hidden';
}


// Test function to render a change on the static html page.

function renderme(){
var Image = document.getElementById("root1");
Image.style.color ='green'
}


// Function to render the Tasks page with linked tasks being shown in green
function jobDone() {
    var body = document.getElementById("wrapper");
    var script = ``
}
function alwaysLearning()
{

    var body = document.getElementById("wrapper");
    var script = `<!-- Wrapper -->
    <div id="wrapper">

        <!-- Header -->
            <header id="header">
                <img src="C:\FOLDERS\Planets\html5up-forty\images/Logo.png" >
                <a href="index.html" class="logo"><strong>Truth Trekker</strong> <span>Exploring Space</span></a>
                <nav>
                    <a href="#menu">Menu</a>
                </nav>
            </header>

        <!-- Menu -->
            <nav id="menu">
                <ul class="links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="intro.html">TDP</a></li>
                    <li><a href="NDF.html">NDF</a></li>
                    <li><a href="SFIA.html">SFIA</a></li>
                    <li><a href="tasks.html">TASKS</a></li>
                </ul>
                <!-- <ul class="actions stacked">
                    <li><a href="#" class="button primary fit">Get Started</a></li>
                    <li><a href="#" class="button fit">Log In</a></li>
                </ul> -->
            </nav>

        <!-- Main -->
            <div id="main" class="alt">

                <!-- One -->
                    <section id="one">
                        <h1>TASKS</h1>
                        <div>
                        
                            <!-- <pre><code>										  -->
<nav>
<ul>
<li><a href="pluralsight.html">Pluralsight</li></a>
<li><a href="Degreed.html">Degreed</li></a> 
<li><a href="ABAP.html">ABAP</li></a> 
<li><a href="W3Schools.html">W3Schools, YouTube</li></a>
<li><a href="amigos.html">SQL AMIGOS</a></li>
<li><a href="sql.html">SQL</a></li>
<li><a href="jira.html">JIRA</a></li>
<li><a href="talkclub.html">Talk Club</a></li>
<li><a href="feedback.html" style="color: green;">Feedback</a></li>
<li><a href="DA.html">DA Meeting</a></li>
<li><a href="newsletter.html">TDP Newsletter</a></li>
<li><a href="friday.html">Friday Catch up</a></li>
<br>
<h3>Experience</h3>
<ul>
    <li><a href="FCA.html">FCA DATA Request</a></li>
    <li><a href="cardms.html">CARDS POC</a></li>
    <li><a href="performance.html">Performance Testing</a></li>
    <li><a href="emsi.html">EMSI API</a> </li>
    <li><a href="hackathon.html">Hackathon</a></li>
    <li><a href="academy.html">QA Academy</a></li>
    <li><a href="project.html">Personal Project</a></li>
</ul>

</ul>
</nav>										 
                            <!-- </code></pre> -->

                        </div>
                        
                    </section>

            </div>

        <!-- Contact -->
            <section id="contact">
                <div class="inner">
                    
                </div>
            </section>

        <!-- Footer -->
            <footer id="footer">
                <div class="inner">
                    <!-- <ul class="icons">
                        <li><a href="#" class="icon brands alt fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="icon brands alt fa-facebook-f"><span class="label">Facebook</span></a></li>
                        <li><a href="#" class="icon brands alt fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" class="icon brands alt fa-github"><span class="label">GitHub</span></a></li>
                        <li><a href="#" class="icon brands alt fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
                    </ul> -->
                    <ul class="copyright">
                        <li>&copy; Jaye Peacey</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </footer>

    </div>

<!-- Scripts -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
`;

    
    body.innerHTML = script;
};