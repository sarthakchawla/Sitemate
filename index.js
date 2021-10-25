let current_buttons=["",""]
let current_button=""

document.addEventListener("click",(e)=> {

    current_button = e.target.id
    console.log(current_button)
    if (current_button=="yes-button"){
        current_buttons[1]=current_button
        let modal = document.getElementById("yes");
        modal.style.display = "block";
        document.getElementById("yes").innerHTML = "You just clicked YES for "+ current_buttons[0];
        document.getElementById("cancel").style.display="none"
        document.getElementById("modal").style.display="none"
        
    }
    else if(current_button=="cancel-button"){
        current_buttons[1]=current_button
        let modal = document.getElementById("cancel");
        modal.style.display = "block";
        document.getElementById("cancel").innerHTML = "You just clicked CANCEL for "+ current_buttons[0]; 
        document.getElementById("yes").style.display="none"
        document.getElementById("modal").style.display="none"
    }
    else if(current_button=="1" || current_button=="2" || current_button=="3"){
        current_buttons[0]=current_button
        document.getElementById("modal-content").innerHTML = "Are you sure that you want to continue with "+ current_button +"?";
        let modal = document.getElementById("modal");
        modal.style.display = "block";

        window.onclick = function(event) {
        return;
        }
    }
},false)


