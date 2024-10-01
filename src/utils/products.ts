import { Product } from "./interface";
import Iphone from "../../src/assets/image/Iphone.png";
import Watch from "../../src/assets/image/apple.png";
import Airpord from "../../src/assets/image/airpods.png";

export const products: Product[] = [
  {
    id: 1,
    title: "Iphone 15Pro",
    imageSrc: Iphone,
    specification: [
      "A15Pro Chip",
      "Telephoto camera",
      "Up to 29 hours video playback",
    ],
    stockCount: 10,
    price: "$999",
  },
  {
    id: 2,
    title: "Apple Watch",
    imageSrc: Watch,
    specification: [
      "H1 Chip",
      "Active Noise Cancellation",
      "More than 24 hours of listening time",
    ],
    stockCount: 0,
    price: "$555",
  },
  {
    id: 3,
    title: "Airpods Pro",
    imageSrc: Airpord,
    specification: [
      "S7 Chip",
      "Blood Oxygen Sensor",
      "Up to 18 hours battery life",
    ],
    stockCount: 6,
    price: "$333",
  },
];
