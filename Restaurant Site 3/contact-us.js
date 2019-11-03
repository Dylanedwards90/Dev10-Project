function validate() {
      
    if( document.myForm.name.value == "" ) {
            alert( "Please provide your Name!" );
            document.myForm.name.focus() ;
            return false;
        }
    if( document.myForm.email.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.email.focus() ;
            return false;
         }
	if( document.myForm.phone.value == "" ) {
            alert( "Please provide your Phone!" );
            document.myForm.phone.focus() ;
            return false;
         }
    if( document.myForm.info.value == "" ) {
            alert( "Please provide your additional information!" );
			document.myForm.info.focus() ;
            return false;
         }
	if( document.myForm.questionaire.value == "" ) {
            alert( "Please answer if you have been to the restaurant before!" );
			document.myForm.info.focus() ;
            return false;
         }
	if( document.myForm.interest.value == "" ) {
            alert( "Please provide the best date to contact you!" );
			document.myForm.info.focus() ;
            return false;
         }
         return( true );
      }
