//business logic
$(function () {
    $('.summary').hide();
    $('.custdata-overlay').hide();
});
$(function(){
    function Order(flavour, size, crust, topping, number, totalPrice){
    this.myFlavour=flavour;
    this.mySize=size;
    this.myCrust=crust;
    this.myTopping=topping;
    this.myNumber=number;
    this.myTotalPrice=totalPrice;
    }
    function Address(name, phoneNumber, location){
        this.myName=name;
        this.myPhoneNumber=phoneNumber;
        this.myLocation = location;
    } 
});
