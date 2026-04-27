/**
 * Sri Kaar Irul Kanapadai Bhadrakali Amman Temple
 * temple-main.js — Unified external script for ALL pages
 *
 * HOW TO USE:
 *   1. Remove ALL <script> blocks from your HTML files.
 *   2. Add this ONE line just before </body> on every page:
 *        <script src="temple-main.js"></script>
 *   3. Each page auto-detects which page it is and runs the right code.
 */

'use strict';

// ═══════════════════════════════════════════════════════════════
// LANGUAGE DATA  (Tamil default, 5 languages)
// ═══════════════════════════════════════════════════════════════
const LANG = {
  ta: {
    navLogo: 'ஸ்ரீ கார் இருள் கணபடை பத்ரகாளி அம்மன் திருக்கோவில்',
    navLogoClass: 'tamil-font',
    navItems: [
      { href: 'index.html',           label: 'முகப்பு' },
      { href: 'about.html',           label: 'அறிமுகம்' },
      { href: 'deities.html',         label: 'தெய்வங்கள்' },
      { href: 'gallery.html',         label: 'படங்கள்' },
      { href: 'contact.html',         label: 'தொடர்பு' },
      { href: 'contact.html#booking', label: 'முன் பதிவு', cta: true },
    ],
    trust: [
      'நம்பிக்கை பதிவு எண் : 51/2017',
      '12AA & 80G சான்றிதழ் பெற்ற ஆலயம்',
      'அனைத்து வழிபாடும் கட்டணமின்றி',
      'ஜாதி மதம் இன்றி அனைவரும் வரலாம்',
    ],
    breadHome: 'முகப்பு',
    heroTitle: 'ஆலய அறிமுகம்',
    heroSubtitle: 'அருள்மிகு ஸ்ரீ கார் இருள் கணபடை பத்ரகாளியம்மன் திருக்கோவில், மதுரை',
    heroSubClass: 'tamil-font',
    eyeAbout: 'ஆலய வரலாறு',
    titleAbout: 'அருள்மிகு ஸ்ரீ கார் இருள் கணபடை பத்ரகாளியம்மன் திருக்கோவில்',
    aboutP1: 'மதுரை திருமங்கலம் — திண்டுக்கல் நான்கு வழிச் சாலையில் ஆஸ்டின்பட்டி பிரிவு, தனக்கன்குளத்தில் அமைந்திருக்கும் இந்த திவ்ய திருக்கோவில் 2018 ஆம் ஆண்டு நிறுவப்பட்டு, 2024 ஆம் ஆண்டு மகா குடமுழுக்கத்துடன் முழுமையாக திறக்கப்பட்டது. தேவலோக சிற்ப முறைப்படி உருவாக்கப்பட்ட இந்த ஆலயத்தில் ஸ்ரீ சக்ரமே விமானமாகவும் கோபுரமாகவும் அமைந்திருக்கிறது — இது உலகில் வேறெங்கும் காண முடியாத அரிய சிறப்பு.',
    pullQuote: 'உலகில் வேறு எங்கும் தரிசிக்க முடியாத மகா காளியின் ஆதி வடிவம் இங்கு அருளாட்சி செய்கிறது.',
    aboutP2: 'ஜாதி மதம் இன்றி அனைவரும் வந்து அன்னையின் அருளை பெறலாம். அனைத்து வழிபாடும் பரிகாரங்களும் இங்கு கட்டணமின்றி நடைபெறும். இந்த ஆலயம் அரசு அங்கீகாரம் பெற்ற அறக்கட்டளையாக (பதிவு எண் 51/2017) இயங்குகிறது மற்றும் 12AA மற்றும் 80G சான்றிதழ்கள் பெற்றது.',
    aboutPClass: 'ta',
    badgeLabel: 'தொடங்கிய ஆண்டு',
    eyeQuotes: 'தெய்வீக வாக்குகள்',
    titleQuotes: 'அன்னையின் அருள்மொழிகள்',
    quotes: [
      { text: 'அன்னையை மனமார வணங்குவோர்க்கு இன்னல்கள் நீங்கும், வாழ்வில் இன்பம் பெருகும்.', src: 'ஆலய வாக்கு' },
      { text: 'ஒரு முறை அன்னையை தரிசிப்பவர்கள் திரும்பவும் வர விரும்புவார்கள் — இது அன்னையின் அருளின் சக்தி.', src: 'பக்தர் அனுபவம்' },
      { text: 'சக்தி என்பது வெறும் சக்தி மட்டுமல்ல — அது அன்பு, கருணை, நீதி ஆகியவற்றின் முழுமையான வடிவம்.', src: 'சாக்த மரபு' },
      { text: 'குலதெய்வத்தை கைவிடாதே — அது உன் வேர். வேரை பற்றியிருப்பவனே உண்மையான செல்வன்.', src: 'தமிழ் நாட்டார் ஞானம்' },
      { text: 'அன்னையின் திருவடி தாமரை நிழலில் இருப்பவர்களுக்கு மரணமும் கூட இனிமையாகும்.', src: 'பக்தி மரபு' },
      { text: 'ஜாதி மதம் இன்றி அனைவரும் வந்து அன்னையின் அருள் பெறலாம் — இதுவே இந்த ஆலயத்தின் நிலைமொழி.', src: 'ஆலய தத்துவம்' },
    ],
    eyeTimeline: 'புனித வரலாறு',
    titleTimeline: 'ஆலயத்தின் பிறப்பு மற்றும் வளர்ச்சி',
    timeline: [
  { year: '2017', icon: 'bi-patch-check', title: 'அறக்கட்டளை பதிவு', desc: 'ஆலயம் சட்டரீதியான அறக்கட்டளையாக அரசு பதிவு பெற்றது (பதிவு எண் 51/2017). 12AA மற்றும் 80G சான்றிதழ்களும் வழங்கப்பட்டன.' },
  { year: '2018', icon: 'bi-stars', title: 'ஆலயம் நிறுவப்பட்டது', desc: 'திருமங்கலம் — திண்டுக்கல் நான்கு வழிச் சாலையில் தனக்கன்குளத்தில் இந்த திவ்ய ஆலயத்தின் நிர்மாண பணிகள் தொடங்கப்பட்டன.' },
  { year: '2018–2023', icon: 'bi-hammer', title: 'கட்டுமான பணிகள்', desc: 'முக்கிய மூலஸ்தானம், சன்னதிகள், ஸ்ரீ சக்ர விமானம் மற்றும் கோபுரம் படிப்படியாக அமைக்கப்பட்டன.' },
  { year: '2024', icon: 'bi-flower1', title: 'மகா குடமுழுக்கம் — ஆலயம் திறக்கப்பட்டது', desc: '18 நம்பூதிரிகள் அதர்வன வேத முறையில் 9 யாக குண்டம் அமைக்கப்பட்டு 6 கால யாகம் வளர்த்து குடமுழுக்கு நடைபெற்றது. இறுதியாக குருதி பூஜை செய்து நிறைவு செய்யப்பட்டது. ஆயிரக்கணக்கான பக்தர்கள் கலந்து கொண்டனர்.' },
  { year: 'சிறப்பு', icon: 'bi-lightning-fill', title: 'சிவனை உருவாகும் முன்னரே உதித்த ஆதி சக்தி', desc: '64 காளிகள் ஆதார பீடமாக அமையபெற்று அதன் மேல் கார் இருள் கண படைபத்ரகாளி அன்னை உலகின் ஆதி ரூபமாய் இருக்கும் ஒரே ஆலயம். விதியை மாற்றும் வல்லமையும் எமனின் பாசகயிற்றை நிறுத்தும் வல்லமையும் உள்ள ஆலயம்.' },
  { year: 'அருள்', icon: 'bi-shield-fill', title: 'விதியை மாற்றும் அன்னையின் சக்தி', desc: 'இந்த ஆலயத்திற்கு விதி இருந்தால் மட்டுமே வர முடியும். ஏகப்பட்ட தடைகள் வரும். அதையும் மீறி வந்துவிட்டால் அவர்களின் வாழ்க்கையில் விதி மாறுகிறது — தொட்டது எல்லாம் யோகமாக அமைத்து கொடுக்கும் படை பத்ரகாளி அன்னை.' },
  { year: 'தரிசனம்', icon: 'bi-eye-fill', title: 'திருப்பரங்குன்றம் நேரடி தரிசனம்', desc: 'அன்னையின் எதிரே சிம்மம், நந்தி, நரி, யானை, முதலை, புலி போன்ற வாகனங்களும் அமையப்பெற்றுள்ளன. திருப்பரங்குன்றம் மலையை நேரடியாக பார்க்கும் படைபத்ரகாளியம்மன் இங்கு அருளாட்சி செய்கிறாள்.' },
],
    eyeDeity: 'மூலவர் மற்றும் சன்னதிகள்',
    titleDeity: 'தெய்வங்கள்',
    deityLabel: 'மூலவர் — பிரதான தெய்வம்',
    deityName: 'Padai Bhadra Kaliyamman',
    deitySub: 'அருள்மிகு ஸ்ரீ கார் இருள் கணபடை பத்ரகாளியம்மன்',
    deitySubCls: 'ta',
    deityDesc: 'உலகில் வேறு எங்கும் தரிசிக்க முடியாத அரிய ஆதி வடிவத்தில் காட்சி அளிக்கும் அன்னை மகா காளி. வைகுண்ட ஏகாதசி அன்று சொர்க்கவாசல் திறந்து மகா காளி அன்னை ஸ்ரீமன் விஷ்ணு ரூபத்தில் காட்சி கொடுக்கும் ஒரே ஆலயம் இதுவே.',
    deityDescCls: 'ta',
    sannathiIntro: 'இந்த ஆலயத்தில் மூலவருடன் பல சன்னதிகள் அருள்பாலிக்கின்றன. ஒவ்வொரு தெய்வமும் பக்தர்களின் குறிப்பிட்ட வேண்டுதல்களை நிறைவேற்றும் சக்தி வாய்ந்தவை.',
    sannathiCls: 'ta',
    deityChips: [
      { icon: 'bi-star-fill',       label: 'நவகிரக விநாயகர்' },
      { icon: 'bi-people-fill',     label: 'சப்த மாதாக்கள்' },
      { icon: 'bi-shield-fill',     label: 'உன்மத்த வைரவர்' },
      { icon: 'bi-lightning-fill',  label: 'வேலப்பர்' },
      { icon: 'bi-tree-fill',       label: 'மலையாள கருப்பர்' },
      { icon: 'bi-wind',            label: 'வன பேச்சியம்மன்' },
      { icon: 'bi-moon-stars-fill', label: 'ஜடா முனீஸ்வரன்' },
    ],
    chipCls: 'ta',
    eyePuja: 'பூசைகள் மற்றும் திருவிழாக்கள்',
    titlePuja: 'சிறப்பு பூசைகள் மற்றும் விழாக்கள்',
    pujaNote: 'அனைத்து பூசைகளும் கட்டணமின்றி நடைபெறும். பரிகார பூஜைகளுக்கு முன் அனுமதி பெற வேண்டும்.',
    pujaNoteCls: 'ta',
    pujas: [
      { icon: 'bi-moon-fill',   title: 'Pournami Puja',    subtitle: 'பௌர்ணமி பூசை',    subtitleCls: 'ta', desc: 'பௌர்ணமி நாளில் குலதெய்வம் தெரியாதவர்களுக்கு அன்னையின் அருளால் சொப்பனத்தில் குலதெய்வம் இருக்கும் திசை காண்பிக்கும் சிறப்பு பூசை.', descCls: 'ta', free: 'கட்டணமில்லை' },
      { icon: 'bi-circle',      title: 'Amavasai Puja',    subtitle: 'அமாவாசை பூசை',    subtitleCls: 'ta', desc: 'அமாவாசை நாளில் பித்ரு தர்ப்பணம் மற்றும் குல தெய்வ வழிபாடு. முன்னோர்களின் ஆசிர்வாதம் பெறும் சிறப்பு நாள்.',            descCls: 'ta', free: 'கட்டணமில்லை' },
      { icon: 'bi-sun-fill',    title: 'Aadi 18 Festival', subtitle: 'ஆடி 18 திருவிழா', subtitleCls: 'ta', desc: 'ஆடி மாதம் 18-ம் நாள் அம்மனுக்கு சிறப்பு அபிஷேகம், அலங்காரம் மற்றும் வருடாந்திர திருவிழா.',                                 descCls: 'ta', free: 'கட்டணமில்லை' },
      { icon: 'bi-stars',       title: 'Masi Sivaratri',   subtitle: 'மாசி சிவராத்திரி', subtitleCls: 'ta', desc: 'மாசி மாதம் சிவராத்திரி அன்று இரவு முழுவதும் சிறப்பு வழிபாடு, தீபாலங்காரம் மற்றும் சிறப்பு அபிஷேகம் நடைபெறும்.',        descCls: 'ta', free: 'கட்டணமில்லை' },
      { icon: 'bi-flower3',     title: 'Panguni Uthiram',  subtitle: 'பங்குனி உத்திரம்', subtitleCls: 'ta', desc: 'பங்குனி மாதம் உத்திர நட்சத்திரம் அன்று சிறப்பு திருவிழா. அன்னையை ஆராதிக்க ஏராளமான பக்தர்கள் வருகை தருவர்.',               descCls: 'ta', free: 'கட்டணமில்லை' },
      { icon: 'bi-eye-fill',    title: 'Vaikunta Ekadasi', subtitle: 'வைகுண்ட ஏகாதசி',  subtitleCls: 'ta', desc: 'சொர்க்கவாசல் திறந்து மகா காளி அன்னை ஸ்ரீமன் விஷ்ணு ரூபத்தில் காட்சி கொடுக்கும் ஒரே ஆலயம். இது இந்த கோவிலின் மிகப் பெரிய சிறப்பு.', descCls: 'ta', free: 'கட்டணமில்லை' },
    ],
    eyeUnique: 'தனிச்சிறப்புகள்',
    titleUnique: 'இந்த ஆலயம் மட்டுமே தரும் அனுபவம்',
    uniques: [
      { title: 'வைகுண்ட ஏகாதசி அன்று விஷ்ணு தரிசனம்',  titleCls: 'ta', desc: 'மகா காளி அன்னை ஸ்ரீமன் விஷ்ணு ரூபத்தில் காட்சி கொடுக்கும் ஒரே ஆலயம் — உலகில் இல்லாத அரிய அனுபவம்.',        descCls: 'ta' },
      { title: 'ஸ்ரீ சக்ர விமானம் மற்றும் கோபுரம்',      titleCls: 'ta', desc: 'ஸ்ரீ சக்ரமே விமானமாகவும் கோபுரமாகவும் அமைய பெற்ற அரிய திருக்கோவில். தேவலோக சிற்ப முறையில் அமைக்கப்பட்டது.', descCls: 'ta' },
      { title: 'தச மகா வித்யா காவல்',                     titleCls: 'ta', desc: 'தச மகா வித்யா எனும் சக்தியின் 10 அவதாரங்கள் காவலாக இருக்கும் கோவில். ஒவ்வொரு திசையிலும் தெய்வீக பாதுகாப்பு.',  descCls: 'ta' },
      { title: 'குலதெய்வம் சொப்பனத்தில் காட்டப்படும்',    titleCls: 'ta', desc: 'குலதெய்வம் தெரியாதவர்களுக்கு அன்னை, குலதெய்வம் இருக்கும் திசை மற்றும் இடத்தை சொப்பனத்தில் காண்பிக்கும்.',        descCls: 'ta' },
      { title: 'அனைத்தும் கட்டணமின்றி',                   titleCls: 'ta', desc: 'இங்கு வழிபடுவதற்கும் பரிகாரம் பெறுவதற்கும் எந்த கட்டணமும் கிடையாது. ஜாதி மதம் பாராமல் அனைவரும் வரலாம்.',        descCls: 'ta' },
      { title: 'மாந்திரீக பிரச்சனைகளுக்கு உடனடி தீர்வு', titleCls: 'ta', desc: 'மந்திரம் யந்திரம் தந்திரம் போன்ற மாந்தரீக பிரச்சனைகளுக்கும், கட்டு கோளாறுகளுக்கும் உடனடி தீர்வு கிடைக்கும்.',    descCls: 'ta' },
    ],
    ctaTitle: 'அன்னையின் அருளை நேரில் பெறுங்கள்',
    ctaDesc: 'பரிகார பூஜைகளுக்கு முன் அனுமதி பெற தொடர்பு கொள்ளுங்கள். ஜாதி மதம் பாராமல் அனைவரும் வரலாம்.',
    ctaDescCls: 'ta',
    ctaBook: '<i class="bi bi-calendar3"></i> முன் பதிவு செய்க',

    // Contact page
    formTabBooking: 'பூஜை முன்பதிவு',
    formTabMessage: 'செய்தி அனுப்பு',
    pujaOptions: ['-- பூஜை தேர்வு --','பௌர்ணமி பூஜை','அமாவாசை பூஜை','ஆடி 18 திருவிழா','மாசி சிவராத்திரி','பங்குனி உத்திரம்','வைகுண்ட ஏகாதசி','பரிகார பூஜை','பிற'],
    faqItems: [
      { q: 'ஆலயம் எத்தனை மணி நேரம் திறந்திருக்கும்?',              a: 'காலை 6 மணி முதல் இரவு 9 மணி வரை. சிறப்பு நாட்களில் நேரம் நீட்டிக்கப்படும்.' },
      { q: 'பரிகார பூஜைக்கு கட்டணம் உண்டா?',                       a: 'இல்லை. அனைத்து வழிபாடும் பரிகாரங்களும் கட்டணமின்றி நடைபெறும். முன் அனுமதி மட்டும் பெற வேண்டும்.' },
      { q: 'ஆலயம் எந்த ஜாதியினருக்கும் திறந்திருக்கிறதா?',         a: 'ஆம். ஜாதி மதம் பாராமல் அனைவரும் வரலாம். இது ஆலயத்தின் அடிப்படை கொள்கை.' },
      { q: 'எப்படி வரலாம்? ஆலய முகவரி என்ன?',                      a: 'மதுரை திருமங்கலம்–திண்டுக்கல் நான்கு வழிச் சாலை, ஆஸ்டின்பட்டி பிரிவு, தனக்கன்குளம்.' },
    ],
  },

  en: {
    navLogo: 'Sri Kaar Irul Kanapadai Bhadrakali Amman Temple',
    navLogoClass: 'latin-font',
    navItems: [
      { href: 'index.html',           label: 'Home' },
      { href: 'about.html',           label: 'About' },
      { href: 'deities.html',         label: 'Deities' },
      { href: 'gallery.html',         label: 'Gallery' },
      { href: 'contact.html',         label: 'Contact' },
      { href: 'contact.html#booking', label: 'Book Now', cta: true },
    ],
    trust: [
      'Trust Reg. No: 51/2017',
      '12AA & 80G Certified Temple',
      'All Pujas are FREE of charge',
      'All are welcome regardless of caste or religion',
    ],
    breadHome: 'Home',
    heroTitle: 'About the Temple',
    heroSubtitle: 'Sri Kaar Irul Kanapadai Bhadrakali Amman Temple, Madurai',
    heroSubClass: 'latin-font',
    eyeAbout: 'Temple History',
    titleAbout: 'Sri Kaar Irul Kanapadai Bhadrakali Amman Thirukoil',
    aboutP1: 'Nestled along the Thirumangalam–Dindigul four-lane highway at Austinpatti division, Thanakkankulam, Madurai, this sacred temple was founded in 2018 and fully consecrated in 2024 through the grand Maha Kumbhabhishekam ceremony. Built according to the revered Devaloka Shilpa tradition, the temple is architecturally and spiritually distinguished by the Sri Chakra itself forming its Vimanam and Gopuram — a sacred rarity found nowhere else in the world.',
    pullQuote: 'The primordial form of Maha Kali — a vision found nowhere else in the world — graces this sacred abode.',
    aboutP2: 'Irrespective of caste or religion, all devotees are welcome to receive the divine grace of the Mother. All worship services and parihara rituals are conducted entirely free of charge. The temple operates as a government-registered trust (Reg. No. 51/2017) and holds both 12AA and 80G certifications.',
    aboutPClass: 'en',
    badgeLabel: 'Year Founded',
    eyeQuotes: 'Sacred Sayings',
    titleQuotes: 'Words of Divine Grace',
    quotes: [
      { text: 'Those who worship the Mother with a sincere heart shall be freed from sorrow and filled with joy in life.', src: 'Temple Saying' },
      { text: 'Those who behold the Mother even once will long to return — such is the power of her divine grace.', src: "Devotee's Experience" },
      { text: 'Shakti is not merely power — she is the complete embodiment of love, compassion, and divine justice.', src: 'Shakta Tradition' },
      { text: 'Never forsake your Kula Deivam — it is your root. He who holds fast to the root is the truly wealthy one.', src: 'Tamil Folk Wisdom' },
      { text: "For those who rest in the shadow of the Mother's lotus feet, even death becomes sweet.", src: 'Bhakti Tradition' },
      { text: "Irrespective of caste or creed, all may come and receive the Mother's grace — this is the eternal motto of this temple.", src: 'Temple Philosophy' },
    ],
    eyeTimeline: 'Sacred History',
    titleTimeline: 'The Birth & Growth of the Temple',
    timeline: [
  { year: '2017', icon: 'bi-patch-check', title: 'Trust Registration — No. 51/2017', desc: 'The temple was officially registered as a legal trust (Reg. No. 51/2017). Both 12AA and 80G certifications were awarded.' },
  { year: '2018', icon: 'bi-stars', title: 'Temple Founded', desc: 'Construction began at Austinpatti division, Thanakkankulam, following the sacred Devaloka Shilpa tradition.' },
  { year: '2018–2023', icon: 'bi-hammer', title: 'Construction & Development', desc: 'The principal shrine, subsidiary sannidhis, the Sri Chakra Vimanam and Gopuram took shape progressively.' },
  { year: '2024', icon: 'bi-flower1', title: 'Grand Inauguration — Temple Fully Opens', desc: '18 Namboothiri priests conducted a 9-fire-pit Yagna following the Atharva Veda tradition, performing 6 sessions of sacred fire ritual. The Kumbhabhishekam concluded with a grand Kuruthi Puja, witnessed by thousands of devotees.' },
  { year: 'Divine', icon: 'bi-lightning-fill', title: 'Adi Shakti — Born Before Shiva Himself', desc: '64 Kalis form the sacred foundation, above whom Kaar Irul Kana Padai Bhadrakali presides in her primordial form — the only temple in the world where the Goddess manifests as the Adi Roopam of the universe. This temple holds the power to alter fate and even halt the rope of Yama, the God of Death.' },
  { year: 'Grace', icon: 'bi-shield-fill', title: 'Only the Destined May Enter', desc: 'Only those with divine destiny can reach this temple — many obstacles arise on the way. But those who overcome them and arrive will find their fate transformed. Everything they touch turns auspicious through the grace of Padai Bhadrakali Amman.' },
  { year: 'Vision', icon: 'bi-eye-fill', title: 'Direct View of Thiruparankundram', desc: 'The Goddess is flanked by divine vahanas — lion, Nandi, fox, elephant, crocodile, and tiger. Uniquely, Padai Bhadrakali Amman faces and directly beholds the sacred Thiruparankundram Hill.' },
],
    eyeDeity: 'Principal Deity & Sannidhis',
    titleDeity: 'Deities of the Temple',
    deityLabel: 'Moolavár — Principal Deity',
    deityName: 'Padai Bhadra Kaliyamman',
    deitySub: 'Sri Kaar Irul Kanapadai Bhadrakali Amman',
    deitySubCls: 'en',
    deityDesc: "Mother Maha Kali presides here in her primordial form — a divine vision found nowhere else in the world. This is the only temple where, on the sacred Vaikunta Ekadasi, the gates of heaven open and Maha Kali grants darshan in the form of Sriman Vishnu.",
    deityDescCls: 'en',
    sannathiIntro: 'Alongside the principal deity, several sannidhis grace this temple — each carrying unique spiritual power to fulfil the prayers of devotees.',
    sannathiCls: 'en',
    deityChips: [
      { icon: 'bi-star-fill',       label: 'Navagraha Vinayagar' },
      { icon: 'bi-people-fill',     label: 'Sapta Mathas' },
      { icon: 'bi-shield-fill',     label: 'Unmatta Bhairava' },
      { icon: 'bi-lightning-fill',  label: 'Velapper (Murugan)' },
      { icon: 'bi-tree-fill',       label: 'Malaiyal Karuppar' },
      { icon: 'bi-wind',            label: 'Vana Pechi Amman' },
      { icon: 'bi-moon-stars-fill', label: 'Jata Muneeswar' },
    ],
    chipCls: 'en',
    eyePuja: 'Pujas & Festivals',
    titlePuja: 'Special Pujas & Celebrations',
    pujaNote: 'All pujas are conducted entirely free of charge. Prior permission is required for parihara pujas.',
    pujaNoteCls: 'en',
    pujas: [
      { icon: 'bi-moon-fill',  title: 'Pournami Puja',    subtitle: 'Full Moon Day',      subtitleCls: 'en', desc: "A special puja for those who do not know their Kula Deivam. Through the grace of the Mother, the direction and location of the ancestral deity is revealed in a dream.", descCls: 'en', free: 'Free' },
      { icon: 'bi-circle',     title: 'Amavasai Puja',    subtitle: 'New Moon Day',       subtitleCls: 'en', desc: "Pitru Tarpana and ancestral worship on the new moon day — a sacred occasion to seek the blessings of one's forebears.",                                                 descCls: 'en', free: 'Free' },
      { icon: 'bi-sun-fill',   title: 'Aadi 18 Festival', subtitle: 'Tamil Month of Aadi',subtitleCls: 'en', desc: 'The 18th day of Aadi brings a grand annual festival with special abhishekam, decoration, and Kula Deiva worship.',                                                    descCls: 'en', free: 'Free' },
      { icon: 'bi-stars',      title: 'Masi Sivaratri',   subtitle: 'Month of Masi',      subtitleCls: 'en', desc: 'An all-night special worship on Sivaratri in Masi, featuring magnificent lamp decorations and special abhishekam.',                                                    descCls: 'en', free: 'Free' },
      { icon: 'bi-flower3',    title: 'Panguni Uthiram',  subtitle: 'Month of Panguni',   subtitleCls: 'en', desc: 'A grand festival observed on Uthira Nakshatra in Panguni. Thousands of devotees gather to worship the Mother.',                                                        descCls: 'en', free: 'Free' },
      { icon: 'bi-eye-fill',   title: 'Vaikunta Ekadasi', subtitle: "Heaven's Gate Opens",subtitleCls: 'en', desc: 'The only temple where the gates of heaven open on Vaikunta Ekadasi and Maha Kali grants darshan in the form of Sriman Vishnu.',                                       descCls: 'en', free: 'Free' },
    ],
    eyeUnique: 'What Makes Us Unique',
    titleUnique: 'Experiences Only This Temple Offers',
    uniques: [
      { title: 'Vishnu Darshan on Vaikunta Ekadasi',  titleCls: 'en', desc: "The only temple where Maha Kali Amman appears in the form of Sriman Vishnu — a divine experience found nowhere else on earth.",           descCls: 'en' },
      { title: 'Sri Chakra Vimanam & Gopuram',        titleCls: 'en', desc: 'The Sri Chakra itself forms the Vimanam and Gopuram — a sacred architectural rarity built entirely per the Devaloka Shilpa tradition.',    descCls: 'en' },
      { title: 'Dasha Maha Vidya Guardianship',       titleCls: 'en', desc: "The 10 avatars of Shakti — the Dasha Maha Vidya — stand as divine guardians, offering protection from all directions.",                    descCls: 'en' },
      { title: 'Kula Deivam Revealed in Dreams',      titleCls: 'en', desc: "For those who do not know their ancestral deity, the Mother reveals the direction and location of the Kula Deivam through a sacred dream.", descCls: 'en' },
      { title: 'All Services Completely Free',        titleCls: 'en', desc: "There is no charge for any worship, ritual, or parihara. All are welcome, irrespective of caste or religion.",                             descCls: 'en' },
      { title: 'Immediate Relief from Occult Issues', titleCls: 'en', desc: "Immediate solutions are offered for issues caused by Mantra, Yantra, Tantra, and other occult-related afflictions.",                       descCls: 'en' },
    ],
    ctaTitle: "Receive the Mother's Grace in Person",
    ctaDesc: 'Contact us for prior permission for parihara pujas. All are welcome, irrespective of caste or religion.',
    ctaDescCls: 'en',
    ctaBook: '<i class="bi bi-calendar3"></i> Book in Advance',

    formTabBooking: 'Book a Puja',
    formTabMessage: 'Send a Message',
    pujaOptions: ['-- Select Puja --','Pournami Puja','Amavasai Puja','Aadi 18 Festival','Masi Sivaratri','Panguni Uthiram','Vaikunta Ekadasi','Parihara Puja','Other'],
    faqItems: [
      { q: 'What are the temple timings?',                          a: 'Open daily from 6:00 AM to 9:00 PM. Extended hours on special festival days.' },
      { q: 'Is there any charge for parihara pujas?',               a: 'No. All worship and parihara rituals are completely free. Prior permission is required.' },
      { q: 'Is the temple open to all castes and religions?',       a: 'Yes. The temple welcomes everyone, irrespective of caste or religion.' },
      { q: 'How do I reach the temple?',                            a: 'Thirumangalam–Dindigul four-lane highway, Austinpatti division, Thanakkankulam, Madurai.' },
    ],
  },

  hi: {
    navLogo: 'श्री भद्रकाळी अम्मन मंदिर, मदुरई',
    navLogoClass: 'latin-font',
    navItems: [
      { href: 'index.html',           label: 'होम' },
      { href: 'about.html',           label: 'परिचय' },
      { href: 'deities.html',         label: 'देवता' },
      { href: 'gallery.html',         label: 'गैलरी' },
      { href: 'contact.html',         label: 'संपर्क' },
      { href: 'contact.html#booking', label: 'बुक करें', cta: true },
    ],
    trust: ['ट्रस्ट पंजीकरण: 51/2017','12AA & 80G प्रमाणित मंदिर','सभी पूजाएं निःशुल्क','जाति-धर्म से परे, सभी स्वागत योग्य हैं'],
    breadHome: 'होम',
    heroTitle: 'मंदिर परिचय',
    heroSubtitle: 'श्री कार इरुल कणपडै भद्रकाळी अम्मन मंदिर, मदुरई',
    heroSubClass: 'latin-font',
    eyeAbout: 'मंदिर का इतिहास',
    titleAbout: 'श्री कार इरुल कणपडै भद्रकाळी अम्मन मंदिर',
    aboutP1: 'मदुरई के थिरुमंगलम–दिंडिगुल चार-लेन राजमार्ग पर ऑस्टिनपट्टी डिवीजन, थनक्कन्कुलम में स्थित यह पवित्र मंदिर 2018 में स्थापित हुआ और 2024 में महा कुंभाभिषेकम के साथ पूर्णतः उद्घाटित किया गया।',
    pullQuote: 'महाकाली का आदि स्वरूप — जो विश्व में और कहीं दर्शनीय नहीं — यहाँ विराजमान है।',
    aboutP2: 'जाति-धर्म का कोई भेदभाव नहीं — सभी श्रद्धालु माता की कृपा पाने के लिए यहाँ आ सकते हैं। सभी पूजाएं और परिहार पूर्णतः निःशुल्क हैं।',
    aboutPClass: 'hi',
    badgeLabel: 'स्थापना वर्ष',
    eyeQuotes: 'दिव्य वचन', titleQuotes: 'माता की कृपा के शब्द',
    quotes: [
      { text: 'जो श्रद्धा से माता को भजते हैं, उनके दुख दूर होते हैं और जीवन में आनंद भर जाता है।', src: 'मंदिर वाणी' },
      { text: 'माता के एक बार दर्शन करने वाले पुनः आने को लालायित हो जाते हैं — यही उनकी कृपा की शक्ति है।', src: 'भक्त अनुभव' },
      { text: 'शक्ति केवल बल नहीं — वह प्रेम, करुणा और दिव्य न्याय का संपूर्ण स्वरूप है।', src: 'शाक्त परंपरा' },
      { text: 'अपने कुल देवता को कभी मत भूलो — वे तुम्हारी जड़ हैं।', src: 'लोक ज्ञान' },
      { text: 'माता के चरण-कमलों की छाया में रहने वालों के लिए मृत्यु भी मधुर हो जाती है।', src: 'भक्ति परंपरा' },
      { text: 'जाति-धर्म से परे, सभी माता की कृपा पा सकते हैं — यही इस मंदिर का अटल सिद्धांत है।', src: 'मंदिर दर्शन' },
    ],
    eyeTimeline: 'पवित्र इतिहास', titleTimeline: 'मंदिर की स्थापना और विकास',
    timeline: [
  { year: '2017', icon: 'bi-patch-check', title: 'ट्रस्ट पंजीकरण', desc: 'मंदिर को सरकारी ट्रस्ट के रूप में पंजीकृत किया गया (क्र. 51/2017)। 12AA व 80G प्रमाणपत्र प्राप्त हुए।' },
  { year: '2018', icon: 'bi-stars', title: 'मंदिर की स्थापना', desc: 'थनक्कन्कुलम में देवलोक शिल्प परंपरा के अनुसार निर्माण कार्य आरंभ हुआ।' },
  { year: '2018–2023', icon: 'bi-hammer', title: 'निर्माण एवं विकास', desc: 'मुख्य मंदिर, उपसन्निधियाँ, श्री चक्र विमान और गोपुरम चरणबद्ध रूप से निर्मित हुए।' },
  { year: '2024', icon: 'bi-flower1', title: 'महा कुंभाभिषेकम — भव्य उद्घाटन', desc: '18 नम्बूदिरि पुजारियों ने अथर्ववेद विधि से 9 यज्ञकुंड स्थापित कर 6 काल यज्ञ किया। अंत में कुरुति पूजा के साथ कुंभाभिषेकम सम्पन्न हुआ। हजारों श्रद्धालु उपस्थित रहे।' },
  { year: 'दिव्य', icon: 'bi-lightning-fill', title: 'शिव से पहले प्रकट हुईं आदि शक्ति', desc: '64 काली देवियाँ आधार पीठ के रूप में विराजमान हैं, उनके ऊपर कार इरुल कणपडै भद्रकाळी अम्मन विश्व की आदि रूप में विराजती हैं — यह एकमात्र ऐसा मंदिर है। इस मंदिर में भाग्य बदलने और यमराज की पाश-रस्सी रोकने की शक्ति है।' },
  { year: 'कृपा', icon: 'bi-shield-fill', title: 'भाग्य से ही यहाँ आना संभव', desc: 'इस मंदिर तक केवल वही पहुँच सकते हैं जिनका भाग्य हो। रास्ते में अनेक बाधाएं आती हैं। लेकिन जो उन्हें पार कर आ जाते हैं, उनका जीवन बदल जाता है — हर कार्य में सफलता और योग मिलता है।' },
  { year: 'दर्शन', icon: 'bi-eye-fill', title: 'तिरुपरंकुंद्रम का सीधा दर्शन', desc: 'अम्मन के समक्ष सिंह, नंदी, लोमड़ी, हाथी, मगरमच्छ, बाघ आदि वाहन विराजमान हैं। पडैभद्रकाळी अम्मन सीधे तिरुपरंकुंद्रम पर्वत की ओर मुख किए हुई हैं।' },
],
    eyeDeity: 'मुख्य देवता एवं सन्निधियाँ', titleDeity: 'मंदिर के देवता',
    deityLabel: 'मूलवर — प्रधान देवता', deityName: 'Padai Bhadra Kaliyamman',
    deitySub: 'श्री कार इरुल कणपडै भद्रकाळी अम्मन', deitySubCls: 'hi',
    deityDesc: 'माँ महाकाली यहाँ अपने आदि स्वरूप में विराजमान हैं। यह एकमात्र मंदिर है जहाँ वैकुंठ एकादशी पर महाकाली श्रीमन विष्णु के रूप में दर्शन देती हैं।',
    deityDescCls: 'hi',
    sannathiIntro: 'मुख्य देवता के साथ-साथ कई सन्निधियाँ इस मंदिर में विराजमान हैं।', sannathiCls: 'hi',
    deityChips: [
      { icon: 'bi-star-fill',       label: 'नवग्रह विनायगर' },
      { icon: 'bi-people-fill',     label: 'सप्त माताएं' },
      { icon: 'bi-shield-fill',     label: 'उन्मत्त भैरव' },
      { icon: 'bi-lightning-fill',  label: 'वेलप्पर (मुरुगन)' },
      { icon: 'bi-tree-fill',       label: 'मलैयाल करुप्पर' },
      { icon: 'bi-wind',            label: 'वन पेच्चि अम्मन' },
      { icon: 'bi-moon-stars-fill', label: 'जटा मुनीश्वर' },
    ],
    chipCls: 'hi',
    eyePuja: 'पूजाएं एवं उत्सव', titlePuja: 'विशेष पूजाएं एवं उत्सव',
    pujaNote: 'सभी पूजाएं पूर्णतः निःशुल्क हैं। परिहार पूजाओं के लिए पूर्व अनुमति आवश्यक है।', pujaNoteCls: 'hi',
    pujas: [
      { icon: 'bi-moon-fill',  title: 'Pournami Puja',    subtitle: 'पूर्णिमा पूजा',  subtitleCls: 'hi', desc: 'जो लोग अपने कुलदेवता नहीं जानते — माता की कृपा से स्वप्न में कुलदेवता की दिशा प्रकट होती है।', descCls: 'hi', free: 'निःशुल्क' },
      { icon: 'bi-circle',     title: 'Amavasai Puja',    subtitle: 'अमावस्या पूजा', subtitleCls: 'hi', desc: 'अमावस्या के दिन पितृ तर्पण और कुलदेव पूजा।',                                                        descCls: 'hi', free: 'निःशुल्क' },
      { icon: 'bi-sun-fill',   title: 'Aadi 18 Festival', subtitle: 'आदि 18 उत्सव',  subtitleCls: 'hi', desc: 'आदि माह के 18वें दिन देवी का विशेष अभिषेक, अलंकार और वार्षिक उत्सव।',                              descCls: 'hi', free: 'निःशुल्क' },
      { icon: 'bi-stars',      title: 'Masi Sivaratri',   subtitle: 'मासी शिवरात्रि',subtitleCls: 'hi', desc: 'मासी माह की शिवरात्रि पर रात भर विशेष पूजा, दीपालंकार और अभिषेक।',                                  descCls: 'hi', free: 'निःशुल्क' },
      { icon: 'bi-flower3',    title: 'Panguni Uthiram',  subtitle: 'पंगुनि उत्तिरम',subtitleCls: 'hi', desc: 'पंगुनि माह के उत्तिर नक्षत्र पर भव्य उत्सव।',                                                         descCls: 'hi', free: 'निःशुल्क' },
      { icon: 'bi-eye-fill',   title: 'Vaikunta Ekadasi', subtitle: 'वैकुंठ एकादशी', subtitleCls: 'hi', desc: 'एकमात्र मंदिर जहाँ वैकुंठ एकादशी पर महाकाली श्रीमन विष्णु रूप में दर्शन देती हैं।',               descCls: 'hi', free: 'निःशुल्क' },
    ],
    eyeUnique: 'विशेषताएं', titleUnique: 'केवल इस मंदिर का अनुभव',
    uniques: [
      { title: 'वैकुंठ एकादशी पर विष्णु दर्शन', titleCls: 'en', desc: 'एकमात्र मंदिर जहाँ महाकाली श्रीमन विष्णु रूप में दर्शन देती हैं।',           descCls: 'hi' },
      { title: 'श्री चक्र विमान एवं गोपुरम',    titleCls: 'en', desc: 'श्री चक्र स्वयं विमान और गोपुरम के रूप में — दुर्लभ देवलोक शिल्प मंदिर।',    descCls: 'hi' },
      { title: 'दश महाविद्या की रक्षा',          titleCls: 'en', desc: 'शक्ति के 10 अवतार दश महाविद्या इस मंदिर के रक्षक हैं।',                        descCls: 'hi' },
      { title: 'स्वप्न में कुलदेवता प्रकटीकरण', titleCls: 'en', desc: 'माता स्वप्न में कुलदेवता का स्थान और दिशा दिखाती हैं।',                         descCls: 'hi' },
      { title: 'सभी सेवाएं पूर्णतः निःशुल्क',   titleCls: 'en', desc: 'पूजा हो या परिहार — कोई शुल्क नहीं।',                                            descCls: 'hi' },
      { title: 'तांत्रिक समस्याओं का समाधान',   titleCls: 'en', desc: 'मंत्र, यंत्र, तंत्र से जुड़ी समस्याओं का यहाँ तत्काल निवारण होता है।',          descCls: 'hi' },
    ],
    ctaTitle: 'माता का आशीर्वाद प्रत्यक्ष पाएं',
    ctaDesc: 'परिहार पूजाओं के लिए संपर्क करें। जाति-धर्म का कोई भेद नहीं।', ctaDescCls: 'hi',
    ctaBook: '<i class="bi bi-calendar3"></i> अग्रिम बुकिंग',
    formTabBooking: 'पूजा बुकिंग', formTabMessage: 'संदेश भेजें',
    pujaOptions: ['-- पूजा चुनें --','पूर्णिमा पूजा','अमावस्या पूजा','आदि 18 उत्सव','मासी शिवरात्रि','पंगुनि उत्तिरम','वैकुंठ एकादशी','परिहार पूजा','अन्य'],
    faqItems: [
      { q: 'मंदिर के दर्शन समय क्या हैं?',           a: 'सुबह 6 बजे से रात 9 बजे तक। विशेष अवसरों पर समय बढ़ाया जाता है।' },
      { q: 'परिहार पूजा के लिए शुल्क है?',            a: 'नहीं। सभी पूजाएं निःशुल्क हैं। केवल पूर्व अनुमति आवश्यक है।' },
      { q: 'क्या सभी जाति-धर्म के लोग आ सकते हैं?',  a: 'हाँ। बिना किसी भेदभाव के सभी स्वागत हैं।' },
      { q: 'मंदिर कैसे पहुँचें?',                     a: 'थिरुमंगलम–दिंडिगुल चार-लेन हाईवे, ऑस्टिनपट्टी, थनक्कन्कुलम, मदुरई।' },
    ],
  },

  te: {
    navLogo: 'శ్రీ భద్రకాళి అమ్మన్ ఆలయం, మదురై',
    navLogoClass: 'latin-font',
    navItems: [
      { href: 'index.html',           label: 'హోమ్' },
      { href: 'about.html',           label: 'పరిచయం' },
      { href: 'deities.html',         label: 'దేవతలు' },
      { href: 'gallery.html',         label: 'గ్యాలరీ' },
      { href: 'contact.html',         label: 'సంప్రదించు' },
      { href: 'contact.html#booking', label: 'బుక్ చేయండి', cta: true },
    ],
    trust: ['ట్రస్ట్ రెజి. నం: 51/2017','12AA & 80G ధృవీకృత ఆలయం','అన్ని పూజలు ఉచితం','కులమతభేదం లేకుండా అందరూ స్వాగతం'],
    breadHome: 'హోమ్',
    heroTitle: 'ఆలయ పరిచయం',
    heroSubtitle: 'శ్రీ కార్ ఇరుల్ కణపడై భద్రకాళి అమ్మన్ ఆలయం, మదురై',
    heroSubClass: 'latin-font',
    eyeAbout: 'ఆలయ చరిత్ర', titleAbout: 'శ్రీ కార్ ఇరుల్ కణపడై భద్రకాళి అమ్మన్ ఆలయం',
    aboutP1: 'మదురైలోని థిరుమంగలం–దిండిగల్ నాలుగు-లేన్ హైవేపై ఆస్టిన్‌పట్టి డివిజన్, థనక్కన్‌కులంలో ఉన్న ఈ పవిత్ర ఆలయం 2018లో స్థాపించబడి, 2024లో మహా కుంభాభిషేకంతో పూర్తిగా ప్రారంభించబడింది.',
    pullQuote: 'మహాకాళి యొక్క ఆది స్వరూపం — ప్రపంచంలో మరెక్కడా దర్శించలేని దివ్య రూపం — ఇక్కడ కొలువై ఉంది.',
    aboutP2: 'కులమతభేదం లేకుండా అందరూ అమ్మ అనుగ్రహం పొందవచ్చు. అన్ని పూజలు పూర్తిగా ఉచితంగా జరుగుతాయి.',
    aboutPClass: 'te', badgeLabel: 'స్థాపన సంవత్సరం',
    eyeQuotes: 'దివ్య వాక్కులు', titleQuotes: 'అమ్మ అనుగ్రహ పలుకులు',
    quotes: [
      { text: 'హృదయపూర్వకంగా అమ్మను పూజించేవారి కష్టాలు తొలగిపోయి జీవితంలో ఆనందం నిండుతుంది.', src: 'ఆలయ వాక్కు' },
      { text: 'ఒక్కసారి అమ్మను దర్శించినవారు మళ్ళీ రావాలని ఆరాటపడతారు — అదే ఆమె అనుగ్రహ శక్తి.', src: 'భక్తుల అనుభవం' },
      { text: 'శక్తి కేవలం బలం మాత్రమే కాదు — ఆమె ప్రేమ, కరుణ, దివ్య న్యాయం యొక్క సంపూర్ణ స్వరూపం.', src: 'శాక్త సంప్రదాయం' },
      { text: 'మీ కులదేవతను ఎప్పుడూ మరవకండి — అది మీ మూలం.', src: 'జానపద జ్ఞానం' },
      { text: 'అమ్మ చరణ కమలాల నీడలో ఉన్నవారికి మృత్యువు కూడా మధురమవుతుంది.', src: 'భక్తి సంప్రదాయం' },
      { text: 'కులమతభేదం లేకుండా అందరూ అమ్మ అనుగ్రహం పొందవచ్చు — ఇదే ఈ ఆలయం యొక్క శాశ్వత సూత్రం.', src: 'ఆలయ తత్వం' },
    ],
    eyeTimeline: 'పవిత్ర చరిత్ర', titleTimeline: 'ఆలయ జనన వికాసం',
    timeline: [
  { year: '2017', icon: 'bi-patch-check', title: 'ట్రస్ట్ నమోదు', desc: 'ఆలయం అధికారికంగా ప్రభుత్వ ట్రస్ట్‌గా నమోదైంది (రెజి. నం. 51/2017).' },
  { year: '2018', icon: 'bi-stars', title: 'ఆలయ స్థాపన', desc: 'థనక్కన్‌కులంలో దేవలోక శిల్ప సంప్రదాయం ప్రకారం నిర్మాణం ప్రారంభమైంది.' },
  { year: '2018–2023', icon: 'bi-hammer', title: 'నిర్మాణం & అభివృద్ధి', desc: 'ప్రధాన గర్భగుడి, ఉప సన్నిధులు, శ్రీ చక్ర విమానం, గోపురం నిర్మించబడ్డాయి.' },
  { year: '2024', icon: 'bi-flower1', title: 'మహా కుంభాభిషేకం — భవ్య ప్రారంభం', desc: '18 మంది నంబూద్రి పూజారులు అథర్వ వేద విధానంలో 9 యాగకుండాలు స్థాపించి 6 కాల యాగం చేశారు. చివరగా కురుతి పూజతో కుంభాభిషేకం పూర్తయింది. వేలాది భక్తులు హాజరయ్యారు.' },
  { year: 'దివ్యం', icon: 'bi-lightning-fill', title: 'శివుడికి ముందే ఆవిర్భవించిన ఆది శక్తి', desc: '64 కాళీ దేవతలు ఆధార పీఠంగా ఉండి వారిపై కార్ ఇరుల్ కణపడై భద్రకాళి అమ్మన్ విశ్వ ఆది రూపంగా కొలువై ఉన్న ఏకైక ఆలయం. విధిని మార్చే శక్తి మరియు యముడి పాశాన్ని ఆపే శక్తి ఉన్న ఆలయం.' },
  { year: 'అనుగ్రహం', icon: 'bi-shield-fill', title: 'విధి ఉంటేనే ఇక్కడికి రావడం సాధ్యం', desc: 'ఈ ఆలయానికి విధి ఉన్నవారు మాత్రమే రాగలరు. దారిలో అనేక అడ్డంకులు వస్తాయి. వాటన్నింటినీ దాటి వచ్చినవారి జీవితం మారుతుంది — తాకిన ప్రతిదీ యోగంగా మారుస్తుంది పడై భద్రకాళి అమ్మన్.' },
  { year: 'దర్శనం', icon: 'bi-eye-fill', title: 'తిరుపరంకుండ్రం నేరుగా దర్శనం', desc: 'అమ్మ ముందు సింహం, నంది, నక్క, ఏనుగు, మొసలి, పులి వంటి వాహనాలు అమర్చబడ్డాయి. పడై భద్రకాళి అమ్మన్ నేరుగా తిరుపరంకుండ్రం కొండను దర్శిస్తూ ఉంటుంది.' },
],
    eyeDeity: 'ప్రధాన దేవత & సన్నిధులు', titleDeity: 'ఆలయంలోని దేవతలు',
    deityLabel: 'మూలవర్ — ప్రధాన దేవత', deityName: 'Padai Bhadra Kaliyamman',
    deitySub: 'శ్రీ కార్ ఇరుల్ కణపడై భద్రకాళి అమ్మన్', deitySubCls: 'te',
    deityDesc: 'అమ్మ మహాకాళి ఇక్కడ తన ఆది స్వరూపంలో కొలువై ఉంది. వైకుంఠ ఏకాదశి నాడు మహాకాళి శ్రీమన్ విష్ణు రూపంలో దర్శనమిచ్చే ఏకైక ఆలయం.',
    deityDescCls: 'te',
    sannathiIntro: 'ప్రధాన దేవతతో పాటు అనేక సన్నిధులు ఈ ఆలయంలో వెలసి ఉన్నాయి.', sannathiCls: 'te',
    deityChips: [
      { icon: 'bi-star-fill',       label: 'నవగ్రహ వినాయగర్' },
      { icon: 'bi-people-fill',     label: 'సప్త మాతలు' },
      { icon: 'bi-shield-fill',     label: 'ఉన్మత్త భైరవుడు' },
      { icon: 'bi-lightning-fill',  label: 'వేలప్పర్ (మురుగన్)' },
      { icon: 'bi-tree-fill',       label: 'మలయాళ కరుప్పర్' },
      { icon: 'bi-wind',            label: 'వన పేచ్చి అమ్మన్' },
      { icon: 'bi-moon-stars-fill', label: 'జటా మునీశ్వర్' },
    ],
    chipCls: 'te',
    eyePuja: 'పూజలు & పండుగలు', titlePuja: 'ప్రత్యేక పూజలు & ఉత్సవాలు',
    pujaNote: 'అన్ని పూజలు పూర్తిగా ఉచితంగా నిర్వహించబడతాయి.', pujaNoteCls: 'te',
    pujas: [
      { icon: 'bi-moon-fill',  title: 'Pournami Puja',    subtitle: 'పౌర్ణమి పూజ', subtitleCls: 'te', desc: 'కులదేవత తెలియనివారికి అమ్మ అనుగ్రహంతో స్వప్నంలో కులదేవత దిశ తెలియజేసే ప్రత్యేక పూజ.', descCls: 'te', free: 'ఉచితం' },
      { icon: 'bi-circle',     title: 'Amavasai Puja',    subtitle: 'అమావాస్య పూజ',subtitleCls: 'te', desc: 'అమావాస్య నాడు పితృ తర్పణం మరియు కుల దేవతా పూజ.',                                              descCls: 'te', free: 'ఉచితం' },
      { icon: 'bi-sun-fill',   title: 'Aadi 18 Festival', subtitle: 'ఆది 18 ఉత్సవం',subtitleCls: 'te', desc: 'ఆది మాసం 18వ రోజు అమ్మకు ప్రత్యేక అభిషేకం మరియు వార్షిక ఉత్సవం.',                             descCls: 'te', free: 'ఉచితం' },
      { icon: 'bi-stars',      title: 'Masi Sivaratri',   subtitle: 'మాసి శివరాత్రి',subtitleCls: 'te', desc: 'మాసి మాసంలో శివరాత్రి నాడు రాత్రంతా ప్రత్యేక పూజ, దీపాలంకారం.',                               descCls: 'te', free: 'ఉచితం' },
      { icon: 'bi-flower3',    title: 'Panguni Uthiram',  subtitle: 'పంగుని ఉత్తిరం',subtitleCls: 'te', desc: 'పంగుని మాసంలో ఉత్తిర నక్షత్రం నాడు భవ్య ఉత్సవం.',                                              descCls: 'te', free: 'ఉచితం' },
      { icon: 'bi-eye-fill',   title: 'Vaikunta Ekadasi', subtitle: 'వైకుంఠ ఏకాదశి', subtitleCls: 'te', desc: 'వైకుంఠ ఏకాదశి నాడు మహాకాళి శ్రీమన్ విష్ణు రూపంలో దర్శనమిచ్చే ఏకైక ఆలయం.',                  descCls: 'te', free: 'ఉచితం' },
    ],
    eyeUnique: 'విశేషాలు', titleUnique: 'ఈ ఆలయం మాత్రమే ఇచ్చే అనుభవం',
    uniques: [
      { title: 'వైకుంఠ ఏకాదశి నాడు విష్ణు దర్శనం', titleCls: 'en', desc: 'ప్రపంచంలో ఎక్కడా లేని అనుభవం.', descCls: 'te' },
      { title: 'శ్రీ చక్ర విమానం & గోపురం',         titleCls: 'en', desc: 'దేవలోక శిల్ప సంప్రదాయంలో నిర్మించిన అరుదైన ఆలయం.', descCls: 'te' },
      { title: 'దశ మహావిద్య రక్షణ',                 titleCls: 'en', desc: 'అన్ని దిశలలో దివ్య రక్షణ.', descCls: 'te' },
      { title: 'స్వప్నంలో కులదేవత వెల్లడి',          titleCls: 'en', desc: 'అమ్మ స్వప్నంలో కులదేవత స్థానం మరియు దిశ చూపిస్తుంది.', descCls: 'te' },
      { title: 'అన్నీ పూర్తిగా ఉచితం',               titleCls: 'en', desc: 'ఎటువంటి రుసుము లేదు. కులమతభేదం లేకుండా అందరూ రావచ్చు.', descCls: 'te' },
      { title: 'మాంత్రిక సమస్యలకు తక్షణ పరిష్కారం', titleCls: 'en', desc: 'మంత్ర, యంత్ర, తంత్రంతో కూడిన సమస్యలకు తక్షణ పరిష్కారం.', descCls: 'te' },
    ],
    ctaTitle: 'అమ్మ అనుగ్రహాన్ని స్వయంగా పొందండి',
    ctaDesc: 'పరిహార పూజలకు సంప్రదించండి. కులమతభేదం లేకుండా అందరూ రావచ్చు.', ctaDescCls: 'te',
    ctaBook: '<i class="bi bi-calendar3"></i> ముందస్తు నమోదు',
    formTabBooking: 'పూజ బుకింగ్', formTabMessage: 'సందేశం పంపండి',
    pujaOptions: ['-- పూజ ఎంచుకోండి --','పౌర్ణమి పూజ','అమావాస్య పూజ','ఆది 18 ఉత్సవం','మాసి శివరాత్రి','పంగుని ఉత్తిరం','వైకుంఠ ఏకాదశి','పరిహార పూజ','ఇతర'],
    faqItems: [
      { q: 'ఆలయ సమయాలు ఏమిటి?',                              a: 'ఉదయం 6 గంటల నుండి రాత్రి 9 గంటల వరకు.' },
      { q: 'పరిహార పూజకు రుసుము ఉంటుందా?',                    a: 'లేదు. అన్నీ ఉచితం. ముందస్తు అనుమతి మాత్రమే అవసరం.' },
      { q: 'అన్ని కులాల వారికీ ఆలయం తెరిచి ఉంటుందా?',        a: 'అవును. కులమతభేదం లేకుండా అందరూ రావచ్చు.' },
      { q: 'ఆలయానికి ఎలా చేరుకోవాలి?',                        a: 'థిరుమంగలం–దిండిగల్ నాలుగు-లేన్ హైవే, ఆస్టిన్‌పట్టి, థనక్కన్‌కులం, మదురై.' },
    ],
  },

  ml: {
    navLogo: 'ശ്രീ ഭദ്രകാളി അമ്മൻ ക്ഷേത്രം, മധുര',
    navLogoClass: 'latin-font',
    navItems: [
      { href: 'index.html',           label: 'ഹോം' },
      { href: 'about.html',           label: 'പരിചയം' },
      { href: 'deities.html',         label: 'ദേവതകൾ' },
      { href: 'gallery.html',         label: 'ഗ്യാലറി' },
      { href: 'contact.html',         label: 'ബന്ധപ്പെടുക' },
      { href: 'contact.html#booking', label: 'ബുക്ക് ചെയ്യുക', cta: true },
    ],
    trust: ['ട്രസ്റ്റ് രജി. നം: 51/2017','12AA & 80G സർട്ടിഫൈഡ് ക്ഷേത്രം','എല്ലാ പൂജകളും സൗജന്യം','ജാതിമത ഭേദമില്ലാതെ എല്ലാവരും സ്വാഗതം'],
    breadHome: 'ഹോം',
    heroTitle: 'ക്ഷേത്ര പരിചയം',
    heroSubtitle: 'ശ്രീ കാർ ഇരുൾ കണപടൈ ഭദ്രകാളി അമ്മൻ ക്ഷേത്രം, മധുര',
    heroSubClass: 'latin-font',
    eyeAbout: 'ക്ഷേത്ര ചരിത്രം', titleAbout: 'ശ്രീ കാർ ഇരുൾ കണപടൈ ഭദ്രകാളി അമ്മൻ ക്ഷേത്രം',
    aboutP1: 'മധുരയിലെ തിരുമംഗലം–ദിണ്ടിക്കൽ നാലുവരി പാതയിൽ ഓസ്റ്റിൻപട്ടി ഡിവിഷൻ, തനക്കൻകുളത്ത് സ്ഥിതിചെയ്യുന്ന ഈ ദിവ്യ ക്ഷേത്രം 2018-ൽ സ്ഥാപിക്കപ്പെട്ട്, 2024-ൽ മഹാ കുംഭാഭിഷേകത്തോടെ പൂർണ്ണമായി ഉദ്ഘാടനം ചെയ്തു.',
    pullQuote: 'മഹാകാളിയുടെ ആദി സ്വരൂപം — ലോകത്ത് മറ്റെങ്ങും ദർശിക്കാനാകാത്ത ദിവ്യ ദർശനം — ഇവിടെ കുടികൊള്ളുന്നു.',
    aboutP2: 'ജാതിമത ഭേദമില്ലാതെ ഏവർക്കും അമ്മയുടെ അനുഗ്രഹം ലഭിക്കാൻ വരാം. എല്ലാ ആരാധനകളും പൂർണ്ണ സൗജന്യമായി നടത്തപ്പെടുന്നു.',
    aboutPClass: 'ml', badgeLabel: 'സ്ഥാപന വർഷം',
    eyeQuotes: 'ദിവ്യ വചനങ്ങൾ', titleQuotes: 'അമ്മയുടെ അനുഗ്രഹ വചനങ്ങൾ',
    quotes: [
      { text: 'അമ്മയെ ഹൃദയപൂർവ്വം ഭജിക്കുന്നവരുടെ ദുഃഖങ്ങൾ നീങ്ങി ജീവിതം ആനന്ദമയമാകും.', src: 'ക്ഷേത്ര വചനം' },
      { text: 'ഒരു തവണ അമ്മയെ ദർശിക്കുന്നവർ വീണ്ടും വരണമെന്ന് ആഗ്രഹിക്കും — അതാണ് അനുഗ്രഹ ശക്തി.', src: 'ഭക്ത അനുഭവം' },
      { text: 'ശക്തി കേവലം ബലം മാത്രമല്ല — അത് സ്നേഹം, കരുണ, ദിവ്യ നീതി എന്നിവയുടെ സ്വരൂപം.', src: 'ശാക്ത പാരമ്പര്യം' },
      { text: 'കുലദേവതയെ ഒരിക്കലും മറക്കരുത് — അത് നിങ്ങളുടെ വേര്.', src: 'ജനകീയ ജ്ഞാനം' },
      { text: 'അമ്മ ചരണ-കമലങ്ങളുടെ നിഴലിൽ ഇരിക്കുന്നവർക്ക് മൃത്യുപോലും മധുരമാകും.', src: 'ഭക്തി പാരമ്പര്യം' },
      { text: 'ജാതിമത ഭേദമില്ലാതെ ഏവർക്കും അമ്മ അനുഗ്രഹം ലഭിക്കും — ഇതാണ് ഈ ക്ഷേത്രത്തിന്റെ ആദർശം.', src: 'ക്ഷേത്ര തത്ത്വം' },
    ],
    eyeTimeline: 'പവിത്ര ചരിത്രം', titleTimeline: 'ക്ഷേത്രത്തിന്റെ ജനനവും വളർച്ചയും',
    timeline: [
  { year: '2017', icon: 'bi-patch-check', title: 'ട്രസ്റ്റ് രജിസ്ട്രേഷൻ', desc: 'ക്ഷേത്രം ഔദ്യോഗിക ട്രസ്റ്റായി (രജി. നം. 51/2017) രജിസ്റ്റർ ചെയ്യപ്പെട്ടു.' },
  { year: '2018', icon: 'bi-stars', title: 'ക്ഷേത്ര സ്ഥാപനം', desc: 'തനക്കൻകുളത്ത് ദേവലോക ശില്പ പാരമ്പര്യം അനുസരിച്ച് നിർമ്മാണം ആരംഭിച്ചു.' },
  { year: '2018–2023', icon: 'bi-hammer', title: 'നിർമ്മാണവും വികസനവും', desc: 'പ്രധാന ഗർഭഗൃഹം, ഉപ-ശ്രീകോവിലുകൾ, ശ്രീ ചക്ര വിമാനം, ഗോപുരം പൂർത്തിയായി.' },
  { year: '2024', icon: 'bi-flower1', title: 'മഹാ കുംഭാഭിഷേകം — ഭവ്യ ഉദ്ഘാടനം', desc: '18 നമ്പൂതിരിമാർ അഥർവ വേദ ക്രമത്തിൽ 9 യജ്ഞകുണ്ഡങ്ങൾ സ്ഥാപിച്ച് 6 കാല യജ്ഞം നടത്തി. അവസാനം കുരുതി പൂജയോടെ കുംഭാഭിഷേകം സമ്പൂർണ്ണമായി. ആയിരക്കണക്കിന് ഭക്തർ പങ്കെടുത്തു.' },
  { year: 'ദിവ്യം', icon: 'bi-lightning-fill', title: 'ശിവനു മുൻപേ ഉദിച്ച ആദി ശക്തി', desc: '64 കാളി ദേവതകൾ ആധാര പീഠമായി, അതിനു മേൽ കാർ ഇരുൾ കണ പടൈ ഭദ്രകാളി അമ്മൻ പ്രപഞ്ചത്തിന്റെ ആദി രൂപമായി കുടിക്കൊള്ളുന്ന ഏകൈക ക്ഷേത്രം. വിധി മാറ്റാനും യമന്റെ പാശം നിർത്താനും ശേഷിയുള്ള ക്ഷേത്രം.' },
  { year: 'അനുഗ്രഹം', icon: 'bi-shield-fill', title: 'വിധിയുള്ളവർക്കു മാത്രം വരാനാകും', desc: 'ഈ ക്ഷേത്രത്തിലേക്ക് വിധിയുള്ളവർക്കു മാത്രമേ എത്താൻ കഴിയൂ. വഴിയിൽ അനേകം തടസ്സങ്ങൾ വരും. എന്നാൽ അതെല്ലാം മറികടന്ന് വന്നവരുടെ ജീവിതം മാറും — തൊടുന്നതെല്ലാം യോഗമായി ഒരുക്കിത്തരും പടൈ ഭദ്രകാളി അമ്മൻ.' },
  { year: 'ദർശനം', icon: 'bi-eye-fill', title: 'തിരുപ്പരംകുന്ദ്രം നേരിട്ടു കാണും', desc: 'അമ്മന്റെ മുൻപിൽ സിംഹം, നന്ദി, കുറുക്കൻ, ആന, മുതല, കടുവ തുടങ്ങിയ വാഹനങ്ങൾ കുടിക്കൊള്ളുന്നു. പടൈ ഭദ്രകാളി അമ്മൻ നേരിട്ട് തിരുപ്പരംകുന്ദ്രം മലയിലേക്കു ദർശനം ചെയ്യുന്നു.' },
],
    eyeDeity: 'പ്രധാന ദേവതയും ശ്രീകോവിലുകളും', titleDeity: 'ക്ഷേത്രത്തിലെ ദേവതകൾ',
    deityLabel: 'മൂലവർ — പ്രധാന ദേവത', deityName: 'Padai Bhadra Kaliyamman',
    deitySub: 'ശ്രീ കാർ ഇരുൾ കണപടൈ ഭദ്രകാളി അമ്മൻ', deitySubCls: 'ml',
    deityDesc: 'അമ്മ മഹാകാളി ഇവിടെ ആദി സ്വരൂപത്തിൽ കുടികൊള്ളുന്നു. വൈകുണ്ഠ ഏകാദശിയിൽ മഹാകാളി ശ്രീമൻ വിഷ്ണു രൂപത്തിൽ ദർശനം നൽകുന്ന ഏകൈക ക്ഷേത്രം.',
    deityDescCls: 'ml',
    sannathiIntro: 'പ്രധാന ദേവതയ്‌ക്കൊപ്പം നിരവധി ശ്രീകോവിലുകൾ ഈ ക്ഷേത്രത്തിൽ ഉണ്ട്.', sannathiCls: 'ml',
    deityChips: [
      { icon: 'bi-star-fill',       label: 'നവഗ്രഹ വിനായഗർ' },
      { icon: 'bi-people-fill',     label: 'സപ്ത മാതൃക്കൾ' },
      { icon: 'bi-shield-fill',     label: 'ഉന്മത്ത ഭൈരവൻ' },
      { icon: 'bi-lightning-fill',  label: 'വേലപ്പർ (മുരുഗൻ)' },
      { icon: 'bi-tree-fill',       label: 'മലയാള കരുപ്പർ' },
      { icon: 'bi-wind',            label: 'വന പേച്ചി അമ്മൻ' },
      { icon: 'bi-moon-stars-fill', label: 'ജടാ മുനീശ്വർ' },
    ],
    chipCls: 'ml',
    eyePuja: 'പൂജകളും ഉത്സവങ്ങളും', titlePuja: 'പ്രത്യേക പൂജകളും ആഘോഷങ്ങളും',
    pujaNote: 'എല്ലാ പൂജകളും പൂർണ്ണ സൗജന്യം. പരിഹാര പൂജകൾക്ക് മുൻ അനുമതി ആവശ്യം.', pujaNoteCls: 'ml',
    pujas: [
      { icon: 'bi-moon-fill',  title: 'Pournami Puja',    subtitle: 'പൗർണ്ണമി പൂജ',  subtitleCls: 'ml', desc: 'കുലദേവത അറിയാത്തവർക്ക് അമ്മ അനുഗ്രഹത്തിൽ സ്വപ്നത്തിൽ കുലദേവതയുടെ ദിശ കാണിക്കുന്ന പ്രത്യേക പൂജ.', descCls: 'ml', free: 'സൗജന്യം' },
      { icon: 'bi-circle',     title: 'Amavasai Puja',    subtitle: 'അമാവാസ്യ പൂജ', subtitleCls: 'ml', desc: 'അമാവാസ്യ നാളിൽ പിതൃ തർപ്പണവും കുലദേവതാ ആരാധനയും.',                                                   descCls: 'ml', free: 'സൗജന്യം' },
      { icon: 'bi-sun-fill',   title: 'Aadi 18 Festival', subtitle: 'ആടി 18 ഉത്സവം', subtitleCls: 'ml', desc: 'ആടി മാസം 18-ാം ദിവസം അമ്മന് പ്രത്യേക അഭിഷേകം, അലങ്കാരം, വർഷ ഉത്സവം.',                               descCls: 'ml', free: 'സൗജന്യം' },
      { icon: 'bi-stars',      title: 'Masi Sivaratri',   subtitle: 'മാസി ശിവരാത്രി',subtitleCls: 'ml', desc: 'മാസി മാസം ശിവരാത്രിയിൽ രാത്രി മുഴുവൻ പ്രത്യേക ആരാധന, ദീപാലങ്കാരം.',                                 descCls: 'ml', free: 'സൗജന്യം' },
      { icon: 'bi-flower3',    title: 'Panguni Uthiram',  subtitle: 'പങ്കുനി ഉത്തിരം',subtitleCls: 'ml', desc: 'പങ്കുനി മാസം ഉത്തിര നക്ഷത്ര ദിനത്തിൽ ഉത്സവം.',                                                        descCls: 'ml', free: 'സൗജന്യം' },
      { icon: 'bi-eye-fill',   title: 'Vaikunta Ekadasi', subtitle: 'വൈകുണ്ഠ ഏകാദശി',subtitleCls: 'ml', desc: 'വൈകുണ്ഠ ഏകാദശിയിൽ മഹാകാളി ശ്രീമൻ വിഷ്ണു രൂപത്തിൽ ദർശനം നൽകുന്ന ഏകൈക ക്ഷേത്രം.',                  descCls: 'ml', free: 'സൗജന്യം' },
    ],
    eyeUnique: 'പ്രത്യേകതകൾ', titleUnique: 'ഈ ക്ഷേത്രം മാത്രം നൽകുന്ന അനുഭവം',
    uniques: [
      { title: 'വൈകുണ്ഠ ഏകാദശിയിൽ വിഷ്ണു ദർശനം', titleCls: 'en', desc: 'ലോകത്ത് അന്യത്ര ഇല്ലാത്ത ദിവ്യ അനുഭവം.',             descCls: 'ml' },
      { title: 'ശ്രീ ചക്ര വിമാനവും ഗോപുരവും',       titleCls: 'en', desc: 'ദേവലോക ശില്പ സംപ്രദായ ക്ഷേത്രം.',                   descCls: 'ml' },
      { title: 'ദശ മഹാ വിദ്യ സംരക്ഷണം',             titleCls: 'en', desc: 'എല്ലാ ദിശകളിലും ദൈവിക സംരക്ഷണം.',                    descCls: 'ml' },
      { title: 'സ്വപ്നത്തിൽ കുലദേവത വെളിപ്പെടൽ',    titleCls: 'en', desc: 'അമ്മ സ്വപ്നത്തിൽ കുലദേവതയുടെ സ്ഥലവും ദിശയും കാണിക്കുന്നു.', descCls: 'ml' },
      { title: 'എല്ലാം പൂർണ്ണ സൗജന്യം',              titleCls: 'en', desc: 'ഒരു ഫീസും ഇല്ല. ജാതിമത ഭേദം കൂടാതെ ആർക്കും വരാം.', descCls: 'ml' },
      { title: 'മന്ത്ര-തന്ത്ര പ്രശ്നങ്ങൾക്ക് പരിഹാരം',titleCls: 'en', desc: 'മന്ത്ര, യന്ത്ര, തന്ത്ര ബന്ധ പ്രശ്നങ്ങൾക്ക് തത്ക്ഷണ പരിഹാരം.', descCls: 'ml' },
    ],
    ctaTitle: 'അമ്മ അനുഗ്രഹം നേരിട്ട് സ്വീകരിക്കൂ',
    ctaDesc: 'പരിഹാര പൂജകൾക്ക് ബന്ധപ്പെടുക. ജാതിമത ഭേദമില്ലാതെ ഏവരും വരൂ.', ctaDescCls: 'ml',
    ctaBook: '<i class="bi bi-calendar3"></i> ബുക്ക് ചെയ്യുക',
    formTabBooking: 'പൂജ ബുക്കിംഗ്', formTabMessage: 'സന്ദേശം അയക്കുക',
    pujaOptions: ['-- പൂജ തിരഞ്ഞെടുക്കുക --','പൗർണ്ണമി പൂജ','അമാവാസ്യ പൂജ','ആടി 18 ഉത്സവം','മാസി ശിവരാത്രി','പങ്കുനി ഉത്തിരം','വൈകുണ്ഠ ഏകാദശി','പരിഹാര പൂജ','മറ്റുള്ളവ'],
    faqItems: [
      { q: 'ക്ഷേത്ര സമയം എന്ത്?',                         a: 'രാവിലെ 6 മണി മുതൽ രാത്രി 9 മണി വരെ.' },
      { q: 'പരിഹാര പൂജക്ക് ഫീസ് ഉണ്ടോ?',                  a: 'ഇല്ല. എല്ലാം സൗജന്യം. മുൻ അനുമതി മാത്രം ആവശ്യം.' },
      { q: 'എല്ലാ ജാതിക്കാർക്കും ക്ഷേത്രം തുറന്നിരിക്കുമോ?', a: 'അതെ. ജാതിമത ഭേദം കൂടാതെ ആർക്കും വരാം.' },
      { q: 'ക്ഷേത്രത്തിലേക്ക് എങ്ങനെ എത്താം?',             a: 'തിരുമംഗലം–ദിണ്ടിക്കൽ ഹൈവേ, ഓസ്റ്റിൻപട്ടി, തനക്കൻകുളം, മധുര.' },
    ],
  },
};


// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
let currentLang = 'ta';
const LANG_ORDER = ['ta', 'en', 'hi', 'te', 'ml'];


// ═══════════════════════════════════════════════════════════════
// ✅ FIX 1: Robust page detection — handles Netlify pretty URLs
//    e.g. /about (no .html) correctly maps to 'about.html'
// ═══════════════════════════════════════════════════════════════
function getCurrentPage() {
  const raw = location.pathname.split('/').pop() || '';
  // Root path → index
  if (!raw || raw === '') return 'index.html';
  // Already has .html extension
  if (raw.includes('.html')) return raw;
  // Netlify pretty URL: 'about' → 'about.html'
  return raw + '.html';
}


// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════
function $(id)   { return document.getElementById(id); }
function set(id, text) { const el = $(id); if (el) el.textContent = text; }
function setHTML(id, html) { const el = $(id); if (el) el.innerHTML = html; }
function setClass(id, cls) { const el = $(id); if (el) el.className = cls; }


// ═══════════════════════════════════════════════════════════════
// SHARED BUILDERS  (used by multiple pages)
// ═══════════════════════════════════════════════════════════════
function buildTrustBar(d) {
  // Trust bar is handled by the multilingual name marquee — do nothing
}

function buildNav(d) {
  const logo = $('navLogoText');
  if (logo) { logo.textContent = d.navLogo; logo.className = `nav-logo-text ${d.navLogoClass}`; }

  // ✅ FIX: Use getCurrentPage() instead of inline split
  const page = getCurrentPage();

  const buildLink = (n) => {
    const isActive = n.href.split('#')[0] === page;
    let cls = '';
    if (isActive) cls = 'active-page';
    if (n.cta) cls = 'nav-cta';
    return `<a href="${n.href}"${cls ? ` class="${cls}"` : ''}>${n.label}</a>`;
  };

  const links = $('navLinks');
  if (links) links.innerHTML = d.navItems.map(buildLink).join('');

  const mob = $('mobileMenu');
  if (mob) mob.innerHTML = d.navItems.map(n =>
    `<a href="${n.href}" onclick="document.getElementById('mobileMenu').classList.remove('open')">${n.label}</a>`
  ).join('');
}

function buildLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const dataLang = btn.getAttribute('data-setlang');
    const onclickAttr = btn.getAttribute('onclick') || '';
    const onclickLang = onclickAttr.replace(/[^']*'([^']+)'.*/, '$1');
    const btnLang = dataLang || onclickLang;
    if (btnLang === lang) btn.classList.add('active');
  });
}

// ═══════════════════════════════════════════════════════════════
// PAGE-SPECIFIC BUILDERS
// ═══════════════════════════════════════════════════════════════

// ── ABOUT page ──
function buildAboutPage(d) {
  // Hero / breadcrumb
  const breadHome = $('breadHome'); if (breadHome) breadHome.textContent = d.breadHome;
  const heroTitle = $('heroTitle'); if (heroTitle) heroTitle.textContent = d.heroTitle;
  const heroSub   = $('heroSubtitle');
  if (heroSub) { heroSub.textContent = d.heroSubtitle; heroSub.className = `page-hero-subtitle ${d.heroSubClass}`; }

  // Intro
  set('eyeAbout', d.eyeAbout); set('titleAbout', d.titleAbout);
  const p1 = $('aboutP1');
  if (p1) { p1.textContent = d.aboutP1; p1.className = `para-text ${d.aboutPClass}`; }
  const pq = $('pullQuoteText');
  if (pq) { pq.textContent = d.pullQuote; }
  const p2 = $('aboutP2');
  if (p2) { p2.textContent = d.aboutP2; p2.className = `para-text ${d.aboutPClass}`; }
  set('badgeLabel', d.badgeLabel);

  // Quotes
  set('eyeQuotes', d.eyeQuotes); set('titleQuotes', d.titleQuotes);
  const qGrid = $('quotesGrid');
  if (qGrid) qGrid.innerHTML = d.quotes.map((q, i) =>
    `<div class="quote-card reveal d${(i%6)+1}">
      <span class="quote-mark">"</span>
      <p class="quote-text">${q.text}</p>
      <span class="quote-source">— ${q.src}</span>
    </div>`).join('');

  // Timeline
  set('eyeTimeline', d.eyeTimeline); set('titleTimeline', d.titleTimeline);
  const tlc = $('timelineContainer');
  if (tlc) tlc.innerHTML = d.timeline.map((t, i) =>
    `<div class="tl-item reveal d${i+1}">
      <div class="tl-dot"><i class="bi ${t.icon}"></i></div>
      <div class="tl-content">
        <div class="tl-year">${t.year}</div>
        <div class="tl-title">${t.title}</div>
        <p class="tl-desc">${t.desc}</p>
      </div>
    </div>`).join('');

  // Deity
  set('eyeDeity', d.eyeDeity); set('titleDeity', d.titleDeity);
  set('deityLabel', d.deityLabel); set('deityName', d.deityName);
  const dSub = $('deitySub');
  if (dSub) { dSub.textContent = d.deitySub; dSub.className = `main-deity-sub ${d.deitySubCls}`; }
  const dDesc = $('deityDesc');
  if (dDesc) { dDesc.textContent = d.deityDesc; dDesc.className = `main-deity-desc ${d.deityDescCls}`; }
  const si = $('sannathiIntro');
  if (si) { si.textContent = d.sannathiIntro; si.className = `sannidhi-intro reveal ${d.sannathiCls}`; }
  const chips = $('deityChips');
  if (chips) chips.innerHTML = d.deityChips.map(c =>
    `<span class="deity-chip ${d.chipCls}"><i class="bi ${c.icon}"></i> ${c.label}</span>`).join('');

  // Pujas
  set('eyePuja', d.eyePuja); set('titlePuja', d.titlePuja);
  const pn = $('pujaNote');
  if (pn) { pn.textContent = d.pujaNote; pn.className = `puja-note ${d.pujaNoteCls}`; }
  const pg = $('pujaGrid');
  if (pg) pg.innerHTML = d.pujas.map((p, i) =>
    `<div class="puja-card reveal d${(i%6)+1}">
      <div class="puja-icon"><i class="bi ${p.icon}"></i></div>
      <div class="puja-title">${p.title}</div>
      <div class="puja-subtitle ${p.subtitleCls}">${p.subtitle}</div>
      <p class="puja-desc ${p.descCls}">${p.desc}</p>
      <span class="puja-free"><i class="bi bi-check-circle-fill"></i> ${p.free}</span>
    </div>`).join('');

  // Uniques
  set('eyeUnique', d.eyeUnique); set('titleUnique', d.titleUnique);
  const ug = $('uniqueGrid');
  if (ug) ug.innerHTML = d.uniques.map((u, i) =>
    `<div class="unique-card reveal d${(i%6)+1}">
      <div class="unique-num">0${i+1}</div>
      <div class="unique-title ${u.titleCls}">${u.title}</div>
      <p class="unique-desc ${u.descCls}">${u.desc}</p>
    </div>`).join('');

  // CTA
  set('ctaTitle', d.ctaTitle);
  const cd = $('ctaDesc');
  if (cd) { cd.textContent = d.ctaDesc; cd.className = d.ctaDescCls; }
  setHTML('ctaBookBtn', d.ctaBook);

  // ✅ FIX 2: Fallback reveal for mobile — IntersectionObserver sometimes
  //    doesn't fire on mobile browsers when navigating via bottom nav,
  //    especially on Netlify with network latency. Force all .reveal
  //    elements visible after a safe delay.
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up')
      .forEach(el => el.classList.add('in'));
  }, 900);
}

