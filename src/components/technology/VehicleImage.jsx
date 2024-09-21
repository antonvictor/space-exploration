import firstVehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import secondVehicle from "../../assets/technology/image-spaceport-portrait.jpg";
import thirdVehicle from "../../assets/technology/image-space-capsule-portrait.jpg";






function VehicleImage({ technologyPage }) {
  const handleVehicle = () => {
    if (technologyPage === "first") {
      return firstVehicle;
    } else if (technologyPage === "second") {
      return secondVehicle;
    } else if (technologyPage === "third") {
      return thirdVehicle;
    }
  };

  return <img src={handleVehicle()} alt="" />;
}

export default VehicleImage;
