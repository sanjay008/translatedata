<?php 
// ini_set('display_errors', 1);
// error_reporting(E_ALL);
//Command For run this file
// php translate.php language

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "deepl";
$conn = new mysqli($servername, $username, $password, $dbname);


$language = "";
$file_name = "";
//if(isset($_POST['submit'])) {

	//$language = $_POST['language'];
	//$file_name = $_POST['file_name'];
	
if (isset($argc)) {
	for ($i = 0; $i < $argc; $i++) {
		// echo $argv[$i] . "\n";
		$language=$argv[$i];
	}
}
else {
	echo "argc and argv disabled\n";
}	
// error_reporting(0);
	echo $language;
	// $file_name="hello.txt";
	// $replaced_string="data";

// exit();	
	
	// $language = 'fr';
	
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
	
	//Loop of multiple files Start
	$sql = "SELECT DISTINCT(filename) FROM `json_translated_text_copy` WHERE translated_lang = 'en-US' ";
	$all_files = mysqli_query($conn,$sql);
	$i=0;

	while($rowfile = mysqli_fetch_assoc($all_files)){
		$file_name = $rowfile['filename'];
			if($file_name != "" and $file_name != "language" ){
						$i++;

						echo $i.'-->'.$file_name."\r\n";
						// exit();

				//generate translated file
				
				//1. Get file from english folder
				//2. Get content from file
					
				$file = file_get_contents('en-US/'.$file_name);
				// print_r($file);
				
				//3. Create array from database where key = original text and value = translated text
				
				$sql = "SELECT * from `json_translated_text_copy` WHERE translated_lang = '".$language."' AND filename='".$file_name."'";
				$result = mysqli_query($conn,$sql);
				if(mysqli_num_rows($result) > 0){
				
									$replaceTextArray = [];

					foreach($result as $translated_text_data){
						//print_r($translated_text_data);
						//echo "\r\n";
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
				//5.  Check Folder Exist or not, If not Create New One
				
				if(is_dir($language)) {
					// echo "The Directory {$language} exists";
					$file = $language.'/'.$file_name;
					$myfile = fopen($file, "w") or die("Unable to open file!");

					fwrite($myfile, $replaced_string);
					fclose($myfile);
					
				}else{
					// echo "The Directory {$language} not exists";

					mkdir($language);
					$file = $language.'/'.$file_name;
					$myfile = fopen($file, "w") or die("Unable to open file!");

					fwrite($myfile, $replaced_string);
					fclose($myfile);
					
				}
				

				

				//6. save file with same name in language folder
								
				// file_put_contents($language.'/'.$file_name, $replaced_string);
		
		}
	}
	//Loop of Multiple files END
	
//}
?>