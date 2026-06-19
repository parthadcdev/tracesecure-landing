/** @typedef {'generic' | 'wine' | 'supplements' | 'specialtyFood'} LandingVariant */

export const LANDING_VARIANTS = {
  generic: 'generic',
  wine: 'wine',
  supplements: 'supplements',
  specialtyFood: 'specialtyFood',
};

export const landingContent = {
  generic: {
    hero: {
      headlineTop: 'Turn Every Product Into',
      headlineBottom: 'a Customer You Can Reach',
      backgroundImage: '/images/hero-product-right.webp',
      backgroundPosition: 'center right',
      description:
        'Your retail buyers are anonymous. TraceSecure turns every product you sell into a lead-gen tool: when a customer scans the QR code, they get an instant reward for sharing their email — and proof your product is the real thing. You get a verified lead. They get value. No app, no crypto wallet required.',
      badges: ['Build Loyalty', 'Prove Authenticity', 'Stop Counterfeits', 'EU DPP & EUDR Ready'],
    },
    howItWorks: {
      title: 'From Scan to Loyal Customer in 3 Simple Steps',
      subtitle: 'A quick explainer shows the flow — scan to story to signup.',
      steps: [
        {
          number: '01',
          title: 'Apply Your Tag',
          description:
            'You (or your label designer) add our unique, secure QR code to your products.',
        },
        {
          number: '02',
          title: 'Customer Scans & Engages',
          description:
            "Your customer scans at home, sees your product's authentic story, and a compelling offer: \"Join our club and earn an instant reward.\"",
        },
        {
          number: '03',
          title: 'Capture the Lead',
          description:
            'They voluntarily share their email to claim the reward. You just got a new, high-value customer lead. We handle all the reward fulfillment.',
        },
      ],
    },
    valueProps: {
      title: 'How This Grows Your Business',
      subtitle: 'A direct, two-way channel to buyers — built into every product you sell.',
      benefits: [
        {
          category: 'MAKE MORE MONEY',
          title: 'Build Your Owned Audience',
          description:
            'Turn anonymous retail and marketplace buyers into opt-in leads. Use instant micro-rewards to drive signups for your highest-margin direct sales program.',
          example: 'Grow memberships and repeat buyers from every scan.',
        },
        {
          category: 'CONNECT WITH CUSTOMERS',
          title: 'Tell Your Brand Story',
          description:
            'Share origin stories, care guides, and product details. Build a direct relationship and turn one-time purchases into loyal fans.',
          example: 'Drive repeat purchases with engaging content.',
        },
        {
          category: 'BUILD TRUST',
          title: 'Prove Authenticity (Instantly)',
          description:
            'Every scan verifies your product is genuine — protecting your brand and giving customers peace of mind.',
          example: 'Instant authenticity checks on every unit.',
        },
      ],
    },
    whyMatters: {
      title: 'The "Customer Gap": Your Biggest Untapped Opportunity',
      problem: [
        'You invest in quality products. A customer buys through retail, a marketplace, or a distributor hundreds of miles away. The relationship often ends there.',
        'You may not know who they are. You cannot thank them, share your story, or invite them to buy direct next time.',
      ],
      problemClosing:
        'You are losing thousands of potential, high-margin, lifelong customers every single year.',
      challengeTitle: 'The Challenge Facing Brands',
      challenges: [
        {
          value: '$4.5T+',
          title: 'Global counterfeit goods market',
          description:
            'Counterfeits erode trust and margin across every category — from bottles and jars to bags and tins (OECD).',
        },
        {
          value: '0% visibility',
          title: 'Anonymous retail buyers',
          description:
            'You cannot thank them, tell your story, or invite them to buy direct next time.',
        },
        {
          value: 'High margin',
          title: 'Missed DTC sales',
          description: 'Thousands of potential, lifelong customers slip away every year.',
        },
      ],
      solutionTitle: 'A Direct Marketing Channel in Every Product',
      solutionDescription:
        'TraceSecure closes the "Customer Gap." Our Digital Passport does not just verify your product — it makes a compelling offer. We give customers a small, instant reward for sharing their email, turning a scan into a confirmed lead for your list or loyalty program.',
      transformations: [
        {
          title: 'Digital Passport QR',
          subtitle: 'A direct channel',
          description:
            'Every unit becomes a two-way marketing channel that invites buyers to connect, join your list, and become loyal fans.',
        },
        {
          title: 'Story + Offer',
          subtitle: 'From scan to signup',
          description:
            'Show your story, product details, and a clear offer like "Join our list for 10% off your next order."',
        },
        {
          title: 'Proven Authenticity',
          subtitle: 'Trust built-in',
          description:
            'Every scan proves authenticity, protecting your brand and building consumer trust.',
        },
        {
          title: 'Actionable Insights',
          subtitle: 'Know your buyers',
          description:
            'See engagement and leads from scans to inform marketing and inventory decisions.',
        },
      ],
    },
    whyDifferent: {
      comparisons: [
        {
          vs: 'vs. Legacy Traceability',
          competitor: 'They Stop at Authentication',
          competitorDesc:
            'Tools like Wholechain and TraceX are logistics platforms that stop at the point of sale. Their job is done once the product is authenticated.',
          traceSecure: 'We Start at the Sale',
          traceSecureDesc:
            'We turn every authentication scan into a direct, high-value lead for your DTC and loyalty programs.',
        },
        {
          vs: 'vs. DTC Marketing Tools',
          competitor: 'They Are Blind to Retail Buyers',
          competitorDesc:
            'Email and CRM tools like Mailchimp and Klaviyo are powerful, but they cannot see anonymous buyers in stores or marketplaces.',
          traceSecure: 'We Are the Missing Link',
          traceSecureDesc:
            'We bridge the physical-to-digital "Customer Gap," capturing unknown buyers and delivering them to your list.',
        },
        {
          vs: 'vs. Other Web3 Platforms',
          competitor: 'They Are Too Complex',
          competitorDesc:
            'Other platforms require customers to download a complex crypto wallet, killing conversion rates.',
          traceSecure: 'We Win with Simplicity',
          traceSecureDesc:
            'We use a simple, email-based rewards wallet — zero friction. Customers get real value without managing crypto.',
        },
      ],
    },
    winWinWin: {
      wins: [
        {
          title: 'The Brand Wins',
          description:
            'You get verified customer leads for your highest-margin channel. You solve the "Customer Gap" and build a measurable marketing list.',
        },
        {
          title: 'The Customer Wins',
          description:
            'They get real value: an instant reward for their time, plus your authentic product story and peace of mind. A fair exchange, not one-way data capture.',
        },
        {
          title: 'The Ecosystem Wins',
          description:
            'Rewards funded from our treasury distribute $TRSR to engaged fans of DTC brands, strengthening the network for everyone.',
        },
      ],
    },
    localCredibility: {
      title: 'Built for Every Brand That Gets Faked or Forgotten',
      description:
        "TraceSecure was born in Virginia wine country (Ashburn, VA) — but we're building for every brand whose retail buyers disappear after the first sale: beverage, supplement, specialty food, and beyond.",
    },
    features: {
      titleAccent: 'Modern Brands',
      subtitle:
        'Everything you need to protect, verify, and grow direct relationships with every product you sell.',
    },
    finalCta: {
      title: 'Ready to Turn Your Products Into Customers?',
      subtitle:
        'Start our risk-free 6-month pilot. We\'re onboarding a limited cohort of craft beverage, supplement, and specialty-food brands — the first 200 get our full Growth tier, free.',
      companyPlaceholder: 'Company Name',
      pilotNote: 'Limited Free Pilot Spots Available (200)',
      pilotClosing:
        'Craft beverage, supplement, and specialty-food brands welcome. Secure your spot today.',
    },
    layout: {
      title: 'TraceSecure — Turn Every Product Into a Customer You Can Reach',
      description:
        'TraceSecure turns every product you sell into a verified customer lead. Prove it\'s authentic, capture the buyer\'s email, and bring them back — for craft beverage, supplement, and specialty food brands. No app or crypto wallet required.',
      ogTitle: 'TraceSecure — Turn Every Product Into a Customer You Can Reach',
      ogDescription:
        'Prove authenticity, capture buyer emails, and build your owned audience — for craft beverage, supplement, and specialty food brands. No app or crypto wallet required.',
    },
  },
  wine: {
    hero: {
      headlineTop: 'Turn Every Bottle Into',
      headlineBottom: 'a Customer You Can Reach',
      backgroundImage: '/images/hero-wine-right.webp',
      backgroundPosition: 'center right',
      description:
        'Your retail customers are anonymous. TraceSecure turns every bottle into a lead-gen tool: when a customer scans the QR code, they get an instant reward for sharing their email — and proof your wine is the real thing. You get a verified lead. They get value. No app, no crypto wallet required.',
      badges: ['Build Loyalty', 'Prove Authenticity', 'Stop Counterfeits', 'EU DPP & EUDR Ready'],
    },
    howItWorks: {
      title: 'From Bottle to Brand Fan in 3 Simple Steps',
      subtitle: 'A 60-second explainer video shows the flow — scan to story to signup.',
      steps: [
        {
          number: '01',
          title: 'Apply Your Tag',
          description:
            'You (or your label designer) add our unique, secure QR code to your bottles.',
        },
        {
          number: '02',
          title: 'Customer Scans & Engages',
          description:
            "Your customer scans the code at home. They see the wine's authentic story and a compelling offer: \"Join our Wine Club and earn an instant reward.\"",
        },
        {
          number: '03',
          title: 'Capture the Lead',
          description:
            'They voluntarily share their email to claim the reward. You just got a new, high-value customer lead. We handle all the reward fulfillment.',
        },
      ],
    },
    valueProps: {
      title: 'How This Grows Your Business',
      subtitle: 'A direct, two-way channel to your retail buyers — built right into every bottle.',
      benefits: [
        {
          category: 'MAKE MORE MONEY',
          title: 'Build Your Wine Club',
          description:
            'Turn anonymous retail buyers into high-quality, opt-in leads. Our platform uses instant micro-rewards to drive signups for your most profitable program.',
          example: 'Grow memberships directly from retail scans.',
        },
        {
          category: 'CONNECT WITH CUSTOMERS',
          title: 'Tell Your Unique Story',
          description:
            'Share winemaker videos, tasting notes, and food pairings. Build a direct relationship with your end customer and turn a one-time purchase into a loyal fan.',
          example: 'Drive repeat purchases with engaging content.',
        },
        {
          category: 'BUILD TRUST',
          title: 'Prove Authenticity (Instantly)',
          description:
            'As a built-in benefit, every scan also proves your bottle is authentic, protecting your hard-won reputation and giving customers peace of mind.',
          example: 'Instant authenticity checks on every bottle.',
        },
      ],
    },
    whyMatters: {
      title: 'The "Customer Gap": Your Biggest Untapped Opportunity',
      problem: [
        'You spend years perfecting your wine. A customer buys it from a retail store 100 miles away. The relationship ends right there.',
        'You have no idea who they are. You cannot thank them. You cannot tell them the story of that vintage. And you cannot invite them to buy directly from you next time.',
      ],
      problemClosing:
        'You are losing thousands of potential, high-margin, lifelong customers every single year.',
      challengeTitle: 'The Challenge Facing Wineries',
      challenges: [
        {
          value: '$100B+',
          title: 'Lost opportunity in wine',
          description:
            "It's not just counterfeits. It's the Customer Gap — retail buyers you never meet.",
        },
        {
          value: '0% visibility',
          title: 'Anonymous retail buyers',
          description:
            'You cannot thank them, tell your story, or invite them to buy direct next time.',
        },
        {
          value: 'High margin',
          title: 'Missed DTC sales',
          description: 'Thousands of potential, lifelong customers slip away every year.',
        },
      ],
      solutionTitle: 'A Direct Marketing Channel in Every Bottle',
      solutionDescription:
        'TraceSecure closes the "Customer Gap." Our Digital Passport does not just verify your bottle — it makes a compelling, irresistible offer. We give your customer a small, instant reward for sharing their email, turning a simple scan into a confirmed lead for your wine club or email list.',
      transformations: [
        {
          title: 'Digital Passport QR',
          subtitle: 'A direct channel',
          description:
            'Every bottle becomes a two-way marketing channel that invites buyers to connect, join your list, and become loyal fans.',
        },
        {
          title: 'Story + Offer',
          subtitle: 'From scan to signup',
          description:
            'Show your story, tasting notes, and a clear offer like "Join Our Wine Club for 10% Off."',
        },
        {
          title: 'Proven Authenticity',
          subtitle: 'Trust built-in',
          description:
            'Every scan proves authenticity, protecting your brand reputation and building consumer trust.',
        },
        {
          title: 'Actionable Insights',
          subtitle: 'Know your buyers',
          description:
            'See engagement and leads from retail scans to inform marketing and allocations.',
        },
      ],
    },
    whyDifferent: {
      comparisons: [
        {
          vs: 'vs. Legacy Traceability',
          competitor: 'They Are Logistics Tools',
          competitorDesc:
            'Competitors like Wholechain stop at the point of sale. Their job is done once the bottle is authenticated.',
          traceSecure: 'We Are a Marketing Tool',
          traceSecureDesc:
            'Our platform starts at the sale. We turn that authentication scan into a direct, high-value lead for your wine club.',
        },
        {
          vs: 'vs. DTC Marketing Tools',
          competitor: 'They Are Blind to Retail',
          competitorDesc:
            'Tools like Mailchimp are powerful, but they cannot see your anonymous customers in a retail store.',
          traceSecure: 'We Are the Missing Link',
          traceSecureDesc:
            'We are the only tool that bridges the physical-to-digital "Customer Gap", capturing those unknown buyers and delivering them directly to your email list.',
        },
        {
          vs: 'vs. Other Web3 Platforms',
          competitor: 'They Are Too Complex',
          competitorDesc:
            'Other platforms require your customers to download a complex crypto wallet, killing conversion rates.',
          traceSecure: 'We Win with Simplicity',
          traceSecureDesc:
            'We use a simple, secure, email-based rewards wallet. Your customers get real value with zero friction.',
        },
      ],
    },
    winWinWin: {
      wins: [
        {
          title: 'The Winery Wins',
          description:
            'You get what you want most: a high-quality, verified customer lead for your highest-margin channel (your wine club). You solve the "Customer Gap" and build a real, measurable marketing list.',
        },
        {
          title: 'The Customer Wins',
          description:
            'They get real, tangible value: an instant reward for their 10 seconds of time, plus the authentic story of their wine and peace of mind. A fair value exchange, not a one-way data capture.',
        },
        {
          title: 'The Ecosystem Wins',
          description:
            'We fund rewards from our treasury, distributing $TRSR to real, engaged fans of craft brands — creating a network effect that makes every subsequent reward more valuable.',
        },
      ],
    },
    localCredibility: {
      title: 'Born in Wine Country. Built for Beverage Brands.',
      description:
        "As a founder based in Virginia's wine country (Ashburn, VA), I'm passionate about helping wineries and craft beverage brands turn anonymous retail buyers into wine club members — and building a platform that serves producers across categories.",
    },
    features: {
      titleAccent: 'Wineries & Beverage Brands',
      subtitle:
        'Everything you need to protect your reputation, verify every bottle, and grow your wine club from retail scans.',
    },
    finalCta: {
      title: 'Ready to Turn Your Bottles Into Customers?',
      subtitle:
        'Start our risk-free 6-month pilot for wineries and craft beverage brands. The first 200 members get our full Growth tier, completely free.',
      companyPlaceholder: 'Vineyard Name',
      pilotNote: 'Limited Free Pilot Spots Available (200)',
      pilotClosing:
        'Wineries and craft beverage brands welcome. Join today to secure your free 6-month Growth tier.',
    },
    layout: {
      title: 'TraceSecure for Wine | Turn Bottles Into Wine Club Members',
      description:
        'Digital passports for wineries. Turn anonymous retail buyers into wine club leads with QR scans, authenticity, and instant rewards — no crypto wallet required.',
      ogTitle: 'TraceSecure for Wine | DTC & Wine Club Lead Generation',
      ogDescription:
        'Turn every bottle into a known customer. Authenticity, traceability, and wine club signups from every retail scan.',
    },
  },
  supplements: {
    hero: {
      headlineTop: 'Turn Every Supplement Into',
      headlineBottom: 'a Customer You Can Reach',
      backgroundImage: '/images/hero-product-right.webp',
      backgroundPosition: 'center right',
      description:
        'Your retail and marketplace buyers are anonymous. TraceSecure turns every supplement you sell into a lead-gen tool: when a customer scans the QR code, they get an instant reward for sharing their email — and proof your product is the real thing. You get a verified lead. They get value. No app, no crypto wallet required.',
      badges: ['Build Loyalty', 'Prove Authenticity', 'Stop Counterfeits', 'EU DPP & EUDR Ready'],
    },
    howItWorks: {
      title: 'From Scan to Loyal Customer in 3 Simple Steps',
      subtitle: 'A quick explainer shows the flow — scan to story to signup.',
      steps: [
        {
          number: '01',
          title: 'Apply Your Tag',
          description:
            'Add our unique, secure QR code to your bottles, jars, or pouches — on-pack or on the label.',
        },
        {
          number: '02',
          title: 'Customer Scans & Engages',
          description:
            'Your customer scans at home, sees your product\'s authentic story, and a compelling offer: "Subscribe & Save — earn an instant reward when you register."',
        },
        {
          number: '03',
          title: 'Capture the Lead',
          description:
            'They voluntarily share their email to claim the reward. You just got a new, high-value customer lead. We handle all the reward fulfillment.',
        },
      ],
    },
    finalCta: {
      title: 'Ready to Turn Your Products Into Customers?',
      subtitle:
        'Start our risk-free 6-month pilot. We\'re onboarding a limited cohort of supplement brands — the first 200 get our full Growth tier, free.',
      companyPlaceholder: 'Brand Name',
      pilotNote: 'Limited Free Pilot Spots Available (200)',
      pilotClosing: 'Supplement brands welcome. Secure your spot today.',
    },
    layout: {
      title: 'TraceSecure for Supplements | Stop Counterfeits, Build Subscribers',
      description:
        'Fight marketplace counterfeits and capture anonymous retail buyers. Turn every supplement scan into a Subscribe & Save signup with instant rewards — no crypto wallet required.',
      ogTitle: 'TraceSecure for Supplements | Authenticity + Subscription Leads',
      ogDescription:
        'Prove your supplement is genuine, capture buyer emails from Amazon and retail, and drive replenishment signups from every scan.',
    },
    verticalProof: {
      title: 'Built for the Supplement Category',
      subtitle: 'Marketplace counterfeits and anonymous retail buyers are costing you subscribers.',
      points: [
        {
          stat: '$80B+',
          title: 'Global supplement market',
          description:
            'Third-party sellers on Amazon and marketplaces drive counterfeits, copycats, and buyer confusion — eroding trust in brands that never meet their customers.',
        },
        {
          stat: '3× LTV',
          title: 'Subscription economics',
          description:
            'Every lost email is a missed replenishment cycle. Direct subscribers are your highest-margin, highest-LTV customers — and retail scans are how you find them.',
        },
        {
          stat: '0% visibility',
          title: 'Marketplace blind spot',
          description:
            'Your CRM knows your DTC buyers. TraceSecure captures the retail and marketplace customers your email list will never see otherwise.',
        },
      ],
    },
    whyMatters: {
      title: 'The "Customer Gap": Your Biggest Untapped Opportunity',
      problem: [
        'You invest in formulation, testing, and brand trust. A customer buys your supplement on Amazon or from a retail shelf. The relationship ends there.',
        'You cannot verify they got the real product. You cannot invite them to Subscribe & Save. You cannot build a replenishment relationship.',
      ],
      problemClosing:
        'Every anonymous buyer is a subscription you never started.',
      challengeTitle: 'The Challenge Facing Supplement Brands',
      challenges: [
        {
          value: '$80B+',
          title: 'Global supplement market',
          description:
            'Counterfeits and third-party sellers on marketplaces erode trust and steal high-margin direct sales.',
        },
        {
          value: '0% visibility',
          title: 'Anonymous retail buyers',
          description:
            'You cannot verify authenticity, drive replenishment, or invite marketplace buyers to buy direct.',
        },
        {
          value: '3× LTV',
          title: 'Missed subscriptions',
          description: 'Every lost email is a replenishment cycle — and lifetime value — you never capture.',
        },
      ],
      solutionTitle: 'A Direct Channel in Every Unit',
      solutionDescription:
        'TraceSecure closes the gap between your product and your buyer. Every scan proves authenticity and offers an instant reward for an email — turning a one-time purchase into a Subscribe & Save lead.',
      transformations: [
        {
          title: 'Anti-Counterfeit QR',
          subtitle: 'Prove it\'s real',
          description:
            'Buyers verify your supplement is genuine — critical for marketplace-sourced purchases and brand trust.',
        },
        {
          title: 'Subscribe & Save Offer',
          subtitle: 'From scan to subscriber',
          description:
            'Convert retail and marketplace buyers into direct subscribers with a compelling post-scan offer.',
        },
        {
          title: 'Replenishment Triggers',
          subtitle: 'Know your buyers',
          description:
            'Capture emails at first purchase to drive repeat orders and subscription conversions.',
        },
        {
          title: 'Batch Traceability',
          subtitle: 'Compliance-ready',
          description:
            'Document lot numbers, ingredients, and sourcing for regulatory and buyer transparency.',
        },
      ],
    },
    localCredibility: {
      title: 'Built for Every Brand That Gets Faked or Forgotten',
      description:
        "Supplement brands face a unique trust problem: buyers can't always tell the real product from a counterfeit. TraceSecure was built to prove authenticity at the point of consumption — and turn that moment into a subscriber relationship.",
    },
    features: {
      titleAccent: 'Supplement Brands',
      subtitle:
        'Fight counterfeits, capture marketplace buyers, and drive Subscribe & Save signups from every unit you sell.',
    },
  },
  specialtyFood: {
    hero: {
      headlineTop: 'Turn Every Product Into',
      headlineBottom: 'a Customer You Can Reach',
      backgroundImage: '/images/enhance-brand-value.png',
      backgroundPosition: 'center right',
      description:
        'Your retail buyers are anonymous. TraceSecure turns every jar, tin, and bag you sell into a lead-gen tool: when a customer scans the QR code, they get an instant reward for sharing their email — and proof your product is the real thing. You get a verified lead. They get value. No app, no crypto wallet required.',
      badges: ['Build Loyalty', 'Prove Authenticity', 'Stop Counterfeits', 'EUDR Ready'],
    },
    howItWorks: {
      title: 'From Scan to Loyal Customer in 3 Simple Steps',
      subtitle: 'A quick explainer shows the flow — scan to story to signup.',
      steps: [
        {
          number: '01',
          title: 'Apply Your Tag',
          description:
            'Add our unique, secure QR code to your jars, tins, bags, or boxes — on-pack or on the label.',
        },
        {
          number: '02',
          title: 'Customer Scans & Engages',
          description:
            'Your customer scans at home, sees your product\'s authentic story, and a compelling offer: "Register your product and earn an instant reward."',
        },
        {
          number: '03',
          title: 'Capture the Lead',
          description:
            'They voluntarily share their email to claim the reward. You just got a new, high-value customer lead. We handle all the reward fulfillment.',
        },
      ],
    },
    finalCta: {
      title: 'Ready to Turn Your Products Into Customers?',
      subtitle:
        'Start our risk-free 6-month pilot. We\'re onboarding a limited cohort of specialty-food brands — the first 200 get our full Growth tier, free.',
      companyPlaceholder: 'Brand Name',
      pilotNote: 'Limited Free Pilot Spots Available (200)',
      pilotClosing: 'Specialty-food brands welcome. Secure your spot today.',
    },
    layout: {
      title: 'TraceSecure for Specialty Food | EUDR-Ready Product Passports',
      description:
        'Digital passports for specialty-food brands. Prove origin, meet EUDR requirements for coffee and cocoa, and turn retail scans into direct customer relationships.',
      ogTitle: 'TraceSecure for Specialty Food | Authenticity + EUDR Compliance',
      ogDescription:
        'EUDR-ready traceability for coffee, cocoa, and artisan food. Capture buyer emails and prove provenance from every scan.',
    },
    verticalProof: {
      title: 'Built for Specialty & Artisan Food',
      subtitle: 'Provenance matters — and so does the customer you never meet after retail.',
      points: [
        {
          stat: 'EUDR',
          title: 'Due diligence ready',
          description:
            'Coffee, cocoa, and other covered commodities need traceable supply chains. TraceSecure documents origin and chain-of-custody at the product level.',
        },
        {
          stat: '2–3×',
          title: 'DTC margin advantage',
          description:
            'Specialty-food buyers who discover your story buy direct. Every retail scan is a chance to invite them into your highest-margin channel.',
        },
        {
          stat: '0% visibility',
          title: 'Anonymous gift & retail buyers',
          description:
            'Holiday gift purchases and retail shelf sales are your biggest missed opportunity — buyers who loved the product but never found you again.',
        },
      ],
    },
    whyMatters: {
      title: 'The "Customer Gap": Your Biggest Untapped Opportunity',
      problem: [
        'You source carefully, tell a compelling origin story, and sell through retail and gift channels. The buyer enjoys your product — then disappears.',
        'You cannot share recipes, announce new harvests, or invite them to subscribe. For coffee and cocoa, you may also need to prove where it came from.',
      ],
      problemClosing:
        'Every anonymous buyer is a direct relationship — and margin — you never built.',
      challengeTitle: 'The Challenge Facing Specialty-Food Brands',
      challenges: [
        {
          value: 'EUDR',
          title: 'Regulatory pressure',
          description:
            'Coffee, cocoa, and covered commodities require traceable supply chains and due diligence documentation.',
        },
        {
          value: '0% visibility',
          title: 'Anonymous retail buyers',
          description:
            'Gift purchases and retail shelf sales are one-and-done unless you capture the relationship at the point of consumption.',
        },
        {
          value: '2–3×',
          title: 'Missed DTC margin',
          description: 'Direct buyers who know your story pay premium prices — but retail buyers never get the invitation.',
        },
      ],
      solutionTitle: 'A Story — and a Signup — in Every Package',
      solutionDescription:
        'TraceSecure puts your origin story, EUDR data, and a compelling offer in every scan. Buyers prove authenticity, learn where their product came from, and opt in for more.',
      transformations: [
        {
          title: 'Origin Story QR',
          subtitle: 'Provenance on every unit',
          description:
            'Share farm, roaster, or maker details — building the trust that drives repeat and direct purchases.',
        },
        {
          title: 'EUDR Documentation',
          subtitle: 'Compliance built-in',
          description:
            'Chain-of-custody and sourcing data accessible via scan for coffee, cocoa, and covered commodities.',
        },
        {
          title: 'Register & Reward',
          subtitle: 'From scan to subscriber',
          description:
            'Offer an instant reward for email signup — turning a gift or retail purchase into a direct relationship.',
        },
        {
          title: 'Seasonal Campaigns',
          subtitle: 'Know your buyers',
          description:
            'Announce new harvests, limited releases, and subscription boxes to buyers you finally know by name.',
        },
      ],
    },
    localCredibility: {
      title: 'Built for Every Brand That Gets Faked or Forgotten',
      description:
        "Specialty-food brands live and die on provenance and trust. TraceSecure helps you prove where your product came from, meet EUDR requirements, and finally reach the retail buyer who loved your product but never found you again.",
    },
    features: {
      titleAccent: 'Specialty-Food Brands',
      subtitle:
        'Document provenance, meet EUDR requirements, and turn every jar, tin, and bag into a direct customer channel.',
    },
  },
};

// Shared sections for supplements (vertical-specific sections defined above)
landingContent.supplements.valueProps = landingContent.generic.valueProps;
landingContent.supplements.whyDifferent = landingContent.generic.whyDifferent;
landingContent.supplements.winWinWin = landingContent.generic.winWinWin;

landingContent.specialtyFood.valueProps = landingContent.generic.valueProps;
landingContent.specialtyFood.whyDifferent = landingContent.generic.whyDifferent;
landingContent.specialtyFood.winWinWin = landingContent.generic.winWinWin;

// Default features copy for variants without their own
landingContent.generic.features = landingContent.generic.features ?? {
  titleAccent: 'Modern Brands',
  subtitle:
    'Everything you need to protect, verify, and grow direct relationships with every product you sell.',
};
landingContent.wine.features = landingContent.wine.features ?? landingContent.generic.features;

export function getLandingContent(variant = LANDING_VARIANTS.generic) {
  return landingContent[variant] ?? landingContent.generic;
}
