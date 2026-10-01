# Center for AI Research — website

A minimal, static website template for a university AI research center. It is plain HTML and CSS with a little optional JavaScript, and it is built for **GitHub Pages**.

## Structure

```
index.html          Home: overview, news, events, selected papers
about.html          Mission, history, organization, contact
research.html       Research areas, projects, facilities
people.html         Faculty, staff, students, alumni
publications.html   Papers with search and topic filter
news.html           News and announcements
events.html         Seminar series, reading club, conferences
join.html           Admissions, visitors, partners, open positions
404.html            Not-found page
people/
  _template/        Copy this to create a new personal page
  elena-marquez/    Example: full personal page
  david-okafor/     Example: full personal page
  sarah-lindqvist/  Example: redirect to an external homepage
assets/css/style.css  All styling (change colors and fonts at the top)
assets/js/main.js     Mobile menu and publication filter
.github/            CODEOWNERS, PR template, issue template
CONTRIBUTING.md     How faculty update their pages
```

## Deploy to GitHub Pages

1. Create a repository, for example `ai-center` under your university's GitHub organization, and push these files.
2. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, then `main` and `/ (root)`.
3. The site will be live at `https://<org>.github.io/<repo>/`.
4. Optional: to use a custom domain such as `ai.cs.university.edu`, add a `CNAME` file containing the domain and configure DNS. See the GitHub Pages docs.

The `.nojekyll` file tells GitHub to serve the files exactly as they are.

## Set up faculty self-editing

1. Create a GitHub **organization** for the center, or use your department's existing one.
2. Create a team called `site-admins` and add the people who maintain the site.
3. Go to **Settings → Branches → Add branch protection rule** for `main`:
   - ✅ Require a pull request before merging
   - ✅ Require review from Code Owners
4. Give each faculty member **Write** access, and add their folder to `.github/CODEOWNERS`.

With this setup, faculty can open PRs that change only their own folder and approve them themselves (as code owners). Changes to shared pages need approval from a site admin.

## Customize

- Find and replace `[University Name]`, `YOUR-ORG/YOUR-REPO` and `ai-center@university.edu`.
- Change the colors and fonts in the `:root` block at the top of `assets/css/style.css`.
- All names, papers and events are **placeholder content**. Replace them before you launch.
- Note on `404.html`: GitHub Pages serves it at whatever URL was missing, so its relative links break for nested paths. If you host at `https://<org>.github.io/<repo>/`, add `<base href="/<repo>/">` inside `<head>` of `404.html`. Leave it out if you use a custom domain at the root.

## Preview locally

Open `index.html` in a browser, or run:
```bash
python3 -m http.server 8000
```
Then visit http://localhost:8000.
