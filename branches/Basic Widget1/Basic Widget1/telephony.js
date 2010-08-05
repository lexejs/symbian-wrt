var Telephony = {
 	sendDTMF: function( string, onSuccess, onError) {
		APIBridge.Internal._sendRequest( 
			"/telephony/sendDTMF?s="+encodeURIComponent(string), 
			null,
			function(req){
				if (req.responseText)
					onSuccess(req.responseText);
				else 
					onError(500);					
			},
			onError );		
	}		
}

