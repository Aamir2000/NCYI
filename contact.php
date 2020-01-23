<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Courses || The National Council Of Ymca's Of India</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/contact.css">
</head>
<body>
    <div class="Nav">
        <a href="index.html"><i class="fa fa-home home_icon"></i></a>
        <img class="ymca_logo" src="./Assets/svg/logo.svg" alt="YMCA's Logo">
        <div class="list_wrapper menu_icon">
            <img class="menu_icon menu_botton" src="./Assets/svg/menu.svg" alt="Menu">
            <ul id="list_wrap">
                <li><a href="./index.php">Home</a></li>
                <li class="dropdown">
                    <span class="drop_name">Activities <i class="fa fa-sort-down"></i></span>
                    <ul>
                        <li><a href="#">Students</a></li>
                        <li><a href="#">Agenda</a></li>
                        <li><a href="#">Notices</a></li>
                        <li><a href="#">Events</a></li>
                    </ul>
                </li>
                <li ><a href="./courses.php">Courses</a></li>
                <li class="active"><a href="./contact.php">Contact Us</a></li>
            </ul>
        </div>
    </div>
    <div class="Banner">
        <div class="overlay">
            <h2>Empowering Youth</h2>
            <p>The National Council Of YMCA's Of India</p>
            <button id="Read_M">Read More</button>
        </div>
    </div>
    <div class="read_more">
        <div class="read_more_wrapper">
            <div class="top_read">
                <h2>About Us</h2>
                <i class="fa fa-times"></i>
            </div>
            <div class="read_content">
                The National Council Of YMCA's Of India has always been working harder to improve the way students learn and get to know new idea's. Our Teachers are some of the best in class out there with years of experience in different fields like Information Technology, English, Aviation and Tourism, Office Management. If you wanna check out a list of all the courses offered in YMCA with their respective prices then <ph>Click Here</ph>
                or you can reach us directly through our contact page and send us queries you have and also you can <ph>call us on : 011-23364309</ph>
            </div>
        </div>
    </div>

    <div class="contact_form">
        <div class="contact_form_wrapper">
            <h2>Contact Us</h2>
            <p>You can contact us or send us any queries about any courses or anything related to out institute and we'll definately respond back within 1 - 2 working days</p>
            <form action="#" method="post">
                <label for="full_name">Name</label> <br>
                <input id="full_name" type="text" name="Full_Name" placeholder="Full Name"><br>
                <label for="email">Email</label><br>
                <input id="email" type="email" name="Email" placeholder="Email"><br>
                <label for="phone">Phone Number</label><br>
                <input id="phone" type="tel" name="Phone" maxlength=10 placeholder="Phone Number"><br>
                <label for="mess_con">Message</label><br>
                <textarea name="Message" id="mess_con" cols="30" rows="10" placeholder="Enter Your Queries Here.." resizeable="no"></textarea><br>
                <input id="submit" type="submit" value="Submit">
                <input id="reset" type="reset" value="Clear">
            </form>
        </div>
    </div>
    <div class="end">
        <span>
            <h3>Learn More About Us :</h3>
            <ul>
                <li><a href="./index.php">Home</a></li>
                <li><a href="./index.php">About Us</a></li>
                <li><a href="./index.php">Contact Us</a></li>
                <li><a href="./index.php">Courses</a></li>
            </ul>
        </span>
        <img src="./Assets/svg/logo.svg" alt="Logo">
        <p>
            Copyright Of NCYI ®
        </p>
    </div>
</body>
<footer>
    <script src="./jquery-3.4.1.js"></script>
    <script src="./Javascript/contact.js"></script>
</footer>
</html>
