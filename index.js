// Write your solution in this file!
// window.customerName = 'bob';
var customerName='bob'
//convert to uppercase
function upperCaseCustomerName() {
    // window.customerName=window.customerName.toUpperCase();
    customerName=customerName.toUpperCase()
    //window is used to access a global variable inside a function
}
// upperCaseCustomerName(customerName)

function setBestCustomer(){
   window.bestCustomer='not bob'
    
}
function overwriteBestCustomer(){
     window.bestCustomer='maybe bob'
}
//  overwritesBestcustomer()
const leastFavoritecustomer='nyaga'
function changeLeastFavoriteCustomer(){
    leastFavoritecustomer='wawira'
}
