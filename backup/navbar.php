 <!-- Navbar Section -->
 <link rel="stylesheet" href="css/styles.css">
<style type="text/css">
    
/* Navbar styling */
.navbar {
    background-color: #007bff;
    width: 100%;
}

.navbar-brand .logo {
    height: 50px;
    border: none;
}

.navbar-nav .nav-link {
    color: white !important;
    font-size: 16px;
    margin-left: 20px;
}

.navbar-nav .nav-link:hover {
    color: #ffd700 !important;
    text-decoration: underline;
}
/* Time paragraph styling */
#time_p {
    display: block;
    color: red;
    font-size: 17px;
    margin-bottom: 10px;
    padding: 2px;
    background-color: lightblue;
    text-align: right;
}   
</style>
 <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="images/Logo.jpg" alt="Logo" class="logo"height="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                                            <li class="nav-item">
                            <a class="nav-link" href="index.php">Home</a>
                        </li>
                                            <li class="nav-item">
                            <a class="nav-link" href="about.php">About</a>
                        </li>
                                            <li class="nav-item">
                            <a class="nav-link" href="contact.php">Contact</a>
                        </li>
                                            <li class="nav-item">
                            <a class="nav-link" href="projects.php">Projects</a>
                        </li>
                      
                                    </ul>
            </div>
        </div>
    </nav>
    <div id="time_display_div">
        <p id="time_p"></p>
    </div>

<script src="js/time.js"></script>
