import React from "react";
import Image from "next/image";
import Slider from "react-slick";

function HotBids() {
  const sliderRef = React.createRef();

  const settings = {
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const bidCards = [
    {
      key: 1,
      name: "HERMÈS, 2019",
      timer: "06:23:57",
      pic: "/images/product1.png",
      num: 3,
      price: "20,000",
    },
    {
      key: 2,
      name: "HERMÈS, 2020",
      timer: "06:23:57",
      pic: "/images/product2.png",
      num: 3,
      price: "20,000",
    },
    {
      key: 3,
      name: "Patek Philippe",
      timer: "06:23:57",
      pic: "/images/product3.png",
      num: 7,
      price: "28,000",
    },
    {
      key: 4,
      name: "HERMÈS, 2019",
      timer: "06:23:57",
      pic: "/images/product1.png",
      num: 3,
      price: "20,000",
    },
    {
      key: 5,
      name: "HERMÈS, 2020",
      timer: "06:23:57",
      pic: "/images/product2.png",
      num: 3,
      price: "20,000",
    },
    {
      key: 6,
      name: "Patek Philippe",
      timer: "06:23:57",
      pic: "/images/product3.png",
      num: 7,
      price: "28,000",
    },
  ];

  const BidCard = ({ bid }) => (
    <div className="">
      <div className="rounded-12 bg-darkGray2 p-6 border border-solid border-white">
        <div className="flex justify-between text-white">
          <div className="">{bid.name}</div>
          <div className="opacity-75">{bid.timer}</div>
        </div>
        <div className="flex justify-center items-center">
          <Image src={bid.pic} width={276} height={260} />
        </div>
      </div>
      <div className="rounded-t-10 rounded-b-24 bg-white mt-4 md:mt-5 p-5 flex justify-between">
        <div className="">
          <div className="text-16 md:text-18 font-semibold">Highest Bid:</div>
          <div className="flex items-center">
            <div className="text-16 md:text-18 font-semibold mr-1">
              {bid.num}
            </div>
            <Image src="/icons/crypto.svg" width={12} height={18} />
            <div className="text-14 md:text-14 opacity-50 ml-3">
              ${bid.price}
            </div>
          </div>
        </div>
        <button className="text-16 md:text-18 text-white bg-blue rounded-10 rounded-br-24 px-7.5 py-3">
          Place a Bid
        </button>
      </div>
    </div>
  );

  const handlePrevArrow = () => {
    sliderRef.current.slickPrev();
    console.log(sliderRef.current);
  };

  const handleNextArrow = () => {
    sliderRef.current.slickNext();
    console.log(sliderRef.current);
  };

  return (
    <div>
      <div className="text-34 font-semibold text-white mt-31">Hot Bids</div>
      <div className="slick-slides-gap relative grid grid-cols-1 mt-12">
        <div
          className="absolute top-34 left-0 md:-left-4 z-50"
          onClick={handlePrevArrow}
        >
          <Image src="/icons/prevArrow.svg" width={57.5} height={57.5} />
        </div>
        <Slider className="px-6" {...settings} ref={sliderRef}>
          {bidCards.map((bid) => (
            <BidCard key={bid.key} bid={bid} />
          ))}
        </Slider>
        <div
          className="absolute top-34 right-0 md:-right-4 z-50"
          onClick={handleNextArrow}
        >
          <Image src="/icons/nextArrow.svg" width={57.5} height={57.5} />
        </div>
      </div>
    </div>
  );
}

export default HotBids;
