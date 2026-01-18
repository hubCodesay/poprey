/**
 * POPREY Centralized Package Data
 * 
 * This file contains all pricing and package information for the entire Poprey website.
 * All pages load from this central source to ensure pricing consistency.
 * 
 * Last Updated: 2026-01-18 (Complete extraction from poprey.com)
 * Data Source: Comprehensive donor site extraction
 */

window.POPREY_PACKAGES = {
    // ========================================
    // INSTAGRAM LIKES
    // ========================================
    "ILIK_REGULAR": [
        { "id": "25LIK", "quantity": 25, "price": 0.00, "percent": 5 },
        { "id": "200LIK", "quantity": 200, "price": 2.60, "percent": 10 },
        { "id": "500LIK", "quantity": 500, "price": 5.20, "percent": 15 },
        { "id": "1000LIK", "quantity": 1000, "price": 9.50, "percent": 20 },
        { "id": "2000LIK", "quantity": 2000, "price": 14.90, "percent": 30 },
        { "id": "5000LIK", "quantity": 5000, "price": 29.90, "percent": 40 },
        { "id": "10000LIK", "quantity": 10000, "price": 51.90, "percent": 50 },
        { "id": "20000LIK", "quantity": 20000, "price": 86.90, "percent": 60 }
    ],
    "ILIK_PREMIUM": [
        { "id": "25LIK", "quantity": 25, "price": 0.00, "percent": 5 },
        { "id": "200LIK", "quantity": 200, "price": 4.70, "percent": 15 },
        { "id": "500LIK", "quantity": 500, "price": 8.70, "percent": 25 },
        { "id": "1000LIK", "quantity": 1000, "price": 15.90, "percent": 35 },
        { "id": "2000LIK", "quantity": 2000, "price": 27.90, "percent": 45 },
        { "id": "5000LIK", "quantity": 5000, "price": 47.90, "percent": 55 },
        { "id": "10000LIK", "quantity": 10000, "price": 79.90, "percent": 70 },
        { "id": "20000LIK", "quantity": 20000, "price": 139.00, "percent": 100 }
    ],
    "ILIK_REGULAR_DISCOUNT": [
        { "id": "20000LIK", "quantity": 20000, "price": 86.90, "percent": 60 },
        { "id": "50000LIK", "quantity": 50000, "price": 199.00, "percent": 75 }
    ],
    "ILIK_PREMIUM_DISCOUNT": [
        { "id": "20000LIK", "quantity": 20000, "price": 139.00, "percent": 100 },
        { "id": "50000LIK", "quantity": 50000, "price": 349.00, "percent": 120 }
    ],

    // ========================================
    // INSTAGRAM FOLLOWERS
    // ========================================
    "IFOL_REGULAR": [
        { "id": "10FOL", "quantity": 10, "price": 0.00, "guarantee": [] },
        {
            "id": "100FOL", "quantity": 100, "price": 1.30, "guarantee": [
                { "days": 30, "price": 0.5 }, { "days": 60, "price": 0.8 }, { "days": 90, "price": 1.3 }, { "days": 180, "price": 2.0 }, { "days": 360, "price": 3.3 }
            ]
        },
        {
            "id": "250FOL", "quantity": 250, "price": 2.70, "guarantee": [
                { "days": 30, "price": 1.0 }, { "days": 60, "price": 2.0 }, { "days": 90, "price": 3.0 }, { "days": 180, "price": 4.0 }, { "days": 360, "price": 7.0 }
            ]
        },
        {
            "id": "500FOL", "quantity": 500, "price": 4.90, "guarantee": [
                { "days": 30, "price": 1.0 }, { "days": 60, "price": 3.0 }, { "days": 90, "price": 4.0 }, { "days": 180, "price": 7.0 }, { "days": 360, "price": 12.0 }
            ]
        },
        {
            "id": "1000FOL", "quantity": 1000, "price": 9.00, "guarantee": [
                { "days": 30, "price": 3.0 }, { "days": 60, "price": 6.0 }, { "days": 90, "price": 9.0 }, { "days": 180, "price": 14.0 }, { "days": 360, "price": 23.0 }
            ]
        },
        {
            "id": "2000FOL", "quantity": 2000, "price": 16.90, "guarantee": [
                { "days": 30, "price": 7.0 }, { "days": 60, "price": 12.0 }, { "days": 90, "price": 17.0 }, { "days": 180, "price": 27.0 }, { "days": 360, "price": 42.1 }
            ]
        },
        {
            "id": "5000FOL", "quantity": 5000, "price": 37.90, "guarantee": [
                { "days": 30, "price": 20.0 }, { "days": 60, "price": 30.0 }, { "days": 90, "price": 40.0 }, { "days": 180, "price": 60.0 }, { "days": 360, "price": 100.0 }
            ]
        },
        {
            "id": "10000FOL", "quantity": 10000, "price": 66.90, "guarantee": [
                { "days": 30, "price": 20.0 }, { "days": 60, "price": 40.0 }, { "days": 90, "price": 60.0 }, { "days": 180, "price": 100.0 }, { "days": 360, "price": 170.0 }
            ]
        }
    ],
    "IFOL_PREMIUM": [
        { "id": "10FOL", "quantity": 10, "price": 0.00, "guarantee": [] },
        {
            "id": "100FOL", "quantity": 100, "price": 2.20, "guarantee": [
                { "days": 30, "price": 0.9 }, { "days": 60, "price": 1.2 }, { "days": 90, "price": 2.2 }, { "days": 180, "price": 3.2 }, { "days": 360, "price": 6.2 }
            ]
        },
        {
            "id": "250FOL", "quantity": 250, "price": 4.60, "guarantee": [
                { "days": 30, "price": 2.0 }, { "days": 60, "price": 3.0 }, { "days": 90, "price": 5.0 }, { "days": 180, "price": 8.0 }, { "days": 360, "price": 12.0 }
            ]
        },
        {
            "id": "500FOL", "quantity": 500, "price": 10.90, "guarantee": [
                { "days": 30, "price": 5.0 }, { "days": 60, "price": 8.0 }, { "days": 90, "price": 11.0 }, { "days": 180, "price": 18.0 }, { "days": 360, "price": 29.0 }
            ]
        },
        {
            "id": "1000FOL", "quantity": 1000, "price": 19.90, "guarantee": [
                { "days": 30, "price": 8.0 }, { "days": 60, "price": 14.0 }, { "days": 90, "price": 20.0 }, { "days": 180, "price": 30.1 }, { "days": 360, "price": 50.1 }
            ]
        },
        {
            "id": "2000FOL", "quantity": 2000, "price": 34.90, "guarantee": [
                { "days": 30, "price": 10.0 }, { "days": 60, "price": 20.0 }, { "days": 90, "price": 30.0 }, { "days": 180, "price": 50.0 }, { "days": 360, "price": 90.0 }
            ]
        },
        {
            "id": "5000FOL", "quantity": 5000, "price": 88.90, "guarantee": [
                { "days": 30, "price": 40.0 }, { "days": 60, "price": 60.0 }, { "days": 90, "price": 90.0 }, { "days": 180, "price": 150.0 }, { "days": 360, "price": 230.0 }
            ]
        },
        {
            "id": "10000FOL", "quantity": 10000, "price": 129.00, "guarantee": [
                { "days": 30, "price": 50.0 }, { "days": 60, "price": 90.0 }, { "days": 90, "price": 130.0 }, { "days": 180, "price": 210.0 }, { "days": 360, "price": 340.0 }
            ]
        }
    ],
    "IFOL_REGULAR_DISCOUNT": [
        {
            "id": "10000FOL", "quantity": 10000, "price": 66.90, "guarantee": [
                { "days": 30, "price": 20.0 }, { "days": 60, "price": 40.0 }, { "days": 90, "price": 60.0 }, { "days": 180, "price": 100.0 }, { "days": 360, "price": 170.0 }
            ]
        },
        {
            "id": "20000FOL", "quantity": 20000, "price": 119.00, "guarantee": [
                { "days": 30, "price": 50.0 }, { "days": 60, "price": 90.0 }, { "days": 90, "price": 130.0 }, { "days": 180, "price": 210.0 }, { "days": 360, "price": 340.0 }
            ]
        },
        {
            "id": "50000FOL", "quantity": 50000, "price": 279.00, "guarantee": [
                { "days": 30, "price": 141.0 }, { "days": 60, "price": 141.0 }, { "days": 90, "price": 241.0 }, { "days": 180, "price": 341.0 }, { "days": 360, "price": 641.0 }
            ]
        }
    ],
    "IFOL_PREMIUM_DISCOUNT": [
        {
            "id": "10000FOL", "quantity": 10000, "price": 129.00, "guarantee": [
                { "days": 30, "price": 50.0 }, { "days": 60, "price": 90.0 }, { "days": 90, "price": 130.0 }, { "days": 180, "price": 210.0 }, { "days": 360, "price": 340.0 }
            ]
        },
        {
            "id": "20000FOL", "quantity": 20000, "price": 239.00, "guarantee": [
                { "days": 30, "price": 101.0 }, { "days": 60, "price": 201.0 }, { "days": 90, "price": 201.0 }, { "days": 180, "price": 401.0 }, { "days": 360, "price": 601.0 }
            ]
        },
        {
            "id": "50000FOL", "quantity": 50000, "price": 589.00, "guarantee": [
                { "days": 30, "price": 600.0 }, { "days": 60, "price": 1000.0 }, { "days": 90, "price": 1500.0 }, { "days": 180, "price": 2400.0 }, { "days": 360, "price": 3900.0 }
            ]
        }
    ],

    // ========================================
    // INSTAGRAM VIEWS
    // ========================================
    "IVIEWS_REGULAR": [
        { "id": "50VIE", "quantity": 50, "price": 0.00 },
        { "id": "200VIE", "quantity": 200, "price": 0.90 },
        { "id": "500VIE", "quantity": 500, "price": 1.60 },
        { "id": "1000VIE", "quantity": 1000, "price": 2.90 },
        { "id": "2000VIE", "quantity": 2000, "price": 5.40 },
        { "id": "5000VIE", "quantity": 5000, "price": 11.90 },
        { "id": "10000VIE", "quantity": 10000, "price": 19.90 },
        { "id": "20000VIE", "quantity": 20000, "price": 37.90 }
    ],

    // ========================================
    // INSTAGRAM COMMENTS
    // ========================================
    "ICOMMENTS_REGULAR": [
        { "id": "25COM", "quantity": 25, "price": 6.90 },
        { "id": "50COM", "quantity": 50, "price": 9.90 },
        { "id": "100COM", "quantity": 100, "price": 15.90 },
        { "id": "200COM", "quantity": 200, "price": 24.90 },
        { "id": "500COM", "quantity": 500, "price": 59.90 },
        { "id": "1000COM", "quantity": 1000, "price": 69.90 },
        { "id": "2000COM", "quantity": 2000, "price": 99.90 },
        { "id": "5000COM", "quantity": 5000, "price": 199.00 }
    ],
    "ICOMMENTS_PREMIUM": [
        { "id": "25COM", "quantity": 25, "price": 10.90 },
        { "id": "50COM", "quantity": 50, "price": 18.90 },
        { "id": "100COM", "quantity": 100, "price": 29.90 },
        { "id": "200COM", "quantity": 200, "price": 49.90 },
        { "id": "500COM", "quantity": 500, "price": 99.90 },
        { "id": "1000COM", "quantity": 1000, "price": 179.00 },
        { "id": "2000COM", "quantity": 2000, "price": 299.00 },
        { "id": "5000COM", "quantity": 5000, "price": 599.00 }
    ],

    // ========================================
    // INSTAGRAM AUTO-LIKES (Pay for Likes)
    // ========================================
    "IAUTO_REGULAR": [
        { "id": "1000ALIK", "quantity": 1000, "price": 11.90 },
        { "id": "2000ALIK", "quantity": 2000, "price": 18.90 },
        { "id": "5000ALIK", "quantity": 5000, "price": 37.90 },
        { "id": "10000ALIK", "quantity": 10000, "price": 64.90 },
        { "id": "20000ALIK", "quantity": 20000, "price": 109.00 },
        { "id": "50000ALIK", "quantity": 50000, "price": 219.00 },
        { "id": "100000ALIK", "quantity": 100000, "price": 379.00 },
        { "id": "200000ALIK", "quantity": 200000, "price": 699.00 }
    ],
    "IAUTO_PREMIUM": [
        { "id": "1000ALIK", "quantity": 1000, "price": 19.90 },
        { "id": "2000ALIK", "quantity": 2000, "price": 34.90 },
        { "id": "5000ALIK", "quantity": 5000, "price": 59.90 },
        { "id": "10000ALIK", "quantity": 10000, "price": 99.90 },
        { "id": "20000ALIK", "quantity": 20000, "price": 179.00 },
        { "id": "50000ALIK", "quantity": 50000, "price": 349.00 },
        { "id": "100000ALIK", "quantity": 100000, "price": 449.00 },
        { "id": "200000ALIK", "quantity": 200000, "price": 869.00 }
    ],

    // ========================================
    // INSTAGRAM AUTO-LIKES (30 Day Subscription)
    // ========================================
    "IAUTO_SUB_REGULAR": [
        { "id": "50SUB", "quantity": 50, "price": 9.90 },
        { "id": "100SUB", "quantity": 100, "price": 18.90 },
        { "id": "250SUB", "quantity": 250, "price": 28.90 },
        { "id": "500SUB", "quantity": 500, "price": 47.90 },
        { "id": "750SUB", "quantity": 750, "price": 59.90 },
        { "id": "1000SUB", "quantity": 1000, "price": 79.90 },
        { "id": "2000SUB", "quantity": 2000, "price": 149.00 },
        { "id": "3000SUB", "quantity": 3000, "price": 699.00 }
    ],
    "IAUTO_SUB_PREMIUM": [
        { "id": "50SUB", "quantity": 50, "price": 14.90 },
        { "id": "100SUB", "quantity": 100, "price": 29.90 },
        { "id": "250SUB", "quantity": 250, "price": 39.90 },
        { "id": "500SUB", "quantity": 500, "price": 57.90 },
        { "id": "750SUB", "quantity": 750, "price": 69.90 },
        { "id": "1000SUB", "quantity": 1000, "price": 89.90 },
        { "id": "2000SUB", "quantity": 2000, "price": 169.00 },
        { "id": "3000SUB", "quantity": 3000, "price": 869.00 }
    ],

    // ========================================
    // INSTAGRAM CALCULATORS (Reach, Impressions, Saves)
    // ========================================
    "IREACH": [
        { "quantity": 0, "price": 0.00 },
        { "quantity": 110, "price": 1.11 },
        { "quantity": 250, "price": 3.00 },
        { "quantity": 500, "price": 5.00 },
        { "quantity": 1000, "price": 8.00 },
        { "quantity": 2500, "price": 18.00 },
        { "quantity": 5000, "price": 35.00 },
        { "quantity": 10000, "price": 60.00 }
    ],
    "IIMPRESSIONS": [
        { "quantity": 0, "price": 0.00 },
        { "quantity": 110, "price": 1.00 },
        { "quantity": 250, "price": 2.00 },
        { "quantity": 500, "price": 3.50 },
        { "quantity": 1000, "price": 6.00 },
        { "quantity": 2500, "price": 12.00 },
        { "quantity": 5000, "price": 22.00 },
        { "quantity": 10000, "price": 40.00 }
    ],
    "ISAVES": [
        { "quantity": 0, "price": 0.00 },
        { "quantity": 110, "price": 1.00 },
        { "quantity": 250, "price": 4.00 },
        { "quantity": 500, "price": 7.00 },
        { "quantity": 1000, "price": 12.00 },
        { "quantity": 2500, "price": 25.00 },
        { "quantity": 5000, "price": 45.00 },
        { "quantity": 10000, "price": 80.00 }
    ],

    // ========================================
    // YOUTUBE LIKES
    // ========================================
    "YLIK": [
        { "id": "100LIK", "qty": 100, "price": 0.90 },
        { "id": "250LIK", "qty": 250, "price": 1.90 },
        { "id": "500LIK", "qty": 500, "price": 2.90 },
        { "id": "1000LIK", "qty": 1000, "price": 4.90 },
        { "id": "2000LIK", "qty": 2000, "price": 8.90 },
        { "id": "3000LIK", "qty": 3000, "price": 12.90 },
        { "id": "4000LIK", "qty": 4000, "price": 16.90 },
        { "id": "5000LIK", "qty": 5000, "price": 19.90 }
    ],

    // ========================================
    // YOUTUBE VIEWS
    // ========================================
    "YVIE": [
        { "id": "250VIE", "qty": 250, "price": 1.90 },
        { "id": "500VIE", "qty": 500, "price": 2.90 },
        { "id": "1000VIE", "qty": 1000, "price": 4.90 },
        { "id": "2000VIE", "qty": 2000, "price": 8.90 },
        { "id": "3000VIE", "qty": 3000, "price": 14.90 },
        { "id": "5000VIE", "qty": 5000, "price": 19.90 },
        { "id": "7500VIE", "qty": 7500, "price": 29.90 },
        { "id": "10000VIE", "qty": 10000, "price": 39.90 }
    ],

    // ========================================
    // TIKTOK FOLLOWERS
    // ========================================
    "TFOL": [
        { "id": "100TFOL", "qty": 100, "price": 1.90 },
        { "id": "250TFOL", "qty": 250, "price": 2.90 },
        { "id": "500TFOL", "qty": 500, "price": 4.90 },
        { "id": "1000TFOL", "qty": 1000, "price": 8.90 },
        { "id": "2000TFOL", "qty": 2000, "price": 16.90 },
        { "id": "5000TFOL", "qty": 5000, "price": 39.00 },
        { "id": "10000TFOL", "qty": 10000, "price": 74.00 }
    ],

    // ========================================
    // FACEBOOK POST LIKES
    // ========================================
    "FBLIK": [
        { "id": "100FBLIK", "qty": 100, "price": 0.90 },
        { "id": "250FBLIK", "qty": 250, "price": 1.90 },
        { "id": "500FBLIK", "qty": 500, "price": 3.20 },
        { "id": "1000FBLIK", "qty": 1000, "price": 4.90 },
        { "id": "2500FBLIK", "qty": 2500, "price": 11.90 },
        { "id": "5000FBLIK", "qty": 5000, "price": 19.90 },
        { "id": "10000FBLIK", "qty": 10000, "price": 37.00 }
    ]

    // Additional services can be added here as needed
};
