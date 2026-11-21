/* =========================================================
   سحايب ديرتي - Script.js (نسخة منظفة ومرتبة)
   ========================================================= */

/* ====================== 1. إعدادات الفروع ====================== */
const BRANCH_CONFIG = {
    branch1: {
        whatsapp: '966112022358',
        name: 'لبن الاحمدية',
        deliveryFee: 5
    },
    branch2: {
        whatsapp: '966112022358', // ⚠️ غيّر رقم واتساب فرع جدة
        name: 'شمال الرياض مخرج ٦',
        deliveryFee: 5
    },
    branch3: {
        whatsapp: '966112022358', // ⚠️ غيّر رقم واتساب فرع مكة
        name: 'الروضه خالد بن الوليد',
        deliveryFee: 5
    }
};

/* تحديد الفرع الحالي من الرابط */
let currentBranchId = 'branch1';
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('branch')) {
    currentBranchId = urlParams.get('branch');
}
const currentBranch = BRANCH_CONFIG[currentBranchId] || BRANCH_CONFIG.branch1;
document.title = `قائمة سحايب ديرتي - فرع ${currentBranch.name}`;

/* ====================== 2. الأسماء الإنجليزية ====================== */
const ENGLISH_NAMES = {
    "حبة شواية": "Whole Grilled Chicken",
    "نص شواية بالرز": "Half Grilled Chicken with Rice",
    "ربع دجاج": "Quarter Chicken",
    "نصف دجاج (ساده بدون رز شوايه آو مضبي آو مندي)": "Half Chicken - Grilled, Madhbi or Mandi",
    "حبة مظبي": "Whole Madhbi Chicken",
    "نص مظبي": "Half Madhbi Chicken",
    "حبه مندي": "Whole Mandi Chicken",
    "نص مندي": "Half Mandi Chicken",
    "حبه مدفون": "Whole Madfoon Chicken",
    "نص مدفون": "Half Madfoon Chicken",
    "حبه مقلوبه": "Whole Maqluba Chicken",
    "نص دجاج مقلوبه": "Half Maqluba Chicken",
    "حبه دجاج مضغوط": "Whole Pressed Chicken",
    "نص حبه مضغوط": "Half Pressed Chicken",
    "دجاج زربيان حبه": "Whole Zurbian Chicken",
    "نص حبه زربيان": "Half Zurbian Chicken",
    "تيس مندي كامل": "Whole Mandi Goat",
    "نص تيس مندي": "Half Mandi Goat",
    "ربع تيس مندي": "Quarter Mandi Goat",
    "نفر لحم مندي": "Mandi Meat Serving",
    "نفر حاشي مكموت": "Camel Meat Serving",
    "نفر برمه لحم هرفي مع المرق": "Haruf Meat Pot with Gravy",
    "كباب لحم": "Meat Kebab",
    "كباب دجاج": "Chicken Kebab",
    "اوصال لحم": "Meat Ousal",
    "شيش طاووق": "Chicken Shish Tawook",
    "مشكل فاخر على الأرز32 سيخ": "Premium Mixed Grill with Rice - 32 Skewers",
    "مشكل مشاوي": "Mixed Grill",
    "نفر رز شعبي": "Traditional Rice",
    "نفر رز بشاور": "Basmati Rice",
    "نفر رز مندي": "Mandi Rice",
    "ببسي": "Pepsi",
    "حمضيات": "Citrus",
    "سفن اب": "7UP",
    "لبن المراعي": "Almarai Laban",
    "لبن القريه": "Al Qariah Laban",
    "ملوخيه": "Molokhia",
    "باميه": "Okra",
    "مشكل خضار": "Mixed Vegetables",
    "مشكل فران": "Mixed Oven Vegetables",
    "مسقع": "Moussaka",
    "شوربة": "Soup",
    "جريش": "Jareesh",
    "قرصان": "Qursan",
    "ورق عنب": "Stuffed Grape Leaves",
    "سلطه خضار": "Vegetable Salad",
    "خيار ولبن": "Cucumber with Yogurt",
    "حمص": "Hummus",
    "متبل": "Moutabal",
    "تبوله": "Tabbouleh",
    "سلطه روسيه": "Russian Salad",
    "سلطه امريكيه": "American Salad",
    "مشكل مقبلات": "Mixed Appetizers",
    "طحينه": "Tahini",
    "سلطه حار": "Spicy Salad",
    "كنافه قشطه": "Cream Kunafa",
    "كنافه جلاكسي": "Galaxy Kunafa",
    "كنافه نوتيلا": "Nutella Kunafa"
};

