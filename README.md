# Freshline Cuts

Static site for `freshlinecuts.com`.

## Publish to GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Confirm the custom domain is `freshlinecuts.com`.
6. In your DNS provider, point:
   - `A` records for `freshlinecuts.com` to GitHub Pages IPs
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   - `CNAME` for `www` to `<your-github-username>.github.io`

After DNS propagates, enable HTTPS in GitHub Pages settings.
