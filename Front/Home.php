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
  <section id="head_page">
    <div id="transparent-black-header-border-up"></div>
    <div id="right-side-of-header">
      <img id="head-img" src="../Slike/Ozadje/main.jpg" alt="Ozadje-naslovnice">
    </div>
    <div id="left-side-of-header">
      <div id="transparent-black-header-border-around">
          <div id="transparent-black-header-border">
            <h1>Trgovina Tara</h1>
            <a href="Store.php" class="button">Shop now!</a>
            <p id="header-text">For the modern woman who wants to feel confident and comfortable. Express your unique style with our stylish clothes. Dressing well doesn't have to be hard – find what you love at our store. You're worth it: shop our collection and feel great about your look.</p>
          </div>
      </div>
    </div>
  </section>
  <main>
    <section id="main_section">
      <img id="image_id" src="../Slike/Ozadje/sub_main_img.jpg" alt="">
      <div id="square"></div>
      <div id="main_text_header">ABOUS US</div>
      <div id="main_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam maiores quidem delectus asperiores Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam in voluptas mollitia nemo similique! Ullam illum distinctio veritatis ex perferendis amet incidunt tempora dolorem praesentium esse eos, ut quia voluptate. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ab odit suscipit qui corporis beatae nobis mollitia totam distinctio, quibusdam maiores molestiae voluptates, optio et dolores dicta sequi, enim iste! laudantium qui commodi laborum similique sint? Nihil, quod nesciunt reiciendis aspernatur magnam facilis nulla praesentium. Doloremque, obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque vel laborum veritatis aliquid, quisquam totam neque fugit quibusdam et? Error reprehenderit delectus autem qui nemo nobis ducimus, quibusdam esse.</div>
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
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script></body>
</html>