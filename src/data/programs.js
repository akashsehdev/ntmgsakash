import image from "../assets/test2.jpeg";
import one from "../assets/programs/one.jpg";
import two from "../assets/programs/two.jpg";
import three from "../assets/programs/three.jpg";
import four from "../assets/programs/four.jpg";
import five from "../assets/programs/five.jpg";
import six from "../assets/programs/six.jpeg";

const programs = [
  {
    title: "MODELLING PROGRAM",
    duration: "1 MONTH",
    image: one,
    slug: "online-mentoring-program",
    about:
      "Your introduction to the world of fashion & modelling. Build confidence and learn essential skills in just 4 weeks.",
    // fees: "₹30,000 – ₹35,000",
    overview: "Duration: 1 Month (4 weeks, 3 sessions/week)",
    plan: [
      {
        week: "Week 1",
        topics: [
          "Introduction to Modelling Industry & Etiquette",
          "Basics of Ramp Walk & Catwalk (Posture, Balance, Turns)",
          "Grooming: Skincare & Personal Styling Tips",
        ],
      },
      {
        week: "Week 2",
        topics: [
          "Camera Posing: E-commerce & Casual Editorial",
          "Facial Expressions for Photoshoots",
          "Personality Development: Confidence Building",
        ],
      },
      {
        week: "Week 3",
        topics: [
          "Advanced Walks: Audition Walks & Turns",
          "Make-up & Hair Basics for Models",
          "Social Media Profile Setup & Basics",
        ],
      },
      {
        week: "Week 4",
        topics: [
          "Trial Portfolio Shoot (Optional Add-on: 2 Looks)",
          "Portfolio Review & Mentor Feedback",
          "Certificate Distribution",
        ],
      },
    ],
  },
  {
    title: "GROUP BATCH PROGRAM",
    duration: "2 MONTH",
    image: two,
    slug: "group-batch",
    about:
      "A holistic program preparing you for fashion weeks, portfolio development, and industry networking. Expand your skills with hands-on training, styling sessions, and a trial shoot.",
    // fees: "₹40,000 – ₹90,000 (with portfolio)",
    overview: "Duration: 2 Months (8 weeks, 3 sessions/week)",
    plan: [
      {
        month: "Weeks 1-2",
        topics: [
          "Advanced Ramp Walk & Stage Presence",
          "Expression Coaching for Photoshoots",
          "Personal Styling & Wardrobe Consultation",
        ],
      },
      {
        month: "Week 3-4",
        topics: [
          "Camera Training: Editorial & High-Fashion Posing",
          "Hair & Makeup Masterclass",
          "Fitness & Nutrition Guidance",
        ],
      },
      {
        month: "Week 5-6",
        topics: [
          "Theatre Classes: Confidence & Voice Modulation",
          "Acting Basics for TVCs & Fashion Films",
          "Social Media Branding & Growth Tips",
        ],
      },
      {
        month: "Week 7-8",
        topics: [
          "Trial Shoot with 3 Looks (Optional Add-on)",
          "Portfolio Development Guidance",
          "Mentor Review & Certification",
        ],
      },
    ],
  },
  {
    title: "SPECIAL BATCH",
    duration: "3 MONTH",
    image: three,
    slug: "special-batch",
    about:
      "A holistic program preparing you for fashion weeks, portfolio development, and industry networking.",
    // fees: "₹40,000 – ₹90,000 (with portfolio)",
    overview: "Duration: 3 Months (12 weeks, 3 sessions/week)",
    plan: [
      {
        month: "Month 1 (Weeks 1-4)",
        topics: [
          "Complete Runway Techniques (Audition Walk, Turns, Poses)",
          "Personality Development & Confidence Building",
          "Makeup, Hair, and Skincare Mastery",
          "Trial Shoot (2 Looks)",
        ],
      },
      {
        month: "Month 2 (Weeks 5-8)",
        topics: [
          "Advanced Posing for High Fashion & Editorial Shoots",
          "Theatre & Acting Workshops for TVCs",
          "Portfolio Development Guidance",
        ],
      },
      {
        month: "Month 3 (Weeks 9-12)",
        topics: [
          "Final Professional Portfolio Shoot (3/5 Looks)",
          "Social Media Strategy & Digital Branding",
          "Mentor Sessions + Placement Assistance",
        ],
      },
    ],
  },
  {
    title: "TALENTXCLUSIVE BATCH",
    duration: "6 MONTH",
    image: four,
    slug: "personal-batch",
    about: "The ultimate career-launching program, covering all aspects of modelling, acting, and branding.",
    // fees: "₹25,000 – ₹60,000 (+₹10k for Video)",
    overview: "Duration: 6 Months (24 weeks, 3-4 sessions/week)",
    plan: [
      {
        week: "Month 1-2",
        topics: [
          "Modelling Fundamentals & Advanced Ramp Walk",
          "Personal Image Transformation & Styling",
          "Test Shoots for Practice",
          "Hair & Makeup Trials",
        ],
      },
      {
        week: "Month 3-4",
        topics: [
          "Advanced Acting & Theatre Workshops",
          "Social Media Monetisation for Models",
          "Networking Events & Backstage Training",
        ],
      },
      {
        week: "Months 5-6",
        topics: [
          "Final Professional Portfolio (5 Looks + Video Add-on)",
          "Media Training for Interviews & Runways",
          "Placement Assistance for Fashion Weeks & Agencies",
        ],
      },
    ],
  },
  {
    title: "PAGEANT GROOMING PROGRAM",
    duration: "2 MONTH",
    image: five,
    slug: "talentxclusive-batch",
    about:
      "Specially designed for beauty pageant aspirants to excel on and off stage. Welcome to the Pageant Training Program at New Talent Models Grooming School, where dreams take center stage and stars are born! Our program is meticulously crafted to empower aspiring pageant contestants with the skills, confidence, and grace needed to shine in the spotlight. Led by industry experts and seasoned professionals, our comprehensive curriculum covers everything from runway etiquette to interview techniques, ensuring each participant is fully equipped to dazzle judges and captivate audiences. Through personalized coaching sessions, mock pageants, and exclusive workshops, we cultivate poise, presence, and polish in every student, nurturing their unique talents and refining their natural beauty.",
    // fees: "₹1,50,000 – ₹1,80,000",
    overview: "Duration: 2 Months (8 weeks, 3 sessions/week",
    plan: [
      {
        months: "Week 1-2",
        topics: [
          "Ramp Walk Techniques for Pageants",
          "Personality Development & Etiquette",
        ],
      },
      {
        months: "Week 3-4",
        topics: [
          "Styling & Wardrobe Guidance",
          "Voice Modulation & Public Speaking",
        ],
      },
      {
        months: "Week 5-6",
        topics: [
          "Fitness Coaching & Stage Presence Drills",
          "Mock Pageant Q&A Sessions",
        ],
      },
      {
        months: "Week 7-8",
        topics: [
          "Pageant Dress Rehearsals",
          "Professional Photoshoot (2 Looks)",
        ],
      },
    ],
  },

  {
    title: "PORTFOLIO DEVELOPMENT PROGRAM",
    duration: "3 WEEKS",
    image: six,
    slug: "portfolio-development",
    about: "Build a high-impact professional portfolio with expert guidance.",
    fees: "₹25,000 – ₹60,000 (+₹10k for Video)",
    overview: "Duration: 3 Weeks",
    plan: [
      {
        week: "Week 1",
        topics: [
          "Styling Consultation & Outfit Planning",
          "Hair & Makeup Trials",
        ],
      },
      {
        week: "Week 2",
        topics: [
          "Professional Studio Photoshoots (2/3/5 Looks)",
          "Digital Portfolio Creation",
        ],
      },
      {
        week: "Week 3",
        topics: [
          "Portfolio Review & Corrections",
          "Final Delivery (Print & Digital Versions)",
        ],
      },
    ],
  },
  {
    title: "MODELLING ESSENTIALS PROGRAM",
    duration: "15 DAYS",
    image: image,
    slug: "modelling-essentials",
    about: "A short program to build confidence and learn modelling basics.",
    // fees: "₹15,000 – ₹20,000",
    overview: "Duration: 15 Days (6 sessions)",
    plan: [
      {
        days: "Day 1-2",
        topics: [
          "Introduction to Modelling Industry",
          "Posture & Walk Training",
        ],
      },
      {
        days: "Day 3-4",
        topics: [
          "Basic Posing Techniques for Camera",
          "Grooming & Skincare Basics",
        ],
      },
      {
        days: "Day 5-6",
        topics: [
          "Trial Shoot (1 Look Optional)",
          "Mentor Feedback & Certification",
        ],
      },
    ],
  },
];

export default programs;
