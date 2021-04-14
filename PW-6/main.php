<?php 

$title = $_POST['title'];
$content = $_POST['content'];

mysqli_report( MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT );
$connection = mysqli_connect('localhost', 'root1', 'root1', 'ajax');
if(!$connection){
    die("Error: No connection with MySQL.");
}

$connection->query("INSERT INTO `posts` (`title`, `content`) VALUES ('$title', '$content') ");
$connection->close();

echo("<script>location.href = '"."/index.html?msg=$msg';</script>");

?>
