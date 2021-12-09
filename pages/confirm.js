import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const getPickupCoordinates = (pickup) => {
    // const pickup = "vasant vihar, thane";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZ2lyaWJhYnUwNiIsImEiOiJja3ZtYjhhd2kxZTZ4Mm50azBkejdkdzZmIn0.jXkDKlh6L0G1F4QE8goeww",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);

        console.log("pickup 🚗 ", data.features[0].center);
      });
  };
  const getDropoffCoordinates = (dropoff) => {
    // const dropoff = "thane railway station";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZ2lyaWJhYnUwNiIsImEiOiJja3ZtYjhhd2kxZTZ4Mm50azBkejdkdzZmIn0.jXkDKlh6L0G1F4QE8goeww",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
        console.log("drop off 🏃", data.features[0].center);
      });
  };
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      {/**
      back navigation
    */}
      <ButtonConatainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonConatainer>

      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Ride</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default confirm;

const Wrapper = tw.div`
flex flex-col h-screen

`;
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2 `;

const ConfirmButton = tw.div`
bg-black h-14 my-4 text-white text-xl  flex justify-center items-center mx-4
`;
const ConfirmButtonContainer = tw.div`
  border-t-2
`;
const ButtonConatainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`;
const BackButton = tw.img`h-full object-contain`;
