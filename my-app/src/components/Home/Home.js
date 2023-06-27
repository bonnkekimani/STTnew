import React from 'react';

const LandingPage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Landing Page</h1>
      </header>
      <section>
        <h2>About Me</h2>
        <p>I am a React developer passionate about creating amazing web applications.</p>
      </section>
      <section>
        <h2>Services</h2>
        <ul>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Responsive Layouts</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2023 My Landing Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
