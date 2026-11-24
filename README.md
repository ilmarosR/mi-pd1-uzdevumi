# mi-pd1-uzdevumi
RTU kurss - Mākslīgā intelekta pamati (MI programmatūras izstrādē) 

## Apraksts

„Mani uzdevumi” ir vienkārša tīmekļa lietotne ikdienas uzdevumu pārvaldībai. Tā izstrādāta, izmantojot HTML, CSS un JavaScript, bez ārējām bibliotēkām.

Lietotnes galvenās funkcijas:

- Jaunu uzdevumu pievienošana ar pogu „Pievienot” vai Enter taustiņu.
- Uzdevumu atzīmēšana kā izpildītiem un izpildes statusa atcelšana.
- Uzdevumu dzēšana.
- Uzdevumu filtrēšana: „Visi”, „Aktīvie” un „Izpildītie”.
- Automātiska atlikušo uzdevumu skaita atjaunošana.
- Automātiska datu saglabāšana pārlūka `localStorage` krātuvē JSON formātā, izmantojot atslēgu `pdl-uzdevumi`.

Lietotnes saskarne un programmas koda komentāri ir latviešu valodā.

## Palaišana

1. Saglabāt visus trīs lietotnes failus (`index.html`, `style.css` un `app.js`) vienā mapē.
2. Atvērt failu `index.html` pārlūkprogrammā Google Chrome vai Mozilla Firefox.
3. Sākt lietot uzdevumu sarakstu.

Lietotnes darbībai nav nepieciešama papildu programmatūras instalēšana, serveris vai interneta pieslēgums.

## Papildfunkcija

Lietotnei pievienota esošo uzdevumu rediģēšanas iespēja, kas ļauj mainīt uzdevuma tekstu, to neizdzēšot un neveidojot no jauna.

- **Dubultklikšķis** uz uzdevuma teksta aktivizē rediģēšanas režīmu.
- **Enter** taustiņš saglabā veiktās izmaiņas.
- **Escape** taustiņš atceļ izmaiņas un atjauno sākotnējo tekstu.
- Klikšķis ārpus rediģēšanas lauka atceļ nesaglabātās izmaiņas.
- Tukšu tekstu vai tekstu, kas sastāv tikai no atstarpēm, nav iespējams saglabāt.
- Liekās atstarpes teksta sākumā un beigās tiek automātiski noņemtas.

Rediģēt iespējams gan aktīvos, gan izpildītos uzdevumus. Rediģēšanas laikā uzdevuma unikālais identifikators un izpildes statuss netiek mainīts. Saglabātās izmaiņas tiek ierakstītas `localStorage` krātuvē un ir pieejamas arī pēc lapas pārlādēšanas.

Papildfunkcija realizēta, papildinot `app.js` un `style.css` failus, nemainot `index.html` failu un saglabājot visas sākotnējās lietotnes funkcijas.

## Izmantotais MI riks

ChatGPT (Plus plans). 

## Parbaudes rezultäti

Visas 10 T2 parbaudes izdodas. 

## Faili

| Fails | Saturs |
| - | - |
| 'index.html' | lapas struktüra |
| 'style.css' | izskats | app.js' | visa loğika |
| 'README.md' | apraksts un palaišanas instrukcija |
| 'uzvednes.md' | uzvednu šabloni |
