var contact = [
{
 firstname: "John",
 lastname: "Doe",
 phone: "(512) 355-0453",
 email: "johndoe@email.com" 
},
{
 firstname: "Jane",
 lastname: "Doe",
 phone: "(312) 641-2203",
 email: "janedoe@email.com" 
},
{
 firstname: "Suzie",
 lastname: "Smith",
 phone: "(415) 604-4219",
 email: "suziesmith@email.com" 
}  
];
var listContacts = function() {
 for (var i = 0; i < contact.length; i++) {
   console.log(contact[i].email);
   }   
}
listContacts();



  
  
