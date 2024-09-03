import React from "react";
import aboutImg from "../assets/about-2.jpg";

function AboutPage() {
  return (
    <main className="mt-8 flex max-w-4xl flex-col items-center">
      <h1 className="text-4xl font-bold">About Us</h1>
      <img src={aboutImg} alt="" className="mt-4 w-full" />
      <article className="mt-8 space-y-4 text-lg">
        <p>
          Welcome to Shinano, your destination for simple, good products. Our
          name, Shinano, is inspired by Japan's longest river, the Shinano
          River.
        </p>
        <p>
          The Shinano River flows majestically through the heart of Japan, and
          it has long been a lifeline for trade and commerce. For centuries,
          merchants traveled its length, transporting goods and connecting
          people. The river's enduring legacy of supporting trade and fostering
          connections is at the core of our mission.
        </p>
        <p>
          At Shinano, we honor this tradition by offering carefully selected
          products that embody the simplicity and quality that have been valued
          for generations. Our motto, "Simple Good Products," reflects our
          commitment to providing you with items that are both functional and
          beautifully crafted, just as the Shinano River has provided for its
          communities for millennia.
        </p>
        <p>
          Thank you for choosing Shinano. We hope to bring the same reliability
          and excellence to your shopping experience as the Shinano River has
          brought to Japan for thousands of years.
        </p>
      </article>
    </main>
  );
}

export default AboutPage;
