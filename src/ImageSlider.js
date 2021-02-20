import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const images = [
    "https://picsum.photos/500/500",
    "https://picsum.photos/500/500",
    "https://picsum.photos/500/500",
    
  ];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
            {
                images.map(
                    image => {
                        return (
            <div className="each-slide">
            <div style={{'backgroundImage': `url(${image})`, 'height': '500px', 'width': '500px'}}>
              <span>Slide 1</span>
            </div>
          </div>)
                    }
                )
            }

         
        </Slide>
      </div>
    )
}

export default Slideshow;