/* ====================== 3. بيانات المنيو ====================== */
const menuData = [
    {
        section: "الكل",
        sectionImg: "logo-bg1.webp",
        items: []
    },
    {
        section: "الشوايه",
        sectionImg: "sh01.webp",
        items: [
            {
                id: "sh1",
                img: "sh01.webp",
                name: "حبة شواية",
                basePrice: 48,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 2 },
                    { name: "رز مندي", price: 2 },
                    { name: "رز مثلوثه", price: 2 }
                ]
            },
            {
                id: "sh2",
                img: "sh01.webp",
                name: "نص شواية بالرز",
                basePrice: 24,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 1 },
                    { name: "رز مندي", price: 1 },
                    { name: "رز مثلوثه", price: 1 }
                ]
            },
            {
                id: "sh3",
                img: "sh10.webp",
                name: "ربع دجاج",
                basePrice: 15,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "شوايه", price: 0 },
                    { name: "مندي", price: 0 }
                ]
            },
            {
                id: "sh4",
                img: "sh20.webp",
                name: "نصف دجاج (ساده بدون رز شوايه آو مضبي آو مندي)",
                basePrice: 18,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "شوايه", price: 0 },
                    { name: "مظبي", price: 0 },
                    { name: "مندي", price: 0 }
                ]
            }
        ]
    },
    {
        section: "المظبي",
        sectionImg: "md00.webp",
        items: [
            {
                id: "md1",
                img: "md00.webp",
                name: "حبة مظبي",
                basePrice: 48,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 2 },
                    { name: "رز مندي", price: 2 },
                    { name: "رز مثلوثه", price: 2 }
                ]
            },
            {
                id: "md2",
                img: "md00.webp",
                name: "نص مظبي",
                basePrice: 24,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 1 },
                    { name: "رز مندي", price: 1 },
                    { name: "رز مثلوثه", price: 1 }
                ]
            }
        ]
    },
    {
        section: "مندي",
        sectionImg: "mn00.webp",
        items: [
            {
                id: "mn1",
                img: "mn00.webp",
                name: "حبه مندي",
                basePrice: 48,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 2 },
                    { name: "رز مندي", price: 2 },
                    { name: "رز مثلوثه", price: 2 }
                ]
            },
            {
                id: "mn2",
                img: "mn00.webp",
                name: "نص مندي",
                basePrice: 24,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 1 },
                    { name: "رز مندي", price: 1 },
                    { name: "رز مثلوثه", price: 1 }
                ]
            }
        ]
    },
    {
        section: "مدفون",
        sectionImg: "mf00.webp",
        items: [
            {
                id: "mdf1",
                img: "mf01.webp",
                name: "حبه مدفون",
                basePrice: 48,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 2 },
                    { name: "رز مندي", price: 2 },
                    { name: "رز مثلوثه", price: 2 }
                ]
            },
            {
                id: "mdf2",
                img: "mf00.webp",
                name: "نص مدفون",
                basePrice: 24,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 1 },
                    { name: "رز مندي", price: 1 },
                    { name: "رز مثلوثه", price: 1 }
                ]
            }
        ]
    },
    {
        section: "مقلوبه",
        sectionImg: "mq00.webp",
        items: [
            {
                id: "mq1",
                img: "mq00.webp",
                name: "حبه مقلوبه",
                basePrice: 50,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "رز شعبي", price: 0 }]
            },
            {
                id: "mq2",
                img: "mq00.webp",
                name: "نص دجاج مقلوبه",
                basePrice: 25,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "رز شعبي", price: 0 }]
            }
        ]
    },
    {
        section: "مضغوط",
        sectionImg: "mg00.webp",
        items: [
            {
                id: "mg1",
                img: "mg00.webp",
                name: "حبه دجاج مضغوط",
                basePrice: 50,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "رز مضغوط", price: 0 }]
            },
            {
                id: "mg2",
                img: "mg00.webp",
                name: "نص حبه مضغوط",
                basePrice: 25,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "رز مضغوط", price: 0 }]
            }
        ]
    },
    {
        section: "زربيان",
        sectionImg: "zb00.webp",
        items: [
            {
                id: "zb1",
                img: "zb00.webp",
                name: "دجاج زربيان حبه",
                basePrice: 50,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "رز زربيان", price: 0 }]
            },
            {
                id: "zb2",
                img: "zb00.webp", // تم إصلاح المسار (كان فيه / زائدة)
                name: "نص حبه زربيان",
                basePrice: 25,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "رز زربيان", price: 0 }]
            }
        ]
    },
    {
        section: "قسم اللحوم",
        sectionImg: "me01.webp",
        items: [
            {
                id: "t1",
                img: "me01.webp",
                name: "تيس مندي كامل",
                basePrice: 1550,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 50 },
                    { name: "رز مندي", price: 50 }
                ]
            },
            {
                id: "t2",
                img: "me02.webp",
                name: "نص تيس مندي",
                basePrice: 750,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 25 },
                    { name: "رز مندي", price: 25 }
                ]
            },
            {
                id: "t3",
                img: "me03.webp",
                name: "ربع تيس مندي",
                basePrice: 375,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 13 },
                    { name: "رز مندي", price: 13 }
                ]
            },
            {
                id: "t4",
                img: "me04.webp",
                name: "نفر لحم مندي",
                basePrice: 100,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 0 },
                    { name: "رز مندي", price: 0 }
                ]
            },
            {
                id: "t5",
                img: "me05.webp",
                name: "نفر حاشي مكموت",
                basePrice: 59,
                isBestSeller: true,
                branchDiscounts: {
                    branch1: 50,
                    branch2: 50,
                    branch3: 50
                },
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 3 },
                    { name: "رز مندي", price: 3 }
                ]
            },
            {
                id: "t6",
                img: "me06.webp",
                name: "نفر برمه لحم هرفي مع المرق",
                basePrice: 80,
                isBestSeller: true,
                branchDiscounts: {
                    branch1: 68,
                    branch2: 68,
                    branch3: 68
                },
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "رز شعبي", price: 0 },
                    { name: "رز بشاور", price: 0 },
                    { name: "رز مندي", price: 0 }
                ]
            }
        ]
    },
    {
        section: "المشويات",
        sectionImg: "gr00.webp",
        sectionAvailableIn: ["branch1", "branch2"],
        items: [
            {
                id: "gr1",
                img: "gr01.webp",
                name: "كباب لحم",
                basePrice: 0,
                availableIn: ["branch1", "branch2"],
                options: [
                    { name: "نفر", price: 38 },
                    { name: "نص كيلو", price: 76 },
                    { name: "كيلو", price: 150 }
                ]
            },
            {
                id: "gr2",
                img: "gr02.webp",
                name: "كباب دجاج",
                basePrice: 0,
                availableIn: ["branch1", "branch2"],
                options: [
                    { name: "نفر", price: 30 },
                    { name: "نص كيلو", price: 60 },
                    { name: "كيلو", price: 120 }
                ]
            },
            {
                id: "gr3",
                img: "gr03.webp",
                name: "اوصال لحم",
                basePrice: 0,
                availableIn: ["branch1", "branch2"],
                options: [
                    { name: "نفر", price: 45 },
                    { name: "نص كيلو", price: 90 },
                    { name: "كيلو", price: 180 }
                ]
            },
            {
                id: "gr4",
                img: "gr04.webp",
                name: "شيش طاووق",
                basePrice: 0,
                availableIn: ["branch1", "branch2"],
                options: [
                    { name: "نفر", price: 30 },
                    { name: "نص كيلو", price: 60 },
                    { name: "كيلو", price: 120 }
                ]
            },
            {
                id: "gr5",
                img: "gr07.jpg",
                name: "مشكل فاخر على الأرز32 سيخ",
                basePrice: 300,
                isBestSeller: true,
                availableIn: ["branch1", "branch2"],
                options: [
                    { name: "تامين صحن", price: 30 }
                ]
            },
            {
                id: "gr6",
                img: "gr05.webp",
                name: "مشكل مشاوي",
                basePrice: 0,
                isBestSeller: true,
                availableIn: ["branch1", "branch2"],
                options: [
                    { name: "نفر", price: 35 },
                    { name: "نص كيلو", price: 70 },
                    { name: "كيلو", price: 130 }
                ]
            }
        ]
    },
    {
        section: "الأطباق الجانبية",
        sectionImg: "si00.webp",
        items: [
            {
                id: "side7",
                img: "si05.webp",
                name: "نفر رز شعبي",
                basePrice: 10,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "نفر", price: 0 }]
            },
            {
                id: "side8",
                img: "si06.webp",
                name: "نفر رز بشاور",
                basePrice: 10,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "نفر", price: 0 }]
            },
            {
                id: "side9",
                img: "si07.webp",
                name: "نفر رز مندي",
                basePrice: 10,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "نفر", price: 0 }]
            }
        ]
    },
    {
        section: "المشروبات",
        sectionImg: "dr00.webp",
        items: [
            {
                id: "bev-p",
                img: "dr01.webp",
                name: "ببسي",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 3 },
                    { name: "وسط", price: 6 },
                    { name: "كبير", price: 9 }
                ]
            },
            {
                id: "bev-h",
                img: "dr02.webp",
                name: "حمضيات",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 3 },
                    { name: "وسط", price: 6 },
                    { name: "كبير", price: 9 }
                ]
            },
            {
                id: "bev-s",
                img: "dr03.webp",
                name: "سفن اب",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 3 },
                    { name: "وسط", price: 6 },
                    { name: "كبير", price: 9 }
                ]
            },
            {
                id: "bev-m",
                img: "dr04.webp",
                name: "لبن المراعي",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 2 },
                    { name: "وسط", price: 6 },
                    { name: "كبير", price: 11 }
                ]
            },
            {
                id: "bev-q",
                img: "dr05.webp",
                name: "لبن القريه",
                basePrice: 3,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "عبوة", price: 0 }]
            }
        ]
    },
    {
        section: "الايدامات",
        sectionImg: "ed00.webp",
        items: [
            {
                id: "eid1",
                img: "ed01.webp",
                name: "ملوخيه",
                basePrice: 10,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "صحن", price: 0 }]
            },
            {
                id: "eid2",
                img: "ed02.webp",
                name: "باميه",
                basePrice: 10,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "صحن", price: 0 }]
            },
            {
                id: "eid3",
                img: "ed03.webp",
                name: "مشكل خضار",
                basePrice: 10,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "صحن", price: 0 }]
            },
            {
                id: "eid4",
                img: "ed04.webp",
                name: "مشكل فران",
                basePrice: 10,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "صحن", price: 0 }]
            },
            {
                id: "eid5",
                img: "ed05.webp",
                name: "مسقع",
                basePrice: 12,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "صحن", price: 0 }]
            },
            {
                id: "side0",
                img: "si08.webp",
                name: "شوربة",
                basePrice: 8,
                isBestSeller: true,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "صحن", price: 0 }]
            },
            {
                id: "side1",
                img: "si01.webp",
                name: "جريش",
                basePrice: 0,
                isBestSeller: true,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 5 },
                    { name: "كبير", price: 10 }
                ]
            },
            {
                id: "side3",
                img: "si02.webp",
                name: "قرصان",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 5 },
                    { name: "كبير", price: 10 }
                ]
            }
        ]
    },
    {
        section: "المقبلات",
        sectionImg: "ap00.webp",
        items: [
            {
                id: "app-wrk",
                img: "ap09.webp",
                name: "ورق عنب",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 7 },
                    { name: "كبير", price: 12 }
                ]
            },
            {
                id: "app-khdar",
                img: "ap01.webp",
                name: "سلطه خضار",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 7 },
                    { name: "وسط", price: 13 }
                ]
            },
            {
                id: "app-laban",
                img: "ap02.webp",
                name: "خيار ولبن",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 7 },
                    { name: "وسط", price: 10 }
                ]
            },
            {
                id: "app-homos",
                img: "ap03.webp",
                name: "حمص",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 7 },
                    { name: "وسط", price: 13 }
                ]
            },
            {
                id: "app-mtbl",
                img: "ap04.webp",
                name: "متبل",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 7 },
                    { name: "وسط", price: 13 }
                ]
            },
            {
                id: "app-tbole",
                img: "ap05.webp",
                name: "تبوله",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 7 },
                    { name: "وسط", price: 13 }
                ]
            },
            {
                id: "app-rose",
                img: "ap06.webp",
                name: "سلطه روسيه",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 7 },
                    { name: "وسط", price: 13 }
                ]
            },
            {
                id: "app-amr",
                img: "ap07.webp",
                name: "سلطه امريكيه",
                basePrice: 0,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [
                    { name: "صغير", price: 7 },
                    { name: "وسط", price: 13 }
                ]
            },
            {
                id: "app-mshkl",
                img: "ap08.webp",
                name: "مشكل مقبلات",
                basePrice: 13,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "طبق", price: 0 }]
            },
            {
                id: "side5",
                img: "si03.webp",
                name: "طحينه",
                basePrice: 3,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "علبه", price: 0 }]
            },
            {
                id: "side6",
                img: "si04.webp",
                name: "سلطه حار",
                basePrice: 3,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "علبه", price: 0 }]
            }
        ]
    },
    {
        section: "الكنافه",
        sectionImg: "kn00.webp",
        sectionAvailableIn: ["branch1", "branch2", "branch3"],
        items: [
            {
                id: "kna1",
                img: "kn00.webp",
                name: "كنافه قشطه",
                basePrice: 10,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "", price: 0 }]
            },
            {
                id: "kna2",
                img: "kn02.webp",
                name: "كنافه جلاكسي",
                basePrice: 12,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "", price: 0 }]
            },
            {
                id: "kna3",
                img: "kn03.webp",
                name: "كنافه نوتيلا",
                basePrice: 12,
                availableIn: ["branch1", "branch2", "branch3"],
                options: [{ name: "", price: 0 }]
            }
        ]
    }
];

