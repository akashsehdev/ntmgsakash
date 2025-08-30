import pic1 from "../assets/pic5.jpg";
import pic2 from "../assets/pic6.jpg";
import pic3 from "../assets/pic7.JPG";
import pic4 from "../assets/pic8.JPG";
import pic5 from "../assets/pic9.JPG";

const men = [
  {
    id: "1",
    name: "Ashish",
    images: [
      { type: "main", src: pic1, label: "Main Image" },
      { type: "side", src: pic1, label: "BOTTEGA VENETA CAMPAIGN 23" },
      { type: "right", src: pic1, label: "GIORGIO ARMANI S/S 2023" },
      { type: "bottom", src: pic1, label: "ELLE ITALY MARCH 2023", credit: "Federico Porciolini" },
    ],
    bio: "Ashish began modelling at age 18. He was signed by Viva Model Management in Milan. His debut fashion show was walking for Giorgio Armani during the A/W 2020 season.",
  },
  {
    id: "2",
    name: "Isabelle Tournesol",
    images: [
      { type: "main", src: pic2, label: "Main Image" },
      { type: "side", src: pic2, label: "BOTTEGA VENETA CAMPAIGN 23" },
      { type: "right", src: pic2, label: "GIORGIO ARMANI S/S 2023" },
      { type: "bottom", src: pic2, label: "ELLE ITALY MARCH 2023", credit: "Federico Porciolini" },
    ],
    bio: "Isabelle began modelling at age 18. She was signed by Viva Model Management in Milan. Her debut fashion show was walking for Giorgio Armani during the A/W 2020 season.",
  },
  {
    id: "3",
    name: "Another Model",
    images: [
      { type: "main", src: pic3, label: "Main Image" },
      { type: "side", src: pic3, label: "BOTTEGA VENETA CAMPAIGN 23" },
      { type: "right", src: pic3, label: "GIORGIO ARMANI S/S 2023" },
      { type: "bottom", src: pic3, label: "ELLE ITALY MARCH 2023", credit: "Federico Porciolini" },
    ],
    bio: "Bio here...",
  },
];

export default men;
