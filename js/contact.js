function validation() {
    var firstname = document.getElementById("firstname").value;

    var rname = /^[A-Za-z. ]{3,}$/
    if (rname.test(firstname) || firstname == "" ) {
        document.getElementById("nameErr").innerHTML = ``
    }
    else{
      var abc =  document.getElementById("nameErr")
    abc.innerHTML = `Wrong`;
    abc.style.color = "red"
    }

}


function validation2() {
    var lastname = document.getElementById("lastname").value;
    var rname = /^[A-Za-z. ]{1,}$/

    if (rname.test(lastname) || lastname == "") {
        
        document.getElementById("lastnm").innerHTML = ``
    }
    else{
      var abc =  document.getElementById("lastnm")
    abc.innerHTML = `Wrong`;
    abc.style.color = "red"
    }    
}


function validationEmail() {
    var email = document.getElementById("email").value;
    var remail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (remail.test(email) || email == "") {
        
        document.getElementById("emailerr").innerHTML = ``
    }
    else{
      var abc =  document.getElementById("emailerr")
    abc.innerHTML = `Wrong`;
    abc.style.color = "red"
    }    
}


function validationwrite() {
    var email = document.getElementById("message").value;
    var remail = /^[A-Za-z ]{1,}$/

    if (remail.test(email) || email == "") {
        
        document.getElementById("typeerr").innerHTML = ``
    }
    else{
      var abc =  document.getElementById("typeerr")
    abc.innerHTML = `Wrong`;
    abc.style.color = "red"
    }    
}


function validationmm() {
  var message = document.getElementById("span").value;
  var rmessage = /^[A-Za-z 1-9 -]{5,}$/

  if (rmessage.test(message) || message == "") {
      document.getElementById("if").innerHTML = ``
  }
  else{
    var abc =  document.getElementById("if")
  abc.innerHTML = `Wrong`;
  abc.style.color = "red"
  }    
}



