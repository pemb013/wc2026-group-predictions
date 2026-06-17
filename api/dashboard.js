// /api/dashboard — corrected data layer for "World Cup 2026 Group"
// Frontend is unchanged; this restores the picks (authoritative) and serves
// live FIFA World Cup 2026 results from football-data.org, exactly as before.
// If no API key is set or the live fetch fails, it falls back to an embedded
// snapshot so the site always shows the correct picks and standings.

const PARTICIPANTS = [
  {
    "name": "Joseph Henderson",
    "email": "jrhendo@gmail.com",
    "overallWinner": "France",
    "runnerUp": "Brazil",
    "goldenBoot": "Harry Kane",
    "goldenBootGoals": 6,
    "goldenGlove": "Jordan Pickford",
    "ausScorer": "Nestory Irankunda",
    "ausGoals": 4,
    "totalGoals": 183,
    "groups": {
      "a1": "South Korea",
      "a2": "Czech Republic",
      "b1": "Switzerland",
      "b2": "Bosnia & Herzegovina",
      "c1": "Brazil",
      "c2": "Scotland",
      "d1": "Türkiye",
      "d2": "USA",
      "e1": "Germany",
      "e2": "Ivory Coast",
      "f1": "Netherlands",
      "f2": "Japan",
      "g1": "Belgium",
      "g2": "Egypt",
      "h1": "Spain",
      "h2": "Uruguay",
      "i1": "France",
      "i2": "Senegal",
      "j1": "Argentina",
      "j2": "Austria",
      "k1": "Portugal",
      "k2": "Colombia",
      "l1": "England",
      "l2": "Croatia"
    }
  },
  {
    "name": "Josh Pugh",
    "email": "josh@joshpugh.com",
    "overallWinner": "Spain",
    "runnerUp": "England",
    "goldenBoot": "Kylian Mbappé",
    "goldenBootGoals": 7,
    "goldenGlove": "Emiliano Martínez",
    "ausScorer": "Nestory Irankunda",
    "ausGoals": 3,
    "totalGoals": 275,
    "groups": {
      "a1": "Mexico",
      "a2": "South Korea",
      "b1": "Switzerland",
      "b2": "Canada",
      "c1": "Brazil",
      "c2": "Morocco",
      "d1": "USA",
      "d2": "Türkiye",
      "e1": "Germany",
      "e2": "Ecuador",
      "f1": "Netherlands",
      "f2": "Japan",
      "g1": "Belgium",
      "g2": "Egypt",
      "h1": "Spain",
      "h2": "Uruguay",
      "i1": "France",
      "i2": "Senegal",
      "j1": "Argentina",
      "j2": "Austria",
      "k1": "Portugal",
      "k2": "Colombia",
      "l1": "England",
      "l2": "Croatia"
    }
  },
  {
    "name": "Chris Davies",
    "email": "chris.ed.davies@gmail.com",
    "overallWinner": "Argentina",
    "runnerUp": "Spain",
    "goldenBoot": "Harry Kane",
    "goldenBootGoals": 6,
    "goldenGlove": "Emiliano Martinez",
    "ausScorer": "Nestory Irankunda",
    "ausGoals": 4,
    "totalGoals": 265,
    "groups": {
      "a1": "Mexico",
      "a2": "South Korea",
      "b1": "Switzerland",
      "b2": "Canada",
      "c1": "Brazil",
      "c2": "Morocco",
      "d1": "USA",
      "d2": "Türkiye",
      "e1": "Germany",
      "e2": "Ecuador",
      "f1": "Netherlands",
      "f2": "Japan",
      "g1": "Belgium",
      "g2": "Iran",
      "h1": "Spain",
      "h2": "Uruguay",
      "i1": "France",
      "i2": "Senegal",
      "j1": "Argentina",
      "j2": "Austria",
      "k1": "Portugal",
      "k2": "Colombia",
      "l1": "England",
      "l2": "Croatia"
    }
  },
  {
    "name": "Graham Buxton",
    "email": "gbuxton@me.com",
    "overallWinner": "Spain",
    "runnerUp": "England",
    "goldenBoot": "Harry Kane",
    "goldenBootGoals": 7,
    "goldenGlove": "Unai Simón",
    "ausScorer": "Mo Toure",
    "ausGoals": 4,
    "totalGoals": 251,
    "groups": {
      "a1": "Mexico",
      "a2": "South Korea",
      "b1": "Switzerland",
      "b2": "Canada",
      "c1": "Brazil",
      "c2": "Morocco",
      "d1": "USA",
      "d2": "Australia",
      "e1": "Germany",
      "e2": "Ecuador",
      "f1": "Netherlands",
      "f2": "Japan",
      "g1": "Belgium",
      "g2": "Egypt",
      "h1": "Spain",
      "h2": "Uruguay",
      "i1": "France",
      "i2": "Norway",
      "j1": "Argentina",
      "j2": "Austria",
      "k1": "Portugal",
      "k2": "Colombia",
      "l1": "England",
      "l2": "Ghana"
    }
  },
  {
    "name": "Nic Pugh",
    "email": "nic@nicpugh.com.au",
    "overallWinner": "Norway",
    "runnerUp": "France",
    "goldenBoot": "Erling Haaland",
    "goldenBootGoals": 9,
    "goldenGlove": "Unai Simón",
    "ausScorer": "Matthew Leckie",
    "ausGoals": 4,
    "totalGoals": 305,
    "groups": {
      "a1": "Mexico",
      "a2": "South Korea",
      "b1": "Switzerland",
      "b2": "Canada",
      "c1": "Brazil",
      "c2": "Morocco",
      "d1": "USA",
      "d2": "Australia",
      "e1": "Germany",
      "e2": "Ecuador",
      "f1": "Netherlands",
      "f2": "Japan",
      "g1": "Belgium",
      "g2": "New Zealand",
      "h1": "Uruguay",
      "h2": "Spain",
      "i1": "France",
      "i2": "Norway",
      "j1": "Argentina",
      "j2": "Austria",
      "k1": "Portugal",
      "k2": "Colombia",
      "l1": "England",
      "l2": "Croatia"
    }
  },
  {
    "name": "Thorsten Raether",
    "email": "thorsten.raether@gmail.com",
    "overallWinner": "France",
    "runnerUp": "Spain",
    "goldenBoot": "Michael Olise",
    "goldenBootGoals": 5,
    "goldenGlove": "David Raya",
    "ausScorer": "Nestory Irankunda",
    "ausGoals": 4,
    "totalGoals": 262,
    "groups": {
      "a1": "South Korea",
      "a2": "Mexico",
      "b1": "Switzerland",
      "b2": "Bosnia & Herzegovina",
      "c1": "Morocco",
      "c2": "Brazil",
      "d1": "Türkiye",
      "d2": "Australia",
      "e1": "Germany",
      "e2": "Ivory Coast",
      "f1": "Netherlands",
      "f2": "Sweden",
      "g1": "Belgium",
      "g2": "Iran",
      "h1": "Spain",
      "h2": "Uruguay",
      "i1": "France",
      "i2": "Norway",
      "j1": "Argentina",
      "j2": "Austria",
      "k1": "Portugal",
      "k2": "Colombia",
      "l1": "Croatia",
      "l2": "England"
    }
  },
  {
    "name": "Nick Pemberton",
    "email": "nick@pembo.au",
    "overallWinner": "Spain",
    "runnerUp": "France",
    "goldenBoot": "Kylian Mbappe",
    "goldenBootGoals": 10,
    "goldenGlove": "Mike Maignan",
    "ausScorer": "Mo Toure",
    "ausGoals": 4,
    "totalGoals": 260,
    "groups": {
      "a1": "Mexico",
      "a2": "South Korea",
      "b1": "Switzerland",
      "b2": "Canada",
      "c1": "Brazil",
      "c2": "Morocco",
      "d1": "Türkiye",
      "d2": "USA",
      "e1": "Germany",
      "e2": "Ivory Coast",
      "f1": "Netherlands",
      "f2": "Japan",
      "g1": "Belgium",
      "g2": "Egypt",
      "h1": "Spain",
      "h2": "Uruguay",
      "i1": "France",
      "i2": "Norway",
      "j1": "Argentina",
      "j2": "Austria",
      "k1": "Portugal",
      "k2": "Colombia",
      "l1": "England",
      "l2": "Ghana"
    }
  },
  {
    "name": "Cameron White",
    "email": "cameronwhite@example.com",
    "overallWinner": "Spain",
    "runnerUp": "England",
    "goldenBoot": "Harry Kane",
    "goldenBootGoals": 5,
    "goldenGlove": "Jordan Pickford",
    "ausScorer": "Mo Toure",
    "ausGoals": 3,
    "totalGoals": 254,
    "groups": {
      "a1": "Mexico",
      "a2": "South Korea",
      "b1": "Switzerland",
      "b2": "Canada",
      "c1": "Brazil",
      "c2": "Scotland",
      "d1": "USA",
      "d2": "Paraguay",
      "e1": "Germany",
      "e2": "Ecuador",
      "f1": "Japan",
      "f2": "Netherlands",
      "g1": "Belgium",
      "g2": "Egypt",
      "h1": "Spain",
      "h2": "Uruguay",
      "i1": "France",
      "i2": "Norway",
      "j1": "Argentina",
      "j2": "Jordan",
      "k1": "Portugal",
      "k2": "Colombia",
      "l1": "England",
      "l2": "Croatia"
    }
  }
];
const SNAPSHOT = {
  "actualGroups": {
    "A": {
      "first": "Mexico",
      "second": "South Korea",
      "table": [
        {
          "name": "Mexico",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 2,
          "ga": 0,
          "gd": 2,
          "pts": 3
        },
        {
          "name": "South Korea",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 2,
          "ga": 1,
          "gd": 1,
          "pts": 3
        },
        {
          "name": "Czechia",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 1,
          "ga": 2,
          "gd": -1,
          "pts": 0
        },
        {
          "name": "South Africa",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 0,
          "ga": 2,
          "gd": -2,
          "pts": 0
        }
      ]
    },
    "B": {
      "first": "Switzerland",
      "second": "Canada",
      "table": [
        {
          "name": "Switzerland",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Canada",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Qatar",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Bosnia-Herzegovina",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        }
      ]
    },
    "C": {
      "first": "Scotland",
      "second": "Morocco",
      "table": [
        {
          "name": "Scotland",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 1,
          "ga": 0,
          "gd": 1,
          "pts": 3
        },
        {
          "name": "Morocco",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Brazil",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Haiti",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 0,
          "ga": 1,
          "gd": -1,
          "pts": 0
        }
      ]
    },
    "D": {
      "first": "United States",
      "second": "Australia",
      "table": [
        {
          "name": "United States",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 4,
          "ga": 1,
          "gd": 3,
          "pts": 3
        },
        {
          "name": "Australia",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 2,
          "ga": 0,
          "gd": 2,
          "pts": 3
        },
        {
          "name": "Turkey",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 0,
          "ga": 2,
          "gd": -2,
          "pts": 0
        },
        {
          "name": "Paraguay",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 1,
          "ga": 4,
          "gd": -3,
          "pts": 0
        }
      ]
    },
    "E": {
      "first": "Germany",
      "second": "Ivory Coast",
      "table": [
        {
          "name": "Germany",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 7,
          "ga": 1,
          "gd": 6,
          "pts": 3
        },
        {
          "name": "Ivory Coast",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 1,
          "ga": 0,
          "gd": 1,
          "pts": 3
        },
        {
          "name": "Ecuador",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 0,
          "ga": 1,
          "gd": -1,
          "pts": 0
        },
        {
          "name": "Curaçao",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 1,
          "ga": 7,
          "gd": -6,
          "pts": 0
        }
      ]
    },
    "F": {
      "first": "Sweden",
      "second": "Japan",
      "table": [
        {
          "name": "Sweden",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 5,
          "ga": 1,
          "gd": 4,
          "pts": 3
        },
        {
          "name": "Japan",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 2,
          "ga": 2,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Netherlands",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 2,
          "ga": 2,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Tunisia",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 1,
          "ga": 5,
          "gd": -4,
          "pts": 0
        }
      ]
    },
    "G": {
      "first": "New Zealand",
      "second": "Iran",
      "table": [
        {
          "name": "New Zealand",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 2,
          "ga": 2,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Iran",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 2,
          "ga": 2,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Belgium",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Egypt",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        }
      ]
    },
    "H": {
      "first": "Uruguay",
      "second": "Saudi Arabia",
      "table": [
        {
          "name": "Uruguay",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Saudi Arabia",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 1,
          "ga": 1,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Spain",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 1
        },
        {
          "name": "Cape Verde Islands",
          "played": 1,
          "won": 0,
          "drawn": 1,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 1
        }
      ]
    },
    "I": {
      "first": "Norway",
      "second": "France",
      "table": [
        {
          "name": "Norway",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 4,
          "ga": 1,
          "gd": 3,
          "pts": 3
        },
        {
          "name": "France",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 3,
          "ga": 1,
          "gd": 2,
          "pts": 3
        },
        {
          "name": "Senegal",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 1,
          "ga": 3,
          "gd": -2,
          "pts": 0
        },
        {
          "name": "Iraq",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 1,
          "ga": 4,
          "gd": -3,
          "pts": 0
        }
      ]
    },
    "J": {
      "first": "Argentina",
      "second": "Austria",
      "table": [
        {
          "name": "Argentina",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 3,
          "ga": 0,
          "gd": 3,
          "pts": 3
        },
        {
          "name": "Austria",
          "played": 1,
          "won": 1,
          "drawn": 0,
          "lost": 0,
          "gf": 3,
          "ga": 1,
          "gd": 2,
          "pts": 3
        },
        {
          "name": "Jordan",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 1,
          "ga": 3,
          "gd": -2,
          "pts": 0
        },
        {
          "name": "Algeria",
          "played": 1,
          "won": 0,
          "drawn": 0,
          "lost": 1,
          "gf": 0,
          "ga": 3,
          "gd": -3,
          "pts": 0
        }
      ]
    },
    "K": {
      "first": null,
      "second": null,
      "table": [
        {
          "name": "Portugal",
          "played": 0,
          "won": 0,
          "drawn": 0,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 0
        },
        {
          "name": "Colombia",
          "played": 0,
          "won": 0,
          "drawn": 0,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 0
        },
        {
          "name": "Uzbekistan",
          "played": 0,
          "won": 0,
          "drawn": 0,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 0
        },
        {
          "name": "Congo DR",
          "played": 0,
          "won": 0,
          "drawn": 0,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 0
        }
      ]
    },
    "L": {
      "first": null,
      "second": null,
      "table": [
        {
          "name": "England",
          "played": 0,
          "won": 0,
          "drawn": 0,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 0
        },
        {
          "name": "Croatia",
          "played": 0,
          "won": 0,
          "drawn": 0,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 0
        },
        {
          "name": "Ghana",
          "played": 0,
          "won": 0,
          "drawn": 0,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 0
        },
        {
          "name": "Panama",
          "played": 0,
          "won": 0,
          "drawn": 0,
          "lost": 0,
          "gf": 0,
          "ga": 0,
          "gd": 0,
          "pts": 0
        }
      ]
    }
  },
  "topScorer": {
    "player": {
      "name": "Lionel Messi"
    },
    "team": {
      "name": "Argentina"
    },
    "goals": 3
  },
  "topScorers": [
    {
      "player": {
        "name": "Lionel Messi"
      },
      "team": {
        "name": "Argentina"
      },
      "goals": 3
    }
  ],
  "totalGoalsSoFar": 62,
  "finishedMatches": 20,
  "ausActualGoals": 2,
  "ausActualScorer": null,
  "groupDraw": {
    "A": [
      "Mexico",
      "South Africa",
      "South Korea",
      "Czech Republic"
    ],
    "B": [
      "Canada",
      "Bosnia and Herzegovina",
      "Qatar",
      "Switzerland"
    ],
    "C": [
      "Brazil",
      "Morocco",
      "Haiti",
      "Scotland"
    ],
    "D": [
      "United States",
      "Paraguay",
      "Australia",
      "Türkiye"
    ],
    "E": [
      "Germany",
      "Curaçao",
      "Ivory Coast",
      "Ecuador"
    ],
    "F": [
      "Netherlands",
      "Japan",
      "Sweden",
      "Tunisia"
    ],
    "G": [
      "Belgium",
      "Egypt",
      "Iran",
      "New Zealand"
    ],
    "H": [
      "Spain",
      "Cape Verde",
      "Saudi Arabia",
      "Uruguay"
    ],
    "I": [
      "France",
      "Senegal",
      "Iraq",
      "Norway"
    ],
    "J": [
      "Argentina",
      "Algeria",
      "Austria",
      "Jordan"
    ],
    "K": [
      "Portugal",
      "DR Congo",
      "Uzbekistan",
      "Colombia"
    ],
    "L": [
      "England",
      "Croatia",
      "Ghana",
      "Panama"
    ]
  },
  "recentResults": [
    {
      "utcDate": "2026-06-17T04:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_J",
      "homeTeam": {
        "name": "Austria",
        "shortName": "Austria"
      },
      "awayTeam": {
        "name": "Jordan",
        "shortName": "Jordan"
      },
      "score": {
        "fullTime": {
          "home": 3,
          "away": 1
        }
      }
    },
    {
      "utcDate": "2026-06-17T01:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_J",
      "homeTeam": {
        "name": "Argentina",
        "shortName": "Argentina"
      },
      "awayTeam": {
        "name": "Algeria",
        "shortName": "Algeria"
      },
      "score": {
        "fullTime": {
          "home": 3,
          "away": 0
        }
      }
    },
    {
      "utcDate": "2026-06-16T22:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_I",
      "homeTeam": {
        "name": "Iraq",
        "shortName": "Iraq"
      },
      "awayTeam": {
        "name": "Norway",
        "shortName": "Norway"
      },
      "score": {
        "fullTime": {
          "home": 1,
          "away": 4
        }
      }
    },
    {
      "utcDate": "2026-06-16T19:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_I",
      "homeTeam": {
        "name": "France",
        "shortName": "France"
      },
      "awayTeam": {
        "name": "Senegal",
        "shortName": "Senegal"
      },
      "score": {
        "fullTime": {
          "home": 3,
          "away": 1
        }
      }
    },
    {
      "utcDate": "2026-06-16T01:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_G",
      "homeTeam": {
        "name": "Iran",
        "shortName": "Iran"
      },
      "awayTeam": {
        "name": "New Zealand",
        "shortName": "New Zealand"
      },
      "score": {
        "fullTime": {
          "home": 2,
          "away": 2
        }
      }
    },
    {
      "utcDate": "2026-06-15T22:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_H",
      "homeTeam": {
        "name": "Saudi Arabia",
        "shortName": "Saudi Arabia"
      },
      "awayTeam": {
        "name": "Uruguay",
        "shortName": "Uruguay"
      },
      "score": {
        "fullTime": {
          "home": 1,
          "away": 1
        }
      }
    },
    {
      "utcDate": "2026-06-15T19:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_G",
      "homeTeam": {
        "name": "Belgium",
        "shortName": "Belgium"
      },
      "awayTeam": {
        "name": "Egypt",
        "shortName": "Egypt"
      },
      "score": {
        "fullTime": {
          "home": 1,
          "away": 1
        }
      }
    },
    {
      "utcDate": "2026-06-15T16:00:00Z",
      "status": "FINISHED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_H",
      "homeTeam": {
        "name": "Spain",
        "shortName": "Spain"
      },
      "awayTeam": {
        "name": "Cape Verde",
        "shortName": "Cape Verde"
      },
      "score": {
        "fullTime": {
          "home": 0,
          "away": 0
        }
      }
    }
  ],
  "upcomingMatches": [
    {
      "utcDate": "2026-06-17T17:00:00Z",
      "status": "TIMED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_K",
      "homeTeam": {
        "name": "Portugal",
        "shortName": "Portugal"
      },
      "awayTeam": {
        "name": "Congo DR",
        "shortName": "Congo DR"
      },
      "score": {
        "fullTime": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "utcDate": "2026-06-17T20:00:00Z",
      "status": "TIMED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_L",
      "homeTeam": {
        "name": "England",
        "shortName": "England"
      },
      "awayTeam": {
        "name": "Croatia",
        "shortName": "Croatia"
      },
      "score": {
        "fullTime": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "utcDate": "2026-06-17T23:00:00Z",
      "status": "TIMED",
      "matchday": 1,
      "stage": "GROUP_STAGE",
      "group": "GROUP_L",
      "homeTeam": {
        "name": "Ghana",
        "shortName": "Ghana"
      },
      "awayTeam": {
        "name": "Panama",
        "shortName": "Panama"
      },
      "score": {
        "fullTime": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "utcDate": "2026-06-18T02:00:00Z",
      "status": "TIMED",
      "matchday": 2,
      "stage": "GROUP_STAGE",
      "group": "GROUP_K",
      "homeTeam": {
        "name": "Uzbekistan",
        "shortName": "Uzbekistan"
      },
      "awayTeam": {
        "name": "Colombia",
        "shortName": "Colombia"
      },
      "score": {
        "fullTime": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "utcDate": "2026-06-18T16:00:00Z",
      "status": "TIMED",
      "matchday": 2,
      "stage": "GROUP_STAGE",
      "group": "GROUP_A",
      "homeTeam": {
        "name": "Czechia",
        "shortName": "Czechia"
      },
      "awayTeam": {
        "name": "South Africa",
        "shortName": "South Africa"
      },
      "score": {
        "fullTime": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "utcDate": "2026-06-18T19:00:00Z",
      "status": "TIMED",
      "matchday": 2,
      "stage": "GROUP_STAGE",
      "group": "GROUP_B",
      "homeTeam": {
        "name": "Switzerland",
        "shortName": "Switzerland"
      },
      "awayTeam": {
        "name": "Bosnia-Herzegovina",
        "shortName": "Bosnia-Herzegovina"
      },
      "score": {
        "fullTime": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "utcDate": "2026-06-18T22:00:00Z",
      "status": "TIMED",
      "matchday": 2,
      "stage": "GROUP_STAGE",
      "group": "GROUP_B",
      "homeTeam": {
        "name": "Canada",
        "shortName": "Canada"
      },
      "awayTeam": {
        "name": "Qatar",
        "shortName": "Qatar"
      },
      "score": {
        "fullTime": {
          "home": null,
          "away": null
        }
      }
    },
    {
      "utcDate": "2026-06-19T01:00:00Z",
      "status": "TIMED",
      "matchday": 2,
      "stage": "GROUP_STAGE",
      "group": "GROUP_A",
      "homeTeam": {
        "name": "Mexico",
        "shortName": "Mexico"
      },
      "awayTeam": {
        "name": "South Korea",
        "shortName": "South Korea"
      },
      "score": {
        "fullTime": {
          "home": null,
          "away": null
        }
      }
    }
  ],
  "liveMatches": [],
  "matchesToday": [],
  "lastUpdated": "2026-06-17T08:03:26Z"
};
const ALIASES = {"usa": "united states", "czech republic": "czechia", "bosnia & herzegovina": "bosnia-herzegovina", "curacao": "curaçao", "cape verde": "cape verde islands", "türkiye": "turkey", "korea republic": "south korea"};
const GROUPS = ["a","b","c","d","e","f","g","h","i","j","k","l"];

const canon = (x) => {
  if (!x) return "";
  const s = String(x).trim().toLowerCase();
  return ALIASES[s] || s;
};

function scoreParticipant(p, actualGroups, topScorerGoals) {
  let score = 0; const breakdown = [];
  for (const L of GROUPS) {
    const ag = actualGroups[L.toUpperCase()];
    if (ag && ag.first) {
      if (canon(p.groups[L + "1"]) === canon(ag.first)) { score++; breakdown.push(`Group ${L.toUpperCase()} 1st \u2713 +1`); }
      if (canon(p.groups[L + "2"]) === canon(ag.second)) { score++; breakdown.push(`Group ${L.toUpperCase()} 2nd \u2713 +1`); }
    }
  }
  if (typeof topScorerGoals === "number" && Math.abs((p.goldenBootGoals||0) - topScorerGoals) <= 2) {
    score++; breakdown.push("Golden Boot goals within 2 \u2713 +1");
  }
  return { score, breakdown };
}

function buildPayload(results) {
  const participants = PARTICIPANTS.map((p) => ({ ...p }));
  const tsGoals = results.topScorer && results.topScorer.goals;
  const leaderboard = participants
    .map((p) => ({ ...p, ...scoreParticipant(p, results.actualGroups, tsGoals) }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  return { participants, leaderboard, ...results };
}

async function fetchLive(key) {
  const base = "https://api.football-data.org/v4/competitions/2000";
  const headers = { "X-Auth-Token": key };
  const [stRes, scRes, mRes] = await Promise.all([
    fetch(`${base}/standings`, { headers }),
    fetch(`${base}/scorers?limit=5`, { headers }),
    fetch(`${base}/matches`, { headers }),
  ]);
  if (!stRes.ok || !mRes.ok) throw new Error("football-data fetch failed");
  const standings = await stRes.json();
  const scorers = scRes.ok ? await scRes.json() : { scorers: [] };
  const matches = await mRes.json();

  const actualGroups = {};
  for (const s of (standings.standings || [])) {
    if (!s.group) continue;
    const L = (s.group || "").replace(/group[_\s]*/i, "").trim().toUpperCase();
    const table = (s.table || []).map((r) => ({
      name: r.team && r.team.name, played: r.playedGames, won: r.won, drawn: r.draw,
      lost: r.lost, gf: r.goalsFor, ga: r.goalsAgainst, gd: r.goalDifference, pts: r.points,
    }));
    const anyPlayed = table.some((t) => t.played > 0);
    actualGroups[L] = {
      first: anyPlayed ? (table[0] && table[0].name) : null,
      second: anyPlayed ? (table[1] && table[1].name) : null,
      table,
    };
  }

  const ms = matches.matches || [];
  const finished = ms.filter((m) => m.status === "FINISHED");
  const timed = ms.filter((m) => m.status === "TIMED" || m.status === "SCHEDULED");
  const live = ms.filter((m) => ["IN_PLAY", "PAUSED", "LIVE"].includes(m.status));
  const totalGoalsSoFar = finished.reduce((n, m) =>
    n + ((m.score && m.score.fullTime && (m.score.fullTime.home || 0) + (m.score.fullTime.away || 0)) || 0), 0);
  const sc = (scorers.scorers || [])[0];

  return {
    actualGroups: Object.keys(actualGroups).length ? actualGroups : SNAPSHOT.actualGroups,
    topScorer: sc ? { player: { name: sc.player && sc.player.name }, team: { name: sc.team && sc.team.name }, goals: sc.goals } : SNAPSHOT.topScorer,
    topScorers: (scorers.scorers || []).slice(0, 5).map((s) => ({ player: { name: s.player && s.player.name }, team: { name: s.team && s.team.name }, goals: s.goals })),
    totalGoalsSoFar,
    finishedMatches: finished.length,
    ausActualGoals: SNAPSHOT.ausActualGoals,
    ausActualScorer: SNAPSHOT.ausActualScorer,
    groupDraw: SNAPSHOT.groupDraw,
    recentResults: finished.sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate)).slice(0, 10),
    upcomingMatches: timed.sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate)).slice(0, 12),
    liveMatches: live,
    matchesToday: ms.filter((m) => m.utcDate && m.utcDate.slice(0, 10) === new Date().toISOString().slice(0, 10)),
    lastUpdated: new Date().toISOString(),
  };
}

module.exports = async (req, res) => {
  const key = process.env.FOOTBALL_DATA_API_KEY || process.env.FOOTBALL_DATA_TOKEN || process.env.FOOTBALL_API_KEY;
  let results = SNAPSHOT;
  if (key) {
    try { results = await fetchLive(key); } catch (e) { results = SNAPSHOT; }
  }
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
  res.status(200).send(JSON.stringify(buildPayload(results)));
};
