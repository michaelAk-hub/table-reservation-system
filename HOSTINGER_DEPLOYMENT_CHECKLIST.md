# 🚀 Hostinger Deployment Checklist for fpkelectoportal.site

## ✅ Pre-Deployment Checklist

### 1. Files Ready for Upload
- [x] Built project (npm run build completed)
- [x] Production server.js file created
- [x] Environment variables configured for fpkelectoportal.site
- [x] Database credentials set for Hostinger MySQL
- [x] Package.json updated with production scripts

### 2. Required Files to Upload to Hostinger

```
📁 Upload to /public_html/ or your domain folder:
├── 📁 .next/                    # Built application (after npm run build)
├── 📁 public/                   # Static assets
├── 📁 src/                      # Source code
├── 📁 node_modules/             # Dependencies (install on server)
├── 📄 package.json              # Dependencies list
├── 📄 package-lock.json         # Lock file
├── 📄 server.js                 # Production server
├── 📄 next.config.ts            # Next.js config
├── 📄 tsconfig.json             # TypeScript config
├── 📄 tailwind.config.ts        # Tailwind config
├── 📄 postcss.config.mjs        # PostCSS config
├── 📄 components.json           # UI components config
└── 📄 .env.local                # Environment variables
```

## 🔧 Hostinger Setup Steps

### Step 1: Access Hostinger Control Panel
1. Login to your Hostinger account
2. Navigate to your website: fpkelectoportal.site
3. Go to "File Manager" or use FTP

### Step 2: Upload Project Files
1. **Option A: File Manager**
   - Compress your project folder locally
   - Upload the zip file to /public_html/
   - Extract the files

2. **Option B: FTP/SFTP**
   - Use FileZilla or similar FTP client
   - Upload all files to your domain directory

### Step 3: Configure Node.js
1. Go to "Advanced" → "Node.js" in Hostinger panel
2. Select Node.js version 18 or higher
3. Set startup file: `server.js`
4. Set working directory to your project folder

### Step 4: Install Dependencies
```bash
# In Hostinger terminal or via SSH:
cd /public_html/your-project-folder
npm install --production
```

### Step 5: Environment Variables
Ensure `.env.local` contains:
```env
DB_HOST=localhost
DB_USER=u248123895_fpkucy
DB_PASSWORD=k2w7oRsRpV!
DB_NAME=u248123895_sitting
SEATS_IO_CHART_KEY=1d051fda-7110-7d66-8010-890c9c478951
NEXT_PUBLIC_APP_URL=https://fpkelectoportal.site
NODE_ENV=production
```

### Step 6: Database Verification
1. Access phpMyAdmin from Hostinger panel
2. Verify database `u248123895_sitting` exists
3. Tables will be created automatically on first API call

### Step 7: Start Application
1. In Node.js manager, click "Start Application"
2. Or via terminal: `npm run production`

## 🧪 Testing Your Deployment

### Test These URLs:
- ✅ https://fpkelectoportal.site (Homepage)
- ✅ https://fpkelectoportal.site/dashboard (Dashboard)
- ✅ https://fpkelectoportal.site/reservation (Guest reservations)
- ✅ https://fpkelectoportal.site/host (Host management)

### Test API Endpoints:
```bash
# Test schematic import
curl https://fpkelectoportal.site/api/seats/import

# Test authentication
curl -X POST https://fpkelectoportal.site/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"phone": "1234567890", "code": "ABC12"}'
```

## 🔍 Troubleshooting

### Common Issues & Solutions:

1. **"Application not starting"**
   - Check Node.js version (use 18+)
   - Verify server.js path is correct
   - Check error logs in Hostinger panel

2. **Database connection errors**
   - Verify .env.local credentials
   - Check if database exists in phpMyAdmin
   - Ensure MySQL service is running

3. **404 errors on pages**
   - Verify .next folder was uploaded
   - Check file permissions (755 for folders, 644 for files)
   - Ensure build completed successfully

4. **SSL/HTTPS issues**
   - Enable SSL in Hostinger control panel
   - Update all HTTP references to HTTPS
   - Check domain DNS settings

## 📊 System Features Available After Deployment

### For Administrators/Hosts:
- **Dashboard**: Import seating layouts, upload Excel files, manage public access
- **Host Panel**: View analytics, monitor reservations, quick actions

### For Guests:
- **Reservation System**: Phone + code authentication, interactive table selection

### API Features:
- **Authentication**: Phone number + 5-character code system
- **Reservations**: CRUD operations with real-time updates
- **File Upload**: Excel/CSV import with validation
- **Seating Management**: Interactive table layouts with color coding

## 🎯 Post-Deployment Tasks

1. **Test all user workflows**
2. **Import initial seating layout**
3. **Upload sample reservation data**
4. **Configure public/private access**
5. **Share reservation link with guests**

## 📞 Support

If you need help:
1. Check Hostinger error logs
2. Verify all environment variables
3. Test database connection
4. Contact Hostinger support for server issues

---

**🎉 Your Table Reservation System is ready for fpkelectoportal.site!**
