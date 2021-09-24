
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
    var script = `<div id="wrapper">

    <!-- Header -->
        <header id="header">
            <a href="index.html" class="logo">
                <strong>Truth Trekker</strong> <span>Exploring Space</span>
            </a>
            <nav>
                <a href="index.html">Menu</a>
            </nav>
        </header>

    <!-- Drop Down Menu -->
        <nav id="menu">
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="intro.html">TDP</a></li>
                <li><a href="NDF.html">NDF</a></li>
                <li><a href="SFIA.html">SFIA</a></li>
                <li><a href="tasks.html">TASKS</a></li>
            </ul>
            
        </nav>

    <!-- Main -->
        <div id="main" class="alt">

            <!-- One -->
                 <section id="one">
                    <div class="inner">
                        <header class="major">
                            <h1>TASKS</h1>
                        </header>

<!-- <nav> -->
<div class="row">

<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;">
<legend style="font-size: 2rem">Learning</legend>

<h4><a href="pluralsight.html" style="color: yellow;">Pluralsight</h4></a>
<h4><a href="Degreed.html" style="color: yellow;">Degreed</h4></a> 
<h4><a href="ABAP.html" style="color: yellow;">ABAP</h4></a> 
<h4><a href="w3Schools.html" style="color: yellow;">W3Schools, YouTube</h4></a>
<h4><a href="amigos.html" style="color: yellow;">SQL AMIGOS</a></h4>
<h4><a href="sql.html" style="color: yellow;">SQL</a></h4>
<!-- </fieldset> -->
<!-- </div> -->
<!-- </div> -->
<!-- <br> -->

<!-- <div class="col-4 col-12-medium"> -->
<!-- <fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;"> -->
<!-- <legend style="font-size: 2rem">Learning</legend> -->
<h4><a href="jira.html" style="color: yellow;">JIRA</a></h4>
<h4><a href="talkclub.html">Talk Club</a></h4>
<h4><a href="feedback.html" style="color: yellow;">Feedback</a></h4>
<h4><a href="DA.html">DA Meeting</a></h4>
<h4><a href="newsletter.html">TDP Newsletter</a></h4>
<h4><a href="friday.html" style="color: yellow;">Friday Catch up</a></h4>
</div>
</fieldset>

<!-- <br> -->

<!-- <h3>Experience</h3> -->
<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px; ">
<legend style="font-size: 2rem">Activities</legend>
<h4><a href="FCA.html">FCA DATA Request</a></h4>
<h4><a href="cardms.html">CARDS POC</a></h4>
<h4><a href="performance.html">Performance Testing</a></h4>
<h4><a href="emsi.html">EMSI API</a> </h4>
<h4><a href="hackathon.html" style="color: yellow;">Hackathon</a></h4>
<h4><a href="academy.html" style="color: yellow;">QA Academy</a></h4>
<h4><a href="project.html" style="color: yellow;">Personal Project</a></h4>
</fieldset>
</div>
</div>		


<!-- </nav>										   -->

                     </div> 
                    
                 </section> 

        </div>

<!-- Footer -->
        <footer id="footer">
            <div class="inner">
                <ul class="copyright">
                    <li>&copy; Jaye Peacey</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>

</div>`;
    body.innerHTML = script;

}
function alwaysLearning()
{

    var body = document.getElementById("wrapper");
    var script = `<div id="wrapper">

    <!-- Header -->
        <header id="header">
            <a href="index.html" class="logo">
                <strong>Truth Trekker</strong> <span>Exploring Space</span>
            </a>
            <nav>
                <a href="index.html">Menu</a>
            </nav>
        </header>

    <!-- Drop Down Menu -->
        <nav id="menu">
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="intro.html">TDP</a></li>
                <li><a href="NDF.html">NDF</a></li>
                <li><a href="SFIA.html">SFIA</a></li>
                <li><a href="tasks.html">TASKS</a></li>
            </ul>
            
        </nav>

    <!-- Main -->
        <div id="main" class="alt">

            <!-- One -->
                 <section id="one">
                    <div class="inner">
                        <header class="major">
                            <h1>TASKS</h1>
                        </header>

<!-- <nav> -->
<div class="row">

<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;">
<legend style="font-size: 2rem">Learning</legend>

<h4><a href="pluralsight.html" style="color: yellow;">Pluralsight</h4></a>
<h4><a href="Degreed.html" style="color: yellow;">Degreed</h4></a> 
<h4><a href="ABAP.html" style="color: yellow;">ABAP</h4></a> 
<h4><a href="w3Schools.html" style="color: yellow;">W3Schools, YouTube</h4></a>
<h4><a href="amigos.html" style="color: yellow;">SQL AMIGOS</a></h4>
<h4><a href="sql.html" style="color: yellow;">SQL</a></h4>
<!-- </fieldset> -->
<!-- </div> -->
<!-- </div> -->
<!-- <br> -->

<!-- <div class="col-4 col-12-medium"> -->
<!-- <fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;"> -->
<!-- <legend style="font-size: 2rem">Learning</legend> -->
<h4><a href="jira.html" style="color: yellow;">JIRA</a></h4>
<h4><a href="talkclub.html" style="color: yellow;">Talk Club</a></h4>
<h4><a href="feedback.html" style="color: yellow;">Feedback</a></h4>
<h4><a href="DA.html">DA Meeting</a></h4>
<h4><a href="newsletter.html" style="color: yellow;">TDP Newsletter</a></h4>
<h4><a href="friday.html" style="color: yellow;">Friday Catch up</a></h4>
</div>
</fieldset>

<!-- <br> -->

<!-- <h3>Experience</h3> -->
<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px; ">
<legend style="font-size: 2rem">Activities</legend>
<h4><a href="FCA.html">FCA DATA Request</a></h4>
<h4><a href="cardms.html">CARDS POC</a></h4>
<h4><a href="performance.html">Performance Testing</a></h4>
<h4><a href="emsi.html" style="color: yellow;">EMSI API</a> </h4>
<h4><a href="hackathon.html" style="color: yellow;">Hackathon</a></h4>
<h4><a href="academy.html" style="color: yellow;">QA Academy</a></h4>
<h4><a href="project.html" style="color: yellow;">Personal Project</a></h4>
</fieldset>
</div>
</div>		


<!-- </nav>										   -->

                     </div> 
                    
                 </section> 

        </div>

<!-- Footer -->
        <footer id="footer">
            <div class="inner">
                <ul class="copyright">
                    <li>&copy; Jaye Peacey</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>

</div>
`;

    
    body.innerHTML = script;
};



