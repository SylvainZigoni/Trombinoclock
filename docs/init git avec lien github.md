# Initialisation d'un dépôt Git

```bash
# Dans mon terminal
git init
# Puis je commit ce que je souhaite
git add .
git commit -m "Initial commit"
```

## Branchement au dépôt distant (GitHub, GitLab, etc.)

```bash
# Je branche mon dépôt local au dépôt distant
git remote add origin <url_du_dépôt>
# Je pousse mes modifications
git push -u origin main
```
