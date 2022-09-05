<?php 
// ini_set('display_errors', 1);
// error_reporting(E_ALL);
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
//$language = "es";	
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
		//$file_name='importMappingTypes.ts';
			if($file_name != "" and $file_name != "language" ){
	            $i++;

				echo "\r\n";
				echo $i.'-->'.$file_name."\r\n";

				//generate translated file
				
				//1. Get file from english folder
				//2. Get content from file
					
				$file = file_get_contents('en-US/'.$file_name);
				
				// 2.1 if string is match with   "___": encode it.. 
				$pattern = '/\".*\":/';
				if(preg_match_all($pattern, $file, $matches))
				{
				$encode_str=[];
				$decode_str=[];
					foreach($matches[0] as $match){
						$str=str_replace('"','',$match);
						$str_encode=str_replace(':','',$str);
						//echo "\r\n";
						$en_str=base64_encode($str_encode);
						$encode_str[$match] = '"'.$en_str.'":';
						
						// $decode_str['"'.$en_str.'":']='"'.base64_decode($en_str).'":';
						$decode_str['"'.$en_str.'":']='"'.$str_encode.'":';
					}
				//print_r($decode_str);
				//exit();
				
				//2.2. replace key with encode text
				$replaced_encode_string = str_replace(
				  array_keys($encode_str), 
				  array_values($encode_str), 
				  $file
				);
				
				//echo $replaced_encode_string;
				//exit;
				//3. Create array from database where key = original text and value = translated text
				$sql = "SELECT * from `json_translated_text_copy` WHERE translated_lang = '".$language."' AND filename='".$file_name."'";
				$result = mysqli_query($conn,$sql);
				if(mysqli_num_rows($result) > 0){
					$replaceTextArray = [];
					foreach($result as $translated_text_data){
						if($translated_text_data['translated_text'] != ""){
							$replaceTextArray[$translated_text_data['original_text']] = $translated_text_data['translated_text'];
						}
					}
				}
				
				
				//4. replace text with  original text
				$replaced_string = str_replace(
				  array_keys($replaceTextArray), 
				  array_values($replaceTextArray), 
				  $replaced_encode_string
				);
				
				//echo $replaced_string;
				//exit;
				//print_r($decode_str);
				//4.1 replace text with  original text
				$replaced_decode_string = str_replace(
				  array_keys($decode_str), 
				  array_values($decode_str), 
				  $replaced_string
				);		

				//echo $replaced_decode_string;
				//exit;
				// print_r($replaced_string);
				// 5.  Check Folder Exist or not, If not Create New One
				
				if(is_dir($language)) {
					$file = $language.'/'.$file_name;
					if (file_exists($file)) {   
						file_put_contents($file, $replaced_decode_string);
					}else{
						$file = $language.'/'.$file_name;
						$myfile = fopen($file, "w") or die("Unable to open file!");

						fwrite($myfile, $replaced_decode_string);
						fclose($myfile);
					}	
				}else{
					mkdir($language);
					$file = $language.'/'.$file_name;
					$myfile = fopen($file, "w") or die("Unable to open file!");

					fwrite($myfile, $replaced_decode_string);
					fclose($myfile);
					
				}

				// 6 if string is match with   "___": encode it.. 
								
				// file_put_contents($language.'/'.$file_name, $replaced_string);
		
		}
	}
	//Loop of Multiple files END
	
}
?>