function improving() {
    var body = document.getElementById("wrapper");
    var script = `<div id="wrapper">

    <!-- Header -->
        <header id="header">
            <a href="index.html" class="logo">
                <strong>Truth Trekker</strong> <span>Exploring Space</span>
            </a>
            <nav>
                <a href="index.html">Menu</a>
            </nav>
        </header>

    <!-- Drop Down Menu -->
        <nav id="menu">
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="intro.html">TDP</a></li>
                <li><a href="NDF.html">NDF</a></li>
                <li><a href="SFIA.html">SFIA</a></li>
                <li><a href="tasks.html">TASKS</a></li>
            </ul>
            
        </nav>

    <!-- Main -->
        <div id="main" class="alt">

            <!-- One -->
                 <section id="one">
                    <div class="inner">
                        <header class="major">
                            <h1>TASKS</h1>
                        </header>

<!-- <nav> -->
<div class="row">

<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;">
<legend style="font-size: 2rem">Learning</legend>

<h4><a href="pluralsight.html" style="color: yellow;">Pluralsight</h4></a>
<h4><a href="Degreed.html" style="color: yellow;">Degreed</h4></a> 
<h4><a href="ABAP.html" style="color: yellow;">ABAP</h4></a> 
<h4><a href="w3Schools.html" style="color: yellow;">W3Schools, YouTube</h4></a>
<h4><a href="amigos.html" style="color: yellow;">SQL AMIGOS</a></h4>
<h4><a href="sql.html" style="color: yellow;">SQL</a></h4>
<!-- </fieldset> -->
<!-- </div> -->
<!-- </div> -->
<!-- <br> -->

<!-- <div class="col-4 col-12-medium"> -->
<!-- <fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;"> -->
<!-- <legend style="font-size: 2rem">Learning</legend> -->
<h4><a href="jira.html" style="color: yellow;">JIRA</a></h4>
<h4><a href="talkclub.html">Talk Club</a></h4>
<h4><a href="feedback.html" style="color: yellow;">Feedback</a></h4>
<h4><a href="DA.html">DA Meeting</a></h4>
<h4><a href="newsletter.html">TDP Newsletter</a></h4>
<h4><a href="friday.html" style="color: yellow;">Friday Catch up</a></h4>
</div>
</fieldset>

<!-- <br> -->

<!-- <h3>Experience</h3> -->
<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px; ">
<legend style="font-size: 2rem">Activities</legend>
<h4><a href="FCA.html">FCA DATA Request</a></h4>
<h4><a href="cardms.html">CARDS POC</a></h4>
<h4><a href="performance.html">Performance Testing</a></h4>
<h4><a href="emsi.html">EMSI API</a> </h4>
<h4><a href="hackathon.html" style="color: yellow;">Hackathon</a></h4>
<h4><a href="academy.html" style="color: yellow;">QA Academy</a></h4>
<h4><a href="project.html" style="color: yellow;">Personal Project</a></h4>
</fieldset>
</div>
</div>		


<!-- </nav>										   -->

                     </div> 
                    
                 </section> 

        </div>

<!-- Footer -->
        <footer id="footer">
            <div class="inner">
                <ul class="copyright">
                    <li>&copy; Jaye Peacey</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>

</div>`;
    body.innerHTML = script;

}



