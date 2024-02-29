function data_pg_db(data){
    
}
function products() {
    window.location.href = "https://joaopedrowebdev.com/portifolio";
}
function portifolio() {
    window.location.assign("https://joaopedrowebdev.com/portifolio");
}
function contacts() {
    window.location.assign("https://joaopedrowebdev.com/contacts");
}
function information() {
    window.location.assign("https://joaopedrowebdev.com/information");
}
function saveElement(){
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let message=document.getElementById("message");
    let phone_number=document.getElementById("phone_number");
    const text_input_name=document.getElementById('name');
    const text_input_email=document.getElementById('email');
    const text_input_message=document.getElementById('message');
    const text_input_phone_number=document.getElementById("phone_number");
    text_input_email.value="";
    text_input_message.value="";
    text_input_name.value='';
    text_input_phone_number.value="";

}