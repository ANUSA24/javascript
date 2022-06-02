function require()
{
	var name=document.getElementById("t1");
	var mname=document.getElementById("t2");
	var lname=document.getElementById("t3");
	var email=document.getElementById("e1");
	var pass=document.getElementById("p1");
	var repass=document.getElementById("p2");
	var msex=document.getElementById("male");
	var fsex=document.getElementById("female");
	var phone=document.getElementById("phno");
	if(allLetter(name))
	{
		if(passid(pass))
		{
			if(allNumber(phone))
			{
				if (Validateemail(email))
				{
					if(validatesex(msex,fsex))
					{
						if(alphanumeric(msg))
						{
							
						}
					}
				}
			}
		}
	}
	return false;
}
function allLetter(name)
{
	var letters=/^[A-Za-z]+$/;
	if(name.value.match(letters))
	{
		alert('Form Succesfully submitted');
		window.location.reload()
		return true;
	}
	else
	{
		alert('Name must bave alphabet characters');
		name.focus;
		return false;
	}
}
function passid(pass)
{
	var pass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
	if(pass.value.match(pasw))
	{
		return true;
	}
	else
	{
		alert("Password should not to be empty.One Lowercase,One Uppercase,One digit")
		pass.focus();
		return false;
	}
}
function allNumber(phone)
{
	var numbers=/^[0-9]$/;
	if(phone.value.match(numbers))
	{
		return true;
	}
	else
	{
		alert("Phone must have numeric charcters only");
		phone.focus;
		return false;
	}
}
function Validateemail(email)
{
	var mailformat=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
	if(email.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered as invalid email address!");
		email.focus();
		return false;
	}
}
function validatesex(msex,fsex)
{
	x=0;
	if(msex.checked)
	{
		x++;
	}
	if(fsex.checked)
	{
		x++;
	}
	if(x==0)
	{
		alert('Select Male/Female');
		msex.focus();
		fsex.focus();
		alert("Form Succesfully Submitted");
		window.location.reload();
		return true;
	}
	
}
function alphanumeric(msg)
{
	var letters=/^[0-9a-zA-Z]+$/;
	if(msg.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('Message must have alphanumeric characters only');
		msg.focus();
		return false;
	}
}
/*function validateForm() {
 if (name == "") {
		var req=document.getElementById("rq");
		document.write(req)
  }
}