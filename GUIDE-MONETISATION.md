# Guide : domaine + AdSense (pour CalcUtile)

## 1) Un vrai nom de domaine

⚠️ Un domaine **n'est pas gratuit** : compte environ **10 à 15 €/an**.
Tu devras faire le paiement toi-même (je ne gère jamais tes moyens de paiement).

### Étapes
1. Choisir un domaine, par exemple : `calcul-utile.fr`, `simulateur-facile.fr`, `mescalculs.fr`.
   - Vérifier la disponibilité chez un registrar : OVH, Cloudflare Registrar, Porkbun, Gandi, Namecheap.
2. L'acheter (~10-15 €/an).
3. Me le dire → je branche le domaine sur GitHub Pages (fichier `CNAME` + enregistrements DNS + HTTPS).

### À faire côté DNS (je te donnerai les valeurs exactes)
- Domaine racine `exemple.fr` → 4 enregistrements **A** vers GitHub Pages
  (185.199.108.153, .109.153, .110.153, .111.153)
- `www.exemple.fr` → **CNAME** vers `littl-spip.github.io`

> Tant que tu n'achètes pas de domaine, le site reste accessible sur
> **https://littl-spip.github.io/calc-utile/** (gratuit, mais moins « pro »).

---

## 2) Activer Google AdSense (les revenus)

⚠️ Tu dois créer le compte toi-même (identité, adresse postale, coordonnées bancaires).
Je ne vois jamais ces informations. Ensuite, tout le technique, je le fais.

### Étapes
1. Va sur **adsense.google.com** et crée un compte avec ton adresse Google.
2. Ajoute ton site : `littl-spip.github.io/calc-utile` (ou ton domaine si tu en achètes un).
3. Google te donne un code de vérification (balise `<meta>` ou `ads.txt`) → **donne-le moi**,
   je l'installe et je publie.
4. Demande la validation. Le site doit avoir du contenu et une page confidentialité
   (✅ c'est déjà le cas).
5. Une fois validé, Google te donne ton **identifiant éditeur** (`ca-pub-…`) → donne-le moi,
   j'ajoute le script et les blocs d'annonces déjà prévus dans les pages.
6. Active la **bannière de consentement** (CMP) dans AdSense → obligatoire en Europe.
7. Enregistre tes coordonnées bancaires dans AdSense pour être payé.

### Bon à savoir
- La validation AdSense prend souvent de quelques jours à 2 semaines.
- Plus le site a de pages et de trafic, plus la validation est facile → on continue à ajouter des pages.
- Les revenus dépendent du trafic : c'est un projet de plusieurs mois, pas de gains immédiats.

---

## 3) Où en est le site

- 28 pages en ligne (7 simulateurs + 20 pages « longue traîne » + confidentialité)
- `robots.txt` et `sitemap.xml` en place pour Google
- Emplacements publicité déjà préparés dans chaque page (vides pour l'instant)

### Prochaines étapes possibles
- Déclarer le site dans **Google Search Console** (pour suivre l'indexation).
- Ajouter encore des pages (autres montants, autres calculs).
