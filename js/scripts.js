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
//user Interface logic
$(function(){
    Address.prototype.fullAddress= function(){
    return this.myName + "<br> "+"Phone Number: " +this.myPhoneNumber +"<br> "+"Location: "+ this.location    
    }
    $("#checkout").click(function () {
        var flavour = $(".flavour option:selected").val();
        var size = $("#size option:selected").val();
        var crust = $("#crust option:selected").val();
        var topping = $("#toppings option:selected").val();
        var number = $("#number").val();
        var price, totalPrice;
        switch(flavour){
            case flavour = "regina":
                switch(size){
                    case size = "medium":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 190;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 190;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    case size = "large":
                        price = 1300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 190;
                        } else {
                            totalPrice = (price * number) + 250;
                        }
                        break;
                    }
                    break;
                    case flavour = "vegtika":
                        switch(size){
                            case size = "medium":
                                price = 350;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 190;
                                } else {
                                    totalPrice = (price * number) + 250;
                                }
                                break;
                            case size = "medium":
                                price = 650;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 190;
                                } else {
                                    totalPrice = (price * number) + 250;
                                }
                                break;
                            case size = "large":
                                price = 1300;
                                if (crust === "thin") {
                                    totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                    totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                    totalPrice = (price * number) + 190;
                                } else {
                                    totalPrice = (price * number) + 250;
                                }
                                break;
                    }
                    break;
                    case flavour = "chickentikka":
                        switch(size){
                            case size = "medium":
                                price = 350;
                                if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 190;
                                } else {
                                totalPrice = (price * number) + 250;
                                }
                                break;
                            case size = "medium":
                                price = 650;
                                if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 190;
                                } else {
                                totalPrice = (price * number) + 250;
                                }
                                break;
                            case size = "large":
                                price = 1300;
                                if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 190;
                                } else {
                                totalPrice = (price * number) + 250;
                                }
                                break;
                    }
                    break;
                    case flavour = "periperi":
                        switch(size){
                            case size = "medium":
                                price = 350;
                                if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 190;
                                } else {
                                totalPrice = (price * number) + 250;
                                }
                                break;
                            case size = "medium":
                                price = 650;
                                if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 190;
                                } else {
                                totalPrice = (price * number) + 250;
                                }
                                break;
                            case size = "large":
                                price = 1300;
                                if (crust === "thin") {
                                totalPrice = (price * number) + 100;
                                } else if (crust === "thick") {
                                totalPrice = (price * number) + 150;
                                } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 190;
                                } else {
                                totalPrice = (price * number) + 250;
                                }
                                break;
                                }
                    break;            
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 100;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 100;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 100;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 100;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 150;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 150;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 150;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 150;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 150;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 190;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 190;
                break;
        }

    });
});