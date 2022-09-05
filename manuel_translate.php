<?php include('head.php'); ?>
<?php require_once('deepl/vendor/autoload.php'); 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "deepl";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
?>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", Lalezar, cursive, sans-serif;
}



.container-box {
 /* max-width: 700px;*/
  width: 100%;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  /*box-shadow: 0px 0px 36px -5px #b8b8ff;*/
}

.wrapper {
  border-radius: 5px;
  border: 1px solid #ccc;
}

.wrapper .text-input {
  display: block;
}

.text-input .to-text {
  border-radius: 0px;
  border-top: 1px solid #ccc;
}

.text-input textarea {
  height: 250px;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  background: none;
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 0.3rem;
}

.text-input textarea::placeholder {
  color: #b7b6b6;
}

.controls{
  display: flex;
  align-items: center;
  justify-content: center;
}

.controls {
  list-style: none;
  padding: 12px 15px;
  border-top: 1px solid #ccc;
}


.controls .row select {
  color: #333;
  border: none;
  text-align:center;
  outline: none;
  width:100%;
  font-size: 18px;
  background: none;
  padding-left: 5px;
}
.text-input textarea::-webkit-scrollbar {
  width: 4px;
}
.controls .row select::-webkit-scrollbar {
  width: 8px;
}
.text-input textarea::-webkit-scrollbar-track,
.controls .row select::-webkit-scrollbar-track {
  background: #fff;
}
.text-input textarea::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 8px;
}
.controls .row select::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 8px;
  border-right: 2px solid #ffffff;
}
.controls .exchange {
  color: #adadad;
  cursor: pointer;
  font-size: 1.7rem;
  transition: transform 0.2s ease;
}
.controls ion-icon:active {
  transform: scale(0.9);
}
.container-box button {
  width: 100%;
  padding: 14px;
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  background: #6320ee;
}


</style>

<div class="wrapper">
  <!-- Navbar -->
  <?php include('navbar.php'); ?>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <?php include('sidebar.php'); ?>

  <!-- Content Wrapper. Contains page content -->
  
<div class="content-wrapper">

  <div class="container">
	<?php 
		$translated_Text = "";
		if(isset($_POST['submit'])){
			set_time_limit(2000000);
			$en_text=$_POST['en_text'];
			// $language = $_POST['language'];
			$language = "ES";
			$filename = "contactsDetails.ts";
			$fr_content_arr = [];
			$keywithchild = [];
			
			if($en_text != ""){
				$authKey = "24176da1-c534-4d0d-e543-05eb35bc62f2"; // Replace with your key
				$translator = new \DeepL\Translator($authKey);
				// // $result = $translator->translateText('Hello, world! How are you?', null, 'fr');
				// $result = $translator->translateText('Hello, world! How are you?', null, $language);
				// $translated_Text = $result->text; // Bonjour, le monde!
				
				$json = json_decode($en_text,true);
				
				
				foreach($json as $key => $defaultstr) {
					if(is_array($defaultstr)){
						foreach($defaultstr as $keychild => $str) {
						if(is_array($str)) {
							foreach($str as $stchild => $st) {
							if(is_array($st)) {
									foreach($st as $st1c => $string) {
										if(is_array($string)) {
												foreach($string as $stringchild => $stringL) {
																// echo $stringchild."=".$stringL."</br>";
													if($stringL!=""){
														$translated_text = $translator->translateText($stringL, null, 'ES');
														//$fr_content_arr[$stringchild] = $translated_text->text;
														$fr_content_arr[$key][$keychild][$stchild][$st1c][$stringchild] = $translated_text->text;
														$keywithchild[$key.".".$keychild.".".$stchild.".".$st1c.".".$stringchild]= $translated_text->text;
													}else {
														$fr_content_arr[$key][$keychild][$stchild][$st1c][$stringchild] = "";
													}
												}
										}else{
											// echo $st1c."=".$string."</br>";
											if($string!=""){
												$translated_text = $translator->translateText($string, null, 'ES');
												$fr_content_arr[$key][$keychild][$stchild][$st1c] = $translated_text->text;
												$keywithchild[$key.".".$keychild.".".$stchild.".".$st1c]= $translated_text->text;
											}else {
												$fr_content_arr[$key][$keychild][$stchild][$st1c] = "";
											}
										}

									}
							}else{
								// echo $stchild."=".$st."</br>";
								if($st!=""){
									$translated_text = $translator->translateText($st, null, 'ES');
									$fr_content_arr[$key][$keychild][$stchild] = $translated_text->text;
									$keywithchild[$key.".".$keychild.".".$stchild]= $translated_text->text;
								}else {
									$fr_content_arr[$key][$keychild][$stchild] = "";
								}
							}

							}
						} else {
							// echo $keychild."=".$str."<br>";
							if($str!=""){
								$translated_text = $translator->translateText($str, null, 'ES');
								$fr_content_arr[$key][$keychild] = $translated_text->text;
								$keywithchild[$key.".".$keychild]= $translated_text->text;

							}else {
								$fr_content_arr[$key][$keychild] = "";
							}	
						}			
						}
					}else{
						if($defaultstr!=""){
							$translated_text = $translator->translateText($defaultstr, null, 'ES');
							$fr_content_arr[$key] = $translated_text->text;
							$keywithchild[$key]= $translated_text->text;
						}else {
							$fr_content_arr[$key] = "";
						}
					}
				}
				
				$options = JSON_UNESCAPED_UNICODE;
				$options |= JSON_PRETTY_PRINT;
				$translated_Text = json_encode($fr_content_arr, $options);
			}

							//    print_r($keywithchild);
			foreach($keywithchild as $keyy=>$tra_str) {								
								if($language=="ES"){
									$language=="es";
									$language_name="Spanis";
									
								}
								
								$sql="INSERT INTO `json_translated_text`(`keyy`, `language_name`, `translated_lang`, `translated_text`, `filename`) VALUES ('".$keyy."','".$language_name."','es','".$tra_str."','".$filename."')";
								
								echo '</br>'.$sql;
								
								$result=mysqli_query($conn,$sql);
								if($result){
											echo "done";

								}else{ echo "Not done";
								}
								
								
				
			}


		}
	   
	?>

			<div class="row">
			<div class="container-box m-1">
				<div>
				<form id="hours" action="" method="post">

					<div class="wrapper">
					  <div class="text-input">
						<textarea spellcheck="false" class="from-text" name="en_text" id="en_text" placeholder="Enter text" required></textarea>
						<div class="controls">
								<div class="row from" style="width:50%;">
									<select name="language">
										<option value="ES">spanis</option>
										<option value="FR">France</option>
										<option value="EN">English</option>
									</select>
								</div>
								  
						</div>
						<textarea spellcheck="false" class="to-text" placeholder="Translation"><?php echo $translated_Text; ?></textarea>
					  </div>
					</div>
				   <button type="submit" name="submit" id="submit" class="mt-2" >Translate it</button>
				   <?php

				?>
				</form>	
				</div>
			</div>
			</div>
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
<?php include('script.php'); ?>



