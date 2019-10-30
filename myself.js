 
	function myvalidation() {
		var fname = "Oloyede Oyindamola Nimota";
		var bday = "November 1";
		var dept = "Computer Science";
		var ffood = "Yam and Egg";
		var fcolor = "Black";
		
		// var fullname= "Oloyede Oyindamola"
		var fullname=document.getElementById('fullname')
		// var birthday= "November 1"
		var birthday=document.getElementById('birthday')
		// var department= "Computer science"
		var department=document.getElementById('department')
		// var favourite food= "Yam and Egg"
		var favouritefood=document.getElementById('favouritefood')
		// var favourite colour= "Black"
		var favouritecolour=document.getElementById('favouritecolour')
		var check = document.getElementById('check')

		var response = document.getElementsByClassName('response')

		var correct = 0;
		
		if(fullname.value != fname ){
			// response[0].innerText = fname
		}else{
			// response[0].innerText = ""
			correct++;
		}

		if(birthday.value != bday ){
			// response[1].innerText = bday
		}else{
			// response[1].innerText = ""
			correct++;
 		}


		if(department.value != dept ){
			// response[2].innerText = dept
		}else{
			// response[2].innerText = ""
			correct++;
		}


		if(favouritefood.value != ffood ){
			// response[3].innerText = ffood
		}else{
			// response[3].innerText = ""
			correct++;
		}


		if(favouritecolour.value != fcolor ){
			// response[4].innerText = fcolor
		}else{ 
			// response[4].innerText = ""
			correct++;
		}

			

		if (fullname.value == fname &&
			birthday.value == bday &&
			department.value == dept &&
			favouritefood.value == ffood &&
			favouritecolour.value == fcolor) {
			alert ( "wow! you know everything about me")
			return false;
			// return false
		}
		else if(fullname.value!= fname &&
			birthday.value != bday &&
			department.value != dept &&
			favouritefood.value != ffood &&
			favouritecolour.value != fcolor){

			alert ( "ooopz! you know nothing about me")
			return false
		}else{
			alert('You know a little about me...you got ' + correct)
		 return false
		}
		}
