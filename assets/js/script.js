
// const genPass = () => { };
  
document.querySelector("button").addEventListener("click", genPass);
  
  function genPass() {
    let len = prompt('How long do you what password to be(8-128)?')
  
    if (len < 8 ) {
      alert('Password is to short');
      return genPass();
    }

    else if (len > 128) {
      alert("Password is too long");
      return genPass();
    };

    let temp = "";
    let password = "";

    let numb = confirm("Would you like numbers in your password?");
    if (numb) temp += "0123456789";

    let cap = confirm("Would you like capital letters in your password?");
    if (cap) temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let low = confirm("Would you like lower cases in your password?");
    if (low) temp += "abcdefghijklmnopqrstuvwxyz";

    let spec = confirm("Would you like special characters in your password?");
    if (spec) temp += "!@#$%^&*?";

    console.log(temp);

    for (let i = 0; i < len; i++) {
      password += temp[Math.floor(Math.random()*temp.length)]
    }
   
    document.getElementById("password").innerHTML = password;
  };