/* ====================== 4. معالجة الأكثر مبيعاً ====================== */
function processMenuData(data) {
    const bestSellers = [];
    const processed = [];

    data.forEach(section => {
        if (section.section === "الكل") {
            processed.push(section);
            return;
        }

        const regularItems = [];

        section.items.forEach(item => {
            const itemWithSection = {
                ...item,
                actualSection: item.actualSection || section.section
            };

            if (item.isBestSeller === true) {
                bestSellers.push(itemWithSection);
            } else {
                regularItems.push(itemWithSection);
            }
        });

        if (regularItems.length > 0 || section.sectionAvailableIn) {
            processed.push({ ...section, items: regularItems });
        }
    });

    if (bestSellers.length > 0) {
        processed.splice(1, 0, {
            section: "الأكثر مبيعاً 🏆",
            sectionImg: "/Dirty55/best_seller_icon.webp",
            items: bestSellers,
            sectionAvailableIn: ["branch1", "branch2", "branch3"]
        });
    }

    return processed;
}

const processedMenuData = processMenuData(menuData);

/* ====================== 5. المتغيرات العامة ====================== */
let selectedOptions = [];
let selectedQty = 1;
let currentSection = processedMenuData[0].section;
let selectedItem = null;
let selectedOption = null;
let selectedItemImage = null;
let userLocation = null;
let cart = JSON.parse(localStorage.getItem("deerty_cart") || "[]");

const dynamicSuggestionRules = {
    "شواية": ["المقبلات", "الايدامات"],
    "مظبي": ["المقبلات", "الايدامات"],
    "مندي": ["المقبلات", "الايدامات"],
    "مدفون": ["المقبلات", "الايدامات"],
    "مقلوبه": ["المقبلات", "الايدامات"],
    "مضغوط": ["المقبلات", "المقبلات"],
    "زربيان": ["المقبلات", "الايدامات"],
    "رز": ["المقبلات", "الايدامات"],
    "مشويات": ["المقبلات"],
    "كنافه": ["المشروبات"]
};

/* عناصر DOM */
const sectionsEl = document.getElementById("sections");
const menuList = document.getElementById("menuList");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsEl = document.getElementById("cartItems");
const totalBreakdownEl = document.getElementById("totalBreakdown");
const sendWhatsapp = document.getElementById("sendWhatsapp");
const clearCart = document.getElementById("clearCart");
const getLocationBtn = document.getElementById("getLocationBtn");
const locationStatus = document.getElementById("locationStatus");
const optionModal = document.getElementById("optionModal");
const modalTitle = document.getElementById("modalTitle");
const modalOptions = document.getElementById("modalOptions");
const modalConfirm = document.getElementById("modalConfirm");
const itemNoteInput = document.getElementById("itemNote");
const searchBar = document.getElementById("searchBar");
const installAppBtn = document.getElementById("installAppBtn");

