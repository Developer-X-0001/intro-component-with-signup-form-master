var firstStatus = 0;
var lastStatus = 0;
var mailStatus = 0;
var passStatus = 0;

function submit() {

    let firstname = document.getElementById('firstname');
    if (firstname.value == '') {
        if (firstStatus == 0) {
            firstname.style.border = '2px solid rgb(255, 122, 122)'
            document.getElementsByName('first')[0].placeholder = "";
            firstname.insertAdjacentHTML('afterEnd', '<label for="firstname" id="firtlabel"><i>First Name cannot be empty</i></label>');
            firstStatus += 1;
        } else {
            return
        }
    } else if (firstname.value != '') {
        firstname.style.border = '1px solid rgb(185, 182, 211)'
        document.getElementsByName('first')[0].placeholder = "First Name";
        if (document.getElementById('firtlabel')) {
            document.getElementById('firtlabel').remove()
            firstStatus = 0;
        }
    }

    let lastname = document.getElementById('lastname');
    if (lastname.value == '') {
        if (lastStatus == 0) {
            lastname.style.border = '2px solid rgb(255, 122, 122)'
            document.getElementsByName('last')[0].placeholder = "";
            lastname.insertAdjacentHTML('afterEnd', '<label for="firstname" id="lastlabel"><i>Last Name cannot be empty</i></label>');
            lastStatus += 1;
        } else {
            return
        }
    } else if (lastname.value != '') {
        lastname.style.border = '1px solid rgb(185, 182, 211)'
        document.getElementsByName('last')[0].placeholder = "Last Name";
        if (document.getElementById('lastlabel')) {
            document.getElementById('lastlabel').remove()
            lastStatus = 0;
        }
    }

    let email = document.getElementById('emailadr');
    console.log(email.value.slice(-4).slice(0, 1))
    let counter = 0;
    for (i in email.value) {
        if (i == '@') {
            counter += 1;
        }
    }
    if (email.value != '' && email.value.slice(-4).slice(0, 1) == '.') {
        console.log(1)
        email.style.border = '1px solid rgb(185, 182, 211)'
        email.style.color = 'rgb(0, 0, 0)'
        document.getElementsByName('mail')[0].placeholder = "Email";
        if (document.getElementById('emaillabel')) {
            document.getElementById('emaillabel').remove()
            mailStatus = 0;
        }
    } else if (email.value == '') {
        console.log(2)
        if (mailStatus == 0) {
            email.style.border = '2px solid rgb(255, 122, 122)'
            document.getElementsByName('mail')[0].placeholder = "";
            email.insertAdjacentHTML('afterEnd', '<label for="firstname" id="emaillabel"><i>Email cannot be empty</i></label>');
            mailStatus = 1;
        }
    } else if (email.value.slice(-4) != '.com') {
        console.log(3)
        if (mailStatus == 0) {
            email.style.border = '2px solid rgb(255, 122, 122)'
            email.style.color = 'rgb(255, 122, 122)'
            email.insertAdjacentHTML('afterEnd', '<label for="firstname" id="emaillabel"><i>Looks like this is not an email</i></label>');
            mailStatus = 1;
        }
    } else if (email.value.slice(-4).slice(0, 1) != '.') {
        console.log(4)
        if (mailStatus == 0) {
            email.style.border = '2px solid rgb(255, 122, 122)'
            email.style.color = 'rgb(255, 122, 122)'
            email.insertAdjacentHTML('afterEnd', '<label for="firstname" id="emaillabel"><i>Looks like this is not an email</i></label>');
            mailStatus = 1;
        }
    } else if (counter == 0) {
        console.log(5)
        if (mailStatus == 0) {
            email.style.border = '2px solid rgb(255, 122, 122)'
            email.style.color = 'rgb(255, 122, 122)'
            email.insertAdjacentHTML('afterEnd', '<label for="firstname" id="emaillabel"><i>Looks like this is not an email</i></label>');
            mailStatus = 1;
        }
    } else {
        return
    }
    console.log(counter)

    let pass = document.getElementById('pass');
    if (pass.value == '') {
        if (passStatus == 0) {
            pass.style.border = '2px solid rgb(255, 122, 122)'
            document.getElementsByName('passwd')[0].placeholder = "";
            pass.insertAdjacentHTML('afterEnd', '<label for="firstname" id="passlabel"><i>Password cannot be empty</i></label>');
            passStatus += 1;
        } else {
            return
        }
    } else if (pass.value != '') {
        pass.style.border = '1px solid rgb(185, 182, 211)'
        document.getElementsByName('passwd')[0].placeholder = "Password";
        if (document.getElementById('passlabel')) {
            document.getElementById('passlabel').remove()
            passStatus = 0;
        }
    }
}