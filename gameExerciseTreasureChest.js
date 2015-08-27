<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Widget Mockup</title>

    <!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

	<!--My CSS file with customization-->
	<link rel="stylesheet" type="text/css" href="widgetmockup.css">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

	<!--font awesome-->
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class = "container-fluid">
      <div class="container">
      <div class="row center-block">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <p>Assorted Vegetables (1 lb)</p>
          <form>
            <div class = "form-group">
              <img src="vegetables.jpg" class="img-responsive center-block" alt="Responsive image">
            </div>
              <div class="border form-inline">
                <div class="pull-left">
                  <p class="price">$1.00</p>
                  <span class="hidden subtotal pull-left">($x.00 Total)</span>
                </div>
                <div class="center-block pull-right">
                  <label>Qty:</label>
                  <select class="form-control input-lg">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                  <button type="button" class="btn btn-success btn-block">
                    <span class= "glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                     ADD TO CART</button>
              </div>
          </form>
        </div>
      <!--new column starts here-->
        <div class="col-xs-12 col-sm-4 col-md-4">
          <p>Raspberries (1 lb)</p>
            <form>
              <div class = "form-group">
               <img src="raspberry.jpg" class="img-responsive center-block" alt="Responsive image">
              </div>
              <div class="border form-inline">
                <div class="pull-left">
                <p class="price">$1.00</p>
                <span class="hidden subtotal">($x.00 Total)</span>
              </div>
              <div class="center-block pull-right">
                  <label>Qty:</label>
                  <select class="form-control input-lg">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <button type="button" class="btn btn-success btn-block"><span class= "glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> ADD TO CART</button>
              </div>
          </form>
        </div>

        <div class="col-xs-12 col-sm-4 col-md-4">
          <p>1 Fresh Kiwi (1 lb)</p>
          <form>
          <div class = "form-group">
            <img src="kiwi.jpg" class="img-responsive center-block" alt="Responsive image">
          </div>
          <div class="border form-inline">
            <div class="pull-left">
              <p class="price">$1.00</p>
              <span class="hidden subtotal">($subtotalVal.00 Total)</span>
            </div>

            <div class="center-block pull-right">
                <label>Qty:</label>
                <select class="form-control input-lg">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
            </div>

            <button type="button" class="btn btn-success btn-block"><span class= "glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> ADD TO CART</button>
          </div>
         </form>
       </div>

      </div>
    </div>
    </div>
	 <!-- jQuery (necessary for Bootstrap's JavaScript plugins)-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <!-- My JavaScript file that enables click functionality-->
	<script src="widgetmockup.js"></script>

  </body>
</html>
