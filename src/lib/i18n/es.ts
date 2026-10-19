import type { ServiceCopy, ServiceId } from "@/lib/catalog";

export const es = {
  meta: {
    title: "Servicios tecnológicos Costa Blanca — IT, WiFi, TV, Smart Home, CCTV y Solar",
    description:
      "Un solo equipo local en Benitachell: soporte informático, redes y WiFi, TV internacional por satélite, smart home, CCTV y energía solar. ES/EN/NL/DE.",
    home: "Inicio",
    ogAlt: "Villa mediterránea al atardecer en la Costa Blanca",
  },
  nav: {
    brand: "CostaTech",
    topbar: "Benitachell · Costa Blanca — desde 1994",
    links: [
      { href: "#servicios", label: "Soluciones" },
      { href: "#villa", label: "Tu casa" },
      { href: "#proceso", label: "Proceso" },
      { href: "#faq", label: "FAQ" },
      { href: "#contacto", label: "Contacto" },
    ],
    cta1: "Presupuesto en 24h",
    cta2: "Pedir el mío",
    callAria: "Llamar",
    openAria: "Abrir menú",
    mainAria: "Principal",
    mobileAria: "Móvil",
    langAria: "Cambiar idioma",
  },
  hero: {
    badge: "Benitachell · Costa Blanca — desde 1994",
    title: "Tu casa, resuelta. Luz, WiFi, TV y calma.",
    sub: "Internet que llega al jardín, tu TV de tu país, cámaras que miras desde fuera y solar que baja la factura. Un solo equipo local, en tu idioma, en tienda, a domicilio o en remoto.",
    cta1: "Pedir mi presupuesto",
    cta2: "Respuesta en 24h",
    whatsapp: "WhatsApp directo",
    villa: "Simular mi casa",
    micro: "TIENDA FÍSICA + DOMICILIO + REMOTO · ES / EN / NL / DE · RESPUESTA <24H LABORABLES",
    play: "Ver vídeo",
    pause: "Pausar vídeo",
  },
  video: {
    sectionAria: "Vídeo: una casa que funciona sola",
    playAria: "Reproducir vídeo: vista aérea de villa con paneles solares",
    badge: "0:30 · VISTA AÉREA",
    title: "Mira una casa que ya funciona sola",
    sub: "Vuelo dron: villa + solar en la Costa Blanca",
    imgAlt: "Paneles solares al atardecer",
    dialogAria: "Vídeo aéreo",
    closeAria: "Cerrar vídeo",
  },
  trust: {
    aria: "Marcas con las que trabajamos",
    prefix: "Trabajamos con —",
  },
  solutions: {
    eyebrow: "Soluciones · por espacio de tu casa",
    title: "Todo lo que tu casa necesita para ir sola.",
    sub: "Sin tecnicismos. Baja y mira cómo aparece cada solución.",
    tabsAria: "Soluciones",
    step: "Paso",
    cta1: "Lo quiero así",
    cta2: "Pedir presupuesto",
    detail: "Ver la solución completa",
    short: {
      soporte: "Ordenadores",
      redes: "WiFi",
      tv: "TV de tu país",
      smart: "Domótica",
      cctv: "Cámaras",
      solar: "Solar",
    } satisfies Record<ServiceId, string>,
  },
  catalog: {
    soporte: {
      title: "Ordenadores que vuelven a ir rápido",
      short: "Venta, reparación, limpieza, copias y antivirus. En tienda, a domicilio o en remoto.",
      bullets: ["Reparación y upgrades", "Backup y recuperación", "Asistencia remota"],
      espacio: "Despacho",
      dolor: "PC lento o virus justo cuando lo necesitas.",
      metaTitle: "Soporte informático en Benitachell — tienda, domicilio y remoto",
      intro:
        "¿Ordenador lento, virus o sin copias de seguridad? Reparamos, mejoramos y limpiamos equipos, cambiamos discos y dejamos todo protegido. En tienda, a domicilio o en remoto.",
    },
    redes: {
      title: "WiFi en toda la casa, sin cortes",
      short: "Fibra, WiFi Mesh y ampliación de cobertura. También para negocios y yates.",
      bullets: ["Mesh multicobertura", "Failover empresas", "Yacht Router"],
      espacio: "Toda la villa + jardín",
      dolor: "WiFi que no llega arriba ni al jardín.",
      metaTitle: "Redes y WiFi en Benitachell — cobertura total y empresas",
      intro:
        "El WiFi que no llega al dormitorio o al jardín tiene solución. Instalamos fibra, ampliamos la cobertura con mesh y dejamos la red estable en toda la casa. También para negocios y yates.",
    },
    tv: {
      title: "Tu TV de tu país, como en casa",
      short: "Holandesa, belga, francesa, británica y alemana. SmartTV y cine en casa.",
      bullets: ["CanalDigitaal / Vlaanderen", "TéléSAT / TNTSAT / Freesat", "Sonos y cine"],
      espacio: "Salón",
      dolor: "Echas de menos tus canales de casa.",
      metaTitle: "TV internacional en Benitachell — satélite y Smart TV",
      intro:
        "¿Echas de menos los canales de tu casa? Instalamos y ajustamos parabólica, receptor y tarjeta: CanalDigitaal, TV Vlaanderen, TéléSAT, Freesat y TV alemana. Además, sonido y cine en casa.",
    },
    smart: {
      title: "Casa inteligente y cómoda",
      short: "Luces, riego, persianas y control desde el móvil, estés donde estés.",
      bullets: ["Luces y riego", "Persianas", "Control remoto"],
      espacio: "Jardín + persianas",
      dolor: "Riego y luces que dependen de que estés.",
      metaTitle: "Smart home en Benitachell — luces, riego y persianas",
      intro:
        "Luces, riego, persianas y temperatura controladas desde el móvil, estés aquí o de viaje. Automatizamos lo que repites a diario para que tu casa trabaje sola.",
    },
    cctv: {
      title: "Seguridad que puedes mirar",
      short: "Cámaras Ubiquiti y Foscam para vigilar tu casa cuando no estás.",
      bullets: ["Ubiquiti UniFi", "Acceso desde móvil", "Ideal 2ª residencia"],
      espacio: "Perímetro",
      dolor: "Meses con la casa vacía sin verla.",
      metaTitle: "Cámaras de seguridad en Benitachell — CCTV en tu móvil",
      intro:
        "Mira tu casa desde donde estés, con cámaras que graban de día y de noche. Instalamos sistemas UniFi y Foscam con acceso desde el móvil. Ideal para segundas residencias.",
    },
    solar: {
      title: "Ahorra con energía solar",
      short: "Autoconsumo y off-grid con Victron para chalets y campo.",
      bullets: ["Autoconsumo", "Off-grid", "Victron Energy"],
      espacio: "Cubierta",
      dolor: "Factura que sube cada mes.",
      metaTitle: "Energía solar en Benitachell — autoconsumo y off-grid",
      intro:
        "Baja la factura de la luz con autoconsumo solar, o vive aislado de la red con un sistema off-grid Victron. Estudiamos tu caso y dimensionamos lo que necesitas.",
    },
  } satisfies Record<ServiceId, ServiceCopy>,
  villa: {
    eyebrow: "Tu casa · demo visual",
    title: "Toca un punto y mira qué cambia.",
    sub: "Simulación para preparar tu solicitud. Sin dispositivos reales conectados.",
    imgAlt: "Villa con piscina y jardín al atardecer",
    zones: {
      living: "Salón · TV",
      roof: "Cubierta · Solar",
      garden: "Jardín · Riego",
    },
    hotspots: {
      redes: "WiFi",
      cctv: "Cámaras",
      solar: "Solar",
      tv: "TV",
      smart: "Domótica",
      soporte: "PC",
    } satisfies Record<ServiceId, string>,
    copy: {
      redes: "WiFi Mesh que llega al jardín y arriba. Failover para negocios y Yacht Router.",
      cctv: "Cámaras visibles desde el móvil. Ideal si la casa pasa meses vacía.",
      smart: "Luces, riego y persianas con horarios y control remoto.",
      tv: "Tu canal de tu país por satélite o app: NL, BE, FR, UK, DE.",
      soporte: "PC lento, virus o copia sin hacer: lo dejamos al día.",
      solar: "Autoconsumo u off-grid con Victron para bajar la factura.",
    } satisfies Record<ServiceId, string>,
    selectedAria: "seleccionado",
    unselectedAria: "no seleccionado",
    added: "✓ Añadido",
    add: "Añadir a mi solicitud",
    continue: "Continuar",
    continueWith: "Continuar con {n}",
    selectionOne: "1 sistema seleccionado. Se guardan para el formulario.",
    selectionMany: "{n} sistemas seleccionados. Se guardan para el formulario.",
  },
  segments: {
    eyebrow: "Por qué ahora",
    title: "Lo que te duele, resuelto.",
    tabsAria: "Perfiles",
    tabs: {
      hogar: {
        label: "Vivo aquí",
        title: "Costes bajo control, cero cortes",
        text: "WiFi que llega a todo, PC al día y factura solar más baja. Mantenimiento cercano en Benitachell y alrededores.",
        alt: "Villa moderna iluminada al atardecer",
      },
      fuera: {
        label: "Segunda residencia",
        title: "Tu casa vigilada aunque estés fuera",
        text: "Cámaras + domótica + backup de internet. La miras y la controlas desde tu país, y la instalamos llave en mano.",
        alt: "Cámara de seguridad en la pared",
      },
      negocio: {
        label: "Negocio / alquiler / barco",
        title: "Sin caídas delante del cliente",
        text: "Failover de internet, WiFi de invitados, CCTV y soporte rápido. Para bares, alquiler vacacional y yates.",
        alt: "Equipos de red WiFi mesh",
      },
    },
    cta1: "Pedir mi presupuesto",
    cta2: "Respuesta en 24h",
  },
  proof: {
    eyebrow: "Prueba · datos verificables, sin inventos",
    title: "Una casa que ya funciona sola. La tuya puede ser la siguiente.",
    stats: [
      ["Desde 1994", "Tienda local en Benitachell"],
      ["4 idiomas", "ES · EN · NL · DE"],
      ["< 24h", "Respuesta laborable"],
    ],
    cta1: "Quiero lo mismo",
    cta2: "Pedir presupuesto",
  },
  process: {
    eyebrow: "Proceso",
    title: "De la llamada a usarlo, en 4 pasos.",
    steps: [
      {
        n: "01",
        t: "Entendemos",
        d: "2 minutos por WhatsApp o formulario, en tu idioma. Uso, casa y fotos. Nada genérico: todo a medida de tu vivienda.",
        alt: "Técnico reparando un portátil",
      },
      {
        n: "02",
        t: "Diseñamos",
        d: "Un sistema conectado: red, TV, cámaras, domótica y solar planificados como uno solo, no como piezas sueltas.",
        alt: "Equipos de red WiFi mesh",
      },
      {
        n: "03",
        t: "Instalamos",
        d: "Llave en mano, limpio y explicado. Permisos, ajuste e integración completa desde el primer día.",
        alt: "Técnico instalando paneles solares en un tejado",
      },
      {
        n: "04",
        t: "Úsalo",
        d: "Lo verificamos contigo, aprendes a usarlo en minutos y seguimos en tienda + remoto si no estás en España.",
        alt: "Familia viendo la televisión en el sofá",
      },
    ],
    start: "Empezar por aquí",
    info: [
      ["Tienda física", "Carrer les Capelletes 17, Benitachell"],
      ["Idiomas", "ES · EN · NL · DE (+FR TV)"],
      ["Cobertura", "Jávea · Moraira · Calpe · Dénia"],
      ["Horario", "Lun–Vie 10:00–14:00"],
    ],
  },
  statement: {
    eyebrow: "Simple, como tiene que ser",
    title: "La energía se complica. Nosotros la hacemos simple.",
    cta1: "Hablar con un técnico",
    cta2: "Sin compromiso",
  },
  faq: {
    title: "Preguntas frecuentes",
    sub: "Resolvemos lo habitual antes de que llames. Si no está aquí, WhatsApp directo.",
    items: [
      {
        q: "¿Habláis mi idioma?",
        a: "Sí: español, inglés, neerlandés y alemán. Para TV también francés. Elige tu idioma en el formulario.",
      },
      {
        q: "¿Venís a domicilio?",
        a: "Sí, en Benitachell, Jávea, Moraira, Calpe, Dénia y alrededores. También en tienda y en remoto.",
      },
      {
        q: "¿Podéis ayudarme si no estoy en España?",
        a: "Sí con asistencia remota para PC y con CCTV + Smart Home para vigilar y controlar tu segunda residencia.",
      },
      {
        q: "¿Instaláis mi TV con mi tarjeta actual?",
        a: "Revisamos tu antena, receptor y tarjeta (CanalDigitaal, Vlaanderen, TéléSAT, Freesat, alemana) y te decimos qué funciona.",
      },
      {
        q: "Tengo WiFi lento, ¿lo arregláis?",
        a: "Sí: medimos cobertura, cambiamos a Mesh donde hace falta y separamos red de invitados si tienes alquiler.",
      },
      {
        q: "¿Cuánto tarda un presupuesto solar?",
        a: "Presupuesto inicial en 24h laborables con tus datos y fotos. La visita técnica confirma potencia y ubicación.",
      },
    ],
  },
  visit: {
    eyebrow: "Visítanos",
    title: "Nuestra tienda en Benitachell",
    sub: "En el centro del pueblo. Ven a vernos, llámanos o escríbenos: te atendemos en tu idioma.",
    addressLabel: "Dirección",
    address: "Carrer les Capelletes 17 · 03726 Benitachell",
    hoursLabel: "Horario",
    hours: "Lunes a viernes · 10:00–14:00",
    phoneLabel: "Teléfono",
    directions: "Cómo llegar",
    call: "Llamar",
    coverageLabel: "Zona de cobertura",
    towns: ["Jávea", "Moraira", "Calpe", "Dénia"],
    coverageNote: "En tienda, a domicilio o en remoto.",
    mapAria: "Mapa con la ubicación de la tienda en Benitachell",
    mapConsentTitle: "Ver el mapa de la tienda",
    mapConsentText:
      "El mapa lo carga Google. Si lo aceptas, Google puede instalar cookies y recibir tu dirección IP. Puedes ver la dirección escrita arriba sin cargarlo.",
    mapConsentButton: "Cargar el mapa",
    mapConsentPolicy: "Política de cookies",
  },
  pages: {
    common: {
      backToServices: "Todas las soluciones",
      includes: "Qué incluye",
      typical: "Lo que resolvemos",
      otherSolutions: "Otras soluciones",
      cta1: "Pedir presupuesto",
      cta2: "Respuesta en 24h",
      whatsapp: "WhatsApp directo",
    },
    services: {
      metaTitle: "Soluciones para tu casa — tecnología en Benitachell, Costa Blanca",
      metaDescription:
        "Seis soluciones explicadas sin tecnicismos: soporte informático, redes y WiFi, TV internacional, smart home, cámaras de seguridad y energía solar.",
      eyebrow: "Soluciones",
      title: "Seis soluciones. Un solo equipo.",
      sub: "Elige lo que tu casa o tu negocio necesita. Sin tecnicismos y con respuesta en menos de 24 horas.",
    },
    business: {
      metaTitle: "Informática y redes para empresas — Benitachell · Costa Blanca",
      metaDescription:
        "Redes con respaldo automático, WiFi para clientes, cámaras y soporte rápido para negocios, alquileres vacacionales y barcos.",
      eyebrow: "Para empresas",
      title: "Que tu negocio no pare.",
      sub: "Redes que no se caen, WiFi para tus clientes y cámaras que vigilan cuando ya cerraste. Para negocios, alquileres y yates.",
      pointsTitle: "Lo que montamos",
      points: [
        {
          t: "Internet que no cae",
          d: "Conexión principal con respaldo: si una línea falla, entra la otra. Cobros, reservas y caja siguen funcionando.",
        },
        {
          t: "WiFi para tus clientes",
          d: "Red separada para clientes, rápida y sin mezclarse con tus equipos.",
        },
        {
          t: "Cámaras siempre a mano",
          d: "CCTV con acceso desde el móvil y mantenimiento sin sorpresas.",
        },
        {
          t: "Internet en el barco",
          d: "Yacht Router: internet estable en puerto y en travesía, con varias SIM.",
        },
      ],
    },
    remote: {
      metaTitle: "Asistencia remota — soporte para tu ordenador donde estés",
      metaDescription:
        "Soporte remoto en tu idioma: te guiamos paso a paso y arreglamos tu ordenador desde Benitachell, estés donde estés. Respuesta en menos de 24h.",
      eyebrow: "Asistencia remota",
      title: "Tu ordenador, arreglado desde donde estés.",
      sub: "Vivas aquí o pases meses fuera, te ayudamos por control remoto. Tú solo aceptas la conexión; nosotros hacemos el resto.",
      stepsTitle: "Cómo funciona",
      steps: [
        {
          t: "Nos cuentas",
          d: "Por teléfono o WhatsApp, en tu idioma. Vemos juntos qué pasa.",
        },
        {
          t: "Aceptas la conexión",
          d: "Te guiamos paso a paso. Verás todo lo que hacemos en tu pantalla.",
        },
        {
          t: "Queda resuelto",
          d: "Arreglamos, te explicamos y comprobamos que todo funciona.",
        },
      ],
      tipsTitle: "Viene bien para",
      tips: [
        "Ordenadores lentos, virus y programas que estorban.",
        "Configurar correo, impresoras y programas.",
        "Dudas y ajustes paso a paso, sin prisa.",
      ],
    },
    legal: {
      metaTitle: "Información legal, privacidad y cookies — ComCare Benitachell",
      metaDescription:
        "Quién está detrás de esta web, cómo tratamos los datos del formulario y qué cookies usamos. Todo explicado en lenguaje claro.",
      eyebrow: "Legal",
      title: "Lo legal, explicado claro.",
      sub: "Quién está detrás de esta web, qué hacemos con tus datos y qué cookies usamos. Sin letra pequeña.",
      updatedLabel: "Última actualización",
      updated: "Octubre de 2026",
      tocLabel: "En esta página",
      back: "Volver a información legal",
      missing: "Por completar",
      ownerTitle: "Datos del titular",
      ownerNote: "Estos datos identifican al responsable de la web y del tratamiento de datos.",
      labels: {
        legalName: "Razón social",
        taxId: "NIF / CIF",
        address: "Domicilio",
        phone: "Teléfono",
        email: "Correo electrónico",
        registry: "Datos registrales",
      },
      draftNotice:
        "Borrador pendiente de revisión: faltan datos del titular (marcados como «Por completar»). Antes de publicar, revisa el texto con un asesor legal.",
      hub: {
        aviso: {
          title: "Aviso legal",
          desc: "Titular, datos de contacto y reglas de uso de la web.",
        },
        privacidad: {
          title: "Privacidad",
          desc: "Qué datos recogemos en el formulario y cómo los tratamos.",
        },
        cookies: {
          title: "Cookies",
          desc: "Las cookies técnicas que usamos y el mapa con consentimiento.",
        },
      },
      reset: {
        title: "Mapa de Google",
        text: "Puedes retirar el consentimiento del mapa en cualquier momento. Volverá a pedirte permiso la próxima vez que lo abras.",
        button: "Retirar consentimiento del mapa",
        done: "Hecho. El mapa vuelve a estar desactivado.",
      },
      docs: {
        aviso: {
          title: "Aviso legal",
          intro:
            "Esta web presenta los servicios tecnológicos de ComCare en Benitachell y la Costa Blanca. Al usarla aceptas las reglas que se explican aquí.",
          sections: [
            {
              h: "Quién es el titular",
              p: [
                "Los datos del titular figuran en el recuadro de esta página. Puedes contactar por teléfono o correo electrónico para cualquier consulta relacionada con la web.",
              ],
            },
            {
              h: "Para qué sirve esta web",
              p: [
                "Informar sobre nuestros servicios y permitir solicitar un presupuesto. La información es orientativa: el alcance y el precio de cada trabajo se confirman en un presupuesto personalizado.",
              ],
            },
            {
              h: "Uso de la web",
              p: [
                "Usa la web de buena fe y con respeto a la ley. No está permitido intentar acceder a zonas privadas, alterar su funcionamiento, extraer contenidos de forma masiva ni usarla para fines ilícitos.",
              ],
            },
            {
              h: "Propiedad intelectual",
              p: [
                "Los textos, el diseño y los elementos gráficos de esta web son del titular o se usan con licencia. Las fotografías de muestra proceden de Unsplash y Pexels y se sustituirán por imágenes propias. No copies ni reutilices el contenido sin permiso.",
              ],
            },
            {
              h: "Responsabilidad y enlaces",
              p: [
                "Trabajamos para que la información esté actualizada, pero puede haber errores o cambios de última hora. El mapa y otros enlaces llevan a webs de terceros (Google), cuyas condiciones no controlamos.",
              ],
            },
            {
              h: "Ley aplicable",
              p: [
                "Esta web se rige por la legislación española. Cualquier controversia se resolverá ante los tribunales que correspondan, sin renunciar a los derechos que la ley reconoce a los consumidores.",
              ],
            },
          ],
        },
        privacidad: {
          title: "Política de privacidad",
          intro:
            "Tu nombre, tu teléfono y lo que nos cuentas sirven para responderte. Nada más. Aquí te explicamos cómo lo tratamos, con la claridad que nos gustaría recibir.",
          sections: [
            {
              h: "Responsable del tratamiento",
              p: [
                "El responsable es el titular de la web, cuyos datos figuran en el recuadro. Para cualquier cuestión de privacidad puedes escribirnos al correo indicado.",
              ],
            },
            {
              h: "Qué datos recogemos",
              p: [
                "Los que escribes en el formulario: nombre, teléfono o WhatsApp, idioma, servicio que te interesa y el mensaje con lo que necesitas.",
                "Si eliges servicios en el simulador de tu casa, la selección se guarda solo en tu navegador y se envía junto con la solicitud cuando la envías tú.",
                "El proveedor de alojamiento puede registrar datos técnicos de conexión, como la dirección IP y la fecha, por motivos de seguridad.",
              ],
            },
            {
              h: "Para qué los usamos y con qué base legal",
              p: [
                "Para responder a tu solicitud y preparar un presupuesto. La base legal es tu consentimiento al marcar la casilla y enviar el formulario.",
                "No usamos tus datos para publicidad ni los vendemos. No tomamos decisiones automáticas con ellos.",
              ],
            },
            {
              h: "Cuánto tiempo los guardamos",
              p: [
                "El tiempo necesario para atender tu solicitud y, después, el que exijan las obligaciones legales aplicables. Cuando ya no sean necesarios, los eliminamos.",
              ],
            },
            {
              h: "Quién puede verlos",
              p: [
                "Solo el equipo de ComCare. Los proveedores tecnológicos que nos ayudan (alojamiento, correo) pueden acceder como encargados del tratamiento y con contrato. No cedemos datos a terceros salvo obligación legal.",
              ],
            },
            {
              h: "Tus derechos",
              p: [
                "Puedes pedir acceso, corrección, borrado, oposición, limitación o portabilidad de tus datos escribiendo al correo del titular.",
                "Si crees que no te hemos atendido bien, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
              ],
            },
            {
              h: "Seguridad y menores",
              p: [
                "Aplicamos medidas razonables para proteger tus datos. Ningún sistema es infalible, pero solo guardamos lo necesario.",
                "La web está pensada para personas adultas. No envíes datos de menores.",
              ],
            },
            {
              h: "Cambios",
              p: [
                "Si cambiamos esta política, actualizaremos la fecha que aparece arriba. Te recomendamos revisarla de vez en cuando.",
              ],
            },
          ],
        },
        cookies: {
          title: "Política de cookies",
          intro:
            "Esta web usa lo mínimo. No hay cookies publicitarias ni de seguimiento. Solo guardamos tu idioma y, si lo aceptas, cargamos el mapa de Google.",
          sections: [
            {
              h: "Qué son las cookies y el almacenamiento local",
              p: [
                "Son pequeños datos que el navegador guarda en tu dispositivo. Algunos son necesarios para que la web funcione; otros son opcionales. También usamos almacenamiento local del navegador, que funciona de forma parecida.",
              ],
            },
            {
              h: "Qué guardamos",
              p: [
                "Cookie «lang»: recuerda el idioma que eliges para no preguntártelo en cada visita. Dura 1 año. Es técnica y necesaria.",
                "Almacenamiento «map-consent»: recuerda si aceptaste cargar el mapa de Google, para no preguntártelo otra vez. Se queda en tu navegador.",
                "No usamos cookies de publicidad, de análisis ni de redes sociales.",
              ],
            },
            {
              h: "El mapa de Google",
              p: [
                "El mapa no se carga hasta que pulsas el botón. Al aceptarlo, Google puede instalar sus propias cookies y recibir tu dirección IP, según sus políticas. Si no lo aceptas, puedes seguir usando la web y ver la dirección escrita.",
              ],
            },
            {
              h: "Cómo cambiar tu elección",
              p: [
                "Puedes borrar el consentimiento del mapa con el botón de abajo. También puedes bloquear o eliminar cookies desde los ajustes de tu navegador.",
              ],
            },
            {
              h: "Cambios",
              p: [
                "Si añadimos algún servicio que use cookies, actualizaremos esta página y volveremos a pedirte permiso cuando sea necesario.",
              ],
            },
          ],
        },
      },
    },
  },
  lead: {
    title: "Pide tu presupuesto en 2 minutos.",
    sub: "Sin compromiso. Te guiamos paso a paso.",
    or: "O escríbenos:",
    stepsAria: "Pasos del presupuesto",
    stepLabels: { servicio: "Servicio", datos: "Tus datos", mensaje: "Cuéntanos" },
    hintNeedService: "Primero elige tu servicio para continuar.",
    hintNeedDetails: "Completa tus datos para continuar.",
    tipServicio: "Sugerencia: empieza por «Servicio», te llevará un momento.",
    tipDatos: "Vas bien. Ahora deja «Tus datos» para poder avisarte.",
    tipMensaje: "Casi listo: cuéntanos qué falla y enviamos tu solicitud.",
    inviteTitle: "¿Qué necesita tu casa?",
    inviteSub: "Tres pasos, dos minutos. Empieza eligiendo tu servicio y te llevamos de la mano.",
    inviteCta: "Elegir mi servicio",
    serviceTitle: "¿Qué necesitas?",
    serviceLabel: "Servicio",
    servicePlaceholder: "Toca aquí y elige el tuyo",
    listAria: "Elige un servicio",
    confirm: "Confirmar y continuar",
    dataTitle: "Tus datos",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    phoneLabel: "Teléfono / WhatsApp",
    langLabel: "Idioma",
    back: "Atrás",
    continue: "Continuar",
    msgTitle: "Cuéntanos",
    msgLabel: "Tu casa y qué falla",
    msgPlaceholder: "Ej: villa 2 plantas en Moraira, WiFi no llega al jardín y quiero 2 cámaras...",
    privacy: "Acepto ser contactado sobre mi solicitud. No cedemos tus datos.",
    privacyLink: "Política de privacidad",
    sending: "Enviando…",
    submit: "Quiero mi presupuesto",
    ok: "Recibido. Te contactamos en menos de 24h laborables.",
    errName: "Indica tu nombre",
    errPhone: "Teléfono/WhatsApp inválido",
    errMsg: "Cuéntanos un poco más (mín. 10 caracteres)",
    errPrivacy: "Debes aceptar la privacidad",
    errSend: "No se pudo enviar.",
    errNet: "Error de red. Prueba por WhatsApp.",
  },
  chat: {
    budget: "Presupuesto",
    title: "¿Hablamos?",
    hours: "Lun–Vie 10:00–14:00 · ES/EN/NL/DE",
    budget24: "Presupuesto en 24h",
    waDirect: "WhatsApp directo",
    remote: "Asistencia remota",
    openAria: "Abrir chat de contacto",
  },
  footer: {
    brand: "CostaTech · Benitachell",
    about:
      "Un solo equipo local para tu casa conectada: IT, redes, TV internacional, smart home, CCTV y solar. Desde 1994.",
    address: "Carrer les Capelletes 17, 03726 Benitachell · Lun–Vie 10:00–14:00",
    contact: "Contacto",
    solutions: "Soluciones",
    credits: "Fotos: Unsplash / Pexels (uso libre). Sin cifras inventadas: añadiremos opiniones verificadas.",
  },
};

export type Dictionary = typeof es;
