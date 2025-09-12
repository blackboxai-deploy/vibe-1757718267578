import { Car, Lead, Campaign } from "./types";

export const mockInventory: Car[] = [
  {
    id: "N-001",
    type: "New",
    make: "Toyota",
    model: "Corolla",
    year: 2025,
    km: 0,
    price: 760000,
    status: "Available",
    tags: ["popular"]
  },
  {
    id: "U-101",
    type: "Used",
    make: "Honda",
    model: "Civic",
    year: 2019,
    km: 54000,
    price: 420000,
    status: "Available",
    tags: ["certified"]
  },
  {
    id: "U-204",
    type: "Used",
    make: "BMW",
    model: "M3",
    year: 2016,
    km: 82000,
    price: 1850000,
    status: "Hard-to-sell",
    tags: ["performance"]
  },
  {
    id: "N-003",
    type: "New",
    make: "MG",
    model: "ZS EV",
    year: 2025,
    km: 0,
    price: 1099000,
    status: "Available",
    tags: ["ev"]
  },
  {
    id: "U-305",
    type: "Used",
    make: "Isuzu",
    model: "D-Max",
    year: 2014,
    km: 160000,
    price: 320000,
    status: "Hard-to-sell",
    tags: []
  },
  {
    id: "N-004",
    type: "New",
    make: "Mazda",
    model: "CX-5",
    year: 2024,
    km: 0,
    price: 1250000,
    status: "Available",
    tags: ["suv", "popular"]
  },
  {
    id: "U-106",
    type: "Used",
    make: "Toyota",
    model: "Camry",
    year: 2020,
    km: 42000,
    price: 850000,
    status: "Available",
    tags: ["certified", "popular"]
  }
];

export const mockLeads: Lead[] = [
  {
    id: 1,
    name: "Ms. Araya",
    interest: "Civic / budget 450k",
    stage: "Contacted",
    lastTouch: "2025-01-10"
  },
  {
    id: 2,
    name: "Mr. Somchai",
    interest: "M3 test drive",
    stage: "Test Drive",
    lastTouch: "2025-01-11"
  },
  {
    id: 3,
    name: "Mrs. Siriporn",
    interest: "CX-5 financing",
    stage: "Negotiation",
    lastTouch: "2025-01-09"
  },
  {
    id: 4,
    name: "Mr. Niran",
    interest: "ZS EV inquiry",
    stage: "New",
    lastTouch: "2025-01-12"
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: "C-001",
    name: "Flash Offer - Weekend",
    channel: "facebook",
    status: "idle",
    budget: 5000,
    target: "leads",
    lastRun: null
  },
  {
    id: "C-002", 
    name: "New Year Special",
    channel: "google",
    status: "idle",
    budget: 8000,
    target: "conversions",
    lastRun: "2025-01-01T10:00:00Z"
  }
];

export const providers = ["facebook", "google", "tiktok"];

export const priceBands = (marketPrice: number) => {
  const promo = Math.round(marketPrice * 0.95 / 1000) * 1000;
  const reasonable = Math.round(marketPrice / 1000) * 1000;
  const market = Math.round(marketPrice * 1.05 / 1000) * 1000;
  return { promo, reasonable, market };
};

export const salesScripts = {
  open: (car: Car) =>
    `สวัสดีครับ/ค่ะ! วันนี้เรามี ${car.make} ${car.model} ${car.year} สภาพ ${car.status}. ราคาแนะนำ ${priceBands(car.price).reasonable.toLocaleString()} บาท. อยากเทสไดรฟ์ไหมครับ?`,
  objection: {
    price: "ผมเข้าใจครับ/ค่ะ งบประมาณของลูกค้าอยู่ที่เท่าไหร่ครับ เรามีโปรหรือเงื่อนไขจัดไฟแนนซ์ที่ยืดหยุ่น",
    km: "เลขไมล์สูง แต่เราได้ตรวจสภาพเครื่องและมีใบรับรองจากช่าง รับประกัน 30 วัน"
  },
  cta: (car: Car) =>
    `จองตอนนี้รับข้อเสนอพิเศษ — โควต้า 1 คันต่อผู้ชม. ส่งข้อความ "จอง ${car.id}" เลยครับ!`
};