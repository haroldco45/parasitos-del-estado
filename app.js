/* Parásitos del Estado · Vibras Positivas HM
   App ciudadana: sueldos y privilegios pagados con plata pública. */
(function () {
  'use strict';

  const TZ = 'America/Bogota';
  const WHATSAPP = '573117700431';
  const PAGO_2024 = 1041000000;           // Semana / A. Donadío
  const SMMLV_2026 = 1750905;             // Decreto 1469 de 2025
  const POR_SEGUNDO = PAGO_2024 / (365 * 24 * 3600);
  const QUERIES = [
    'Saúl Cruz subsecretario Senado',
    'salarios altos funcionarios públicos Colombia',
    'privilegios salariales Congreso Colombia',
    'magistrados JEP Sección de Apelación denuncia'
  ];

  let lang = (function () { try { return localStorage.getItem('pde_lang') || 'es'; } catch (e) { return 'es'; } })();
  const t0 = Date.now();

  /* ---------- TEXTOS ---------- */
  const T = {
    es: {
      nav_jep:'JEP', jep_tag:'Caso JEP · Foto: Plaza de Bolívar', jep_kicker:'Denuncia en curso · No probada',
      jep_title:'¿Siete años cobrando sin resolver apelaciones?',
      jep_p1:'El 23 de octubre de 2026 se presentó ante la <b>Comisión de Investigación y Acusación de la Cámara</b> una denuncia penal y disciplinaria contra los cinco magistrados de la <b>Sección de Apelación de la JEP</b>: Danilo Rojas Betancourth, Rodolfo Arango Rivadeneira, Eduardo Cifuentes Muñoz, Sandra Gamboa Rubiano y Patricia Linares Prieto.',
      jep_p2:'La denuncia dice que, aunque la JEP arrancó en 2018, esa sección solo empezó a resolver apelaciones de sentencias de fondo a finales de 2025, y que mientras tanto cobraron su sueldo y tuvieron una planta de 11 funcionarios por despacho. Pide investigarlos por <b>peculado por apropiación, prevaricato y abuso de autoridad</b>.',
      jep_p3:'La otra cara: registros de la propia JEP muestran que la Sección de Apelación <b>sí produjo decisiones antes de 2025</b> (recursos de otras salas, acreditación de víctimas). Ninguna autoridad ha comprobado los hechos. Por eso aquí pedimos los números oficiales, no condenas.',
      jt1:'Arranca la JEP', jt2:'Acuerdo AOG 020: planta de 11 funcionarios por despacho', jt3:'Primeras sentencias de fondo de macrocasos (casos 01 y 03)', jt4:'Danilo Rojas, uno de los denunciados, es elegido presidente de la JEP', jt5:'Radican la denuncia ante la Comisión de Acusación', jt6:'Rojas asume la presidencia de la JEP',
      jep_cta:'Exigir los números de la JEP', p_case:'¿Sobre qué caso?', pc_senado:'Senado: sueldo del subsecretario', pc_jep:'JEP: magistrados de la Sección de Apelación',
      vid3:'Videos sobre la denuncia contra los magistrados de la JEP',
      pet_lead:'Escoge el caso, llena tus datos y la app arma la carta. Un solo botón la envía a la vez a todas las entidades del caso. La Procuraduría ya no recibe peticiones por correo: te la dejamos copiada para pegarla en su formulario oficial.',
      refresh:'Actualizar', nav_today:'Hoy', nav_case:'Senado', nav_check:'Verificado', nav_calc:'Calcula', nav_rank:'Ranking', nav_files:'Expedientes', nav_petition:'Exige', nav_sources:'Fuentes',
      hero_kicker:'Lupa ciudadana · Plata pública', hero_title:'¿Cuántos parásitos tiene el Estado?',
      hero_sub:'Sueldos y privilegios que pagamos todos con impuestos. Con cifras verificadas, fuentes y una carta para exigir respuestas.',
      meter_label:'Desde que abriste esta app, al subsecretario del Senado se le han pagado',
      meter_note:'Calculado con lo que le pagó el Senado en 2024: $1.041 millones en el año.',
      cta_petition:'Exigir respuestas', cta_check:'¿Es cierto lo de los 124 millones?',
      s1:'pagados en 2024 a un solo cargo', s2:'de salario mínimo para igualar ese año', s3:'en el mismo cargo (desde 2002)', s4:'para reelegirlo el 20 de julio de 2026',
      today_title:'Hoy', loading:'Buscando noticias…', today_note:'Un robot busca noticias reales cada 30 minutos y, además, la app hace una búsqueda en vivo cada vez que entras.',
      case_tag:'Senado de la República', case_title:'El caso que destapó todo',
      case_p1:'Saúl Cruz Bonilla es <b>subsecretario general del Senado</b> (no secretario, como dicen algunas publicaciones). Entró al Senado en 1984 y está en ese cargo desde 2002. El 20 de julio de 2026 los senadores lo reeligieron con 101 votos.',
      case_p2:'Según la investigación del periodista Alberto Donadío publicada en Semana, el Senado le pagó <b>$1.041 millones en 2024</b>: unos $86 millones al mes en promedio. Su sueldo básico ronda los $22 millones; el resto sale de primas técnicas, de antigüedad, de gestión, bonificaciones de dirección y vacaciones pagadas en dinero.',
      case_p3:'Lo grave no es que sea ilegal: los medios dicen que esos pagos están amparados por normas. Lo grave es que <b>las normas lo permiten</b> mientras al ciudadano le suben los impuestos.',
      tl1:'Entra a trabajar al Senado', tl2:'Lo eligen subsecretario general', tl3:'La Procuraduría lo suspende por fingir una agresión de un camarógrafo de Noticias Uno', tl4:'Recibe $1.041 millones en el año', tl5:'Reelegido con 101 votos', tl6:'El Consejo de Estado anula la convocatoria con la que se eligieron los cargos del Senado; no aclara qué pasa con los elegidos',
      check_title:'Lo que dice el post vs. lo que está probado',
      calc_title:'¿Cuánto tendrías que trabajar tú?', calc_label:'Escribe lo que ganas al mes (pesos)', calc_years:'años trabajando para ganar lo que él recibió en 2024', calc_days:'horas le toma a él ganarse tu sueldo de un mes',
      calc_note:'Salario mínimo 2026: $1.750.905 (Decreto 1469 de 2025). Comparación con el pago total 2024 reportado por Semana.',
      rank_title:'El mapa de los sueldos más altos', rank_lead:'Pago mensual aproximado. Ojo: mezcla años y conceptos (algunos son salario, otros costo total con primas). Cada barra dice de dónde sale.',
      files_title:'Expedientes abiertos', files_lead:'Cada caso con su cifra, su fuente y su estado. ¿Conoces otro? Mándalo y lo revisamos antes de publicarlo.',
      propose_title:'Propón un caso', pc_cargo:'Cargo y entidad', pc_cifra:'Cifra que se denuncia', pc_fuente:'Enlace de la noticia o documento', pc_send:'Enviar por WhatsApp', pc_note:'Solo publicamos casos con fuente verificable.',
      pet_title:'Derecho de petición: exige qué pasó',
      p_name:'Nombre completo', p_id:'Cédula', p_city:'Ciudad', p_mail:'Correo para la respuesta', p_dest:'Se envía a:', p_send:'Enviar a todos de una vez', p_gmail:'Enviar con Gmail', p_procu:'Copiar y abrir formulario de la Procuraduría',
      p_fill:'Llena nombre, cédula, ciudad y correo.', p_copied:'Carta copiada. Pégala en el formulario de la Procuraduría.', p_opening:'Abriendo tu correo con la carta lista…', p_letter_note:'',
      vid_title:'Videos del caso', vid1:'Ver videos sobre el salario de Saúl Cruz en YouTube', vid2:'Canal Congreso: sesiones y elección de la mesa del Senado',
      src_title:'Fuentes', disclaimer:'Aquí "parásito" es una crítica política a privilegios pagados con plata pública, no una acusación de delito. Las cifras vienen de medios y fuentes oficiales citadas; si alguna cambia, la corregimos.',
      foot:'App ciudadana hecha en Caucasia, Antioquia',
      st_robot:'Noticias del robot: ', st_live:' · búsqueda en vivo: ', st_none:'No llegaron noticias nuevas. Toca Actualizar en un momento.',
      upd:'Actualizado: ', updated_toast:'Actualizado', new_n:' nuevas desde tu última visita', mill:' mill.', years:' años', votes:' votos'
    },
    en: {
      nav_jep:'JEP', jep_tag:'JEP case · Photo: Plaza de Bolívar', jep_kicker:'Complaint under way · Not proven',
      jep_title:'Seven years paid without ruling on appeals?',
      jep_p1:'On October 23, 2026, a criminal and disciplinary complaint was filed with the <b>House Investigation and Accusation Committee</b> against the five judges of the <b>JEP Appeals Section</b>: Danilo Rojas Betancourth, Rodolfo Arango Rivadeneira, Eduardo Cifuentes Muñoz, Sandra Gamboa Rubiano and Patricia Linares Prieto.',
      jep_p2:'The complaint says that although the JEP started in 2018, that section only began ruling on appeals of final judgments in late 2025, while they kept drawing salaries with 11 staff per office. It asks for an investigation for <b>embezzlement, malfeasance and abuse of authority</b>.',
      jep_p3:'The other side: the JEP\'s own records show the Appeals Section <b>did issue decisions before 2025</b> (appeals from other chambers, victim accreditation). No authority has proven the allegations. That is why we ask for official figures, not convictions.',
      jt1:'The JEP begins', jt2:'Agreement AOG 020: 11 staff per office', jt3:'First final rulings in macro-cases (cases 01 and 03)', jt4:'Danilo Rojas, one of those accused, elected JEP president', jt5:'Complaint filed with the Accusation Committee', jt6:'Rojas takes office as JEP president',
      jep_cta:'Demand the JEP\'s figures', p_case:'Which case?', pc_senado:'Senate: deputy secretary\'s pay', pc_jep:'JEP: Appeals Section judges',
      vid3:'Videos about the complaint against the JEP judges',
      pet_lead:'Pick the case, fill in your details and the app writes the letter. One button sends it at once to every agency involved. The Inspector General no longer takes petitions by email: we copy it for you to paste into its official form.',
      refresh:'Refresh', nav_today:'Today', nav_case:'Senate', nav_check:'Fact check', nav_calc:'Calculate', nav_rank:'Ranking', nav_files:'Case files', nav_petition:'Demand', nav_sources:'Sources',
      hero_kicker:'Citizen watch · Public money', hero_title:'How many parasites does the State have?',
      hero_sub:'Salaries and perks we all pay for with our taxes. Verified figures, sources and a letter to demand answers.',
      meter_label:'Since you opened this app, the Senate deputy secretary has been paid',
      meter_note:'Based on what the Senate paid him in 2024: COP 1,041 million for the year.',
      cta_petition:'Demand answers', cta_check:'Is the 124 million claim true?',
      s1:'paid in 2024 to a single post', s2:'of minimum wage to match that year', s3:'in the same post (since 2002)', s4:'to re-elect him on July 20, 2026',
      today_title:'Today', loading:'Looking for news…', today_note:'A robot fetches real news every 30 minutes, and the app also runs a live search every time you open it.',
      case_tag:'Colombian Senate', case_title:'The case that exposed it all',
      case_p1:'Saúl Cruz Bonilla is the <b>Senate deputy secretary general</b> (not secretary, as some posts say). He joined the Senate in 1984 and has held this post since 2002. On July 20, 2026, senators re-elected him with 101 votes.',
      case_p2:'According to journalist Alberto Donadío, writing in Semana, the Senate paid him <b>COP 1,041 million in 2024</b>: about COP 86 million a month on average. His base salary is around COP 22 million; the rest comes from technical, seniority and performance bonuses, management bonuses and vacation paid in cash.',
      case_p3:'The problem is not that it is illegal: the media report these payments are backed by rules. The problem is that <b>the rules allow it</b> while citizens face higher taxes.',
      tl1:'Starts working at the Senate', tl2:'Elected deputy secretary general', tl3:'Suspended by the Inspector General for faking an assault by a Noticias Uno cameraman', tl4:'Receives COP 1,041 million in the year', tl5:'Re-elected with 101 votes', tl6:'The Council of State voids the call used to elect Senate officials; it does not say what happens to those elected',
      check_title:'What the post says vs. what is proven',
      calc_title:'How long would you have to work?', calc_label:'Type your monthly income (COP)', calc_years:'years of work to earn what he received in 2024', calc_days:'hours it takes him to earn your monthly pay',
      calc_note:'2026 minimum wage: COP 1,750,905 (Decree 1469 of 2025). Compared with the 2024 total reported by Semana.',
      rank_title:'Map of the highest salaries', rank_lead:'Approximate monthly pay. Note: years and concepts are mixed (some are salary, others total cost with bonuses). Each bar shows its source.',
      files_title:'Open case files', files_lead:'Each case with its figure, source and status. Know another one? Send it and we will check it before publishing.',
      propose_title:'Suggest a case', pc_cargo:'Post and agency', pc_cifra:'Reported figure', pc_fuente:'Link to news or document', pc_send:'Send via WhatsApp', pc_note:'We only publish cases with a verifiable source.',
      pet_title:'Right of petition: demand answers',
      p_name:'Full name', p_id:'ID number (cédula)', p_city:'City', p_mail:'Email for the reply', p_dest:'Sent to:', p_send:'Send to all at once', p_gmail:'Send with Gmail', p_procu:'Copy and open Inspector General form',
      p_fill:'Fill in name, ID, city and email.', p_copied:'Letter copied. Paste it into the Inspector General form.', p_opening:'Opening your email with the letter ready…', p_letter_note:'The letter stays in Spanish because Colombian agencies must receive it in Spanish.',
      vid_title:'Videos about the case', vid1:'Watch videos about Saúl Cruz\'s pay on YouTube', vid2:'Canal Congreso: Senate sessions and board elections',
      src_title:'Sources', disclaimer:'"Parasite" here is political criticism of perks paid with public money, not an accusation of a crime. Figures come from the media and official sources cited; if any changes, we will correct it.',
      foot:'Citizen app made in Caucasia, Antioquia',
      st_robot:'Robot news: ', st_live:' · live search: ', st_none:'No new news came in. Tap Refresh in a moment.',
      upd:'Updated: ', updated_toast:'Updated', new_n:' new since your last visit', mill:' mill.', years:' years', votes:' votes'
    }
  };
  const tr = k => (T[lang] && T[lang][k]) || T.es[k] || k;

  /* ---------- DATOS ---------- */
  const CHECKS = [
    { claim:{es:'"Saúl Cruz, secretario del Congreso"',en:'"Saúl Cruz, secretary of Congress"'}, v:'no',
      fact:{es:'Es subsecretario general del Senado. El secretario general hoy es Diego Alejandro González.',en:'He is the Senate deputy secretary general. The current secretary general is Diego Alejandro González.'} },
    { claim:{es:'"Gana 124 millones de pesos mensuales"',en:'"He earns 124 million pesos a month"'}, v:'mid',
      fact:{es:'No hay documento oficial con esa cifra. Lo probado: $1.041 millones en 2024 (≈ $86 millones/mes promedio, Semana). El Cronista reporta $89,2 millones/mes en 2024 y meses de 2026 cercanos a $98 millones netos. Un medio regional habla de más de $123 millones sumando todo, sin publicar el soporte.',en:'No official document shows that figure. Proven: COP 1,041 million in 2024 (≈ COP 86 million/month average, Semana). El Cronista reports COP 89.2 million/month in 2024 and some 2026 months near COP 98 million net. A regional outlet cites over COP 123 million adding everything, without publishing the source.'} },
    { claim:{es:'"Lleva 24 años en el cargo"',en:'"He has held the post for 24 years"'}, v:'ok',
      fact:{es:'Cierto. Subsecretario desde el 20 de julio de 2002; en el Senado desde 1984.',en:'True. Deputy secretary since July 20, 2002; at the Senate since 1984.'} },
    { claim:{es:'"Gana más que el presidente de la República"',en:'"He earns more than the President"'}, v:'ok',
      fact:{es:'Cierto. El presidente y los altos cargos ganan entre $50 y $57 millones; él promedió más de $86 millones en 2024.',en:'True. The President and top officials earn COP 50–57 million; he averaged over COP 86 million in 2024.'} },
    { claim:{es:'"Es un salario ilegal"',en:'"It is an illegal salary"'}, v:'mid',
      fact:{es:'Los medios lo describen como legal: se suma por primas y factores que la ley permite. El debate es si esas normas son justas. Por eso la carta pide el desglose y el sustento de cada pago.',en:'The media describe it as legal: it adds up through bonuses the law allows. The debate is whether those rules are fair. That is why the letter asks for each payment and its legal basis.'} },
    { claim:{es:'JEP: "Cinco magistrados denunciados ante la Comisión de Acusación"',en:'JEP: "Five judges reported to the Accusation Committee"'}, v:'ok',
      fact:{es:'Cierto. La denuncia penal y disciplinaria se radicó en octubre de 2026 contra los cinco de la Sección de Apelación.',en:'True. The criminal and disciplinary complaint was filed in October 2026 against the five Appeals Section judges.'} },
    { claim:{es:'JEP: "Cobraron sueldo sin trabajar durante más de siete años"',en:'JEP: "They drew salaries without working for over seven years"'}, v:'mid',
      fact:{es:'Es lo que afirma el denunciante; ninguna autoridad lo ha comprobado. Registros de la JEP muestran decisiones de la Sección de Apelación antes de 2025. Lo que sí es cierto: las apelaciones de sentencias de fondo de macrocasos solo empezaron a llegar después de septiembre de 2025.',en:'That is the complainant\'s claim; no authority has proven it. JEP records show Appeals Section decisions before 2025. What is true: appeals of final macro-case rulings only began arriving after September 2025.'} },
    { claim:{es:'JEP: "Danilo Rojas, actual presidente de la JEP"',en:'JEP: "Danilo Rojas, current JEP president"'}, v:'mid',
      fact:{es:'Fue elegido el 20 de octubre de 2026 con 23 votos y asume el 5 de noviembre de 2026, en reemplazo de Alejandro Ramelli.',en:'He was elected on October 20, 2026 with 23 votes and takes office on November 5, 2026, replacing Alejandro Ramelli.'} }
  ];

  const BARS = [
    { n:{es:'Subsecretario general del Senado (pago total promedio 2024)',en:'Senate deputy secretary general (2024 average total pay)'}, v:86.8, src:'Semana / Infobae, jun 2025' },
    { n:{es:'Secretario general de la Cámara (costo total mensual)',en:'House secretary general (total monthly cost)'}, v:83.3, src:'Observatorio Fiscal PUJ vía El País' },
    { n:{es:'Secretario general del Senado (costo total mensual)',en:'Senate secretary general (total monthly cost)'}, v:81.7, src:'Observatorio Fiscal PUJ vía El País' },
    { n:{es:'Director de Fogafín',en:'Fogafín director'}, v:64.7, src:'Función Pública 2025 vía El País' },
    { n:{es:'Fiscal, Contralor, Procurador, magistrados de altas cortes',en:'Attorney General, Comptroller, Inspector General, high court judges'}, v:55, src:'El Colombiano, ene 2026' },
    { n:{es:'Presidente de la JEP (cifra citada por el presidente De La Espriella)',en:'JEP president (figure cited by President De La Espriella)'}, v:55, src:'Vanguardia, sep 2026' },
    { n:{es:'Congresistas antes del recorte',en:'Members of Congress before the cut'}, v:52, src:'El Colombiano, ene 2026' },
    { n:{es:'Congresistas tras eliminar la prima (desde 20 jul 2026)',en:'Members of Congress after the bonus cut (from Jul 20, 2026)'}, v:35, src:'El Colombiano, ene 2026' },
    { n:{es:'Salario mínimo 2026',en:'2026 minimum wage'}, v:1.75, src:'Decreto 1469 de 2025', min:true }
  ];

  const FILES = [
    { h:{es:'Subsecretaría General del Senado',en:'Senate Deputy Secretary General'}, who:'Saúl Cruz Bonilla',
      num:{es:'$1.041 millones en 2024',en:'COP 1,041 million in 2024'},
      p:{es:'Sueldo base cercano a $22 millones más primas técnicas, de antigüedad, de gestión, bonificaciones y vacaciones en dinero. Reelegido en julio de 2026.',en:'Base pay near COP 22 million plus technical, seniority and performance bonuses, management bonus and cash vacation. Re-elected in July 2026.'},
      st:'ok', stt:{es:'Cifra verificada',en:'Verified figure'} },
    { h:{es:'Secretaría General del Senado (2024)',en:'Senate Secretary General (2024)'}, who:'Gregorio Eljach',
      num:{es:'≈ $760 millones en 2024',en:'≈ COP 760 million in 2024'},
      p:{es:'Según Infobae: $149 millones de prima técnica, $91 millones de bonificación de dirección y $113 millones por vacaciones. Dejó el cargo para ser Procurador desde enero de 2025.',en:'Per Infobae: COP 149 million technical bonus, COP 91 million management bonus and COP 113 million in vacation pay. Left the post to become Inspector General in January 2025.'},
      st:'ok', stt:{es:'Cifra verificada',en:'Verified figure'} },
    { h:{es:'JEP — Sección de Apelación',en:'JEP — Appeals Section'}, who:'Danilo Rojas, Rodolfo Arango, Eduardo Cifuentes, Sandra Gamboa, Patricia Linares',
      num:{es:'Denuncia por "7 años sin trabajar"',en:'Complaint over "7 years without working"'},
      p:{es:'Denunciados ante la Comisión de Acusación por presunto peculado, prevaricato y abuso de autoridad. Registros de la JEP contradicen parte de la denuncia. Nada probado aún.',en:'Reported to the Accusation Committee for alleged embezzlement, malfeasance and abuse of authority. JEP records contradict part of the complaint. Nothing proven yet.'},
      st:'mid', stt:{es:'Denuncia sin probar',en:'Unproven complaint'} },
    { h:{es:'Nómina de la JEP 2026',en:'JEP payroll 2026'}, who:{es:'Toda la jurisdicción',en:'The whole jurisdiction'},
      num:{es:'≈ $404.477 millones',en:'≈ COP 404,477 million'},
      p:{es:'Cifra presentada por el Gobierno en septiembre de 2026. El Congreso aprobó un recorte de $181.400 millones a la JEP en el presupuesto 2027.',en:'Figure presented by the Government in September 2026. Congress approved a COP 181,400 million cut to the JEP in the 2027 budget.'},
      st:'mid', stt:{es:'En seguimiento',en:'Being tracked'} },
    { h:{es:'Secretarías generales de Senado y Cámara',en:'Senate and House secretaries general'}, who:{es:'El cargo, no la persona',en:'The post, not the person'},
      num:{es:'Hasta $83 millones/mes',en:'Up to COP 83 million/month'},
      p:{es:'El Observatorio Fiscal de la Javeriana encontró que cerca de la mitad de los cargos mejor pagados del Estado son técnicos y administrativos, no de elección popular.',en:'Javeriana University\'s Fiscal Observatory found nearly half of the best-paid State posts are technical and administrative, not elected.'},
      st:'ok', stt:{es:'Estudio publicado',en:'Published study'} },
    { h:{es:'Gasto de personal del Estado',en:'State payroll spending'}, who:{es:'Todo el Estado',en:'The whole State'},
      num:{es:'1,8% → 5,6% del PIB',en:'1.8% → 5.6% of GDP'},
      p:{es:'Entre 2005 y 2025 el gasto en personal del Estado pasó de 1,8% a 5,6% del PIB, según el Observatorio Fiscal (mayo 2026).',en:'Between 2005 and 2025 State payroll grew from 1.8% to 5.6% of GDP, per the Fiscal Observatory (May 2026).'},
      st:'mid', stt:{es:'En seguimiento',en:'Being tracked'} }
  ];

  const SOURCES = [
    ['Semana — ¿Quiere ganar 3 millones de pesos diarios? (A. Donadío)','https://www.semana.com/opinion/articulo/quiere-ganar-3-millones-de-pesos-diarios/202516/','21 jun 2025'],
    ['Infobae — Saúl Cruz reelegido subsecretario del Senado','https://www.infobae.com/colombia/2026/07/21/el-senado-eligio-nuevamente-a-saul-cruz-como-su-subsecretario-general-lleva-mas-de-20-anos-en-el-cargo-y-tiene-el-salario-mas-alto-del-pais/','21 jul 2026'],
    ['Infobae — Lo que recibía Gregorio Eljach como secretario del Senado','https://www.infobae.com/colombia/2025/06/22/este-era-el-sueldito-que-recibia-gregorio-eljach-como-secretario-del-senado-en-2024-solo-de-vacaciones-le-pagaron-mas-de-100-millones/','22 jun 2025'],
    ['El Cronista — Consejo de Estado tumba convocatoria del Senado','https://elcronista.co/actualidad/consejo-de-estado-tumba-convocatoria-para-elegir-funcionarios-del-senado','20 oct 2026'],
    ['El Cronista — 24 años y contando','https://elcronista.co/destacadas/24-anos-y-contando-saul-cruz-bonilla-seguira-como-subsecretario-del-senado','jul 2026'],
    ['Función Pública — SIGEP, escala salarial del Senado','https://www1.funcionpublica.gov.co/dafpIndexerBHV/hvSigep/detallarHV/S318514-0925-4','consulta nov 2026'],
    ['El País — Funcionarios mejor remunerados (Observatorio Fiscal PUJ)','https://www.elpais.com.co/colombia/estos-son-los-funcionarios-publicos-mejor-remunerados-en-colombia-el-presidente-no-ocupa-el-primer-lugar-0601.html',''],
    ['El Colombiano — Salarios más altos del Estado tras recorte a congresistas','https://www.elcolombiano.com/colombia/salarios-mas-altos-estado-colombia-ranking-2026-HO32782647','22 ene 2026'],
    ['El Colombiano — Gasto de personal del Estado','https://www.elcolombiano.com/negocios/mayor-gasto-de-personal-gobierno-petro-EO36830765','22 may 2026'],
    ['Portafolio — Salario mínimo 2026 sigue en $1.750.905','https://www.portafolio.co/economia/gobierno/salario-minimo-de-2026-sigue-en-1-750-905-y-gobierno-descarta-devolucion-de-dinero-a-trabajadores-504218',''],
    ['La FM — Cinco magistrados de la JEP denunciados por "cobrar sueldo sin trabajar"','https://www.lafm.com.co/politica/magistrados-de-la-jep-denuncias-por-supuestamente-cobrar-sueldo-sin-trabajar-414934','oct 2026'],
    ['Infobae — Presidente de la JEP y cuatro magistrados denunciados','https://www.infobae.com/colombia/2026/10/23/presidente-de-la-jep-y-cuatro-magistrados-mas-senalados-de-haber-cobrado-sueldo-sin-trabajar-fueron-denunciados-ante-la-comision-de-acusaciones-de-la-camara/','23 oct 2026'],
    ['Publimetro — Registros de la JEP sobre la Sección de Apelación','https://www.publimetro.co/noticias/2026/10/23/denuncian-a-cinco-magistrados-de-la-jep-por-presuntamente-recibir-salarios-sin-trabajar-por-mas-de-siete-anos/','23 oct 2026'],
    ['Diario La Libertad — Registros oficiales contradicen parte de la denuncia','https://diariolalibertad.com/2026/10/24/denuncian-a-cinco-magistrados-de-la-jep-por-presuntos-pagos-sin-carga-laboral-pero-registros-oficiales-contradicen-parte-de-los-senalamientos/','24 oct 2026'],
    ['Asuntos Legales — Danilo Rojas, nuevo presidente de la JEP','https://www.asuntoslegales.com.co/actualidad/danilo-rojas-fue-elegido-como-el-nuevo-presidente-de-la-jep-para-el-periodo-2026-2028-4507038','20 oct 2026'],
    ['Vanguardia — De La Espriella y las cifras de la JEP','https://www.vanguardia.com/colombia/2026/09/20/de-la-espriella-se-pronuncia-sobre-la-jep-y-su-carta-a-la-cpi-no-es-venganza/','20 sep 2026'],
    ['La Silla Vacía — Recorte de $181.400 millones a la JEP en el PGN 2027','https://www.lasillavacia.com/?p=456878','oct 2026'],
    ['Cámara — Canales de atención (PQRSD)','https://www.camara.gov.co/participa/consulta-ciudadana/canales-de-atencion/',''],
    ['Senado — Canales oficiales de PQRSD','https://senado.gov.co/index.php/participacion/contactenos',''],
    ['Fotos: Capitolio Nacional, Wikimedia Commons (Bernard Gagnon, Rikimedia y otros, licencias libres)','https://commons.wikimedia.org/wiki/Category:Capitolio_Nacional_de_Colombia','']
  ];

  /* ---------- UTILIDADES ---------- */
  const $ = s => document.querySelector(s);
  const fmt = n => '$' + Math.round(n).toLocaleString('es-CO');
  const L = o => (o && typeof o === 'object') ? (o[lang] || o.es) : o;
  function toast(msg) {
    const d = document.createElement('div'); d.className = 'toast'; d.textContent = msg;
    document.body.appendChild(d); setTimeout(() => d.remove(), 2600);
  }
  function bogota(d, opts) {
    return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'es-CO', Object.assign({ timeZone: TZ }, opts)).format(d);
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  // Fotos: si la copia local aún no existe, usa la de Wikimedia
  function wireImages() {
    document.querySelectorAll('img[data-fallback]').forEach(img => {
      img.addEventListener('error', function h() { img.removeEventListener('error', h); img.src = img.dataset.fallback; });
      if (img.complete && img.naturalWidth === 0) img.src = img.dataset.fallback;
    });
  }

  /* ---------- IDIOMA ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = tr(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = tr(el.dataset.i18nPh); });
    $('#btnLang').textContent = lang === 'es' ? 'EN' : 'ES';
    renderChecks(); renderBars(); renderFiles(); renderSources(); renderToday(); renderLetter(); calc();
    renderNews(lastNews);
  }

  /* ---------- CONTADORES ---------- */
  function tickMeter() {
    const s = (Date.now() - t0) / 1000;
    $('#meterValue').textContent = fmt(s * POR_SEGUNDO);
    requestAnimationFrame(tickMeter);
  }
  function animateCounts() {
    document.querySelectorAll('.count').forEach(el => {
      const to = +el.dataset.to, pre = el.dataset.prefix || '';
      const suf = { ' mill.': tr('mill'), ' años': tr('years'), ' votos': tr('votes') }[el.dataset.suffix] || '';
      const st = performance.now();
      (function step(n) {
        const k = Math.min(1, (n - st) / 1600), e = 1 - Math.pow(1 - k, 3);
        el.textContent = pre + Math.round(to * e).toLocaleString('es-CO') + suf;
        if (k < 1) requestAnimationFrame(step);
      })(st);
    });
  }

  /* ---------- RENDER ---------- */
  function renderChecks() {
    const lab = { ok:{es:'Cierto',en:'True'}, no:{es:'Falso',en:'False'}, mid:{es:'Sin confirmar / matiz',en:'Unconfirmed / nuance'} };
    $('#checks').innerHTML = CHECKS.map(c => `
      <div class="check"><span class="badge b-${c.v}">${L(lab[c.v])}</span>
      <p class="claim">${L(c.claim)}</p><p class="fact">${L(c.fact)}</p></div>`).join('');
  }
  function renderBars() {
    const max = Math.max(...BARS.map(b => b.v));
    $('#bars').innerHTML = BARS.map(b => `
      <div class="bar${b.min ? ' min' : ''}"><div class="row"><span>${L(b.n)}</span><b>${fmt(b.v * 1e6)}</b></div>
      <div class="track"><div class="fill" data-w="${Math.max(1.2, b.v / max * 100)}"></div></div>
      <span class="src">${b.src}</span></div>`).join('');
    requestAnimationFrame(() => setTimeout(() => {
      document.querySelectorAll('.fill').forEach(f => { if (f.closest('.block.in')) f.style.width = f.dataset.w + '%'; });
    }, 60));
  }
  function renderFiles() {
    $('#files').innerHTML = FILES.map(f => `
      <article class="file"><h3>${L(f.h)}</h3><p class="who">${escapeHtml(L(f.who))}</p>
      <p class="num">${L(f.num)}</p><p>${L(f.p)}</p>
      <span class="badge st b-${f.st}">${L(f.stt)}</span></article>`).join('');
  }
  function renderSources() {
    $('#sources').innerHTML = SOURCES.map(s => `<li><a href="${s[1]}" target="_blank" rel="noopener">${escapeHtml(s[0])}</a>${s[2] ? `<span>${s[2]}</span>` : ''}</li>`).join('');
  }
  function renderToday() {
    $('#todayDate').textContent = bogota(new Date(), { weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'2-digit' });
  }

  /* ---------- CALCULADORA ---------- */
  function calc() {
    const raw = ($('#mySalary').value || '').replace(/[^\d]/g, '');
    const m = Math.max(1, +raw || SMMLV_2026);
    const years = PAGO_2024 / (m * 12);
    const hours = m / (PAGO_2024 / (365 * 24));   // horas de él para ganarse tu mes
    $('#calcYears').textContent = years >= 10 ? Math.round(years) : years.toFixed(1).replace('.', ',');
    $('#calcDays').textContent = hours >= 10 ? Math.round(hours).toLocaleString('es-CO') : hours.toFixed(1).replace('.', ',');
  }

  /* ---------- NOTICIAS: robot + búsqueda en vivo ---------- */
  let lastNews = [];
  function seenSet() { try { return new Set(JSON.parse(localStorage.getItem('pde_seen') || '[]')); } catch (e) { return new Set(); } }
  function saveSeen(list) { try { localStorage.setItem('pde_seen', JSON.stringify(list.slice(0, 200).map(n => n.link))); } catch (e) {} }

  async function getRobot() {
    try {
      const r = await fetch('data/noticias.json?t=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) return { items: [], updated: null };
      return await r.json();
    } catch (e) { return { items: [], updated: null }; }
  }
  function parseRss(xml) {
    const doc = new DOMParser().parseFromString(xml, 'text/xml');
    return [...doc.querySelectorAll('item')].map(it => {
      const title = (it.querySelector('title') || {}).textContent || '';
      const src = (it.querySelector('source') || {}).textContent || '';
      return { title: src && title.endsWith(' - ' + src) ? title.slice(0, -(src.length + 3)) : title,
               link: (it.querySelector('link') || {}).textContent || '', source: src,
               date: (it.querySelector('pubDate') || {}).textContent || '' };
    });
  }
  async function liveSearch() {
    const out = [];
    await Promise.all(QUERIES.map(async q => {
      const rss = 'https://news.google.com/rss/search?q=' + encodeURIComponent(q + ' when:30d') + '&hl=es-419&gl=CO&ceid=CO:es-419';
      const proxies = ['https://api.allorigins.win/raw?url=' + encodeURIComponent(rss), 'https://corsproxy.io/?url=' + encodeURIComponent(rss)];
      for (const p of proxies) {
        try {
          const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 8000);
          const r = await fetch(p, { signal: ctl.signal }); clearTimeout(to);
          if (!r.ok) continue;
          const items = parseRss(await r.text());
          if (items.length) { out.push(...items); break; }
        } catch (e) { /* siguiente proxy */ }
      }
    }));
    return out;
  }
  function merge(a, b) {
    const TEMA = /sa[uú]l cruz|cruz bonilla|senado|congreso|funcionari|servidores p[uú]blicos|salari|sueldo|privilegi|prima|n[oó]mina|observatorio fiscal|gasto de personal|jep|magistrad/i;
    const FUERA = /costa rica|m[eé]xico|argentin|chile|per[uú]\b|uruguay|ecuador|venezuela|espa[ñn]a|fifa|infantino|bolivia|paraguay|panam[aá]|guatemala|honduras|estados unidos|crn noticias|crprensa|facebook/i;
    const m = new Map();
    [...a, ...b].filter(n => n && TEMA.test(n.title || '') && !FUERA.test((n.title || '') + ' ' + (n.source || ''))).forEach(n => { if (n && n.title && n.link) { const k = n.title.toLowerCase().slice(0, 70); if (!m.has(k)) m.set(k, n); } });
    return [...m.values()].sort((x, y) => (Date.parse(y.date) || 0) - (Date.parse(x.date) || 0)).slice(0, 14);
  }
  function renderNews(list) {
    const seen = seenSet();
    $('#newsList').innerHTML = list.map((n, i) => {
      const d = Date.parse(n.date);
      return `<a href="${escapeHtml(n.link)}" target="_blank" rel="noopener" class="${seen.size && !seen.has(n.link) ? 'new' : ''}" style="animation-delay:${i * 50}ms">
        <span class="nsrc">${escapeHtml(n.source || 'Noticia')}</span>
        <p class="nt">${escapeHtml(n.title)}</p>
        <span class="nd">${d ? bogota(new Date(d), { day:'numeric', month:'short', hour:'numeric', minute:'2-digit' }) : ''}</span></a>`;
    }).join('');
  }
  async function loadNews(manual) {
    $('#todayStatus').textContent = tr('loading');
    renderToday();
    const robot = await getRobot();
    let list = merge(robot.items || [], []);
    if (list.length) { lastNews = list; renderNews(list); }
    const live = await liveSearch();
    list = merge(robot.items || [], live);
    lastNews = list;
    const seen = seenSet();
    const nuevas = seen.size ? list.filter(n => !seen.has(n.link)).length : 0;
    renderNews(list);
    if (!list.length) { $('#todayStatus').textContent = tr('st_none'); }
    else {
      $('#todayStatus').textContent = tr('st_robot') + (robot.items || []).length + tr('st_live') + live.length + (nuevas ? ' · ' + nuevas + tr('new_n') : '');
    }
    if (robot.updated) $('#lastUpdate').textContent = tr('upd') + bogota(new Date(robot.updated), { day:'numeric', month:'short', hour:'numeric', minute:'2-digit' }) + ' (hora Colombia)';
    setTimeout(() => saveSeen(list), 4000);
    if (manual) toast(tr('updated_toast'));
  }

  /* ---------- DERECHO DE PETICIÓN ---------- */
  let pcase = 'senado';
  const CASES = {
    senado: {
      subject: 'Derecho de petición - Remuneración del Subsecretario General del Senado',
      dest: [['atencionciudadanacongreso@senado.gov.co','Senado de la República'],['cgr@contraloria.gov.co','Contraloría General'],['eva@funcionpublica.gov.co','Función Pública']]
    },
    jep: {
      subject: 'Derecho de petición - Productividad y costo de la Sección de Apelación de la JEP',
      dest: [['atencionciudadanacongreso@senado.gov.co','Comisión de Acusación (Cámara, vía Atención Ciudadana del Congreso)'],['info@jep.gov.co','Jurisdicción Especial para la Paz'],['cgr@contraloria.gov.co','Contraloría General']]
    }
  };
  function renderDest() {
    $('#destList').innerHTML = CASES[pcase].dest.map(d => `<label><input type="checkbox" class="destchk" value="${d[0]}" checked> ${escapeHtml(d[1])}</label>`).join('');
  }
  function petData() {
    return { nombre: $('#pNombre').value.trim(), cedula: $('#pCedula').value.trim(), ciudad: $('#pCiudad').value.trim(), correo: $('#pCorreo').value.trim() };
  }
  function letterText() { return pcase === 'jep' ? letterJep() : letterSenado(); }
  function letterJep() {
    const d = petData();
    const fecha = new Intl.DateTimeFormat('es-CO', { timeZone: TZ, day:'numeric', month:'long', year:'numeric' }).format(new Date());
    return `${d.ciudad || '[Ciudad]'}, ${fecha}

Señores
COMISIÓN DE INVESTIGACIÓN Y ACUSACIÓN - CÁMARA DE REPRESENTANTES
PRESIDENCIA Y SECRETARÍA EJECUTIVA - JURISDICCIÓN ESPECIAL PARA LA PAZ (JEP)
CONTRALORÍA GENERAL DE LA REPÚBLICA
PROCURADURÍA GENERAL DE LA NACIÓN

Asunto: Derecho de petición (art. 23 C.P., Ley 1755 de 2015 y Ley 1712 de 2014) sobre la productividad y el costo de la Sección de Apelación de la JEP

Yo, ${d.nombre || '[Nombre]'}, identificado(a) con cédula ${d.cedula || '[Cédula]'}, solicito respetuosamente:

A LA COMISIÓN DE INVESTIGACIÓN Y ACUSACIÓN
1. Número de radicado y estado actual de la denuncia penal y disciplinaria presentada en octubre de 2026 contra los magistrados de la Sección de Apelación de la JEP.
2. Si se abrió indagación preliminar, qué representante investigador fue designado y en qué plazo se decidirá.

A LA JEP
3. Número de providencias (autos, sentencias y SENIT) proferidas por la Sección de Apelación cada año entre 2018 y 2026, por despacho.
4. Remuneración mensual total de cada magistrado de la Sección de Apelación en 2024, 2025 y 2026, desglosada por concepto.
5. Costo anual de la planta de apoyo de esos despachos (Acuerdo AOG 020 de 2024) y las funciones asignadas mientras no llegaban apelaciones de sentencias de fondo.

A LA CONTRALORÍA GENERAL DE LA REPÚBLICA
6. Si ha auditado la nómina y la productividad de la JEP entre 2018 y 2026 y cuáles fueron los hallazgos.

A LA PROCURADURÍA GENERAL DE LA NACIÓN
7. Si existe alguna actuación de vigilancia preventiva sobre estos hechos.

No pido condenas: pido información pública para saber cómo se usa la plata de todos. Solicito respuesta dentro de los términos de ley (15 días hábiles; 10 para documentos) al correo ${d.correo || '[correo]'}.

Atentamente,

${d.nombre || '[Nombre]'}
C.C. ${d.cedula || '[Cédula]'}
${d.correo || '[correo]'}`;
  }
  function letterSenado() {
    const d = petData();
    const fecha = new Intl.DateTimeFormat('es-CO', { timeZone: TZ, day:'numeric', month:'long', year:'numeric' }).format(new Date());
    return `${d.ciudad || '[Ciudad]'}, ${fecha}

Señores
MESA DIRECTIVA Y DIRECCIÓN ADMINISTRATIVA DEL SENADO DE LA REPÚBLICA
CONTRALORÍA GENERAL DE LA REPÚBLICA
DEPARTAMENTO ADMINISTRATIVO DE LA FUNCIÓN PÚBLICA
PROCURADURÍA GENERAL DE LA NACIÓN

Asunto: Derecho de petición (art. 23 C.P., Ley 1755 de 2015 y Ley 1712 de 2014) sobre la remuneración del cargo de Subsecretario General del Senado

Yo, ${d.nombre || '[Nombre]'}, identificado(a) con cédula ${d.cedula || '[Cédula]'}, solicito respetuosamente:

AL SENADO DE LA REPÚBLICA
1. Certificación de todos los pagos hechos en 2024, 2025 y 2026 al cargo de Subsecretario General, desglosados por concepto (asignación básica, prima técnica, prima de antigüedad, prima de gestión, bonificación de dirección, vacaciones y primas semestrales).
2. La norma que sustenta cada uno de esos conceptos y su forma de cálculo.
3. La lista de los 20 cargos de planta con mayor remuneración total anual en 2025, con su costo.
4. Qué efectos tiene sobre la elección del 20 de julio de 2026 la decisión del Consejo de Estado que anuló la convocatoria del 29 de mayo de 2026, y qué medidas se tomarán.

A LA CONTRALORÍA GENERAL DE LA REPÚBLICA
5. Si ha auditado los pagos de nómina del Senado en 2024–2026 y cuáles fueron los hallazgos.

A FUNCIÓN PÚBLICA
6. Si los factores salariales pagados a ese cargo corresponden al régimen vigente y qué propuestas existen para poner un tope a la remuneración total de los empleados públicos.

A LA PROCURADURÍA GENERAL DE LA NACIÓN
7. Si existe alguna actuación preventiva o disciplinaria sobre estos pagos.

La remuneración de los servidores públicos es información pública (Ley 1712 de 2014). Pido respuesta dentro de los términos de ley (15 días hábiles; 10 para documentos) al correo ${d.correo || '[correo]'}.

Atentamente,

${d.nombre || '[Nombre]'}
C.C. ${d.cedula || '[Cédula]'}
${d.correo || '[correo]'}`;
  }
  function renderLetter() {
    $('#letter').textContent = (lang === 'en' ? tr('p_letter_note') + '\n\n' : '') + letterText();
  }
  function petOk() {
    const d = petData();
    if (!d.nombre || !d.cedula || !d.ciudad || !d.correo) { $('#petMsg').textContent = tr('p_fill'); return false; }
    return true;
  }
  function recipients() { return [...document.querySelectorAll('.destchk:checked')].map(c => c.value); }
  const subject = () => CASES[pcase].subject;
  async function copyLetter() { try { await navigator.clipboard.writeText(letterText()); } catch (e) {} }

  /* ---------- PROPONER CASO ---------- */
  function proposeCase(e) {
    e.preventDefault();
    const msg = `Hola Vibras Positivas HM, propongo un caso para Parásitos del Estado:\nCargo/entidad: ${$('#pcCargo').value}\nCifra: ${$('#pcCifra').value}\nFuente: ${$('#pcFuente').value}`;
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank');
  }

  /* ---------- NAVEGACIÓN Y ANIMACIÓN ---------- */
  function observe() {
    const io = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        en.target.querySelectorAll('.fill').forEach(f => f.style.width = f.dataset.w + '%');
      }
    }), { threshold: 0.12 });
    document.querySelectorAll('.block').forEach(b => io.observe(b));
    const links = [...document.querySelectorAll('.tabs a')];
    const spy = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) links.forEach(a => {
        const on = a.getAttribute('href') === '#' + en.target.id;
        a.classList.toggle('on', on);
        if (on) { const n = a.parentElement; n.scrollTo({ left: a.offsetLeft - (n.clientWidth - a.offsetWidth) / 2, behavior: 'smooth' }); }
      });
    }), { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s) spy.observe(s); });
  }

  /* ---------- INICIO ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    wireImages();
    renderDest();
    applyLang();
    observe();
    tickMeter();
    animateCounts();
    loadNews(false);

    $('#btnRefresh').addEventListener('click', async () => {
      const b = $('#btnRefresh'); b.classList.add('spin');
      await loadNews(true); b.classList.remove('spin');
    });
    $('#btnLang').addEventListener('click', () => {
      lang = lang === 'es' ? 'en' : 'es';
      try { localStorage.setItem('pde_lang', lang); } catch (e) {}
      applyLang(); animateCounts();
    });
    $('#mySalary').addEventListener('input', calc);
    ['#pNombre', '#pCedula', '#pCiudad', '#pCorreo'].forEach(s => $(s).addEventListener('input', renderLetter));
    $('#formPet').addEventListener('submit', e => {
      e.preventDefault(); if (!petOk()) return;
      $('#petMsg').textContent = tr('p_opening');
      copyLetter();
      location.href = 'mailto:' + recipients().join(',') + '?subject=' + encodeURIComponent(subject()) + '&body=' + encodeURIComponent(letterText());
    });
    $('#btnGmail').addEventListener('click', () => {
      if (!petOk()) return;
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(recipients().join(',')) + '&su=' + encodeURIComponent(subject()) + '&body=' + encodeURIComponent(letterText()), '_blank');
    });
    $('#btnProcu').addEventListener('click', async () => {
      if (!petOk()) return;
      await copyLetter();
      $('#petMsg').textContent = tr('p_copied');
      window.open('https://www.procuraduria.gov.co/PQRSDF/Pages/default.aspx', '_blank');
    });
    $('#formCase').addEventListener('submit', proposeCase);
    function setCase(c) {
      pcase = c;
      const r = document.querySelector('input[name="pcase"][value="' + c + '"]'); if (r) r.checked = true;
      renderDest(); renderLetter();
    }
    document.querySelectorAll('input[name="pcase"]').forEach(r => r.addEventListener('change', () => setCase(r.value)));
    document.querySelectorAll('[data-case]').forEach(a => a.addEventListener('click', () => setCase(a.dataset.case)));

    // Al volver a la app, actualiza "Hoy"
    document.addEventListener('visibilitychange', () => { if (!document.hidden) loadNews(false); });

    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  });
})();
