# GitHub Pages Deployment Guide

This guide will help you deploy your personal website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. All website files ready for deployment

## Step-by-Step Deployment

### 1. Create a GitHub Repository

You have two options for repository naming:

#### Option A: User/Organization Site (Recommended)
- Repository name: `shadowfax42.github.io`
- Example: `shadowfax42.github.io`
- This will deploy to: `https://shadowfax42.github.io/`

#### Option B: Project Site
- Repository name: Any name (e.g., `portfolio`, `portfolio`)
- Example: `portfolio`
- This will deploy to: `https://shadowfax42.github.io/portfolio/`

### 2. Initialize Git Repository

Navigate to your website folder and run:

```bash
cd /path/to/your/website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Personal website"

# Add remote repository
git remote add origin https://github.com/shadowfax42/portfolio.git

# Push to main branch
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow file `.github/workflows/deploy.yml` will automatically handle deployment

### 4. Wait for Deployment

- GitHub Actions will automatically start the deployment process
- Go to the "Actions" tab in your repository to monitor the deployment
- Deployment typically takes 1-2 minutes
- Your site will be available at the URL shown in the Pages settings

## Troubleshooting

### Common Issues

#### 1. Site not loading
- Check that the repository is public (private repos require GitHub Pro for Pages)
- Verify the URL format based on your repository name
- Check the Actions tab for any deployment errors

#### 2. Images not loading
- Ensure all image files are uploaded to the repository
- Check image paths in HTML files
- Verify image files are in the `resources/` folder

#### 3. CSS/JS not loading
- Check that all files are committed and pushed
- Verify file paths in HTML files
- Check browser developer console for errors

#### 4. 404 errors
- Ensure `index.html` exists in the root directory
- Check that all page links are correct
- Verify file names match the links

### URL Formats

Depending on your repository type, your URL will be:

**User Site:**
```
https://shadowfax42.github.io/
```

**Project Site:**
```
https://shadowfax42.github.io/repository-name/
```

### Custom Domain (Optional)

To use a custom domain:

1. Go to Settings > Pages in your repository
2. Under "Custom domain", enter your domain name
3. Configure DNS settings as instructed
4. Wait for DNS propagation (can take up to 24 hours)

### Updating Your Site

To update your website:

1. Make changes to your local files
2. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update description of changes"
   git push origin main
   ```
3. GitHub Actions will automatically redeploy your site

### Repository Structure

Ensure your repository structure matches:

```
portfolio/
├── index.html
├── projects.html
├── about.html
├── contact.html
├── main.js
├── resources/
│   ├── hero-bg.jpg
│   ├── profile.jpg
│   ├── energy-hub.jpg
│   └── ...
├── README.md
├── DEPLOYMENT_GUIDE.md
├── package.json
├── .nojekyll
└── .github/
    └── workflows/
        └── deploy.yml
```

### Branch Protection (Optional)

For production sites, consider setting up branch protection:

1. Go to Settings > Branches
2. Add rule for `main` branch
3. Enable "Require a pull request before merging"
4. Enable "Require status checks to pass"

### Monitoring

- **Actions tab**: Monitor deployment status
- **Pages settings**: Check deployment URL and status
- **Insights > Traffic**: View website analytics (for public repos)

### Support

If you encounter issues:

1. Check [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review [GitHub Actions documentation](https://docs.github.com/en/actions)
3. Check the [GitHub Community Forum](https://github.community/)

## Success Checklist

- [ ] Repository created and files uploaded
- [ ] GitHub Pages enabled with GitHub Actions
- [ ] First deployment successful
- [ ] All pages loading correctly
- [ ] Images and assets loading properly
- [ ] Interactive elements working
- [ ] Mobile responsiveness verified
- [ ] Custom domain configured (if applicable)

## Next Steps

After successful deployment:

1. Update your social media profiles with the new website URL
2. Add the website to your LinkedIn profile
3. Include the URL in your email signature
4. Share with your professional network
5. Continue updating content and projects

---

**Good luck with your deployment! 🚀**