// ── INDEX page (home) ──
function buildIndexPage(d) {
  applyDataLang(currentLang);
}

// ═══════════════════════════════════════════════════════════════
// DATA-LANG VISIBILITY  (used by index.html and any page with data-lang attributes)
// ═══════════════════════════════════════════════════════════════
function applyDataLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const elLang = el.getAttribute('data-lang');
    if (!elLang) return;
    if (el.tagName === 'SPAN') {
      el.style.display = elLang === lang ? 'inline' : 'none';
    } else {
      el.style.display = elLang === lang ? 'block' : 'none';
    }
  });
}

// ── CONTACT page ──
function buildContactPage(d) {
  const tab1 = $('tabBookingLabel'); if (tab1) tab1.textContent = d.formTabBooking;
  const tab2 = $('tabMessageLabel'); if (tab2) tab2.textContent = d.formTabMessage;

  const sel = $('bkPuja') || $('bPuja');
  if (sel && d.pujaOptions) {
    sel.innerHTML = d.pujaOptions.map((o, i) =>
      `<option value="${i === 0 ? '' : o}">${o}</option>`).join('');
  }

  const faqContainer = $('faqContainer');
  if (faqContainer && d.faqItems) {
    faqContainer.innerHTML = d.faqItems.map((f, i) =>
      `<div class="faq-item" onclick="toggleFaq(this)">
        <div class="faq-q"><span>${f.q}</span><i class="bi bi-chevron-down"></i></div>
        <div class="faq-a">${f.a}</div>
      </div>`).join('');
  }
}

