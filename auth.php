<?php

function curl_post( $url, $fields, $url_data = null ){
	$fields_string  = http_build_query($fields, '', '&');
//	echo "Field string is $fields_string";
	//$url = $url . '?' . $url_data;
	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt( $ch, CURLOPT_HTTPGET, false);
	curl_setopt( $ch, CURLOPT_POST, count( $fields ) );
	curl_setopt( $ch, CURLOPT_POSTFIELDS, $fields_string );
	//curl_setopt ( $ch , CURLOPT_VERBOSE , 1 );
        //curl_setopt ( $ch , CURLOPT_HEADER , 1 );
	
	$response = curl_exec( $ch );

	curl_close( $ch );
	return $response;
}

function curl_get( $url, $fields) {
	$fields_string  = http_build_query($fields, '', '&');
//	echo "Field string is $fields_string";
	$url = $url . '?' . $fields_string;
	echo "Url is $url";
	$ch = curl_init();
	curl_setopt( $ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
/*	curl_setopt( $ch, CURLOPT_POST,  false);
	curl_setopt( $ch, CURLOPT_POSTFIELDS, null);
	curl_setopt( $ch, CURLOPT_HTTPGET, true);*/
	
	//curl_setopt ( $ch , CURLOPT_VERBOSE , 1 );
        //curl_setopt ( $ch , CURLOPT_HEADER , 1 );
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
//echo "Response is $response";
$response_json = json_decode($response);
$access_token = $response_json->{'access_token'};
//echo "Access token is $access_token";

//$symptom_array = array("name" => "symptom", "value" => "test value", "timestamp":"201108291223");
//json_encode($symptom_array);

$access_fields = array( 'oauth_token' => urlencode($access_token));
$access_response = curl_get("https://api-mhealth.att.com/v2/health/source/online_doctor/data", $access_fields);

echo "Access response is $access_response";

?>