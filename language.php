<?php include('head.php'); ?>
<?php require_once('deepl/vendor/autoload.php'); ?>
<?php 
ini_set('display_errors', 1);
error_reporting(E_ALL);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "deepl";
$conn = new mysqli($servername, $username, $password, $dbname);


$language = "";
$file_name = "";
if(isset($_POST['submit'])) {
	$authKey = "24176da1-c534-4d0d-e543-05eb35bc62f2"; // Replace with your key
	$translator = new \DeepL\Translator($authKey);
	$language = $_POST['language'];
	$file_name = $_POST['file_name'];
	$english_data = mysqli_query($conn, "SELECT * FROM `json_translated_text_copy` where translated_lang='en-US' and filename='".$file_name."'");
	
	if($language == 'es') {
		$language_name = "Spanis";
	}else if($language == 'fr'){
		$language_name = "France";
	}else if($language == 'zh'){
		$language_name = "Chinese";
	}else if($language == 'pt-BR'){
		$language_name = "Portugese-Brazil";
	}else if($language == 'en-US'){
		$language_name = "English";
	}
	
	if(mysqli_num_rows($english_data) > 0){
		foreach($english_data as $row) {
			$check_data = mysqli_query($conn, "SELECT * FROM `json_translated_text_copy` where translated_lang='".$language."' AND keyy='".$row['keyy']."' and filename='".$file_name."'");
			if(mysqli_num_rows($check_data) <= 0){
				if(!empty($row['original_text'])){
					$result = $translator->translateText($row['original_text'], null, $language);
					$translated_Text = $result->text;
				}else{
					$translated_Text = "";
				}
				$sql="INSERT INTO `json_translated_text_copy`(`keyy`, `language_name`, `translated_lang`, `original_text`, `translated_text`, `filename`) VALUES ('".$row['keyy']."','".$language_name."','".$language."', '".addslashes($row['original_text'])."','".addslashes($translated_Text)."','".$file_name."')";
				//echo $sql;
				// exit();
				$result=mysqli_query($conn,$sql);
			}
		}
	}
	
	
	
	//generate translated file
	
	//1. Get file from english folder
	//2. Get content from file
		
	$file = file_get_contents('./en-US/'.$file_name);
	// print_r($file);
	
	//3. Create array from database where key = original text and value = translated text
	
	$sql = "SELECT * from `json_translated_text_copy` WHERE translated_lang = '".$language."' AND filename='".$file_name."'";
	$result = mysqli_query($conn,$sql);
	if(mysqli_num_rows($result) > 0){
	
	$replaceTextArray = [];
	
		foreach($result as $translated_text_data){
			// print_r($translated_text_data);
			// echo "<br/>";
			$replaceTextArray[$translated_text_data['original_text']] = $translated_text_data['translated_text'];
		}
	}
	// print_r($replaceTextArray);
	
	//4. replace text
	$replaced_string = str_replace(
	  array_keys($replaceTextArray), 
	  array_values($replaceTextArray), 
	  $file
	);
	//5. save file with same name in language folder
	
	file_put_contents('./pt-BR/'.$file_name, $replaced_string);
}
?>
<div class="wrapper">
  <!-- Navbar -->
  <?php include('navbar.php'); ?>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <?php include('sidebar.php'); ?>

  <!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <div class="container">
		<form method="POST">
		<div class="row py-4">
			<div class="col-md-6">
				<label>Select Language2</label>
				<select class="form-control" name="language">
					<?php 	
					$language_result = mysqli_query($conn, "SELECT DISTINCT translated_lang, language_name FROM `json_translated_text_copy`;");
					if(mysqli_num_rows($language_result) > 0){
						foreach($language_result as $row) {
							
					?>
						<option value="<?php echo $row['translated_lang']; ?>" <?php echo ($language == $row['translated_lang'] ? "selected": ""); ?> ><?php echo $row['language_name']; ?></option>
					<?php 
						}
					}
					?>
				</select>
			</div>
			<div class="col-md-6">
				<label>Select File Name</label>
				<select class="form-control" name="file_name">
					<?php
					$fileName_result = mysqli_query($conn, "SELECT DISTINCT filename FROM `json_translated_text_copy`;");
					
					if(mysqli_num_rows($fileName_result) > 0){
						foreach($fileName_result as $row) {
					?>
						<option value="<?php echo $row['filename']; ?>" <?php echo ($file_name == $row['filename'] ? "selected": ""); ?>><?php echo $row['filename']; ?></option>
					<?php 
						}
					}
					?>
				</select>
			</div>
			<div class="col-md-4 mt-4">
				<button type="submit" name="submit" class="btn btn-primary">Submit</button>
			</div>
		</div>	
		</form>
</div>
    
  



</div>
  <!-- /.content-wrapper -->
  <?php include('footer.php'); ?>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->
<script>
	
	$( document ).ready(function() {

		
	});
	
	
	
	</script>
<?php include('script.php'); ?>