// ── GALLERY page ──
function buildGalleryPage(d) {
  // Add any dynamic gallery text here if needed.
}

// ── DEITIES page ──
function buildDeitiesPage(d) {
  // Add deity-specific dynamic rebuilding if the page uses JS-rendered content.
}


// ═══════════════════════════════════════════════════════════════
// MAIN setLang  — the ONE function called everywhere
// ═══════════════════════════════════════════════════════════════
function setLang(lang) {
  if (!LANG[lang]) return;
  currentLang = lang;
  const d = LANG[lang];

  // 1. Shared UI
  buildTrustBar(d);
  buildNav(d);

  // 2. Apply data-lang visibility on ALL pages
  applyDataLang(lang);

  // 3. Sync active button — MUST come after buildNav recreates the DOM
  buildLangButtons(lang);

  // 4. ✅ FIX: Use getCurrentPage() for reliable detection on Netlify
  const page = getCurrentPage();
  if (page === 'about.html') {
    buildAboutPage(d);
    initReveal();
  } else if (page === 'contact.html') {
    buildContactPage(d);
  } else if (page === 'gallery.html') {
    buildGalleryPage(d);
  } else if (page === 'deities.html') {
    buildDeitiesPage(d);
  } else {
    buildIndexPage(d);
  }

  // 5. Persist
  try { localStorage.setItem('templeLang', lang); } catch (e) {}
}