/* ====================== 6. عرض الأقسام والمنيو ====================== */
function renderSections() {
    sectionsEl.innerHTML = "";

    processedMenuData.forEach(sec => {
        if (
            sec.section !== "الكل" &&
            sec.sectionAvailableIn &&
            !sec.sectionAvailableIn.includes(currentBranchId)
        ) {
            return;
        }

        const displayName =
            sec.section === "الكل" ? `فرع ${currentBranch.name}` : sec.section;

        const card = document.createElement("div");
        card.className = "sec-card";
        if (sec.section === currentSection) card.classList.add("active");

        card.innerHTML = `
            <img src="\( {sec.sectionImg}" alt=" \){sec.section}" onerror="this.style.opacity=.35">
            <div class="sec-name">${displayName}</div>
        `;

        card.onclick = () => {
            document.querySelectorAll(".sec-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            currentSection = sec.section;
            renderMenu(currentSection);
            searchBar.value = "";
        };

        sectionsEl.appendChild(card);
    });

    renderMenu(currentSection);
}

function renderMenu(sectionName, searchTerm = "") {
    menuList.innerHTML = "";
    let itemsToRender = [];
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (sectionName === "الكل") {
        itemsToRender = processedMenuData.flatMap(sec =>
            sec.section !== "الكل"
                ? sec.items.map(item => ({
                      ...item,
                      actualSection: item.actualSection || sec.section
                  }))
                : []
        );
    } else {
        const sec = processedMenuData.find(s => s.section === sectionName);
        if (!sec) return;
        itemsToRender = sec.items;
    }

    const branchFiltered = itemsToRender.filter(
        item =>
            item.availableIn &&
            Array.isArray(item.availableIn) &&
            item.availableIn.includes(currentBranchId)
    );

    const filteredItems = branchFiltered.filter(item =>
        item.name.toLowerCase().includes(normalizedSearch)
    );

    if (filteredItems.length === 0) {
        menuList.innerHTML = `
            <p style="text-align:center; padding:20px; color:var(--light-text);">
                ${
                    normalizedSearch
                        ? `لا توجد نتائج بحث في قسم "${sectionName}" في فرع ${currentBranch.name}`
                        : `لا تتوفر وجبات في قسم "${sectionName}" حالياً في فرع ${currentBranch.name}.`
                }
            </p>`;
        return;
    }

    filteredItems.forEach(item => {
        const isAvailable = item.isAvailable !== false;
        const discountedPrice = item.branchDiscounts
            ? item.branchDiscounts[currentBranchId]
            : null;
        const hasDiscount =
            discountedPrice && discountedPrice < item.basePrice;
        const isBestSeller = item.isBestSeller === true;

        let buttonText = "أضف للسلة";
        let buttonAttributes = "";
        let cardClass = "";
        let bestSellerBadge = "";

        if (!isAvailable) {
            buttonText = "غير متوفر مؤقتاً ⛔";
            buttonAttributes = "disabled";
            cardClass = " unavailable-card";
        } else if (hasDiscount) {
            cardClass = " discount-card";
        }

        if (isBestSeller) {
            bestSellerBadge =
                '<span class="best-seller-badge">الأكثر مبيعاً 🏆</span>';
        }

        let priceDisplay;
        if (hasDiscount) {
            priceDisplay = `
                <span class="old-price">${item.basePrice} ريال</span>
                <span class="discount-price">${discountedPrice} ريال</span>
            `;
        } else {
            priceDisplay =
                item.basePrice > 0
                    ? `${item.basePrice} ريال`
                    : item.options.length > 0 && item.options[0].price > 0
                    ? `ابتداءً من ${item.options[0].price} ريال`
                    : `${item.options[0]?.price || 0} ريال`;
        }

        const displayedSection = item.actualSection || sectionName;
        const englishName =
            ENGLISH_NAMES[item.name.trim().replace(/\s+/g, " ")] || "";

        const card = document.createElement("div");
        card.className = "card" + cardClass;

        card.innerHTML = `
            <img src="\( {item.img}" alt=" \){item.name}" onerror="this.style.opacity=.35">
            ${bestSellerBadge}
            <h3 class="item-name-ar">${item.name}</h3>
            \( {englishName ? `<div class="item-name-en"> \){englishName}</div>` : ""}
            <p>${displayedSection}</p>
            \( {item.description ? `<div class="item-desc"> \){item.description}</div>` : ""}
            <div class="price">${priceDisplay}</div>
            <button class="add-btn luxury-add-btn" ${buttonAttributes}>
                <span class="luxury-cart-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="M3 4h2l2.2 10.5a2 2 0 0 0 2 1.5h7.6a2 2 0 0 0 1.9-1.4L21 8H7"/>
                        <circle cx="10" cy="20" r="1.5"/>
                        <circle cx="18" cy="20" r="1.5"/>
                    </svg>
                </span>
                <span>${buttonText}</span>
            </button>
        `;

        if (isAvailable) {
            card.querySelector("button").onclick = function () {
                const itemForCart = { ...item };
                const itemImage = card.querySelector("img");

                if (hasDiscount) {
                    itemForCart.basePrice = discountedPrice;
                }

                delete itemForCart.actualSection;

                const needsOptions =
                    item.options.length > 1 ||
                    (item.options.length === 1 && item.options[0].name !== "");

                showOptions(itemForCart, !needsOptions, itemImage);
            };
        }

        menuList.appendChild(card);
    });
}

/* ====================== 7. نافذة الخيارات + الكمية ====================== */
function showOptions(item, skipOptions = false, itemImage = null) {
    selectedItem = item;
    selectedItemImage = itemImage;
    selectedQty = 1;
    updateModalQty();
    selectedOption = null;
    selectedOptions = [];

    modalTitle.innerText = item.name;
    itemNoteInput.value = "";

    if (skipOptions || item.options.length === 0) {
        modalOptions.style.display = "none";
    } else {
        modalOptions.style.display = "block";
        modalOptions.innerHTML = "";

        item.options.forEach((opt, index) => {
            const wrapper = document.createElement("label");
            wrapper.style.cssText =
                "display:flex;align-items:center;gap:8px;margin-bottom:8px;";

            const input = document.createElement("input");

            if (item.isMultiOption) {
                input.type = "checkbox";
                input.onchange = () => {
                    if (input.checked) {
                        selectedOptions.push(opt);
                    } else {
                        selectedOptions = selectedOptions.filter(
                            o => o.name !== opt.name
                        );
                    }
                };
            } else {
                input.type = "radio";
                input.name = "productOption";
                if (index === 0) {
                    input.checked = true;
                    selectedOption = opt;
                }
                input.onchange = () => {
                    selectedOption = opt;
                };
            }

            const text = document.createElement("span");
            text.innerText =
                opt.name + (opt.price > 0 ? ` +${opt.price} ريال` : "");

            wrapper.appendChild(input);
            wrapper.appendChild(text);
            modalOptions.appendChild(wrapper);
        });
    }

    optionModal.style.display = "flex";
}

/* عداد الكمية */
const modalQtyBox = document.createElement("div");
modalQtyBox.id = "modalQuantity";
modalQtyBox.style.cssText = `
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:18px 0;
    padding:15px;
    border:1px solid #c39e6a;
    border-radius:14px;
    background:#211b16;
    direction:rtl;
`;
modalQtyBox.innerHTML = `
    <strong style="color:#d6b477;font-size:17px">الكمية</strong>
    <div style="display:flex;align-items:center;gap:18px">
        <button type="button" id="qtyMinus"
            style="width:42px;height:42px;border:0;border-radius:10px;background:#c9a365;color:#21170e;font-size:25px">−</button>
        <strong id="qtyValue" style="font-size:24px;color:white;min-width:25px;text-align:center">1</strong>
        <button type="button" id="qtyPlus"
            style="width:42px;height:42px;border:0;border-radius:10px;background:#c9a365;color:#21170e;font-size:25px">+</button>
    </div>
`;
itemNoteInput.insertAdjacentElement("beforebegin", modalQtyBox);

function updateModalQty() {
    document.getElementById("qtyValue").innerText = selectedQty;
}

document.getElementById("qtyMinus").onclick = () => {
    if (selectedQty > 1) {
        selectedQty--;
        updateModalQty();
    }
};

document.getElementById("qtyPlus").onclick = () => {
    if (selectedQty < 99) {
        selectedQty++;
        updateModalQty();
    }
};

optionModal.addEventListener("click", e => {
    if (e.target.id === "optionModal") {
        optionModal.style.display = "none";
    }
});

