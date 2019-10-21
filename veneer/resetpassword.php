<?php

  $email=$_REQUEST['email'];
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8" />	
	<meta name="viewport" content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;"/>
    <link rel="apple-touch-icon" sizes="76x76" href="new_theme/assets/img/apple-icon.png />
    <link rel="icon" type="image/png" href="new_theme/assets/img/favicon.png />
    <!-- Canonical SEO -->
    <link rel="canonical" href="//www.creative-tim.com/product/material-dashboard-pro" />
    <!--  Social tags      -->
    <!-- Bootstrap core CSS     -->
    <link href="new_theme/assets/css/bootstrap.min.css" rel="stylesheet" />
    <!--  Material Dashboard CSS    -->
    <link href="new_theme/assets/css/material-dashboard.css" rel="stylesheet" />
    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="new_theme/assets/css/demo.css" rel="stylesheet" />
    <!--     Fonts and icons     -->
    <link href="new_theme/assets/css/font-awesome.css" rel="stylesheet" />
    <link href="new_theme/assets/css/google-roboto-300-700.css" rel="stylesheet" />
</head>

<body>
    <nav class="navbar navbar-primary navbar-transparent navbar-absolute">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="wrapper wrapper-full-page">
        <div class="full-page login-page" filter-color="black" data-image="new_theme/assets/img/login.jpg">
            <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                              <form method="post" action="resetpassword_success.php">
                                <div class="card card-login card-hidden">
                                    <div class="card-header text-center" data-background-color="rose">
									    <h3 class="card-title" style="line-height:3px">Reset Password<h3>
                                        <h4 ></h4>
                                    </div>
                                    
                                    <div class="card-content">
											<div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">lock_outline</i>
                                            </span>
                                            <div class="form-group label-floating">
                                                <input type="password" name="password" id="password" class="form-control" placeholder="New Password">
                                                <input type="hidden" name="email" id="email" class="form-control" value="<?php echo $email; ?>">
                                            </div>
											</div>
											<div class="input-group">
                                            <span class="input-group-addon">
                                                <i class="material-icons">lock_outline</i>
                                            </span>
                                            <div class="form-group label-floating">
                                                <label class="control-label"></label>
                                                <input type="password" name="c_password" id="c_password" class="form-control" placeholder="Confirm New Password" onChange="isPasswordMatch();" >
                                            </div>
											<div id="divCheckPassword"></div>
											</div>
                                    <div class="footer text-center">
                                        <button type="submit" id="submit_btn" class="btn btn-rose btn-simple btn-wd btn-lg">Update Password</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</body>
<!--   Core JS Files   -->
<script src="new_theme/assets/js/jquery-3.1.1.min.js" type="text/javascript"></script>
<script src="new_theme/assets/js/jquery-ui.min.js" type="text/javascript"></script>
<script src="new_theme/assets/js/bootstrap.min.js" type="text/javascript"></script>
<script src="new_theme/assets/js/material.min.js" type="text/javascript"></script>
<script src="new_theme/assets/js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
<!-- Forms Validations Plugin -->
<script src="new_theme/assets/js/jquery.validate.min.js"></script>
<!--  Plugin for Date Time Picker and Full Calendar Plugin-->
<script src="new_theme/assets/js/moment.min.js"></script>
<!--  Charts Plugin -->
<script src="new_theme/assets/js/chartist.min.js"></script>
<!--  Plugin for the Wizard -->
<script src="new_theme/assets/js/jquery.bootstrap-wizard.js"></script>
<!--  Notifications Plugin    -->
<script src="new_theme/assets/js/bootstrap-notify.js"></script>
<!--   Sharrre Library    -->
<script src="new_theme/assets/js/jquery.sharrre.js"></script>
<!-- DateTimePicker Plugin -->
<script src="new_theme/assets/js/bootstrap-datetimepicker.js"></script>
<!-- Vector Map plugin -->
<script src="new_theme/assets/js/jquery-jvectormap.js"></script>
<!-- Sliders Plugin -->
<script src="new_theme/assets/js/nouislider.min.js"></script>
<!--  Google Maps Plugin    -->
<!--<script src="https://maps.googleapis.com/maps/api/js"></script>-->
<!-- Select Plugin -->
<script src="new_theme/assets/js/jquery.select-bootstrap.js"></script>
<!--  DataTables.net Plugin    -->
<script src="new_theme/assets/js/jquery.datatables.js"></script>
<!-- Sweet Alert 2 plugin -->
<script src="new_theme/assets/js/sweetalert2.js"></script>
<!--	Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
<script src="new_theme/assets/js/jasny-bootstrap.min.js"></script>
<!--  Full Calendar Plugin    -->
<script src="new_theme/assets/js/fullcalendar.min.js"></script>
<!-- TagsInput Plugin -->
<script src="new_theme/assets/js/jquery.tagsinput.js"></script>
<!-- Material Dashboard javascript methods -->
<script src="new_theme/assets/js/material-dashboard.js"></script>
<!-- Material Dashboard DEMO methods, don't include it in your project! -->
<script src="new_theme/assets/js/demo.js"></script>
<script type="text/javascript">
    $().ready(function() {
        demo.checkFullPageBackgroundImage();

        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    });
</script>
 <script type="text/javascript" src="//code.jquery.com/jquery-2.0.2.js"></script>
 
  <script type="text/javascript">//<![CDATA[

    $(window).load(function(){
   	var tabPom = document.getElementById("submit_btn");
	$(tabPom ).prop('disabled', true);   
function isPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#c_password").val();

    if (password != confirmPassword) 
	{	
	$("#divCheckPassword").html("Passwords do not match!");
	var tabPom = document.getElementById("submit_btn");
	$(tabPom ).prop('disabled', true);
	}
    else 
	{
		$("#divCheckPassword").html("Passwords matched.");
		var tabPom = document.getElementById("submit_btn");
		$(tabPom ).prop('disabled', false);
	}
}

$(document).ready(function () {
    $("#c_password").keyup(isPasswordMatch);
});

    });

  //]]></script>

</html>