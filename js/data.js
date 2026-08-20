const services=[
{id:"general",name:"General Dentistry",icon:"fa-tooth",desc:"Check-ups, fillings and preventive dental care."},
{id:"cleaning",name:"Cleaning & Polishing",icon:"fa-wand-magic-sparkles",desc:"Professional cleaning for a fresh, healthy smile."},
{id:"cosmetic",name:"Cosmetic Dentistry",icon:"fa-sparkles",desc:"Whitening, veneers and smile design."},
{id:"ortho",name:"Orthodontics",icon:"fa-teeth",desc:"Braces and clear aligners for confident alignment."},
{id:"implants",name:"Dental Implants",icon:"fa-screwdriver-wrench",desc:"Digital implant planning and tooth replacement."},
{id:"pediatric",name:"Pediatric Dentistry",icon:"fa-child",desc:"Gentle dental visits designed for children."},
{id:"root",name:"Root Canal Care",icon:"fa-circle-dot",desc:"Comfort-focused tooth-preserving treatment."},
{id:"gum",name:"Gum Care",icon:"fa-heart-pulse",desc:"Periodontal diagnosis and treatment."}
];
const doctors=[
{id:1,name:"Dr. Maya Iyer",specialty:"Cosmetic Dentist",service:"cosmetic",experience:11,rating:4.9,reviews:248,fee:900,gender:"Female",days:["Monday","Wednesday","Friday"],image:"https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=85"},
{id:2,name:"Dr. Arjun Mehta",specialty:"Implant & Oral Surgeon",service:"implants",experience:15,rating:4.8,reviews:186,fee:1200,gender:"Male",days:["Tuesday","Thursday","Saturday"],image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85"},
{id:3,name:"Dr. Rhea Kapoor",specialty:"Orthodontist",service:"ortho",experience:9,rating:4.9,reviews:205,fee:800,gender:"Female",days:["Monday","Tuesday","Thursday"],image:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85"},
{id:4,name:"Dr. Kabir Rao",specialty:"General Dentist",service:"general",experience:12,rating:4.7,reviews:173,fee:550,gender:"Male",days:["Monday","Wednesday","Friday","Saturday"],image:"https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=900&q=85"},
{id:5,name:"Dr. Nisha Varma",specialty:"Pediatric Dentist",service:"pediatric",experience:8,rating:4.9,reviews:311,fee:650,gender:"Female",days:["Tuesday","Wednesday","Friday"],image:"https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=85"},
{id:6,name:"Dr. Dev Malhotra",specialty:"Endodontist",service:"root",experience:13,rating:4.8,reviews:154,fee:850,gender:"Male",days:["Monday","Thursday","Saturday"],image:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85"}
];
const demoUsers=[
{id:"p1",name:"Demo Patient",email:"patient@dentalcare.com",phone:"9000000001",dob:"1999-05-12",role:"patient",password:"patient123"},
{id:"d1",name:"Dr. Arjun Mehta",email:"doctor@dentalcare.com",phone:"9000000002",role:"doctor",password:"doctor123",doctorId:2},
{id:"a1",name:"DentalCare Admin",email:"admin@dentalcare.com",phone:"9000000003",role:"admin",password:"admin123"}
];
const seedAppointments=[
{id:"DC-10021",patientId:"p1",doctorId:1,doctorName:"Dr. Maya Iyer",service:"Cosmetic Dentistry",date:"2026-08-26",time:"04:30 PM",patientName:"Demo Patient",phone:"9000000001",status:"Confirmed",token:"C-027"},
{id:"DC-10020",patientId:"p1",doctorId:4,doctorName:"Dr. Kabir Rao",service:"General Dentistry",date:"2026-08-10",time:"11:00 AM",patientName:"Demo Patient",phone:"9000000001",status:"Completed",token:"G-014"}
];
function seed(){if(!localStorage.getItem("dc_users"))localStorage.setItem("dc_users",JSON.stringify(demoUsers));if(!localStorage.getItem("dc_appointments"))localStorage.setItem("dc_appointments",JSON.stringify(seedAppointments));if(!localStorage.getItem("dc_records"))localStorage.setItem("dc_records",JSON.stringify([{patientId:"p1",date:"2026-08-10",doctor:"Dr. Kabir Rao",diagnosis:"Routine examination",notes:"Continue brushing twice daily and flossing."}]));if(!localStorage.getItem("dc_rx"))localStorage.setItem("dc_rx",JSON.stringify([]))}seed();