// src/data/searchData.js
const FashionData = [ /* your 20 fashion items */ ];
const ElectronicData = [ /* … */ ];
const BeautyData = [ /* … */ ];
const HomeData = [ /* … */ ];
const JewelleryData = [ /* … */ ];

// flatten and add category tag
const SEARCH_DATA = [

  {
    id: 1,
    image: "/Electronic/1.png",
    title: "SmartX Pro Phone",
    subtitle: "Smartphone • 128GB",
    price: "$699",
    description:
      "A sleek smartphone with a powerful processor, edge-to-edge display, and all-day battery life.",
    rating: 4.7,
  },
  {
    id: 2,
    image: "/Electronic/2.png",
    title: "AeroBuds Wireless Earphones",
    subtitle: "Audio • Bluetooth 5.3",
    price: "$129",
    description:
      "Noise-cancelling wireless earbuds with crystal-clear sound and a comfortable, secure fit.",
    rating: 4.5,
  },
  {
    id: 3,
    image: "/Electronic/3.png",
    title: "VisionHD 4K TV",
    subtitle: "Display • 55-inch",
    price: "$799",
    description:
      "A stunning 4K UHD smart TV with vibrant colors, HDR10 support, and built-in streaming apps.",
    rating: 4.8,
  },
  {
    id: 4,
    image: "/Electronic/4.png",
    title: "PowerBeat Smartwatch",
    subtitle: 'Wearable • 1.8" AMOLED',
    price: "$199",
    description:
      "A stylish smartwatch with heart-rate tracking, GPS, fitness modes, and message notifications.",
    rating: 4.6,
  },
  {
    id: 5,
    image: "/Electronic/5.png",
    title: "SoundMax Portable Speaker",
    subtitle: "Audio • Waterproof",
    price: "$89",
    description:
      "A compact Bluetooth speaker with deep bass, clear treble, and 12-hour battery life.",
    rating: 4.4,
  },
  {
    id: 6,
    image: "/Electronic/6.png",
    title: "UltraBook X15 Laptop",
    subtitle: "Laptop • 15.6-inch • 512GB SSD",
    price: "$999",
    description:
      "A powerful ultrabook designed for productivity with fast performance and lightweight design.",
    rating: 4.7,
  },
  {
    id: 7,
    image: "/Electronic/7.png",
    title: "CyberCam Pro DSLR",
    subtitle: "Camera • 24MP • Wi-Fi",
    price: "$1,250",
    description:
      "Capture professional-grade photos and videos with advanced autofocus and 4K recording.",
    rating: 4.9,
  },
  {
    id: 8,
    image: "/Electronic/8.png",
    title: "SmartHome Mini Hub",
    subtitle: "Home Tech • Voice Control",
    price: "$79",
    description:
      "Control lights, music, and more with your voice — the perfect addition to any smart home.",
    rating: 4.3,
  },
  {
    id: 9,
    image: "/Electronic/9.png",
    title: "AirFlow Pro Fan",
    subtitle: "Home Appliance • 3-Speed",
    price: "$55",
    description:
      "A quiet and powerful fan with adjustable speeds and oscillation for full-room cooling.",
    rating: 4.2,
  },
  {
    id: 10,
    image: "/Electronic/10.png",
    title: "Quantum Gaming Mouse",
    subtitle: "Accessory • RGB • Wired",
    price: "$49",
    description:
      "High-precision gaming mouse with customizable buttons and RGB lighting for pro gamers.",
    rating: 4.5,
  },
  {
    id: 11,
    image: "/Electronic/11.png",
    title: "Neon Mechanical Keyboard",
    subtitle: "Accessory • RGB Backlight",
    price: "$89",
    description:
      "A durable mechanical keyboard with smooth keys, anti-ghosting, and vibrant lighting effects.",
    rating: 4.6,
  },
  {
    id: 12,
    image: "/Electronic/12.png",
    title: "XPower 10,000mAh Power Bank",
    subtitle: "Charging • Fast Charge",
    price: "$39",
    description:
      "A compact power bank with fast-charging support for phones, tablets, and other devices.",
    rating: 4.4,
  },
  {
    id: 13,
    image: "/Electronic/13.png",
    title: "ClearView Security Camera",
    subtitle: "Smart Home • 1080p HD",
    price: "$120",
    description:
      "Monitor your home anytime with motion detection, night vision, and mobile alerts.",
    rating: 4.5,
  },
  {
    id: 14,
    image: "/Electronic/14.png",
    title: "Nova Tablet 10.1",
    subtitle: "Tablet • 64GB • Wi-Fi",
    price: "$299",
    description:
      "A lightweight tablet for entertainment and productivity with a vivid HD display and long battery.",
    rating: 4.3,
  },
  {
    id: 15,
    image: "/Electronic/15.png",
    title: "Pulse Wireless Headset",
    subtitle: "Audio • Noise Canceling",
    price: "$159",
    description:
      "Over-ear headphones delivering immersive sound with active noise cancellation technology.",
    rating: 4.6,
  },
  {
    id: 16,
    image: "/Electronic/16.png",
    title: "SmartChef Air Fryer",
    subtitle: "Kitchen • 4L Capacity",
    price: "$145",
    description:
      "Cook crispy and healthy meals faster with digital temperature control and preset menus.",
    rating: 4.4,
  },
  {
    id: 17,
    image: "/Electronic/17.png",
    title: "HyperDrive External SSD",
    subtitle: "Storage • 1TB • USB-C",
    price: "$175",
    description:
      "A lightning-fast external SSD for secure file storage and instant data transfers.",
    rating: 4.7,
  },
  {
    id: 18,
    image: "/Electronic/18.png",
    title: "RoboClean Vacuum",
    subtitle: "Home Tech • Smart Mapping",
    price: "$299",
    description:
      "An intelligent robot vacuum that cleans efficiently with smart sensors and app control.",
    rating: 4.5,
  },
  {
    id: 19,
    image: "/Electronic/19.png",
    title: "BlueWave Bluetooth Speaker Bar",
    subtitle: "Audio • TV Soundbar",
    price: "$210",
    description:
      "Enhance your home theater experience with powerful stereo sound and wireless connectivity.",
    rating: 4.6,
  },
  {
    id: 20,
    image: "/Electronic/20.png",
    title: "Optix LED Monitor",
    subtitle: "Display • 27-inch • 144Hz",
    price: "$349",
    description:
      "A high-performance gaming monitor with ultra-smooth refresh rate and vibrant color accuracy.",
    rating: 4.8,
  },
  {
    id: 21,
    image: "/Beauty/1.png",
    title: "Radiant Glow Serum",
    subtitle: "Skincare • 30ml",
    price: "$45",
    description:
      "A lightweight serum that brightens dull skin, evens tone, and restores a youthful glow.",
    rating: 4.7,
  },
  {
    id: 22,
    image: "/Beauty/2.png",
    title: "Velvet Matte Lipstick",
    subtitle: "Makeup • 12 shades",
    price: "$25",
    description:
      "A creamy matte lipstick that delivers rich color with a smooth, long-lasting finish.",
    rating: 4.5,
  },
  {
    id: 23,
    image: "/Beauty/3.png",
    title: "HydraBoost Moisturizer",
    subtitle: "Skincare • 50ml",
    price: "$38",
    description:
      "An ultra-hydrating moisturizer infused with hyaluronic acid for all-day smoothness.",
    rating: 4.6,
  },
  {
    id: 24,
    image: "/Beauty/4.png",
    title: "Silky Shine Hair Oil",
    subtitle: "Haircare • 100ml",
    price: "$32",
    description:
      "A nourishing oil that tames frizz, adds shine, and keeps hair soft and healthy.",
    rating: 4.4,
  },
  {
    id: 25,
    image: "/Beauty/5.png",
    title: "Rose Bliss Face Mask",
    subtitle: "Skincare • 100g",
    price: "$28",
    description:
      "A refreshing rose-infused mask that hydrates, purifies, and soothes the skin.",
    rating: 4.5,
  },
  {
    id: 26,
    image: "/Beauty/6.png",
    title: "Golden Repair Shampoo",
    subtitle: "Haircare • 250ml",
    price: "$30",
    description:
      "A nourishing shampoo enriched with argan oil to strengthen and repair damaged hair.",
    rating: 4.6,
  },
  {
    id: 27,
    image: "/Beauty/7.png",
    title: "Crystal Clear Toner",
    subtitle: "Skincare • 120ml",
    price: "$22",
    description:
      "A gentle toner that tightens pores, balances pH, and refreshes your skin.",
    rating: 4.3,
  },
  {
    id: 28,
    image: "/Beauty/8.png",
    title: "Pure Bloom Perfume",
    subtitle: "Fragrance • 50ml",
    price: "$60",
    description:
      "A floral fragrance with notes of jasmine, rose, and vanilla for an elegant, timeless scent.",
    rating: 4.8,
  },
  {
    id: 29,
    image: "/Beauty/9.png",
    title: "Luxe Eye Cream",
    subtitle: "Skincare • 20ml",
    price: "$55",
    description:
      "An anti-aging eye cream that reduces puffiness, fine lines, and dark circles.",
    rating: 4.7,
  },
  {
    id: 30,
    image: "/Beauty/10.png",
    title: "Silk Touch Foundation",
    subtitle: "Makeup • 30ml",
    price: "$40",
    description:
      "A lightweight liquid foundation offering smooth coverage and a natural satin finish.",
    rating: 4.6,
  },
  {
    id: 31,
    image: "/Beauty/11.png",
    title: "Berry Tint Lip Balm",
    subtitle: "Makeup • 10g",
    price: "$15",
    description:
      "A hydrating lip balm with a hint of berry tint to keep lips soft and naturally glowing.",
    rating: 4.4,
  },
  {
    id: 32,
    image: "/Beauty/12.png",
    title: "Coconut Body Lotion",
    subtitle: "Body Care • 200ml",
    price: "$27",
    description:
      "A deeply moisturizing lotion that softens skin with coconut oil and vitamin E.",
    rating: 4.5,
  },
  {
    id: 33,
    image: "/Beauty/13.png",
    title: "Charcoal Detox Cleanser",
    subtitle: "Skincare • 100ml",
    price: "$26",
    description:
      "A deep-cleansing facial wash that removes impurities and clears clogged pores.",
    rating: 4.6,
  },
  {
    id: 34,
    image: "/Beauty/14.png",
    title: "Lavender Night Cream",
    subtitle: "Skincare • 50ml",
    price: "$35",
    description:
      "A calming night cream that nourishes skin overnight and promotes a healthy glow.",
    rating: 4.7,
  },
  {
    id: 35,
    image: "/Beauty/15.png",
    title: "Aloe Vera Gel",
    subtitle: "Skincare • 200ml",
    price: "$20",
    description:
      "A soothing gel perfect for hydrating and cooling the skin after sun exposure.",
    rating: 4.5,
  },
  {
    id: 36,
    image: "/Beauty/16.png",
    title: "Diamond Glow Highlighter",
    subtitle: "Makeup • Compact",
    price: "$29",
    description:
      "A shimmery highlighter that adds a radiant glow to cheekbones and eyes.",
    rating: 4.6,
  },
  {
    id: 37,
    image: "/Beauty/17.png",
    title: "Botanical Face Mist",
    subtitle: "Skincare • 120ml",
    price: "$24",
    description:
      "A refreshing facial mist infused with natural botanicals for instant hydration.",
    rating: 4.4,
  },
  {
    id: 38,
    image: "/Beauty/18.png",
    title: "Peach Smooth Body Scrub",
    subtitle: "Body Care • 150g",
    price: "$33",
    description:
      "An exfoliating scrub that removes dead skin and leaves your body smooth and glowing.",
    rating: 4.6,
  },
  {
    id: 39,
    image: "/Beauty/19.png",
    title: "Herbal Hair Conditioner",
    subtitle: "Haircare • 250ml",
    price: "$28",
    description:
      "A natural conditioner that strengthens and smooths hair with herbal extracts.",
    rating: 4.5,
  },
  {
    id: 40,
    image: "/Beauty/20.png",
    title: "Ocean Breeze Body Mist",
    subtitle: "Fragrance • 150ml",
    price: "$31",
    description:
      "A refreshing body mist with aquatic and citrus notes for a clean, energizing scent.",
    rating: 4.7,
  },
  {
    id: 41,
    image: "/Fashion/1.png",
    title: "Classic Denim Jacket",
    subtitle: "Outerwear • Unisex",
    price: "$79",
    description:
      "A timeless denim jacket with a modern fit, perfect for layering and casual outfits.",
    rating: 4.6,
  },
  {
    id: 42,
    image: "/Fashion/2.png",
    title: "Elegant Silk Dress",
    subtitle: "Women • Evening Wear",
    price: "$120",
    description:
      "A luxurious silk dress designed with soft fabric and graceful draping for special occasions.",
    rating: 4.8,
  },
  {
    id: 43,
    image: "/Fashion/3.png",
    title: "Urban Slim Jeans",
    subtitle: "Men • Stretch Fit",
    price: "$65",
    description:
      "Comfortable slim-fit jeans made from durable stretch denim for everyday wear.",
    rating: 4.5,
  },
  {
    id: 44,
    image: "/Fashion/4.png",
    title: "Leather Crossbody Bag",
    subtitle: "Accessories • Genuine Leather",
    price: "$95",
    description:
      "A sleek and compact leather bag ideal for carrying your essentials in style.",
    rating: 4.7,
  },
  {
    id: 45,
    image: "/Fashion/5.png",
    title: "Cotton Graphic T-Shirt",
    subtitle: "Unisex • Street Style",
    price: "$35",
    description:
      "Soft, breathable cotton T-shirt with a bold graphic design for a trendy, casual look.",
    rating: 4.4,
  },
  {
    id: 46,
    image: "/Fashion/6.png",
    title: "Sporty White Sneakers",
    subtitle: "Footwear • Unisex",
    price: "$85",
    description:
      "Lightweight sneakers with cushioned soles and a minimalist design for everyday comfort.",
    rating: 4.6,
  },
  {
    id: 47,
    image: "/Fashion/7.png",
    title: "Wool Knit Sweater",
    subtitle: "Men • Winter Wear",
    price: "$70",
    description:
      "A cozy wool-blend sweater that keeps you warm while maintaining a stylish silhouette.",
    rating: 4.5,
  },
  {
    id: 48,
    image: "/Fashion/8.png",
    title: "Floral Maxi Dress",
    subtitle: "Women • Bohemian Style",
    price: "$110",
    description:
      "A flowy maxi dress with a floral pattern, ideal for sunny days and casual events.",
    rating: 4.7,
  },
  {
    id: 49,
    image: "/Fashion/9.png",
    title: "Classic Aviator Sunglasses",
    subtitle: "Accessories • UV Protection",
    price: "$55",
    description:
      "Stylish aviator sunglasses offering UV400 protection and a timeless look.",
    rating: 4.6,
  },
  {
    id: 50,
    image: "/Fashion/10.png",
    title: "Casual Linen Shirt",
    subtitle: "Men • Breathable Fabric",
    price: "$60",
    description:
      "Lightweight linen shirt perfect for summer days with a relaxed yet polished vibe.",
    rating: 4.5,
  },
  {
    id: 51,
    image: "/Fashion/11.png",
    title: "Chunky Knit Scarf",
    subtitle: "Accessories • Unisex",
    price: "$40",
    description:
      "A soft, oversized knit scarf that keeps you cozy and adds texture to your outfit.",
    rating: 4.4,
  },
  {
    id: 52,
    image: "/Fashion/12.png",
    title: "Pleated Midi Skirt",
    subtitle: "Women • Casual Chic",
    price: "$75",
    description:
      "A lightweight, elegant skirt with pleats that flow beautifully with every step.",
    rating: 4.6,
  },
  {
    id: 53,
    image: "/Fashion/13.png",
    title: "Classic Oxford Shoes",
    subtitle: "Men • Leather",
    price: "$130",
    description:
      "Handcrafted leather Oxfords with a timeless design, perfect for both business and casual wear.",
    rating: 4.8,
  },
  {
    id: 54,
    image: "/Fashion/14.png",
    title: "Vintage Tote Bag",
    subtitle: "Accessories • Canvas",
    price: "$45",
    description:
      "A durable canvas tote with vintage prints, great for daily use and weekend trips.",
    rating: 4.5,
  },
  {
    id: 55,
    image: "/Fashion/15.png",
    title: "Elegant Pearl Necklace",
    subtitle: "Jewelry • Classic Style",
    price: "$150",
    description:
      "A refined pearl necklace that adds sophistication to any outfit or special occasion.",
    rating: 4.9,
  },
  {
    id: 56,
    image: "/Fashion/16.png",
    title: "Summer Sandals",
    subtitle: "Footwear • Women",
    price: "$55",
    description:
      "Comfortable flat sandals designed for warm days with soft straps and durable soles.",
    rating: 4.5,
  },
  {
    id: 57,
    image: "/Fashion/17.png",
    title: "Tailored Blazer",
    subtitle: "Men • Formal Wear",
    price: "$145",
    description:
      "A sharp, slim-fit blazer crafted from premium fabric for a refined, confident look.",
    rating: 4.8,
  },
  {
    id: 58,
    image: "/Fashion/18.png",
    title: "Casual Hoodie",
    subtitle: "Unisex • Streetwear",
    price: "$60",
    description:
      "A soft cotton-blend hoodie with a relaxed fit — perfect for laid-back, modern style.",
    rating: 4.6,
  },
  {
    id: 59,
    image: "/Fashion/19.png",
    title: "Luxury Wristwatch",
    subtitle: "Accessories • Quartz",
    price: "$220",
    description:
      "A modern wristwatch with a stainless-steel band, minimalist dial, and reliable quartz movement.",
    rating: 4.9,
  },
  {
    id: 60,
    image: "/Fashion/20.png",
    title: "Denim Mini Skirt",
    subtitle: "Women • Casual Wear",
    price: "$65",
    description:
      "A stylish denim mini skirt that pairs perfectly with tees, blouses, or jackets for any occasion.",
    rating: 4.6,
  },
  {
    id: 61,
    image: "/Homesupply/1.png",
    title: "ComfortPlus Pillow Set",
    subtitle: "Bedroom • 2 Pieces",
    price: "$45",
    description:
      "Soft microfiber pillows offering plush comfort and lasting support for a restful sleep.",
    rating: 4.6,
  },
  {
    id: 62,
    image: "/Homesupply/2.png",
    title: "EcoFresh Bedsheet Set",
    subtitle: "Bedroom • 4 Pieces",
    price: "$70",
    description:
      "Breathable cotton bedsheets designed for durability, comfort, and a luxurious feel.",
    rating: 4.7,
  },
  {
    id: 63,
    image: "/Homesupply/3.png",
    title: "PureAroma Scented Candle",
    subtitle: "Living Room • 250g",
    price: "$25",
    description:
      "A soothing scented candle with lavender and vanilla notes to create a relaxing atmosphere.",
    rating: 4.5,
  },
  {
    id: 64,
    image: "/Homesupply/4.png",
    title: "UltraSoft Bath Towel Set",
    subtitle: "Bathroom • 6 Pieces",
    price: "$55",
    description:
      "Highly absorbent towels made from 100% cotton, perfect for spa-like comfort at Homesupply.",
    rating: 4.6,
  },
  {
    id: 65,
    image: "/Homesupply/5.png",
    title: "Modern Ceramic Vase",
    subtitle: "Decor • Minimalist Design",
    price: "$35",
    description:
      "A sleek ceramic vase that adds a touch of modern elegance to your living space.",
    rating: 4.4,
  },
  {
    id: 66,
    image: "/Homesupply/6.png",
    title: "Smart LED Table Lamp",
    subtitle: "Lighting • Adjustable",
    price: "$60",
    description:
      "A dimmable LED lamp with touch control and warm-to-cool light modes for any mood.",
    rating: 4.7,
  },
  {
    id: 67,
    image: "/Homesupply/7.png",
    title: "AquaPure Water Filter Pitcher",
    subtitle: "Kitchen • 2L Capacity",
    price: "$48",
    description:
      "Removes impurities and provides clean, great-tasting water for the entire family.",
    rating: 4.5,
  },
  {
    id: 68,
    image: "/Homesupply/8.png",
    title: "Essential Oil Diffuser",
    subtitle: "Living Room • 300ml",
    price: "$40",
    description:
      "Ultrasonic aroma diffuser that fills your Homesupply with relaxing natural scents and mist.",
    rating: 4.6,
  },
  {
    id: 69,
    image: "/Homesupply/9.png",
    title: "ChefMaster Knife Set",
    subtitle: "Kitchen • 6 Pieces",
    price: "$85",
    description:
      "Precision stainless steel knives for perfect slicing, chopping, and cutting every time.",
    rating: 4.8,
  },
  {
    id: 70,
    image: "/Homesupply/10.png",
    title: "AirBreeze Floor Fan",
    subtitle: "Homesupply Appliance • 3-Speed",
    price: "$75",
    description:
      "A quiet, powerful fan that keeps your room cool and comfortable all day long.",
    rating: 4.6,
  },
  {
    id: 71,
    image: "/Homesupply/11.png",
    title: "WoodCraft Coffee Table",
    subtitle: "Living Room • Solid Wood",
    price: "$190",
    description:
      "Elegant wooden coffee table with smooth finish and sturdy legs, perfect for modern Homesupplys.",
    rating: 4.7,
  },
  {
    id: 72,
    image: "/Homesupply/12.png",
    title: "FreshAir Room Purifier",
    subtitle: "Appliance • HEPA Filter",
    price: "$120",
    description:
      "Removes dust, pollen, and odors to keep your indoor air clean and breathable.",
    rating: 4.8,
  },
  {
    id: 73,
    image: "/Homesupply/13.png",
    title: "CozyHomesupply Blanket",
    subtitle: "Bedroom • 200x220cm",
    price: "$65",
    description:
      "A soft fleece blanket that keeps you warm and cozy during chilly nights.",
    rating: 4.6,
  },
  {
    id: 74,
    image: "/Homesupply/14.png",
    title: "Stainless Cookware Set",
    subtitle: "Kitchen • 8 Pieces",
    price: "$150",
    description:
      "Durable stainless steel cookware with even heat distribution for perfect cooking results.",
    rating: 4.7,
  },
  {
    id: 75,
    image: "/Homesupply/15.png",
    title: "AromaFresh Hand Soap",
    subtitle: "Bathroom • 500ml",
    price: "$18",
    description:
      "Gentle foaming hand soap infused with essential oils for soft and clean hands.",
    rating: 4.5,
  },
  {
    id: 76,
    image: "/Homesupply/16.png",
    title: "SmartSense Trash Can",
    subtitle: "Homesupply • Motion Sensor",
    price: "$90",
    description:
      "Touch-free stainless trash can with motion sensor for a cleaner, smarter kitchen.",
    rating: 4.6,
  },
  {
    id: 77,
    image: "/Homesupply/17.png",
    title: "Velvet Curtain Set",
    subtitle: "Living Room • 2 Panels",
    price: "$110",
    description:
      "Elegant velvet curtains that block sunlight and add a touch of luxury to your decor.",
    rating: 4.7,
  },
  {
    id: 78,
    image: "/Homesupply/18.png",
    title: "KitchenPro Blender",
    subtitle: "Appliance • 1000W",
    price: "$130",
    description:
      "A high-speed blender ideal for smoothies, soups, and sauces with easy-clean blades.",
    rating: 4.8,
  },
  {
    id: 79,
    image: "/Homesupply/19.png",
    title: "PureSoft Carpet Rug",
    subtitle: "Living Room • 160x230cm",
    price: "$140",
    description:
      "A plush, non-slip rug that adds warmth and comfort to your living area.",
    rating: 4.6,
  },
  {
    id: 80,
    image: "/Homesupply/20.png",
    title: "EcoDry Laundry Basket",
    subtitle: "Homesupply • Bamboo Frame",
    price: "$50",
    description:
      "A durable and eco-friendly laundry basket made from natural bamboo and cotton fabric.",
    rating: 4.5,
  },
  {
    id: 81,
    image: "/Jewellery/1.png",
    title: "Golden Elegance Necklace",
    subtitle: "Necklace • 18K Gold",
    price: "$320",
    description:
      "A delicate 18K gold necklace featuring a minimalist pendant for timeless elegance.",
  },
  {
    id: 882,
    image: "/Jewellery/2.png",
    title: "Crystal Bloom Earrings",
    subtitle: "Earrings • Sterling Silver",
    price: "$85",
    description:
      "Sparkling crystal earrings crafted from premium silver to add charm to any outfit.",
  },
  {
    id: 883,
    image: "/Jewellery/3.png",
    title: "RoseGold Infinity Bracelet",
    subtitle: "Bracelet • Adjustable Fit",
    price: "$110",
    description:
      "A romantic rose gold bracelet symbolizing eternal love with an elegant infinity charm.",
  },
  {
    id: 84,
    image: "/Jewellery/4.png",
    title: "PearlDream Choker",
    subtitle: "Necklace • Freshwater Pearls",
    price: "$150",
    description:
      "A classic pearl choker with lustrous freshwater pearls for a touch of sophistication.",
  },
  {
    id: 85,
    image: "/Jewellery/5.png",
    title: "DiamondTwist Ring",
    subtitle: "Ring • White Gold",
    price: "$450",
    description:
      "A stunning diamond ring set in white gold with a graceful twist design for brilliance.",
  },
  {
    id: 86,
    image: "/Jewellery/6.png",
    title: "Emerald Grace Pendant",
    subtitle: "Pendant • Gold Plated",
    price: "$130",
    description:
      "A dazzling emerald pendant with a gold-plated chain, perfect for elegant evenings.",
  },
  {
    id: 87,
    image: "/Jewellery/7.png",
    title: "SilverWave Anklet",
    subtitle: "Anklet • Sterling Silver",
    price: "$65",
    description:
      "A wavy-pattern anklet made of pure silver for a chic and beachy look.",
  },
  {
    id: 88,
    image: "/Jewellery/8.png",
    title: "Ruby Radiance Studs",
    subtitle: "Earrings • Ruby Stone",
    price: "$120",
    description:
      "Gorgeous ruby studs set in gold for a pop of color and refined beauty.",
  },
  {
    id: 89,
    image: "/Jewellery/9.png",
    title: "CharmLink Bracelet",
    subtitle: "Bracelet • Stainless Steel",
    price: "$90",
    description:
      "A stylish link bracelet with customizable charms that showcase your personality.",
  },
  {
    id: 90,
    image: "/Jewellery/10.png",
    title: "OpalMist Necklace",
    subtitle: "Necklace • Opal Gemstone",
    price: "$210",
    description:
      "A soft glowing opal pendant necklace designed to capture natural iridescence.",
  },
  {
    id: 91,
    image: "/Jewellery/11.png",
    title: "Sapphire Queen Ring",
    subtitle: "Ring • Sapphire Stone",
    price: "$390",
    description:
      "An exquisite sapphire ring surrounded by small diamonds, fit for a modern queen.",
  },
  {
    id: 92,
    image: "/Jewellery/12.png",
    title: "Golden Halo Hoops",
    subtitle: "Earrings • Gold-Plated",
    price: "$95",
    description:
      "Bold yet elegant gold-plated hoops that complement both casual and formal looks.",
  },
  {
    id: 93,
    image: "/Jewellery/13.png",
    title: "Moonlight Bangle Set",
    subtitle: "Bangle • Silver Finish",
    price: "$180",
    description:
      "A set of three silver bangles with moonlight shine, perfect for layering.",
  },
  {
    id: 94,
    image: "/Jewellery/14.png",
    title: "RosePetal Brooch",
    subtitle: "Brooch • Floral Design",
    price: "$70",
    description:
      "An elegant rose-shaped brooch plated in rose gold with a subtle sparkle.",
  },
  {
    id: 95,
    image: "/Jewellery/15.png",
    title: "Royal Crown Tiara",
    subtitle: "Hair Accessory • Crystal",
    price: "$250",
    description:
      "A sparkling tiara with crystal embellishments for special occasions and events.",
  },
  {
    id: 96,
    image: "/Jewellery/16.png",
    title: "Amber Glow Pendant",
    subtitle: "Pendant • Natural Amber",
    price: "$140",
    description:
      "A warm amber pendant that radiates natural beauty and vintage charm.",
  },
  {
    id: 97,
    image: "/Jewellery/17.png",
    title: "GoldenLeaf Hairpin Set",
    subtitle: "Hair Accessory • Gold Tone",
    price: "$55",
    description:
      "Delicate gold-tone hairpins inspired by nature, perfect for bridal styling.",
  },
  {
    id: 98,
    image: "/Jewellery/18.png",
    title: "DiamondAura Necklace",
    subtitle: "Necklace • Lab Diamond",
    price: "$500",
    description:
      "A breathtaking lab-grown diamond necklace that sparkles with modern brilliance.",
  },
  {
    id: 99,
    image: "/Jewellery/19.png",
    title: "Crystal Harmony Bracelet",
    subtitle: "Bracelet • Multi-Stone",
    price: "$115",
    description:
      "A beautiful bracelet with mixed crystals symbolizing peace and positive energy.",
  },
  {
    id: 100,
    image: "/Jewellery/20.png",
    title: "Elegance Pearl Drop Earrings",
    subtitle: "Earrings • Gold-Plated",
    price: "$135",
    description:
      "Classic pearl drop earrings that add grace and sophistication to any occasion.",
  },
  // {
  //   id: 101,
  //   image: "/Beauty/8.png",
  //   title: "Pure Bloom Perfume",
  //   subtitle: "Fragrance • 50ml",
  //   price: "$60",
  //   description:
  //     "A floral fragrance with notes of jasmine, rose, and vanilla for an elegant, timeless scent.",
  // },
  // {
  //   id: 102,
  //   image: "/Electronic/1.png",
  //   title: "SmartX Pro Phone",
  //   subtitle: "Smartphone • 128GB",
  //   price: "$699",
  //   description:
  //     "A sleek smartphone with a powerful processor, edge-to-edge display, and all-day battery life.",
  // },
  // {
  //   id: 103,
  //   image: "/Fashion/7.png",
  //   title: "Wool Knit Sweater",
  //   subtitle: "Men • Winter Wear",
  //   price: "$70",
  //   description:
  //     "A cozy wool-blend sweater that keeps you warm while maintaining a stylish silhouette.",
  // },
  // {
  //   id: 104,
  //   image: "/Homesupply/1.png",
  //   title: "ComfortPlus Pillow Set",
  //   subtitle: "Bedroom • 2 Pieces",
  //   price: "$45",
  //   description:
  //     "Soft microfiber pillows offering plush comfort and lasting support for a restful sleep.",
  // },
  // {
  //   id: 105,
  //   image: "/Jewellery/11.png",
  //   title: "Sapphire Queen Ring",
  //   subtitle: "Ring • Sapphire Stone",
  //   price: "$390",
  //   description:
  //     "An exquisite sapphire ring surrounded by small diamonds, fit for a modern queen.",
  // },
  // {
  //   id: 106,
  //   image: "/Electronic/3.png",
  //   title: "VisionHD 4K TV",
  //   subtitle: "Display • 55-inch",
  //   price: "$799",
  //   description:
  //     "A stunning 4K UHD smart TV with vibrant colors, HDR10 support, and built-in streaming apps.",
  // },
  // {
  //   id: 107,
  //   image: "/Beauty/14.png",
  //   title: "Lavender Night Cream",
  //   subtitle: "Skincare • 50ml",
  //   price: "$35",
  //   description:
  //     "A calming night cream that nourishes skin overnight and promotes a healthy glow.",
  // },
  // {
  //   id: 108,
  //   image: "/Jewellery/1.png",
  //   title: "Golden Elegance Necklace",
  //   subtitle: "Necklace • 18K Gold",
  //   price: "$320",
  //   description:
  //     "A delicate 18K gold necklace featuring a minimalist pendant for timeless elegance.",
  // },
  // {
  //   id: 109,
  //   image: "/Homesupply/10.png",
  //   title: "AirBreeze Floor Fan",
  //   subtitle: "Homesupply Appliance • 3-Speed",
  //   price: "$75",
  //   description:
  //     "A quiet, powerful fan that keeps your room cool and comfortable all day long.",
  // },
  // {
  //   id: 110,
  //   image: "/Fashion/8.png",
  //   title: "Floral Maxi Dress",
  //   subtitle: "Women • Bohemian Style",
  //   price: "$110",
  //   description:
  //     "A flowy maxi dress with a floral pattern, ideal for sunny days and casual events.",
  // },
  // {
  //   id: 111,
  //   image: "/Jewellery/6.png",
  //   title: "Emerald Grace Pendant",
  //   subtitle: "Pendant • Gold Plated",
  //   price: "$130",
  //   description:
  //     "A dazzling emerald pendant with a gold-plated chain, perfect for elegant evenings.",
  // },

  // {
  //   id: 112,
  //   image: "/Homesupply/5.png",
  //   title: "Modern Ceramic Vase",
  //   subtitle: "Decor • Minimalist Design",
  //   price: "$35",
  //   description:
  //     "A sleek ceramic vase that adds a touch of modern elegance to your living space.",
  // },
  // {
  //   id: 113,
  //   image: "/Fashion/13.png",
  //   title: "Classic Oxford Shoes",
  //   subtitle: "Men • Leather",
  //   price: "$130",
  //   description:
  //     "Handcrafted leather Oxfords with a timeless design, perfect for both business and casual wear.",
  // },
  // {
  //   id: 114,
  //   image: "/Electronic/12.png",
  //   title: "XPower 10,000mAh Power Bank",
  //   subtitle: "Charging • Fast Charge",
  //   price: "$39",
  //   description:
  //     "A compact power bank with fast-charging support for phones, tablets, and other devices.",
  // },
  // {
  //   id: 115,
  //   image: "/Beauty/19.png",
  //   title: "Herbal Hair Conditioner",
  //   subtitle: "Haircare • 250ml",
  //   price: "$28",
  //   description:
  //     "A natural conditioner that strengthens and smooths hair with herbal extracts.",
  // },
  // {
  //   id: 116,
  //   image: "/Fashion/20.png",
  //   title: "Denim Mini Skirt",
  //   subtitle: "Women • Casual Wear",
  //   price: "$65",
  //   description:
  //     "A stylish denim mini skirt that pairs perfectly with tees, blouses, or jackets for any occasion.",
  // },
  // {
  //   id: 117,
  //   image: "/Electronic/2.png",
  //   title: "AeroBuds Wireless Earphones",
  //   subtitle: "Audio • Bluetooth 5.3",
  //   price: "$129",
  //   description:
  //     "Noise-cancelling wireless earbuds with crystal-clear sound and a comfortable, secure fit.",
  // },
  // {
  //   id: 118,
  //   image: "/Beauty/16.png",
  //   title: "Diamond Glow Highlighter",
  //   subtitle: "Makeup • Compact",
  //   price: "$29",
  //   description:
  //     "A shimmery highlighter that adds a radiant glow to cheekbones and eyes.",
  // },
  // {
  //   id: 119,
  //   image: "/Jewellery/14.png",
  //   title: "RosePetal Brooch",
  //   subtitle: "Brooch • Floral Design",
  //   price: "$70",
  //   description:
  //     "An elegant rose-shaped brooch plated in rose gold with a subtle sparkle.",
  // },
  {
    id: 120,
    image: "/Homesupply/14.png",
    title: "Stainless Cookware Set",
    subtitle: "Kitchen • 8 Pieces",
    price: "$150",
    description:
      "Durable stainless steel cookware with even heat distribution for perfect cooking results.",
  },
    {
    id: 121,
    image: '/Jewellery/1.png',
    title: 'Golden Elegance Necklace',
    subtitle: 'Necklace • 18K Gold',
    price: '$320',
    description: 'A delicate 18K gold necklace featuring a minimalist pendant for timeless elegance.'
  },
  {
    id: 122,
    image: '/Jewellery/2.png',
    title: 'Crystal Bloom Earrings',
    subtitle: 'Earrings • Sterling Silver',
    price: '$85',
    description: 'Sparkling crystal earrings crafted from premium silver to add charm to any outfit.'
  },
  {
    id: 123,
    image: '/Jewellery/3.png',
    title: 'RoseGold Infinity Bracelet',
    subtitle: 'Bracelet • Adjustable Fit',
    price: '$110',
    description: 'A romantic rose gold bracelet symbolizing eternal love with an elegant infinity charm.'
  },
  {
    id: 124,
    image: '/Jewellery/4.png',
    title: 'PearlDream Choker',
    subtitle: 'Necklace • Freshwater Pearls',
    price: '$150',
    description: 'A classic pearl choker with lustrous freshwater pearls for a touch of sophistication.'
  },
  {
    id: 125,
    image: '/Jewellery/5.png',
    title: 'DiamondTwist Ring',
    subtitle: 'Ring • White Gold',
    price: '$450',
    description: 'A stunning diamond ring set in white gold with a graceful twist design for brilliance.'
  },
  {
    id: 126,
    image: '/Jewellery/6.png',
    title: 'Emerald Grace Pendant',
    subtitle: 'Pendant • Gold Plated',
    price: '$130',
    description: 'A dazzling emerald pendant with a gold-plated chain, perfect for elegant evenings.'
  },
  {
    id: 127,
    image: '/Jewellery/7.png',
    title: 'SilverWave Anklet',
    subtitle: 'Anklet • Sterling Silver',
    price: '$65',
    description: 'A wavy-pattern anklet made of pure silver for a chic and beachy look.'
  },
  {
    id: 128,
    image: '/Jewellery/8.png',
    title: 'Ruby Radiance Studs',
    subtitle: 'Earrings • Ruby Stone',
    price: '$120',
    description: 'Gorgeous ruby studs set in gold for a pop of color and refined beauty.'
  },
  {
    id: 129,
    image: '/Jewellery/9.png',
    title: 'CharmLink Bracelet',
    subtitle: 'Bracelet • Stainless Steel',
    price: '$90',
    description: 'A stylish link bracelet with customizable charms that showcase your personality.'
  },
  {
    id: 130,
    image: '/Jewellery/10.png',
    title: 'OpalMist Necklace',
    subtitle: 'Necklace • Opal Gemstone',
    price: '$210',
    description: 'A soft glowing opal pendant necklace designed to capture natural iridescence.'
  },
  {
    id: 131,
    image: '/Jewellery/11.png',
    title: 'Sapphire Queen Ring',
    subtitle: 'Ring • Sapphire Stone',
    price: '$390',
    description: 'An exquisite sapphire ring surrounded by small diamonds, fit for a modern queen.'
  },
  {
    id: 132,
    image: '/Jewellery/12.png',
    title: 'Golden Halo Hoops',
    subtitle: 'Earrings • Gold-Plated',
    price: '$95',
    description: 'Bold yet elegant gold-plated hoops that complement both casual and formal looks.'
  },
  {
    id: 133,
    image: '/Jewellery/13.png',
    title: 'Moonlight Bangle Set',
    subtitle: 'Bangle • Silver Finish',
    price: '$180',
    description: 'A set of three silver bangles with moonlight shine, perfect for layering.'
  },
  {
    id: 134,
    image: '/Jewellery/14.png',
    title: 'RosePetal Brooch',
    subtitle: 'Brooch • Floral Design',
    price: '$70',
    description: 'An elegant rose-shaped brooch plated in rose gold with a subtle sparkle.'
  },
  {
    id: 135,
    image: '/Jewellery/15.png',
    title: 'Royal Crown Tiara',
    subtitle: 'Hair Accessory • Crystal',
    price: '$250',
    description: 'A sparkling tiara with crystal embellishments for special occasions and events.'
  },
  {
    id: 136,
    image: '/Jewellery/16.png',
    title: 'Amber Glow Pendant',
    subtitle: 'Pendant • Natural Amber',
    price: '$140',
    description: 'A warm amber pendant that radiates natural beauty and vintage charm.'
  },
  {
    id: 137,
    image: '/Jewellery/17.png',
    title: 'GoldenLeaf Hairpin Set',
    subtitle: 'Hair Accessory • Gold Tone',
    price: '$55',
    description: 'Delicate gold-tone hairpins inspired by nature, perfect for bridal styling.'
  },
  {
    id: 138,
    image: '/Jewellery/18.png',
    title: 'DiamondAura Necklace',
    subtitle: 'Necklace • Lab Diamond',
    price: '$500',
    description: 'A breathtaking lab-grown diamond necklace that sparkles with modern brilliance.'
  },
  {
    id: 139,
    image: '/Jewellery/19.png',
    title: 'Crystal Harmony Bracelet',
    subtitle: 'Bracelet • Multi-Stone',
    price: '$115',
    description: 'A beautiful bracelet with mixed crystals symbolizing peace and positive energy.'
  },
  {
    id: 140,
    image: '/Jewellery/20.png',
    title: 'Elegance Pearl Drop Earrings',
    subtitle: 'Earrings • Gold-Plated',
    price: '$135',
    description: 'Classic pearl drop earrings that add grace and sophistication to any occasion.'
  }
];


export default SEARCH_DATA;