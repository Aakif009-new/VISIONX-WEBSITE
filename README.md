# <p align="center"><img src="./public/favicon.ico" width="40" height="40" alt="VisionX Logo" /> <br/>VisionX</p>

<p align="center">
  <strong>See Beyond. Build the Future.</strong>
</p>

<p align="center">
  A premium, high-performance web platform for <strong>VisionX</strong>—a student-led innovation, technology, and startup community ecosystem. Built on a cutting-edge stack utilizing Next.js, React 19, Prisma, Tailwind CSS v4, and featuring full Google Sheets synchronization.
</p>

<p align="center">
  <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-16.2.9-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  </a>
  <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://www.prisma.io">
    <img src="https://img.shields.io/badge/Prisma-6.6.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  </a>
  <a href="https://www.postgresql.org">
    <img src="https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </a>
</p>

---

## 📌 Table of Contents

- [📖 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Folder Structure](#-folder-structure)
- [📸 Screenshots](#-screenshots)
- [⚙️ Installation & Local Setup](#️-installation--local-setup)
- [🔐 Environment Variables](#-environment-variables)
- [🏗️ System Architecture](#️-system-architecture)
- [🔌 API Reference](#-api-reference)
- [🗄️ Database Schema](#️-database-schema)
- [🎛️ CMS & Admin Controls](#️-cms--admin-controls)
- [🚀 Deployment](#-deployment)
- [🛡️ Security Implementations](#️-security-implementations)
- [🗺️ Future Roadmap](#️-future-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact & Community](#-contact--community)

---

## 📖 Overview

**VisionX** is the official digital hub for a student-driven technology and startup ecosystem. The website serves as a collaborative incubator, community showcase, and resource hub for student inventors, developers, and aspiring entrepreneurs. 

Many student organizations struggle with fragmented platforms—using Google Forms for applications, separate tools for email, external platforms for blogs, and manual tracking spreadsheets. **VisionX** addresses these challenges by consolidating core operations into a unified platform:
*   **Decentralized Operations:** Public website, custom content management system (CMS), application screening, and event tracker inside a single workspace.
*   **Dual-Write Sync Engine:** Submissions write to a secure relational database and automatically synchronize to Google Sheets in real-time, enabling administrative ease without forcing staff into direct database interfaces.
*   **High-Fidelity Aesthetics:** Implements a premium, responsive glassmorphic dark-theme UI designed to engage tech-savvy developers and startup recruiters alike.

---

## ✨ Key Features

### 🌌 User Experience & Public Facing
*   **Interactive Landing Page:** Embedded with a dynamic particle background, neon glow accent indicators, card components utilizing backdrop blurs, and animated numbers showcasing community impact.
*   **About & Interactive Timeline:** A clean timeline detailing the history, core values, mission, and vision of the community.
*   **Dynamic Team Showcase:** Cards displaying organizational leaders and council members with custom positions and rich descriptions.
*   **Workshop & Bootcamps Hub:** Listing portal showcasing active/concluded events with dynamic seat counts, date tags, and integrated registration prompts.
*   **Content-Rich Blog System:** Categorized, easily-readable technical and startup-focused articles written by the community.

### 📝 Operations & Integrations
*   **Workshop Registration System:** Validated forms for seat reservation, automatically managing capacity restrictions and syncing details.
*   **Membership Onboarding Portal:** Seamless application form parsing candidate skills, motivations, and departmental interests.
*   **Incubation Application Portal:** Startup registration portal collecting target audience, problem statement, and requirements of aspiring student founders.
*   **Google Sheets Synchronization:** Real-time data pipeline mapping database models to external Google Sheets for quick administrative lookups.

### 🎛️ Administrative Ecosystem
*   **Secured Admin Dashboard:** Analytical summary panels showing total registrations, active membership requests, blog counts, and incoming queries.
*   **Integrated CMS:** Web-based control tables allowing full CRUD operations for workshops, team members, blog posts, and site configurations.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | [Next.js v16.2](https://nextjs.org) | App Router architecture, Static Site Generation (SSG) & Server-Side Rendering (SSR) |
| **User Interface Library** | [React v19.2](https://react.dev) | Modern component architecture, optimized state hooks |
| **Styles & Layout** | [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling utilizing CSS-variables and container queries |
| **Transitions & Physics** | [Framer Motion](https://www.framer.com/motion/) | Fluid scroll reveals, spring animations, and micro-interactions |
| **Icons & Typography** | [Lucide React](https://lucide.dev) / Google Fonts | Vector iconography with custom fonts (Orbitron, Inter, Space Grotesk) |
| **Backend / API** | Next.js API Routes | Node.js Serverless route handlers for secure server operations |
| **Database Engine** | [PostgreSQL](https://www.postgresql.org) / SQLite | High-performance relational data persistence |
| **Database ORM** | [Prisma v6.6](https://www.prisma.io) | Type-safe schema definitions, seeding, migrations, and query generation |
| **Third-Party APIs** | Google Sheets API v4 | Real-time dual-write synchronization using Google Service Accounts |
| **Validation Layer** | [Zod v3.24](https://github.com/colinhacks/zod) | Schema-based backend API validation & client-side validation |
| **Security / Auth** | JWT & `bcryptjs` | JSON Web Token authorization cookies and secure password hashing |

---

## 📂 Folder Structure

The project maintains a separation of concerns, separating frontend rendering, static configurations, data seeds, and API route logic.

```
visionx-website/
├── .env.example             # Configuration template for environmental credentials
├── docker-compose.yml       # Multi-container orchestration setting up PostgreSQL locally
├── package.json             # Core scripts, tooling configurations, and packages
├── prisma/                  # Schema configuration and database setup scripts
│   ├── schema.prisma        # Relation structures, constraints, and indexes
│   └── seed.ts              # Seeding script initializing site configurations & founder team
├── public/                  # Core static files, logos, and team headshots
├── src/                     # Primary application code
│   ├── app/                 # Next.js App Router directories and views
│   │   ├── layout.tsx       # Root document structure, fonts, and HTML wrappers
│   │   ├── page.tsx         # Interactive Home/Landing page
│   │   ├── api/             # Serverless backend route controllers
│   │   │   ├── admin/       # Auth, dashboard aggregation, upload and CRUD APIs
│   │   │   ├── blogs/       # Blog endpoints
│   │   │   ├── contact/     # Form submittals syncing to DB & Sheets
│   │   │   ├── incubation/  # Incubation parsing & Sheets sync
│   │   │   ├── join-visionx/# Member registration endpoint
│   │   │   └── workshops/   # Event listings & registration tracking
│   │   ├── admin/           # Secured administrative interfaces (Dashboard, Blog, Settings)
│   │   ├── blog/            # Public blog system list and article viewer
│   │   └── workshops/       # Interactive workshop index and registration flow
│   ├── components/          # Reusable presentation and interaction components
│   │   ├── ParticleBackground.tsx # Canvas-based interactive floating particles
│   │   ├── GlassCard.tsx    # Styled glassmorphic background layer
│   │   └── ...              # Reusable team, contact, blog, and form cards
│   ├── data/                # Secondary static information backups
│   └── lib/                 # Core functional utilities and external integrations
│       ├── auth.ts          # JSON Web Token creation and verification helper
│       ├── prisma.ts        # Singletone Prisma client exporter
│       ├── sheets.ts        # JWT Google Sheets Service Account initializer
│       └── utils.ts         # Style merge and animation utility wrappers
```

---

## 📸 Screenshots

To give visual context of the VisionX platform, here are placeholders showcasing the glassmorphic dark theme and layouts:

<div align="center">
  <table border="0">
    <tr>
      <td width="50%" align="center">
        <strong>🌌 Home Landing Page</strong>
        <br/>
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" width="100%" alt="Home Landing Screenshot" style="border-radius: 8px;" />
        <br/>
        <em>Particle backgrounds, impact statistics, and key initiatives.</em>
      </td>
      <td width="50%" align="center">
        <strong>⚙️ CMS & Admin Dashboard</strong>
        <br/>
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" width="100%" alt="Admin Dashboard Screenshot" style="border-radius: 8px;" />
        <br/>
        <em>Workshop participant lookups, applicant lists, and CMS edits.</em>
      </td>
    </tr>
    <tr>
      <td width="50%" align="center">
        <strong>📅 Workshops & Event Registration</strong>
        <br/>
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" width="100%" alt="Workshops Page Screenshot" style="border-radius: 8px;" />
        <br/>
        <em>Event descriptions, live seat limits, and validation forms.</em>
      </td>
      <td width="50%" align="center">
        <strong>📰 Community Blog & Articles</strong>
        <br/>
        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80" width="100%" alt="Blog Screenshot" style="border-radius: 8px;" />
        <br/>
        <em>Rich articles written by members, tags, and search filters.</em>
      </td>
    </tr>
    <tr>
      <td width="50%" align="center">
        <strong>👥 Core Team & Council Members</strong>
        <br/>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" width="100%" alt="Team Page Screenshot" style="border-radius: 8px;" />
        <br/>
        <em>Grid of team cards with animated 3D hover effects.</em>
      </td>
      <td width="50%" align="center">
        <strong>📱 Responsive Mobile Layout</strong>
        <br/>
        <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" width="45%" alt="Mobile View Screenshot" style="border-radius: 8px;" />
        <br/>
        <em>Optimized side drawer menu and scroll-reveal cards.</em>
      </td>
    </tr>
  </table>
</div>

---

## ⚙️ Installation & Local Setup

Get the development environment configured locally by following these steps:

### 1. Prerequisites
Ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (Version >= 20.9.0)
*   [Docker](https://www.docker.com/) (For launching the PostgreSQL container)

### 2. Clone the Repository
```bash
git clone https://github.com/YOUR_ORGANIZATION/visionx-website.git
cd visionx-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Database Setup (Choose Option A or B)

#### Option A: Running a local PostgreSQL instance with Docker (Recommended)
Launch the containerized PostgreSQL database using docker-compose:
```bash
docker-compose up -d
```
*This starts a database on `localhost:5432` with username `postgres`, password `password`, and database `visionx`.*

#### Option B: Utilizing SQLite for quick local development
If you do not want to use Docker, edit the `prisma/schema.prisma` file:
```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```
*(Remember to update the datasource provider inside `schema.prisma` and remove incompatibilities if they appear.)*

### 5. Environment Settings
Create a `.env` file in the root directory by copying the example template:
```bash
cp .env.example .env
```
Update the credentials, JWT secrets, and Google service account JSON parameters. Detailed instructions are available in the [Environment Variables](#-environment-variables) section.

### 6. Apply Migrations & Generate Prisma Client
Sync the database schemas:
```bash
# Generate the Prisma Client
npm run db:generate

# Apply migrations to push schemas to the database
npm run db:push
```

### 7. Seed Sample Data
Initialize the database with default settings, an administrator profile (`admin@visionx.com` / `admin123`), and team listings:
```bash
npm run db:seed
```

### 8. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser.

---

## 🔐 Environment Variables

Create a `.env` file in the project's root folder matching the following model. Make sure not to commit this file to version control.

```env
# Relational Database connection URL (PostgreSQL Connection String)
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="postgresql://postgres:password@localhost:5432/visionx"

# Authentication Token Key (Generate a secure random string)
JWT_SECRET="YOUR_RANDOM_LONG_SECRET_KEY_HERE"

# Google Service Account Credentials (For sheets dual-write functionality)
GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account-email@your-project-id.iam.gserviceaccount.com"

# Private key must preserve newline markings. Wrap inside double quotes if using multi-line configs.
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBg...YOUR_KEY...\n-----END PRIVATE KEY-----\n"

# JSON mapping of sheet resource identifiers to automate data routing
GOOGLE_SHEET_IDS='{
  "workshop_registrations": "YOUR_WORKSHOP_SHEET_ID_HERE",
  "incubation_applications": "YOUR_INCUBATION_SHEET_ID_HERE",
  "contact_messages": "YOUR_CONTACT_SHEET_ID_HERE",
  "member_applications": "YOUR_MEMBERSHIP_SHEET_ID_HERE"
}'
```

---

## 🏗️ System Architecture

The following diagram illustrates how user interactions, API endpoints, the Prisma ORM layer, and real-time Google Sheets integrations connect:

```mermaid
graph TD
    %% User Interfaces
    subgraph UI ["Client Layer (React 19 / Next.js)"]
        Landing["Landing Page / Info"]
        Workshops["Workshops Index"]
        Forms["Registrations & Applications"]
        AdminUI["Admin Dashboard & CMS"]
    end

    %% Backend System
    subgraph Backend ["Next.js Serverless Backend (App Router)"]
        PublicAPI["/api/workshops, /api/blogs"]
        FormAPI["/api/contact, /api/incubation, /api/join-visionx"]
        AdminAPI["/api/admin/* (CRUD Controllers)"]
        JWT["JWT Auth Middleware"]
        SheetsClient["Google Sheets Sync Client"]
    end

    %% Database & External Integrations
    subgraph Databases ["Data & Integrations Layer"]
        Prisma["Prisma ORM"]
        Postgres["PostgreSQL / SQLite Database"]
        GoogleSheets["Google Sheets Spreadsheets API"]
    end

    %% Connection Flows
    Landing --> PublicAPI
    Workshops --> PublicAPI
    Forms --> FormAPI
    AdminUI --> JWT
    JWT --> AdminAPI
    
    PublicAPI --> Prisma
    AdminAPI --> Prisma
    FormAPI --> Prisma
    
    FormAPI --> SheetsClient
    SheetsClient -->|Real-Time API Sync| GoogleSheets
    Prisma --> Postgres
    
    %% Styling
    classDef client fill:#001F3F,stroke:#00A3FF,stroke-width:2px,color:#fff;
    classDef server fill:#1C1C1C,stroke:#3BB8FF,stroke-width:2px,color:#fff;
    classDef data fill:#0F2C18,stroke:#2ECC71,stroke-width:2px,color:#fff;
    
    class Landing,Workshops,Forms,AdminUI client;
    class PublicAPI,FormAPI,AdminAPI,JWT,SheetsClient server;
    class Prisma,Postgres,GoogleSheets data;
```

---

## 🔌 API Reference

### Public Endpoints
| HTTP Method | Route | Description | Request Body / Schema |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/workshops` | Fetches active/upcoming workshops | None |
| **GET** | `/api/blogs` | Retrieves blog posts | Query: `?status=published` |
| **POST** | `/api/contact` | Submits contact query, syncs to DB & Google Sheets | `name`, `email`, `message` |
| **POST** | `/api/incubation` | Submits startup incubation project form | `full_name`, `college_name`, `startup_name`, `problem_statement`, `target_audience`, `startup_stage`, `support_needed` |
| **POST** | `/api/join-visionx` | Submits member registration requests | `full_name`, `college_name`, `department`, `year_of_study`, `role_interested`, `why_join`, `relevant_experience` |

### Administrative & CRUD Endpoints (Protected via Authorization Tokens)
| HTTP Method | Route | Description | Request Headers / Body |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/admin/login` | Logins admin, sends JWT HttpOnly cookie | `email`, `password` |
| **GET** | `/api/admin/dashboard` | Aggregates database metric count summaries | Cookie: `token` |
| **POST** | `/api/admin/workshops` | Creates a new workshop page entry | Cookie: `token` / `title`, `description`, `venue`, `event_date`, `event_time`, `max_seats` |
| **PUT** | `/api/admin/workshops` | Updates workshop values | Cookie: `token` / Workshop parameters + `id` |
| **DELETE** | `/api/admin/workshops` | Removes workshop from DB | Cookie: `token` / Query: `?id=...` |
| **GET** | `/api/admin/workshop-registrations` | Fetches participant lists of a specific workshop | Cookie: `token` / Query: `?workshopId=...` |

---

## 🗄️ Database Schema

VisionX uses standard relational schema models mapped with Prisma. Open the details toggles below to view details of our models:

<details>
<summary>🔑 Authentication & Administrative Settings</summary>

*   **`admin_users`**
    *   `id`: UUID string (Primary Key)
    *   `email`: unique String (Used for dashboard logins)
    *   `password`: Hashed String
    *   `name`: Display Name String
    *   `role`: String (e.g. `super_admin`, `content_admin`)
    *   `created_at`/`updated_at`: Timestamps

*   **`site_settings`** (Dynamic page content store)
    *   `id`: UUID string (Primary Key)
    *   `key`: unique String
    *   `value`: JSON/String configuration text

</details>

<details>
<summary>📅 Workshop & Event Models</summary>

*   **`workshops`**
    *   `id`: UUID string (Primary Key)
    *   `title`: Event Title String
    *   `description`: Large text String
    *   `banner_image`: Public image path String
    *   `venue`: Location String
    *   `event_date`: Date String
    *   `event_time`: Time String
    *   `registration_open`: Boolean Flag
    *   `max_seats`: Integer Limit
    *   `google_form_url`: Redirect URL (Fallback option)
    *   `price`: Optional String fee details
    *   `category`: String (Default: `"Workshop"`)
    *   `registrations`: Relation mapping back to `workshop_registrations`

*   **`workshop_registrations`**
    *   `id`: UUID string (Primary Key)
    *   `full_name`: Attendee name String
    *   `email`: Email address String
    *   `phone`: Mobile contact String
    *   `college_name`/`department`/`year_of_study`: Educational demographics
    *   `workshop_id`: Foreign key reference to `workshops`
    *   `additional_notes`: Text String

</details>

<details>
<summary>📝 Applications & Communications</summary>

*   **`incubation_applications`** (Startup submissions)
    *   `id`: UUID string (Primary Key)
    *   `full_name`: Candidate Lead Name
    *   `college_name`: College details
    *   `startup_name`: Proposed company name
    *   `problem_statement`: Focus gap description
    *   `target_audience`: Customer demographic details
    *   `startup_stage`: Stage validation (Ideation, MVP, Scale)
    *   `support_needed`: Services needed (Mentoring, Office Space, Funding)
    *   `status`: Application state string (Default: `"New"`)

*   **`visionx_member_applications`** (Community candidates)
    *   `id`: UUID string
    *   `full_name`: Applicant details
    *   `college_name`/`department`/`year_of_study`: Demographics
    *   `role_interested`: Preferred work role
    *   `why_join`/`relevant_experience`: Explanatory evaluation texts
    *   `status`: Pending approval tracking state (Default: `"Pending"`)

*   **`contact_messages`**
    *   `id`: UUID string
    *   `name`/`email`/`message`: Text parameters of incoming queries

</details>

<details>
<summary>👥 Community Showcase Models</summary>

*   **`team_members`**
    *   `id`: UUID string
    *   `name`: Professional name String
    *   `role`: Group designation String
    *   `description`: Description profile String
    *   `image`: profile image directory URL String
    *   `council`: Boolean indicator (Separates high-level council cards)
    *   `object_position`: Image positioning instructions

*   **`blog_posts`**
    *   `id`: UUID string
    *   `title`/`slug`: SEO friendly lookup fields
    *   `excerpt`/`content`: Markdown content fields
    *   `category`/`author`/`image`: Editorial markers
    *   `status`: `"draft"` or `"published"`
    *   `published_at`: Date tracking

</details>

---

## 🎛️ CMS & Admin Controls

The integrated Content Management System (CMS) simplifies site updates for non-developers. Authenticated administrators can manage the following sections through a clean visual interface:

### 1. Workshop & Event Administration
*   Create new workshops by filling out title, description, venue, and seat limits.
*   Toggle registration visibility with a simple status switch.
*   View lists of registered students, export lists, or search for specific participants.

### 2. Member Screening Portals
*   View tables containing applications for startup incubation and membership.
*   Update evaluation statuses (`New`, `Reviewed`, `Approved`, `Rejected`) to organize candidate lists.

### 3. Editorial Blog Publisher
*   Compose detailed blog posts using a visual text editor.
*   Upload cover images, write descriptions, assign categories, and toggle status between `Draft` and `Published`.

### 4. Core Site Customizer
*   Modify configurations like taglines, social handles, email endpoints, and statistics cards directly in the settings page. Changes update the layout instantly.

---

## 🚀 Deployment

### Deploying to Vercel (Frontend & Serverless Endpoints)
1. Import your cloned GitHub repository into your Vercel Dashboard.
2. In the project setup panel, define all variables listed in the [.env configuration](#-environment-variables) inside Vercel's Environment Variables section.
3. Configure the build commands if necessary (Vercel automatically detects Next.js configurations).
4. Deploy.

### Deploying to Render or Railway (Database & Service Layer)
Railway supports rapid Next.js deployments including Prisma hooks using Nixpacks.
1. Connect your GitHub repository to Railway.
2. Under configurations, add a PostgreSQL database plugin or supply an external database URL.
3. Railway imports the settings from `railway.json`:
    *   **Build command:** `npm run db:generate && npm run build`
    *   **Deploy command:** `npm run db:push && npm run db:seed && npm start`
4. Set the necessary environment variables (`DATABASE_URL`, `JWT_SECRET`, etc.).
5. Check `/api/health` to verify that deployment succeeded and the health checks pass.

---

## 🛡️ Security Implementations

*   **Zod Input Validation:** All API endpoints validate incoming requests on the server using Zod schemas. This blocks malicious payloads, SQL insertion attempts, and incorrect data types before they hit the database.
*   **Password Cryptography:** Administrator credentials are encrypted using `bcryptjs` with 12 salt rounds, protecting against dictionary and rainbow table attacks.
*   **JSON Web Token Security:** JWT cookies are flagged as `HttpOnly`, `Secure`, and `SameSite=Strict`, blocking scripts (XSS) from reading user authentication tokens.
*   **Parameterized Queries:** Prisma ORM automatically parameterizes all SQL queries, neutralizing SQL injection vectors.
*   **Environment Encapsulation:** Google service accounts credentials and secret keys are stored exclusively as server environment variables, preventing client-side exposure.

---

## 🗺️ Future Roadmap

*   [ ] **Payment Gateway Integration:** Secure payment options for paid bootcamps and premium workshops.
*   [ ] **Email & PDF Automation:** Automatic generation and delivery of registration confirmations and participation certificates.
*   [ ] **Notification Integrations:** Automated WhatsApp and Discord notification alerts for upcoming event registrations.
*   [ ] **AI Mentorship Chatbot:** An embedded agent to answer questions about incubation and help students draft applications.
*   [ ] **Engagement Analytics:** Interactive admin charts displaying registration curves, visitor numbers, and blog page views.
*   [ ] **PostgreSQL Clustering:** Transition settings to replicas as transaction traffic grows.

---

## 🤝 Contributing

We welcome contributions from developers, designers, and writers in the VisionX community!

1. **Fork** this repository.
2. Create a feature branch: `git checkout -b feature/your-awesome-feature`.
3. Commit your modifications: `git commit -m "feat: add user profile section"`.
4. Push to your branch: `git push origin feature/your-awesome-feature`.
5. Open a **Pull Request** detailing your changes.

Make sure your edits pass standard lint checks (`npm run lint`) and align with the existing project structure.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## 📞 Contact & Community

Get in touch with the VisionX coordination team for feedback, collaborations, or questions:

*   **📧 Official Email:** [visionx.official.org@gmail.com](mailto:visionx.official.org@gmail.com)
*   **💼 LinkedIn:** [VisionX Community](https://linkedin.com/company/visionxcommunity)
*   **📸 Instagram:** [@visionx.official_](https://instagram.com/visionx.official_)

---
<p align="center">
  Made with 💙 by the <strong>VisionX Tech Team</strong>
</p>
