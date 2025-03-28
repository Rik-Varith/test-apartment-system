const mockData = {
  properties: [
{
    id: 1,
    name: "The Residence Sukhumvit",
    address: "123/45 Sukhumvit 64, Phra Khanong, Bangkok 10260",
    totalRooms: 7,
    utilityRates: {
        electricity: 7,
        water: 20
        },
    garbageFee: 30,
        
    rooms:[
        { id: "A101", // Long-term reliable tenant (since 2021) with perfect payment record and minimal maintenance issues.
            roomType: "1 bed 1 bath",
            hasAC: true,
            size: "30sqm",
            totalTenats: 2,
            rentalFee: 8500,
            parkingFee: 0,
            currentStatus: "paid",
                
            tenant: {
                name: "Somchai",
                surname: "Jaidee",
                nickname: "Chai",
                phone: "081-234-5678",
                lineId: "somchai.j",
                email: "somchai@email.com",
                moveInDate: "2022-09-01",
                depositAmount: 17000,
                contractEnd: "2024-08-31",
            },

            emergencyContact: {
                name: "Somsri",
                surname: "Jaidee",
                nickname: "Sri",
                phone: "081-234-5679",
                lineId: "somsri.j",
                email: "somsri@email.com",
                relationship: "Wife"
            },
                    
            previousTenant: {}, // No previous tenant
            paymentHistory: [
                { month: "February 2024",
                status: "paid",
                paymentMethod: "Bank Transfer",
                
                rentalFee: 8500,
                electricity: {
                    previousReading: 23455,
                        currentReading: 23678,
                        unitsUsed: 223,
                            total: 1561
                        },
                    water: {
                        previousReading: 1234,
                        currentReading: 1245,
                        unitsUsed: 11,
                            total: 220
                        },
                    otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0,
                        },

                totalAmount: 10281,
                    dueDate: "2024-03-10", 
                    paidDate: "2024-02-05",
                paymentNote: "Early payment",
                },
                { month: "January 2024",
                    status: "paid",
                    paymentMethod: "Bank Transfer",
                    rentalFee: 8500,
                    electricity: {
                        previousReading: 23200,
                        currentReading: 23455,
                        unitsUsed: 255,
                        total: 1785
                        },
                    water: {
                        previousReading: 1220,
                        currentReading: 1234,
                        unitsUsed: 14,
                        total: 280
                        },
                    otherFees: {
                        parking: 0,
                        maintenance: 0,
                        garbage: 30,
                        lateFee: 0,
                    },

                    totalAmount: 10565,
                        dueDate: "2024-02-10",
                        paidDate: "2024-01-03",
                    paymentNote: "",

                },
                { month: "December 2023",
                    status: "paid",
                    paymentMethod: "Cash",
                    rentalFee: 8500,
                    electricity: {
                        previousReading: 22978,
                        currentReading: 23200,
                        unitsUsed: 222,
                        total: 1554
                    },
                    water: {
                        previousReading: 1208,
                        currentReading: 1220,
                        unitsUsed: 12,
                        total: 240
                    },
                    otherFees: {
                        parking: 0,
                        maintenance: 0,
                        garbage: 30,
                        lateFee: 0,
                    },
                    totalAmount: 10294,
                    dueDate: "2024-01-10",
                    paidDate: "2023-12-05",
                    paymentNote: ""
                },
                { month: "November 2023",
                    status: "paid",
                    paymentMethod: "Bank Transfer",
                    rentalFee: 8500,
                    electricity: {
                        previousReading: 22756,
                        currentReading: 22978,
                        unitsUsed: 222,
                        total: 1554
                    },
                    water: {
                        previousReading: 1196,
                        currentReading: 1208,
                        unitsUsed: 12,
                        total: 240
                    },
                    otherFees: {
                        parking: 0,
                        maintenance: 0,
                        garbage: 30,
                        lateFee: 0,
                    },
                    totalAmount: 10294,
                    dueDate: "2023-12-10",
                    paidDate: "2023-11-04",
                    paymentNote: ""
                },
            ],
            additionalFeatures: {
                    furniture: [
                        "1 queen size bed",
                        "1 dining table",
                        "1 refrigerator",
                        "1 AC units"
                    ],
                    OtherDetails: " ",
            },
            notes: [
                {
                    detail: "Window Crack",
                    date: "2025-01-10",
                    images: ["image1.jpg", "image2.jpg"]
                },
            ]
        
        },
        { id: "A102", // tenant since June 2023 showing pattern of late payments but always pays in full.
            roomType: "studio",
            hasAC: true,
            size: "25sqm",
            totalTenats: 1,
            rentalFee: 7500,
            parkingFee: 500,
            currentStatus: "unpaid",
                
            tenant: {
                name: "Wichai",
                surname: "Suksai",
                nickname: "Wit",
                phone: "089-876-5432",
                lineId: "wichai.s",
                email: "wichai@email.com",
                moveInDate: "2023-06-01",    // Relatively new tenant
                depositAmount: 15000,        // 2 months rent
                contractEnd: "2024-05-31",   // First contract period
            },
            emergencyContact: {
                name: "Pranee",
                surname: "Suksai",
                nickname: "Pran",
                phone: "089-876-5433",
                lineId: "pranee.s",
                email: "pranee@email.com",
                relationship: "Mother"
            },
            previousTenant: {}, // No previous tenant
            paymentHistory: [
                { month: "February 2024",
                    status: "unpaid",
                    paymentMethod: "",
                    rentalFee: 7500,
                    electricity: {
                        previousReading: 12455,
                        currentReading: 12690,
                        unitsUsed: 235,
                        total: 1645
                    },
                    water: {
                        previousReading: 2234,
                        currentReading: 2248,
                        unitsUsed: 14,
                            total: 280
                    },
                    otherFees: {
                        parking: 0,
                        maintenance: 0,
                        garbage: 30,
                        lateFee: 0
                    },
                totalAmount: 9425,
                    dueDate: "2024-03-10",
                    paidDate: "",
                paymentNote: ""
                },
                    
                {  month: "January 2024",
                    status: "paid",
                    paymentMethod: "Promptpay",
                    rentalFee: 7500,
                    electricity: {
                        previousReading: 12200,
                        currentReading: 12455,
                        unitsUsed: 255,
                        total: 1785
                    },
                    water: {
                        previousReading: 2220,
                        currentReading: 2234,
                        unitsUsed: 14,
                        total: 280
                    },
                    otherFees: {
                        parking: 0,
                        maintenance: 0,
                        garbage: 30,
                        lateFee: 0
                    },
                totalAmount: 9565,
                    dueDate: "2024-02-10",
                    paidDate: "2024-01-15",
                paymentNote: ""
                },
                    
                { month: "December 2023",
                    status: "paid",
                    paymentMethod: "Cash",
                    rentalFee: 7500,
                    electricity: {
                        previousReading: 11978,
                        currentReading: 12200,
                        unitsUsed: 222,
                        total: 1554
                    },
                    water: {
                        previousReading: 2208,
                        currentReading: 2220,
                        unitsUsed: 12,
                        total: 240
                    },
                    otherFees: {
                        parking: 0,
                        maintenance: 0,
                        garbage: 30,
                        lateFee: 0
                    },
                totalAmount: 9294,
                    dueDate: "2024-01-10",
                    paidDate: "2023-12-20",
                paymentNote: ""
                },
                    
                { month: "November 2023",
                    status: "paid",
                    paymentMethod: "Bank Transfer",
                    rentalFee: 7500,
                    electricity: {
                        previousReading: 11756,
                        currentReading: 11978,
                        unitsUsed: 222,
                        total: 1554
                    },
                    water: {
                        previousReading: 2196,
                        currentReading: 2208,
                        unitsUsed: 12,
                        total: 240
                    },
                    otherFees: {
                        parking: 0,
                        maintenance: 0,
                        garbage: 30,
                        lateFee: 0
                        },
                totalAmount: 9294,
                    dueDate: "2023-12-10",
                    paidDate: "2023-11-04",
                paymentNote: ""
                    },
                ],
                additionalFeatures: {
                        furniture: [
                            "1 small beds",
                            "1 wardrobe",
                            "1 dining table",
                            "1 refrigerator",
                            "1 AC units"
                        ],
                        OtherDetails: " 1 car space included",
                },
                notes: [
                        {
                            detail: "Door handle needs fixing",
                            date: "2024-010-10",
                            images: ["damage1.jpg", "damage2.jpg"]
                        },
                ],
        },
        { id: "A103", //Tenant approaching 1-year mark with recent serious payment issues and overdue status.
            roomType: "2 bed 1 bath",
            hasAC: true,
            size: "45sqm",
            totalTenats: 4,
            rentalFee: 12000,
            parkingFee: 1000,
            currentStatus: "overdue",
              
            tenant: {
                name: "Rattanaporn",
                surname: "Meesuk",
                nickname: "Ploy",
                phone: "065-789-4561",
                lineId: "ploy.ratta",
                email: "ploy.ratta@email.com",
                moveInDate: "2023-03-15",
                depositAmount: 24000,
                contractEnd: "2024-03-14",
                },

                emergencyContact: {
                    name: "Sompong",
                    surname: "Meesuk",
                    nickname: "Pong",
                    phone: "081-456-7890",
                    lineId: "sompong.m",
                    email: "sompong.m@email.com",
                    relationship: "Father"
                },
                    
                previousTenant: {},
                paymentHistory: [
                    {
                        month: "February 2024",
                        status: "unpaid",
                        paymentMethod: "",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 12455,
                            currentReading: 12690,
                            unitsUsed: 235,
                            total: 1645
                        },
                        water: {
                            previousReading: 2234,
                            currentReading: 2248,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 9455,  // 7500 + 1645 + 280 + 30
                        dueDate: "2024-03-10",
                        paidDate: "",
                        paymentNote: ""
                    },
                    {
                        month: "January 2024",
                        status: "paid",
                        paymentMethod: "Promptpay",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 12200,
                            currentReading: 12455,
                            unitsUsed: 255,
                            total: 1785
                        },
                        water: {
                            previousReading: 2220,
                            currentReading: 2234,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 9595,  // 7500 + 1785 + 280 + 30
                        dueDate: "2024-02-10",
                        paidDate: "2024-01-15",
                        paymentNote: ""
                    },
                    {
                        month: "December 2023",
                        status: "paid",
                        paymentMethod: "Cash",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 11978,
                            currentReading: 12200,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 2208,
                            currentReading: 2220,
                            unitsUsed: 12,
                            total: 240
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 9324,  // 7500 + 1554 + 240 + 30
                        dueDate: "2024-01-10",
                        paidDate: "2023-12-20",
                        paymentNote: ""
                    },
                    {
                        month: "November 2023",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 11756,
                            currentReading: 11978,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 2196,
                            currentReading: 2208,
                            unitsUsed: 12,
                            total: 240
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 9324,  // 7500 + 1554 + 240 + 30
                        dueDate: "2023-12-10",
                        paidDate: "2023-11-04",
                        paymentNote: ""
                    }
                ],
                additionalFeatures: {
                    furniture: [
                        "2 beds",
                        "1 wardrobe per room",
                        "1 dining table",
                        "1 refrigerator",
                        "2 AC units"
                    ],
                    OtherDetails: "1 car space included",
                    },
                    notes:[
                        {
                        detail: "Door handle needs fixing",
                        date: "2024-02-12",
                        images: [],
                        },
                        {
                        detail: "AC maintenance completed",
                        date: "2024-12-25",
                        images: [],
                        },
                    ],
        },
        { id: "A104", //Budget-conscious tenant in fan room with consistent early payments and minimal utility usage. // only Fan
            roomType: "studio",
            hasAC: false, 
            size: "22sqm",
            totalTenats: 1,
            rentalFee: 5500,
            parkingFee: 50,
            currentStatus: "paid",
                    
            tenant: {
                name: "Mongkol",
                surname: "Jansuk",
                nickname: "Kong",
                phone: "092-345-6789",
                lineId: "kong.m",
                email: null, // Some tenants might not have email
                moveInDate: "2022-11-01",    // Long-term tenant in budget room
                depositAmount: 11000,        // 2 months rent (lowest rent room)
                contractEnd: "2024-10-31",   
            },
                    
                emergencyContact: {
                    name: "Waraporn",
                    surname: "Jansuk",
                    nickname: "Porn",
                    phone: "092-345-6780",
                    lineId: null,
                    email: null,
                    relationship: "Mother"
                },
                    
                previousTenant: {},
                paymentHistory: [
                    {
                        month: "February 2024",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 5500,
                        electricity: {
                            previousReading: 2890,
                            currentReading: 3012,
                            unitsUsed: 122,
                            total: 854
                        },
                        water: {
                            previousReading: 445,
                            currentReading: 456,
                            unitsUsed: 11,
                            total: 220
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 6604,  // 5500 + 854 + 220 + 30
                        dueDate: "2024-03-10",
                        paidDate: "2024-02-03",
                        paymentNote: ""
                    },
                    {
                        month: "January 2024",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 5500,
                        electricity: {
                            previousReading: 2765,
                            currentReading: 2890,
                            unitsUsed: 125,
                            total: 875
                        },
                        water: {
                            previousReading: 432,
                            currentReading: 445,
                            unitsUsed: 13,
                            total: 260
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 6665,  // 5500 + 875 + 260 + 30
                        dueDate: "2024-02-10",
                        paidDate: "2024-01-04",
                        paymentNote: ""
                    },
                    {
                        month: "December 2023",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 5500,
                        electricity: {
                            previousReading: 2645,
                            currentReading: 2765,
                            unitsUsed: 120,
                            total: 840
                        },
                        water: {
                            previousReading: 421,
                            currentReading: 432,
                            unitsUsed: 11,
                            total: 220
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 6590,  // 5500 + 840 + 220 + 30
                        dueDate: "2024-01-10",
                        paidDate: "2023-12-04",
                        paymentNote: ""
                    },
                    {
                        month: "November 2023",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 5500,
                        electricity: {
                            previousReading: 2534,
                            currentReading: 2645,
                            unitsUsed: 111,
                            total: 777
                        },
                        water: {
                            previousReading: 410,
                            currentReading: 421,
                            unitsUsed: 11,
                            total: 220
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 6527,  // 5500 + 777 + 220 + 30
                        dueDate: "2023-12-10",
                        paidDate: "2023-11-03",
                        paymentNote: ""
                    }
                ],
                additionalFeatures: {
                    furniture: [
                        "1 bed",
                        "1 wardrobe",
                        "1 ceiling fan",
                        "1 table",
                        "2 chairs"
                    ],
                    Other: "1 motorcycle parking space",
                },
                notes: [
                    {
                        detail: "Budget-conscious tenant in fan room with consistent early payments and minimal utility usage",
                        date: "",
                        images: [],
                    }
                ],
        },
        { id: "A105", //Mid-term tenant split payments and frequent payment extension requests.
            roomType: "1 bed 1 bath",
            hasAC: true,
            size: "32sqm",
            totalTenats: 1,
            rentalFee: 9000,
            parkingFee: 500,
            currentStatus: "unpaid",
                
                tenant: {
                    name: "Siriporn",
                    surname: "Wongsakul",
                    nickname: "Fon",
                    phone: "086-123-4567",
                    lineId: "fon.siri",
                    email: "fon.siri@email.com",
                    moveInDate: "2023-08-15",    // Relatively new tenant
                    depositAmount: 18000,        // 2 months rent
                    contractEnd: "2024-08-14",   // First contract period
                },
                    
                emergencyContact: {
                    name: "Thanapong",
                    surname: "Wongsakul",
                    nickname: "Pong",
                    phone: "086-123-4568",
                    lineId: "pong.thana",
                    email: "pong.thana@email.com",
                    relationship: "Husband"
                },
                    
                previousTenant: {},
                paymentHistory: [
                    { month: "February 2024",
                        status: "unpaid",
                        paymentMethod: "",
                        rentalFee: 9000,
                        electricity: {
                            previousReading: 15678,
                            currentReading: 15890,
                            unitsUsed: 212,
                            total: 1484
                        },
                        water: {
                            previousReading: 890,
                            currentReading: 904,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 10794,  // 9000 + 1484 + 280 + 30
                        dueDate: "2024-03-10",
                        paidDate: "",
                        paymentNote: "Tenant requested payment extension until 15th"
                    },
                    { month: "January 2024",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 5000, //not full
                        electricity: {
                            previousReading: 15445,
                            currentReading: 15678,
                            unitsUsed: 233,
                            total: 1631
                        },
                        water: {
                            previousReading: 875,
                            currentReading: 890,
                            unitsUsed: 15,
                            total: 300
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 5961,  // 5000 + 1631 + 300 + 30
                        dueDate: "2024-02-10",
                        paidDate: "2024-01-12",
                        paymentNote: "Split payment - 5000 on 05/01, remainder on 12/01"
                    },
                    { month: "December 2023",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 9000,
                        electricity: {
                            previousReading: 15210,
                            currentReading: 15445,
                            unitsUsed: 235,
                            total: 1645
                        },
                        water: {
                            previousReading: 858,
                            currentReading: 875,
                            unitsUsed: 17,
                            total: 340
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 11015,  // 9000 + 1645 + 340 + 30
                        dueDate: "2024-01-10",
                        paidDate: "2023-12-05",
                        paymentNote: ""
                    },
                    { month: "November 2023",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 9000,
                        electricity: {
                            previousReading: 14988,
                            currentReading: 15210,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 842,
                            currentReading: 858,
                            unitsUsed: 16,
                            total: 320
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 10904,  // 9000 + 1554 + 320 + 30
                        dueDate: "2023-12-10",
                        paidDate: "2023-11-05",
                        paymentNote: ""
                    }
                ],
                additionalFeatures: {
                    furniture: [
                        "1 queen size bed",
                        "1 large wardrobe",
                        "1 dining table set",
                        "1 refrigerator",
                        "1 AC unit",
                        "1 water heater",
                        "1 microwave"
                    ],
                    OtherDetails: "1 car space included",
                },
                notes: [
                    {
                        detail: "Water heater making strange noise, needs inspection",
                        date: "2025-01-20",
                        images: ["heater1.jpg", "heater2.jpg"]
                    },
                    {
                        detail: "AC annual maintenance, resolved, cost 850",
                        date: "2024-12-15",
                        images: ["ac_maintenance.jpg"]
                    }
                    ],
        },
        { id: "A106", //New tenant (since January 2024) Previous tenant moved out.
                roomType: "1 bed 1 bath",
                hasAC: true,
                size: "30sqm",
                rentalFee: 8500,
                parkingFee: 50,
                currentStatus: "paid",
                
                Tenant: {
                    name: "Nattapong",
                    surname: "Srisuwan",
                    nickname: "Best",
                    phone: "095-789-1234",
                    lineId: "best.natt",
                    email: "best.natt@email.com",
                    moveInDate: "2024-01-15",
                    depositAmount: 17000, // 2 months rent
                    contractEnd: "2025-01-14",
                },

                emergencyContact: {
                    name: "Supattra",
                    surname: "Srisuwan",
                    nickname: "Su",
                    phone: "095-789-1235",
                    lineId: null,
                    email: null,
                    relationship: "Sister"
                },
                    
                previousTenant: {
                        name: "Chaiyuth",
                        surname: "Meesuk",
                        nickname: "Yuth",
                        moveInDate: "2022-05-01",
                        moveOutDate: "2024-01-10",
                        finalUtilityReadings: {
                            electricity: 34567,
                            water: 2345
                        },
                        depositAmount: 16000,
                        depositRefund: {
                            amount: 15000,
                            refundDate: "2024-01-12",
                        },
                        previousTenantNotes: [
                            {
                                detail: "Deductions for Wall repair - nail holes",
                                amount: 500
                            },
                            {
                                detail: "Deep cleaning",
                                amount: 500
                            }
                        ]
                    },
                    paymentHistory: [
                        {
                            month: "February 2024",
                            status: "paid",
                            paymentMethod: "Promptpay",  // Standardized payment method name
                            rentalFee: 8500,
                            electricity: {
                                previousReading: 34567,
                                currentReading: 34789,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 2345,
                                currentReading: 2359,
                                unitsUsed: 14,
                                total: 280
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10364,  // 8500 + 1554 + 280 + 30
                            dueDate: "2024-03-10",  // Updated to follow 10th of next month rule
                            paidDate: "2024-02-03",
                            paymentNote: "First full month payment"
                        },
                        {
                            month: "January 2024",
                            status: "paid",
                            paymentMethod: "Bank Transfer",  // Standardized payment method name
                            rentalFee: 4250,  // Pro-rated amount
                            electricity: {
                                previousReading: 34567,
                                currentReading: 34567,
                                unitsUsed: 0,
                                total: 0
                            },
                            water: {
                                previousReading: 2345,
                                currentReading: 2345,
                                unitsUsed: 0,
                                total: 0
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 15,  // Pro-rated garbage fee
                                lateFee: 0
                            },
                            totalAmount: 4265,  // 4250 + 0 + 0 + 15
                            dueDate: "2024-01-15",  // Kept original due date as it's move-in month
                            paidDate: "2024-01-15",
                            paymentNote: "Move-in payment, pro-rated rent only"
                        }
                    ],
                    additionalFeatures: {
                        furniture: [
                            "1 queen size bed",
                            "1 wardrobe",
                            "1 dining table",
                            "1 refrigerator",
                            "1 AC unit"
                        ],
                        OtherDetails: "1 motorcycle space",
                    },
                    notes: [],
        },
        { id: "A107",//Currently empty room undergoing major renovation after long-term tenant moved out, preparing for new higher rental rate.
                roomType: "1 bed 1 bath",
                hasAC: true,
                size: "28sqm",
                totalTenats: 0,
                rentalFee: 8000,
                parkingFee: 0,
                currentStatus: "empty",

                tenant: null,
                previousTenant: {
                    name: "Kittipong",
                    surname: "Sangsuk",
                    nickname: "Kit",
                    phone: "087-222-3333",
                    moveInDate: "2021-08-01",
                    moveOutDate: "2024-01-15",
                    finalStatus: "paid",
                    finalUtilityReadings: {
                        electricity: 67890,
                        water: 4567
                        },

                    },
                    paymentHistory: [
                        {
                            month: "January 2024",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 8000, // Half month
                            electricity: {
                                previousReading: 67654,
                                currentReading: 67890,
                                unitsUsed: 236,
                                total: 1652
                            },
                            water: {
                                previousReading: 4552,
                                currentReading: 4567,
                                unitsUsed: 15,
                                total: 300
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 15, // Pro-rated for half month
                                lateFee: 0
                            },
                            totalAmount: 9967,  //
                            dueDate: "2024-02-10", // Updated to follow 10th of next month rule
                            paidDate: "2024-01-15",
                            paymentNote: "Final payment before move-out"
                        },
                        {
                            month: "December 2023",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 8000,
                            electricity: {
                                previousReading: 67432,
                                currentReading: 67654,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 4537,
                                currentReading: 4552,
                                unitsUsed: 15,
                                total: 300
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 9884,  // 8000 + 1554 + 300 + 30
                            dueDate: "2024-01-10", // Updated to follow 10th of next month rule
                            paidDate: "2023-12-04",
                            paymentNote: ""
                        },
                        {
                            month: "November 2023",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 8000,
                            electricity: {
                                previousReading: 67200,
                                currentReading: 67432,
                                unitsUsed: 232,
                                total: 1624
                            },
                            water: {
                                previousReading: 4522,
                                currentReading: 4537,
                                unitsUsed: 15,
                                total: 300
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 9954,  // 8000 + 1624 + 300 + 30
                            dueDate: "2023-12-10", // Updated to follow 10th of next month rule
                            paidDate: "2023-11-03",
                            paymentNote: ""
                        }
                    ],
                    additionalFeatures: {
                        furniture: [],
                        OtherDetails: " ",
                    },
                    notes: [
                        {
                            detail: "Major renovation started on 2024-01-20, expected completion 2024-02-25, 75% complete, contractor: BuildTech Solutions",
                            date: "2024-01-20",
                            images: ["renovation1.jpg", "renovation2.jpg", "renovation3.jpg"]
                        },
                        {
                            detail: "Next inspection scheduled for 2024-02-20",
                            date: "2024-02-20",
                            images: []
                        }
                    ],
        },
      ]
    },
{
    id: 2,  name: "Baan Suan Apartment",
    address: "789 Moo 4, Tambon Bang Phli Yai, Bang Phli, Samut Prakan 10540",
    totalRooms: 5,
    utilityRates: {
        electricity: 7,
        water: 20
        },
    garbageFee: 30,
    rooms: [
        { id: "B101", // Perfect tenant transition in February 2024 with full deposit return and minimal turnover maintenance.
            roomType: "1 bed 1 bath",
            hasAC: true,
            size: "32sqm",
            totalTenats: 2,
            rentalFee: 9500,
            parkingFee: 500,
            currentStatus: "paid",
                    
            Tenant: {
                name: "Piyarat",
                surname: "Wongsawat",
                nickname: "Pear",
                phone: "082-444-5555",
                lineId: "pear.piy",
                email: "pear.piyarat@email.com",
                moveInDate: "2024-02-01",
                depositAmount: 19000,
                contractEnd: "2025-01-31",
            },
            emergencyContact: {
                name: "Surachai",
                surname: "Wongsawat",
                nickname: "Chai",
                phone: "082-444-5556",
                lineId: "chai.sura",
                email: "surachai.w@email.com",
                relationship: "Father",
            }, 
            previousTenant: {
                name: "Kanokwan",
                surname: "Sritong",
                nickname: "Fah",
                moveInDate: "2022-02-01",
                moveOutDate: "2024-01-31",

                finalUtilityReadings: {
                    electricity: 45678,
                    water: 3456
                },
                        
                depositRefund: {
                    amount: 19000, 
                    refundDate: "2024-02-02",
                    },
                },
            paymentHistory: [
                { month: "February 2024",
                    status: "paid",
                    paymentMethod: "Bank Transfer",
                    rentalFee: 9500,
                    electricity: {
                        previousReading: 45678,  // Starting from previous tenant's final
                            currentReading: 45890,
                            unitsUsed: 212,
                        total: 1484
                        },
                        water: {
                            previousReading: 3456,
                            currentReading: 3470,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                    totalAmount: 11294,  // 9500 + 1484 + 280 + 30
                    dueDate: "2024-03-10",  // Updated to follow 10th of next month rule
                    paidDate: "2024-02-03",
                    paymentNote: "First payment - new tenant",
                    },
                    { month: "January 2024",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 9500,
                        electricity: {
                            previousReading: 45456,
                            currentReading: 45678,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 3442,
                            currentReading: 3456,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 11364,  // 9500 + 1554 + 280 + 30
                        dueDate: "2024-02-10",  // Updated to follow 10th of next month rule
                        paidDate: "2024-01-03",
                        paymentNote: "Final payment - previous tenant",
                        tenantInfo: "previous"  // Added to track tenant change
                    },
                    { month: "December 2023",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 9500,
                        electricity: {
                            previousReading: 45234,
                            currentReading: 45456,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 3427,
                            currentReading: 3442,
                            unitsUsed: 15,
                            total: 300
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 11384,
                        dueDate: "2024-01-10",
                        paidDate: "2023-12-04",
                        paymentNote: "",
                        tenantInfo: "previous"
                    },
                    { month: "November 2023",
                        status: "paid",
                        paymentMethod: "Bank Transfer",
                        rentalFee: 9500,
                        electricity: {
                            previousReading: 45012,
                            currentReading: 45234,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 3412,
                            currentReading: 3427,
                            unitsUsed: 15,
                            total: 300
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 11384,
                        dueDate: "2023-12-10",
                        paidDate: "2023-11-03",
                        paymentNote: "",
                        tenantInfo: "previous"
                    }
                ],
            additionalFeatures: {
                    furniture: [
                        "1 king size bed",
                        "1 large wardrobe",
                        "1 dining table set",
                        "1 refrigerator",
                        "1 AC unit",
                        "1 microwave",
                        "1 washing machine"
                    ],
                    OtherDetails: "1 car space included",
                },
                    notes: [], 
        },
        { id: "B102", // Mid-term tenant showing recent payment delays but maintains good communication.
                roomType: "studio",
                hasAC: true,
                size: "28sqm",
                totalTenats: 1,
                rentalFee: 7500,
                parkingFee: 0,
                currentStatus: "unpaid",
                
                tenant: {
                    name: "Natthapong",
                    surname: "Srisawat",
                    nickname: "Bank",
                    phone: "095-789-1234",
                    lineId: "bank.nat",
                    email: "bank.nat@email.com",
                    moveInDate: "2023-08-15",
                    depositAmount: 15000,
                    contractEnd: "2024-08-14",
                },
                emergencyContact: {
                    name: "Patcharin",
                    surname: "Srisawat",
                    nickname: "Pat",
                    phone: "095-789-1235",
                    email: "pat.sri@email.com",
                    relationship: "Sister",
                },
                previousTenant: {},
                
                paymentHistory: [
                    {
                        month: "February 2024",
                        status: "unpaid",
                        paymentMethod: "",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 12567,
                            currentReading: 12789,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 1234,
                            currentReading: 1248,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 9364,  // 7500 + 1554 + 280 + 30
                        dueDate: "2024-03-10",  // Updated to follow 10th of next month rule
                        paidDate: "",
                        paymentNote: "Tenant informed payment will be delayed until 20th",
                        extensionRequested: {
                            newDueDate: "2024-02-20",
                            requestDate: "2024-02-05",
                            status: "pending"
                        }
                    },
                    {
                        month: "January 2024",
                        status: "paid",
                        paymentMethod: "Promptpay",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 12345,
                            currentReading: 12567,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 1220,
                            currentReading: 1234,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 200  // Added late fee for payment after due date
                        },
                        totalAmount: 9564,  // 7500 + 1554 + 280 + 30 + 200
                        dueDate: "2024-02-10",
                        paidDate: "2024-01-15",
                        paymentNote: "Late payment with notice"
                    },
                    {
                        month: "December 2023",
                        status: "paid",
                        paymentMethod: "Promptpay",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 12123,
                            currentReading: 12345,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 1206,
                            currentReading: 1220,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 9364,  // 7500 + 1554 + 280 + 30
                        dueDate: "2024-01-10",
                        paidDate: "2023-12-05",
                        paymentNote: ""
                    },
                    {
                        month: "November 2023",
                        status: "paid",
                        paymentMethod: "Promptpay",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 11901,
                            currentReading: 12123,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 1192,
                            currentReading: 1206,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 9364,  // 7500 + 1554 + 280 + 30
                        dueDate: "2023-12-10",
                        paidDate: "2023-11-04",
                        paymentNote: ""
                    },
                    {
                        month: "October 2023",
                        status: "paid",
                        paymentMethod: "Promptpay",
                        rentalFee: 7500,
                        electricity: {
                            previousReading: 11679,
                            currentReading: 11901,
                            unitsUsed: 222,
                            total: 1554
                        },
                        water: {
                            previousReading: 1178,
                            currentReading: 1192,
                            unitsUsed: 14,
                            total: 280
                        },
                        otherFees: {
                            parking: 0,
                            maintenance: 0,
                            garbage: 30,
                            lateFee: 0
                        },
                        totalAmount: 9364,  // 7500 + 1554 + 280 + 30
                        dueDate: "2023-11-10",
                        paidDate: "2023-10-03",
                        paymentNote: ""
                    }
                ],
                additionalFeatures: {
                    OtherDetails: "1 motorcycle space",
                    furniture: [
                        "1 queen size bed",
                        "1 wardrobe",
                        "1 dining table",
                        "1 refrigerator",
                        "1 AC unit"
                        ]
                    },
                    notes: [
                        {
                            detail: "AC making noise, scheduled for 2024-02-25, waiting for technician availability",
                            date: "2024-01-20",
                            images: []
                        }
                    ]
        },
        { id: "B103", //Student tenant with parent as emergency contact maintaining perfect payment record.
                    roomType: "1 bed 1 bath",
                    hasAC: true,
                    size: "30sqm",
                    rentalFee: 8500,
                    currentStatus: "paid",
                    tenant: {
                        name: "Thanawan",
                        surname: "Phongphan",
                        nickname: "Cream",
                        phone: "091-234-5678",
                        lineId: "cream.thana",
                        email: "cream.thana@email.com",
                        moveInDate: "2023-05-01",
                        depositAmount: 17000,
                        contractEnd: "2024-04-30",
                        occupation: "University Student",
                    },
                    emergencyContact: {
                            name: "Somchai",
                            surname: "Phongphan",
                            nickname: "Chai",
                            phone: "081-234-5678",
                            relationship: "Father"
                    },
                    previousTenant: {},
                    paymentHistory: [
                        {
                            month: "February 2024",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 8500,
                            electricity: {
                                previousReading: 34567,
                                currentReading: 34789,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 2345,
                                currentReading: 2360,
                                unitsUsed: 15,
                                total: 300
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10384,  // 8500 + 1554 + 300 + 30
                            dueDate: "2024-03-10",
                            paidDate: "2024-02-01",
                            paymentNote: ""  // Removed extra space
                        },
                        {
                            month: "January 2024",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 8500,
                            electricity: {
                                previousReading: 34345,
                                currentReading: 34567,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 2330,
                                currentReading: 2345,
                                unitsUsed: 15,
                                total: 300
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10384,  // 8500 + 1554 + 300 + 30
                            dueDate: "2024-02-10",
                            paidDate: "2024-01-03",
                            paymentNote: ""  // Removed extra space
                        },
                        {
                            month: "December 2023",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 8500,
                            electricity: {
                                previousReading: 34123,
                                currentReading: 34345,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 2315,
                                currentReading: 2330,
                                unitsUsed: 15,
                                total: 300
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10384,  // 8500 + 1554 + 300 + 30
                            dueDate: "2024-01-10",
                            paidDate: "2023-12-02",
                            paymentNote: ""
                        },
                        {
                            month: "November 2023",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 8500,
                            electricity: {
                                previousReading: 33901,
                                currentReading: 34123,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 2300,
                                currentReading: 2315,
                                unitsUsed: 15,
                                total: 300
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10384,  // 8500 + 1554 + 300 + 30
                            dueDate: "2023-12-10",
                            paidDate: "2023-11-02",
                            paymentNote: ""
                        }
                    ],
                    additionalFeatures: {
                        OtherDetails: "1 motorcycle space",
                        furniture: [
                            "1 queen size bed",
                            "1 wardrobe",
                            "1 study desk",
                            "1 dining table",
                            "1 refrigerator",
                            "1 AC unit",
                            "1 WiFi extender"
                        ],
                        
                    },
                    notes: [
                        {
                            detail: "Internet connection weak in bedroom, WiFi extender installed, cost 1200, added to January bill",
                            date: "2024-01-15",
                                images: []
                        },
                        {
                            detail: "Primary contact for payments is emergency contact, tenant is student",
                            date: " ",
                            images: []
                        }
                    ],
        },          
        { id: "B104", // Family in larger unit developing serious payment issues with pending maintenance requests.
                    roomType: "2 bed 1 bath",
                    hasAC: true,
                    size: "45sqm",
                    rentalFee: 12000,
                    currentStatus: "overdue",
                    tenant: {
                        name: "Supachai",
                        surname: "Wongchai",
                        nickname: "Chai",
                        phone: "088-777-8888",
                        lineId: "chai.wong",
                        email: "chai.wong@email.com",
                        moveInDate: "2023-07-01",
                        depositAmount: 24000,
                        contractEnd: "2024-06-30",
                        emergencyContact: {
                            name: "Ratree",
                            surname: "Wongchai",
                            nickname: "Rat",
                            phone: "088-777-9999",
                            relationship: "Wife",
                            email: "ratree@email.com"
                        }
                    },
                    previousTenant: {},
                    paymentHistory: [
                        {
                            month: "February 2024",
                            status: "overdue",
                            paymentMethod: "",
                            rentalFee: 12000,
                            electricity: {
                                previousReading: 56789,
                                currentReading: 57089,
                                unitsUsed: 300,
                                total: 2100
                            },
                            water: {
                                previousReading: 4567,
                                currentReading: 4587,
                                unitsUsed: 20,
                                total: 400
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 750  
                            },
                            totalAmount: 15280, 
                            dueDate: "2024-03-10",
                            paidDate: "",
                            paymentNote: "Multiple attempts to contact tenant",
                            overdueDetails: {
                                days: 15,
                                lastReminder: "2024-02-20",
                                reminderCount: 3,
                                status: "critical"
                            }
                        },
                        {
                            month: "January 2024",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 12000,
                            electricity: {
                                previousReading: 56489,
                                currentReading: 56789,
                                unitsUsed: 300,
                                total: 2100
                            },
                            water: {
                                previousReading: 4547,
                                currentReading: 4567,
                                unitsUsed: 20,
                                total: 400
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 1000  // 20 days late
                            },
                            totalAmount: 15530,  // 12000 + 2100 + 400 + 30 + 1000
                            dueDate: "2024-02-10",
                            paidDate: "2024-01-25",
                            paymentNote: "Late payment after multiple reminders",
                            latePaymentDetails: {
                                daysLate: 20,
                                remindersSent: ["2024-01-10", "2024-01-15", "2024-01-20"]
                            }
                        },
                        {
                            month: "December 2023",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 12000,
                            electricity: {
                                previousReading: 56189,
                                currentReading: 56489,
                                unitsUsed: 300,
                                total: 2100
                            },
                            water: {
                                previousReading: 4527,
                                currentReading: 4547,
                                unitsUsed: 20,
                                total: 400
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 650  // 13 days late
                            },
                            totalAmount: 15180,  // 12000 + 2100 + 400 + 30 + 650
                            dueDate: "2024-01-10",
                            paidDate: "2023-12-18",
                            paymentNote: "Late payment",
                            latePaymentDetails: {
                                daysLate: 13,
                                remindersSent: ["2023-12-11", "2023-12-15"]
                            }
                        },
                        {
                            month: "November 2023",
                            status: "paid",
                            paymentMethod: "Bank Transfer",
                            rentalFee: 12000,
                            electricity: {
                                previousReading: 55889,
                                currentReading: 56189,
                                unitsUsed: 300,
                                total: 2100
                            },
                            water: {
                                previousReading: 4507,
                                currentReading: 4527,
                                unitsUsed: 20,
                                total: 400
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 14530,  // 12000 + 2100 + 400 + 30
                            dueDate: "2023-12-10",
                            paidDate: "2023-11-05",
                            paymentNote: ""
                        }
                    ],
                    additionalFeatures: {
                        furniture: [
                            "2 beds",
                            "2 wardrobes",
                            "1 dining table set",
                            "1 refrigerator",
                            "2 AC units",
                            "1 washing machine"
                        ],
                        OtherDetails: "1 car space included",
                    },
                    notes: [
                        {
                            detail: "Second bedroom AC not cooling properly, pending, waiting for payment clearance",
                            date: "2024-02-01",
                            images: []
                        }
                    ],
        },
        { id: "B105", //Model long-term tenant with consistent early payments and perfect maintenance record.
                    roomType: "1 bed 1 bath",
                    hasAC: true,
                    size: "35sqm",
                    rentalFee: 9000,
                    lastInspection: "2024-01-10",
                    currentStatus: "paid",
                    tenant: {
                        name: "Jirapat",
                        surname: "Thongdee",
                        nickname: "Earth",
                        phone: "084-555-6666",
                        lineId: "earth.jira",
                        email: "earth.jira@email.com",
                        moveInDate: "2022-12-01",
                        depositAmount: 18000,
                        contractEnd: "2024-11-30",
                    emergencyContact: {
                        name: "Nattapong",
                        surname: "Thongdee",
                        nickname: "Nat",
                        phone: "084-555-7777",
                        relationship: "Brother",
                        email: "nat.thong@email.com"
                        }
                    },
                    previousTenant: {},
                    paymentHistory: [
                        {
                            month: "February 2024",
                            status: "paid",
                            paymentMethod: "Promptpay",
                            rentalFee: 9000,
                            electricity: {
                                previousReading: 23456,
                                currentReading: 23678,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 1567,
                                currentReading: 1580,
                                unitsUsed: 13,
                                total: 260
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10844,  // 9000 + 1554 + 260 + 30
                            dueDate: "2024-03-10",
                            paidDate: "2024-02-01",
                            paymentNote: "Early payment"  // Added note for consistent early payment
                        },
                        {
                            month: "January 2024",
                            status: "paid",
                            paymentMethod: "Promptpay",
                            rentalFee: 9000,
                            electricity: {
                                previousReading: 23234,
                                currentReading: 23456,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 1554,
                                currentReading: 1567,
                                unitsUsed: 13,
                                total: 260
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10844,  // 9000 + 1554 + 260 + 30
                            dueDate: "2024-02-10",
                            paidDate: "2024-01-03",
                            paymentNote: "Early payment"
                        },
                        {
                            month: "December 2023",
                            status: "paid",
                            paymentMethod: "Promptpay",
                            rentalFee: 9000,
                            electricity: {
                                previousReading: 23012,
                                currentReading: 23234,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 1541,
                                currentReading: 1554,
                                unitsUsed: 13,
                                total: 260
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10844,  // 9000 + 1554 + 260 + 30
                            dueDate: "2024-01-10",
                            paidDate: "2023-12-02",
                            paymentNote: "Early payment"
                        },
                        {
                            month: "November 2023",
                            status: "paid",
                            paymentMethod: "Promptpay",
                            rentalFee: 9000,
                            electricity: {
                                previousReading: 22790,
                                currentReading: 23012,
                                unitsUsed: 222,
                                total: 1554
                            },
                            water: {
                                previousReading: 1528,
                                currentReading: 1541,
                                unitsUsed: 13,
                                total: 260
                            },
                            otherFees: {
                                parking: 0,
                                maintenance: 0,
                                garbage: 30,
                                lateFee: 0
                            },
                            totalAmount: 10844,  // 9000 + 1554 + 260 + 30
                            dueDate: "2023-12-10",
                            paidDate: "2023-11-02",
                            paymentNote: "Early payment"
                        }
                    ],
                    additionalFeatures: {
                        furniture: [
                            "1 king size bed",
                            "1 wardrobe",
                            "1 dining table set",
                            "1 refrigerator",
                            "1 AC unit",
                            "1 washing machine"
                        ],
                        OtherDetails: "1 car space included",
                    },
                    notes: [
                        {
                            detail: "Annual AC maintenance completed, cost 850",
                            date: "2024-01-10",
                            images: []
                        }
                    ],
        },
                                            
        ]
    }
   ]
};
