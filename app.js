// ===== Skenya Motors - Automotive Management System =====
// Uganda | Currency: UGX (Ugandan Shilling)

// ===== MOCK DATA =====
const DB = {
  currentUser: null,
  currentBranch: 'Kampala Main Branch',
  users: [
    { id: 1, name: 'Brian Ssekiranda', email: 'admin@skenyamotors.ug', password: 'admin', role: 'Super Admin', avatar: 'BS', dept: 'Management', joined: '2020-06-01', phone: '+256 701 123 456', status: 'active' },
    { id: 2, name: 'Grace Namukasa', email: 'manager@skenyamotors.ug', password: 'manager', role: 'Branch Manager', avatar: 'GN', dept: 'Operations', joined: '2021-02-10', phone: '+256 702 234 567', status: 'active' },
    { id: 3, name: 'Ronald Ochieng', email: 'advisor@skenyamotors.ug', password: 'advisor', role: 'Service Advisor', avatar: 'RO', dept: 'Service', joined: '2021-08-15', phone: '+256 703 345 678', status: 'active' },
    { id: 4, name: 'Moses Kiggundu', email: 'mechanic@skenyamotors.ug', password: 'mechanic', role: 'Mechanic', avatar: 'MK', dept: 'Workshop', joined: '2020-11-01', phone: '+256 704 456 789', status: 'active' },
    { id: 5, name: 'Irene Achieng', email: 'accounts@skenyamotors.ug', password: 'accounts', role: 'Accountant', avatar: 'IA', dept: 'Finance', joined: '2021-04-20', phone: '+256 705 567 890', status: 'active' },
    { id: 6, name: 'Patrick Wasswa', email: 'sales@skenyamotors.ug', password: 'sales', role: 'Sales Executive', avatar: 'PW', dept: 'Sales', joined: '2022-01-05', phone: '+256 706 678 901', status: 'active' },
  ],
  customers: [
    { id: 'C001', name: 'Mukasa Robert', phone: '+256 772 100 200', email: 'mukasa.r@gmail.com', type: 'VIP', vehicles: ['V001', 'V003'], totalSpent: 18500000, lastVisit: '2025-01-08', city: 'Kampala', notes: 'Fleet owner. Runs 5 trucks on Kampala-Mbarara route. Always needs quick turnaround.' },
    { id: 'C002', name: 'Nakato Sarah', phone: '+256 752 200 300', email: 'nakato.s@email.com', type: 'Regular', vehicles: ['V002'], totalSpent: 4200000, lastVisit: '2025-01-05', city: 'Entebbe', notes: '' },
    { id: 'C003', name: 'Okello James', phone: '+256 782 300 400', email: 'okello.j@email.com', type: 'Regular', vehicles: ['V004'], totalSpent: 3800000, lastVisit: '2024-12-20', city: 'Jinja', notes: '' },
    { id: 'C004', name: 'Nantongo Fatuma', phone: '+256 703 400 500', email: 'nantongo.f@email.com', type: 'VIP', vehicles: ['V005', 'V007'], totalSpent: 28900000, lastVisit: '2025-01-10', city: 'Kampala', notes: 'Corporate account - Nantongo Transport Ltd. Monthly fleet service. 8 trucks.' },
    { id: 'C005', name: 'Waiswa Daniel', phone: '+256 774 500 600', email: 'waiswa.d@email.com', type: 'New', vehicles: [], totalSpent: 0, lastVisit: null, city: 'Mukono', notes: '' },
    { id: 'C006', name: 'Apio Christine', phone: '+256 756 600 700', email: 'apio.c@email.com', type: 'Regular', vehicles: ['V006'], totalSpent: 6700000, lastVisit: '2024-12-10', city: 'Gulu', notes: 'Northern Uganda route. Needs heavy-duty parts.' },
  ],
  vehicles: [
    { id: 'V001', reg: 'UAA 001A', make: 'Isuzu', model: 'FVR 34 Long Haul Truck', year: 2021, color: 'White', vin: 'JALAAA1A5M7100123', mileage: 142000, owner: 'C001', status: 'In Service', fuel: 'Diesel', insurance: '2025-07-14', warranty: 'Expired', type: 'Truck' },
    { id: 'V002', reg: 'UBA 123B', make: 'Toyota', model: 'Hilux Surf 4x4', year: 2020, color: 'Silver', vin: 'JTEBR3FJ5LK012345', mileage: 88000, owner: 'C002', status: 'Ready', fuel: 'Diesel', insurance: '2025-09-30', warranty: '2025-06-01', type: 'SUV' },
    { id: 'V003', reg: 'UAB 456C', make: 'Hino', model: '500 Series FC Cargo Truck', year: 2022, color: 'Blue', vin: 'JHDFA1JA4NX034567', mileage: 95000, owner: 'C001', status: 'Waiting', fuel: 'Diesel', insurance: '2026-02-20', warranty: '2026-02-01', type: 'Truck' },
    { id: 'V004', reg: 'UCA 789D', make: 'Mitsubishi', model: 'Canter 3.5T Light Truck', year: 2019, color: 'Red', vin: 'JMYEAA1A5KJ056789', mileage: 198000, owner: 'C003', status: 'Ready', fuel: 'Diesel', insurance: '2025-05-10', warranty: 'Expired', type: 'Truck' },
    { id: 'V005', reg: 'UAC 321E', make: 'Scania', model: 'R500 Heavy Hauler', year: 2023, color: 'Orange', vin: 'YS2R4X20001234567', mileage: 61000, owner: 'C004', status: 'In Service', fuel: 'Diesel', insurance: '2026-04-15', warranty: '2027-01-01', type: 'Truck' },
    { id: 'V006', reg: 'UBB 654F', make: 'Toyota', model: 'Land Cruiser 79 Series Pickup', year: 2021, color: 'White', vin: 'JTFHZ11J0K5078901', mileage: 74000, owner: 'C006', status: 'Ready', fuel: 'Diesel', insurance: '2025-12-01', warranty: '2025-11-01', type: 'Pickup' },
    { id: 'V007', reg: 'UAD 999G', make: 'MAN', model: 'TGS 26.480 Tipper Truck', year: 2022, color: 'Yellow', vin: 'WMAH06ZZ5NM890123', mileage: 112000, owner: 'C004', status: 'In Service', fuel: 'Diesel', insurance: '2026-01-10', warranty: '2026-06-01', type: 'Truck' },
  ],
  jobs: [
    { id: 'JC-2501-001', vehicle: 'V001', customer: 'C001', type: 'Major Service', status: 'In Progress', mechanic: 4, advisor: 3, priority: 'High', bay: 'Bay 2', created: '2025-01-10 08:00', eta: '2025-01-10 18:00', mileage: 142000, estimate: 1850000, notes: 'Full engine check. Customer needs truck back by evening for night run to Mbarara.', checklist: [{item:'Engine Oil & Filter Change',done:true},{item:'Fuel Filter Replacement',done:true},{item:'Tyre Inspection (10 tyres)',done:false},{item:'Brake Drum Check',done:false},{item:'Differential Oil',done:false},{item:'Battery & Alternator Test',done:false}], parts: [{id:'P001',name:'Engine Oil 15W-40 (1L)',qty:16,price:18000},{id:'P005',name:'Fuel Filter',qty:1,price:65000}] },
    { id: 'JC-2501-002', vehicle: 'V003', customer: 'C001', type: 'Brake Overhaul', status: 'Waiting', mechanic: null, advisor: 3, priority: 'Normal', bay: null, created: '2025-01-10 10:00', eta: '2025-01-12 17:00', mileage: 95000, estimate: 2800000, notes: 'Brake drum worn out. Grinding noise on downhill.', checklist: [{item:'Front Brake Drums',done:false},{item:'Rear Brake Drums',done:false},{item:'Brake Linings',done:false},{item:'Wheel Cylinders',done:false},{item:'Brake Fluid Flush',done:false}], parts: [] },
    { id: 'JC-2501-003', vehicle: 'V005', customer: 'C004', type: 'Engine Overhaul', status: 'In Progress', mechanic: 4, advisor: 3, priority: 'Urgent', bay: 'Bay 1', created: '2025-01-08 07:30', eta: '2025-01-15 17:00', mileage: 61000, estimate: 12500000, notes: 'Scania engine losing power. Black smoke. Turbo suspected. Corporate priority.', checklist: [{item:'Turbocharger Inspection',done:true},{item:'Injector Testing',done:true},{item:'Compression Test',done:true},{item:'EGR Valve Clean',done:false},{item:'Intercooler Check',done:false},{item:'Engine Mount Check',done:false}], parts: [{id:'P008',name:'Turbocharger Kit',qty:1,price:4500000}] },
    { id: 'JC-2501-004', vehicle: 'V002', customer: 'C002', type: 'Minor Service', status: 'Completed', mechanic: 4, advisor: 3, priority: 'Normal', bay: 'Bay 3', created: '2025-01-08 09:00', eta: '2025-01-08 14:00', mileage: 88000, estimate: 380000, notes: '', checklist: [{item:'Oil Change',done:true},{item:'Tyre Pressure',done:true},{item:'Lights & Wipers',done:true}], parts: [{id:'P001',name:'Engine Oil 15W-40',qty:5,price:18000}] },
    { id: 'JC-2501-005', vehicle: 'V007', customer: 'C004', type: 'Suspension Repair', status: 'Waiting', mechanic: null, advisor: 3, priority: 'High', bay: null, created: '2025-01-10 13:00', eta: '2025-01-14 17:00', mileage: 112000, estimate: 4200000, notes: 'Rear suspension collapsed. Truck overloaded on Kampala-Gulu highway.', checklist: [{item:'Rear Leaf Springs',done:false},{item:'U-Bolts Replacement',done:false},{item:'Shock Absorbers',done:false},{item:'Chassis Inspection',done:false}], parts: [] },
  ],
  parts: [
    { id: 'P001', name: 'Engine Oil 15W-40 (1L)', sku: 'OIL-15W40-1L', category: 'Lubricants', supplier: 'Total Uganda Ltd', stock: 220, minStock: 80, price: 18000, cost: 11000, location: 'A-01', unit: 'Litre' },
    { id: 'P002', name: 'Air Filter - Truck Heavy Duty', sku: 'FLT-AIR-HD1', category: 'Filters', supplier: 'Uganda Spare Parts Ltd', stock: 18, minStock: 20, price: 145000, cost: 88000, location: 'B-03', unit: 'Piece' },
    { id: 'P003', name: 'Brake Linings Set (Truck)', sku: 'BRK-LIN-TRK', category: 'Brakes', supplier: 'Mombasa Auto Parts', stock: 6, minStock: 15, price: 380000, cost: 220000, location: 'C-01', unit: 'Set' },
    { id: 'P004', name: 'Truck Tyre 11R22.5 (Heavy)', sku: 'TYR-11R225-H', category: 'Tyres', supplier: 'Bridgestone Uganda', stock: 22, minStock: 20, price: 950000, cost: 680000, location: 'D-01', unit: 'Piece' },
    { id: 'P005', name: 'Fuel Filter - Diesel', sku: 'FLT-FUEL-DSL', category: 'Filters', supplier: 'Uganda Spare Parts Ltd', stock: 34, minStock: 25, price: 65000, cost: 38000, location: 'B-02', unit: 'Piece' },
    { id: 'P006', name: 'Gear Oil 80W-90 (1L)', sku: 'OIL-GEAR-80W', category: 'Lubricants', supplier: 'Total Uganda Ltd', stock: 55, minStock: 30, price: 22000, cost: 13500, location: 'A-04', unit: 'Litre' },
    { id: 'P007', name: 'Coolant Concentrate (1L)', sku: 'FLD-COOL-1L', category: 'Lubricants', supplier: 'Prestone EA', stock: 8, minStock: 30, price: 35000, cost: 21000, location: 'A-03', unit: 'Litre' },
    { id: 'P008', name: 'Turbocharger Kit - Isuzu/Hino', sku: 'ENG-TURBO-UNV', category: 'Engine', supplier: 'Nairobi Truck Parts Ltd', stock: 1, minStock: 3, price: 4500000, cost: 2900000, location: 'E-01', unit: 'Piece' },
    { id: 'P009', name: 'Leaf Spring Set (Rear Truck)', sku: 'SUS-LEAF-RR1', category: 'Suspension', supplier: 'Mombasa Auto Parts', stock: 4, minStock: 8, price: 1800000, cost: 1100000, location: 'F-02', unit: 'Set' },
    { id: 'P010', name: 'Battery 200Ah Truck', sku: 'ELC-BAT-200A', category: 'Electrical', supplier: 'Chloride Exide Uganda', stock: 9, minStock: 8, price: 650000, cost: 420000, location: 'G-01', unit: 'Piece' },
  ],
  invoices: [
    { id: 'INV-2501-001', job: 'JC-2501-004', customer: 'C002', vehicle: 'V002', date: '2025-01-08', due: '2025-01-22', subtotal: 380000, tax: 68400, discount: 0, total: 448400, paid: 448400, status: 'Paid', items: [{desc:'Minor Service Labour',qty:1,price:290000},{desc:'Engine Oil 15W-40 x5L',qty:5,price:18000}] },
    { id: 'INV-2501-002', job: 'JC-2501-001', customer: 'C001', vehicle: 'V001', date: '2025-01-10', due: '2025-01-24', subtotal: 1850000, tax: 333000, discount: 100000, total: 2083000, paid: 0, status: 'Pending', items: [{desc:'Major Service Labour',qty:1,price:1500000},{desc:'Engine Oil 15W-40 x16L',qty:16,price:18000},{desc:'Fuel Filter',qty:1,price:65000}] },
    { id: 'INV-2501-003', job: 'JC-2501-003', customer: 'C004', vehicle: 'V005', date: '2025-01-09', due: '2025-01-23', subtotal: 17000000, tax: 3060000, discount: 500000, total: 19560000, paid: 9000000, status: 'Partial', items: [{desc:'Engine Overhaul Labour',qty:1,price:12500000},{desc:'Turbocharger Kit',qty:1,price:4500000}] },
  ],
  salesVehicles: [
    { id: 'SV001', make: 'Isuzu', model: 'FVR 34P Cargo Truck', year: 2024, price: 185000000, cost: 148000000, color: 'White', mileage: 0, status: 'Available', condition: 'New', fuel: 'Diesel', emoji: '🚛', type: 'Truck' },
    { id: 'SV002', make: 'Hino', model: '300 Series 916 Light Truck', year: 2023, price: 98000000, cost: 76000000, color: 'White', mileage: 28000, status: 'Reserved', condition: 'Used', fuel: 'Diesel', emoji: '🚚', type: 'Truck' },
    { id: 'SV003', make: 'Toyota', model: 'Land Cruiser 79 Double Cab', year: 2024, price: 145000000, cost: 118000000, color: 'Silver', mileage: 0, status: 'Available', condition: 'New', fuel: 'Diesel', emoji: '🚙', type: 'Pickup' },
    { id: 'SV004', make: 'Scania', model: 'P360 Tipper Truck', year: 2023, price: 420000000, cost: 340000000, color: 'Orange', mileage: 15000, status: 'Sold', condition: 'Used', fuel: 'Diesel', emoji: '🚛', type: 'Truck' },
    { id: 'SV005', make: 'Mitsubishi', model: 'Fuso FJ Heavy Truck', year: 2024, price: 210000000, cost: 168000000, color: 'Blue', mileage: 0, status: 'Available', condition: 'New', fuel: 'Diesel', emoji: '🚚', type: 'Truck' },
    { id: 'SV006', make: 'Toyota', model: 'Hilux GD-6 4x4 Raider', year: 2024, price: 78000000, cost: 62000000, color: 'White', mileage: 0, status: 'Available', condition: 'New', fuel: 'Diesel', emoji: '🚙', type: 'Pickup' },
  ],
  branches: ['Kampala Main Branch', 'Jinja Branch', 'Mbarara Branch', 'Gulu Branch'],
  revenueData: [38, 42, 55, 48, 61, 70, 58, 82, 75, 91, 88, 105],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

// ===== ICONS (inline SVG) =====
const icons = {
  dashboard: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  customers: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  vehicles: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2M9 17a2 2 0 100 4 2 2 0 000-4zM17 17a2 2 0 100 4 2 2 0 000-4z"/></svg>`,
  workshop: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  sales: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.96-1.61L23 6H6"/></svg>`,
  parts: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  billing: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
  accounting: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
  reports: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  employees: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  ai: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  settings: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M20 12h2M2 12h2M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41"/></svg>`,
  search: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  plus: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  bell: `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>`,
  filter: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  download: `<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  check: `<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  arrow_up: `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>`,
  arrow_down: `<svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`,
  edit: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>`,
  eye: `<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  more: `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
};

// ===== UTILS =====
const $ = id => document.getElementById(id);
const $q = q => document.querySelector(q);
const $qa = q => document.querySelectorAll(q);
const fmt = n => 'UGX ' + Number(n).toLocaleString('en-UG', {minimumFractionDigits: 0});
const fmtN = n => Number(n).toLocaleString();

function toast(msg, type = 'success') {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;padding:12px 20px;border-radius:10px;font-size:13.5px;font-weight:500;display:flex;align-items:center;gap:10px;box-shadow:0 8px 24px rgba(0,0,0,0.15);animation:slideIn 0.25s ease;color:white;`;
  t.style.background = type === 'success' ? '#1A8A4A' : type === 'error' ? '#C01E1E' : '#C4620A';
  t.innerHTML = (type === 'success' ? '✓' : type === 'error' ? '✕' : '!') + ' ' + msg;
  document.body.appendChild(t);
  setTimeout(() => t.style.animation = 'fadeOut 0.3s ease forwards', 2500);
  setTimeout(() => t.remove(), 2800);
}

function openModal(id) {
  $(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  $(id).classList.remove('open');
  document.body.style.overflow = '';
}

function navigateTo(page) {
  $qa('.page').forEach(p => p.classList.remove('active'));
  $qa('.nav-item').forEach(n => n.classList.remove('active'));
  const pageEl = $(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navEl) navEl.classList.add('active');
  window.scrollTo(0, 0);
}

function customerName(id) { const c = DB.customers.find(x => x.id === id); return c ? c.name : id; }
function vehicleName(id) { const v = DB.vehicles.find(x => x.id === id); return v ? `${v.make} ${v.model}` : id; }
function vehicleReg(id) { const v = DB.vehicles.find(x => x.id === id); return v ? v.reg : id; }

// ===== AUTH =====
function login() {
  const email = $('login-email').value.trim();
  const pass = $('login-pass').value.trim();
  const role = $('login-role').value;
  
  if (!email || !pass) { toast('Please enter email and password', 'error'); return; }
  
  const user = DB.users.find(u => u.email === email && u.password === pass);
  if (!user) { toast('Invalid credentials. Try admin@uaos.ae / admin', 'error'); return; }
  if (role && user.role !== role && role !== '') {
    // allow any role selection for demo
  }
  
  DB.currentUser = user;
  
  const btn = $('login-btn');
  btn.innerHTML = 'Signing in...'; btn.disabled = true;
  
  setTimeout(() => {
    $('auth-screen').classList.add('hidden');
    $('app').classList.add('visible');
    setupUI();
    navigateTo('dashboard');
    renderDashboard();
    btn.innerHTML = 'Sign In'; btn.disabled = false;
  }, 800);
}

// ===== UI SETUP =====
function setupUI() {
  const u = DB.currentUser;
  $('topbar-user-avatar').textContent = u.avatar;
  $('topbar-user-name').textContent = u.name;
  $('sidebar-user-name').textContent = u.name;
  $('sidebar-user-role').textContent = u.role;
  $('branch-name').textContent = DB.currentBranch;
  
  // Branch switcher
  $('branch-switcher').onclick = () => {
    const b = DB.branches[(DB.branches.indexOf(DB.currentBranch) + 1) % DB.branches.length];
    DB.currentBranch = b;
    $('branch-name').textContent = b;
    toast('Switched to ' + b);
  };
  
  // Nav
  $qa('.nav-item[data-page]').forEach(el => {
    el.onclick = () => {
      navigateTo(el.dataset.page);
      const page = el.dataset.page;
      if (page === 'dashboard') renderDashboard();
      else if (page === 'customers') renderCustomers();
      else if (page === 'vehicles') renderVehicles();
      else if (page === 'workshop') renderWorkshop();
      else if (page === 'parts') renderParts();
      else if (page === 'sales') renderSales();
      else if (page === 'billing') renderBilling();
      else if (page === 'accounting') renderAccounting();
      else if (page === 'reports') renderReports();
      else if (page === 'employees') renderEmployees();
      else if (page === 'ai') renderAI();
      else if (page === 'settings') renderSettings();
    };
  });
  
  // Notif panel
  $('notif-btn').onclick = (e) => {
    e.stopPropagation();
    $('notif-panel').classList.toggle('open');
  };
  document.addEventListener('click', () => $('notif-panel').classList.remove('open'));
  
  // Modal closes
  $qa('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target === el) closeModal(el.id);
    });
  });
}

