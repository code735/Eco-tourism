import React from 'react';

const About = () => {
  const headingStyle = {
    fontFamily: 'Italiana, serif',
  };

  const paraStyle = {
    fontFamily: 'Estonia, cursive',
  };

  return (
    <div>
      <h1 style={headingStyle}>About</h1>
      <p style={paraStyle}>
        At Indian Ecotourism, we are passionate about promoting sustainable travel
        and showcasing the incredible natural beauty and cultural heritage of India.
        Our mission is to create memorable and meaningful experiences for travelers
        while preserving and protecting the environment and supporting local communities.
      </p>
      <p style={paraStyle}>
        India, with its diverse ecosystems, stunning landscapes, and rich biodiversity,
        offers a wealth of opportunities for ecotourism enthusiasts. From the majestic
        mountains of the Himalayas to the lush green rainforests of the Western Ghats,
        from the serene backwaters of Kerala to the vast deserts of Rajasthan, our
        country is a paradise for nature lovers.
      </p>
      <p style={paraStyle}>
        We believe that responsible tourism is the key to preserving the fragile
        ecosystems and cultural traditions that make India so unique. Our team of
        passionate experts carefully curates each ecotourism experience to ensure
        that it aligns with our core values of conservation, community empowerment,
        and education.
      </p>
      <h2 style={headingStyle}>Conservation</h2>
      <p style={paraStyle}>
        We collaborate with local conservation organizations and strive to minimize
        the ecological footprint of our tours. By promoting sustainable practices,
        such as waste reduction, energy conservation, and responsible wildlife viewing,
        we aim to protect the natural habitats and promote the long-term well-being
        of the flora and fauna.
      </p>
      <h2 style={headingStyle}>Community Empowerment</h2>
      <p style={paraStyle}>
        We strongly believe in the power of ecotourism to uplift local communities.
        We work closely with indigenous populations and rural communities to develop
        tourism initiatives that provide economic opportunities while respecting
        their cultural heritage. By supporting local businesses, employing local
        guides, and engaging in community-based projects, we aim to foster a sense
        of pride and ownership among the people who call these areas home.
      </p>
      <h2 style={headingStyle}>Education</h2>
      <p style={paraStyle}>
        We are committed to creating awareness and fostering a deep appreciation for
        the environment and cultural diversity of India. Our tours are designed to be
        immersive and educational, allowing travelers to learn from knowledgeable
        guides about the flora, fauna, and cultural practices of the regions they visit.
        We believe that by fostering a connection between travelers and the natural
        world, we can inspire a commitment to conservation and sustainable living.
      </p>
      <p style={paraStyle}>
        Whether you are interested in embarking on a wildlife safari, trekking through
        pristine forests, exploring traditional villages, or participating in conservation
        projects, Indian Ecotourism has a wide range of carefully crafted tours to cater
        to your interests. Our experienced team will ensure that you have a safe, comfortable,
        and unforgettable experience, while leaving a positive impact on the places you visit.
      </p>
      <p style={paraStyle}>
        Join us on this journey of discovery and exploration, as we strive to create a
        sustainable and responsible tourism model that showcases the best of India's
        natural and cultural treasures. Together, let's make a difference and contribute
        to the preservation of our planet's beauty for future generations.
      </p>
      <h2 style={headingStyle}>
        Welcome to Indian Ecotourism, where nature, culture, and conservation come together!
      </h2>
    </div>
  );
};

export default About;