modalConfirm.onclick = () => {
    if (!selectedItem) return;

    const note = itemNoteInput.value.trim();

    if (selectedItem.isMultiOption) {
        addToCart({
            ...selectedItem,
            qty: selectedQty,
            selectedOptions,
            note: note || null
        });
    } else {
        const optionToSend =
            selectedOption ||
            (selectedItem.options.length > 0
                ? selectedItem.options[0]
                : null);

        addToCart({
            ...selectedItem,
            qty: selectedQty,
            selectedOption: optionToSend,
            note: note || null
        });
    }

    if (selectedItemImage) {
        flyToCart(selectedItemImage);
    }

    optionModal.style.display = "none";
};

/* ====================== 8. السلة ====================== */
function saveCart() {
    localStorage.setItem("deerty_cart", JSON.stringify(cart));
    renderCart();
}

function flashCartButton() {
    cartBtn.classList.add("flash-cart-btn");
    setTimeout(() => cartBtn.classList.remove("flash-cart-btn"), 400);
}

function addToCart(item) {
    const obj = { ...item };
    const incomingQty = Number(obj.qty) || 1;

    delete obj.branchDiscounts;
    delete obj.isBestSeller;
    delete obj.availableIn;

    const optionKey = obj.selectedOption ? obj.selectedOption.name : "";
    const multiOptionsKey = obj.selectedOptions
        ? obj.selectedOptions
              .map(o => o.name)
              .sort()
              .join("+")
        : "";

    const key =
        obj.id +
        "-" +
        optionKey +
        "-" +
        multiOptionsKey +
        "-" +
        (obj.note || "");

    const found = cart.find(i => i.key === key);

    if (found) {
        found.qty = (Number(found.qty) || 0) + incomingQty;
    } else {
        cart.push({ ...obj, qty: incomingQty, key });
    }

    saveCart();
    flashCartButton();
}

function renderCart() {
    cartItemsEl.innerHTML = "";
    let subtotal = 0;
    let count = 0;
    const branchDeliveryFee = currentBranch.deliveryFee || 0;

    cart.forEach((it, idx) => {
        let optionsTotal = 0;

        if (it.selectedOptions?.length > 0) {
            optionsTotal += it.selectedOptions.reduce(
                (sum, opt) => sum + (Number(opt.price) || 0),
                0
            );
        }
        if (it.selectedOption) {
            optionsTotal += Number(it.selectedOption.price) || 0;
        }

        const price = (it.basePrice || 0) + optionsTotal;
        const row = document.createElement("div");
        row.className = "cart-row";

        const noteHtml = it.note
            ? `<div class="item-note-display">📝 ملاحظة: ${it.note}</div>`
            : "";

        const optionName =
            it.selectedOption &&
            it.selectedOption.name !== "نفر" &&
            it.selectedOption.name !== "طبق" &&
            it.selectedOption.name !== "عبوة"
                ? " — " + it.selectedOption.name
                : "";

        row.innerHTML = `
            <div style="flex-grow:1; min-width:60%">
                <div style="font-weight:800">\( {it.name} \){optionName}</div>
                <div style="font-size:0.9rem;color:rgba(255,255,255,0.7)">${it.qty} × ${price} ريال</div>
                ${noteHtml}
            </div>
            <div class="controls">
                <button onclick="updateQty(${idx},-1)">-</button>
                <div style="min-width:26px;text-align:center">${it.qty}</div>
                <button onclick="updateQty(${idx},1)">+</button>
                <button onclick="removeItem(${idx})" style="margin-left:6px;background:var(--red);color:#fff;padding:6px;border-radius:6px;border:none;cursor:pointer">حذف</button>
            </div>
        `;

        cartItemsEl.appendChild(row);
        subtotal += price * it.qty;
        count += it.qty;
    });

    const deliveryType = document.querySelector(
        'input[name="deliveryType"]:checked'
    )?.value;
    const currentDeliveryFee =
        deliveryType === "delivery" ? branchDeliveryFee : 0;
    const finalTotal = subtotal + currentDeliveryFee;

    totalBreakdownEl.innerHTML = `
        <div class="total-line">
            <span>إجمالي المنتجات:</span>
            <span>${subtotal} ريال</span>
        </div>
        <div class="total-line">
            <span>رسوم التوصيل:</span>
            <span>${currentDeliveryFee} ريال</span>
        </div>
        <div class="total-line final-total-line">
            <span>الإجمالي النهائي:</span>
            <span id="cartTotalBottom">${finalTotal} ريال</span>
        </div>
    `;

    cartCount.innerText = count;
    cartCount.style.display = count === 0 ? "none" : "inline-block";
    localStorage.setItem("deerty_cart", JSON.stringify(cart));
    renderCartSuggestions();
}

function updateQty(idx, change) {
    if (!cart[idx]) return;
    cart[idx].qty += change;
    if (cart[idx].qty < 1) cart.splice(idx, 1);
    saveCart();
}

function removeItem(idx) {
    cart.splice(idx, 1);
    saveCart();
}

clearCart.onclick = () => {
    cart = [];
    saveCart();
};

/* ====================== 9. نوع الطلب + الموقع ====================== */
document.querySelectorAll('input[name="deliveryType"]').forEach(radio => {
    radio.addEventListener("change", function () {
        renderCart();

        if (this.value === "delivery") {
            setTimeout(getMyLocation, 100);
        }

        if (this.value === "pickup") {
            userLocation = null;
            if (locationStatus) locationStatus.innerText = "";
        }
    });
});

/* ====================== 10. إدارة زر الرجوع ====================== */
let cartHistoryOpen = false;
let optionHistoryOpen = false;
let ignoreNextPopstate = false;

const closeCart = (fromBackButton = false) => {
    if (!cartDrawer.classList.contains("open")) return;

    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("show");
    cartDrawer.setAttribute("aria-hidden", "true");
    cartBtn.style.display = "block";
    document.getElementById("bottomBar").style.display = "flex";

    if (fromBackButton) {
        cartHistoryOpen = false;
        return;
    }

    if (cartHistoryOpen) {
        cartHistoryOpen = false;
        history.back();
    }
};

cartBtn.addEventListener("click", () => {
    if (!cartHistoryOpen) {
        history.pushState(
            { ...(history.state || {}), deertyCartOpen: true },
            "",
            location.href
        );
        cartHistoryOpen = true;
    }

    cartDrawer.classList.add("open");
    cartOverlay.classList.add("show");
    cartDrawer.setAttribute("aria-hidden", "false");
    renderCart();
    cartBtn.style.display = "none";
    document.getElementById("bottomBar").style.display = "none";
});

cartOverlay.addEventListener("click", () => closeCart());
closeCartBtn.addEventListener("click", () => closeCart());

const optionObserver = new MutationObserver(() => {
    const isOpen = optionModal.style.display === "flex";

    if (isOpen && !optionHistoryOpen) {
        history.pushState(
            { ...(history.state || {}), deertyOptionsOpen: true },
            "",
            location.href
        );
        optionHistoryOpen = true;
    }

    if (!isOpen && optionHistoryOpen) {
        optionHistoryOpen = false;
        ignoreNextPopstate = true;
        history.back();
    }
});

optionObserver.observe(optionModal, {
    attributes: true,
    attributeFilter: ["style"]
});

window.addEventListener("popstate", () => {
    if (ignoreNextPopstate) {
        ignoreNextPopstate = false;
        return;
    }

    if (optionHistoryOpen && optionModal.style.display === "flex") {
        optionHistoryOpen = false;
        optionModal.style.display = "none";
        return;
    }

    if (cartHistoryOpen && cartDrawer.classList.contains("open")) {
        closeCart(true);
    }
});

