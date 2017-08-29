<html>

<head>
    <!-- Styles -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
    <link href = "css/main.css" rel = "stylesheet">
</head>

<body>
    <div class = "container">
        <?php
            if ($_POST['value'] == 7){
                echo 'You win GRATZ GG';
            }
            else{
                echo '<div><div>50 32 53 32 54 32 57 32 63 32 53 48</div><form action = "#" method = "post"><div><input name = "value"></div><div><button>Submit</button></div></form></div>';
            }
        ?>
    </div>
</body>

</html>