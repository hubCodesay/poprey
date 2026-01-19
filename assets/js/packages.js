/**
 * POPREY Centralized Package Data
 *
 * This file contains all pricing and package information for the entire Poprey website.
 * All pages load from this central source to ensure pricing consistency.
 */

window.POPREY_PACKAGES = {
  // ========================================
  // INSTAGRAM LIKES
  // ========================================
  ILIK_REGULAR: [
    {
      id: "25LIK",
      quantity: 25,
      price: 0.0,
      percent: 5,
      extras: { reach: 300, impressions: 300, saves: 10 },
    },
    {
      id: "200LIK",
      quantity: 200,
      price: 2.6,
      percent: 10,
      extras: { reach: 2500, impressions: 2500, saves: 50 },
    },
    {
      id: "500LIK",
      quantity: 500,
      price: 5.2,
      percent: 15,
      extras: { reach: 6000, impressions: 6000, saves: 125 },
    },
    {
      id: "1000LIK",
      quantity: 1000,
      price: 9.5,
      percent: 20,
      extras: { reach: 12000, impressions: 12000, saves: 250 },
    },
    {
      id: "2000LIK",
      quantity: 2000,
      price: 14.9,
      percent: 30,
      extras: { reach: 25000, impressions: 25000, saves: 500 },
    },
    {
      id: "5000LIK",
      quantity: 5000,
      price: 29.9,
      percent: 40,
      extras: { reach: 60000, impressions: 60000, saves: 1250 },
    },
    {
      id: "10000LIK",
      quantity: 10000,
      price: 51.9,
      percent: 50,
      extras: { reach: 120000, impressions: 120000, saves: 2500 },
    },
    {
      id: "20000LIK",
      quantity: 20000,
      price: 86.9,
      percent: 60,
      extras: { reach: 250000, impressions: 250000, saves: 5000 },
    },
  ],
  ILIK_PREMIUM: [
    {
      id: "25LIK",
      quantity: 25,
      price: 0.0,
      percent: 5,
      extras: { reach: 300, impressions: 300, saves: 10 },
    },
    {
      id: "200LIK",
      quantity: 200,
      price: 4.7,
      percent: 15,
      extras: { reach: 2500, impressions: 2500, saves: 50 },
    },
    {
      id: "500LIK",
      quantity: 500,
      price: 8.7,
      percent: 25,
      extras: { reach: 6000, impressions: 6000, saves: 125 },
    },
    {
      id: "1000LIK",
      quantity: 1000,
      price: 15.9,
      percent: 35,
      extras: { reach: 12000, impressions: 12000, saves: 250 },
    },
    {
      id: "2000LIK",
      quantity: 2000,
      price: 27.9,
      percent: 45,
      extras: { reach: 25000, impressions: 25000, saves: 500 },
    },
    {
      id: "5000LIK",
      quantity: 5000,
      price: 47.9,
      percent: 55,
      extras: { reach: 60000, impressions: 60000, saves: 1250 },
    },
    {
      id: "10000LIK",
      quantity: 10000,
      price: 79.9,
      percent: 70,
      extras: { reach: 120000, impressions: 120000, saves: 2500 },
    },
    {
      id: "20000LIK",
      quantity: 20000,
      price: 139.0,
      percent: 100,
      extras: { reach: 250000, impressions: 250000, saves: 5000 },
    },
  ],
  ILIK_REGULAR_DISCOUNT: [
    {
      id: "20000LIK",
      quantity: 20000,
      price: 86.9,
      percent: 60,
      extras: { reach: 250000, impressions: 250000, saves: 5000 },
    },
    {
      id: "50000LIK",
      quantity: 50000,
      price: 199.0,
      percent: 75,
      extras: { reach: 600000, impressions: 600000, saves: 12500 },
    },
  ],
  ILIK_PREMIUM_DISCOUNT: [
    {
      id: "20000LIK",
      quantity: 20000,
      price: 139.0,
      percent: 100,
      extras: { reach: 250000, impressions: 250000, saves: 5000 },
    },
    {
      id: "50000LIK",
      quantity: 50000,
      price: 349.0,
      percent: 120,
      extras: { reach: 600000, impressions: 600000, saves: 12500 },
    },
  ],

  // ========================================
  // INSTAGRAM FOLLOWERS
  // ========================================
  IFOL_REGULAR: [
    { id: "10FOL", quantity: 10, price: 0.0, guarantee: [] },
    {
      id: "100FOL",
      quantity: 100,
      price: 1.3,
      guarantee: [
        { days: 30, price: 0.5 },
        { days: 60, price: 0.8 },
        { days: 90, price: 1.3 },
        { days: 180, price: 2.0 },
        { days: 360, price: 3.3 },
      ],
    },
    {
      id: "250FOL",
      quantity: 250,
      price: 2.7,
      guarantee: [
        { days: 30, price: 1.0 },
        { days: 60, price: 2.0 },
        { days: 90, price: 3.0 },
        { days: 180, price: 4.0 },
        { days: 360, price: 7.0 },
      ],
    },
    {
      id: "500FOL",
      quantity: 500,
      price: 4.9,
      guarantee: [
        { days: 30, price: 1.0 },
        { days: 60, price: 3.0 },
        { days: 90, price: 4.0 },
        { days: 180, price: 7.0 },
        { days: 360, price: 12.0 },
      ],
    },
    {
      id: "1000FOL",
      quantity: 1000,
      price: 9.0,
      guarantee: [
        { days: 30, price: 3.0 },
        { days: 60, price: 6.0 },
        { days: 90, price: 9.0 },
        { days: 180, price: 14.0 },
        { days: 360, price: 23.0 },
      ],
    },
    {
      id: "2000FOL",
      quantity: 2000,
      price: 16.9,
      guarantee: [
        { days: 30, price: 7.0 },
        { days: 60, price: 12.0 },
        { days: 90, price: 17.0 },
        { days: 180, price: 27.0 },
        { days: 360, price: 42.1 },
      ],
    },
    {
      id: "5000FOL",
      quantity: 5000,
      price: 37.9,
      guarantee: [
        { days: 30, price: 20.0 },
        { days: 60, price: 30.0 },
        { days: 90, price: 40.0 },
        { days: 180, price: 60.0 },
        { days: 360, price: 100.0 },
      ],
    },
    {
      id: "10000FOL",
      quantity: 10000,
      price: 66.9,
      guarantee: [
        { days: 30, price: 20.0 },
        { days: 60, price: 40.0 },
        { days: 90, price: 60.0 },
        { days: 180, price: 100.0 },
        { days: 360, price: 170.0 },
      ],
    },
  ],
  IFOL_PREMIUM: [
    { id: "10FOL", quantity: 10, price: 0.0, guarantee: [] },
    {
      id: "100FOL",
      quantity: 100,
      price: 2.2,
      guarantee: [
        { days: 30, price: 0.9 },
        { days: 60, price: 1.2 },
        { days: 90, price: 2.2 },
        { days: 180, price: 3.2 },
        { days: 360, price: 6.2 },
      ],
    },
    {
      id: "250FOL",
      quantity: 250,
      price: 4.6,
      guarantee: [
        { days: 30, price: 2.0 },
        { days: 60, price: 3.0 },
        { days: 90, price: 5.0 },
        { days: 180, price: 8.0 },
        { days: 360, price: 12.0 },
      ],
    },
    {
      id: "500FOL",
      quantity: 500,
      price: 10.9,
      guarantee: [
        { days: 30, price: 5.0 },
        { days: 60, price: 8.0 },
        { days: 90, price: 11.0 },
        { days: 180, price: 18.0 },
        { days: 360, price: 29.0 },
      ],
    },
    {
      id: "1000FOL",
      quantity: 1000,
      price: 19.9,
      guarantee: [
        { days: 30, price: 8.0 },
        { days: 60, price: 14.0 },
        { days: 90, price: 20.0 },
        { days: 180, price: 30.1 },
        { days: 360, price: 50.1 },
      ],
    },
    {
      id: "2000FOL",
      quantity: 2000,
      price: 34.9,
      guarantee: [
        { days: 30, price: 10.0 },
        { days: 60, price: 20.0 },
        { days: 90, price: 30.0 },
        { days: 180, price: 50.0 },
        { days: 360, price: 90.0 },
      ],
    },
    {
      id: "5000FOL",
      quantity: 5000,
      price: 88.9,
      guarantee: [
        { days: 30, price: 40.0 },
        { days: 60, price: 60.0 },
        { days: 90, price: 90.0 },
        { days: 180, price: 150.0 },
        { days: 360, price: 230.0 },
      ],
    },
    {
      id: "10000FOL",
      quantity: 10000,
      price: 129.0,
      guarantee: [
        { days: 30, price: 50.0 },
        { days: 60, price: 90.0 },
        { days: 90, price: 130.0 },
        { days: 180, price: 210.0 },
        { days: 360, price: 340.0 },
      ],
    },
  ],
  IFOL_REGULAR_DISCOUNT: [
    {
      id: "10000FOL",
      quantity: 10000,
      price: 66.9,
      guarantee: [
        { days: 30, price: 20.0 },
        { days: 60, price: 40.0 },
        { days: 90, price: 60.0 },
        { days: 180, price: 100.0 },
        { days: 360, price: 170.0 },
      ],
    },
    {
      id: "20000FOL",
      quantity: 20000,
      price: 119.0,
      guarantee: [
        { days: 30, price: 50.0 },
        { days: 60, price: 90.0 },
        { days: 90, price: 130.0 },
        { days: 180, price: 210.0 },
        { days: 360, price: 340.0 },
      ],
    },
    {
      id: "50000FOL",
      quantity: 50000,
      price: 279.0,
      guarantee: [
        { days: 30, price: 141.0 },
        { days: 60, price: 141.0 },
        { days: 90, price: 241.0 },
        { days: 180, price: 341.0 },
        { days: 360, price: 641.0 },
      ],
    },
  ],
  IFOL_PREMIUM_DISCOUNT: [
    {
      id: "10000FOL",
      quantity: 10000,
      price: 129.0,
      guarantee: [
        { days: 30, price: 50.0 },
        { days: 60, price: 90.0 },
        { days: 90, price: 130.0 },
        { days: 180, price: 210.0 },
        { days: 360, price: 340.0 },
      ],
    },
    {
      id: "20000FOL",
      quantity: 20000,
      price: 239.0,
      guarantee: [
        { days: 30, price: 101.0 },
        { days: 60, price: 201.0 },
        { days: 90, price: 201.0 },
        { days: 180, price: 401.0 },
        { days: 360, price: 601.0 },
      ],
    },
    {
      id: "50000FOL",
      quantity: 50000,
      price: 589.0,
      guarantee: [
        { days: 30, price: 600.0 },
        { days: 60, price: 1000.0 },
        { days: 90, price: 1500.0 },
        { days: 180, price: 2400.0 },
        { days: 360, price: 3900.0 },
      ],
    },
  ],

  // ========================================
  // INSTAGRAM VIEWS
  // ========================================
  IVIEWS_REGULAR: [
    { id: "50VIE", quantity: 50, price: 0.0 },
    { id: "200VIE", quantity: 200, price: 0.9 },
    { id: "500VIE", quantity: 500, price: 1.6 },
    { id: "1000VIE", quantity: 1000, price: 2.9 },
    { id: "2000VIE", quantity: 2000, price: 5.4 },
    { id: "5000VIE", quantity: 5000, price: 10.9 },
    { id: "10000VIE", quantity: 10000, price: 19.9 },
    { id: "20000VIE", quantity: 20000, price: 37.9 },
  ],

  // ========================================
  // INSTAGRAM COMMENTS
  // ========================================
  ICOMMENTS_REGULAR: [
    { id: "25COM", quantity: 25, price: 5.9 },
    { id: "50COM", quantity: 50, price: 9.9 },
    { id: "100COM", quantity: 100, price: 15.9 },
    { id: "200COM", quantity: 200, price: 24.9 },
    { id: "500COM", quantity: 500, price: 59.9 },
    { id: "1000COM", quantity: 1000, price: 99.9 },
    { id: "2000COM", quantity: 2000, price: 189.0 },
    { id: "5000COM", quantity: 5000, price: 389.0 },
  ],
  ICOMMENTS_PREMIUM: [
    { id: "25COM", quantity: 25, price: 10.9 },
    { id: "50COM", quantity: 50, price: 18.9 },
    { id: "100COM", quantity: 100, price: 29.9 },
    { id: "200COM", quantity: 200, price: 49.9 },
    { id: "500COM", quantity: 500, price: 99.9 },
    { id: "1000COM", quantity: 1000, price: 199.0 },
    { id: "2000COM", quantity: 2000, price: 379.0 },
    { id: "5000COM", quantity: 5000, price: 799.0 },
  ],

  // ========================================
  // INSTAGRAM AUTO-LIKES (Pay for Likes)
  // ========================================
  IAUTO_REGULAR: [
    { id: "2000ALIK", quantity: 2000, price: 18.9 },
    { id: "5000ALIK", quantity: 5000, price: 37.9 },
    { id: "10000ALIK", quantity: 10000, price: 64.9 },
    { id: "20000ALIK", quantity: 20000, price: 109.0 },
    { id: "50000ALIK", quantity: 50000, price: 219.0 },
    { id: "100000ALIK", quantity: 100000, price: 379.0 },
    { id: "200000ALIK", quantity: 200000, price: 699.0 },
    { id: "500000ALIK", quantity: 500000, price: 1490.0 },
  ],
  IAUTO_PREMIUM: [
    { id: "1000ALIK", quantity: 1000, price: 19.9 },
    { id: "2000ALIK", quantity: 2000, price: 34.9 },
    { id: "5000ALIK", quantity: 5000, price: 59.9 },
    { id: "10000ALIK", quantity: 10000, price: 99.9 },
    { id: "20000ALIK", quantity: 20000, price: 179.0 },
    { id: "50000ALIK", quantity: 50000, price: 349.0 },
    { id: "100000ALIK", quantity: 100000, price: 449.0 },
    { id: "200000ALIK", quantity: 200000, price: 869.0 },
  ],

  // ========================================
  // INSTAGRAM AUTO-LIKES (30 Day Subscription)
  // ========================================
  IAUTO_SUB_REGULAR: [
    { id: "1000SUB", quantity: 1000, price: 11.9 },
    { id: "2000SUB", quantity: 2000, price: 18.9 },
    { id: "5000SUB", quantity: 5000, price: 37.9 },
    { id: "10000SUB", quantity: 10000, price: 64.9 },
    { id: "20000SUB", quantity: 20000, price: 109.0 },
    { id: "50000SUB", quantity: 50000, price: 219.0 },
    { id: "100000SUB", quantity: 100000, price: 379.0 },
    { id: "200000SUB", quantity: 200000, price: 699.0 },
  ],
  IAUTO_SUB_PREMIUM: [
    { id: "1000SUB", quantity: 1000, price: 19.9 },
    { id: "2000SUB", quantity: 2000, price: 34.9 },
    { id: "5000SUB", quantity: 5000, price: 59.9 },
    { id: "10000SUB", quantity: 10000, price: 99.9 },
    { id: "20000SUB", quantity: 20000, price: 179.0 },
    { id: "50000SUB", quantity: 50000, price: 349.0 },
    { id: "100000SUB", quantity: 100000, price: 449.0 },
    { id: "200000SUB", quantity: 200000, price: 869.0 },
  ],

  // ========================================
  // INSTAGRAM CALCULATORS (Reach, Impressions, Saves)
  // ========================================
  IREACH: [
    { quantity: 0, price: 0.0 },
    { quantity: 110, price: 1.11 },
    { quantity: 250, price: 3.0 },
    { quantity: 500, price: 5.0 },
    { quantity: 1000, price: 8.0 },
    { quantity: 2500, price: 18.0 },
    { quantity: 5000, price: 35.0 },
    { quantity: 10000, price: 60.0 },
  ],
  IIMPRESSIONS: [
    { quantity: 0, price: 0.0 },
    { quantity: 110, price: 1.0 },
    { quantity: 250, price: 2.0 },
    { quantity: 500, price: 3.5 },
    { quantity: 1000, price: 6.0 },
    { quantity: 2500, price: 12.0 },
    { quantity: 5000, price: 22.0 },
    { quantity: 10000, price: 40.0 },
  ],
  ISAVES: [
    { quantity: 0, price: 0.0 },
    { quantity: 110, price: 1.0 },
    { quantity: 250, price: 4.0 },
    { quantity: 500, price: 7.0 },
    { quantity: 1000, price: 12.0 },
    { quantity: 2500, price: 25.0 },
    { quantity: 5000, price: 45.0 },
    { quantity: 10000, price: 80.0 },
  ],

  // ========================================
  // YOUTUBE LIKES
  // ========================================
  YLIKE_REGULAR: [
    { id: "100LIK", quantity: 100, price: 0.9 },
    { id: "250LIK", quantity: 250, price: 1.9 },
    { id: "500LIK", quantity: 500, price: 2.9 },
    { id: "1000LIK", quantity: 1000, price: 4.9 },
    { id: "2000LIK", quantity: 2000, price: 8.9 },
    { id: "3000LIK", quantity: 3000, price: 12.9 },
    { id: "4000LIK", quantity: 4000, price: 16.9 },
    { id: "5000LIK", quantity: 5000, price: 19.9 },
  ],

  // ========================================
  // YOUTUBE VIEWS
  // ========================================
  YVIEWS_REGULAR: [
    { id: "250VIE", quantity: 250, price: 1.9 },
    { id: "500VIE", quantity: 500, price: 2.9 },
    { id: "1000VIE", quantity: 1000, price: 4.9 },
    { id: "2000VIE", quantity: 2000, price: 8.9 },
    { id: "3000VIE", quantity: 3000, price: 14.9 },
    { id: "5000VIE", quantity: 5000, price: 19.9 },
    { id: "7500VIE", quantity: 7500, price: 29.9 },
    { id: "10000VIE", quantity: 10000, price: 39.9 },
  ],

  // YSUBS for index.js
  YSUBS_REGULAR: [],

  // ========================================
  // TIKTOK
  // ========================================
  TFOL_REGULAR: [
    { id: "100TFOL", quantity: 100, price: 1.9 },
    { id: "250TFOL", quantity: 250, price: 2.9 },
    { id: "500TFOL", quantity: 500, price: 4.9 },
    { id: "1000TFOL", quantity: 1000, price: 8.9 },
    { id: "2000TFOL", quantity: 2000, price: 16.9 },
    { id: "5000TFOL", quantity: 5000, price: 39.0 },
    { id: "10000TFOL", quantity: 10000, price: 74.0 },
  ],
  TLIK_REGULAR: [],
  TVIEWS_REGULAR: [],

  // ========================================
  // FACEBOOK
  // ========================================
  FBLIK_REGULAR: [
    { id: "100FBLIK", quantity: 100, price: 0.9 },
    { id: "250FBLIK", quantity: 250, price: 1.9 },
    { id: "500FBLIK", quantity: 500, price: 3.2 },
    { id: "1000FBLIK", quantity: 1000, price: 4.9 },
    { id: "2500FBLIK", quantity: 2500, price: 11.9 },
    { id: "5000FBLIK", quantity: 5000, price: 19.9 },
    { id: "10000FBLIK", quantity: 10000, price: 37.0 },
  ],
};