/* ====================== 11. إرسال الطلب إلى واتساب ====================== */
sendWhatsapp.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("السلة فارغة");
        return;
    }

    const selectedDeliveryType = document.querySelector(
        'input[name="deliveryType"]:checked'
    );

    if (!selectedDeliveryType) {
        alert("⚠️ فضلاً اختر نوع الطلب أولاً: توصيل أو استلام من الفرع");
        return;
    }

    const manualAddress =
        document.getElementById("manualAddress")?.value.trim() || "";
    const branchDeliveryFee = currentBranch.deliveryFee || 0;
    const whatsappNumber = currentBranch.whatsapp;
    const deliveryType = selectedDeliveryType.value;

    let customerInfo = {};
    try {
        customerInfo = JSON.parse(
            localStorage.getItem("deerty_customer_info") || "{}"
        );
    } catch (e) {
        customerInfo = {};
    }

    const lines = [];
    lines.push("🍽️ طلب جديد — سحايب ديرتي");
    lines.push("");
    lines.push(`👤 اسم العميل: ${customerInfo.name || "غير مسجل"}`);
    lines.push(`📱 رقم الجوال: ${customerInfo.phone || "غير مسجل"}`);
    lines.push(`📍 الفرع: ${currentBranch.name}`);
    lines.push("");
    lines.push("━━━━━━━━━━━━");

    let subtotal = 0;

    cart.forEach((it, index) => {
        let optionsTotal = 0;

        if (it.selectedOptions?.length > 0) {
            optionsTotal += it.selectedOptions.reduce(
                (sum, opt) => sum + (Number(opt.price) || 0),
                0
            );
        }
        if (it.selectedOption) {
            optionsTotal += Number(it.selectedOption.price) || 0;
        }

        const price = (Number(it.basePrice) || 0) + optionsTotal;
        const itemTotal = price * it.qty;

        lines.push(`${index + 1}️⃣ ${it.name} × ${it.qty}`);

        if (it.selectedOptions?.length > 0) {
            const optionNames = it.selectedOptions
                .map(opt => opt.name)
                .filter(name => name && name.trim() !== "")
                .join(" + ");
            if (optionNames) lines.push(`🍚 ${optionNames}`);
        } else if (
            it.selectedOption?.name &&
            it.selectedOption.name.trim() !== ""
        ) {
            lines.push(`🍚 ${it.selectedOption.name}`);
        }

        if (it.note) lines.push(`📝 ${it.note}`);
        lines.push(`💰 ${itemTotal} ريال`);
        lines.push("");

        subtotal += itemTotal;
    });

    lines.push("━━━━━━━━━━━━");
    lines.push(`1. إجمالي المنتجات: ${subtotal} ريال`);

    if (deliveryType === "delivery") {
        lines.push(`2. نوع الطلب: توصيل (فرع ${currentBranch.name})`);
        lines.push(`3. رسوم التوصيل: ${branchDeliveryFee} ريال`);
        subtotal += branchDeliveryFee;

        if (userLocation) {
            lines.push("4. إحداثيات موقع التوصيل:");
            lines.push(`📍 خط العرض: ${userLocation.lat}`);
            lines.push(`📍 خط الطول: ${userLocation.lng}`);
            lines.push(
                `🗺️ https://www.google.com/maps?q=\( {userLocation.lat}, \){userLocation.lng}`
            );
        } else {
            lines.push("4. الموقع: لم يتم تحديد الموقع.");
        }

        if (manualAddress) {
            lines.push(`5. العنوان / ملاحظات التوصيل: ${manualAddress}`);
        }
    } else {
        lines.push(
            `2. نوع الطلب: استلام من الفرع (فرع ${currentBranch.name})`
        );
    }

    lines.push("---");
    lines.push(`الإجمالي النهائي: ${subtotal} ريال`);

    const whatsappUrl =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(lines.join("\n"));

    window.open(whatsappUrl, "_blank");

    cart = [];
    saveCart();
    closeCart();
});

/* ====================== 12. تحديد الموقع (GPS) ====================== */
let locationRequestRunning = false;
let locationRetryTimer = null;

function locationSuccess(position) {
    if (!position?.coords) {
        locationError({ code: 2, message: "بيانات الموقع غير صالحة" });
        return;
    }

    const latitude = Number(position.coords.latitude);
    const longitude = Number(position.coords.longitude);
    const accuracy = Number(position.coords.accuracy);

    if (
        !Number.isFinite(latitude) ||
        !Number.isFinite(longitude) ||
        !Number.isFinite(accuracy)
    ) {
        locationError({ code: 2, message: "الإحداثيات غير صالحة" });
        return;
    }

    userLocation = { lat: latitude, lng: longitude, accuracy };
    locationRequestRunning = false;

    if (locationRetryTimer) {
        clearTimeout(locationRetryTimer);
        locationRetryTimer = null;
    }

    const mapLink = `https://www.google.com/maps?q=\( {latitude}, \){longitude}`;

    if (locationStatus) {
        locationStatus.innerHTML = `
            <div style="line-height:1.8">
                ✅ تم تحديد موقعك بنجاح<br>
                📍 دقة الموقع: ${Math.round(accuracy)} متر<br>
                <a href="${mapLink}" target="_blank" rel="noopener"
                   style="color:var(--gold);text-decoration:underline;font-weight:700">
                    🗺️ فتح الموقع على الخريطة
                </a>
            </div>
        `;
        locationStatus.style.color = "#4CAF50";
    }

    if (getLocationBtn) {
        getLocationBtn.disabled = false;
        getLocationBtn.innerText = "📍 تحديث الموقع";
    }
}

function locationError(error) {
    locationRequestRunning = false;

    if (locationRetryTimer) {
        clearTimeout(locationRetryTimer);
        locationRetryTimer = null;
    }

    let message = "❌ تعذر تحديد الموقع";

    if (error) {
        switch (error.code) {
            case 1:
                message =
                    "🚫 تم رفض صلاحية الموقع. افتح إعدادات الموقع واسمح باستخدام GPS.";
                break;
            case 2:
                message = "❌ تعذر الحصول على إحداثيات GPS من الجهاز.";
                break;
            case 3:
                message =
                    "⏱️ تأخر GPS في تحديد الموقع. تأكد من تشغيل الموقع ثم حاول مرة أخرى.";
                break;
        }
    }

    userLocation = null;

    if (locationStatus) {
        locationStatus.innerText = message;
        locationStatus.style.color = "var(--red)";
    }

    if (getLocationBtn) {
        getLocationBtn.disabled = false;
        getLocationBtn.innerText = "📍 حاول تحديد الموقع مرة أخرى";
    }
}

