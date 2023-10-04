import React from "react";

export default function AboutTeam(block) {
  return (
    <div className="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-12 mx-auto">
            <div className="section-header">
              <h2>{block.title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {block.team_members.map((member, i) => (
            <div className="col-lg-4 col-md-6 " key={i}>
              <div className="team-member">
           
                <iframe
                  //title={member.name}
                  width="100%"
                  height="300"
                  src={member.link} 
                  allowFullScreen
                ></iframe>
                {/* <div className="team-member-details">
                  <h3>{member.name}</h3>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