// ═══════════════════════════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════════════════════════
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up').forEach(el => {
    el.classList.remove('in');
    observer.observe(el);
  });
}


// ═══════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════
function toggleMenu() {
  const m = $('mobileMenu');
  if (m) m.classList.toggle('open');
}


// ═══════════════════════════════════════════════════════════════
// SCROLL EVENTS  (navbar + back-to-top + parallax)
// ═══════════════════════════════════════════════════════════════
window.addEventListener('scroll', () => {
  const y = window.scrollY;

  const nav = $('mainNav');
  if (nav) nav.classList.toggle('scrolled', y > 80);

  const bt = $('backTop');
  if (bt) bt.classList.toggle('show', y > 500);

  const heroBg = $('heroBg');
  if (heroBg) heroBg.style.transform = `translateY(${y * 0.4}px)`;

  const specialBg  = $('specialBg');
  const specialSec = $('specialties');
  if (specialBg && specialSec) {
    specialBg.style.transform = `translateY(${-specialSec.getBoundingClientRect().top * 0.25}px)`;
  }
}, { passive: true });


// ═══════════════════════════════════════════════════════════════
// BOOKING FORM  (WhatsApp submission)
// ═══════════════════════════════════════════════════════════════
function submitBooking() {
  const name  = ($('bkName')  || $('bName'))  ? ($('bkName')  || $('bName')).value.trim()  : '';
  const phone = ($('bkPhone') || $('bPhone')) ? ($('bkPhone') || $('bPhone')).value.trim() : '';
  const date  = ($('bkDate')  || $('bDate'))  ? ($('bkDate')  || $('bDate')).value          : '';
  const puja  = ($('bkPuja')  || $('bPuja'))  ? ($('bkPuja')  || $('bPuja')).value          : '';
  const msg   = ($('bkMsg')   || $('bMsg'))   ? ($('bkMsg')   || $('bMsg')).value.trim()   : '';

  if (!name || !phone) {
    alert('Please enter your name and phone number.');
    return;
  }

  const text = encodeURIComponent(
    `*Booking Request – Sri Kaar Irul Kanapadai Bhadrakali Temple*\n\n` +
    `Name: ${name}\nPhone: ${phone}\n` +
    `Date: ${date || 'Not specified'}\n` +
    `Puja: ${puja || 'Not specified'}\n` +
    `Message: ${msg || '—'}`
  );
  window.open(`https://wa.me/918012709645?text=${text}`, '_blank');

  const form    = $('bookingFormInner');
  const success = $('bookingSuccess');
  if (form && success) {
    form.style.display    = 'none';
    success.style.display = 'block';
    setTimeout(() => {
      form.style.display    = 'block';
      success.style.display = 'none';
      [$('bkName'),$('bkPhone'),$('bkDate'),$('bkPuja'),$('bkMsg'),
       $('bName'), $('bPhone'),$('bDate'), $('bPuja'), $('bMsg')]
        .forEach(el => { if (el) el.value = ''; });
    }, 5000);
  }
}