function getMyLocation() {
    if (locationRequestRunning) return;

    if (!navigator.geolocation) {
        if (locationStatus) {
            locationStatus.innerText =
                "❌ جهازك أو المتصفح لا يدعم تحديد الموقع.";
            locationStatus.style.color = "var(--red)";
        }
        return;
    }

    if (
        location.protocol !== "https:" &&
        location.hostname !== "localhost" &&
        location.hostname !== "127.0.0.1"
    ) {
        if (locationStatus) {
            locationStatus.innerHTML = `
                ❌ تحديد الموقع يحتاج اتصال HTTPS.<br>
                افتح الموقع من رابط HTTPS.
            `;
            locationStatus.style.color = "var(--red)";
        }
        return;
    }

    locationRequestRunning = true;
    userLocation = null;

    if (locationStatus) {
        locationStatus.innerHTML =
            "📡 جاري تحديد موقعك الحقيقي من GPS...";
        locationStatus.style.color = "#c39e6a";
    }

    if (getLocationBtn) {
        getLocationBtn.disabled = true;
        getLocationBtn.innerText = "📡 جاري تحديد الموقع...";
    }

    navigator.geolocation.getCurrentPosition(
        position => {
            const accuracy = Number(position.coords.accuracy);

            if (accuracy <= 100) {
                locationSuccess(position);
                return;
            }

            if (locationStatus) {
                locationStatus.innerHTML = `
                    📡 تم العثور على GPS...<br>
                    دقة القراءة الحالية: ${Math.round(accuracy)} متر<br>
                    🔄 جاري محاولة تحسين الدقة...
                `;
                locationStatus.style.color = "#c39e6a";
            }

            locationRetryTimer = setTimeout(() => {
                navigator.geolocation.getCurrentPosition(
                    locationSuccess,
                    locationError,
                    {
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 0
                    }
                );
            }, 1000);
        },
        error => {
            if (error.code === 2 || error.code === 3) {
                if (locationStatus) {
                    locationStatus.innerHTML =
                        "📡 لم تصل قراءة GPS الأولى...<br>🔄 محاولة ثانية...";
                    locationStatus.style.color = "#c39e6a";
                }

                locationRetryTimer = setTimeout(() => {
                    navigator.geolocation.getCurrentPosition(
                        locationSuccess,
                        locationError,
                        {
                            enableHighAccuracy: true,
                            timeout: 30000,
                            maximumAge: 0
                        }
                    );
                }, 1000);
            } else {
                locationError(error);
            }
        },
        {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 0
        }
    );
}

if (getLocationBtn) {
    getLocationBtn.addEventListener("click", getMyLocation);
}

/* ====================== 13. تأثير الطيران إلى السلة ====================== */
function flyToCart(imgElement) {
    const flyingImg = imgElement.cloneNode(true);
    flyingImg.className = "flying-img";
    document.body.appendChild(flyingImg);

    const rect = imgElement.getBoundingClientRect();
    flyingImg.style.top = rect.top + "px";
    flyingImg.style.left = rect.left + "px";

    const cartRect = document.getElementById("cartBtn").getBoundingClientRect();

    setTimeout(() => {
        flyingImg.style.transform = `translate(${
            cartRect.left - rect.left
        }px, ${cartRect.top - rect.top}px) scale(0.2)`;
        flyingImg.style.opacity = "0";
    }, 10);

    setTimeout(() => flyingImg.remove(), 800);
}

/* ====================== 14. الاقتراحات الذكية في السلة ====================== */
function renderCartSuggestions() {
    const suggestionsContainer = document.getElementById("cartSuggestions");
    if (!suggestionsContainer) return;

    suggestionsContainer.innerHTML = "";
    suggestionsContainer.style.display = "none";

    if (cart.length === 0) return;

    const suggestedCategories = new Set();

    cart.forEach(cartItem => {
        Object.keys(dynamicSuggestionRules).forEach(ruleKey => {
            if (cartItem.name.includes(ruleKey)) {
                dynamicSuggestionRules[ruleKey].forEach(cat =>
                    suggestedCategories.add(cat)
                );
            }
        });
    });

    if (suggestedCategories.size === 0) return;

    const allCandidates = [];

    processedMenuData.forEach(section => {
        if (!suggestedCategories.has(section.section)) return;
        if (
            section.sectionAvailableIn &&
            !section.sectionAvailableIn.includes(currentBranchId)
        )
            return;

        section.items.forEach(item => {
            const alreadyInCart = cart.some(c => c.id === item.id);
            const available =
                Array.isArray(item.availableIn) &&
                item.availableIn.includes(currentBranchId);

            if (!alreadyInCart && available) {
                allCandidates.push(item);
            }
        });
    });

    if (allCandidates.length === 0) return;

    allCandidates.sort(() => Math.random() - 0.5);
    const suggestionsToShow = allCandidates.slice(0, 5);

    suggestionsContainer.style.display = "block";
    suggestionsContainer.innerHTML =
        '<div style="font-size:0.9rem;margin-bottom:5px;color:#ccc;">أكمل وجبتك بـ... 👇</div>';

    suggestionsToShow.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-suggestion-item";

        const branchDiscount = item.branchDiscounts
            ? item.branchDiscounts[currentBranchId]
            : null;
        const hasDiscount =
            branchDiscount !== null &&
            branchDiscount !== undefined &&
            branchDiscount < item.basePrice;

        const basePrice = hasDiscount
            ? branchDiscount
            : Number(item.basePrice) || 0;
        const options = Array.isArray(item.options) ? item.options : [];
        const optionPrices = options.map(opt => Number(opt.price) || 0);
        const minOptionPrice = optionPrices.length
            ? Math.min(...optionPrices)
            : 0;
        const startingPrice = basePrice + minOptionPrice;

        const priceText =
            startingPrice > 0
                ? options.length > 1 && basePrice === 0
                    ? `ابتداءً من ${startingPrice} ريال`
                    : `${startingPrice} ريال`
                : "السعر عند الاختيار";

        itemDiv.innerHTML = `
            <img src="${item.img}" onerror="this.src='logo-bg.png'">
            <h4>${item.name}</h4>
            <span class="price">${priceText}</span>
            <button type="button">أضف +</button>
        `;

        itemDiv.querySelector("button").onclick = () => {
            const itemForCart = { ...item };
            if (hasDiscount) itemForCart.basePrice = branchDiscount;

            const img = itemDiv.querySelector("img");
            const needsOptions =
                options.length > 1 ||
                (options.length === 1 && options[0].name !== "");

            showOptions(itemForCart, !needsOptions, img);
        };

        suggestionsContainer.appendChild(itemDiv);
    });
}

/* ====================== 15. PWA + البحث + Sticky ====================== */
let deferredPrompt;

window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    if (installAppBtn) installAppBtn.style.display = "block";
});

if (installAppBtn) {
    installAppBtn.addEventListener("click", async () => {
        if (deferredPrompt) {
            installAppBtn.style.display = "none";
            deferredPrompt.prompt();
            await deferredPrompt.userChoice;
            deferredPrompt = null;
        }
    });
}

searchBar.addEventListener("input", e => {
    renderMenu(currentSection, e.target.value);
});

const stickyHeaderHeight = 80;
window.addEventListener("scroll", () => {
    const sectionsTop = sectionsEl.getBoundingClientRect().top;
    if (sectionsTop <= stickyHeaderHeight) {
        sectionsEl.classList.add("sections-sticky");
    } else {
        sectionsEl.classList.remove("sections-sticky");
    }
});

/* ====================== 16. Service Worker ====================== */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then(reg => console.log("Service Worker Registered!", reg.scope))
            .catch(err =>
                console.error("Service Worker Registration failed:", err)
            );
    });
}

/* ====================== 17. iOS Install Help ====================== */
document.addEventListener("DOMContentLoaded", () => {
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true;

    if (isIOS && !isStandalone) {
        const iosBtn = document.getElementById("iosHelpBtn");
        if (iosBtn) {
            iosBtn.style.display = "inline-flex";
            iosBtn.addEventListener("click", () => {
                const banner = document.getElementById("iosInstallBanner");
                if (banner) banner.style.display = "block";
            });
        }
    }
});

function closeIosBanner() {
    const banner = document.getElementById("iosInstallBanner");
    if (banner) banner.style.display = "none";
}

