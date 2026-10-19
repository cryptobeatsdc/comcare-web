import type { Dictionary } from "./es";

export const en: Dictionary = {
  meta: {
    title: "Technology services on the Costa Blanca — IT, WiFi, TV, Smart Home, CCTV & Solar",
    description:
      "One local team in Benitachell: computer support, networks and WiFi, international satellite TV, smart home, CCTV and solar energy. ES/EN/NL/DE.",
    home: "Home",
    ogAlt: "Mediterranean villa at dusk on the Costa Blanca",
  },
  nav: {
    brand: "CostaTech",
    topbar: "Benitachell · Costa Blanca — since 1994",
    links: [
      { href: "#servicios", label: "Solutions" },
      { href: "#villa", label: "Your home" },
      { href: "#proceso", label: "How it works" },
      { href: "#faq", label: "FAQ" },
      { href: "#contacto", label: "Contact" },
    ],
    cta1: "Quote in 24h",
    cta2: "Get mine",
    callAria: "Call",
    openAria: "Open menu",
    mainAria: "Main",
    mobileAria: "Mobile",
    langAria: "Change language",
  },
  hero: {
    badge: "Benitachell · Costa Blanca — since 1994",
    title: "Your home, sorted. Power, WiFi, TV and calm.",
    sub: "Internet that reaches the garden, your TV from home, cameras you check from anywhere and solar that lowers the bill. One local team, in your language — in store, at home or remote.",
    cta1: "Get my quote",
    cta2: "Reply within 24h",
    whatsapp: "Direct WhatsApp",
    villa: "Simulate my home",
    micro: "PHYSICAL STORE + ON-SITE + REMOTE · ES / EN / NL / DE · REPLY <24H ON WORKDAYS",
    play: "Play video",
    pause: "Pause video",
  },
  video: {
    sectionAria: "Video: a home that runs itself",
    playAria: "Play video: aerial view of a villa with solar panels",
    badge: "0:30 · AERIAL VIEW",
    title: "See a home that already runs itself",
    sub: "Drone flight: villa + solar on the Costa Blanca",
    imgAlt: "Solar panels at sunset",
    dialogAria: "Aerial video",
    closeAria: "Close video",
  },
  trust: {
    aria: "Brands we work with",
    prefix: "We work with —",
  },
  solutions: {
    eyebrow: "Solutions · by room of your home",
    title: "Everything your home needs to run itself.",
    sub: "No jargon. Scroll and watch each solution appear.",
    tabsAria: "Solutions",
    step: "Step",
    cta1: "I want this",
    cta2: "Get a quote",
    detail: "See the full solution",
    short: {
      soporte: "Computers",
      redes: "WiFi",
      tv: "TV from home",
      smart: "Smart home",
      cctv: "Cameras",
      solar: "Solar",
    },
  },
  catalog: {
    soporte: {
      title: "Computers that run fast again",
      short: "Sales, repair, cleanup, backups and antivirus. In store, at home or remote.",
      bullets: ["Repair & upgrades", "Backup & recovery", "Remote support"],
      espacio: "Study",
      dolor: "A slow PC or a virus right when you need it.",
      metaTitle: "Computer support in Benitachell — shop, home visits and remote",
      intro:
        "Slow computer, virus or no backups? We repair, upgrade and clean computers, replace disks and keep everything protected. In our shop, at your home or remotely.",
    },
    redes: {
      title: "WiFi all over the house, no dropouts",
      short: "Fibre, Mesh WiFi and coverage expansion. Also for businesses and yachts.",
      bullets: ["Multi-room Mesh", "Business failover", "Yacht Router"],
      espacio: "Whole villa + garden",
      dolor: "WiFi that doesn't reach upstairs or the garden.",
      metaTitle: "Networks and WiFi in Benitachell — full coverage and businesses",
      intro:
        "WiFi that doesn't reach the bedroom or garden can be fixed. We install fibre, expand coverage with mesh and keep the whole house connected. Also for businesses and boats.",
    },
    tv: {
      title: "Your TV from home, like being there",
      short: "Dutch, Belgian, French, British and German. Smart TV and home cinema.",
      bullets: ["CanalDigitaal / Vlaanderen", "TéléSAT / TNTSAT / Freesat", "Sonos & cinema"],
      espacio: "Living room",
      dolor: "You miss your channels from home.",
      metaTitle: "International TV in Benitachell — satellite and Smart TV",
      intro:
        "Missing your home channels? We install and tune dishes, receivers and cards: CanalDigitaal, TV Vlaanderen, TéléSAT, Freesat and German TV. Plus sound and home cinema.",
    },
    smart: {
      title: "A smart, comfortable home",
      short: "Lights, irrigation, blinds and control from your phone, wherever you are.",
      bullets: ["Lights & irrigation", "Blinds", "Remote control"],
      espacio: "Garden + blinds",
      dolor: "Irrigation and lights that depend on you being there.",
      metaTitle: "Smart home in Benitachell — lights, irrigation and blinds",
      intro:
        "Lights, irrigation, blinds and temperature controlled from your phone, at home or away. We automate your daily routines so your house works on its own.",
    },
    cctv: {
      title: "Security you can watch",
      short: "Ubiquiti and Foscam cameras to watch your home when you're away.",
      bullets: ["Ubiquiti UniFi", "Mobile access", "Great for 2nd homes"],
      espacio: "Perimeter",
      dolor: "Months with the house empty and unseen.",
      metaTitle: "Security cameras in Benitachell — CCTV on your phone",
      intro:
        "Watch your home from anywhere, with cameras recording day and night. We install UniFi and Foscam systems with phone access. Ideal for second homes.",
    },
    solar: {
      title: "Save with solar energy",
      short: "Self-consumption and off-grid with Victron for villas and country homes.",
      bullets: ["Self-consumption", "Off-grid", "Victron Energy"],
      espacio: "Roof",
      dolor: "A bill that climbs every month.",
      metaTitle: "Solar energy in Benitachell — self-consumption and off-grid",
      intro:
        "Cut your electricity bill with solar self-consumption, or live off-grid with a Victron system. We study your case and size what you need.",
    },
  },
  villa: {
    eyebrow: "Your home · visual demo",
    title: "Tap a point and see what changes.",
    sub: "A simulation to prepare your request. No real devices connected.",
    imgAlt: "Villa with pool and garden at sunset",
    zones: {
      living: "Living room · TV",
      roof: "Roof · Solar",
      garden: "Garden · Irrigation",
    },
    hotspots: {
      redes: "WiFi",
      cctv: "Cameras",
      solar: "Solar",
      tv: "TV",
      smart: "Smart home",
      soporte: "PC",
    },
    copy: {
      redes: "Mesh WiFi that reaches the garden and upstairs. Failover for businesses and Yacht Router.",
      cctv: "Cameras you can see from your phone. Ideal if the house stays empty for months.",
      smart: "Lights, irrigation and blinds on schedules and remote control.",
      tv: "Your home channels via satellite or app: NL, BE, FR, UK, DE.",
      soporte: "Slow PC, virus or missing backup: we get it up to date.",
      solar: "Self-consumption or off-grid with Victron to lower the bill.",
    },
    selectedAria: "selected",
    unselectedAria: "not selected",
    added: "✓ Added",
    add: "Add to my request",
    continue: "Continue",
    continueWith: "Continue with {n}",
    selectionOne: "1 system selected. Saved for the form.",
    selectionMany: "{n} systems selected. Saved for the form.",
  },
  segments: {
    eyebrow: "Why now",
    title: "Your pain points, solved.",
    tabsAria: "Profiles",
    tabs: {
      hogar: {
        label: "I live here",
        title: "Costs under control, zero dropouts",
        text: "WiFi that reaches everywhere, computers up to date and a lower solar bill. Local upkeep in Benitachell and around.",
        alt: "Modern villa lit up at sunset",
      },
      fuera: {
        label: "Second home",
        title: "Your home watched while you're away",
        text: "Cameras + smart home + internet backup. Watch and control it from your country — installed turnkey.",
        alt: "Security camera on a wall",
      },
      negocio: {
        label: "Business / rental / boat",
        title: "No downtime in front of customers",
        text: "Internet failover, guest WiFi, CCTV and fast support. For bars, holiday rentals and yachts.",
        alt: "Mesh WiFi network equipment",
      },
    },
    cta1: "Get my quote",
    cta2: "Reply within 24h",
  },
  proof: {
    eyebrow: "Proof · verifiable facts, no made-up numbers",
    title: "A home that already runs itself. Yours can be next.",
    stats: [
      ["Since 1994", "Local store in Benitachell"],
      ["4 languages", "ES · EN · NL · DE"],
      ["< 24h", "Workday response"],
    ],
    cta1: "I want the same",
    cta2: "Get a quote",
  },
  process: {
    eyebrow: "How it works",
    title: "From the first call to using it, in 4 steps.",
    steps: [
      {
        n: "01",
        t: "We understand",
        d: "2 minutes on WhatsApp or the form, in your language. Usage, home and photos. Nothing generic: all tailored to your property.",
        alt: "Technician repairing a laptop",
      },
      {
        n: "02",
        t: "We design",
        d: "One connected system: network, TV, cameras, smart home and solar planned as one, not as loose parts.",
        alt: "Mesh WiFi network equipment",
      },
      {
        n: "03",
        t: "We install",
        d: "Turnkey, clean and explained. Permits, tuning and full integration from day one.",
        alt: "Technician installing solar panels on a roof",
      },
      {
        n: "04",
        t: "You use it",
        d: "We check it with you, you learn it in minutes and we stay available in store + remote if you're not in Spain.",
        alt: "Family watching TV on the sofa",
      },
    ],
    start: "Start here",
    info: [
      ["Physical store", "Carrer les Capelletes 17, Benitachell"],
      ["Languages", "ES · EN · NL · DE (+FR TV)"],
      ["Coverage", "Jávea · Moraira · Calpe · Dénia"],
      ["Opening hours", "Mon–Fri 10:00–14:00"],
    ],
  },
  statement: {
    eyebrow: "Simple, the way it should be",
    title: "Energy gets complicated. We make it simple.",
    cta1: "Talk to a technician",
    cta2: "No obligation",
  },
  faq: {
    title: "Frequently asked questions",
    sub: "We answer the usual things before you call. Not here? Send a WhatsApp.",
    items: [
      {
        q: "Do you speak my language?",
        a: "Yes: Spanish, English, Dutch and German. French too for TV. Pick your language in the form.",
      },
      {
        q: "Do you come to my home?",
        a: "Yes, in Benitachell, Jávea, Moraira, Calpe, Dénia and nearby. Also in store and remote.",
      },
      {
        q: "Can you help if I'm not in Spain?",
        a: "Yes — remote support for computers, and CCTV + Smart Home to watch and control your second home.",
      },
      {
        q: "Can you set up my TV with my current card?",
        a: "We check your dish, receiver and card (CanalDigitaal, Vlaanderen, TéléSAT, Freesat, German) and tell you what works.",
      },
      {
        q: "My WiFi is slow — can you fix it?",
        a: "Yes: we measure coverage, switch to Mesh where needed and split a guest network if you rent.",
      },
      {
        q: "How long does a solar quote take?",
        a: "Initial quote within 24 working hours with your details and photos. The site visit confirms power and placement.",
      },
    ],
  },
  visit: {
    eyebrow: "Visit us",
    title: "Our store in Benitachell",
    sub: "In the centre of the village. Come by, call us or send us a message.",
    addressLabel: "Address",
    address: "Carrer les Capelletes 17 · 03726 Benitachell",
    hoursLabel: "Opening hours",
    hours: "Monday to Friday · 10:00–14:00",
    phoneLabel: "Phone",
    directions: "Get directions",
    call: "Call us",
    coverageLabel: "Coverage area",
    towns: ["Jávea", "Moraira", "Calpe", "Dénia"],
    coverageNote: "In store, at your home or remotely.",
    mapAria: "Map with the location of our store in Benitachell",
    mapConsentTitle: "Show the store map",
    mapConsentText:
      "The map is loaded by Google. If you accept, Google may install cookies and receive your IP address. You can read the address above without loading it.",
    mapConsentButton: "Load the map",
    mapConsentPolicy: "Cookie policy",
  },
  pages: {
    common: {
      backToServices: "All solutions",
      includes: "What's included",
      typical: "What we solve",
      otherSolutions: "Other solutions",
      cta1: "Get a quote",
      cta2: "Reply within 24h",
      whatsapp: "Direct WhatsApp",
    },
    services: {
      metaTitle: "Solutions for your home — technology in Benitachell, Costa Blanca",
      metaDescription:
        "Six solutions explained without jargon: computer support, networks and WiFi, international TV, smart home, security cameras and solar energy.",
      eyebrow: "Solutions",
      title: "Six solutions. One team.",
      sub: "Choose what your home or business needs. No jargon, and a reply within 24 hours.",
    },
    business: {
      metaTitle: "IT and networks for businesses — Benitachell · Costa Blanca",
      metaDescription:
        "Networks with automatic backup, guest WiFi, cameras and fast support for businesses, holiday rentals and boats.",
      eyebrow: "For businesses",
      title: "Keep your business running.",
      sub: "Networks that don't drop, WiFi for your guests and cameras that keep watch after you close. For businesses, rentals and boats.",
      pointsTitle: "What we set up",
      points: [
        {
          t: "Internet that doesn't drop",
          d: "Main line with backup: if one connection fails, the other takes over. Payments, bookings and tills keep working.",
        },
        {
          t: "WiFi for your guests",
          d: "A separate guest network, fast and kept apart from your own devices.",
        },
        {
          t: "Cameras at hand",
          d: "CCTV you can check from your phone, with maintenance and no surprises.",
        },
        {
          t: "Internet on board",
          d: "Yacht Router: stable internet in port and at sea, with multiple SIMs.",
        },
      ],
    },
    remote: {
      metaTitle: "Remote support — help for your computer wherever you are",
      metaDescription:
        "Remote support in your language: we guide you step by step and fix your computer from Benitachell, wherever you are. Reply within 24h.",
      eyebrow: "Remote support",
      title: "Your computer, fixed from wherever you are.",
      sub: "Living here or spending months abroad, we help you by remote control. You just accept the connection; we do the rest.",
      stepsTitle: "How it works",
      steps: [
        {
          t: "You tell us",
          d: "By phone or WhatsApp, in your language. We look at what's happening together.",
        },
        {
          t: "You accept the connection",
          d: "We guide you step by step. You see everything we do on your screen.",
        },
        {
          t: "All done",
          d: "We fix it, explain it and check everything works before we finish.",
        },
      ],
      tipsTitle: "Good for",
      tips: [
        "Slow computers, viruses and unwanted programs.",
        "Setting up email, printers and software.",
        "Questions and step-by-step fixes, with no rush.",
      ],
    },
    legal: {
      metaTitle: "Legal notice, privacy and cookies — ComCare Benitachell",
      metaDescription:
        "Who runs this website, how we handle the data you send us and which cookies we use. All explained in plain language.",
      eyebrow: "Legal",
      title: "The legal bits, made clear.",
      sub: "Who runs this website, what we do with your data and which cookies we use. No small print.",
      updatedLabel: "Last updated",
      updated: "October 2026",
      tocLabel: "On this page",
      back: "Back to legal information",
      missing: "To be completed",
      ownerTitle: "Company details",
      ownerNote: "These details identify the owner of this website and the data controller.",
      labels: {
        legalName: "Legal name",
        taxId: "Tax ID",
        address: "Address",
        phone: "Phone",
        email: "Email",
        registry: "Company register",
      },
      draftNotice:
        "Draft pending review: company details are still missing (marked as «To be completed»). Have the text checked by a legal adviser before publishing.",
      hub: {
        aviso: {
          title: "Legal notice",
          desc: "Owner, contact details and rules for using this website.",
        },
        privacidad: {
          title: "Privacy",
          desc: "What data we collect in the form and how we handle it.",
        },
        cookies: {
          title: "Cookies",
          desc: "The technical cookies we use and the map with consent.",
        },
      },
      reset: {
        title: "Google map",
        text: "You can withdraw your consent for the map at any time. It will ask for permission again the next time you open it.",
        button: "Withdraw map consent",
        done: "Done. The map is switched off again.",
      },
      docs: {
        aviso: {
          title: "Legal notice",
          intro:
            "This website presents the technology services of ComCare in Benitachell and the Costa Blanca. By using it you accept the rules explained here.",
          sections: [
            {
              h: "Who runs this website",
              p: [
                "The owner's details are shown in the box on this page. You can contact us by phone or email with any question about the website.",
              ],
            },
            {
              h: "What this website is for",
              p: [
                "To explain our services and let you ask for a quote. The information is a guide: the scope and price of each job are confirmed in a personalised quote.",
              ],
            },
            {
              h: "Using the website",
              p: [
                "Please use the website in good faith and in line with the law. You may not try to access private areas, alter how it works, scrape its content or use it for unlawful purposes.",
              ],
            },
            {
              h: "Intellectual property",
              p: [
                "The texts, design and graphic elements of this website belong to the owner or are used under licence. The sample photos come from Unsplash and Pexels and will be replaced with our own images. Please do not copy or reuse the content without permission.",
              ],
            },
            {
              h: "Liability and links",
              p: [
                "We work to keep the information up to date, but there may be errors or last-minute changes. The map and other links lead to third-party websites (Google), whose terms we do not control.",
              ],
            },
            {
              h: "Applicable law",
              p: [
                "This website is governed by Spanish law. Any dispute will be settled by the competent courts, without giving up any rights granted to consumers by law.",
              ],
            },
          ],
        },
        privacidad: {
          title: "Privacy policy",
          intro:
            "Your name, your phone number and what you tell us are used to answer you. Nothing else. Here we explain how we handle them, with the clarity we would like to receive.",
          sections: [
            {
              h: "Data controller",
              p: [
                "The controller is the owner of this website, whose details are shown in the box. For any privacy question you can write to the email address indicated.",
              ],
            },
            {
              h: "What data we collect",
              p: [
                "What you write in the form: name, phone or WhatsApp, language, the service you are interested in and the message with what you need.",
                "If you choose services in the home simulator, the selection is saved only in your browser and is sent with the request when you send it.",
                "Our hosting provider may log technical connection data, such as your IP address and the date, for security reasons.",
              ],
            },
            {
              h: "Why we use it and our legal basis",
              p: [
                "To answer your request and prepare a quote. The legal basis is your consent when you tick the box and send the form.",
                "We do not use your data for advertising or sell it. We do not make automated decisions with it.",
              ],
            },
            {
              h: "How long we keep it",
              p: [
                "For as long as needed to handle your request and, afterwards, for the period required by applicable legal obligations. When it is no longer needed, we delete it.",
              ],
            },
            {
              h: "Who can see it",
              p: [
                "Only the ComCare team. The technology providers that help us (hosting, email) may access it as data processors under contract. We do not pass data to third parties except where legally required.",
              ],
            },
            {
              h: "Your rights",
              p: [
                "You can ask for access, correction, deletion, objection, restriction or portability of your data by writing to the owner's email address.",
                "If you believe we have not handled it properly, you can complain to the Spanish Data Protection Agency (www.aepd.es).",
              ],
            },
            {
              h: "Security and minors",
              p: [
                "We apply reasonable measures to protect your data. No system is infallible, but we only store what is necessary.",
                "This website is intended for adults. Please do not send data about minors.",
              ],
            },
            {
              h: "Changes",
              p: [
                "If we change this policy, we will update the date shown above. We recommend checking it from time to time.",
              ],
            },
          ],
        },
        cookies: {
          title: "Cookie policy",
          intro:
            "This website uses the bare minimum. There are no advertising or tracking cookies. We only store your language and, if you accept, we load the Google map.",
          sections: [
            {
              h: "What cookies and local storage are",
              p: [
                "They are small pieces of data your browser stores on your device. Some are needed for the website to work; others are optional. We also use browser local storage, which works in a similar way.",
              ],
            },
            {
              h: "What we store",
              p: [
                "Cookie «lang»: remembers the language you choose so we do not ask you on every visit. It lasts 1 year. It is technical and necessary.",
                "Local storage «map-consent»: remembers whether you agreed to load the Google map, so we do not ask you again. It stays in your browser.",
                "We do not use advertising, analytics or social media cookies.",
              ],
            },
            {
              h: "The Google map",
              p: [
                "The map does not load until you press the button. If you accept, Google may install its own cookies and receive your IP address, according to its policies. If you do not accept, you can still use the website and read the address.",
              ],
            },
            {
              h: "How to change your choice",
              p: [
                "You can clear the map consent with the button below. You can also block or delete cookies in your browser settings.",
              ],
            },
            {
              h: "Changes",
              p: [
                "If we add a service that uses cookies, we will update this page and ask for your permission again where necessary.",
              ],
            },
          ],
        },
      },
    },
  },
  lead: {
    title: "Get your quote in 2 minutes.",
    sub: "No obligation. We guide you step by step.",
    or: "Or message us:",
    stepsAria: "Quote steps",
    stepLabels: { servicio: "Service", datos: "Your details", mensaje: "Tell us more" },
    hintNeedService: "First pick your service to continue.",
    hintNeedDetails: "Complete your details to continue.",
    tipServicio: "Tip: start with Service — it takes just a moment.",
    tipDatos: "Going well. Now add your details so we can reach you.",
    tipMensaje: "Almost done: tell us what's wrong and we'll send your request.",
    inviteTitle: "What does your home need?",
    inviteSub: "Three steps, two minutes. Start by picking your service and we'll guide you.",
    inviteCta: "Choose my service",
    serviceTitle: "What do you need?",
    serviceLabel: "Service",
    servicePlaceholder: "Tap here and pick yours",
    listAria: "Pick a service",
    confirm: "Confirm and continue",
    dataTitle: "Your details",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone / WhatsApp",
    langLabel: "Language",
    back: "Back",
    continue: "Continue",
    msgTitle: "Tell us more",
    msgLabel: "Your home and what's wrong",
    msgPlaceholder: "E.g.: 2-storey villa in Moraira, WiFi doesn't reach the garden and I'd like 2 cameras...",
    privacy: "I agree to be contacted about my request. We never share your data.",
    privacyLink: "Privacy policy",
    sending: "Sending…",
    submit: "Get my quote",
    ok: "Received. We'll contact you within 24 working hours.",
    errName: "Enter your name",
    errPhone: "Invalid phone/WhatsApp",
    errMsg: "Tell us a bit more (min. 10 characters)",
    errPrivacy: "You must accept the privacy note",
    errSend: "Could not send.",
    errNet: "Network error. Try WhatsApp.",
  },
  chat: {
    budget: "Quote",
    title: "Let's talk",
    hours: "Mon–Fri 10:00–14:00 · ES/EN/NL/DE",
    budget24: "Quote in 24h",
    waDirect: "Direct WhatsApp",
    remote: "Remote support",
    openAria: "Open contact chat",
  },
  footer: {
    brand: "CostaTech · Benitachell",
    about:
      "One local team for your connected home: IT, networks, international TV, smart home, CCTV and solar. Since 1994.",
    address: "Carrer les Capelletes 17, 03726 Benitachell · Mon–Fri 10:00–14:00",
    contact: "Contact",
    solutions: "Solutions",
    credits: "Photos: Unsplash / Pexels (free use). No made-up numbers: verified reviews coming soon.",
  },
};
