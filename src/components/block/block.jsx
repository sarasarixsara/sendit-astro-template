// import React from "react";

// export default function AboutTeam(block) {
//   return (
//     <div className="team">
//       <div className="container" style={{ textAlign: "justify", marginTop: "10%" }}>
//       <div className="row">
//           <div className="section-header" style={{display: "flex", justifyContent: "center", height: "100%", alignItems: "center", flexDirection: "column"}}>
//             <h5 style={{color: "black", fontWeight: "bold"}}>{block.title}</h5>
//             <h5 style={{color: "black", fontWeight: "lighter"}}>{block.description}</h5>
          
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function AboutTeam(block) {
  return (
    <div className="team">
      <div className="container" style={{ textAlign: "justify", marginTop: "10%" }}>
        <div className="row">
          <div className="col-lg-10 col-xl-12 mx-auto">
            <div className="section-header">
                       <div style={{display: "flex", justifyContent: "center", height: "100%", alignItems: "center", flexDirection: "column"}}>
             <h5 style={{color: "black", fontWeight: "bold"}}>{block.title}</h5>
             <h5 style={{color: "black", fontWeight: "lighter"}}>{block.description}</h5>
          
       </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
