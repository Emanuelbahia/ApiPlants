import plant1 from "../../../public/images/living-con-plantas-y-sillones-.jpg";
import plant2 from "../../../public/images/snake-plant-in-living-room-.jpg";
import plant3 from "../../../public/images/plantas-living.jpg";
import plant4 from "../../../public/images/minh-pham-MBsReSZ2WNM-unsplash.jpg";
import "./principal.css";

export default function Publicity() {
  return (
        <div className="container-all-publities">
            <div className="container-publicity">
                <p className="p-publicity">
                Adds a touch of beauty to any room in the house.
                </p>
                <img className="img-publicity" src={ plant1 } />
            </div>
            <div className="container-publicity">
                <p className="p-publicity">
                The presence of plants increases productivity!
                </p>
                <img className="img-publicity" src={ plant2 }  />
            </div><div className="container-publicity">
                <p className="p-publicity">
                Help purify the air and reduce pollutant levels
                </p>
                <img className="img-publicity" src={ plant3 }  />
            </div><div className="container-publicity">
                <p className="p-publicity">
                Reduce stress and improve mood
                </p>
                <img className="img-publicity" src={ plant4 }  />
            </div>
        </div>
  )
}
