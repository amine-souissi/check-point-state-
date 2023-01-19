import React from "react";
import BioComponent from "./components/bio";
import NameComponent from "./components/FullName";
import ProfilPhoto from "./components/image";
import ProfessionComponent from "./components/profession";
import p from "./components/Profile_Photo.jpg";

const Mohamed = {
  Name: "Mohamed",
  Prof: "Pilote",
  Bio:
    "Epam,EABA,Base aerienne Sfax,Base aerienne Bizerte,Base aerienne Gabes,Base aerienne Gafsa",
  Photo: p
};

const Profile = () => (
  <>
    <NameComponent name={Mohamed.Name} />
    <ProfilPhoto photo={Mohamed.Photo} />
    <ProfessionComponent profession={Mohamed.Prof} />
    <BioComponent bio={Mohamed.Bio} />
  </>
);
export default Profile;
