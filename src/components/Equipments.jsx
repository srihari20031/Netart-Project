import Equip from "../assets/images/3.png";


// this is used to display the products of the company
const Equipments = () => {
  return (
    <div className="equipments">
      <h3>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </h3>
      <img src={Equip} alt="" className="equip" />
      <p className="">
        Valves - Pumps - Pipes - IOT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr className="line" />

      <div className="segments">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </h3>
        <p>
          CHEMICALS <span>|</span> PROCESS <span>|</span> POWER WATER{" "}
          <span>|</span> WASTE WATER OILS <span>|</span> GAS PHARMA SUGARS
          <span>|</span> DISTILLERIES PAPER <span>|</span> PULP MARINE{" "}
          <span>|</span> DEFENCE METAL <span>|</span>MINING FOOD <span>|</span>
          BEVERAGE PETROCHEMICAL <span>|</span> REFINERIES SOLAR <span>|</span>{" "}
          BUILDING <span>|</span> HVAC FIRE FIGHTING AGRICULTURE <span>|</span>{" "}
          RESIDENTIAL
        </p>
      </div>
    </div>
  );
};

export default Equipments;
