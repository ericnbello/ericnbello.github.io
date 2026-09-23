# Migration notes

This folder is intended to replace the current Jekyll/Minimal Mistakes site in the `ericnbello.github.io` repository.

1. Back up the current repository or create a branch.
2. Replace the repository contents with this project.
3. Commit and push to the default branch.
4. In GitHub repository settings, set Pages to deploy through **GitHub Actions** if it is not already configured that way.
5. The included workflow installs dependencies, builds Astro, and deploys the generated static site.

## Before publishing

- Add the current résumé PDF when available, then add a visible résumé CTA in the hero/navigation.
- Confirm the public GitHub profile photo is the headshot you want recruiters to see.
- Confirm the Active Directory project details remain accurate to the actual lab.
- Check every live demo and source link.
- Test the Formspree contact form after deployment.

The project keeps `/about/`, `/projects/`, and `/contact/` routes and is designed to remain static and fast on GitHub Pages.
