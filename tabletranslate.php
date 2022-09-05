<?php include('head.php'); ?>
<?php 
// require_once 'vendor/autoload.php';
ini_set('display_errors', 1);
error_reporting(E_ALL);
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "deepl";
$conn = new mysqli($servername, $username, $password, $dbname);

$tbl_data = mysqli_query($conn, "SELECT * FROM `json_translated_text_copy` where translated_lang='en-US' and filename='language'");
$language = "";
$file_name = "";
if(isset($_POST['submit'])) {
	$language = $_POST['language'];
	$file_name = $_POST['file_name'];
	$tbl_data = mysqli_query($conn, "SELECT * FROM `json_translated_text_copy` where translated_lang='".$language."' and filename='".$file_name."'");
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
				<label>Select Language</label>
				<select class="form-control" name="language">
					<option value="en-US" >English</option>
					<?php 	
					$language_result = mysqli_query($conn, "SELECT DISTINCT translated_lang, language_name FROM `json_translated_text_copy` where language_name != 'English' ORDER BY language_name;");
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
  		
		<table class="table table-bordered m-1" id="table_id">
		  <thead>
			<tr>
			  <th scope="col">Language</th>
			  <th scope="col">Key</th>
			  <th scope="col">Original Text</th>
			  <th scope="col">Translated value</th>
			</tr>
		  </thead>
		  <tbody>
		  <?php
				if(mysqli_num_rows($tbl_data) > 0){
					foreach($tbl_data as $result) { ?>
						<tr>
						  <td><?php echo $result['translated_lang'];?></td>
						  <td><?php echo $result['keyy'];?></td>
						  <td><?php echo $result['original_text'];?></td>
						  <td><textarea data-id="<?php echo $result['id'];?>" class="translated_text" id="w3review"  name="w3review" rows="1" cols="50"><?php echo $result['translated_text'];?></textarea></td>
						</tr>

				<?php	}
				}
			  ?>
		  </tbody>
		</table>
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
	$(document).ready( function () {
    $('#table_id').DataTable();
} );
	$( document ).ready(function() {

		$(".translated_text").blur(function(){
			var translated_text= $(this).val();
			var id= $(this).attr('data-id');
			//alert(id);
			$.ajax({
				  type: "POST",
				  url: "update_data.php",
				  data: { id: id, translated_text: translated_text},
				  success: function (result) {
					  
				  }
			 });
		});
	});
	
	
	
	</script>
<?php include('script.php'); ?>
