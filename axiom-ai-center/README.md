# Axiom AI Research Center website template

A dependency-free, multi-page website for a university AI research center. All names, institutions, publications, metrics, dates, and email addresses are sample content and should be replaced before launch.

## Preview locally

Open `index.html` directly, or serve this folder with any static web server. The site uses only HTML, CSS, and a small amount of JavaScript.

## Customize the center

1. Search the project for `Axiom`, `Northbridge`, and `example.edu` and replace them with the real center details.
2. Update the sample metrics and news on `index.html`.
3. Replace the people and publication entries.
4. Keep all links relative so the site works both at a custom domain and at `username.github.io/repository-name/`.

## Add a faculty profile

1. Copy `people/profile-template.html` to `people/firstname-lastname.html`.
2. Edit the title, description, initials, biography, links, publications, office, and topics.
3. Add a matching card to `people.html`.
4. Open a pull request. The faculty member listed in `.github/CODEOWNERS` can be assigned as the reviewer for their page.

If a professor already maintains a personal website, copy `people/external-profile-template.html`, replace both `example.edu` URLs, and link that file from `people.html`. This creates a one-line-style redirect while preserving a stable center URL.

## Publish with GitHub Pages

When ready, create a GitHub repository containing the contents of this folder. In the repository settings, open **Pages**, choose **Deploy from a branch**, select the default branch and the root folder, then save. No build action is required.

## Files to know

- `assets/css/styles.css` — colors, typography, layout, and responsive design
- `assets/js/main.js` — shared navigation, footer, mobile menu, and publication filters
- `people/profile-template.html` — copy this for a center-hosted professor page
- `people/external-profile-template.html` — copy this to redirect to an external page
- `CONTRIBUTING.md` — simple editing and review workflow for center members

## Content license

Choose a license that fits your institution before publishing. The sample content is fictional and intended only as a starting point.
