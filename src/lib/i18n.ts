export type Locale = "am" | "ru" | "en";

export const LOCALES: Locale[] = ["am", "ru", "en"];

export const WHATSAPP_PHONE = "37444886887"; // placeholder

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Hello, I'd like to book a consultation."
)}`;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_URL =
  "https://www.instagram.com/synergie.clinics?igsh=MWVmdzB2ZWIyZXQzNg==";

export type Dictionary = {
  nav: {
    services: string;
    about: string;
    results: string;
    pricing: string;
    contact: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trust: {
    years: string;
    yearsCaption: string;
    clients: string;
    clientsCaption: string;
    certified: string;
    certifiedCaption: string;
    products: string;
    productsCaption: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    learnMore: string;
    from: string;
    items: { name: string; desc: string; price: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
  };
  results: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: { all: string; botox: string; fillers: string; skin: string };
    labels: { before: string; after: string };
  };
  specialists: {
    eyebrow: string;
    title: string;
    subtitle: string;
    members: { name: string; title: string; bio: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; treatment: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    headers: { service: string; price: string; duration: string };
    rows: { service: string; price: string; duration: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phone: string;
    hoursLabel: string;
    hours: string[];
    formTitle: string;
    formSubtitle: string;
    fields: {
      name: string;
      phone: string;
      treatment: string;
      date: string;
      message: string;
      treatmentPlaceholder: string;
    };
    submit: string;
    bigCta: string;
    whatsappIntro: string;
    sendingNotice: string;
    fallbackLink: string;
  };
  footer: {
    tagline: string;
    legal: string[];
    rights: string;
    concept: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      results: "Results",
      pricing: "Pricing",
      contact: "Contact",
      book: "Book on WhatsApp",
    },
    hero: {
      title: "Skin that speaks confidence.",
      subtitle:
        "Premium cosmetology in the heart of Yerevan. European brands, certified specialists, real results.",
      ctaPrimary: "Book consultation on Instagram",
      ctaSecondary: "View services",
    },
    trust: {
      years: "10+ years",
      yearsCaption: "of practice",
      clients: "5,000+ clients",
      clientsCaption: "trusted us",
      certified: "Certified specialists",
      certifiedCaption: "European training",
      products: "European-only products",
      productsCaption: "no compromises",
    },
    services: {
      eyebrow: "Treatments",
      title: "A focused menu of evidence-based treatments.",
      subtitle:
        "Each procedure is performed by a certified specialist using protocols from leading European brands.",
      learnMore: "Learn more",
      from: "from",
      items: [
        {
          name: "Botox",
          desc: "Smooth dynamic wrinkles with precise neuromodulator injections.",
          price: "30,000 ֏",
        },
        {
          name: "Hyaluronic fillers",
          desc: "Restore lost volume and refine facial contours naturally.",
          price: "95,000 ֏",
        },
        {
          name: "Mesotherapy",
          desc: "Targeted micro-injections that nourish and revitalize the skin.",
          price: "45,000 ֏",
        },
        {
          name: "Biorevitalization",
          desc: "Deep hydration with pure hyaluronic acid for a radiant glow.",
          price: "70,000 ֏",
        },
        {
          name: "Laser hair removal",
          desc: "Long-lasting, comfortable hair reduction on a medical-grade laser.",
          price: "55,000 ֏",
        },
        {
          name: "Facials & peels",
          desc: "Customized professional facials and chemical peels for any skin type.",
          price: "35,000 ֏",
        },
      ],
    },
    about: {
      eyebrow: "Philosophy",
      title: "Where science meets aesthetics.",
      p1: "Synergie is a clinical-aesthetic studio in central Yerevan. Our work is guided by dermatological evidence, not trends — every treatment plan begins with an honest skin assessment and a transparent conversation about outcomes.",
      p2: "We invest exclusively in certified European technology and consumables, and our specialists train regularly with the brands behind them. The result is a calm, considered space where results speak louder than promises.",
    },
    results: {
      eyebrow: "Before & After",
      title: "Real outcomes, real clients.",
      subtitle: "Filter by treatment to see representative results from our practice.",
      filters: {
        all: "All",
        botox: "Botox",
        fillers: "Fillers",
        skin: "Skin",
      },
      labels: { before: "Before", after: "After" },
    },
    specialists: {
      eyebrow: "The team",
      title: "Specialists, not salespeople.",
      subtitle:
        "Our practitioners hold European certifications and treat each face as an individual case.",
      members: [
        {
          name: "Dr. Anna Petrosyan",
          title: "Lead aesthetic physician",
          bio: "Twelve years of injectable practice with a focus on natural facial harmony.",
        },
        {
          name: "Dr. Maria Hakobyan",
          title: "Dermatologist & laser specialist",
          bio: "Board-certified dermatologist specializing in lasers and clinical skincare.",
        },
        {
          name: "Aram Sargsyan",
          title: "Senior cosmetologist",
          bio: "Certified by leading European brands, lead of our facial protocols.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Voices",
      title: "What our clients say.",
      items: [
        {
          quote:
            "The doctors are very competent and professional, and the atmosphere is simply super!!!! I've been to many clinics in Yerevan and I definitely recommend this one ♥️♥️♥️",
          name: "Irina Nverovna",
          treatment: "Google review",
        },
        {
          quote:
            "Without a doubt, this is the best cosmetology clinic in Yerevan! Everything here is top-notch: state-of-the-art equipment, a stylish interior, and an incredibly pleasant atmosphere. The specialists are true professionals: knowledgeable, attentive, and friendly.",
          name: "Eteri Bleyan",
          treatment: "Google review",
        },
        {
          quote:
            "High-quality service, very aesthetic and comfortable environment, and the specialists are educated and friendly.",
          name: "Julia Tar",
          treatment: "Google review",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Transparent, à la carte.",
      subtitle:
        "Final pricing depends on the treatment plan agreed during your consultation. Below is a representative starting price list.",
      headers: { service: "Service", price: "Starting price", duration: "Duration" },
      rows: [
        { service: "Botox — single zone", price: "30,000 ֏", duration: "30 min" },
        { service: "Botox — full face", price: "85,000 ֏", duration: "45 min" },
        { service: "Hyaluronic fillers — lips", price: "95,000 ֏", duration: "45 min" },
        { service: "Hyaluronic fillers — cheeks", price: "120,000 ֏", duration: "60 min" },
        { service: "Mesotherapy — face", price: "45,000 ֏", duration: "45 min" },
        { service: "Biorevitalization", price: "70,000 ֏", duration: "45 min" },
        { service: "Laser hair removal — small zone", price: "22,000 ֏", duration: "20 min" },
        { service: "Laser hair removal — full body", price: "120,000 ֏", duration: "90 min" },
        { service: "Signature facial", price: "35,000 ֏", duration: "60 min" },
        { service: "Chemical peel", price: "42,000 ֏", duration: "45 min" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions, answered honestly.",
      items: [
        {
          q: "Is botox safe?",
          a: "Yes, when administered correctly by a certified specialist. We use only original, certified neuromodulators and dose conservatively for natural results.",
        },
        {
          q: "How long is recovery?",
          a: "Most injectable treatments have minimal downtime — light redness or pinpoint marks fade within a few hours. Full activity resumes the next day.",
        },
        {
          q: "Do you accept walk-ins?",
          a: "We work strictly by appointment to give every client undivided time. Same-day consultations are sometimes possible — message us on Instagram or WhatsApp.",
        },
        {
          q: "Do you speak Russian / English?",
          a: "Yes. Our team consults in Armenian, Russian and English. Just let us know your preferred language when you book.",
        },
        {
          q: "Where are you located?",
          a: "We are at Nalbandyan 23/17 in central Yerevan, a short walk from Republic Square. Full directions on the contact map below.",
        },
        {
          q: "How do I book?",
          a: "The fastest way is to message us on Instagram or WhatsApp. You can also fill in the form below and we will reply within the same day.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Visit the clinic.",
      addressLabel: "Address",
      address: "Nalbandyan 23/17, Yerevan",
      phoneLabel: "Phone",
      phone: "044 88 68 87",
      hoursLabel: "Hours",
      hours: ["Mon – Fri  10:00 – 20:00", "Saturday  10:00 – 19:00", "Sunday  closed"],
      formTitle: "Request a consultation",
      formSubtitle: "Send a request and we'll continue on Instagram within minutes.",
      fields: {
        name: "Full name",
        phone: "Phone",
        treatment: "Treatment",
        date: "Preferred date",
        message: "Message (optional)",
        treatmentPlaceholder: "Select a treatment",
      },
      submit: "Send via WhatsApp",
      bigCta: "Book on Instagram",
      whatsappIntro: "Hi Synergie! I'd like to book a consultation.",
      sendingNotice: "Opening WhatsApp with your details…",
      fallbackLink: "Tap here if WhatsApp didn't open",
    },
    footer: {
      tagline: "Cosmetology & aesthetics, Yerevan.",
      legal: ["Privacy", "Terms", "Cookies"],
      rights: "© 2026 Synergie Clinics. All rights reserved.",
      concept: "Concept design by CodureTech",
    },
  },

  ru: {
    nav: {
      services: "Услуги",
      about: "О нас",
      results: "Результаты",
      pricing: "Цены",
      contact: "Контакты",
      book: "Записаться в WhatsApp",
    },
    hero: {
      title: "Кожа, которая говорит за вас.",
      subtitle:
        "Премиальная косметология в центре Еревана. Европейские бренды, сертифицированные специалисты, реальный результат.",
      ctaPrimary: "Записаться через Instagram",
      ctaSecondary: "Смотреть услуги",
    },
    trust: {
      years: "10+ лет",
      yearsCaption: "практики",
      clients: "5 000+ клиентов",
      clientsCaption: "доверились нам",
      certified: "Сертифицированные специалисты",
      certifiedCaption: "европейское обучение",
      products: "Только европейские бренды",
      productsCaption: "без компромиссов",
    },
    services: {
      eyebrow: "Процедуры",
      title: "Сфокусированное меню доказательных процедур.",
      subtitle:
        "Каждая процедура выполняется сертифицированным специалистом по протоколам ведущих европейских брендов.",
      learnMore: "Подробнее",
      from: "от",
      items: [
        {
          name: "Ботокс",
          desc: "Разглаживание мимических морщин точными инъекциями нейромодулятора.",
          price: "30 000 ֏",
        },
        {
          name: "Гиалуроновые филлеры",
          desc: "Восстановление объёмов и естественная коррекция контуров лица.",
          price: "95 000 ֏",
        },
        {
          name: "Мезотерапия",
          desc: "Точечные микроинъекции, которые питают и обновляют кожу.",
          price: "45 000 ֏",
        },
        {
          name: "Биоревитализация",
          desc: "Глубокое увлажнение чистой гиалуроновой кислотой и сияние.",
          price: "70 000 ֏",
        },
        {
          name: "Лазерная эпиляция",
          desc: "Долговременное удаление волос на лазере медицинского класса.",
          price: "55 000 ֏",
        },
        {
          name: "Чистки и пилинги",
          desc: "Профессиональные уходы и пилинги, подобранные под Вашу кожу.",
          price: "35 000 ֏",
        },
      ],
    },
    about: {
      eyebrow: "Философия",
      title: "Там, где наука встречается с эстетикой.",
      p1: "Synergie — клинико-эстетическая студия в центре Еревана. В работе мы опираемся на дерматологические данные, а не на тренды: каждая процедура начинается с честной оценки кожи и прозрачного разговора о результате.",
      p2: "Мы используем исключительно сертифицированное европейское оборудование и расходники, а наши специалисты регулярно обучаются у самих производителей. В итоге — спокойное, продуманное пространство, где результат говорит громче слов.",
    },
    results: {
      eyebrow: "До и после",
      title: "Реальные результаты, реальные клиенты.",
      subtitle: "Фильтруйте по типу процедуры, чтобы увидеть характерные результаты.",
      filters: {
        all: "Все",
        botox: "Ботокс",
        fillers: "Филлеры",
        skin: "Кожа",
      },
      labels: { before: "До", after: "После" },
    },
    specialists: {
      eyebrow: "Команда",
      title: "Специалисты, а не продавцы.",
      subtitle:
        "Наши врачи и косметологи имеют европейские сертификаты и подходят к каждому лицу индивидуально.",
      members: [
        {
          name: "Доктор Анна Петросян",
          title: "Ведущий эстетический врач",
          bio: "12 лет инъекционной практики, фокус на естественной гармонии лица.",
        },
        {
          name: "Доктор Мария Акопян",
          title: "Дерматолог и лазерный специалист",
          bio: "Дерматолог-сертифицированный специалист, эксперт по лазерам и медицинской косметологии.",
        },
        {
          name: "Арам Саргсян",
          title: "Старший косметолог",
          bio: "Сертифицирована ведущими европейскими брендами, ведущий специалист по уходам.",
        },
      ],
    },
    testimonials: {
      eyebrow: "Отзывы",
      title: "Что говорят наши клиенты.",
      items: [
        {
          quote:
            "Врачи очень компетентные и профессиональные, а атмосфера просто супер!!!! Была во многих клиниках Еревана и однозначно рекомендую эту ♥️♥️♥️",
          name: "Ирина Нверовна",
          treatment: "Отзыв в Google",
        },
        {
          quote:
            "Без сомнения, это лучшая клиника косметологии в Ереване! Здесь всё на высшем уровне: современное оборудование, стильный интерьер и невероятно приятная атмосфера. Специалисты — настоящие профессионалы: знающие, внимательные и дружелюбные.",
          name: "Этери Блеян",
          treatment: "Отзыв в Google",
        },
        {
          quote:
            "Качественный сервис, очень эстетичная и комфортная атмосфера, специалисты образованные и дружелюбные.",
          name: "Юлия Тар",
          treatment: "Отзыв в Google",
        },
      ],
    },
    pricing: {
      eyebrow: "Цены",
      title: "Прозрачные, по позициям.",
      subtitle:
        "Финальная стоимость зависит от плана, согласованного на консультации. Ниже — ориентировочные стартовые цены.",
      headers: { service: "Услуга", price: "Цена от", duration: "Длительность" },
      rows: [
        { service: "Ботокс — одна зона", price: "30 000 ֏", duration: "30 мин" },
        { service: "Ботокс — всё лицо", price: "85 000 ֏", duration: "45 мин" },
        { service: "Филлеры — губы", price: "95 000 ֏", duration: "45 мин" },
        { service: "Филлеры — скулы", price: "120 000 ֏", duration: "60 мин" },
        { service: "Мезотерапия — лицо", price: "45 000 ֏", duration: "45 мин" },
        { service: "Биоревитализация", price: "70 000 ֏", duration: "45 мин" },
        { service: "Лазерная эпиляция — малая зона", price: "22 000 ֏", duration: "20 мин" },
        { service: "Лазерная эпиляция — всё тело", price: "120 000 ֏", duration: "90 мин" },
        { service: "Авторская чистка", price: "35 000 ֏", duration: "60 мин" },
        { service: "Химический пилинг", price: "42 000 ֏", duration: "45 мин" },
      ],
    },
    faq: {
      eyebrow: "Частые вопросы",
      title: "Отвечаем честно.",
      items: [
        {
          q: "Безопасен ли ботокс?",
          a: "Да, при условии, что его проводит сертифицированный специалист. Мы используем только оригинальные нейромодуляторы и дозируем консервативно — для естественного результата.",
        },
        {
          q: "Сколько длится восстановление?",
          a: "У большинства инъекционных процедур восстановления почти нет: лёгкое покраснение или точки уходят за несколько часов. Обычная активность — на следующий день.",
        },
        {
          q: "Принимаете без записи?",
          a: "Мы работаем строго по записи, чтобы у каждого клиента было время. Иногда возможна консультация в день обращения — напишите в Instagram или WhatsApp.",
        },
        {
          q: "Говорите ли по-русски / по-английски?",
          a: "Да. Команда консультирует на армянском, русском и английском. Укажите удобный язык при записи.",
        },
        {
          q: "Где вы находитесь?",
          a: "Налбандяна 23/17, центр Еревана, в нескольких минутах от Площади Республики. Полный маршрут — на карте ниже.",
        },
        {
          q: "Как записаться?",
          a: "Самый быстрый способ — написать в Instagram или WhatsApp. Также можно заполнить форму ниже, мы ответим в тот же день.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Приходите в клинику.",
      addressLabel: "Адрес",
      address: "Налбандяна 23/17, Ереван",
      phoneLabel: "Телефон",
      phone: "044 88 68 87",
      hoursLabel: "Часы работы",
      hours: ["Пн – Пт  10:00 – 20:00", "Суббота  10:00 – 19:00", "Воскресенье  выходной"],
      formTitle: "Заявка на консультацию",
      formSubtitle: "Отправьте заявку — продолжим в Instagram в течение нескольких минут.",
      fields: {
        name: "Имя и фамилия",
        phone: "Телефон",
        treatment: "Процедура",
        date: "Желаемая дата",
        message: "Сообщение (необязательно)",
        treatmentPlaceholder: "Выберите процедуру",
      },
      submit: "Отправить в WhatsApp",
      bigCta: "Записаться в Instagram",
      whatsappIntro: "Здравствуйте, Synergie! Я бы хотела записаться на консультацию.",
      sendingNotice: "Открываем WhatsApp с вашими данными…",
      fallbackLink: "Нажмите здесь, если WhatsApp не открылся",
    },
    footer: {
      tagline: "Косметология и эстетика, Ереван.",
      legal: ["Политика", "Условия", "Cookies"],
      rights: "© 2026 Synergie Clinics. Все права защищены.",
      concept: "Концепт-дизайн от CodureTech",
    },
  },

  am: {
    nav: {
      services: "Ծառայություններ",
      about: "Մեր մասին",
      results: "Արդյունքներ",
      pricing: "Գներ",
      contact: "Կապ",
      book: "Գրանցվել WhatsApp-ով",
    },
    hero: {
      title: "Մաշկ, որը խոսում է Ձեր փոխարեն:",
      subtitle:
        "Բարձրակարգ կոսմետոլոգիա Երևանի սրտում: Եվրոպական ապրանքանիշներ, սերտիֆիկացված մասնագետներ, իրական արդյունք:",
      ctaPrimary: "Գրանցվել Instagram-ով",
      ctaSecondary: "Տեսնել ծառայությունները",
    },
    trust: {
      years: "10+ տարի",
      yearsCaption: "պրակտիկա",
      clients: "5 000+ հաճախորդ",
      clientsCaption: "վստահել են մեզ",
      certified: "Սերտիֆիկացված մասնագետներ",
      certifiedCaption: "եվրոպական ուսուցում",
      products: "Միայն եվրոպական ապրանքանիշներ",
      productsCaption: "առանց զիջումների",
    },
    services: {
      eyebrow: "Բուժումներ",
      title: "Կենտրոնացված, ապացուցողական պրոցեդուրաների ընտրացանկ:",
      subtitle:
        "Յուրաքանչյուր պրոցեդուրա կատարվում է սերտիֆիկացված մասնագետի կողմից՝ առաջատար եվրոպական ապրանքանիշների արձանագրություններով:",
      learnMore: "Իմանալ ավելին",
      from: "սկսած",
      items: [
        {
          name: "Բոտոքս",
          desc: "Միմիկ կնճիռների հարթեցում նուրբ նեյրոմոդուլյատորների ներարկումներով:",
          price: "30 000 ֏",
        },
        {
          name: "Հիալուրոնային ֆիլերներ",
          desc: "Կորած ծավալի վերականգնում և դեմքի կորերի բնական ճշգրտում:",
          price: "95 000 ֏",
        },
        {
          name: "Մեզոթերապիա",
          desc: "Թիրախային միկրոներարկումներ, որոնք սնուցում և նորացնում են մաշկը:",
          price: "45 000 ֏",
        },
        {
          name: "Բիոռևիտալիզացիա",
          desc: "Խորը խոնավեցում մաքուր հիալուրոնաթթվով՝ մաշկի փայլի համար:",
          price: "70 000 ֏",
        },
        {
          name: "Լազերային էպիլյացիա",
          desc: "Երկարատև, հարմարավետ մազահեռացում բժշկական դասի լազերով:",
          price: "55 000 ֏",
        },
        {
          name: "Մաշկահարդարում և պիլինգներ",
          desc: "Անհատական պրոֆեսիոնալ մաշկահարդարումներ ցանկացած տիպի մաշկի համար:",
          price: "35 000 ֏",
        },
      ],
    },
    about: {
      eyebrow: "Փիլիսոփայություն",
      title: "Որտեղ գիտությունը հանդիպում է էսթետիկային:",
      p1: "Synergie-ն կլինիկական-էսթետիկ ստուդիա է Երևանի կենտրոնում: Մենք առաջնորդվում ենք դերմատոլոգիայի տվյալներով, ոչ թե միտումներով. ամեն բուժում սկսվում է մաշկի անկեղծ գնահատմամբ և արդյունքի թափանցիկ քննարկմամբ:",
      p2: "Ներդրումներ ենք անում միայն սերտիֆիկացված եվրոպական սարքավորումներում և նյութերում, իսկ մեր մասնագետները պարբերաբար ուսանում են ուղիղ արտադրողների մոտ: Արդյունքն է հանդարտ, կշռադատված տարածք, որտեղ արդյունքն ավելի բարձր է խոսում, քան խոստումները:",
    },
    results: {
      eyebrow: "Մինչ և հետո",
      title: "Իրական արդյունքներ, իրական հաճախորդներ:",
      subtitle: "Զտել ըստ բուժման տեսակի՝ տեսնելու բնորոշ արդյունքները:",
      filters: {
        all: "Բոլորը",
        botox: "Բոտոքս",
        fillers: "Ֆիլերներ",
        skin: "Մաշկ",
      },
      labels: { before: "Մինչ", after: "Հետո" },
    },
    specialists: {
      eyebrow: "Թիմը",
      title: "Մասնագետներ, ոչ թե վաճառողներ:",
      subtitle:
        "Մեր բժիշկներն ու կոսմետոլոգները ունեն եվրոպական սերտիֆիկատներ և յուրաքանչյուր դեմքին մոտենում են անհատապես:",
      members: [
        {
          name: "Բ.գ.թ. Աննա Պետրոսյան",
          title: "Առաջատար էսթետիկ բժիշկ",
          bio: "12 տարվա ներարկման պրակտիկա՝ դեմքի բնական ներդաշնակության շեշտադրմամբ:",
        },
        {
          name: "Բ.գ.թ. Մարիա Հակոբյան",
          title: "Մաշկաբան և լազերային մասնագետ",
          bio: "Սերտիֆիկացված մաշկաբան, լազերային և կլինիկական մաշկախնամքի մասնագետ:",
        },
        {
          name: "Արամ Սարգսյան",
          title: "Ավագ կոսմետոլոգ",
          bio: "Սերտիֆիկացված է առաջատար եվրոպական ապրանքանիշների կողմից, մեր արձանագրությունների ղեկավարը:",
        },
      ],
    },
    testimonials: {
      eyebrow: "Կարծիքներ",
      title: "Ի՞նչ են ասում մեր հաճախորդները:",
      items: [
        {
          quote:
            "Բժիշկները շատ իրավասու և պրոֆեսիոնալ են, իսկ մթնոլորտը հրաշալի!! Եղել եմ Երևանի շատ կլինիկաներում և անկասկած խորհուրդ եմ տալիս հենց այս մեկը ♥️♥️♥️",
          name: "Իրինա Նվերովնա",
          treatment: "Google կարծիք",
        },
        {
          quote:
            "Անկասկած, սա Երևանի լավագույն կոսմետոլոգիական կլինիկան է: Այստեղ ամեն ինչ բարձր մակարդակի վրա է՝ ժամանակակից սարքավորումներ, ոճային ինտերիեր և հաճելի մթնոլորտ: Մասնագետներն իսկական պրոֆեսիոնալներ են՝ տեղեկացված, ուշադիր և սիրալիր:",
          name: "Էթերի Բլեյան",
          treatment: "Google կարծիք",
        },
        {
          quote:
            "Որակյալ սպասարկում, շատ էսթետիկ ու հարմարավետ միջավայր, մասնագետները կրթված և ընկերական են:",
          name: "Ջուլիա",
          treatment: "Google կարծիք",
        },
      ],
    },
    pricing: {
      eyebrow: "Գներ",
      title: "Թափանցիկ, ըստ դիրքերի:",
      subtitle:
        "Վերջնական արժեքը կախված է խորհրդատվության ընթացքում համաձայնեցված ծրագրից: Ստորև՝ ուղենշային մեկնարկային գները:",
      headers: { service: "Ծառայություն", price: "Սկսած", duration: "Տևողություն" },
      rows: [
        { service: "Բոտոքս՝ մեկ գոտի", price: "30 000 ֏", duration: "30 րոպե" },
        { service: "Բոտոքս՝ ողջ դեմք", price: "85 000 ֏", duration: "45 րոպե" },
        { service: "Ֆիլերներ՝ շուրթեր", price: "95 000 ֏", duration: "45 րոպե" },
        { service: "Ֆիլերներ՝ այտոսկրեր", price: "120 000 ֏", duration: "60 րոպե" },
        { service: "Մեզոթերապիա՝ դեմք", price: "45 000 ֏", duration: "45 րոպե" },
        { service: "Բիոռևիտալիզացիա", price: "70 000 ֏", duration: "45 րոպե" },
        { service: "Լազերային էպիլյացիա՝ փոքր գոտի", price: "22 000 ֏", duration: "20 րոպե" },
        { service: "Լազերային էպիլյացիա՝ ողջ մարմին", price: "120 000 ֏", duration: "90 րոպե" },
        { service: "Հեղինակային մաշկահարդարում", price: "35 000 ֏", duration: "60 րոպե" },
        { service: "Քիմիական պիլինգ", price: "42 000 ֏", duration: "45 րոպե" },
      ],
    },
    faq: {
      eyebrow: "Հարցեր",
      title: "Անկեղծ պատասխաններ:",
      items: [
        {
          q: "Բոտոքսն անվտա՞նգ է:",
          a: "Այո, երբ կատարվում է սերտիֆիկացված մասնագետի կողմից: Մենք օգտագործում ենք միայն օրիգինալ նեյրոմոդուլյատորներ և չափավոր ենք դոզավորում՝ բնական արդյունքի համար:",
        },
        {
          q: "Որքա՞ն է վերականգնման ժամկետը:",
          a: "Ներարկման պրոցեդուրաների մեծ մասը գրեթե վերականգնում չի պահանջում. թեթև կարմրությունը կամ կետերը անցնում են մի քանի ժամում: Սովորական ակտիվությունը՝ հաջորդ օրը:",
        },
        {
          q: "Ընդունո՞ւմ եք առանց գրանցման:",
          a: "Աշխատում ենք միայն ըստ գրանցման՝ ամեն հաճախորդին լիարժեք ժամանակ տալու համար: Երբեմն հնարավոր է նույն օրվա խորհրդատվություն՝ գրեք Instagram-ին կամ WhatsApp-ին:",
        },
        {
          q: "Ռուսերեն / անգլերեն խոսո՞ւմ եք:",
          a: "Այո: Մեր թիմը խորհրդատվություն է անցկացնում հայերեն, ռուսերեն և անգլերեն: Գրանցման ժամանակ նշեք ձեր նախընտրած լեզուն:",
        },
        {
          q: "Որտե՞ղ եք գտնվում:",
          a: "Նալբանդյան 23/17, Երևանի կենտրոն, մի քանի րոպեի քայլք Հանրապետության հրապարակից: Մանրամասն՝ ստորև քարտեզի վրա:",
        },
        {
          q: "Ինչպե՞ս գրանցվել:",
          a: "Ամենաարագ ճանապարհն է գրել Instagram-ում կամ WhatsApp-ում: Կարող եք նաև լրացնել ստորև ձևը՝ կպատասխանենք նույն օրը:",
        },
      ],
    },
    contact: {
      eyebrow: "Կապ",
      title: "Այցելեք կլինիկա:",
      addressLabel: "Հասցե",
      address: "Նալբանդյան 23/17, Երևան",
      phoneLabel: "Հեռախոս",
      phone: "044 88 68 87",
      hoursLabel: "Աշխատաժամ",
      hours: ["Երկ – Ուրբ  10:00 – 20:00", "Շաբաթ  10:00 – 19:00", "Կիրակի  փակ"],
      formTitle: "Խորհրդատվության հայտ",
      formSubtitle: "Ուղարկեք հայտ՝ կշարունակենք Instagram-ում մի քանի րոպեի ընթացքում:",
      fields: {
        name: "Անուն, ազգանուն",
        phone: "Հեռախոս",
        treatment: "Պրոցեդուրա",
        date: "Նախընտրելի օր",
        message: "Հաղորդագրություն (ոչ պարտադիր)",
        treatmentPlaceholder: "Ընտրեք պրոցեդուրա",
      },
      submit: "Ուղարկել WhatsApp-ով",
      bigCta: "Գրանցվել Instagram-ով",
      whatsappIntro: "Բարև, Synergie: Կցանկանայի գրանցվել խորհրդատվության:",
      sendingNotice: "Բացում ենք WhatsApp-ը Ձեր տվյալներով…",
      fallbackLink: "Սեղմեք այստեղ, եթե WhatsApp-ը չբացվեց",
    },
    footer: {
      tagline: "Կոսմետոլոգիա և էսթետիկա, Երևան:",
      legal: ["Գաղտնիություն", "Պայմաններ", "Cookies"],
      rights: "© 2026 Synergie Clinics: Բոլոր իրավունքները պաշտպանված են:",
      concept: "Կոնցեպտ-դիզայն՝ CodureTech-ի կողմից",
    },
  },
};