function safe() {
    var body = document.getElementById("wrapper");
    var script = `<div id="wrapper">

    <!-- Header -->
        <header id="header">
            <a href="index.html" class="logo">
                <strong>Truth Trekker</strong> <span>Exploring Space</span>
            </a>
            <nav>
                <a href="index.html">Menu</a>
            </nav>
        </header>

    <!-- Drop Down Menu -->
        <nav id="menu">
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="intro.html">TDP</a></li>
                <li><a href="NDF.html">NDF</a></li>
                <li><a href="SFIA.html">SFIA</a></li>
                <li><a href="tasks.html">TASKS</a></li>
            </ul>
            
        </nav>

    <!-- Main -->
        <div id="main" class="alt">

            <!-- One -->
                 <section id="one">
                    <div class="inner">
                        <header class="major">
                            <h1>TASKS</h1>
                        </header>

<!-- <nav> -->
<div class="row">

<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;">
<legend style="font-size: 2rem">Learning</legend>

<h4><a href="pluralsight.html">Pluralsight</h4></a>
<h4><a href="Degreed.html" >Degreed</h4></a> 
<h4><a href="ABAP.html" >ABAP</h4></a> 
<h4><a href="w3Schools.html" >W3Schools, YouTube</h4></a>
<h4><a href="amigos.html" >SQL AMIGOS</a></h4>
<h4><a href="sql.html" >SQL</a></h4>
<!-- </fieldset> -->
<!-- </div> -->
<!-- </div> -->
<!-- <br> -->

<!-- <div class="col-4 col-12-medium"> -->
<!-- <fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;"> -->
<!-- <legend style="font-size: 2rem">Learning</legend> -->
<h4><a href="jira.html" >JIRA</a></h4>
<h4><a href="talkclub.html">Talk Club</a></h4>
<h4><a href="feedback.html" >Feedback</a></h4>
<h4><a href="DA.html">DA Meeting</a></h4>
<h4><a href="newsletter.html">TDP Newsletter</a></h4>
<h4><a href="friday.html" >Friday Catch up</a></h4>
</div>
</fieldset>

<!-- <br> -->

<!-- <h3>Experience</h3> -->
<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px; ">
<legend style="font-size: 2rem">Activities</legend>
<h4><a href="FCA.html">FCA DATA Request</a></h4>
<h4><a href="cardms.html">CARDS POC</a></h4>
<h4><a href="performance.html">Performance Testing</a></h4>
<h4><a href="emsi.html">EMSI API</a> </h4>
<h4><a href="hackathon.html" >Hackathon</a></h4>
<h4><a href="academy.html" >QA Academy</a></h4>
<h4><a href="project.html" >Personal Project</a></h4>
</fieldset>
</div>
</div>		


<!-- </nav>										   -->

                     </div> 
                    
                 </section> 

        </div>

<!-- Footer -->
        <footer id="footer">
            <div class="inner">
                <ul class="copyright">
                    <li>&copy; Jaye Peacey</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>

</div>`;
    body.innerHTML = script;

}


