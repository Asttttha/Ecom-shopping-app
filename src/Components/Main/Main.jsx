import React from "react";
import "./main.css";
import outfit from "../../Assets/outfit.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'
const outfitsData = [
  {
    id: 1,
    imgSrc: outfit,
    name: "Casual Summer Vibes",
    productDesc: "Lightweight and comfortable for a day out in the sun.",
  },
  {
    id: 2,
    imgSrc: outfit,
    name: "Formal Business Attire",
    productDesc: "Look sharp and professional in any business setting.",
  },
  {
    id: 3,
    imgSrc: outfit,
    name: "Cozy Winter Collection",
    productDesc: "Stay warm and stylish during the cold winter months.",
  },
  {
    id: 4,
    imgSrc: outfit,
    name: "Athletic Performance Gear",
    productDesc: "Optimized for maximum performance during workouts.",
  },
  {
    id: 5,
    imgSrc: outfit,
    name: "Evening Cocktail Dress",
    productDesc: "Elegant and glamorous attire for special occasions.",
  },
  {
    id: 6,
    imgSrc: outfit,
    name: "Weekend Casual Wear",
    productDesc: "Relaxed and trendy outfits perfect for weekend outings.",
  },
  {
    id: 7,
    imgSrc: outfit,
    name: "Traditional Cultural Attire",
    productDesc:
      "Celebrate culture and heritage with authentic traditional wear.",
  },
  {
    id: 8,
    imgSrc: outfit,
    name: "Beach Party Essentials",
    productDesc: "Stay cool and fashionable under the sun at beach parties.",
  },
];

function Main() {

  React.useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section data-aos="fade-up" className="mainSection container section">
      <div className="secTitle">
        <h3 className="title">Clothing section</h3>
      </div>
      <div className="secContent grid">
        {outfitsData.map(({ id, imgSrc, name, productDesc }) => {
          return (
            <div key={id} className="singleCard">
              <div className="imgDiv">
                <img src={imgSrc} alt={name} />
              </div>
              <div className="cardDesc">
                <h4 className="name">{name}</h4>
                <div>
                  <p className="description">{productDesc}</p>
                </div>
                <button className="btn">
                  <a href="/home">View</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="moreBtn">
        <button className="btn">
          <a href="#" >More products</a>
        </button>
      </div>
    </section>
  );
}

export default Main;
