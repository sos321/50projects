const projects = document.getElementById("projects");

const projectsObj = [
  {
    title: "Expanding Cards",
    description: "Full page image gallery with expanding animations.",
  },
  {
    title: "Progress Steps",
    description: "Simple progress steps with animations between them.",
  },
  {
    title: "Rotating Navigation",
    description:
      "Full page article with a navigation sidebar that rotates the entire page.",
  },
  {
    title: "Hidden Search Widget",
    description: "Search icon that expands when clicked with animation.",
  },
  {
    title: "Blurry Loading",
    description:
      "Loads to 100% while making the background image less and less blury.",
  },
  {
    title: "Scroll Animation",
    description: "Infinite page with containers added dinamically.",
  },
  {
    title: "Split Landing Page",
    description: "Two landing pages in one with width effects on hover.",
  },
  {
    title: "Form Wave Animation",
    description: "Simple form with an animated placeholder text.",
  },
  {
    title: "Sound board",
    description: "Multiple buttons each making different sound when pressed.",
  },
  {
    title: "Dad jokes",
    description: "Generates random jokes (very bad jokes).",
  },
  {
    title: "Event Key Codes",
    description:
      "Webpage that show the keycode of the pressed key in different formats.",
  },
  {
    title: "FAQ Collapse",
    description: "Simple FAQ with collapsing answers.",
  },
  {
    title: "Random Choice Picker",
    description:
      "Webpage where the user enters their choices and the program choosees one at random.",
  },
  {
    title: "Animated Navigation",
    description:
      "Menu button with cool animations when transitioning to open/close.",
  },
  {
    title: "Incrementing Counter",
    description: "Counter which shows the values with a beggining animation.",
  },
  {
    title: "Drink Water",
    description:
      "Web app that shows you how much water you have drank and how much is remaining.",
  },
  {
    title: "Movie App",
    description:
      "Website that displays a number of movies and thier previews fetched from an API.",
  },
  {
    title: "Background Slider",
    description: "Image slider with cool double image effect.",
  },
  {
    title: "Theme Clock",
    description: "Clock with date styled as an anologue clock with dark mode.",
  },
  {
    title: "Ripple Effect",
    description:
      "Button with a ripple effect from the place where the user clicks.",
  },
  {
    title: "DragnDrop",
    description:
      "Webpage where the user can drag an image to a box and it snaps into position.",
  },
  {
    title: "Drawing App",
    description:
      "Web app that utilizes the canvas element and alows you to draw with different color and width.",
  },
  {
    title: "Kinetic Loader",
    description:
      "Loader styled to two triangles which flip and create a nice effect.",
  },
  {
    title: "Content Placeholder",
    description:
      "Card with placeholder animations simmilar to twitters loading placeholder.",
  },
  {
    title: "Sticky Navbar",
    description:
      "Website with a sticky navigation utilizing the Intersection Observer.",
  },
  {
    title: "Vertical Slider",
    description:
      "Image carousel that moves up (images) and down (description).",
  },
  {
    title: "Toast Notification",
    description:
      "Button which shows a toast notification that stack and disappers.",
  },
  {
    title: "Github Profiles",
    description: "Webpage that shows Github stats using the Github API",
  },
  {
    title: "Double Heart Click",
    description:
      "image that shows an animation of a heart when double clicked.",
  },
  {
    title: "Auto Text Effect",
    description:
      "Text effect that writes out words one letter at a time with variable speed.",
  },
  {
    title: "Password Generator",
    description: "Password generator with length and character type options.",
  },
  {
    title: "Good, Cheap and Fast Checkboxes",
    description: "Checkboxes which cancel each other when clicked.",
  },
  {
    title: "Notes App",
    description: "Simple notes web app with markup support and memory.",
  },
  {
    title: "Animated Countdown",
    description:
      "Countdown from 3 with unique rotation and postition animations.",
  },
  {
    title: "Image Carousel",
    description: "Image carousel with automatic and manual sliding.",
  },
  {
    title: "Hover Board",
    description:
      "Hover board which lights up with different colors when hovered.",
  },
  {
    title: "Pokedex",
    description:
      "Website that shows all pokemons with their type, name and image. Data fetched from API.",
  },
  {
    title: "Mobile Tab Navigation",
    description:
      "Mobile display with a navigation tab which displays different images.",
  },
  {
    title: "Password Strength",
    description:
      "Simple sign-up form which shows the strength of the password by bluring the background image.",
  },
  {
    title: "3D Background Image",
    description:
      "Image that animates into 3D cubes each displaying a part of the image.",
  },
  {
    title: "Verify Account UI",
    description:
      "Automatic place to enter a six-digit code for verification styled with tailwindcss.",
  },
  {
    title: "Live User Filter",
    description:
      "Loads random users from API and filters the users with the entered query.",
  },
  {
    title: "Feedback UI Design",
    description: "Simple feedback screen with three options to choose from.",
  },
  {
    title: "Custom Range Slider",
    description:
      "Slider that is styled and shows the currently selected value.",
  },
  {
    title: "Netflix Navigation",
    description:
      "Navigation sidebar with unique animations with Netflix colors.",
  },
  {
    title: "Quiz App",
    description:
      "Simple quiz app that lets jou choose from 4 answers and displays results.",
  },
  {
    title: "Testimonial Box Switcher",
    description:
      "Automatic testimonial carousel with a slider indicating when the next will come.",
  },
  {
    title: "Random Image Feed",
    description:
      "Displays a great ammount of random images fetched from the Unsplash API",
  },
  {
    title: "Todo List",
    description: "Nicely syled todo list with memory and completed tasks.",
  },
  {
    title: "Insect Catch Game",
    description:
      "Game where you select an insect and try to catch as many as you can.",
  },
];

for (let i = 1; i < 51; i++) {
  const project = document.createElement("div");
  project.classList.add("project");

  const { title, description } = projectsObj[i - 1] || {
    title: "Title Placeholder",
    description: "",
  };

  project.innerHTML = `
    <p class="project-title">Day ${i.toString().padStart(2, "0")}</p>
    <h5 class="project-link">
      <a href="./Day_${i.toString().padStart(2, "0")}" class="link"
      target="_blank" >${title.padEnd(100, "\n")}</a
      >
    </h5>
    <div class="objectives">
      <p class="description: """>${description}</p>
    </div>
    `;

  projects.appendChild(project);
}
