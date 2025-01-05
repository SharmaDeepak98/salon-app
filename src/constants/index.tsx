export interface NavItem {
  label: string;
  path : string;
}
export const navItems : NavItem[]= [
  {'label': 'Home', 'path': '/'},
  {'label': 'Services', 'path': '/services'},
  {'label': 'Contact Us', 'path': '/contact'},
  // {'label': 'About', 'path': '/about'},
  {'label': 'FAQs', 'path': '/faq'},
]
 export const services = [
    { name: "Haircut & Styling", price: "from $50", description: "Custom cuts and styling for all hair types" ,icon: "fas fa-cut" },
    { name: "Color & Highlights", price: "from $80", description: "Full color, highlights, balayage, and more" ,icon: "fas fa-paint-brush" },
    { name: "Treatment & Care", price: "from $45", description: "Deep conditioning and specialized treatments" ,icon: "fas fa-spa" },
  ];
export const testimonials = [
  { name: "Sarah M.", text: "Best salon experience I've ever had. My hair has never looked better!", rating: 5 },
  { name: "Michael K.", text: "Professional service and amazing results. Highly recommended!", rating: 5 },
  { name: "Emily R.", text: "Love how they took the time to understand exactly what I wanted. The attention to detail is incredible.", rating: 5 },
  { name: "Jennifer L.", text: "They transformed my hair completely! The color is perfect and the styling tips they shared were so helpful.", rating: 5 },
  { name: "Amanda T.", text: "Such a relaxing environment and the staff is incredibly skilled. My highlights look so natural.", rating: 4 },
  { name: "David P.", text: "Great atmosphere, friendly staff, and exceptional service. My go-to salon from now on.", rating: 5 },
  { name: "Rachel S.", text: "The color specialists here are truly artists. They helped me achieve exactly the look I wanted.", rating: 5 }
];

export const FAQItems = [
  {
    question: "Do I need to book an appointment, or do you accept walk-ins?",
    answer:
      "While we welcome walk-ins, we recommend booking an appointment to ensure availability, especially during busy hours.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept cash, credit/debit cards, and digital payment options like Apple Pay and Google Pay.",
  },
  {
    question: "Can you accommodate sensitive skin or allergies?",
    answer:
      "Of course! Please inform us of any sensitivities or allergies, and we will tailor our services and products to meet your needs.",
  },
  {
    question: "What brands of products do you use?",
    answer:
      "We use high-quality, salon-grade products from top brands like Olaplex, Redken, L'Oréal Professional, and more.",
  },
];