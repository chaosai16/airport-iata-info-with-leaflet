import React from "react";
import india from "../images/india1.jpg";

function Airport() {
  const data = [
    "Agartala (IXA)",
    "Agra (AGR)",
    "Ahmedabad (AMD)",
    "Aizawl (AJL)",
    "Amritsar (ATQ)",
    "Aurangabad (IXU)",
    "Bagdogra (IXB)",
    "Bareilly (BEK)",
    "Belagavi (IXG)",
    "Bengaluru (BLR)",
    "Bhopal (BHO)",
    "Bhubaneswar (BBI)",
    "Chandigarh (IXC)",
    "Chennai (MAA)",
    "Coimbatore (CJB)",
    "Darbhanga (DBR)",
    "Dehradun (DED)",
    "Delhi (DEL)",
    "Deoghar (DGH)",
    "Dibrugarh (DIB)",
    "Dimapur (DMU)",
    "Durgapur (RDP)",
    "Gaya (GAY)",
    "Goa (GOI)",
    "Gorakhpur (GOP)",
    "Guwahati (GAU)",
    "Gwalior (GWL)",
    "Hubli (HBX)",
    "Hyderabad (HYD)",
    "Imphal (IMF)",
    "Indore (IDR)",
    "Itanagar (HGI)",
    "Jabalpur (JLR)",
    "Jaipur (JAI)",
    "Jammu (IXJ)",
    "Jodhpur (JDH)",
    "Jorhat (JRH)",
    "Kadapa (CDP)",
    "Kannur (CNN)",
    "Kanpur (KNU)",
    "Kochi (COK)",
    "Kolhapur (KLH)",
    "Kolkata (CCU)",
    "Kozhikode (CCJ)",
    "Kurnool (KJB)",
    "Leh (IXL)",
    "Lucknow (LKO)",
    "Madurai (IXM)",
    "Mangaluru (IXE)",
    "Mumbai (BOM)",
    "Mysuru (MYQ)",
    "Nagpur (NAG)",
    "NorthGoa (GOX)",
    "Pantnagar (PGH)",
    "PortBlair (IXZ)",
    "Prayagraj (IXD)",
    "Pune (PNQ)",
    "Raipur (RPR)",
    "Rajahmundry (RJA)",
    "Rajkot (RAJ)",
    "Ranchi (IXR)",
    "Shillong (SHL)",
    "Shirdi (SAG)",
    "Silchar (IXS)",
    "Srinagar (SXR)",
    "Surat (STV)",
    "Thiruvananthapuram (TRV)",
    "Tiruchirappalli (TRZ)",
    "Tirupati (TIR)",
    "Tuticorin (TCR)",
    "Udaipur (UDR)",
    "Vadodara (BDQ)",
    "Varanasi (VNS)",
    "Vijayawada (VGA)",
    "Visakhapatnam (VTZ)",
  ];
  return (
    <div className="py-2">
      <div className="flex justify-start mx-8">
        <img src={india} className=" flex h-7 w-10 mt-2" alt="india"></img>
        <p className="font-bold text-4xl mx-2">Domestic Airports (India)</p>
      </div>
      <div className="grid grid-cols-5 gap-4 mx-8 pt-3 ">
        {data.map((iata) => (
          <div className="rounded shadow-md flex iems-center justify-center bg-white">
            {iata}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Airport;
