# eirikya.github.io

Nettsiden til Eirikya Games: https://eirikya.github.io

- `index.html` – forside med spillene og brukerstøtte (support-URL i App Store: `https://eirikya.github.io/#support`)
- Én personvernerklæring per spill, i en egen mappe per spill, på norsk og engelsk:
  - `zoopop/personvern.html` – Zoo Pop: Animal Merge
  - `tumble-numbers/personvern.html` – Tumble Numbers
  - `slippery-paws/personvern.html` – Slippery Paws
- `personvern.html` og `privacy.html` – gamle adresser for Zoo Pop, sender videre til `zoopop/personvern.html` (så gamle lenker virker)
- `app-ads.txt` – bekrefter overfor annonsørene at appene er dine. Gjelder alle appene i samme AdMob-konto (linjen fra AdMob: Apper → Vis alle apper → app-ads.txt)
- `assets/` – stil og språkbytte, `img/` – ikoner og skjermbilder

Språket velges automatisk etter nettleseren og kan byttes øverst til høyre. `?lang=no` eller `?lang=en` i adressen tvinger et språk.

## Nytt spill
1. Lag mappen `<spill>/` med `personvern.html` (kopier et av de andre spillene, rett navn, dato og det som lagres, og stiene `../assets/` og `../img/`).
2. Legg til et kort for spillet i `index.html` (ikon og skjermbilder i `img/`), spørsmål under Brukerstøtte og en lenke i bunnen.
3. Privacy Policy URL i App Store Connect: `https://eirikya.github.io/<spill>/personvern.html`. Samme adresse i AdMob-samtykkemeldingen og i appen.
