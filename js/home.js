// feedback start
//Testimonial Data
const testimonials = [
    {
        name: "Eva Sawyer",
        image: "Assets/profile/download.jpeg",
        testimonial:
            "The uniform in white color I ordered it was so good and I am happy that what I actually want it is that thank you so much dear for this awesome uniform",
    },
    {
        name: "Katey Topaz",
        image: "Assets/profile/girls-whatsapp-dp-photo-Free-2023.jpg",
        testimonial:
            "A-1 Uniforms is the best option for buying Uniforms",
    },
    {
        name: "Jae Robin",
        image: "Assets/profile/young-african-american-man-brown-jacket-poses-street_115318-8153.avif",
        testimonial:
            "Got this set for a wedding and it is absolutely stunning in person! great quality the colors are beautiful, and it is just as described!! the pictures don't do this set justice!",
    },
    {
        name: "Nicola Blakely",
        image: "Assets/profile/portrait-of-a-indian-girl-against-the-background-of-spikelets-of-wheat-neural-network-ai-generated-photo.jpg",
        testimonial:
            "This sweatshirt is awesome! Good material, great fit, decent non cheap logo and stitching. Actually bought a second one in another color. Bought one size up so as to layer show a collar. Excellent buy. Great fit.",
    },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});
prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
});

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
    `;
};
window.onload = displayTestimonial;

//   feedback end