import Image from './image.model.js';


 

  export const imageRouter = async (req, res) => {
    
 {
            const {
                FirstName,
                LastName,
                Gender,
                VehicleManufacturerAndModel,
                VehicleYear,
                VehiclePlateNumber,
                FrontViewOfDriverLicense,
                BackViewOfDriversLicense,
                VehicleFrontView,
                VehicleBackView,
                VehicleLeftView,
                VehicleRightView,
                NumberOfSets,
                DailyRoute,
                PriceOfTripPerPerson,
                NameOfBank,
                AccountName,
                BankAccountNumber,
                PickDayTimeForInterview,
            } = req.body


            const newImage = new Image({
                FirstName,
                LastName,
                Gender,
                VehicleManufacturerAndModel,
                VehicleYear,
                VehiclePlateNumber,
                FrontViewOfDriverLicense,
                BackViewOfDriversLicense,
                VehicleFrontView,
                VehicleBackView,
                VehicleLeftView,
                VehicleRightView,
                NumberOfSets,
                DailyRoute,
                PriceOfTripPerPerson,
                NameOfBank,
                AccountName,
                BankAccountNumber,
                PickDayTimeForInterview,
            })
            await newImage.save()
            console.log('registered succesfully',newImage)
            ;
        }
    }


export default imageRouter