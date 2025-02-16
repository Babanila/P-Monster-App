const sampleData = [
    {
        kids: [21572961, 21573019, 21572982, 21572965, 21572930, 21573025, 21573015],
        _id: "5dd3fb9cba8f0b764bc382c5",
        by: "Classicaldj34",
        descendants: 16,
        id: 21572795,
        score: 44,
        time: "1574171812",
        title: "Fitbit users are getting rid of the devices because they don’t trust Google",
        type: "story",
        url: "https://www.cnbc.com/2019/11/17/people-getting-rid-of-fitbits-after-google.html",
        __v: 0,
    },
    {
        kids: [21572973],
        _id: "5dd3fb9cba8f0b764bc382cc",
        by: "zdw",
        descendants: 3,
        id: 21572706,
        score: 8,
        time: "1574171089",
        title: "From Unix sysadmin to brutal separatist suppressor to president of Sri Lanka",
        type: "story",
        url:
            "https://www.theregister.co.uk/2019/11/18/ex_unix_sysadmin_elected_president_sri_lanka/",
        __v: 0,
    },
    {
        kids: [
            21572790,
            21572708,
            21572678,
            21573005,
            21572803,
            21572804,
            21572810,
            21572839,
            21572750,
            21572879,
            21572975,
            21572730,
            21572856,
        ],
        _id: "5dd3fb9cba8f0b764bc382c8",
        by: "Mopolo",
        descendants: 43,
        id: 21572637,
        score: 110,
        time: "1574170430",
        title: "40% of multinational profits are shifted to tax havens each year",
        type: "story",
        url: "https://missingprofits.world/",
        __v: 0,
    },
    {
        kids: [21572801, 21572575, 21573008, 21572884],
        _id: "5dd3fb9cba8f0b764bc382cb",
        by: "atestu",
        descendants: 12,
        id: 21572573,
        score: 22,
        time: "1574169645",
        title: "Oversaid – Keeping track of who said what in tech",
        type: "story",
        url: "https://www.oversaid.com",
        __v: 0,
    },
    {
        kids: [
            21572844,
            21572794,
            21573017,
            21573062,
            21572963,
            21573038,
            21572900,
            21572842,
            21572999,
            21572914,
            21572942,
            21572836,
            21572871,
        ],
        _id: "5dd3fb9cba8f0b764bc382c4",
        by: "schappim",
        descendants: 50,
        id: 21572552,
        score: 132,
        time: "1574169450",
        title: "Sweden Drops Julian Assange Rape Investigation",
        type: "story",
        url: "https://www.bbc.com/news/world-europe-50473792",
        __v: 0,
    },
    {
        kids: [21572822, 21572866, 21572887, 21572814, 21572740],
        _id: "5dd3fb9cba8f0b764bc382c6",
        by: "jrsinclair",
        descendants: 7,
        id: 21571938,
        score: 43,
        time: "1574160600",
        title: "Algebraic Data Types: Things I wish someone explained on functional programming",
        type: "story",
        url:
            "https://jrsinclair.com/articles/2019/algebraic-data-types-what-i-wish-someone-had-explained-about-functional-programming",
        __v: 0,
    },
    {
        kids: [
            21570829,
            21572776,
            21571684,
            21570580,
            21571132,
            21572849,
            21571162,
            21570572,
            21572091,
            21570596,
            21570522,
            21570603,
            21571549,
            21570446,
            21572295,
            21571813,
            21570411,
            21570513,
            21571286,
            21570619,
            21571464,
            21572599,
            21570490,
        ],
        _id: "5dd3fb9cba8f0b764bc382ca",
        by: "Reedx",
        descendants: 103,
        id: 21570219,
        score: 101,
        time: "1574130546",
        title: "Empathic concern does not reduce partisan animosity: study",
        type: "story",
        url: "https://www.wired.com/story/empathy-is-tearing-us-apart/",
        __v: 0,
    },
    {
        kids: [21572725, 21572407, 21572252],
        _id: "5dd3fb9cba8f0b764bc382c7",
        by: "thomasjudge",
        descendants: 12,
        id: 21569610,
        score: 45,
        time: "1574123047",
        title: "The Everything Town in the Middle of Nowhere",
        type: "story",
        url:
            "https://www.theverge.com/2019/11/14/20961523/amazon-walmart-target-package-delivery-sales-tax-montana-roundup",
        __v: 0,
    },
    {
        kids: [21571363, 21572452],
        _id: "5dd3fb9cba8f0b764bc382c9",
        by: "kick",
        descendants: 13,
        id: 21568080,
        score: 76,
        time: "1574110755",
        title: "The Loneliness of a Long-Distance Thinker (1985)",
        type: "story",
        url: "http://www.rheingold.com/texts/tft/09.html#Chap09",
        __v: 0,
    },
    {
        kids: [21572916, 21572619, 21572604, 21571537, 21572328, 21571342],
        _id: "5dd3fb9cba8f0b764bc382cd",
        by: "arunc",
        descendants: 31,
        id: 21557879,
        score: 57,
        time: "1573998320",
        title: "The Floating-Point Guide (2010)",
        type: "story",
        url: "https://floating-point-gui.de/",
        __v: 0,
    },
    { kids: [], _id: "5dd3b8e4a5d7b859b9431a87", date: "2019-11-19T09:41:56.209Z", __v: 0 },
    { kids: [], _id: "5dd3b8e8a5d7b859b9431a88", date: "2019-11-19T09:42:00.276Z", __v: 0 },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f63929b",
        title: 'MacBook Pro 16" 2019 Teardown',
        type: "story",
        url: "https://www.ifixit.com/Teardown/MacBook+Pro+16-Inch+2019+Teardown/128106",
        date: "2019-11-19T13:01:34.742Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f63929d",
        title: "Sourcetrail, interactive source explorer, is now free and open-source",
        type: "story",
        url: "https://www.sourcetrail.com/blog/open_source/",
        date: "2019-11-19T13:01:34.746Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f63929c",
        title: "Your throat hurts, your brain hurts: the life of the audiobook star",
        type: "story",
        url:
            "https://www.theguardian.com/books/2019/nov/16/throat-hurts-brain-hurts-secret-life-of-audiobook-stars-tim-dowling",
        date: "2019-11-19T13:01:34.745Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f63929e",
        title: "Empathic concern does not reduce partisan animosity: study",
        type: "story",
        url: "https://www.wired.com/story/empathy-is-tearing-us-apart/",
        date: "2019-11-19T13:01:34.747Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f63929f",
        title: "The Everything Town in the Middle of Nowhere",
        type: "story",
        url:
            "https://www.theverge.com/2019/11/14/20961523/amazon-walmart-target-package-delivery-sales-tax-montana-roundup",
        date: "2019-11-19T13:01:34.747Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f6392a0",
        title: "Music Generates Feelings That Are Only Weakly Bound to the Music",
        type: "story",
        url:
            "https://whatismusic.info/blog/MusicGeneratesFeelingsThatAreOnlyWeaklyBoundToTheMusic.html",
        date: "2019-11-19T13:01:34.748Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f6392a3",
        title: "BodyPix: Real-Time Person Segmentation in the Browser with Tensorflow.js",
        type: "story",
        url: "https://blog.tensorflow.org/2019/11/updated-bodypix-2.html",
        date: "2019-11-19T13:01:34.750Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f6392a1",
        title: "The cognitive costs of air pollution",
        type: "story",
        url: "https://patrickcollison.com/pollution",
        date: "2019-11-19T13:01:34.748Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f6392a2",
        title: "Why is everyone a bank?",
        type: "story",
        url: "https://medium.com/@kaushikktiwari/why-the-f-k-is-everyone-a-bank-6576de9d262d",
        date: "2019-11-19T13:01:34.749Z",
        __v: 0,
    },
    {
        kids: [],
        _id: "5dd3e7aea7ca9e701f6392a4",
        title: "Mux is hiring across the board to build Netflix-grade video infra for all",
        type: "job",
        url: "https://mux.com/jobs/?hnj=7",
        date: "2019-11-19T13:01:34.750Z",
        __v: 0,
    },
];

export default sampleData;
