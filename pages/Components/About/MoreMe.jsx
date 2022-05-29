import Image from "next/image";
import React from "react";

const MoreMe = () => {
  const iconsAboutMe = [
    {
      src: "/icons/idea.png",
      alt: "Idea",
      text: [{ text: "Mindfull thinking." }, { text: "Fast pace learner." }],
    },
    {
      src: "/icons/study.png",
      alt: "study",
      text: [{ text: "Reading books professionally and for joy." }],
    },
    {
      src: "/icons/meeting.png",
      alt: "meeting",
      text: [
        { text: "Good comunication skills." },
        { text: "Listening to other's ideas." },
      ],
    },
    {
      src: "/icons/tour.png",
      alt: "tour",
      text: [
        { text: "Finding places to enjoy." },
        { text: "Meeting new people." },
      ],
    },
  ];

  return (
    <div className="about__content--moreMe">
      {iconsAboutMe.map((img, index) => {
        return (
          <div key={index} className="about__content--eachOtherMe">
            <div>
              <Image src={img.src} alt="idea" width={100} height={100} />
            </div>
            <p className="about__content--eachOtherMe__personality">
              {img.text.map((i, index) => {
                return <p key={index}>{i.text}</p>;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MoreMe;