// ===== DASHBOARD =====
function renderDashboard() {
  // Animated chart
  renderBarChart('revenue-chart', DB.revenueData, DB.months, 'AED');
  
  // Mini sparklines
  renderSparkline('spark-revenue', [42,44,48,45,51,59]);
  renderSparkline('spark-jobs', [18,22,19,25,23,28]);
  
  // Activity timeline
  renderActivity();
}

function renderBarChart(id, data, labels, prefix = '') {
  const el = $(id);
  if (!el) return;
  const max = Math.max(...data);
  el.innerHTML = data.map((v, i) => `
    <div class="chart-bar-wrap">
      <div class="chart-bar ${i === data.length-1 ? '' : 'secondary'}" 
           style="height:${(v/max)*160}px" 
           data-tooltip="${prefix ? prefix+' ' : ''}${fmtN(v)}K"></div>
      <div class="chart-bar-label">${labels[i]}</div>
    </div>
  `).join('');
}

function renderSparkline(id, data) {
  const el = $(id);
  if (!el) return;
  const max = Math.max(...data), min = Math.min(...data);
  const w = 80, h = 32;
  const pts = data.map((v, i) => {
    const x = (i / (data.length-1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * h * 0.8 - 4;
    return `${x},${y}`;
  }).join(' ');
  el.innerHTML = `<svg viewBox="0 0 ${w} ${h}" class="sparkline"><polyline points="${pts}" fill="none" stroke="var(--c-accent)" stroke-width="2" stroke-linejoin="round"/></svg>`;
}

function renderActivity() {
  const el = $('activity-feed');
  if (!el) return;
  const activities = [
    { icon: '🔧', color: 'var(--c-amber-soft)', text: '<strong>JC-2501-001</strong> Isuzu FVR major service updated to In Progress', time: '2 min ago' },
    { icon: '💳', color: 'var(--c-green-soft)', text: 'Payment <strong>UGX 448,400</strong> received from Nakato Sarah via MTN MoMo', time: '18 min ago' },
    { icon: '🚛', color: 'var(--c-accent-soft)', text: 'New truck <strong>UAA 001A (Isuzu FVR)</strong> checked into workshop', time: '42 min ago' },
    { icon: '📦', color: 'var(--c-red-soft)', text: '<strong>Brake Linings</strong> stock below minimum level — reorder now', time: '1h ago' },
    { icon: '👤', color: 'var(--c-purple-soft)', text: 'New customer <strong>Waiswa Daniel</strong> registered from Mukono', time: '2h ago' },
    { icon: '📋', color: 'var(--c-amber-soft)', text: 'Job card <strong>JC-2501-005</strong> created for MAN TGS Tipper suspension', time: '3h ago' },
  ];
  el.innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="activity-icon" style="background:${a.color}">${a.icon}</div>
      <div>
        <div class="activity-text">${a.text}</div>
        <div class="activity-time">${a.time}</div>
      </div>
    </div>
  `).join('');
}

// ===== CUSTOMERS =====
let customerFilter = '';
function renderCustomers() {
  const filtered = DB.customers.filter(c => 
    !customerFilter || c.name.toLowerCase().includes(customerFilter) || c.phone.includes(customerFilter) || c.id.toLowerCase().includes(customerFilter)
  );
  const el = $('customers-table-body');
  if (!el) return;
  
  const typeColors = { 'VIP': 'badge-purple', 'Regular': 'badge-blue', 'New': 'badge-green' };
  
  el.innerHTML = filtered.map(c => `
    <tr onclick="viewCustomer('${c.id}')" style="cursor:pointer">
      <td>
        <div class="d-flex align-center gap-8">
          <div class="user-avatar" style="width:32px;height:32px;font-size:12px;flex-shrink:0">${c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
          <div>
            <div class="table-name">${c.name}</div>
            <div class="table-sub">${c.id}</div>
          </div>
        </div>
      </td>
      <td>${c.phone}<div class="table-sub">${c.email}</div></td>
      <td><span class="badge ${typeColors[c.type]}">${c.type}</span></td>
      <td>${c.vehicles.length} vehicle${c.vehicles.length !== 1 ? 's' : ''}</td>
      <td class="fw-500">${fmt(c.totalSpent)}</td>
      <td>${c.lastVisit ? c.lastVisit : '<span class="text-light">No visits</span>'}</td>
      <td>${c.city}</td>
      <td>
        <div class="d-flex gap-8">
          <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();viewCustomer('${c.id}')">${icons.eye}</button>
          <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();editCustomer('${c.id}')">${icons.edit}</button>
        </div>
      </td>
    </tr>
  `).join('') || `<tr><td colspan="8"><div class="empty-state"><div class="empty-state-icon">👤</div><div class="empty-state-title">No customers found</div></div></td></tr>`;
}

function viewCustomer(id) {
  const c = DB.customers.find(x => x.id === id);
  if (!c) return;
  const vehicles = DB.vehicles.filter(v => c.vehicles.includes(v.id));
  const jobs = DB.jobs.filter(j => j.customer === id);
  
  $('customer-detail-content').innerHTML = `
    <div class="d-flex align-center gap-12 mb-24">
      <div class="user-avatar" style="width:60px;height:60px;font-size:22px">${c.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
      <div>
        <div style="font-family:'Fraunces',serif;font-size:22px;font-weight:600">${c.name}</div>
        <div class="text-muted">${c.id} · ${c.city}</div>
        <div class="d-flex gap-8 mt-8">
          <span class="badge ${c.type==='VIP'?'badge-purple':c.type==='Regular'?'badge-blue':'badge-green'}">${c.type}</span>
        </div>
      </div>
      <div class="ml-auto text-right">
        <div class="label mb-4">Total Spent</div>
        <div style="font-family:'Fraunces',serif;font-size:26px;font-weight:700;color:var(--c-accent)">${fmt(c.totalSpent)}</div>
      </div>
    </div>
    <div class="grid-3 mb-24">
      <div class="card">
        <div class="label mb-6">Contact</div>
        <div style="font-size:13.5px">${c.phone}</div>
        <div style="font-size:13px;color:var(--c-text-2)">${c.email}</div>
      </div>
      <div class="card">
        <div class="label mb-6">Vehicles</div>
        <div style="font-size:20px;font-weight:700;font-family:'Fraunces',serif">${vehicles.length}</div>
      </div>
      <div class="card">
        <div class="label mb-6">Service Jobs</div>
        <div style="font-size:20px;font-weight:700;font-family:'Fraunces',serif">${jobs.length}</div>
      </div>
    </div>
    ${vehicles.length ? `
    <div class="mb-24">
      <div class="card-title mb-12">🚗 Vehicles</div>
      ${vehicles.map(v => `
        <div class="d-flex align-center gap-12 p-12" style="border:1px solid var(--c-border);border-radius:8px;margin-bottom:8px">
          <div style="font-size:28px">🚗</div>
          <div>
            <div class="fw-600">${v.make} ${v.model} (${v.year})</div>
            <div class="text-mono text-sm text-muted">${v.reg}</div>
          </div>
          <span class="badge ${v.status==='In Service'?'badge-amber':v.status==='Ready'?'badge-green':'badge-blue'} ml-auto">${v.status}</span>
        </div>
      `).join('')}
    </div>` : ''}
    ${c.notes ? `<div class="card"><div class="label mb-6">Notes</div><div style="font-size:13.5px;color:var(--c-text-2)">${c.notes}</div></div>` : ''}
  `;
  openModal('customer-detail-modal');
}

function editCustomer(id) { toast('Customer edit form opened'); }

function addCustomer() {
  const name = $('new-cust-name').value.trim();
  const phone = $('new-cust-phone').value.trim();
  const email = $('new-cust-email').value.trim();
  const type = $('new-cust-type').value;
  const city = $('new-cust-city').value.trim();
  if (!name || !phone) { toast('Name and phone required', 'error'); return; }
  const id = 'C' + String(DB.customers.length + 1).padStart(3, '0');
  DB.customers.push({ id, name, phone, email, type, city, vehicles: [], totalSpent: 0, lastVisit: null, notes: '' });
  closeModal('add-customer-modal');
  renderCustomers();
  toast('Customer ' + name + ' added');
  ['new-cust-name','new-cust-phone','new-cust-email','new-cust-city'].forEach(f => $(f).value = '');
}

// ===== VEHICLES =====
function renderVehicles() {
  const el = $('vehicles-table-body');
  if (!el) return;
  const statusColor = { 'In Service': 'badge-amber', 'Ready': 'badge-green', 'Waiting': 'badge-blue' };
  
  el.innerHTML = DB.vehicles.map(v => {
    const owner = DB.customers.find(c => c.id === v.owner);
    return `
    <tr onclick="viewVehicle('${v.id}')" style="cursor:pointer">
      <td><span class="text-mono fw-600">${v.reg}</span></td>
      <td>
        <div class="fw-500">${v.make} ${v.model}</div>
        <div class="table-sub">${v.year} · ${v.color}</div>
      </td>
      <td>${owner ? owner.name : '—'}</td>
      <td class="text-mono">${fmtN(v.mileage)} km</td>
      <td><span class="badge ${statusColor[v.status] || 'badge-gray'}">${v.status}</span></td>
      <td>${v.fuel}</td>
      <td style="font-size:12.5px">${v.insurance}</td>
      <td>
        <div class="d-flex gap-8">
          <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();viewVehicle('${v.id}')">${icons.eye}</button>
          <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation()">${icons.edit}</button>
        </div>
      </td>
    </tr>
  `}).join('');
}

function viewVehicle(id) {
  const v = DB.vehicles.find(x => x.id === id);
  if (!v) return;
  const owner = DB.customers.find(c => c.id === v.owner);
  const vJobs = DB.jobs.filter(j => j.vehicle === id);
  const vEmoji = v.type === 'Truck' ? '🚛' : v.type === 'Pickup' ? '🚙' : '🚗';
  
  $('vehicle-detail-content').innerHTML = `
    <div class="d-flex align-center gap-12 mb-24">
      <div style="font-size:60px">${vEmoji}</div>
      <div>
        <div style="font-family:'Fraunces',serif;font-size:22px;font-weight:600">${v.make} ${v.model}</div>
        <div class="text-mono text-muted">${v.reg} · ${v.year}</div>
        <div class="d-flex gap-8 mt-8">
          <span class="badge ${v.status==='In Service'?'badge-amber':v.status==='Ready'?'badge-green':'badge-blue'}">${v.status}</span>
          <span class="chip">${v.fuel}</span>
          <span class="chip">${v.color}</span>
        </div>
      </div>
    </div>
    <div class="grid-2 mb-16">
      <div class="card">
        <div class="label mb-8">Vehicle Details</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          ${[['VIN', v.vin],['Mileage', fmtN(v.mileage)+' km'],['Insurance', v.insurance],['Warranty', v.warranty]].map(([k,val]) => `
            <div><div class="text-light text-sm">${k}</div><div class="fw-500 text-mono" style="font-size:12.5px">${val}</div></div>
          `).join('')}
        </div>
      </div>
      <div class="card">
        <div class="label mb-8">Owner</div>
        <div class="d-flex align-center gap-10">
          <div class="user-avatar" style="width:36px;height:36px">${owner ? owner.name.split(' ').map(w=>w[0]).join('').slice(0,2) : '?'}</div>
          <div>
            <div class="fw-500">${owner ? owner.name : 'Unknown'}</div>
            <div class="text-sm text-muted">${owner ? owner.phone : ''}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-title mb-12">Service History (${vJobs.length} jobs)</div>
      <div class="timeline">
        ${vJobs.map(j => `
          <div class="timeline-item">
            <div class="timeline-dot" style="background:${j.status==='Completed'?'var(--c-green)':j.status==='In Progress'?'var(--c-amber)':'var(--c-accent)'}"></div>
            <div class="timeline-time">${j.created}</div>
            <div class="timeline-content"><strong>${j.type}</strong> · ${j.id} · ${fmt(j.estimate)}<br><span style="color:var(--c-text-3);font-size:12px">${j.status}</span></div>
          </div>
        `).join('') || '<div class="text-muted text-sm">No service history</div>'}
      </div>
    </div>
  `;
  openModal('vehicle-detail-modal');
}

// ===== WORKSHOP =====
function renderWorkshop() {
  const cols = {
    'Waiting': $('kanban-waiting'),
    'In Progress': $('kanban-inprogress'),
    'Completed': $('kanban-completed'),
  };
  
  Object.values(cols).forEach(c => { if(c) c.innerHTML = ''; });
  
  const prioColor = { 'Urgent': 'badge-red', 'High': 'badge-amber', 'Normal': 'badge-blue' };
  
  DB.jobs.forEach(j => {
    const col = cols[j.status];
    if (!col) return;
    const cust = customerName(j.customer);
    const veh = vehicleName(j.vehicle);
    const reg = vehicleReg(j.vehicle);
    const mech = j.mechanic ? DB.users.find(u => u.id === j.mechanic) : null;
    const doneChecks = j.checklist.filter(c => c.done).length;
    
    const card = document.createElement('div');
    card.className = 'kanban-card';
    card.innerHTML = `
      <div class="kanban-card-id">${j.id}</div>
      <div class="kanban-card-title">${j.type} — ${veh}</div>
      <div class="text-sm text-muted mb-8">${reg} · ${cust}</div>
      <div class="progress-bar mb-8"><div class="progress-fill ${j.status==='Completed'?'progress-green':'progress-blue'}" style="width:${(doneChecks/j.checklist.length)*100}%"></div></div>
      <div class="kanban-card-meta">
        <span class="badge ${prioColor[j.priority]}">${j.priority}</span>
        <span class="text-sm text-muted">${doneChecks}/${j.checklist.length} tasks</span>
        ${mech ? `<div class="user-avatar avatar-sm" style="width:24px;height:24px;font-size:10px" data-tooltip="${mech.name}">${mech.avatar}</div>` : ''}
      </div>
      ${j.bay ? `<div class="chip mt-8" style="font-size:11px">${j.bay}</div>` : ''}
      <div class="text-sm text-muted mt-8" style="font-size:12px">ETA: ${j.eta}</div>
    `;
    card.onclick = () => viewJob(j.id);
    col.appendChild(card);
  });
  
  // Update counts
  ['Waiting', 'In Progress', 'Completed'].forEach((s, i) => {
    const countEl = document.querySelectorAll('.kanban-count')[i];
    if (countEl) countEl.textContent = DB.jobs.filter(j => j.status === s).length;
  });
}

function viewJob(id) {
  const j = DB.jobs.find(x => x.id === id);
  if (!j) return;
  const mech = j.mechanic ? DB.users.find(u => u.id === j.mechanic) : null;
  const cust = DB.customers.find(c => c.id === j.customer);
  const veh = DB.vehicles.find(v => v.id === j.vehicle);
  
  $('job-detail-content').innerHTML = `
    <div class="d-flex align-center gap-12 mb-20">
      <div>
        <div class="text-mono text-muted mb-4">${j.id}</div>
        <div style="font-family:'Fraunces',serif;font-size:20px;font-weight:600">${j.type}</div>
      </div>
      <div class="ml-auto d-flex gap-8">
        <span class="badge ${j.priority==='Urgent'?'badge-red':j.priority==='High'?'badge-amber':'badge-blue'}">${j.priority}</span>
        <span class="badge ${j.status==='Completed'?'badge-green':j.status==='In Progress'?'badge-amber':'badge-blue'}">${j.status}</span>
      </div>
    </div>
    <div class="grid-2 mb-16">
      <div class="card">
        <div class="label mb-6">Vehicle</div>
        <div class="fw-600">${veh ? veh.make+' '+veh.model : '—'}</div>
        <div class="text-mono text-sm text-muted">${veh ? veh.reg : ''}</div>
        <div class="text-sm text-muted mt-2">Mileage: ${fmtN(j.mileage)} km</div>
      </div>
      <div class="card">
        <div class="label mb-6">Customer</div>
        <div class="fw-600">${cust ? cust.name : '—'}</div>
        <div class="text-sm text-muted">${cust ? cust.phone : ''}</div>
      </div>
    </div>
    <div class="grid-2 mb-16">
      <div class="card">
        <div class="label mb-6">Mechanic</div>
        ${mech ? `<div class="d-flex align-center gap-8"><div class="user-avatar" style="width:32px;height:32px;font-size:12px">${mech.avatar}</div><div class="fw-500">${mech.name}</div></div>` : '<div class="text-muted">Not assigned</div>'}
      </div>
      <div class="card">
        <div class="label mb-6">Bay / Estimate</div>
        <div class="fw-600">${j.bay || 'Not assigned'}</div>
        <div class="text-sm text-muted">${fmt(j.estimate)} estimate</div>
      </div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">Service Checklist</div>
      ${j.checklist.map((item, i) => `
        <div class="checklist-item" onclick="toggleCheck('${id}',${i})">
          <div class="check-box ${item.done ? 'checked' : ''}">${item.done ? icons.check : ''}</div>
          <div style="${item.done ? 'text-decoration:line-through;color:var(--c-text-3)' : ''}">${item.item}</div>
        </div>
      `).join('')}
    </div>
    ${j.parts.length ? `
    <div class="card mb-16">
      <div class="card-title mb-12">Parts Used</div>
      ${j.parts.map(p => `
        <div class="d-flex align-center gap-12" style="padding:8px 0;border-bottom:1px solid var(--c-border)">
          <div class="flex-1 fw-500">${p.name}</div>
          <div class="text-sm text-muted">Qty: ${p.qty}</div>
          <div class="fw-600">${fmt(p.price * p.qty)}</div>
        </div>
      `).join('')}
    </div>` : ''}
    ${j.notes ? `<div class="card"><div class="label mb-6">Notes</div><div style="font-size:13.5px;color:var(--c-text-2)">${j.notes}</div></div>` : ''}
    <div class="d-flex gap-8 mt-20">
      ${j.status !== 'Completed' ? `<button class="btn btn-primary" onclick="updateJobStatus('${id}','${j.status==='Waiting'?'In Progress':'Completed'}')">Mark as ${j.status==='Waiting'?'In Progress':'Completed'}</button>` : ''}
      <button class="btn btn-secondary" onclick="closeModal('job-detail-modal')">Close</button>
    </div>
  `;
  openModal('job-detail-modal');
}

function toggleCheck(jobId, idx) {
  const j = DB.jobs.find(x => x.id === jobId);
  if (j) { j.checklist[idx].done = !j.checklist[idx].done; viewJob(jobId); }
}

function updateJobStatus(jobId, newStatus) {
  const j = DB.jobs.find(x => x.id === jobId);
  if (j) {
    j.status = newStatus;
    closeModal('job-detail-modal');
    renderWorkshop();
    toast(`Job ${jobId} marked as ${newStatus}`);
  }
}

function createJobCard() {
  const veh = $('jc-vehicle').value;
  const type = $('jc-type').value;
  const priority = $('jc-priority').value;
  const mechId = parseInt($('jc-mechanic').value);
  const notes = $('jc-notes').value;
  if (!veh || !type) { toast('Please select a vehicle and service type', 'error'); return; }
  
  const v = DB.vehicles.find(x => x.id === veh);
  const cust = v ? v.owner : null;
  const id = 'JC-2501-' + String(DB.jobs.length + 1).padStart(3, '0');
  DB.jobs.push({
    id, vehicle: veh, customer: cust, type, status: 'Waiting',
    mechanic: mechId || null, advisor: 3, priority, bay: null,
    created: new Date().toISOString().slice(0,16).replace('T',' '),
    eta: '', mileage: v ? v.mileage : 0, estimate: 0, notes,
    checklist: [{item:'Initial Inspection', done:false},{item:'Customer Sign-off', done:false}],
    parts: []
  });
  closeModal('add-job-modal');
  renderWorkshop();
  toast('Job card ' + id + ' created');
  ['jc-notes'].forEach(f => $(f).value = '');
}

// ===== PARTS =====
function renderParts() {
  const el = $('parts-table-body');
  if (!el) return;
  el.innerHTML = DB.parts.map(p => {
    const low = p.stock <= p.minStock;
    const critical = p.stock <= p.minStock * 0.5;
    return `
    <tr>
      <td><span class="text-mono" style="font-size:12px">${p.sku}</span></td>
      <td>
        <div class="fw-500">${p.name}</div>
        <div class="table-sub">${p.category}</div>
      </td>
      <td>${p.supplier}</td>
      <td class="text-mono fw-600">${p.location}</td>
      <td>
        <div class="d-flex align-center gap-8">
          <span class="${critical ? 'text-red fw-600' : low ? 'text-amber fw-600' : 'fw-500'}">${p.stock}</span>
          ${critical ? '<span class="badge badge-red">Critical</span>' : low ? '<span class="badge badge-amber">Low</span>' : ''}
        </div>
        <div class="table-sub">Min: ${p.minStock}</div>
      </td>
      <td class="fw-600">${fmt(p.price)}</td>
      <td class="text-muted">${fmt(p.cost)}</td>
      <td>
        <div class="d-flex gap-8">
          <button class="btn btn-sm btn-secondary" onclick="toast('Reorder sent for ${p.name}')">Reorder</button>
          <button class="btn btn-sm btn-secondary">${icons.edit}</button>
        </div>
      </td>
    </tr>
  `}).join('');
  
  // Summary stats
  const lowStockEl = $('low-stock-count');
  if (lowStockEl) lowStockEl.textContent = DB.parts.filter(p => p.stock <= p.minStock).length;
}

// ===== SALES =====
function renderSales() {
  const el = $('sales-grid');
  if (!el) return;
  const statusColor = { 'Available': 'badge-green', 'Reserved': 'badge-amber', 'Sold': 'badge-gray' };
  el.innerHTML = DB.salesVehicles.map(v => `
    <div class="vehicle-card" onclick="viewSalesVehicle('${v.id}')">
      <div class="vehicle-card-img">
        <span>${v.emoji}</span>
        <div class="vehicle-card-status"><span class="badge ${statusColor[v.status]}">${v.status}</span></div>
      </div>
      <div class="vehicle-card-body">
        <div class="vehicle-card-name">${v.make} ${v.model}</div>
        <div class="vehicle-card-reg">${v.year} · ${v.condition} · ${v.fuel}</div>
        <div class="vehicle-card-price">${fmt(v.price)}</div>
        <div class="vehicle-card-meta">
          <div class="vehicle-card-meta-item">🎨 ${v.color}</div>
          ${v.mileage > 0 ? `<div class="vehicle-card-meta-item">📏 ${fmtN(v.mileage)} km</div>` : '<div class="vehicle-card-meta-item">✨ Brand New</div>'}
        </div>
        <div class="d-flex gap-8 mt-12">
          ${v.status === 'Available' ? `<button class="btn btn-primary btn-sm flex-1" onclick="event.stopPropagation();toast('Quote created for ${v.make} ${v.model}')">Create Quote</button>` : ''}
          <button class="btn btn-secondary btn-sm ${v.status === 'Available' ? '' : 'flex-1'}" onclick="event.stopPropagation();viewSalesVehicle('${v.id}')">View Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

function viewSalesVehicle(id) {
  const v = DB.salesVehicles.find(x => x.id === id);
  if (!v) return;
  $('sales-vehicle-content').innerHTML = `
    <div class="vehicle-card-img" style="height:200px;font-size:72px;border-radius:10px;overflow:hidden;margin-bottom:20px">
      <span>${v.emoji}</span>
      <div class="vehicle-card-status"><span class="badge ${v.status==='Available'?'badge-green':v.status==='Reserved'?'badge-amber':'badge-gray'}">${v.status}</span></div>
    </div>
    <div style="font-family:'Fraunces',serif;font-size:24px;font-weight:600;margin-bottom:4px">${v.make} ${v.model}</div>
    <div class="text-muted mb-16">${v.year} · ${v.condition} · ${v.color}</div>
    <div class="grid-3 mb-16">
      ${[['Price',fmt(v.price)],['Cost',fmt(v.cost)],['Margin',fmt(v.price-v.cost)]].map(([k,val]) => `
        <div class="card"><div class="label mb-4">${k}</div><div class="fw-600 text-accent">${val}</div></div>
      `).join('')}
    </div>
    <div class="d-flex gap-10">
      ${v.status === 'Available' ? `
        <button class="btn btn-primary flex-1" onclick="toast('Quote generated for ${v.make} ${v.model}');closeModal('sales-detail-modal')">Generate Quote</button>
        <button class="btn btn-secondary" onclick="toast('Vehicle reserved');closeModal('sales-detail-modal')">Reserve</button>
      ` : `<button class="btn btn-secondary flex-1" onclick="closeModal('sales-detail-modal')">Close</button>`}
    </div>
  `;
  openModal('sales-detail-modal');
}

// ===== BILLING =====
function renderBilling() {
  const el = $('invoices-table-body');
  if (!el) return;
  const statusColor = { 'Paid': 'badge-green', 'Pending': 'badge-amber', 'Partial': 'badge-blue', 'Overdue': 'badge-red' };
  el.innerHTML = DB.invoices.map(inv => `
    <tr onclick="viewInvoice('${inv.id}')" style="cursor:pointer">
      <td><span class="text-mono fw-600 text-accent">${inv.id}</span></td>
      <td>${customerName(inv.customer)}</td>
      <td>${vehicleName(inv.vehicle)}</td>
      <td>${inv.date}</td>
      <td>${inv.due}</td>
      <td class="fw-600">${fmt(inv.total)}</td>
      <td class="fw-600 text-green">${fmt(inv.paid)}</td>
      <td><span class="badge ${statusColor[inv.status]}">${inv.status}</span></td>
      <td>
        <div class="d-flex gap-8">
          <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();viewInvoice('${inv.id}')">${icons.eye}</button>
          <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation();toast('Invoice printed')">${icons.download}</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function viewInvoice(id) {
  const inv = DB.invoices.find(x => x.id === id);
  if (!inv) return;
  const cust = DB.customers.find(c => c.id === inv.customer);
  const veh = DB.vehicles.find(v => v.id === inv.vehicle);
  
  $('invoice-preview-content').innerHTML = `
    <div class="invoice-preview">
      <div class="invoice-header">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>
            <div class="invoice-header-logo">SM Skenya Motors</div>
            <div style="font-size:12px;opacity:0.7;margin-top:4px">Skenya Motors Uganda Ltd · Kampala, Uganda</div>
          </div>
          <div style="text-align:right">
            <div style="font-size:24px;font-weight:700;font-family:'Fraunces',serif">INVOICE</div>
            <div style="font-size:14px;font-family:'DM Mono',monospace;opacity:0.9">${inv.id}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:24px">
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;opacity:0.6;margin-bottom:6px">FROM</div>
            <div style="font-size:13px">${DB.currentBranch}<br>Nakawa Industrial Area, Kampala<br>TIN: 1008234567</div>
          </div>
          <div>
            <div style="font-size:10px;text-transform:uppercase;letter-spacing:1px;opacity:0.6;margin-bottom:6px">TO</div>
            <div style="font-size:13px">${cust ? cust.name : ''}<br>${cust ? cust.phone : ''}<br>${cust ? cust.email : ''}</div>
          </div>
        </div>
      </div>
      <div class="invoice-body">
        <div class="invoice-to">
          <div>
            <div class="invoice-label">Invoice Date</div><div class="fw-500">${inv.date}</div>
            <div class="invoice-label mt-12">Due Date</div><div class="fw-500">${inv.due}</div>
          </div>
          <div>
            <div class="invoice-label">Vehicle</div><div class="fw-500">${veh ? veh.make+' '+veh.model : ''}</div>
            <div class="invoice-label mt-12">Registration</div><div class="fw-500 text-mono">${veh ? veh.reg : ''}</div>
          </div>
        </div>
        <table class="invoice-table">
          <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th style="text-align:right">Total</th></tr></thead>
          <tbody>
            ${inv.items.map(item => `
              <tr>
                <td class="fw-500">${item.desc}</td>
                <td>${item.qty}</td>
                <td>${fmt(item.price)}</td>
                <td style="text-align:right">${fmt(item.price * item.qty)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="invoice-totals">
          <div class="invoice-total-row"><span class="text-muted">Subtotal</span><span>${fmt(inv.subtotal)}</span></div>
          ${inv.discount ? `<div class="invoice-total-row"><span class="text-muted">Discount</span><span class="text-green">-${fmt(inv.discount)}</span></div>` : ''}
          <div class="invoice-total-row"><span class="text-muted">VAT (5%)</span><span>${fmt(inv.tax)}</span></div>
          <div class="invoice-total-row grand"><span>Total</span><span class="text-accent">${fmt(inv.total)}</span></div>
          <div class="invoice-total-row"><span class="text-muted">Paid</span><span class="text-green">${fmt(inv.paid)}</span></div>
          ${inv.total > inv.paid ? `<div class="invoice-total-row" style="color:var(--c-red)"><span>Balance Due</span><span>${fmt(inv.total - inv.paid)}</span></div>` : ''}
        </div>
        <div style="margin-top:32px;padding-top:20px;border-top:1px solid var(--c-border);font-size:12px;color:var(--c-text-3);text-align:center">
          Thank you for your business! · Payment due within 14 days · Mobile Money (MTN/Airtel) or Bank Transfer accepted
        </div>
      </div>
    </div>
  `;
  openModal('invoice-detail-modal');
}

// ===== ACCOUNTING =====
function renderAccounting() {
  renderBarChart('acc-chart', [120,145,132,168,189,175,210,198,225,242,218,260], DB.months, 'AED');
}

// ===== REPORTS =====
function renderReports() {
  renderBarChart('reports-chart', DB.revenueData, DB.months, 'AED');
}

// ===== EMPLOYEES =====
function renderEmployees() {
  const el = $('employees-grid');
  if (!el) return;
  const roleColors = {
    'Super Admin': 'badge-purple', 'Branch Manager': 'badge-blue',
    'Service Advisor': 'badge-green', 'Mechanic': 'badge-amber',
    'Accountant': 'badge-gray', 'Sales Executive': 'badge-blue'
  };
  el.innerHTML = DB.users.map(u => `
    <div class="card" style="transition:all 0.18s ease" onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow=''">
      <div class="d-flex align-center gap-12 mb-16">
        <div class="user-avatar" style="width:48px;height:48px;font-size:18px;font-weight:600">${u.avatar}</div>
        <div>
          <div class="fw-600" style="font-size:15px">${u.name}</div>
          <span class="badge ${roleColors[u.role]}">${u.role}</span>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px">
        <div><div class="text-light text-sm">Dept</div><div class="fw-500">${u.dept}</div></div>
        <div><div class="text-light text-sm">Joined</div><div class="fw-500">${u.joined}</div></div>
        <div><div class="text-light text-sm">Phone</div><div style="font-size:12px">${u.phone}</div></div>
        <div><div class="text-light text-sm">Status</div><span class="badge badge-green">Active</span></div>
      </div>
      <div class="divider"></div>
      <div class="d-flex gap-8">
        <button class="btn btn-secondary btn-sm flex-1" onclick="toast('Viewing ${u.name} profile')">View Profile</button>
        <button class="btn btn-secondary btn-sm" onclick="toast('Permissions for ${u.name}')">${icons.settings}</button>
      </div>
    </div>
  `).join('');
}

// ===== AI =====
function renderAI() {
  // AI insights are static demo content
}

// ===== SETTINGS =====
function renderSettings() {
  // Static demo
}

// ===== NOTIFICATIONS =====
function renderNotifications() {
  const notifs = [
    { color: 'var(--c-red)', title: 'Low Stock Alert', text: 'Brake Linings below minimum level (6 sets remaining)', time: '5m ago' },
    { color: 'var(--c-amber)', title: 'Service Due', text: 'UAA 001A (Isuzu FVR) approaching 150,000 km service', time: '22m ago' },
    { color: 'var(--c-green)', title: 'Payment Received', text: 'UGX 448,400 from Nakato Sarah via MTN MoMo', time: '1h ago' },
    { color: 'var(--c-accent)', title: 'Job Completed', text: 'JC-2501-004 (Toyota Hilux) marked as complete', time: '2h ago' },
    { color: 'var(--c-purple)', title: 'New Customer', text: 'Waiswa Daniel registered as new customer', time: '3h ago' },
  ];
  const el = $('notif-list');
  if (!el) return;
  el.innerHTML = notifs.map(n => `
    <div class="notif-item">
      <div class="notif-item-dot" style="background:${n.color}"></div>
      <div>
        <div class="notif-item-text"><strong>${n.title}</strong><br>${n.text}</div>
        <div class="notif-item-time">${n.time}</div>
      </div>
    </div>
  `).join('');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Auto-boot with default admin user
  DB.currentUser = DB.users[0];
  
  setupUI();
  navigateTo('dashboard');
  renderDashboard();
  renderNotifications();
  
  // Customer search
  const custSearch = $('customer-search');
  if (custSearch) {
    custSearch.addEventListener('input', e => {
      customerFilter = e.target.value.toLowerCase();
      renderCustomers();
    });
  }
  
  // Parts search
  const partsSearch = $('parts-search');
  if (partsSearch) {
    partsSearch.addEventListener('input', () => renderParts());
  }
});

// CSS animation for toast
const style = document.createElement('style');
style.textContent = `
@keyframes slideIn { from { transform:translateX(100%); opacity:0; } to { transform:translateX(0); opacity:1; } }
@keyframes fadeOut { from { opacity:1; } to { opacity:0; transform:translateY(8px); } }
`;
document.head.appendChild(style);