// ── Message form ──
function submitMessage() {
  const name  = $('msgName')  ? $('msgName').value.trim()  : '';
  const phone = $('msgPhone') ? $('msgPhone').value.trim() : '';
  const body  = $('msgBody')  ? $('msgBody').value.trim()  : '';

  if (!name || !body) { alert('Please fill in your name and message.'); return; }

  const form    = $('msgFormInner');
  const success = $('msgSuccess');
  if (form && success) {
    form.style.display    = 'none';
    success.style.display = 'block';
    setTimeout(() => {
      form.style.display    = 'block';
      success.style.display = 'none';
      [$('msgName'),$('msgPhone'),$('msgSubject'),$('msgBody')]
        .forEach(el => { if (el) el.value = ''; });
    }, 5000);
  }
}


// ═══════════════════════════════════════════════════════════════
// CONTACT PAGE — TAB SWITCHER
// ═══════════════════════════════════════════════════════════════
function switchTab(id, btn) {
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.form-tab-btn').forEach(b => b.classList.remove('active'));
  const panel = $('panel-' + id);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}


// ═══════════════════════════════════════════════════════════════
// CONTACT PAGE — FAQ ACCORDION
// ═══════════════════════════════════════════════════════════════
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}


// ═══════════════════════════════════════════════════════════════
// GALLERY PAGE — FILTER
// ═══════════════════════════════════════════════════════════════
function filterGallery(category, btn) {
  document.querySelectorAll('.filter-tab, .filter-btn').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.gallery-card[data-category], .deity-premium-card[data-category]').forEach(card => {
    const show = category === 'all' || card.dataset.category === category;
    card.style.display = show ? '' : 'none';
    if (show) {
      card.style.animation = 'none';
      card.offsetHeight;
      card.style.animation = '';
    }
  });
}

