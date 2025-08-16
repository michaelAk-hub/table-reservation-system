# Deployment Guide for Hostinger Cloud Startup Plan

## 🚀 Deploying to fpkelectoportal.site

### Step 1: Prepare Your Hostinger Environment

1. **Access your Hostinger control panel**
   - Login to your Hostinger account
   - Navigate to your domain: fpkelectoportal.site

2. **Set up Node.js Environment**
   - Go to "Advanced" → "Node.js"
   - Select Node.js version 18 or higher
   - Set the startup file to `server.js`

### Step 2: Database Setup

1. **Access phpMyAdmin**
   - Go to "Databases" → "phpMyAdmin"
   - Your database is already created: `u248123895_sitting`
   - The system will auto-create tables on first API call

2. **Verify Database Connection**
   - Host: `localhost`
   - Username: `u248123895_fpkucy`
   - Password: `k2w7oRsRpV!`
   - Database: `u248123895_sitting`

### Step 3: Upload Project Files

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Upload these files to your Hostinger file manager**:
   ```
   /public_html/
   ├── .next/                 # Built application
   ├── public/               # Static assets
   ├── src/                  # Source code
   ├── node_modules/         # Dependencies (or install on server)
   ├── package.json
   ├── package-lock.json
   ├── next.config.ts
   ├── tsconfig.json
   ├── tailwind.config.ts
   ├── postcss.config.mjs
   ├── components.json
   └── .env.local           # Environment variables
   ```

### Step 4: Environment Variables Setup

Create `.env.local` in your root directory with:
```env
# Database Configuration
DB_HOST=localhost
DB_USER=u248123895_fpkucy
DB_PASSWORD=k2w7oRsRpV!
DB_NAME=u248123895_sitting

# Seats.io Configuration
SEATS_IO_CHART_KEY=1d051fda-7110-7d66-8010-890c9c478951

# Production Configuration
NEXT_PUBLIC_APP_URL=https://fpkelectoportal.site
NODE_ENV=production
```

### Step 5: Install Dependencies

1. **Via Hostinger Terminal** (if available):
   ```bash
   cd /public_html
   npm install --production
   ```

2. **Or upload node_modules** from your local build

### Step 6: Configure Server

Create `server.js` in your root directory:
```javascript
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = process.env.PORT || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})
```

### Step 7: Domain Configuration

1. **Point domain to your hosting**
   - Ensure fpkelectoportal.site points to your Hostinger server
   - Configure SSL certificate (usually automatic with Hostinger)

2. **Update DNS if needed**
   - A record: fpkelectoportal.site → Your server IP
   - CNAME: www.fpkelectoportal.site → fpkelectoportal.site

### Step 8: Start the Application

1. **Via Hostinger Node.js Manager**:
   - Set startup file: `server.js`
   - Click "Start Application"

2. **Or via terminal**:
   ```bash
   npm start
   ```

### Step 9: Verify Deployment

Visit these URLs to test:
- https://fpkelectoportal.site (Homepage)
- https://fpkelectoportal.site/dashboard (Dashboard)
- https://fpkelectoportal.site/reservation (Reservation page)
- https://fpkelectoportal.site/host (Host management)

### Step 10: Initialize Database

1. **First visit will create tables automatically**
2. **Or manually run database initialization**:
   - Access any API endpoint to trigger table creation
   - Check phpMyAdmin to verify tables are created

## 🔧 Troubleshooting

### Common Issues:

1. **Database Connection Error**
   - Verify credentials in .env.local
   - Check if database exists in phpMyAdmin
   - Ensure MySQL service is running

2. **Node.js Version Issues**
   - Use Node.js 18+ in Hostinger control panel
   - Check package.json engines field

3. **File Permissions**
   - Ensure proper file permissions (755 for directories, 644 for files)
   - Check .env.local is readable

4. **SSL Certificate**
   - Enable SSL in Hostinger control panel
   - Update all HTTP references to HTTPS

### Performance Optimization:

1. **Enable Gzip Compression**
2. **Configure Caching Headers**
3. **Optimize Images and Assets**
4. **Use CDN if needed**

## 📞 Support

If you encounter issues:
1. Check Hostinger error logs
2. Verify all environment variables
3. Test database connection in phpMyAdmin
4. Contact Hostinger support for server-specific issues

---

**Your table reservation system is now ready for production at fpkelectoportal.site!**
