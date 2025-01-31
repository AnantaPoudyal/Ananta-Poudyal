
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ananta Poudyal</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <link rel="stylesheet" href="css/styles.css">

</head>
<body>
<?php 
   include "navbar.php";
   ?>
    <!-- Main Content Section -->
    <div class="container">
            <div class="about-container">
                <div class="about-section">
            <h1 class="about-title">about me</h1>
            <p class="about-detail">I am a Computer Applications student with experience building web applications using frameworks such as ASP.NET and Django. I have a good understanding of languages like core Java, C#, PHP, as well as related topics like Servlets, JSP, and Networking with java. I have also interested in Android Development using Java. 
I have experience working with MySQL and integrating it with various frameworks, including Django, ASP.NET, PHP, and Java (via JDBC). I like creating my own logic for solving programmatic problems. I also have understanding of client-server architecture and network programming.</p> <!-- Converts newlines to <br> -->
        </div>
            </div>

    

    <div class="skill-container">
        <h2 class="skill-title">Skills Table</h2>
        <table id="skillsTable" border="1" class="table table-striped">
            <thead>
                <tr>
                    <!-- Add sorting functionality to each header -->
                                            <th class="sortable" data-sort="skill_id" style="cursor: pointer">skill_id</th>
                                            <th class="sortable" data-sort="name" style="cursor: pointer">name</th>
                                            <th class="sortable" data-sort="rating" style="cursor: pointer">rating</th>
                                            <th class="sortable" data-sort="skill_category_name" style="cursor: pointer">skill_category_name</th>
                                    </tr>
            </thead>
            <tbody>
                                    <tr>
                        <td>13</td>
                        <td>Android Studio (Java)</td>
                        <td class="skill-rating" data-rating="2">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        2/5
                        </td>

                        <td>Mobile Development</td>
                    </tr>
                                    <tr>
                        <td>10</td>
                        <td>ASP.NET</td>
                        <td class="skill-rating" data-rating="3">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        3/5
                        </td>

                        <td>Frameworks &amp; Libraries</td>
                    </tr>
                                    <tr>
                        <td>1</td>
                        <td>C</td>
                        <td class="skill-rating" data-rating="2.5">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Half star -->
                                    <span class="star half"><i class="fas fa-star-half-alt"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        2.5/5
                        </td>

                        <td>Programming Languages</td>
                    </tr>
                                    <tr>
                        <td>2</td>
                        <td>C#</td>
                        <td class="skill-rating" data-rating="2.75">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Half star -->
                                    <span class="star half"><i class="fas fa-star-half-alt"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        2.75/5
                        </td>

                        <td>Programming Languages</td>
                    </tr>
                                    <tr>
                        <td>3</td>
                        <td>Core Java</td>
                        <td class="skill-rating" data-rating="3.5">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Half star -->
                                    <span class="star half"><i class="fas fa-star-half-alt"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        3.5/5
                        </td>

                        <td>Programming Languages</td>
                    </tr>
                                    <tr>
                        <td>11</td>
                        <td>Django (Basic)</td>
                        <td class="skill-rating" data-rating="2.75">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Half star -->
                                    <span class="star half"><i class="fas fa-star-half-alt"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        2.75/5
                        </td>

                        <td>Frameworks &amp; Libraries</td>
                    </tr>
                                    <tr>
                        <td>4</td>
                        <td>HTML/CSS</td>
                        <td class="skill-rating" data-rating="3">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        3/5
                        </td>

                        <td>Web Development</td>
                    </tr>
                                    <tr>
                        <td>5</td>
                        <td>JavaScript</td>
                        <td class="skill-rating" data-rating="2">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        2/5
                        </td>

                        <td>Web Development</td>
                    </tr>
                                    <tr>
                        <td>7</td>
                        <td>jQuery (Basic)</td>
                        <td class="skill-rating" data-rating="2">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        2/5
                        </td>

                        <td>Web Development</td>
                    </tr>
                                    <tr>
                        <td>8</td>
                        <td>JSP</td>
                        <td class="skill-rating" data-rating="3">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        3/5
                        </td>

                        <td>Web Development</td>
                    </tr>
                                    <tr>
                        <td>9</td>
                        <td>Laravel (Basic)</td>
                        <td class="skill-rating" data-rating="2.75">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Half star -->
                                    <span class="star half"><i class="fas fa-star-half-alt"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        2.75/5
                        </td>

                        <td>Frameworks &amp; Libraries</td>
                    </tr>
                                    <tr>
                        <td>12</td>
                        <td>MySQL</td>
                        <td class="skill-rating" data-rating="3">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        3/5
                        </td>

                        <td>Database Management</td>
                    </tr>
                                    <tr>
                        <td>6</td>
                        <td>PHP</td>
                        <td class="skill-rating" data-rating="2">
                            <!-- Loop through and display full, half, or empty stars based on the rating -->
                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Full star -->
                                    <span class="star filled"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                                                                <!-- Empty star -->
                                    <span class="star empty"><i class="fas fa-star"></i></span>
                                                                                        2/5
                        </td>

                        <td>Web Development</td>
                    </tr>
                            </tbody>
        </table>
    </div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript" src="js/skillTableSorting.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
