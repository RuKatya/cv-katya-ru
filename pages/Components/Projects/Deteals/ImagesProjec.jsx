import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesProjec = ({ project }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          {project.subImage.images.map((img) => {
            return (
              <div key={img.index}>
                <Image
                  src={`/img/${project.folder}/${project.subImage.folder}/${img}.jpg`}
                  alt={project.title}
                  width={600}
                  height={600}
                  key={img.index}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ImagesProjec;
