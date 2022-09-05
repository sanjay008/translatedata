<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "deepl";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$id=$_POST['id'];
$translated_text=$_POST['translated_text'];

if($id!='' && $translated_text!=""){
	
	$update="UPDATE json_translated_text SET translated_text='".$translated_text."' WHERE id='".$id."'";
	$res=mysqli_query($conn,$update);
	if($res){
		echo "done";
	}else{
		echo "not done";
	}
}

?>