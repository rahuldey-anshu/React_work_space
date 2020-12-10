import React from "react";
import "./profile.style.css";

import Bio from "./bio";
import Skills from "./skills";
import Links from "./links";

class Profile extends React.Component {
  me = {
    name: "Rahul Dey",
    title:
      "Junior Fullstack Developer at Pitangent Analytics and Technology Solutions Pvt. Ltd.",
    skillA: "Java",
    skillB: "Python",
    skillC: "Ruby Rails",
  };

  render() {
    return (
      <div className="Container">
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
          skillD={this.me.skillD}
        />

        <Links />
      </div>
    );
  }
}

export default Profile;
