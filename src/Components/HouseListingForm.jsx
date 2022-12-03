import React,{useState} from 'react'
import "../StyleSheet/HouseListingForm.css"
import axios from 'axios';

const HouseListingForm = () => {

    const [price,setPrice] = useState(0);
    const [city,setCity] = useState("");
    const [province,setProvince] = useState("");
    const [numOfBedrooms,setNumOfBedrooms] = useState(1);
    const [numOfBathrooms,setNumOfBathrooms] = useState(1);

    const [numOfGarages,setNumOfGarages] = useState(1);
    const [isSaleOrRent,setIsSaleOrRent] =useState("");
    const [houseImage,setHouseImage] = useState(null);

    const listProperty = () =>{

        const url='https://car-server.onrender.com/api/house-listing'
       
        const data=new FormData();

        data.append("price",price)
        data.append("city",city);
        data.append("province",province);

        data.append("numOfBedrooms",numOfBedrooms);
        data.append("numOfBathrooms",numOfBathrooms);

        data.append("numOfGarages",numOfGarages);
        data.append("isSaleOrRent",isSaleOrRent);
        data.append("houseImage",houseImage);

        axios.post(url,data).then(response => {
            console.log(response.data);
        }).catch(error=>console.log(error))

        alert("Successfully Listed Your Property");
    };


    return (
        <div className="HouseListing__container">
              <div className="form">
              <h1 style={{paddingBottom:"16px"}}>LIST YOUR Car</h1>
                  <label>Car Price</label>
                  <input type="number" placehoslder="House Price" onChange={(e) => setPrice(e.target.value)} value={price} />

                  <label>Car Location(Province)</label>
                  <input type="text" placeholder="House Location Province" onChange={(e) => setProvince(e.target.value)} value={province} />

                  <label>Car Location(city)</label>

                  <select onChange={(e) => setCity(e.target.value)} value={city}>
          <option>...</option>
          <option>Hyundai</option>
          <option>Ford</option>
          <option>Honda</option>
          <option>Toyota</option>
          <option>Jeep</option>
          <option>Nissan</option>
          <option>Lexus</option>
          <option>Kia</option>
        </select>


                  <label>Sale Or Rent</label>
                  <select onChange={(e) => setIsSaleOrRent(e.target.value)} value={isSaleOrRent}>
                      <option>...</option>
                      <option>SALE</option>
                      <option>RENT</option>
                  </select>

                  <label>Mileage</label>
                  <input type="number" placeholder="Number of bedrooms" onChange={(e) => setNumOfBedrooms(e.target.value)} value={numOfBedrooms}/>
                 
                  <label>Price</label>
                  <input type="number" placeholder="Number of bathrooms" onChange={(e) => setNumOfBathrooms(e.target.value)} value={numOfBathrooms}/>

                  <label>Transmission</label>
                  <input type="number" placeholder="Number of garages" onChange={(e) => setNumOfGarages(e.target.value)} value={numOfGarages}/>

                  <label>Car Image</label>
                  <input type="file"  onChange={(e) => setHouseImage(e.target.files[0])} />

<button  onClick={listProperty}>List Your Car</button>

              </div>
            
        </div>
    )
}

export default HouseListingForm
