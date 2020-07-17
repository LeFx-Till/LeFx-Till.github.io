<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Upload your files</title>
</head>
<body>
  <form enctype="multipart/form-data" action="upload.php" method="POST">
    <p>Upload your file</p>
    <input type="file" name="uploaded_file"></input><br />
    <input type="submit" value="Upload"></input>
  </form>
</body>
</html>
<?PHP
  if(!empty($_FILES['uploaded_file']))
  {
    $path = getcwd().'/';
    $path = $path . basename( $_FILES['uploaded_file']['name']);
    echo "<br>Uplod path: " .$path;
    echo "<br>Temp name: " .$_FILES['uploaded_file']['tmp_name'];
    echo "<br>Error: " .$_FILES['uploaded_file']["error"];

    if(move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $path)) {
      echo  "<br>The file "
            .basename( $_FILES['uploaded_file']['name'])
            ." has been uploaded";
    } else{
        echo "<br>There was an error uploading the file, please try again!";
    }
  }
?>