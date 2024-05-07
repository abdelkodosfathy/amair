import React, { useRef, useState } from 'react';
import axios from 'axios';
import './PropertyForm/PropertyForm.css';
import { DataContext } from '../../components/Context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Tab1 = ({ formData, handleChange, isUpdate }) => (
  <div className='tab-1'>
    <label>
      Address:
      <input
        required
        type="text"
        name="address"
        defaultValue={isUpdate ? isUpdate.address : formData.address}
        onChange={handleChange}
        disabled={isUpdate} // Disable input if isUpdate is provided
      />
    </label>
    <label>
      Location:
      <input
        required
        type="text"
        name="location"
        defaultValue={isUpdate ? isUpdate.location : formData.location}
        onChange={handleChange}
        disabled={isUpdate} // Disable input if isUpdate is provided
      />
    </label>
    <label>
      City:
      <select
        required
        name="city"
        defaultValue={isUpdate ? isUpdate.city : formData.city}
        onChange={handleChange}
        disabled={isUpdate} // Disable input if isUpdate is provided
      >
        <option value="Cairo">Cairo</option>
        <option value="Alexandria">Alexandria</option>
        <option value="Giza">Giza</option>
        <option value="Luxor">Luxor</option>
        <option value="Aswan">Aswan</option>
      </select>
    </label>
  </div>
);

const Tab2 = ({ formData, handleChange, isUpdate }) => {
  const bedRef = useRef(0);
  const bathRef = useRef(0);

  return(

  <div className='tab-2'>
    {/* <label> */}
      Type:
      {/* <select 
        required
        name="type" 
        defaultValue={isUpdate ? isUpdate.type : formData.type}
        onChange={handleChange}
        disabled={isUpdate} // Disable input if isUpdate is provided
      >
        <option value="villa">Villa</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
      </select> */}
      <div className='radio-row'>
        <div className="radio">
          <input type="radio" id="villa" name="type" value="villa" onChange={handleChange} checked={isUpdate ? isUpdate.type === 'villa' : formData.type === 'villa'} disabled={isUpdate} />
          <label for="villa" className='radio-button'>Villa</label>
        </div>

        <div className="radio">
          <input type="radio" id="apartment" name="type" value="apartment" onChange={handleChange} checked={isUpdate ? isUpdate.type === 'apartment' : formData.type === 'apartment'} disabled={isUpdate} />
          <label for="apartment" className='radio-button'>Apartment</label>
        </div>

        <div className="radio">
          <input type="radio" id="house" name="type" value="house" onChange={handleChange} checked={isUpdate ? isUpdate.type === 'house' : formData.type === 'house'} disabled={isUpdate} />
          <label for="house" className='radio-button'>House</label>
        </div>
    </div>
    {/* </label> */}
    <label>
      Size:
      <input 
        type="number" 
        required
        defaultValue={isUpdate ? isUpdate.size : formData.size}
        name="size" 
        onChange={handleChange}
        disabled={isUpdate} // Disable input if isUpdate is provided
      />
    </label>
    <div className='rooms'>
      Bedrooms:
      <input 
        ref={bedRef}
        type="number" 
        defaultValue={isUpdate ? isUpdate.bedrooms : formData.bedrooms}
        required
        name="bedrooms" 
        onChange={handleChange}
        disabled={isUpdate} // Disable input if isUpdate is provided
      />
      <div className="rooms-btns">
        <button className='rooms-btn' onClick={(e) => {
          e.preventDefault();
          bedRef.current.value = 1
          formData.bedrooms = 1
        }}>1</button>
        <button className='rooms-btn' onClick={(e) => {
          e.preventDefault();
          bedRef.current.value = 2
          formData.bedrooms = 2
          
        }}>2</button>
        <button className='rooms-btn' onClick={(e) => {
          e.preventDefault();
          bedRef.current.value = 3
          formData.bedrooms = 3
          }}>3</button>
      </div>

    </div>
    <div className='rooms'>
      Bathrooms:
      <input 
        ref={bathRef}
        type="number" 
        defaultValue={isUpdate ? isUpdate.bathrooms : formData.bathrooms}
        required
        name="bathrooms" 
        onChange={handleChange}
        disabled={isUpdate} // Disable input if isUpdate is provided
      />
      <div className="rooms-btns">
        <button className='rooms-btn' onClick={(e) => {
          e.preventDefault();
          bathRef.current.value = 1
          formData.bathrooms = 1
        }}>1</button>
        <button className='rooms-btn' onClick={(e) => {
          e.preventDefault();
          bathRef.current.value = 2
          formData.bathrooms = 2
          
        }}>2</button>
        <button className='rooms-btn' onClick={(e) => {
          e.preventDefault();
          bathRef.current.value = 3
          formData.bathrooms = 3
          }}>3</button>
      </div>

    </div>
  </div>
  );
};

