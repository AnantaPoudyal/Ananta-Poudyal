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
        <div class="table-container">
            <!-- Optionally, you can print the raw data for debugging -->


            <!-- Table to display the project data -->
            <table class="table table-bordered table-striped fixed-table">
                <thead>
                    <tr>
                        <!-- Iterate through the first row (to get column names) and display as headers -->
                        <th>Project_id</th> <!-- Display column name with proper capitalization -->
                        <th>Project_name</th> <!-- Display column name with proper capitalization -->
                        <th>Technologies_used</th> <!-- Display column name with proper capitalization -->
                        <th>Description</th> <!-- Display column name with proper capitalization -->
                    </tr>
                </thead>
                <tbody>
                    <!-- Iterate through the rest of the rows and display the values -->
                    <tr>
                        <td>1</td>
                        <td>Online Food Ordering System</td>
                        <td>ASP.NET, MySQL</td>
                        <td>Developed with ASP.NET and MySQL. Designed and implemented a backend platform for food ordering with features for user authentication and order processing. Utilized MySQL to manage and store user data and order history.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Online Clothing Recommendation System</td>
                        <td>Django, MySQL</td>
                        <td>Created a backend recommendation system for clothing. Managed user and product data with MySQL.</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Client-Server File Transfer Application</td>
                        <td>Java, Swing</td>
                        <td>Developed a Java-based application using Swing for GUI. Enabled the client to select and transfer a text file to the server. The server receives the file and saves its contents. Implemented Java Sockets for network communication between the client and server. Utilized file handling techniques to send and receive text files.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>