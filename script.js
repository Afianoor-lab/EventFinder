// ================================
// Dummy Event Data (Simulated API)
// ================================

const eventsData = [
  {
    name: "Tech Startup Meetup",
    date: "March 15, 2026 • 6:00 PM",
    location: "Lahore, Pakistan",
    description:
      "Connect with founders, developers, and investors in the local tech ecosystem."
  },
  {
    name: "UI/UX Design Workshop",
    date: "March 20, 2026 • 10:00 AM",
    location: "Islamabad, Pakistan",
    description:
      "Hands-on workshop focused on modern user interface and experience design."
  },
  {
    name: "AI & Data Science Conference",
    date: "April 2, 2026 • 9:00 AM",
    location: "Karachi, Pakistan",
    description:
      "Learn about emerging trends in artificial intelligence and data science."
  },
  {
    name: "Freelancing Bootcamp",
    date: "April 10, 2026 • 5:00 PM",
    location: "Online",
    description:
      "Step-by-step guidance to build a successful freelancing career in tech."
  },
  {
    name: "Web Development Hackathon",
    date: "April 18, 2026 • 11:00 AM",
    location: "Lahore, Pakistan",
    description:
      "A 24-hour hackathon focused on building innovative web applications."
  },
  {
    name: "Cyber Security Awareness Session",
    date: "April 22, 2026 • 3:00 PM",
    location: "Faisalabad, Pakistan",
    description:
      "Understand cyber threats and learn best practices for online security."
  },
  {
    name: "Cloud Computing Seminar",
    date: "May 1, 2026 • 12:00 PM",
    location: "Islamabad, Pakistan",
    description:
      "Introduction to cloud platforms, deployment models, and career paths."
  },
  {
    name: "Python for Beginners",
    date: "May 5, 2026 • 4:00 PM",
    location: "Online",
    description:
      "Beginner-friendly Python session covering fundamentals and real examples."
  },
  {
    name: "Women in Tech Networking Event",
    date: "May 10, 2026 • 6:30 PM",
    location: "Karachi, Pakistan",
    description:
      "Networking event aimed at empowering and connecting women in technology."
  },
  {
    name: "Mobile App Development Workshop",
    date: "May 18, 2026 • 11:00 AM",
    location: "Multan, Pakistan",
    description:
      "Practical workshop covering Android and cross-platform mobile app development fundamentals."
  },
  {
    name: "Digital Marketing & SEO Bootcamp",
    date: "May 25, 2026 • 2:00 PM",
    location: "Online",
    description:
      "Learn SEO, social media marketing, and digital growth strategies for modern businesses."
  }
];

// ================================
// DOM Elements
// ================================

const eventsContainer = document.getElementById("eventsContainer");
const searchInput = document.getElementById("searchInput");

// ================================
// Render Events Function
// ================================

function renderEvents(events) {
  eventsContainer.innerHTML = "";

  events.forEach(event => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";

    eventCard.innerHTML = `
      <div>
        <h3>${event.name}</h3>
        <div class="event-meta">${event.date}</div>
        <div class="event-meta">${event.location}</div>
        <p class="event-description">${event.description}</p>
      </div>
      <button class="register-btn">Register</button>
    `;

    eventsContainer.appendChild(eventCard);
  });
}

// ================================
// Initial Load (Simulated Fetch)
// ================================

document.addEventListener("DOMContentLoaded", () => {
  // Simulating API delay
  setTimeout(() => {
    renderEvents(eventsData);
  }, 300);
});

// ================================
// Search Filter Logic
// ================================

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchText)
  );

  renderEvents(filteredEvents);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ================================
// Fetch Events from API
// ================================
async function fetchEvents() {
  try {
    const response = await fetch('https://mockapi.io/projects/your-events-endpoint'); // replace with real API
    const data = await response.json();
    return data; // array of events
  } catch (error) {
    console.error('Error fetching events:', error);
    return []; // fallback empty array
  }
}