const Tab3 = ({ formData, handleChange, handleImageChange, isUpdate }) => (
  <div className='tab-3'>
    <label>
      Description:
      <textarea
        name="description"
        defaultValue={isUpdate ? isUpdate.description : formData.description}
        onChange={handleChange}
        style={{ resize: 'vertical' }}
        // disabled={!isUpdate} // Disable input if isUpdate is provided
      />
    </label>
    <label>
      Images:
      <input type="file" 
        required
        name="images" 
        multiple 
        onChange={handleImageChange}
        disabled={isUpdate} // Disable input if isUpdate is provided
      />
    </label>
    <label>
      Price:
      <input type="number" 
        required
        defaultValue={isUpdate ? isUpdate.price : formData.price}
        name="price" 
        onChange={handleChange}
      />
    </label>
    <div className='radio-row'>
      <div className="radio">
        <input 
          type="radio" 
          id='rent'
          name="action" 
          value={1}
          defaultChecked="checked"
          onChange={handleChange}
          disabled={isUpdate} // Disable input if isUpdate is provided
        />
        <label className='radio-button' htmlFor="rent">Rent</label>
      </div>
      <div className="radio">
        <input 
          type="radio" 
          id='sale'
          name="action" 
          value={0} 
          onChange={handleChange}
          disabled={isUpdate} // Disable input if isUpdate is provided
        />
        <label className='radio-button' htmlFor="sale">Sale</label>
      </div>
    </div>
  </div>
);

const TabsForm = ({ isUpdate, onAddProp}) => {
  const loginData = useContext(DataContext).loginState;
  const token = loginData.token;

  const classes = ["one", "two", "three"];

  const [formData, setFormData] = useState({
    address: '',
    type: 'villa',
    size: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: '',
    location: '',
    city: 'cairo',
    image: [],
    price: 0,
    action: 0
  });

  const [activeTab, setActiveTab] = useState(1);

  const handleNext = (e) => {
    e.preventDefault();
    setActiveTab(activeTab + 1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setActiveTab(activeTab - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form: ", formData);
    console.log("token: ", token);

    if(isUpdate){
      const updateData = {
        price: formData.price,
        description: formData.description
      }
      // console.log(formData);
      axios.patch('https://app.having.market/api/tasks/'+isUpdate.id, updateData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.error(error);
      });
    } else {
      axios.post('https://app.having.market/api/tasks', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response);
        if(response.status === 200){
          console.log("added");
          onAddProp();
        }
      }).catch(error => {
        console.error(error);
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      image: files
    });
  };

  return (
    <form className="property-form" onSubmit={handleSubmit}>
      <div className={`steps-row ${classes[activeTab - 1]}`}>
        <div id="progress" className={`${classes[activeTab - 1]}`}></div>
        <div className="col" style={activeTab >= 1 ? {color: "white"} : null}>step 1</div>
        <div className="col" style={activeTab >= 2 ? {color: "white"} : null}>step 2</div>
        <div className="col" style={activeTab >= 3 ? {color: "white"} : null}>step 3</div>
      </div>

      <div className={`form-tabs ${classes[activeTab - 1]}`}>
        <Tab1 formData={formData} handleChange={handleChange} isUpdate={isUpdate} />
        <Tab2 formData={formData} handleChange={handleChange} isUpdate={isUpdate} />
        <Tab3 formData={formData} handleChange={handleChange} handleImageChange={handleImageChange} isUpdate={isUpdate} />
      </div>

      <div className="button-row">
        {activeTab > 1 && <button onClick={(e) => handlePrev(e)}>Previous</button>}
        {activeTab < 3 && <button onClick={(e) => handleNext(e)}>Next</button>}
        {activeTab === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default TabsForm;