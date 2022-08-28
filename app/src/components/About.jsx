import React from "react";


const About = (_props) => {
  return (
    <section className="about-section" id="sobre">
      <h1>Sobre</h1>
      <div className="about-container">
        <div>
          <iframe 
            width="600" 
            height="300"
            title="Victorino Spinelli trabalhando no workshop"
            src="https://youtube.com/embed/L0205NEu0gk?feature=share">
          </iframe>
        </div>
        <div>
          <h2>Minha História</h2>
          <p>Olá, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec luctus est. Nulla sagittis volutpat pellentesque. Duis in sodales nibh, in fringilla quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Cras fermentum neque ut maximus tempor. Pellentesque fermentum consectetur arcu, vitae venenatis arcu sollicitudin a.</p>
        </div>
      </div>
    </section>
  )
}

export default About