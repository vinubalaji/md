<?php

function curl_post( $url, $fields, $optional_headers = null ){
	$fields_string  = http_build_query($fields, '', '&');
	// Create URL parameter string
	/*foreach( $fields as $key => $value )
		$fields_string .= $key.'='.$value.'&';
	$fields_string = rtrim( $fields_string, '&' );*/
	echo "Field string is $fields_string";

	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt( $ch, CURLOPT_POST, count( $fields ) );
	curl_setopt( $ch, CURLOPT_POSTFIELDS, $fields_string );
	curl_setopt ( $ch , CURLOPT_VERBOSE , 1 );
        curl_setopt ( $ch , CURLOPT_HEADER , 1 );
	
	$response = curl_exec( $ch );

	curl_close( $ch );
	return $response;
}


$code =  $_GET['code'];

// handle error
//if (!isset($code))

$fields = array ( 'code' => urlencode($code),
			'grant_type' => urlencode('authorization_code'),
			'redirect_uri' => 'http://www.mdease.com/auth.php'
			);
$response = curl_post("https://online_doctor:QkQRRnGjfwatjvdgHYEyPrElC2X70c4OHUvrUx5o@mhealth.att.com/access_token.json", $fields);
//$response = curl_post("http://mdease.com/success.php", $fields);
echo "Response is $response";



?>