/* ====================== 18. تغيير الفرع ====================== */
document.addEventListener("DOMContentLoaded", () => {
    const changeBranchBtn = document.getElementById("changeBranchBtn");
    const branchDropdown = document.getElementById("branchDropdown");
    const currentBranchNameEl = document.getElementById("currentBranchName");
    const branchOptions = document.querySelectorAll(".branch-option");

    if (currentBranchNameEl) {
        currentBranchNameEl.textContent = currentBranch.name;
    }

    if (changeBranchBtn && branchDropdown) {
        changeBranchBtn.addEventListener("click", e => {
            e.stopPropagation();
            branchDropdown.classList.toggle("show");
        });
    }

    branchOptions.forEach(option => {
        option.addEventListener("click", () => {
            const selectedBranchId = option.dataset.branch;

            if (!BRANCH_CONFIG[selectedBranchId]) return;
            if (selectedBranchId === currentBranchId) {
                branchDropdown?.classList.remove("show");
                return;
            }

            const newUrl = new URL(window.location.href);
            newUrl.searchParams.set("branch", selectedBranchId);
            window.location.href = newUrl.toString();
        });
    });

    document.addEventListener("click", e => {
        if (
            branchDropdown &&
            !branchDropdown.contains(e.target) &&
            e.target !== changeBranchBtn
        ) {
            branchDropdown.classList.remove("show");
        }
    });
});

/* ====================== 19. تثبيت التطبيق + التواصل ====================== */
const PLAY_STORE_URL =
    "https://play.google.com/store/apps/details?id=com.deerty.app";

function isAppleDevice() {
    return (
        /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
    );
}

function openIosInstallGuide() {
    const banner = document.getElementById("iosInstallBanner");
    if (banner) {
        banner.style.display = "flex";
    } else {
        alert(
            "لتثبيت ديرتي: افتح الموقع في Safari، اضغط مشاركة، ثم إضافة إلى الشاشة الرئيسية."
        );
    }
}

document.getElementById("bottomInstallBtn")?.addEventListener("click", () => {
    if (isAppleDevice()) {
        openIosInstallGuide();
        return;
    }
    window.location.href = PLAY_STORE_URL;
});

document.getElementById("iosHelpBtn")?.addEventListener("click", () => {
    openIosInstallGuide();
});

document.getElementById("bottomContactBtn")?.addEventListener("click", () => {
    const branchId = new URLSearchParams(window.location.search).get("branch");
    const branch = BRANCH_CONFIG[branchId] || currentBranch;

    if (!branch?.whatsapp) {
        alert("تعذر تحديد رقم واتساب الفرع.");
        return;
    }

    window.open(`https://wa.me/${branch.whatsapp}`, "_blank");
});

/* ====================== 20. زر المشاركة ====================== */
(function initDeertyShareButton() {
    const bottomBar = document.getElementById("bottomBar");
    if (!bottomBar || document.getElementById("bottomShareBtn")) return;

    const shareBtn = document.createElement("button");
    shareBtn.id = "bottomShareBtn";
    shareBtn.type = "button";
    shareBtn.innerHTML = `
        <span style="display:flex;align-items:center;justify-content:center">
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <path d="M8.7 10.7l6.6-4.4M8.7 13.3l6.6 4.4"/>
            </svg>
        </span>
        <span>مشاركة</span>
    `;
    shareBtn.style.cssText = `
        flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;
        justify-content:center;gap:7px;background:transparent;border:0;color:#E8C065;
        font-family:inherit;font-size:15px;font-weight:800;white-space:nowrap;
        cursor:pointer;padding:6px 2px;
    `;

    const installBtn = document.getElementById("bottomInstallBtn");
    if (installBtn && installBtn.parentElement === bottomBar) {
        bottomBar.insertBefore(shareBtn, installBtn);
    } else {
        bottomBar.appendChild(shareBtn);
    }

    async function copyShareLink(text) {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                const textarea = document.createElement("textarea");
                textarea.value = text;
                textarea.style.position = "fixed";
                textarea.style.opacity = "0";
                document.body.appendChild(textarea);
                textarea.select();
                const copied = document.execCommand("copy");
                textarea.remove();
                if (!copied) throw new Error("Copy failed");
            }
            alert("✅ تم نسخ رابط سحايب ديرتي، شاركه مع أصدقائك");
        } catch (error) {
            alert("تعذر نسخ الرابط، يمكنك نسخه من شريط العنوان.");
        }
    }

    shareBtn.addEventListener("click", async () => {
        const shareUrl = window.location.href;
        const shareData = {
            title: "مطاعم ومطابخ سحايب ديرتي",
            text: `🍽️ جربوا سحايب ديرتي!\nأشهى الوجبات وأفضل العروض.\n📍 الفرع: ${currentBranch.name}\n`,
            url: shareUrl
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                if (error.name === "AbortError") return;
                await copyShareLink(shareUrl);
            }
        } else {
            await copyShareLink(shareUrl);
        }
    });
})();

/* ====================== 21. شاشة بيانات العميل ====================== */
(function () {
    const startScreen = document.getElementById("customerStartScreen");
    const nameInput = document.getElementById("customerName");
    const phoneInput = document.getElementById("customerPhone");
    const addressInput = document.getElementById("customerAddress");
    const addressField = document.getElementById("startAddressField");
    const continueBtn = document.getElementById("continueToMenu");
    const startDelivery = document.getElementById("startDelivery");
    const startPickup = document.getElementById("startPickup");
    const manualAddress = document.getElementById("manualAddress");

    if (!startScreen || !continueBtn) return;

    const STORAGE_KEY = "deerty_customer_info";
    let customer = {};

    try {
        customer = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
        customer = {};
    }

    if (nameInput) nameInput.value = customer.name || "";
    if (phoneInput) phoneInput.value = customer.phone || "";
    if (addressInput) addressInput.value = customer.address || "";

    function updateStartAddress() {
        const isDelivery = startDelivery?.checked === true;
        if (addressField) {
            addressField.style.display = isDelivery ? "block" : "none";
        }
        if (addressInput) {
            addressInput.required = isDelivery;
        }
    }

    startDelivery?.addEventListener("change", updateStartAddress);
    startPickup?.addEventListener("change", updateStartAddress);

    if (customer.deliveryType === "delivery") {
        startDelivery.checked = true;
    } else if (customer.deliveryType === "pickup") {
        startPickup.checked = true;
    }

    updateStartAddress();

    continueBtn.addEventListener("click", function () {
        const name = nameInput?.value.trim() || "";
        const phone = phoneInput?.value.trim() || "";
        const address = addressInput?.value.trim() || "";
        const deliveryType = document.querySelector(
            'input[name="startDeliveryType"]:checked'
        )?.value;

        if (!deliveryType) {
            alert("فضلاً اختر التوصيل أو الاستلام من الفرع");
            return;
        }

        if (phone && phone.replace(/\D/g, "").length < 9) {
            alert("رقم الجوال غير صحيح، يرجى التأكد منه");
            phoneInput.focus();
            return;
        }

        customer = { name, phone, address, deliveryType };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(customer));

        if (manualAddress) manualAddress.value = address;

        const cartRadio = document.querySelector(
            `input[name="deliveryType"][value="${deliveryType}"]`
        );
        if (cartRadio) {
            cartRadio.checked = true;
            cartRadio.dispatchEvent(new Event("change", { bubbles: true }));
        }

        startScreen.style.display = "none";
    });
})();

/* ====================== 22. تشغيل أولي ====================== */
renderSections();
renderCart();
