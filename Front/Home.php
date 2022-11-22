<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="..\CSS\Home.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <title>Home</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
</head>
<body>
  <header>
    <nav>
      <a class="link" href="Store.php">Store</a>
      <a class="link" href="Account.php">Account</a>
      <a class="link" href="Account.php">Contact</a>
      <a class="link" href="Account.php">About us</a>
    </nav>
  </header> 
    <section>
    <div class="main_header">
    <div id="blackbar"></div>
        <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <img class="slider_img" src="../Slike/Ozadje/main.jpg" alt="main_image">
          <img class="slider_img" src="../Slike/Ozadje/main.jpg" alt="main_image">
          <img class="slider_img" src="../Slike/Ozadje/sub_main_img.jpg" alt="sub_main_image">
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      
        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      
        <!-- If we need scrollbar -->
        <div class="swiper-scrollbar"></div>
      </div>
  </section>
  <main>
    <section id="main_section">
      
    </section>
    <section id="sub_section"> 
      <div id="sub_section_left">
      <h1 id="contact_header">CONTACT</h1>
          <div id="contact_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa possimus reiciendis molestias incidunt, ipsa amet commodi inventore dolorum suscipit nihil quas, cum tenetur nostrum porro, architecto minima nobis tempora. Tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum numquam aliquid recusandae commodi quos optio voluptatum quo perspiciatis saepe iste quis aspernatur ut cumque molestiae et distinctio, illum ab dolor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio cupiditate animi cum numquam, beatae nihil, architecto, dolore libero reprehenderit suscipit explicabo magnam sint ipsam fuga maiores quas illum commodi rerum!</div>
      </div>
      <div id="sub_section_right">
      <div class="ozadje">
        <div class="form-ozadje">
            <div class="header_sub">FORM</div>
            <form method="POST">
                <label class="label_position" for="n">Name</label></br>
                <input class="input_looks" type="text" name="username" id="n"></br></br>
                <label class="label_position" for="s">Surname</label></br>
                <input class="input_looks" type="text" name="surname" id="s"></br></br>
                <label class="label_position" for="u">Username</label></br>
                <input class="input_looks" type="text" name="username" id="u"></br></br>
                <label  class="label_position" for="e">E-mail</label></br>
                <input class="input_looks" type="email" name="e-mail" id="e"></br></br>
                <input class="done" type="submit" value="submit";></br></br>
            </form>
        </div>
    </div>
      </div>
    </section>
  </main>
  <footer>

  </footer>
  <script>
    const swiper = new Swiper('.swiper', {
        loop: true      ,
        pagination: {
          el: '.swiper-pagination',
        }     ,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }     ,
      });
  </script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script></body>
</html>