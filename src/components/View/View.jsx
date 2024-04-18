import './View.css'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.webp'
import image3 from '../../assets/3.jpg'
const View = ({images, data, user}) => {
  const myData = {
    ...data,
  }
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
      {myData.bedrooms? <span><i className="fa-solid fa-bed"></i> {myData.bedrooms}</span> : null}
          {myData.bathrooms? <span><i className="fa-solid fa-bath"></i> {myData.bathrooms}</span> : null}
          {myData.size? <span><i className="fa-solid fa-ruler-combined"></i> {myData.size}</span> : null}
      </div>
      <div className="description">
        <h1>Properties details</h1>
      </div>
      {/* <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Ipsum velit vitae adipisci cumque, sed qui minima odio
      dolorum impedit, pariatur hic alias, beatae consequatur.
      Ut, voluptate. Quasi similique perspiciatis earum.
      </p> */}
      <div className="user-info">
        <div className="user-img">
          <img src="" alt="" />
        </div>
        <div className="user-data"></div>
        <div className="user-contact-btn">
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default View