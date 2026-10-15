# CalcUtile — site d'outils gratuits (finance / immobilier)

Site statique **gratuit**, financé par la publicité (plus tard). Objectif : capter du trafic Google sur des recherches à fort CPC (crédit, impôt, salaire, notaire) puis monétiser avec AdSense.

## Pages

| Fichier | Outil |
|---|---|
| `index.html` | Accueil + liste des simulateurs |
| `simulateur-credit-immobilier.html` | Mensualité, coût total, tableau d'amortissement |
| `capacite-emprunt-immobilier.html` | Capacité d'emprunt (taux d'endettement) |
| `frais-de-notaire.html` | Frais de notaire (ancien / neuf) |
| `salaire-brut-net.html` | Salaire brut → net |
| `impot-revenu.html` | Impôt sur le revenu (barème officiel 2026) |
| `interets-composes.html` | Intérêts composés / épargne |
| `tva.html` | Calcul de TVA (HT ↔ TTC) |
| `privacy.html` | Confidentialité (obligatoire AdSense) |
| `robots.txt`, `sitemap.xml` | Indexation Google |

## Déploiement (gratuit)

Aucun build : le dossier se déploie tel quel.
- **GitHub Pages** / **Netlify** / **Cloudflare Pages** — 0 €.

## À faire pour la monétisation (plus tard)

1. Choisir un domaine (optionnel ; sinon sous-domaine gratuit) et remplacer `calc-utile.fr` dans `robots.txt` et `sitemap.xml`.
2. Créer un compte **Google AdSense** après mise en ligne, puis remplacer les blocs `<div class="ad">` par le code d'annonce.
3. Remplacer `[ton email de contact]` dans `privacy.html`.
4. Ajouter le **CMP (bannière de consentement)** Google — obligatoire en UE pour AdSense.

## Ensuite : croissance (SEO)

Ajouter des pages pour chaque variante de recherche, par exemple :
- « crédit immobilier 15 / 20 / 25 ans »
- « salaire brut en net 2000 / 2500 / 3000 € »
- « frais de notaire 200 000 / 300 000 € »
- « calcul indemnité de licenciement », « calcul IMC », « calcul TVA 20 % »…

Chaque page = une recherche = du trafic = des revenus pub.

## État

- [x] Site v1 complet (7 simulateurs) — code prêt
- [ ] Mise en ligne
- [ ] Domaine
- [ ] Pages SEO supplémentaires
- [ ] AdSense (plus tard)
