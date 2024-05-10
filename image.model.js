import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    FirstName: {
        type: String,
      },
    LastName: {
        type: String,
      },
    Gender: {
        type: String,
      },
    VehicleMagnufacturerandModel: {
        type: String,
      },
    VehicleYear: {
        type: String,
      },
    VehiclePlateNumber: {
        type: String,
      },
    VehicleColor: {
        type: String
    },
     Nin: {
        type: String
      },
    FrontViewofDriverLicense: {
        type: Buffer,
        default: '' 
    },
    BackViewofDriversLicense: {
        type: Buffer,
        default: ''
    },
    VehicleFrontView: {
        type:Buffer,
        default: ''
    },
    VehicleBackView : {
        type:Buffer,
        default: ''
    },
    VehicleLeftView : {
        type:Buffer,
        default: ''
    },
    VehicleRightView : {
        type:Buffer,
        default: ''
      },
    NumberofSeats : {
        type:String,
    },
    DailyRoute : {
        type:String,
    },
    PriceofTripPerPerson: {
        type: String,
    },
    
    NameofBank: {
       type: String,
    },
    
    AccountName: {
        type: String,
    },
    
    BankAccountNumber: {
       type: String,
    },  
    
    
    PickaDayandTimeforInterview: {
        type: String,
    },
});

const Image = mongoose.model("Image", imageSchema);

export default Image