function think() {
    var body = document.getElementById("wrapper");
    var script = `<div id="wrapper">

    <!-- Header -->
        <header id="header">
            <a href="index.html" class="logo">
                <strong>Truth Trekker</strong> <span>Exploring Space</span>
            </a>
            <nav>
                <a href="index.html">Menu</a>
            </nav>
        </header>

    <!-- Drop Down Menu -->
        <nav id="menu">
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="intro.html">TDP</a></li>
                <li><a href="NDF.html">NDF</a></li>
                <li><a href="SFIA.html">SFIA</a></li>
                <li><a href="tasks.html">TASKS</a></li>
            </ul>
            
        </nav>

    <!-- Main -->
        <div id="main" class="alt">

            <!-- One -->
                 <section id="one">
                    <div class="inner">
                        <header class="major">
                            <h1>TASKS</h1>
                        </header>

<!-- <nav> -->
<div class="row">

<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;">
<legend style="font-size: 2rem">Learning</legend>

<h4><a href="pluralsight.html">Pluralsight</h4></a>
<h4><a href="Degreed.html" >Degreed</h4></a> 
<h4><a href="ABAP.html" >ABAP</h4></a> 
<h4><a href="w3Schools.html" >W3Schools, YouTube</h4></a>
<h4><a href="amigos.html" >SQL AMIGOS</a></h4>
<h4><a href="sql.html" >SQL</a></h4>
<!-- </fieldset> -->
<!-- </div> -->
<!-- </div> -->
<!-- <br> -->

<!-- <div class="col-4 col-12-medium"> -->
<!-- <fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;"> -->
<!-- <legend style="font-size: 2rem">Learning</legend> -->
<h4><a href="jira.html" >JIRA</a></h4>
<h4><a href="talkclub.html">Talk Club</a></h4>
<h4><a href="feedback.html" >Feedback</a></h4>
<h4><a href="DA.html">DA Meeting</a></h4>
<h4><a href="newsletter.html">TDP Newsletter</a></h4>
<h4><a href="friday.html" >Friday Catch up</a></h4>
</div>
</fieldset>

<!-- <br> -->

<!-- <h3>Experience</h3> -->
<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px; ">
<legend style="font-size: 2rem">Activities</legend>
<h4><a href="FCA.html">FCA DATA Request</a></h4>
<h4><a href="cardms.html">CARDS POC</a></h4>
<h4><a href="performance.html">Performance Testing</a></h4>
<h4><a href="emsi.html">EMSI API</a> </h4>
<h4><a href="hackathon.html" >Hackathon</a></h4>
<h4><a href="academy.html" >QA Academy</a></h4>
<h4><a href="project.html" >Personal Project</a></h4>
</fieldset>
</div>
</div>		


<!-- </nav>										   -->

                     </div> 
                    
                 </section> 

        </div>

<!-- Footer -->
        <footer id="footer">
            <div class="inner">
                <ul class="copyright">
                    <li>&copy; Jaye Peacey</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>

</div>`;
    body.innerHTML = script;

}


function together() {
    var body = document.getElementById("wrapper");
    var script = `<div id="wrapper">

    <!-- Header -->
        <header id="header">
            <a href="index.html" class="logo">
                <strong>Truth Trekker</strong> <span>Exploring Space</span>
            </a>
            <nav>
                <a href="index.html">Menu</a>
            </nav>
        </header>

    <!-- Drop Down Menu -->
        <nav id="menu">
            <ul class="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="intro.html">TDP</a></li>
                <li><a href="NDF.html">NDF</a></li>
                <li><a href="SFIA.html">SFIA</a></li>
                <li><a href="tasks.html">TASKS</a></li>
            </ul>
            
        </nav>

    <!-- Main -->
        <div id="main" class="alt">

            <!-- One -->
                 <section id="one">
                    <div class="inner">
                        <header class="major">
                            <h1>TASKS</h1>
                        </header>

<!-- <nav> -->
<div class="row">

<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;">
<legend style="font-size: 2rem">Learning</legend>

<h4><a href="pluralsight.html">Pluralsight</h4></a>
<h4><a href="Degreed.html" >Degreed</h4></a> 
<h4><a href="ABAP.html" >ABAP</h4></a> 
<h4><a href="w3Schools.html" >W3Schools, YouTube</h4></a>
<h4><a href="amigos.html"style="color: yellow;" >SQL AMIGOS</a></h4>
<h4><a href="sql.html" >SQL</a></h4>
<!-- </fieldset> -->
<!-- </div> -->
<!-- </div> -->
<!-- <br> -->

<!-- <div class="col-4 col-12-medium"> -->
<!-- <fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px;"> -->
<!-- <legend style="font-size: 2rem">Learning</legend> -->
<h4><a href="jira.html" >JIRA</a></h4>
<h4><a href="talkclub.html" style="color: yellow;">Talk Club</a></h4>
<h4><a href="feedback.html" style="color: yellow;" >Feedback</a></h4>
<h4><a href="DA.html">DA Meeting</a></h4>
<h4><a href="newsletter.html"style="color: yellow;">TDP Newsletter</a></h4>
<h4><a href="friday.html" style="color: yellow;">Friday Catch up</a></h4>
</div>
</fieldset>

<!-- <br> -->

<!-- <h3>Experience</h3> -->
<div class="col-6 col-12-small">
<fieldset style="border: 5pt; border-color: black; border-style: solid; padding: 10px; ">
<legend style="font-size: 2rem">Activities</legend>
<h4><a href="FCA.html">FCA DATA Request</a></h4>
<h4><a href="cardms.html">CARDS POC</a></h4>
<h4><a href="performance.html">Performance Testing</a></h4>
<h4><a href="emsi.html">EMSI API</a> </h4>
<h4><a href="hackathon.html" >Hackathon</a></h4>
<h4><a href="academy.html" >QA Academy</a></h4>
<h4><a href="project.html" >Personal Project</a></h4>
</fieldset>
</div>
</div>		


<!-- </nav>										   -->

                     </div> 
                    
                 </section> 

        </div>

<!-- Footer -->
        <footer id="footer">
            <div class="inner">
                <ul class="copyright">
                    <li>&copy; Jaye Peacey</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>

</div>`;
    body.innerHTML = script;

}
// -----------------------------