function setView(mode) {
  const grid = $('galleryGrid');
  if (!grid) return;
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  if (event && event.currentTarget) event.currentTarget.classList.add('active');
  grid.className = { masonry: 'gallery-grid-masonry', grid2: 'gallery-grid-2', grid4: 'gallery-grid-4' }[mode] || '';
}


// Gallery lightbox
let _lbIndex = 0;
let _lbVisible = [];

function openLightbox(dataIndex, e) {
  if (e) e.stopPropagation();

  const cards = [...document.querySelectorAll('.gallery-card[data-index]')]
    .filter(c => c.style.display !== 'none');

  _lbVisible = cards.map(c => parseInt(c.getAttribute('data-index')));
  _lbIndex   = _lbVisible.indexOf(dataIndex);
  if (_lbIndex < 0) _lbIndex = 0;

  renderLightbox();

  const overlay = $('lightboxOverlay');
  if (overlay) { overlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
}

function renderLightbox() {
  const currentIndex = _lbVisible[_lbIndex];

  const card = document.querySelector(`.gallery-card[data-index="${currentIndex}"]`);
  if (!card) return;

  const img     = card.querySelector('.gallery-card-img');
  const titleEl = card.querySelector('.gallery-card-title');
  const catEl   = card.querySelector('.gallery-card-category');

  const getLangText = (el) => {
    if (!el) return '';
    const langSpan = el.querySelector(`[data-lang="${currentLang}"]`);
    return langSpan ? langSpan.textContent : (el.textContent || '');
  };

  const lbImg = $('lightboxImg');
  if (lbImg && img) { lbImg.src = img.src; lbImg.alt = img.alt; }

  const ttl = $('lightboxTitle');
  if (ttl) ttl.textContent = getLangText(titleEl);

  const sub = $('lightboxSubtitle');
  if (sub) sub.textContent = getLangText(catEl);

  const ctr = $('lightboxCounter');
  if (ctr) ctr.textContent = `${_lbIndex + 1} / ${_lbVisible.length}`;

  const dots = $('lightboxDots');
  if (dots) dots.innerHTML = _lbVisible.map((_, i) =>
    `<div class="lightbox-dot ${i === _lbIndex ? 'active' : ''}" onclick="jumpLightbox(${i})"></div>`
  ).join('');
}

function jumpLightbox(i) { _lbIndex = i; renderLightbox(); }
function navigateLightbox(dir) {
  _lbIndex = (_lbIndex + dir + _lbVisible.length) % _lbVisible.length;
  renderLightbox();
}
function closeLightbox() {
  const overlay = $('lightboxOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}
function closeLightboxOnBg(e) {
  if (e.target === $('lightboxOverlay')) closeLightbox();
}
document.addEventListener('keydown', e => {
  const overlay = $('lightboxOverlay');
  if (!overlay || !overlay.classList.contains('active')) return;
  if (e.key === 'ArrowRight') navigateLightbox(1);
  if (e.key === 'ArrowLeft')  navigateLightbox(-1);
  if (e.key === 'Escape')     closeLightbox();
});


// ═══════════════════════════════════════════════════════════════
// PRELOADER
// ═══════════════════════════════════════════════════════════════
function hidePreloader() {
  const pl = $('preloader');
  if (pl) {
    pl.classList.add('fade-out');
    setTimeout(() => { pl.style.display = 'none'; }, 600);
  }
}


// ═══════════════════════════════════════════════════════════════
// GALLERY — wire up card click events after DOM ready
// ═══════════════════════════════════════════════════════════════
function wireGalleryCards() {
  document.querySelectorAll('.gallery-card[data-index]').forEach(card => {
    const idx = card.getAttribute('data-index');
    if (idx === 'vid1') return; // ← add this line to skip the video card
    card.addEventListener('click', function () {
      openLightbox(parseInt(this.getAttribute('data-index')));
    });
  });
}

// ═══════════════════════════════════════════════════════════════
// STAGGER gallery items
// ═══════════════════════════════════════════════════════════════
function staggerGalleryItems() {
  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.style.transitionDelay = (i * 0.07) + 's';
  });
}


// ═══════════════════════════════════════════════════════════════
// INIT  — runs once DOM is ready
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  let savedLang = 'ta';
  try { savedLang = localStorage.getItem('templeLang') || 'ta'; } catch (e) {}
  if (!LANG[savedLang]) savedLang = 'ta';

  // STEP 1: Strip hardcoded 'active' from ALL lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));

  // STEP 2: Wire up data-setlang buttons (index page uses these)
  document.querySelectorAll('[data-setlang]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.getAttribute('data-setlang'));
    });
  });

  // ✅ FIX: Use getCurrentPage() for bottom nav active state
  const currentPage = getCurrentPage();
  document.querySelectorAll('.bottom-nav-item').forEach(link => {
    const href = link.getAttribute('href') || '';
    // Match both 'about.html' and 'about' style hrefs against currentPage
    const hrefBase = href.replace('.html', '');
    const pageBase = currentPage.replace('.html', '');
    if (href === currentPage || hrefBase === pageBase) {
      link.classList.add('active');
    }
  });

  // STEP 3: Apply saved language (this also calls buildAboutPage on about page)
  setLang(savedLang);

  // Scroll reveal
  initReveal();

  if (currentPage === 'gallery.html') {
    wireGalleryCards();
    staggerGalleryItems();
  }

  // ✅ FIX 3: Extra safety — on mobile the preloader sometimes hides content.
  //    Hide it faster on inner pages navigated via bottom nav.
  const isInnerPage = currentPage !== 'index.html';
  setTimeout(hidePreloader, isInnerPage ? 800 : 2200);
});

// Also hide preloader on window load as a safety net
window.addEventListener('load', () => {
  setTimeout(hidePreloader, 400);
});

(function() {
  var names = [
    "சர்வலோக காளி பீடம் சர்வதேச அறக்கட்டளை",
    "Sarva Loka Kali Peedam International Charitable Trust",
    "సర్వలోక కాళి పీఠం అంతర్జాతీయ దాతృత్వ ట్రస్ట్",
    "ಸರ್ವಲೋಕ ಕಾಳಿ ಪೀಠ ಅಂತರಾಷ್ಟ್ರೀಯ ಚಾರಿಟಬಲ್ ಟ್ರಸ್ಟ್",
    "सर्वलोक काली पीठम अंतर्राष्ट्रीय चैरिटेबल ट्रस्ट",
    "സർവലോക കാളി പീഠം ഇന്റർനാഷണൽ ചാരിറ്റബിൾ ട്രസ്റ്റ്"
  ];

  function initMarquee() {
    var marquee = document.getElementById('trustMarquee');
    if (!marquee) return;

    marquee.innerHTML = '';
    for (var i = 0; i < 2; i++) {
      names.forEach(function(name) {
        var s = document.createElement('span');
        s.textContent = name;
        marquee.appendChild(s);
        var sep = document.createElement('span');
        sep.className = 'sep';
        sep.textContent = '|';
        marquee.appendChild(sep);
      });
    }

    var pos = 0, totalW = 0, last = null;
    setTimeout(function() {
      totalW = marquee.scrollWidth / 2;
      function step(ts) {
        if (!last) last = ts;
        pos += (ts - last) * 0.04;
        last = ts;
        if (pos >= totalW) pos -= totalW;
        marquee.style.transform = 'translateX(-' + pos + 'px)';
        requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, 200);
  }

  document.addEventListener('DOMContentLoaded', initMarquee);
})();