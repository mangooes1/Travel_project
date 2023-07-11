
import React from 'react'
import Rome from "../Assets/rome.jpg"
import Rome2 from "../Assets/Rome2.jpg"
import Bali from "../Assets/bali.jpg"
import Bali2 from "../Assets/bali 2.jpg"
import "./DestinationStyles.css"
import DestinationData from './DestinationData';

const Destination = () => {
    return (
        <div className="destination ">
            <h1> Destination  </h1>
            <p className='para'>The real voyage of discovery consists not in seeking new
                landscapes but in having new eyes </p>

            <DestinationData
                className="first-des"
                heading="Rome,Italy "
                text="jgbnkjghuiyiuhgjbjhgfyg"
                img1={Rome}
                img2={Rome2}
            />
            <DestinationData
                className="first-des-reverse"
                heading=" Bali "
                text="jgbnkjghuiyiuhgjbjhgfyg"
                img1={Bali}
                img2={Bali2}
            />

        </div>
    );
};

export default Destination;
