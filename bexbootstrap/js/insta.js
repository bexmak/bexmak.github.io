$(document).ready(function () {
	var Spectra = {
	  instaToken: '34325439.49feb34.d0045066f4bd4849b10d40e5b184facc',
	  instaID: '49feb347a44649aba8a9bf3b6efc7a4c',
	  
	  init: function () {
	    $jQuery.fn.spectragram.accessData = {
	      accessToken: this.instaToken,
	      clientID: this.instaID
	    };
	    
	    $('.feed').spectragram('getUserFeed',{
	      max: 12,
	      query: 'bexmak',
	      wrapEachWith: '<div class="photo">'
	    });
	  }
	}

	Spectra.init();

})