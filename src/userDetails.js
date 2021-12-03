function User(){
    let userDetails = {
        carNumber : {value : "", location : ""},
        insuranceType : {value : "", location : ""},
        pincode : {value : "", location : ""},
        number : {value : "", location : ""}
    };

    let carInsuranceDetails = {
        carType : "What do you use your car for?",
        pincode : "Enter your pincode",
        carDetails : "Which car do you drive?",
        number : "Enter your mobile number"
    
    };

    this.updateUserCarNumber = (data) =>  {
        userDetails.carNumber = data;
    }

    this.updateUserInsuranceType = (data) =>  {
        userDetails.insuranceType = data;
    }

    this.updateUserPincode = (data) =>  {
        userDetails.pincode = data;
    }

    this.updateUserNumber = (data) =>  {
        userDetails.number = data;
    }

    this.getUserDetails = () => {
        return userDetails;
    }

    this.getUserDetailsArray = () => {
        let arr = [
            userDetails.carNumber, 
            userDetails.insuranceType, 
            userDetails.pincode, 
            userDetails.number
        ]

        return arr;
    }
    
}


export default User;
// export  {userDetails, carInsuranceDetails};