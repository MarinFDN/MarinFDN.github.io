<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link rel="stylesheet" href="css/styleform.css">
    <title>Formulaire de contact</title>
  </head>

  <body>

    <div class="C1">
      <div class="C3">
        <?php
         $nom=$_POST['nom'];
         $horaire=$_POST['horaire'];
         $date=$_POST['date'];
         $nombre=$_POST['nombre'];
         $email=$_POST['email'];
         $msg=$_POST['msg'];
     
         $condb = new mysqli('localhost:3306', 'marin', 'admin', 'mister_cuisto');
      
        
         if($condb->connect_error){

          die('Connection Failed :'.$condb->connect_error); 
          } 
      
        else{
     
         $tampon = $condb->prepare ("insert into contact(nom, horaire, date, nombre, email, msg) values('$nom', '$horaire', '$date', '$nombre', '$email', '$msg')");
         $tampon->execute();
         $tampon->close();
         $condb->close();   

          echo 'Merci ' . $nom . ' pour votre réservation !<br>Nous vous attendons le ' . $horaire . ', du ' . $date . ', pour une table de ' . $nombre . ' personnes.';
        } 

      ?>
      </br>
      <button onclick="window.close()" class="quit">Quitter</button>
    </div>
  </div>
  </body>
</html>