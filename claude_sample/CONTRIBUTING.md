# Contributing to the Center website

This site is plain HTML and CSS. There is no build step and no framework. If you can edit a text file, you can update the site.

## For faculty: your personal page

Every faculty member gets a folder at `people/<first-last>/`. Its address is
`https://<org>.github.io/<repo>/people/<first-last>/`. You own that folder: GitHub automatically asks for your review on any change to it (see `.github/CODEOWNERS`).

### Step 1: Request access (one time)

1. Create a GitHub account if you don't have one.
2. Open a new issue using the **"Request a personal page"** template, under Issues → New issue.
3. A site admin will:
   - add you to the GitHub organization/repository with **Write** access,
   - add your folder to `.github/CODEOWNERS`,
   - add your card to `people.html`.

### Step 2: Choose a page type

**Option A: Full page hosted here (recommended)**

1. Copy `people/_template/` to `people/<first-last>/`.
2. Open `people/<first-last>/index.html` and edit only the part between
   `<!-- ====== EDIT BELOW ====== -->` and `<!-- ====== EDIT ABOVE ====== -->`.
3. (Optional) Add `photo.jpg` (square, about 600×600 px, under 500 KB) to your folder. Then swap the placeholder avatar for the `<img>` line that is commented out in the template.

You can add more pages inside your folder, for example `people/<first-last>/teaching.html`.

**Option B: Redirect to your existing homepage**

Copy `people/sarah-lindqvist/index.html` into your folder and change the URL in the 3 places it appears. Visitors who open your page here are sent straight to your own site.

### Step 3: Publish your changes

**Easiest way, in the browser:**
1. Open your `index.html` on GitHub and click the ✏️ (Edit) icon.
2. Make your changes. Then choose **"Create a new branch… and start a pull request"**.
3. Open the pull request. Once it is approved and merged, the site updates within about 1 minute.

**With git:**
```bash
git clone https://github.com/YOUR-ORG/YOUR-REPO.git
cd YOUR-REPO
git checkout -b update-my-page
# edit people/<first-last>/index.html, then open it in a browser to preview
git add people/<first-last>
git commit -m "Update <Name> page"
git push -u origin update-my-page
```
Then open a pull request on GitHub.

> Please don't edit files outside your own folder in a personal-page PR. For site-wide changes, such as navigation, styles or shared pages, open a separate PR or an issue.

## For everyone: news, events and publications

- **News:** add an `<li class="dated">` at the top of the list in `news.html`, and optionally on `index.html` too.
- **Events:** edit `events.html`.
- **Publications:** copy an `<li class="pub">` block in `publications.html`. Set `data-topics` to one or more of `nlp vision theory responsible`.
- **People:** edit `people.html`.

## Shared header and footer

The navigation and footer are repeated in every HTML file, so the site needs no JavaScript or build tools. If you change the navigation, update all pages. A search-and-replace across the repository does the job.
