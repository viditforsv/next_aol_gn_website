# Development Branch - Art of Living Great Noida Chapter

This is the **development branch** for the Art of Living Great Noida Chapter website.

## 🚧 Development Environment

This branch contains:
- Development-specific features and testing
- Experimental components
- Development banner to distinguish from production
- Preview deployments to Vercel

## 🚀 Development Deployment

### Deploy to Vercel Preview Environment

```bash
# Deploy to preview environment
npm run deploy:dev

# Or using Vercel CLI directly
vercel --target preview
```

### Development Workflow

1. **Make changes** on the `dev` branch
2. **Test locally** with `npm run dev`
3. **Deploy to preview** with `npm run deploy:dev`
4. **Review** the preview deployment
5. **Merge to main** when ready for production

## 🔄 Branch Management

- **`main`** - Production branch (stable releases)
- **`dev`** - Development branch (experimental features)

## 📝 Development Notes

- The development environment includes a yellow banner to distinguish it from production
- Preview deployments are automatically created for each commit
- Use this branch for testing new features before merging to main

---

**Note**: This is a development environment. For production deployment, use the `main` branch.
