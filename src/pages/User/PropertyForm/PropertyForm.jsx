import React, { useState } from 'react';
import './PropertyForm.css';

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    address: '',
    type: 'villa',
    size: 0,
    bedrooms: 0,
    bathrooms: 0,
    description: '',
    location: '',
    city: '',
    images: [],
    price: 0,
    action: 'rent'
  });

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
      images: files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form className="property-form" onSubmit={handleSubmit}>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      <label>
        City:
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Giza">Giza</option>
          <option value="Luxor">Luxor</option>
          <option value="Aswan">Aswan</option>
        </select>
      </label>
      <label>
        Type:
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="villa">Villa</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
        </select>
      </label>
      <label>
        Size:
        <input type="number" name="size" value={formData.size} onChange={handleChange} />
      </label>
      <label>
        Bedrooms:
        <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
      </label>
      <label>
        Bathrooms:
        <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      
      <label>
        Images:
        <input type="file" name="images" multiple onChange={handleImageChange} />
      </label>
      <label>
        Price:
        <input type="number" name="price" value={formData.price} onChange={handleChange} />
      </label>
      <label>
        Action:
        <div className="radio-row">
          <label>Rent</label>
          <input type="radio" name="action" value="rent" checked={formData.action === 'rent'} onChange={handleChange} />
        </div>
        <div className="radio-row">
          <label>Sale</label>
          <input type="radio" name="action" value="sale" checked={formData.action === 'sale'} onChange={handleChange} />
        </div>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PropertyForm;