import './View.css'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.webp'
import image3 from '../../assets/3.jpg'
const View = ({images, data, user}) => {

  
  return (
    <div className='view'>
      <div className="dep-images">
        <div className="selected-img">
          <img src={image1} alt=""width="100px" />
        </div>
        <div className="all-imgs">
          <div className="list-img">
            <img src={image1} alt="" width="100px" />
          </div>
          <div className="list-img">
            <img src={image2} alt="" width="100px" />
          </div>
          <div className="list-img">
            <img src={image3} alt="" width="100px" />
          </div>
        </div>
      </div>
      <div className="dep-heading">
        <h3>SandStudio</h3>
        <p> <i className="fa-solid fa-map-location-dot"></i> 221B Baker Street</p>
      </div>
      <div className="prices">
        <p><span>$3200</span>/month</p>
      </div>
      <div className="features">
        
      </div>
    </div>
  )
}

export default View