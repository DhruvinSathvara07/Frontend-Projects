function datastore(event) {

    event.preventDefault();

    const userinput = document.getElementById("e-mail").value;
    const password = document.getElementById("password").value;

    console.log("E-mail:" + userinput);
    console.log("Password:" + password);
}