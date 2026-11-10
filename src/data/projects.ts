import type { Project } from "@/data/types";
import { sesameDemoMailto } from "@/lib/content";

export const projects: Project[] = [
  {
    slug: "mapspg",
    name: "MapsPG",
    category: "product",
    description:
      "Web application that estimates fuel costs across multiple driving routes before navigation.",
    line: "See what a drive will cost in fuel before you pick a route.",
    preview: { kind: "image", src: "/projects/mapspg-preview.png" },
    figure: {
      alt: "Map fragment with two routes and a fuel-cost estimate.",
      caption: "Compare routes before you drive.",
    },
    story:
      "MapsPG lets drivers see estimated fuel costs across routes before they start navigating. I defined the product, designed the user flow and MVP, and built the application — including a fuel-cost engine from route distance, vehicle MPG, and live gas prices — iterating with Cursor.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Google Maps APIs",
    ],
    highlights: [
      "Defined the product and MVP",
      "Designed the user flow",
      "Built the fuel-cost engine",
      "Iterated with Cursor",
    ],
    liveUrl: "https://mapspg.vercel.app/",
    caseStudy: {
      sections: [
        {
          id: "overview",
          title: "Overview",
          body: "MapsPG is a web app for comparing estimated fuel costs across driving routes before navigation starts. I took it from concept through product definition, design, and a working build.",
          placeholder: "Add a longer product overview.",
        },
        {
          id: "problem",
          title: "Problem",
          body: "Route pickers show time and distance. They don't show what the drive will cost in fuel. MapsPG is for drivers who want that number before they choose a path.",
          placeholder: "Add more detail on the problem.",
        },
        {
          id: "approach",
          title: "Approach",
          body: "I defined the product requirements, user flows, and MVP scope, then prioritized features against technical feasibility and UX. Competitive analysis helped keep the first version focused on one job: estimate fuel cost across routes, clearly.",
          placeholder: "Add more on how you scoped and iterated.",
        },
        {
          id: "implementation",
          title: "Technical implementation",
          body: "I built MapsPG in Next.js and React, using Google Maps APIs for routing and places. The fuel-cost engine combines route distance, vehicle MPG, and real-time gas prices. I prototyped and iterated with Cursor.",
          placeholder: "Add more on how routing and the cost model fit together.",
        },
      ],
    },
  },
  {
    slug: "hoop-predict",
    name: "Hoop Predict",
    category: "modeling",
    description:
      "R-based WNBA player scoring prediction model using rolling statistics, opponent defense, and home/away context.",
    line: "WNBA scoring predictions from form, matchup, and venue.",
    preview: {
      kind: "metrics",
      kicker: "Held-out test",
      metrics: [
        { label: "MAE", value: "4.18" },
        { label: "R²", value: "0.566" },
      ],
    },
    story:
      "Hoop Predict asks how well you can forecast WNBA player scoring from recent form, opponent defense, and home/away context. I engineered those features in R, compared OLS and Ridge with time-based validation, and reached 4.18 MAE and 0.566 R² on held-out data.",
    tech: ["R", "RStudio", "OLS", "Ridge", "Time-based validation"],
    highlights: [
      "Feature engineering",
      "OLS and Ridge regression",
      "Time-based validation",
      "4.18 MAE, 0.566 R²",
    ],
    githubUrl: "https://github.com/samielrem/hoop-predict",
    figure: {
      alt: "Hoop Predict scoring chart with 4.18 MAE and 0.566 R² on held-out data.",
      caption: "Held-out test.",
    },
    caseStudy: {
      sections: [
        {
          id: "problem",
          title: "Problem",
          body: "Player scoring jumps around with form, matchup, and venue. Hoop Predict tries to forecast WNBA points using information you would actually have before a game.",
          placeholder: "Add more on why this problem.",
        },
        {
          id: "data",
          title: "The data",
          body: "WNBA player and team game data covering recent seasons. Player statistics were aggregated into leakage-safe rolling 10-game averages for points, minutes, FGA, 3PA, FTA, rebounds, and assists. I also constructed a rolling 10-game opponent points-allowed metric and encoded home/away context. Rows without sufficient historical data were removed, and the data was split chronologically into training, validation, and test sets.",
          meta: [
            { label: "Source", value: "WNBA game data" },
            {
              label: "Features",
              value: "Rolling player statistics · Opponent defense · Home/away",
            },
            {
              label: "Preprocessing",
              value: "Rolling averages · Missing-data removal · Time-based split",
            },
          ],
          placeholder:
            "Add the dataset, source, time range, and how you cleaned it.",
        },
        {
          id: "features",
          title: "Feature engineering",
          body: "The model uses rolling player statistics, opponent defensive metrics, and home/away context — signals that change with the matchup, not just a season average.",
          placeholder: "Add how rolling windows and defensive features were constructed.",
        },
        {
          id: "models",
          title: "Models",
          body: "I evaluated ordinary least squares and Ridge regression on the same feature set, to compare a simple linear baseline with a regularized alternative.",
          placeholder: "Add more on how the models were specified.",
        },
        {
          id: "validation",
          title: "Time-based validation",
          body: "I validated on held-out data using a time-based split, so the test set is later than the training set rather than a random mix of games.",
          placeholder: "Add more on the split and leakage checks.",
        },
        {
          id: "results",
          title: "Results",
          body: "On held-out test data, the model reached 4.18 MAE and 0.566 R².",
          metrics: [
            { label: "MAE", value: "4.18" },
            { label: "R²", value: "0.566" },
          ],
          placeholder: "Add interpretation or comparisons you actually ran.",
        },
      ],
    },
  },
  {
    slug: "thurs",
    name: "thurs",
    category: "product",
    description:
      "Chrome extension that lets users select regions of webpages and interact with an AI assistant without leaving the current page.",
    line: "Select a page region and talk to Gemini without leaving.",
    preview: {
      kind: "frame",
      caption: "Ask in place.",
      note: "Region → screenshot → Gemini",
    },
    story:
      "thurs is an AI browser assistant that stays on the page you're already looking at. I built a Chrome extension where you select a region of a webpage and talk to Gemini in place, including multimodal screenshot understanding.",
    tech: ["JavaScript", "Chrome Extensions", "Gemini"],
    highlights: [
      "In-page AI interaction",
      "Region selection",
      "Multimodal screenshot understanding",
    ],
    githubUrl: "https://github.com/samielrem/thurs",
    figure: {
      alt: "thurs Chrome extension: a selected page region and an in-place chat.",
      caption: "Ask in place.",
    },
    note: {
      title: "Why thurs?",
      paragraphs: [
        "I was taking an open-notes quiz on Canvas and got annoyed at constantly switching tabs. So naturally, I built an AI browser assistant instead.",
        "The quiz was due Thursday. Hence, thurs.",
      ],
    },
    caseStudy: {
      sections: [
        {
          id: "overview",
          title: "Overview",
          body: "thurs is a Chrome extension for selecting a region of a webpage and talking to an AI assistant without leaving that page.",
          placeholder: "Add a longer product overview.",
        },
        {
          id: "problem",
          title: "Problem",
          body: "Most AI chat lives in another tab. thurs is about asking something about the page in front of you, without the context switch.",
          placeholder: "Add more on the in-page workflow.",
        },
        {
          id: "approach",
          title: "Approach",
          body: "The interaction is selection-first: highlight a region, then talk to the assistant on the same page. That keeps the original content in view while you work.",
          placeholder: "Add more on the selection and chat flow.",
        },
        {
          id: "implementation",
          title: "Technical implementation",
          body: "I implemented it as a Chrome extension in JavaScript. Region capture feeds multimodal screenshot understanding, then Gemini, so the assistant can respond to what's actually on the page.",
          placeholder:
            "Add more on how capture, screenshots, and Gemini calls are wired.",
        },
      ],
    },
  },
  {
    slug: "sesame",
    name: "Sesame's Adventure 🐾",
    category: "product",
    tagline: "Open. See what's nearby. Go explore.",
    description:
      "Sesame helps you discover pet-friendly places around you, so you can spend less time searching and more time exploring together.",
    line: "Open. See what's nearby. Go explore.",
    preview: {
      kind: "frame",
      caption: "Four legs.",
      note: "One little adventure.",
    },
    figure: {
      alt: "A paw print at the center of nearby places.",
      caption: "Go explore.",
    },
    story: "",
    tech: [],
    highlights: [
      "Discover pet-friendly spots",
      "Find places that are great for dogs",
      "A little adventure idea for today",
    ],
    philosophy: "No planning required. Just open Sesame and go.",
    echo: "Four legs. One little adventure.",
    cta: {
      label: "Request a demo",
      href: sesameDemoMailto(),
    },
    note: {
      title: "Why I built it",
      paragraphs: [
        "I built Sesame as a birthday gift for a friend with a dog. I wanted to make the simple question of where can we go easier to answer, without having to search through a bunch of tabs before heading out.",
      ],
    },
    caseStudy: {
      sections: [
        {
          id: "what-you-can-do",
          title: "What you can do",
          body: null,
          bullets: [
            "Discover pet-friendly spots near you",
            "Find places that are great for dogs",
            "Get a little adventure idea for today",
            "Explore what's around you without endless searching",
            "Save places you want to visit",
          ],
          placeholder: "Add what you can do.",
        },
      ],
    },
  },
  {
    slug: "gas-wait",
    name: "Gas Wait",
    category: "modeling",
    tagline: "Should I fill up now, or wait?",
    description:
      "Gas Wait uses market data to predict whether U.S. gasoline prices are likely to rise or fall over the following week.",
    line: "Should I fill up now, or wait?",
    preview: {
      kind: "metrics",
      kicker: "Holdout test",
      metrics: [{ label: "Directional", value: "77.3%" }],
      note: "Correctly called whether prices would rise or fall, about 3 times out of 4.",
    },
    figure: {
      alt: "A path splitting toward fill up or wait.",
      caption: "Fill up, or wait.",
    },
    story: "",
    tech: [],
    highlights: [
      "77.3% directional accuracy",
      "Ridge regression",
      "Walk-forward validation",
    ],
    githubUrl: "https://github.com/samielrem/gas-wait",
    closing: {
      lead: "Should I get gas now, or should I wait?",
      body: "The goal is to turn complicated oil and gasoline market information into a simple decision anyone can understand.",
    },
    caseStudy: {
      sections: [
        {
          id: "problem",
          title: "The problem",
          body: "Gas prices change constantly, but consumers usually have no way to know whether today's price is likely to be better or worse in the near future.",
          paragraphs: [
            "Gas Wait explores whether market data can provide useful information to help people decide when to buy gas.",
          ],
          placeholder: "Add the problem.",
        },
        {
          id: "idea",
          title: "The idea",
          body: "The consumer-facing question is simple: should I fill up now, or wait?",
          paragraphs: [
            "The underlying model analyzes gasoline and petroleum-market information and converts the prediction into a signal anyone can read.",
          ],
          signals: [
            { label: "FILL UP", detail: "Prices may rise" },
            { label: "WAIT", detail: "Prices may fall" },
            {
              label: "NO CLEAR SIGNAL",
              detail: "The model is not confident enough",
            },
          ],
          placeholder: "Add the idea.",
        },
        {
          id: "how-it-works",
          title: "How it works",
          body: "The current model uses Ridge regression. It takes gasoline and petroleum-market information, estimates the expected price movement, and turns that into a consumer signal.",
          pipeline: [
            "Market data",
            "Feature engineering",
            "Predictive model",
            "Expected price movement",
            "Consumer signal",
          ],
          paragraphs: ["The major inputs:"],
          bullets: [
            "U.S. retail gasoline prices",
            "Crude oil prices",
            "Wholesale gasoline prices",
            "Gasoline inventories",
            "Recent price movement",
            "Seasonal patterns",
          ],
          placeholder: "Add how it works.",
        },
        {
          id: "results",
          title: "The results",
          body: "The model correctly predicted whether gasoline prices would rise or fall about 3 out of 4 times on historical data it had never seen before.",
          metrics: [
            { label: "Directional accuracy", value: "77.3%" },
            { label: "Baseline directional accuracy", value: "68.1%" },
            { label: "Average prediction error", value: "2.86¢" },
            { label: "Baseline average error", value: "3.95¢" },
            { label: "Weeks in final holdout test", value: "525" },
            { label: "Walk-forward directional accuracy", value: "79.1%" },
          ],
          placeholder: "Add the results.",
        },
        {
          id: "findings",
          title: "What I found",
          body: "The biggest improvement came from incorporating daily crude oil and wholesale gasoline market information. Those movements can provide useful information about where consumer gasoline prices are headed.",
          paragraphs: [
            "Inventory and seasonal information provided relatively small additional improvements in the initial experiments. Regional experiments showed that geographic matching can help in some areas, but a geographically closer wholesale market is not automatically a better predictor.",
          ],
          placeholder: "Add the findings.",
        },
        {
          id: "built-with",
          title: "Built with",
          body: "Python, pandas, NumPy, scikit-learn, Matplotlib, and the EIA API.",
          bullets: [
            "Data ingestion and preprocessing",
            "Feature engineering and predictive modeling",
            "Time-series backtesting and walk-forward validation",
            "Point-in-time data handling and leakage testing",
            "Prediction CLI, signal generation, and prediction history",
            "Automated tests — 59 tests passing",
          ],
          placeholder: "Add the engineering.",
        },
        {
          id: "validation",
          title: "Validation",
          body: "The model was evaluated with chronological time-series testing and walk-forward validation, so later weeks are tested against what could have been known at the time — not a random mix of the past and the future.",
          paragraphs: [
            "The system includes safeguards against using future information when making historical predictions.",
          ],
          placeholder: "Add validation.",
        },
        {
          id: "limitations",
          title: "Current limitations",
          body: null,
          bullets: [
            "Predicts approximately one week ahead",
            "Predicts the national U.S. average",
            "Does not predict individual gas stations",
            "Does not currently provide reliable 24–72 hour local predictions",
            "Does not guarantee that a prediction will be correct",
            "Does not guarantee savings",
          ],
          placeholder: "Add limitations.",
        },
        {
          id: "next",
          title: "What's next",
          body: "The current MVP is a weekly national-level research tool. The long-term goal is a local 24–72 hour prediction tool.",
          paragraphs: [
            "Future versions could include local and metro gasoline predictions, 24-hour, 48-hour, and 72-hour horizons, and location-aware recommendations.",
          ],
          example: {
            kicker: "Future vision",
            title: "WAIT",
            body: "Gas prices may be lower over the next 48 hours.",
            note: "New York City — not a current capability.",
          },
          placeholder: "Add what's next.",
        },
      ],
    },
  },
  {
    slug: "proto-lab",
    name: "Proto-Lab",
    category: "product",
    kicker: "PROJECT 06",
    status: "in-development",
    clickable: false,
    tagline: "Protocol first. Automation attached.",
    description:
      "A local-first development environment for scientific protocols and Opentrons automation.",
    line: "A local-first development environment for scientific protocols and Opentrons automation.",
    preview: {
      kind: "image",
      src: "/projects/proto-lab-steps.png",
      fit: "contain",
    },
    figure: {
      alt: "A generalized demo timeline of manual and automated protocol steps.",
      caption: "Protocol first.",
    },
    story: "",
    tech: [],
    highlights: [
      "Protocol-first workspace",
      "Manual and automated steps",
      "Local-first",
    ],
    philosophy: "Protocol first. Automation attached.",
    note: {
      title: "Why I built it",
      paragraphs: [
        "Working in lab automation got me thinking more deeply about how scientific software could better connect protocols, automation code, simulation, and traceability.",
        "Outside of work, I started building Proto-Lab as a personal exploration of what a development environment could look like if the scientific protocol, rather than the code file, was the center of the experience.",
      ],
      footnote:
        "Proto-Lab is a personal project developed independently outside of work. All workflows, protocol examples, screenshots, and sample data shown here are fictional demo content and do not represent Pharm to Food systems, protocols, or internal processes.",
    },
    closing: {
      lead: "Protocol first. Automation attached.",
      body: "The protocol stays at the center. Automation, simulation, revisions, and run history belong to that workflow instead of sitting in separate tools.",
    },
    caseStudy: {
      sections: [
        {
          id: "problem",
          title: "Scientific automation gets fragmented.",
          body: "A single laboratory workflow can be spread across SOP documents, Python scripts, simulation tools, manual notes, revisions, and run history.",
          paragraphs: [
            "When those pieces live in different places, it is hard to see how the scientific procedure, the automation, and what actually ran belong together.",
          ],
          placeholder: "Add the problem.",
        },
        {
          id: "idea",
          title: "Make the protocol the workspace.",
          body: "The scientific protocol becomes the primary object. Each protocol can hold scientific steps, manual actions, automated actions, Opentrons code, simulation output, revisions, run history, and notes or review.",
          paragraphs: [
            "Code is attached to the protocol. It is not the thing you organize everything else around.",
            "Scientific steps and automation programs are not always one-to-one. A single automation program may span multiple scientific steps and include points where human intervention is required before automation continues.",
          ],
          placeholder: "Add the idea.",
        },
        {
          id: "workflow",
          title: "A mixed workflow",
          body: "A protocol can move between human actions and robot execution without splitting the work across tools.",
          workflow: {
            kicker: "Protocol timeline",
            steps: [
              {
                kind: "PROTOCOL",
                title: "Scientific Protocol",
              },
              {
                index: "01",
                kind: "MANUAL",
                title: "Sample preparation",
              },
              {
                index: "02",
                kind: "AUTOMATED",
                title: "Liquid handling",
                attachments: ["Opentrons Python", "Simulation"],
              },
              {
                index: "03",
                kind: "MANUAL",
                title: "Operator intervention",
              },
              {
                index: "04",
                kind: "AUTOMATED",
                title: "Continue automation",
                attachments: ["Opentrons Python"],
              },
              {
                kind: "HISTORY",
                title: "Run History",
              },
            ],
          },
          shots: [
            {
              src: "/projects/proto-lab-steps.png",
              alt: "Demo Proto-Lab protocol with mixed manual and automated scientific steps.",
              caption:
                "Proto-Lab demo workflow combining manual and automated scientific steps.",
            },
            {
              src: "/projects/proto-lab-code.png",
              alt: "Demo Proto-Lab editor with Opentrons Python attached to a scientific step.",
              caption:
                "Demo editor showing automation attached to a protocol step.",
            },
          ],
          placeholder: "Add the workflow.",
        },
        {
          id: "principles",
          title: "Product principles",
          body: null,
          signals: [
            {
              label: "Protocol-first",
              detail: "The scientific procedure is the primary object.",
            },
            {
              label: "Manual + automated",
              detail:
                "A workflow can move naturally between human actions and robot execution.",
            },
            {
              label: "Local-first",
              detail:
                "Protocols and development artifacts should remain usable locally without depending on a cloud service.",
            },
            {
              label: "Traceable",
              detail:
                "Code, simulation, revisions, and run history should stay connected to the protocol that produced them.",
            },
          ],
          placeholder: "Add the principles.",
        },
        {
          id: "direction",
          title: "Where it stands",
          body: "Proto-Lab is still in development, but the local workspace already treats the protocol as the primary object.",
          paragraphs: [
            "AI-assisted review is present in the interface and still evolving. I am not treating it as a finished capability.",
          ],
          meta: [
            {
              label: "Current capabilities",
              value:
                "Local protocol workspace, structured scientific steps, attached Python automation, revision history, deterministic validation, Opentrons simulation, protocol versioning, run history",
            },
            {
              label: "Experimental / evolving",
              value: "AI-assisted review",
            },
            {
              label: "Status",
              value: "In development",
            },
          ],
          placeholder: "Add the direction.",
        },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function isProjectClickable(project: Project) {
  return project.clickable !== false;
}

export function getProjectSlugs() {
  return projects.map((project) => project.slug);
}

export function getOpenProjectSlugs() {
  return projects.filter(isProjectClickable).map((project) => project.slug);
}
