(function (ss, ex) {
  window.ldfdr =
    window.ldfdr ||
    function () {
      (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
    };
  (function (d, s) {
    fs = d.getElementsByTagName(s)[0];
    function ce(src) {
      var cs = d.createElement(s);
      cs.src = src;
      cs.async = 1;
      fs.parentNode.insertBefore(cs, fs);
    }
    ce(
      "https://sc.lfeeder.com/lftracker_v1_" +
        ss +
        (ex ? "_" + ex : "") +
        ".js",
    );
  })(document, "script");
})("p1e024BvYkK4GB6d");

(function () {
  var TRIAL_DATA = {
    Likes: {
      plans: {
        25: {
          price: 0.0,
          extraDefaults: {},
          types: {
            gradual: { price: 0.0, disabled: 0 },
            instant: { price: 0.0, disabled: 1 },
            "premium gradual": { price: 0.0, disabled: 1 },
            "premium instant": { price: 0.0, disabled: 1 },
          },
        },
        200: {
          price: 9.9,
          extraDefaults: { Impressions: 2500, Reach: 2500, Saves: 50 },
          types: {
            gradual: { price: 13.9, disabled: 0 },
            instant: { price: 9.9, disabled: 0 },
            "premium gradual": { price: 19.9, disabled: 0 },
            "premium instant": { price: 18.9, disabled: 0 },
          },
        },
        500: {
          price: 20.9,
          extraDefaults: { Impressions: 5000, Reach: 5000, Saves: 100 },
          types: {
            gradual: { price: 27.9, disabled: 0 },
            instant: { price: 20.9, disabled: 0 },
            "premium gradual": { price: 37.9, disabled: 0 },
            "premium instant": { price: 34.9, disabled: 0 },
          },
        },
        1000: {
          price: 37.9,
          extraDefaults: { Impressions: 10000, Reach: 7500, Saves: 150 },
          types: {
            gradual: { price: 50.9, disabled: 0 },
            instant: { price: 37.9, disabled: 0 },
            "premium gradual": { price: 72.9, disabled: 0 },
            "premium instant": { price: 62.9, disabled: 0 },
          },
        },
        2000: {
          price: 59.9,
          extraDefaults: { Impressions: 15000, Reach: 10000, Saves: 250 },
          types: {
            gradual: { price: 82.9, disabled: 0 },
            instant: { price: 59.9, disabled: 0 },
            "premium gradual": { price: 119.0, disabled: 0 },
            "premium instant": { price: 109.0, disabled: 0 },
          },
        },
        5000: {
          price: 119.0,
          extraDefaults: { Impressions: 25000, Reach: 15000, Saves: 500 },
          types: {
            gradual: { price: 179.0, disabled: 0 },
            instant: { price: 119.0, disabled: 0 },
            "premium gradual": { price: 209.0, disabled: 0 },
            "premium instant": { price: 189.0, disabled: 0 },
          },
        },
        10000: {
          price: 209.0,
          extraDefaults: { Impressions: 45000, Reach: 25000, Saves: 750 },
          types: {
            gradual: { price: 319.0, disabled: 0 },
            instant: { price: 209.0, disabled: 0 },
            "premium gradual": { price: 349.0, disabled: 0 },
            "premium instant": { price: 319.0, disabled: 0 },
          },
        },
        20000: {
          price: 349.0,
          extraDefaults: { Impressions: 80000, Reach: 50000, Saves: 1000 },
          types: {
            gradual: { price: 589.0, disabled: 0 },
            instant: { price: 349.0, disabled: 0 },
            "premium gradual": { price: 639.0, disabled: 0 },
            "premium instant": { price: 569.0, disabled: 0 },
          },
        },
        50000: {
          price: 699.0,
          extraDefaults: { Impressions: 120000, Reach: 80000, Saves: 1500 },
          types: {
            gradual: { price: 1090.0, disabled: 1 },
            instant: { price: 699.0, disabled: 0 },
            "premium gradual": { price: 1190.0, disabled: 0 },
            "premium instant": { price: 1090.0, disabled: 0 },
          },
        },
      },
      extra: {
        Impressions: [
          { count: 2500, price: 3.6 },
          { count: 5000, price: 7.5 },
          { count: 10000, price: 11.9 },
          { count: 15000, price: 19.9 },
          { count: 25000, price: 42.9 },
          { count: 45000, price: 78.9 },
          { count: 80000, price: 119.0 },
          { count: 120000, price: 199.0 },
        ],
        Reach: [
          { count: 2500, price: 3.6 },
          { count: 5000, price: 7.5 },
          { count: 7500, price: 11.9 },
          { count: 10000, price: 19.9 },
          { count: 15000, price: 42.9 },
          { count: 25000, price: 78.9 },
          { count: 50000, price: 119.0 },
          { count: 80000, price: 199.0 },
        ],
        Saves: [
          { count: 50, price: 3.6 },
          { count: 100, price: 7.5 },
          { count: 150, price: 11.9 },
          { count: 250, price: 19.9 },
          { count: 500, price: 42.9 },
          { count: 750, price: 78.9 },
          { count: 1000, price: 119.0 },
          { count: 1500, price: 199.0 },
        ],
      },
    },
    Views: {
      plans: {
        50: {
          price: 0.0,
          extraDefaults: {},
          types: {
            gradual: { price: 0.0, disabled: 1 },
            instant: { price: 0.0, disabled: 0 },
          },
        },
        200: {
          price: 3.6,
          extraDefaults: { Impressions: 2500, Reach: 2500, Saves: 50 },
          types: {
            gradual: { price: 5.2, disabled: 1 },
            instant: { price: 3.6, disabled: 0 },
          },
        },
        500: {
          price: 6.4,
          extraDefaults: { Impressions: 5000, Reach: 5000, Saves: 100 },
          types: {
            gradual: { price: 9.9, disabled: 1 },
            instant: { price: 6.4, disabled: 0 },
          },
        },
        1000: {
          price: 11.9,
          extraDefaults: { Impressions: 10000, Reach: 7500, Saves: 150 },
          types: {
            gradual: { price: 18.9, disabled: 1 },
            instant: { price: 11.9, disabled: 0 },
          },
        },
        2000: {
          price: 21.9,
          extraDefaults: { Impressions: 15000, Reach: 10000, Saves: 250 },
          types: {
            gradual: { price: 21.9, disabled: 1 },
            instant: { price: 21.9, disabled: 0 },
          },
        },
        5000: {
          price: 46.9,
          extraDefaults: { Impressions: 25000, Reach: 15000, Saves: 500 },
          types: {
            gradual: { price: 58.9, disabled: 1 },
            instant: { price: 46.9, disabled: 0 },
          },
        },
        10000: {
          price: 78.9,
          extraDefaults: { Impressions: 45000, Reach: 25000, Saves: 750 },
          types: {
            gradual: { price: 0.0, disabled: 1 },
            instant: { price: 78.9, disabled: 0 },
          },
        },
        20000: {
          price: 149.0,
          extraDefaults: { Impressions: 80000, Reach: 50000, Saves: 1000 },
          types: {
            gradual: { price: 179.0, disabled: 1 },
            instant: { price: 149.0, disabled: 0 },
          },
        },
        50000: {
          price: 299.0,
          extraDefaults: { Impressions: 160000, Reach: 100000, Saves: 2500 },
          types: {
            gradual: { price: 349.0, disabled: 1 },
            instant: { price: 299.0, disabled: 0 },
          },
        },
        100000: {
          price: 519.0,
          extraDefaults: { Impressions: 300000, Reach: 200000, Saves: 5000 },
          types: {
            gradual: { price: 669.0, disabled: 1 },
            instant: { price: 519.0, disabled: 0 },
          },
        },
        200000: {
          price: 429.0,
          extraDefaults: { Impressions: 200000, Reach: 200000 },
          types: {
            gradual: { price: 1190.0, disabled: 1 },
            instant: { price: 429.0, disabled: 1 },
          },
        },
      },
      extra: {
        Impressions: [
          { count: 2500, price: 3.6 },
          { count: 5000, price: 7.5 },
          { count: 10000, price: 11.9 },
          { count: 15000, price: 19.9 },
          { count: 25000, price: 42.9 },
          { count: 45000, price: 78.9 },
          { count: 80000, price: 119.0 },
          { count: 160000, price: 199.0 },
          { count: 300000, price: 359.0 },
          { count: 200000, price: 559.0 },
        ],
        Reach: [
          { count: 2500, price: 3.6 },
          { count: 5000, price: 7.5 },
          { count: 7500, price: 11.9 },
          { count: 10000, price: 19.9 },
          { count: 15000, price: 42.9 },
          { count: 25000, price: 78.9 },
          { count: 50000, price: 119.0 },
          { count: 100000, price: 199.0 },
          { count: 200000, price: 359.0 },
          { count: 200000, price: 559.0 },
        ],
        Saves: [
          { count: 50, price: 3.6 },
          { count: 100, price: 7.5 },
          { count: 150, price: 11.9 },
          { count: 250, price: 19.9 },
          { count: 500, price: 42.9 },
          { count: 750, price: 78.9 },
          { count: 1000, price: 119.0 },
          { count: 2500, price: 199.0 },
          { count: 5000, price: 359.0 },
        ],
      },
    },
    Comments: {
      plans: {
        25: {
          price: 19.9,
          extraDefaults: { Impressions: 5000, Reach: 2000, Saves: 25 },
          types: {
            random: { price: 19.9, disabled: 0 },
            custom: { price: 26.9, disabled: 0 },
            ai: { price: 42.9, disabled: 0 },
          },
        },
        50: {
          price: 34.9,
          extraDefaults: { Impressions: 10000, Reach: 4000, Saves: 50 },
          types: {
            random: { price: 34.9, disabled: 0 },
            custom: { price: 38.9, disabled: 0 },
            ai: { price: 74.9, disabled: 0 },
          },
        },
        100: {
          price: 54.9,
          extraDefaults: { Impressions: 20000, Reach: 8000, Saves: 100 },
          types: {
            random: { price: 54.9, disabled: 0 },
            custom: { price: 62.9, disabled: 0 },
            ai: { price: 119.0, disabled: 0 },
          },
        },
        200: {
          price: 98.9,
          extraDefaults: { Impressions: 40000, Reach: 16000, Saves: 200 },
          types: {
            random: { price: 98.9, disabled: 0 },
            custom: { price: 98.9, disabled: 0 },
            ai: { price: 199.0, disabled: 0 },
          },
        },
        500: {
          price: 239.0,
          extraDefaults: { Impressions: 100000, Reach: 40000, Saves: 500 },
          types: {
            random: { price: 239.0, disabled: 1 },
            custom: { price: 239.0, disabled: 1 },
            ai: { price: 399.0, disabled: 1 },
          },
        },
        1000: {
          price: 279.0,
          extraDefaults: { Impressions: 10000, Reach: 10000, Saves: 2000 },
          types: {
            random: { price: 399.0, disabled: 1 },
            custom: { price: 279.0, disabled: 1 },
            ai: { price: 719.0, disabled: 1 },
          },
        },
        2000: {
          price: 399.0,
          extraDefaults: { Impressions: 20000, Reach: 20000, Saves: 5000 },
          types: {
            random: { price: 719.0, disabled: 1 },
            custom: { price: 399.0, disabled: 1 },
            ai: { price: 1190.0, disabled: 1 },
          },
        },
        5000: {
          price: 789.0,
          extraDefaults: { Impressions: 50000, Reach: 50000, Saves: 10000 },
          types: {
            random: { price: 1290.0, disabled: 1 },
            custom: { price: 789.0, disabled: 1 },
            ai: { price: 2390.0, disabled: 1 },
          },
        },
      },
      extra: {
        Impressions: [
          { count: 5000, price: 7.5 },
          { count: 10000, price: 11.9 },
          { count: 20000, price: 19.9 },
          { count: 40000, price: 34.9 },
          { count: 100000, price: 66.9 },
          { count: 10000, price: 70.9 },
          { count: 20000, price: 119.0 },
          { count: 50000, price: 199.0 },
        ],
        Reach: [
          { count: 2000, price: 7.5 },
          { count: 4000, price: 11.9 },
          { count: 8000, price: 19.9 },
          { count: 16000, price: 34.9 },
          { count: 40000, price: 66.9 },
          { count: 10000, price: 70.9 },
          { count: 20000, price: 119.0 },
          { count: 50000, price: 199.0 },
        ],
        Saves: [
          { count: 25, price: 7.5 },
          { count: 50, price: 11.9 },
          { count: 100, price: 19.9 },
          { count: 200, price: 34.9 },
          { count: 500, price: 66.9 },
          { count: 2000, price: 58.9 },
          { count: 5000, price: 119.0 },
          { count: 10000, price: 219.0 },
        ],
      },
    },
    Followers: {
      plans: {
        10: {
          price: 0.0,
          extraDefaults: {},
          types: {
            normal: { price: 0.0, disabled: 0 },
            premium: { price: 0.0, disabled: 1 },
          },
        },
        100: {
          price: 5.2,
          extraDefaults: {},
          types: {
            normal: {
              price: 5.2,
              disabled: 0,
              guarantee: [
                { days: 30, price: 0.5 },
                { days: 60, price: 0.8 },
                { days: 90, price: 1.3 },
                { days: 180, price: 2.0 },
                { days: 360, price: 3.3 },
              ],
            },
            premium: {
              price: 8.7,
              disabled: 0,
              guarantee: [
                { days: 30, price: 0.9 },
                { days: 60, price: 1.2 },
                { days: 90, price: 2.2 },
                { days: 180, price: 3.2 },
                { days: 360, price: 6.2 },
              ],
            },
          },
        },
        250: {
          price: 10.9,
          extraDefaults: {},
          types: {
            normal: {
              price: 10.9,
              disabled: 0,
              guarantee: [
                { days: 30, price: 1.0 },
                { days: 60, price: 2.0 },
                { days: 90, price: 3.0 },
                { days: 180, price: 4.0 },
                { days: 360, price: 7.0 },
              ],
            },
            premium: {
              price: 17.9,
              disabled: 0,
              guarantee: [
                { days: 30, price: 2.0 },
                { days: 60, price: 3.0 },
                { days: 90, price: 5.0 },
                { days: 180, price: 8.0 },
                { days: 360, price: 12.0 },
              ],
            },
          },
        },
        500: {
          price: 19.9,
          extraDefaults: {},
          types: {
            normal: {
              price: 19.9,
              disabled: 0,
              guarantee: [
                { days: 30, price: 1.0 },
                { days: 60, price: 3.0 },
                { days: 90, price: 4.0 },
                { days: 180, price: 7.0 },
                { days: 360, price: 12.0 },
              ],
            },
            premium: {
              price: 42.9,
              disabled: 0,
              guarantee: [
                { days: 30, price: 5.0 },
                { days: 60, price: 8.0 },
                { days: 90, price: 11.0 },
                { days: 180, price: 18.0 },
                { days: 360, price: 29.0 },
              ],
            },
          },
        },
        1000: {
          price: 35.9,
          extraDefaults: {},
          types: {
            normal: {
              price: 35.9,
              disabled: 0,
              guarantee: [
                { days: 30, price: 3.0 },
                { days: 60, price: 6.0 },
                { days: 90, price: 9.0 },
                { days: 180, price: 14.0 },
                { days: 360, price: 23.0 },
              ],
            },
            premium: {
              price: 78.9,
              disabled: 0,
              guarantee: [
                { days: 30, price: 8.0 },
                { days: 60, price: 14.0 },
                { days: 90, price: 20.0 },
                { days: 180, price: 30.1 },
                { days: 360, price: 50.1 },
              ],
            },
          },
        },
        2000: {
          price: 66.9,
          extraDefaults: {},
          types: {
            normal: {
              price: 66.9,
              disabled: 0,
              guarantee: [
                { days: 30, price: 7.0 },
                { days: 60, price: 12.0 },
                { days: 90, price: 17.0 },
                { days: 180, price: 27.0 },
                { days: 360, price: 42.1 },
              ],
            },
            premium: {
              price: 139.0,
              disabled: 0,
              guarantee: [
                { days: 30, price: 10.0 },
                { days: 60, price: 20.0 },
                { days: 90, price: 30.0 },
                { days: 180, price: 50.0 },
                { days: 360, price: 90.0 },
              ],
            },
          },
        },
        5000: {
          price: 149.0,
          extraDefaults: {},
          types: {
            normal: {
              price: 149.0,
              disabled: 0,
              guarantee: [
                { days: 30, price: 20.0 },
                { days: 60, price: 30.0 },
                { days: 90, price: 40.0 },
                { days: 180, price: 60.0 },
                { days: 360, price: 100.0 },
              ],
            },
            premium: {
              price: 349.0,
              disabled: 0,
              guarantee: [
                { days: 30, price: 40.0 },
                { days: 60, price: 60.0 },
                { days: 90, price: 90.0 },
                { days: 180, price: 150.0 },
                { days: 360, price: 230.0 },
              ],
            },
          },
        },
        10000: {
          price: 269.0,
          extraDefaults: {},
          types: {
            normal: {
              price: 269.0,
              disabled: 0,
              guarantee: [
                { days: 30, price: 20.0 },
                { days: 60, price: 40.0 },
                { days: 90, price: 60.0 },
                { days: 180, price: 100.0 },
                { days: 360, price: 170.0 },
              ],
            },
            premium: {
              price: 509.0,
              disabled: 0,
              guarantee: [
                { days: 30, price: 50.0 },
                { days: 60, price: 90.0 },
                { days: 90, price: 130.0 },
                { days: 180, price: 210.0 },
                { days: 360, price: 340.0 },
              ],
            },
          },
        },
        20000: {
          price: 509.0,
          extraDefaults: {},
          types: {
            normal: {
              price: 509.0,
              disabled: 0,
              guarantee: [
                { days: 30, price: 50.0 },
                { days: 60, price: 90.0 },
                { days: 90, price: 130.0 },
                { days: 180, price: 210.0 },
                { days: 360, price: 340.0 },
              ],
            },
            premium: {
              price: 989.0,
              disabled: 0,
              guarantee: [
                { days: 30, price: 101.0 },
                { days: 60, price: 201.0 },
                { days: 90, price: 201.0 },
                { days: 180, price: 401.0 },
                { days: 360, price: 601.0 },
              ],
            },
          },
        },
        50000: {
          price: 949.0,
          extraDefaults: {},
          types: {
            normal: {
              price: 949.0,
              disabled: 1,
              guarantee: [
                { days: 30, price: 141.0 },
                { days: 60, price: 141.0 },
                { days: 90, price: 241.0 },
                { days: 180, price: 341.0 },
                { days: 360, price: 641.0 },
              ],
            },
            premium: {
              price: 5890.0,
              disabled: 1,
              guarantee: [
                { days: 30, price: 600.0 },
                { days: 60, price: 1000.0 },
                { days: 90, price: 1500.0 },
                { days: 180, price: 2400.0 },
                { days: 360, price: 3900.0 },
              ],
            },
          },
        },
      },
      extra: {},
    },
    "Auto-Likes": {
      plans: {
        1000: {
          price: 46.9,
          extraDefaults: { Impressions: 1000, Reach: 1000, Saves: 100 },
          types: {
            gradual: { price: 50.9, disabled: 0 },
            instant: { price: 46.9, disabled: 0 },
            "premium gradual": { price: 90.9, disabled: 0 },
            "premium instant": { price: 78.9, disabled: 0 },
          },
        },
        2000: {
          price: 74.9,
          extraDefaults: { Impressions: 2000, Reach: 2000, Saves: 200 },
          types: {
            gradual: { price: 82.9, disabled: 0 },
            instant: { price: 74.9, disabled: 0 },
            "premium gradual": { price: 159.0, disabled: 0 },
            "premium instant": { price: 139.0, disabled: 0 },
          },
        },
        5000: {
          price: 149.0,
          extraDefaults: { Impressions: 5000, Reach: 5000, Saves: 500 },
          types: {
            gradual: { price: 179.0, disabled: 0 },
            instant: { price: 149.0, disabled: 0 },
            "premium gradual": { price: 259.0, disabled: 0 },
            "premium instant": { price: 239.0, disabled: 0 },
          },
        },
        10000: {
          price: 259.0,
          extraDefaults: { Impressions: 10000, Reach: 10000, Saves: 1000 },
          types: {
            gradual: { price: 319.0, disabled: 0 },
            instant: { price: 259.0, disabled: 0 },
            "premium gradual": { price: 439.0, disabled: 0 },
            "premium instant": { price: 399.0, disabled: 0 },
          },
        },
        20000: {
          price: 429.0,
          extraDefaults: { Impressions: 20000, Reach: 20000, Saves: 2000 },
          types: {
            gradual: { price: 589.0, disabled: 0 },
            instant: { price: 429.0, disabled: 0 },
            "premium gradual": { price: 789.0, disabled: 0 },
            "premium instant": { price: 719.0, disabled: 0 },
          },
        },
        50000: {
          price: 869.0,
          extraDefaults: { Impressions: 50000, Reach: 50000, Saves: 5000 },
          types: {
            gradual: { price: 1090.0, disabled: 0 },
            instant: { price: 869.0, disabled: 0 },
            "premium gradual": { price: 1490.0, disabled: 0 },
            "premium instant": { price: 1390.0, disabled: 0 },
          },
        },
        100000: {
          price: 1490.0,
          extraDefaults: { Impressions: 100000, Reach: 100000, Saves: 10000 },
          types: {
            gradual: { price: 1590.0, disabled: 0 },
            instant: { price: 1490.0, disabled: 0 },
            "premium gradual": { price: 1990.0, disabled: 0 },
            "premium instant": { price: 1790.0, disabled: 0 },
          },
        },
        200000: {
          price: 2790.0,
          extraDefaults: { Impressions: 200000, Reach: 200000, Saves: 20000 },
          types: {
            gradual: { price: 2990.0, disabled: 0 },
            instant: { price: 2790.0, disabled: 0 },
            "premium gradual": { price: 3590.0, disabled: 0 },
            "premium instant": { price: 3490.0, disabled: 0 },
          },
        },
        500000: {
          price: 5890.0,
          extraDefaults: { Impressions: 500000, Reach: 500000, Saves: 50000 },
          types: {
            gradual: { price: 6290.0, disabled: 0 },
            instant: { price: 5890.0, disabled: 0 },
            "premium gradual": { price: 7190.0, disabled: 0 },
            "premium instant": { price: 6990.0, disabled: 0 },
          },
        },
      },
      extra: {
        Impressions: [
          { count: 1000, price: 13.9 },
          { count: 2000, price: 23.9 },
          { count: 5000, price: 38.9 },
          { count: 10000, price: 74.9 },
          { count: 20000, price: 119.0 },
          { count: 50000, price: 239.0 },
          { count: 100000, price: 399.0 },
          { count: 200000, price: 639.0 },
          { count: 500000, price: 1190.0 },
        ],
        Reach: [
          { count: 1000, price: 13.9 },
          { count: 2000, price: 23.9 },
          { count: 5000, price: 38.9 },
          { count: 10000, price: 74.9 },
          { count: 20000, price: 119.0 },
          { count: 50000, price: 239.0 },
          { count: 100000, price: 399.0 },
          { count: 200000, price: 639.0 },
          { count: 500000, price: 1190.0 },
        ],
        Saves: [
          { count: 100, price: 3.6 },
          { count: 200, price: 6.0 },
          { count: 500, price: 11.9 },
          { count: 1000, price: 21.9 },
          { count: 2000, price: 38.9 },
          { count: 5000, price: 78.9 },
          { count: 10000, price: 119.0 },
          { count: 20000, price: 199.0 },
          { count: 50000, price: 399.0 },
        ],
      },
    },
    "Auto-Likes Subs": {
      plans: {
        50: {
          price: 38.9,
          extraDefaults: { Impressions: 100, Reach: 100, Saves: 20 },
          types: {
            gradual: { price: 50.9, disabled: 0 },
            instant: { price: 38.9, disabled: 0 },
            "premium gradual": { price: 70.9, disabled: 0 },
            "premium instant": { price: 58.9, disabled: 0 },
          },
        },
        100: {
          price: 74.9,
          extraDefaults: { Impressions: 250, Reach: 250, Saves: 50 },
          types: {
            gradual: { price: 86.9, disabled: 0 },
            instant: { price: 74.9, disabled: 0 },
            "premium gradual": { price: 129.0, disabled: 0 },
            "premium instant": { price: 119.0, disabled: 0 },
          },
        },
        250: {
          price: 119.0,
          extraDefaults: { Impressions: 500, Reach: 500, Saves: 75 },
          types: {
            gradual: { price: 129.0, disabled: 0 },
            instant: { price: 119.0, disabled: 0 },
            "premium gradual": { price: 169.0, disabled: 0 },
            "premium instant": { price: 159.0, disabled: 0 },
          },
        },
        500: {
          price: 189.0,
          extraDefaults: { Impressions: 750, Reach: 750, Saves: 100 },
          types: {
            gradual: { price: 199.0, disabled: 0 },
            instant: { price: 189.0, disabled: 0 },
            "premium gradual": { price: 239.0, disabled: 0 },
            "premium instant": { price: 229.0, disabled: 0 },
          },
        },
        750: {
          price: 239.0,
          extraDefaults: { Impressions: 1000, Reach: 1000, Saves: 200 },
          types: {
            gradual: { price: 249.0, disabled: 0 },
            instant: { price: 239.0, disabled: 0 },
            "premium gradual": { price: 289.0, disabled: 0 },
            "premium instant": { price: 279.0, disabled: 0 },
          },
        },
        1000: {
          price: 319.0,
          extraDefaults: { Impressions: 2000, Reach: 2000, Saves: 300 },
          types: {
            gradual: { price: 329.0, disabled: 0 },
            instant: { price: 319.0, disabled: 0 },
            "premium gradual": { price: 369.0, disabled: 0 },
            "premium instant": { price: 359.0, disabled: 0 },
          },
        },
        2000: {
          price: 599.0,
          extraDefaults: { Impressions: 3000, Reach: 3000, Saves: 500 },
          types: {
            gradual: { price: 619.0, disabled: 0 },
            instant: { price: 599.0, disabled: 0 },
            "premium gradual": { price: 699.0, disabled: 0 },
            "premium instant": { price: 679.0, disabled: 0 },
          },
        },
        3000: {
          price: 749.0,
          extraDefaults: { Impressions: 5000, Reach: 5000, Saves: 750 },
          types: {
            gradual: { price: 789.0, disabled: 0 },
            instant: { price: 749.0, disabled: 0 },
            "premium gradual": { price: 869.0, disabled: 0 },
            "premium instant": { price: 829.0, disabled: 0 },
          },
        },
        5000: {
          price: 1190.0,
          extraDefaults: { Impressions: 10000, Reach: 10000, Saves: 1000 },
          types: {
            gradual: { price: 1190.0, disabled: 0 },
            instant: { price: 1190.0, disabled: 0 },
            "premium gradual": { price: 1290.0, disabled: 0 },
            "premium instant": { price: 1190.0, disabled: 0 },
          },
        },
        10000: {
          price: 1990.0,
          extraDefaults: { Impressions: 10000, Reach: 10000, Saves: 2000 },
          types: {
            gradual: { price: 2090.0, disabled: 0 },
            instant: { price: 1990.0, disabled: 0 },
            "premium gradual": { price: 2390.0, disabled: 0 },
            "premium instant": { price: 2390.0, disabled: 0 },
          },
        },
      },
      extra: {
        Impressions: [
          { count: 100, price: 38.9 },
          { count: 250, price: 78.9 },
          { count: 500, price: 119.0 },
          { count: 750, price: 199.0 },
          { count: 1000, price: 239.0 },
          { count: 2000, price: 399.0 },
          { count: 3000, price: 559.0 },
          { count: 5000, price: 789.0 },
          { count: 10000, price: 1590.0 },
          { count: 10000, price: 1590.0 },
        ],
        Reach: [
          { count: 100, price: 38.9 },
          { count: 250, price: 78.9 },
          { count: 500, price: 119.0 },
          { count: 750, price: 199.0 },
          { count: 1000, price: 239.0 },
          { count: 2000, price: 399.0 },
          { count: 3000, price: 559.0 },
          { count: 5000, price: 789.0 },
          { count: 10000, price: 1590.0 },
          { count: 10000, price: 1590.0 },
        ],
        Saves: [
          { count: 20, price: 11.9 },
          { count: 50, price: 19.9 },
          { count: 75, price: 30.9 },
          { count: 100, price: 38.9 },
          { count: 200, price: 74.9 },
          { count: 300, price: 109.0 },
          { count: 500, price: 159.0 },
          { count: 750, price: 239.0 },
          { count: 1000, price: 299.0 },
          { count: 2000, price: 579.0 },
        ],
      },
    },
  };
  try {
    window.TRIAL_DATA = TRIAL_DATA;
  } catch (e) {}
  var BASE_CHANCE = {
    Likes: {
      instant: {
        0: 0,
        25: 0,
        100: 2,
        200: 4,
        500: 11,
        1000: 17,
        2000: 22,
        5000: 25,
        10000: 27,
        20000: 29,
        50000: 31,
        100000: 33,
      },
      gradual: {
        0: 0,
        25: 0,
        100: 4,
        200: 7,
        500: 17,
        1000: 26,
        2000: 34,
        5000: 40,
        10000: 44,
        20000: 48,
        50000: 51,
        100000: 53,
      },
    },
    Views: {
      instant: {
        50: 0,
        200: 3,
        500: 7,
        1000: 13,
        2000: 16,
        5000: 19,
        10000: 21,
        20000: 23,
        50000: 24,
        100000: 26,
        200000: 28,
      },
      gradual: {},
    },
    Comments: {
      custom: {
        25: 6,
        50: 13,
        100: 19,
        200: 24,
        500: 27,
        1000: 29,
        2000: 30,
        5000: 31,
      },
      random: {
        25: 6,
        50: 13,
        100: 19,
        200: 24,
        500: 27,
        1000: 29,
        2000: 30,
        5000: 31,
      },
    },
  };
  var EXTRA_CHANCE = {
    Reach: {
      0: 0,
      200: 1,
      500: 2,
      1000: 4,
      2000: 6,
      5000: 7,
      10000: 8,
      20000: 9,
      50000: 10,
      100000: 11,
      200000: 12,
    },
    Impressions: {
      0: 0,
      200: 1,
      500: 1,
      1000: 2,
      2000: 3,
      5000: 4,
      10000: 5,
      20000: 5,
      50000: 6,
      100000: 6,
      200000: 7,
    },
    Saves: {
      0: 0,
      50: 2,
      100: 3,
      200: 4,
      500: 5,
      1000: 6,
      2000: 6,
      5000: 7,
      10000: 8,
    },
  };

  function parseCountText(text) {
    var digits = String(text || "").replace(/[^0-9]/g, "");
    return digits ? parseInt(digits, 10) : 0;
  }

  function parsePriceText(text) {
    var matches = String(text || "").match(/(\d+(?:[.,]\d+)?)/g);
    if (!matches || !matches.length) {
      return 0;
    }
    var raw = matches[matches.length - 1].replace(",", ".");
    var num = parseFloat(raw);
    return isNaN(num) ? 0 : num;
  }

  function formatPrice(num) {
    var val = Number(num || 0);
    return val.toFixed(2);
  }

  function formatCost(num) {
    var val = Number(num || 0);
    return val.toFixed(2);
  }

  function isVisible(el) {
    return !!(el && (el.offsetParent || el.getClientRects().length));
  }

  function detectService() {
    var box = document.querySelector(".box");
    if (!box) return null;
    if (box.querySelector('[id$="FOL"], [id$="FFOL"]')) return "Followers";
    if (box.querySelector('[id$="APLIK"]')) return "Auto-Likes";
    if (box.querySelector('[id$="ASLIK"]')) return "Auto-Likes Subs";
    if (box.querySelector('[id$="VIE"], [id$="FVIE"]')) return "Views";
    if (box.querySelector('[id$="COM"]')) return "Comments";
    if (box.querySelector('[id$="LIK"], [id$="FLIK"]')) return "Likes";
    return null;
  }

  function defaultOrderType(service) {
    switch (service) {
      case "Comments":
        return "random";
      case "Followers":
        return "normal";
      case "Auto-Likes":
      case "Auto-Likes Subs":
      case "Likes":
      case "Views":
      default:
        return "instant";
    }
  }

  function getPlan(service, count) {
    var data = TRIAL_DATA[service];
    if (!data || !data.plans) return null;
    return data.plans[String(count)] || null;
  }

  function getPlanTypeKey(service, orderType) {
    if (
      (service === "Likes" ||
        service === "Auto-Likes" ||
        service === "Auto-Likes Subs") &&
      orderType === "gradual"
    ) {
      return "premium instant";
    }
    return orderType;
  }

  function getPlanType(plan, service, orderType) {
    if (!plan || !plan.types) return null;
    var key = getPlanTypeKey(service, orderType);
    return plan.types[key] || null;
  }

  function getPlanPrice(plan, service, orderType) {
    if (!plan) return 0;
    var type = getPlanType(plan, service, orderType);
    if (type && typeof type.price === "number") {
      return type.price;
    }
    return plan.price || 0;
  }

  function isPlanDisabled(plan, service, orderType) {
    var type = getPlanType(plan, service, orderType);
    if (type && typeof type.disabled !== "undefined") {
      var price = Number(type.price || 0);
      if (!isNaN(price) && price === 0) {
        return false;
      }
      return !!type.disabled;
    }
    return false;
  }

  function buildExtraLists(data) {
    var extra = (data && data.extra) || {};
    return {
      Reach: [{ count: 0, price: 0 }].concat(extra.Reach || []),
      Impressions: [{ count: 0, price: 0 }].concat(extra.Impressions || []),
      Saves: [{ count: 0, price: 0 }].concat(extra.Saves || []),
    };
  }

  function updateCardPrice(card, price) {
    var priceLine = card.querySelector(".box__service-name-mt");
    if (priceLine) {
      priceLine.textContent = "For " + formatPrice(price);
      return;
    }
    var priceEl = card.querySelector(".box__service-name");
    if (!priceEl) return;
    var span = priceEl.querySelector("span");
    var label = span ? span.textContent.trim() : "";
    if (!label) label = "Likes";
    priceEl.innerHTML = "<span>" + label + "</span> For " + formatPrice(price);
  }

  function initTrial() {
    var trial = document.querySelector(".trial");
    if (!trial) return;
    // Allow pages to opt out of the global trial initializer by setting
    // `window.SKIP_GLOBAL_TRIAL = true` before `site.js` is loaded.
    if (typeof window !== "undefined" && window.SKIP_GLOBAL_TRIAL) return;
    var service = detectService();
    if (!service || !TRIAL_DATA[service]) return;

    var data = TRIAL_DATA[service];
    var extraLists = buildExtraLists(data);
    var cards = Array.prototype.slice.call(
      document.querySelectorAll(".box .box__card"),
    );
    if (!cards.length) return;

    var state = {
      service: service,
      orderType: defaultOrderType(service),
      selectedCount: 0,
      selectedCard: null,
      basePrice: 0,
      extrasIndex: { Reach: 0, Impressions: 0, Saves: 0 },
      guaranteeMode: "",
      guaranteeIndex: 0,
      guaranteeDays: 0,
      guaranteeOptions: [],
    };
    var extrasInitialized = false;

    var ui = {
      costEl: trial.querySelector(".trial__text-cost"),
      buyBtn: trial.querySelector(".trial__buy"),
      percentEl: trial.querySelector(".trial__percent"),
      percentIcons: trial.querySelectorAll(
        ".trial__percent-icon .trial__count-number",
      ),
      percentLabels: trial.querySelectorAll(
        ".trial__percent-icon .trial__percent-icon-text",
      ),
      countBlocks: trial.querySelectorAll(".trial__count-block .trial__count"),
    };

    function getCardCount(card) {
      var countEl =
        card.querySelector(".box__count") ||
        card.querySelector(".quantity__count");
      var fromText = parseCountText(countEl ? countEl.textContent : "");
      if (fromText) return fromText;
      // fallback: try to extract leading digits from an id inside the card (e.g. "5000VIE")
      try {
        var idEl = card.querySelector("[id]");
        if (idEl && idEl.id) {
          var m = String(idEl.id).match(/^(\d{1,})/);
          if (m && m[1]) return parseInt(m[1], 10);
        }
      } catch (e) {}
      return 0;
    }

    function getCardPrice(card) {
      var priceEl =
        card.querySelector(".box__service-name-mt") ||
        card.querySelector(".box__service-name");
      return parsePriceText(priceEl ? priceEl.textContent : "");
    }

    function updateCardPricesForType() {
      cards.forEach(function (card) {
        var count = getCardCount(card);
        if (!count) return;
        var plan = getPlan(service, count);
        if (!plan) return;
        // choose orderType depending on which box this card belongs to
        var cardOrderType = state.orderType;
        try {
          if (card.closest && card.closest(".box_premium")) {
            if (service === "Likes" || service === "Views") {
              cardOrderType = "gradual";
            } else if (service === "Followers") {
              cardOrderType = "premium";
            }
          } else if (card.closest && card.closest(".box_regular")) {
            if (service === "Likes" || service === "Views") {
              cardOrderType = "instant";
            } else if (service === "Followers") {
              cardOrderType = "normal";
            }
          }
        } catch (e) {}
        updateCardPrice(card, getPlanPrice(plan, service, cardOrderType));
      });
    }

    function syncOrderTypeFromTabs() {
      var regularBox = document.querySelector(".box_regular");
      var premiumBox = document.querySelector(".box_premium");
      if (!regularBox || !premiumBox) return;
      if (service === "Likes" || service === "Views") {
        if (isVisible(regularBox)) {
          state.orderType = "instant";
        } else if (isVisible(premiumBox)) {
          state.orderType = "gradual";
        }
      } else if (service === "Followers") {
        if (isVisible(regularBox)) {
          state.orderType = "normal";
        } else if (isVisible(premiumBox)) {
          state.orderType = "premium";
        }
      }
    }

    function setExtrasFromDefaults(count) {
      var plan = getPlan(service, count);
      var defaults = (plan && plan.extraDefaults) || {};
      ["Reach", "Impressions", "Saves"].forEach(function (key) {
        var target = defaults[key];
        var list = extraLists[key] || [];
        var idx = 0;
        if (typeof target === "number") {
          for (var i = 0; i < list.length; i += 1) {
            if (list[i].count === target) {
              idx = i;
              break;
            }
          }
        }
        state.extrasIndex[key] = idx;
      });
    }

    function updateExtraBlock(block, key) {
      // If block is explicitly disabled, force its displayed values to zero
      // and skip further updates so Subscribers/Comments stay at 0.
      if (
        block &&
        block.classList &&
        block.classList.contains("trial__count-disabled")
      ) {
        var desktopDisabled = block.querySelectorAll(
          ".trial__count-text-desktop",
        );
        if (desktopDisabled && desktopDisabled.length)
          desktopDisabled[0].textContent = 0;
        var mobileDisabled = block.querySelector(".trial__count-text-mobile");
        if (mobileDisabled) mobileDisabled.textContent = "0 " + (key || "");
        return;
      }
      var idx = state.extrasIndex[key];
      var list = extraLists[key] || [{ count: 0, price: 0 }];
      var item = list[idx] || list[0];
      var count = item.count || 0;
      var desktop = block.querySelectorAll(".trial__count-text-desktop");
      if (desktop && desktop.length) {
        desktop[0].textContent = count;
      }
      var mobile = block.querySelector(".trial__count-text-mobile");
      if (mobile) {
        mobile.textContent = count + " " + key;
      }
      // Do not toggle classes on the .trial__count block itself anymore.

      var minus = block.querySelector(".trial__cirkul-minus");
      var cirkuls = block.querySelectorAll(".trial__cirkul");
      var plus = cirkuls.length ? cirkuls[cirkuls.length - 1] : null;
      if (minus) {
        if (idx === 0) {
          minus.classList.add("trial__cirkul-disabled");
        } else {
          minus.classList.remove("trial__cirkul-disabled");
        }
      }
      if (plus) {
        if (idx >= list.length - 1) {
          plus.classList.add("trial__cirkul-disabled");
        } else {
          plus.classList.remove("trial__cirkul-disabled");
        }
      }
    }

    function updateExtrasUI() {
      if (service === "Followers") return;
      var titles = ["Reach", "Impressions", "Saves"];
      titles.forEach(function (key, idx) {
        var block = ui.countBlocks[idx];
        if (!block) return;
        updateExtraBlock(block, key);
      });
    }

    function setGuaranteeOptions(plan) {
      var type = getPlanType(plan, service, state.orderType);
      state.guaranteeOptions =
        type && type.guarantee ? type.guarantee.slice() : [];
      state.guaranteeMode = "";
      state.guaranteeIndex = 0;
      state.guaranteeDays = 0;
    }

    function updateGuaranteeUI() {
      if (service !== "Followers") return;
      var blocks = ui.countBlocks;
      if (!blocks || blocks.length < 3) return;
      var options = state.guaranteeOptions || [];
      var hasGuarantee = options.length > 0;
      var first = options[0] || { days: 0, price: 0 };
      var second = options[1] || { days: 0, price: 0 };
      var rest = options.slice(2);
      var third = rest[state.guaranteeIndex] || { days: 0, price: 0 };

      function fillBlock(block, days) {
        var desktop = block.querySelectorAll(".trial__count-text-desktop");
        if (desktop && desktop.length) {
          desktop[0].textContent = days;
        }
        var mobile = block.querySelector(".trial__count-text-mobile");
        if (mobile) {
          mobile.textContent = days + " Days Guarantee";
        }
      }

      fillBlock(blocks[0], first.days || 0);
      fillBlock(blocks[1], second.days || 0);
      fillBlock(blocks[2], third.days || 0);

      // Do not modify classes on the .trial__count blocks; keep their
      // visual state controlled by CSS or higher-level code.

      var minus = blocks[2].querySelector(".trial__cirkul-minus");
      var cirkuls = blocks[2].querySelectorAll(".trial__cirkul");
      var plus = cirkuls.length ? cirkuls[cirkuls.length - 1] : null;
      if (minus) {
        if (state.guaranteeMode !== "third" || state.guaranteeIndex <= 0) {
          minus.classList.add("trial__cirkul-disabled");
        } else {
          minus.classList.remove("trial__cirkul-disabled");
        }
      }
      if (plus) {
        if (
          state.guaranteeMode !== "third" ||
          state.guaranteeIndex >= rest.length - 1
        ) {
          plus.classList.add("trial__cirkul-disabled");
        } else {
          plus.classList.remove("trial__cirkul-disabled");
        }
      }
      // update descriptive trial period text to reflect selected guarantee
      try {
        var periodEl = document.querySelector(".trial__period-text");
        if (periodEl) {
          if (state.guaranteeDays && state.guaranteeDays > 0) {
            periodEl.textContent =
              "Your order will be guaranteed for " +
              state.guaranteeDays +
              " days. We will refill any lost followers during this period.";
          } else {
            periodEl.textContent =
              "Please choose the guarantee to be refilled with any number of followers in case of an Instagram update.";
          }
        }
      } catch (e) {}
    }

    function computePercent() {
      if (!state.selectedCount) return 0;
      var pct = 0;
      ["Reach", "Impressions", "Saves"].forEach(function (key) {
        var idx = state.extrasIndex[key];
        var item = (extraLists[key] || [])[idx];
        var count = item ? item.count : 0;
        if (
          EXTRA_CHANCE[key] &&
          typeof EXTRA_CHANCE[key][count] !== "undefined"
        ) {
          pct += EXTRA_CHANCE[key][count] || 0;
        }
      });
      var base = BASE_CHANCE[state.service];
      if (base && base[state.orderType]) {
        pct += base[state.orderType][state.selectedCount] || 0;
      }
      return pct;
    }

    function updatePercentUI() {
      if (!ui.percentEl || service === "Followers") return;
      var pct = computePercent();
      ui.percentEl.textContent = pct + "%";

      if (ui.percentLabels && ui.percentLabels.length) {
        if (service === "Comments" || service === "Views") {
          ui.percentLabels[0].textContent = service;
        } else {
          ui.percentLabels[0].textContent = "Likes";
        }
      }

      if (ui.percentIcons && ui.percentIcons.length >= 4) {
        ui.percentIcons[0].textContent = state.selectedCount || 0;
        ui.percentIcons[1].textContent =
          (extraLists.Reach[state.extrasIndex.Reach] || {}).count || 0;
        ui.percentIcons[2].textContent =
          (extraLists.Impressions[state.extrasIndex.Impressions] || {}).count ||
          0;
        ui.percentIcons[3].textContent =
          (extraLists.Saves[state.extrasIndex.Saves] || {}).count || 0;
      }
    }

    function updateCostUI() {
      if (!ui.costEl) return;
      var total = state.basePrice;
      if (service === "Followers") {
        var plan = getPlan(service, state.selectedCount);
        var type = getPlanType(plan, service, state.orderType);
        var options = type && type.guarantee ? type.guarantee : [];
        var selected = options.find(function (opt) {
          return opt.days === state.guaranteeDays;
        });
        if (selected && typeof selected.price === "number") {
          total += selected.price;
        }
      } else {
        total += (extraLists.Reach[state.extrasIndex.Reach] || {}).price || 0;
        total +=
          (extraLists.Impressions[state.extrasIndex.Impressions] || {}).price ||
          0;
        total += (extraLists.Saves[state.extrasIndex.Saves] || {}).price || 0;
      }
      ui.costEl.textContent = "$" + formatCost(total) + " Cost";

      if (ui.buyBtn) {
        var plan = getPlan(service, state.selectedCount);
        var disabled = !plan || isPlanDisabled(plan, service, state.orderType);
        ui.buyBtn.disabled = disabled;
        if (disabled) {
          ui.buyBtn.classList.remove("trial__buy-active");
        } else {
          ui.buyBtn.classList.add("trial__buy-active");
        }
      }
    }

    function refreshUI() {
      updateExtrasUI();
      updateGuaranteeUI();
      updatePercentUI();
      updateCostUI();
    }

    function selectCard(card) {
      if (!card) return;
      // Do not allow selecting stopped / disabled cards
      if (card.querySelector && card.querySelector(".box__stopped-block"))
        return;
      cards.forEach(function (el) {
        el.classList.remove("trial-selected");
      });
      card.classList.add("trial-selected");
      state.selectedCard = card;
      state.selectedCount = getCardCount(card);
      var plan = getPlan(service, state.selectedCount);
      if (plan) {
        state.basePrice = getPlanPrice(plan, service, state.orderType);
      } else {
        state.basePrice = getCardPrice(card);
      }
      if (plan) {
        updateCardPrice(card, state.basePrice);
        // Apply extras defaults only on the first selection (initialization).
        // After the user interacts with extras (+/-), we must not overwrite their choices
        // when switching cards. Guard with `extrasInitialized`.
        if (!extrasInitialized) {
          setExtrasFromDefaults(state.selectedCount);
          extrasInitialized = true;
        }
        if (service === "Followers") {
          setGuaranteeOptions(plan);
        }
      }
      refreshUI();
    }

    function setupExtraControls() {
      if (service === "Followers") return;
      var titles = ["Reach", "Impressions", "Saves"];
      titles.forEach(function (key, idx) {
        var block = ui.countBlocks[idx];
        if (!block) return;
        // If the block is explicitly marked disabled, don't wire its controls.
        if (
          block.classList &&
          (block.classList.contains("trial__count-disabled") ||
            block.dataset.disabled)
        )
          return;
        var minus = block.querySelector(".trial__cirkul-minus");
        var cirkuls = block.querySelectorAll(".trial__cirkul");
        var plus = cirkuls.length ? cirkuls[cirkuls.length - 1] : null;

        if (minus) {
          minus.addEventListener("click", function () {
            var curr = state.extrasIndex[key];
            if (curr > 0) {
              state.extrasIndex[key] = curr - 1;
              refreshUI();
            }
          });
        }
        if (plus) {
          plus.addEventListener("click", function () {
            var list = extraLists[key] || [];
            var curr = state.extrasIndex[key];
            if (curr < list.length - 1) {
              state.extrasIndex[key] = curr + 1;
              refreshUI();
            }
          });
        }
      });
    }

    function setupGuaranteeControls() {
      if (service !== "Followers") return;
      var blocks = ui.countBlocks;
      if (!blocks || blocks.length < 3) return;
      var rest = function () {
        var plan = getPlan(service, state.selectedCount);
        var type = getPlanType(plan, service, state.orderType);
        return type && type.guarantee ? type.guarantee.slice(2) : [];
      };

      function selectMode(mode) {
        state.guaranteeMode = mode;
        if (mode === "first") {
          state.guaranteeDays = (state.guaranteeOptions[0] || {}).days || 0;
        } else if (mode === "second") {
          state.guaranteeDays = (state.guaranteeOptions[1] || {}).days || 0;
        } else if (mode === "third") {
          var list = rest();
          var current = list[state.guaranteeIndex] || {};
          state.guaranteeDays = current.days || 0;
        } else {
          state.guaranteeDays = 0;
        }
        refreshUI();
      }

      blocks[0].addEventListener("click", function () {
        selectMode("first");
      });
      blocks[1].addEventListener("click", function () {
        selectMode("second");
      });
      blocks[2].addEventListener("click", function () {
        selectMode("third");
      });

      var minus = blocks[2].querySelector(".trial__cirkul-minus");
      var cirkuls = blocks[2].querySelectorAll(".trial__cirkul");
      var plus = cirkuls.length ? cirkuls[cirkuls.length - 1] : null;

      if (minus) {
        minus.addEventListener("click", function (e) {
          e.stopPropagation();
          if (state.guaranteeMode !== "third") return;
          var list = rest();
          if (state.guaranteeIndex > 0) {
            state.guaranteeIndex -= 1;
            var current = list[state.guaranteeIndex] || {};
            state.guaranteeDays = current.days || 0;
            refreshUI();
          }
        });
      }
      if (plus) {
        plus.addEventListener("click", function (e) {
          e.stopPropagation();
          if (state.guaranteeMode !== "third") return;
          var list = rest();
          if (state.guaranteeIndex < list.length - 1) {
            state.guaranteeIndex += 1;
            var current = list[state.guaranteeIndex] || {};
            state.guaranteeDays = current.days || 0;
            refreshUI();
          }
        });
      }
    }

    function setupQuantityControls(card) {
      var countEl = card.querySelector(".quantity__count");
      if (!countEl) return;
      var minus = card.querySelector(".quantity__control-minus");
      var plus = card.querySelector(".quantity__control-plus");
      var current = parseCountText(countEl.textContent);
      var planCounts = Object.keys(data.plans || {})
        .map(function (val) {
          return parseInt(val, 10);
        })
        .filter(Boolean);
      var options = planCounts.filter(function (count) {
        return count >= current;
      });
      if (!options.length) return;
      var idx = Math.max(0, options.indexOf(current));

      function updateCount(newIndex) {
        idx = newIndex;
        var nextCount = options[idx];
        countEl.textContent = String(nextCount).replace(
          /\B(?=(\d{3})+(?!\d))/g,
          ",",
        );
        var plan = getPlan(service, nextCount);
        if (plan) {
          updateCardPrice(card, getPlanPrice(plan, service, state.orderType));
        }
        if (state.selectedCard === card) {
          state.selectedCount = nextCount;
          state.basePrice = plan
            ? getPlanPrice(plan, service, state.orderType)
            : state.basePrice;
          setExtrasFromDefaults(nextCount);
          if (service === "Followers") {
            setGuaranteeOptions(plan);
          }
          refreshUI();
        }
      }

      if (minus) {
        minus.addEventListener("click", function (e) {
          e.stopPropagation();
          if (idx > 0) {
            updateCount(idx - 1);
          }
        });
      }
      if (plus) {
        plus.addEventListener("click", function (e) {
          e.stopPropagation();
          if (idx < options.length - 1) {
            updateCount(idx + 1);
          }
        });
      }
    }

    cards.forEach(function (card) {
      // if card contains stopped-block, make it non-interactive
      if (card.querySelector && card.querySelector(".box__stopped-block")) {
        card.style.cursor = "default";
        // ensure it doesn't have interactive handlers
        setupQuantityControls(card); // keep quantity controls inert if present
        return;
      }
      card.style.cursor = "pointer";
      card.addEventListener("click", function () {
        selectCard(card);
      });
      setupQuantityControls(card);
    });

    setupExtraControls();
    setupGuaranteeControls();

    var regularBtn = document.querySelector(".regular_btn");
    var premiumBtn = document.querySelector(".premium_btn");
    if (regularBtn && premiumBtn) {
      if (service === "Likes" || service === "Views") {
        regularBtn.addEventListener("click", function () {
          state.orderType = "instant";
          setTimeout(function () {
            syncOrderTypeFromTabs();
            updateCardPricesForType();
            selectCardByCount(state.selectedCount);
          }, 0);
        });
        premiumBtn.addEventListener("click", function () {
          state.orderType = "gradual";
          setTimeout(function () {
            syncOrderTypeFromTabs();
            updateCardPricesForType();
            selectCardByCount(state.selectedCount);
          }, 0);
        });
      } else if (service === "Followers") {
        regularBtn.addEventListener("click", function () {
          state.orderType = "normal";
          setTimeout(function () {
            syncOrderTypeFromTabs();
            updateCardPricesForType();
            selectCardByCount(state.selectedCount);
          }, 0);
        });
        premiumBtn.addEventListener("click", function () {
          state.orderType = "premium";
          setTimeout(function () {
            syncOrderTypeFromTabs();
            updateCardPricesForType();
            selectCardByCount(state.selectedCount);
          }, 0);
        });
      }
    }

    function selectCardByCount(count) {
      var visible = cards.filter(isVisible);
      var target = count || defaultSelectionCount(service);
      var match = null;
      for (var i = 0; i < visible.length; i += 1) {
        if (getCardCount(visible[i]) === target) {
          match = visible[i];
          break;
        }
      }
      if (!match) {
        match = visible[0] || cards[0];
      }
      if (match) selectCard(match);
    }

    function defaultSelectionCount(serviceName) {
      switch (serviceName) {
        case "Likes":
          return 25;
        case "Views":
          return 2000;
        case "Comments":
          return 25;
        case "Followers":
          return 250;
        case "Auto-Likes":
          return 2000;
        case "Auto-Likes Subs":
          return 100;
        default:
          return 0;
      }
    }

    syncOrderTypeFromTabs();
    updateCardPricesForType();
    selectCardByCount(state.selectedCount);

    // allow other scripts to request a trial UI refresh when order/services change
    try {
      document.addEventListener("trial:refresh", function () {
        try {
          refreshUI();
        } catch (e) {}
      });
      window.triggerTrialRefresh = function () {
        try {
          document.dispatchEvent(new Event("trial:refresh"));
        } catch (e) {}
      };
    } catch (e) {}

    // observe price text changes on card elements and refresh total
    (function () {
      var boxEl = document.querySelector(".box");
      if (!boxEl) return;
      var priceChangeTimeout = null;
      var observer = new MutationObserver(function (mutations) {
        var shouldUpdate = false;
        for (var i = 0; i < mutations.length; i += 1) {
          var target =
            mutations[i].target ||
            (mutations[i].addedNodes && mutations[i].addedNodes[0]);
          if (!target) continue;
          if (
            target.classList &&
            (target.classList.contains("box__service-name") ||
              target.classList.contains("box__service-name-mt"))
          ) {
            shouldUpdate = true;
            break;
          }
          var parent = target.parentNode;
          if (
            parent &&
            parent.classList &&
            (parent.classList.contains("box__service-name") ||
              parent.classList.contains("box__service-name-mt"))
          ) {
            shouldUpdate = true;
            break;
          }
        }
        if (shouldUpdate) {
          clearTimeout(priceChangeTimeout);
          priceChangeTimeout = setTimeout(function () {
            if (state && state.selectedCard) {
              var cnt = getCardCount(state.selectedCard);
              var plan = getPlan(service, cnt);
              if (plan) {
                state.basePrice = getPlanPrice(plan, service, state.orderType);
              } else {
                state.basePrice = getCardPrice(state.selectedCard);
              }
              refreshUI();
            }
          }, 80);
        }
      });
      observer.observe(boxEl, {
        subtree: true,
        childList: true,
        characterData: true,
      });
    })();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTrial);
  } else {
    initTrial();
  }
})();
