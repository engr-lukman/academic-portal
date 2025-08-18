# EduPortal - Schools Website Template

A modern, responsive school website portal built with Nuxt.js 4 and Tailwind CSS v4. This template provides a complete foundation for educational institutions to showcase their programs, facilitate admissions, and connect with their community.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for educational institutions
- **Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Fast Performance**: Built with Nuxt.js 4 for optimal loading speeds and SEO
- **Tailwind CSS v4**: Latest version of Tailwind CSS for modern utility-first styling
- **Accessible**: WCAG compliant design with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and optimized images
- **Icon Integration**: Comprehensive icon library with Phosphor icons
- **Image Optimization**: Built-in image optimization with Nuxt Image
- **Font Management**: Optimized web fonts with Nuxt Fonts
- **ESLint Integration**: Code quality and consistency enforcement

## 📋 Pages Included

- **Homepage**: Hero section, features, programs, news, and call-to-action
- **About Us**: Mission, vision, history, and statistics
- **Admissions**: Application process, requirements, deadlines, and financial aid
- **Contact**: Contact form, location details, and social media links
- **Programs**: Elementary, Middle School, and High School information
- **News & Events**: Latest updates and school activities

## 🛠 Technology Stack

- **Framework**: Nuxt.js 4
- **Styling**: Tailwind CSS v4
- **Icons**: Nuxt Icon (Phosphor Icons)
- **Images**: Nuxt Image
- **Fonts**: Nuxt Fonts
- **Code Quality**: ESLint with Nuxt configuration

## 📦 Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 🚀 Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## 🏗 Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

## 🎨 Customization

### Tailwind CSS Configuration
The project uses Tailwind CSS v4 with custom utility classes defined in `assets/css/main.css`. You can:

- Modify color schemes by updating CSS custom properties
- Add new utility classes for your school's branding
- Customize component styles in the CSS file

### Content Management
- Update school information in the Vue components
- Replace placeholder images in `public/images/`
- Modify contact details and social media links
- Customize program descriptions and requirements

### Branding
- Update the school name "EduPortal" throughout the codebase
- Replace the graduation cap icon with your school's logo
- Modify color schemes to match your brand colors
- Update fonts and typography as needed

## 📁 Project Structure

```
app/
├── components/
│   ├── AppFooter.vue     # Site footer with links and contact info
│   └── Header.vue        # Navigation header with responsive menu
├── pages/
│   ├── index.vue         # Homepage
│   ├── about.vue         # About page
│   ├── admissions.vue    # Admissions information
│   └── contact.vue       # Contact form and info
└── app.vue               # Root application component

assets/
└── css/
    └── main.css          # Tailwind CSS and custom styles

public/
└── images/               # Image assets and placeholders
```

## 🔧 Configuration Files

- `nuxt.config.ts` - Nuxt.js configuration with modules and Tailwind setup
- `tailwind.config.js` - Tailwind CSS configuration (auto-generated)
- `eslint.config.mjs` - ESLint rules and configuration
- `package.json` - Dependencies and scripts

## 📱 Responsive Design

The template is built with a mobile-first approach:

- **Mobile**: Optimized for phones and small screens
- **Tablet**: Adapted layouts for medium screens  
- **Desktop**: Full-featured layouts for large screens
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Deployment

The site can be deployed to various platforms:

- **Vercel**: Push to GitHub and connect to Vercel
- **Netlify**: Deploy directly from Git repository
- **GitHub Pages**: Using GitHub Actions for static generation
- **Traditional Hosting**: Build and upload the `dist/` folder

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For questions or support regarding this template:

- Open an issue on GitHub
- Check the Nuxt.js documentation
- Review Tailwind CSS v4 documentation

## 🎯 Future Enhancements

Potential additions for future versions:

- Student portal login system
- Event calendar integration
- Online application system
- Payment gateway integration
- Multi-language support
- Blog/news management system
- Alumni portal
- Virtual campus tours
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
