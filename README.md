# NeuralHire: AI-Powered Recruitment Revolution

Welcome to **NeuralHire**, an intelligent multi-agent AI system designed to streamline and revolutionize your recruitment process. NeuralHire empowers companies to efficiently find the best talent, from intelligent job description analysis to precision candidate matching and automated interview scheduling.

## ✨ Key Features

NeuralHire automates and optimizes the entire candidate screening workflow, allowing your team to focus on strategic hiring decisions.

*   **Seamless Job Requisition Management** 📄
    *   Effortlessly upload and manage multiple job descriptions (JDs) through an intuitive interface.
    *   Import JDs directly from **CSV** files or **JSON** payloads, or add them manually.
    *   Maintain a centralized, comprehensive database of all your open positions.

*   **Intelligent JD Analysis** 🧠
    *   Our advanced AI engine automatically extracts critical information from verbose job descriptions.
    *   Identify key requirements, essential skills, qualifications, and responsibilities with high accuracy.
    *   Transform lengthy documents into structured data points that power our sophisticated matching algorithms.

*   **Precision Candidate Matching** 🎯
    *   Match the right talent to the right role with a powerful comparison engine.
    *   Analyze candidate resumes (PDFs supported!) against job requirements, generating comprehensive **match scores** based on skills, experience, and qualifications.
    *   Automatically identify top prospects, allowing you to focus your recruitment efforts where they matter most.

*   **Automated Interview Coordination** 📧
    *   Streamline the interview process with intelligent scheduling automation.
    *   Send personalized interview requests directly to shortlisted candidates.
    *   Manage calendar availability and send timely reminders, accelerating your time-to-hire metrics.

*   **Real-time Activity Logs** ✅
    *   Monitor all system activities, including job additions, deletions, and recruitment progress, through a dynamic log display.

---

## 📂 Directory Structure

```
└── 19doors-neuralhire/
    ├── README.md
    ├── components.json
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tsconfig.json
    ├── public/
    │   └── fonts/
    │       ├── FoundersGrotesk-Bold.woff2
    │       ├── FoundersGrotesk-BoldItalic.woff2
    │       ├── FoundersGrotesk-Light.woff2
    │       ├── FoundersGrotesk-LightItalic.woff2
    │       ├── FoundersGrotesk-Medium.woff2
    │       ├── FoundersGrotesk-MediumItalic.woff2
    │       ├── FoundersGrotesk-Regular.woff2
    │       ├── FoundersGrotesk-RegularItalic.woff2
    │       ├── FoundersGrotesk-Semibold.woff2
    │       ├── FoundersGrotesk-SemiboldItalic.woff2
    │       ├── FoundersGroteskCond-Lt.woff2
    │       ├── FoundersGroteskXCond-Bold.woff2
    │       └── FoundersGroteskXCond-Lt.woff2
    └── src/
        ├── app/
        │   ├── components.tsx
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── page.tsx
        │   ├── dashboard/
        │   │   ├── page.tsx
        │   │   └── table.tsx
        │   └── lib/
        │       └── actions.ts
        ├── components/
        │   ├── theme-provider.tsx
        │   └── ui/
        │       ├── accordion.tsx
        │       ├── alert-dialog.tsx
        │       ├── alert.tsx
        │       ├── aspect-ratio.tsx
        │       ├── avatar.tsx
        │       ├── badge.tsx
        │       ├── breadcrumb.tsx
        │       ├── button.tsx
        │       ├── calendar.tsx
        │       ├── card.tsx
        │       ├── carousel.tsx
        │       ├── chart.tsx
        │       ├── checkbox.tsx
        │       ├── collapsible.tsx
        │       ├── command.tsx
        │       ├── context-menu.tsx
        │       ├── dialog.tsx
        │       ├── drawer.tsx
        │       ├── dropdown-menu.tsx
        │       ├── form.tsx
        │       ├── hover-card.tsx
        │       ├── input-otp.tsx
        │       ├── input.tsx
        │       ├── label.tsx
        │       ├── menubar.tsx
        │       ├── navigation-menu.tsx
        │       ├── pagination.tsx
        │       ├── popover.tsx
        │       ├── progress.tsx
        │       ├── radio-group.tsx
        │       ├── resizable.tsx
        │       ├── scroll-area.tsx
        │       ├── select.tsx
        │       ├── separator.tsx
        │       ├── sheet.tsx
        │       ├── sidebar.tsx
        │       ├── skeleton.tsx
        │       ├── slider.tsx
        │       ├── sonner.tsx
        │       ├── switch.tsx
        │       ├── table.tsx
        │       ├── tabs.tsx
        │       ├── textarea.tsx
        │       ├── toggle-group.tsx
        │       ├── toggle.tsx
        │       └── tooltip.tsx
        ├── hooks/
        │   └── use-mobile.ts
        ├── lib/
        │   └── utils.ts
        └── store/
            └── store.ts
```

---

## 🛠️ Technologies Used

NeuralHire is built with a modern and robust technology stack, ensuring a fast, scalable, and user-friendly experience.

### Frontend
*   **▲ Next.js 15:** A powerful React framework for building performant web applications.
*   **⚛️ React 19:** For constructing dynamic and interactive user interfaces.
*   **🟦 TypeScript:** Ensures type safety and improves code quality and maintainability.
*   **💨 Tailwind CSS 4:** A utility-first CSS framework for rapid and responsive UI development.
*   **✨ shadcn/ui:** Beautifully designed and accessible UI components built on Radix UI primitives.
*   **🎬 Framer Motion:** For creating fluid and engaging animations throughout the application.
*   **🐻 Zustand:** A small, fast, and scalable state-management solution for React.
*   **📄 pdfjs-dist:** Utilized for efficient and accurate text extraction from PDF resumes.
*   **📤 react-dropzone:** Provides intuitive drag-and-drop file upload capabilities.
*   **💡 Lucide React:** A comprehensive collection of customizable open-source icons.
*   **🔔 Sonner:** For elegant and user-friendly toast notifications.
*   **🎨 Custom Fonts:** Incorporates Founders Grotesk, Space Grotesk, Inter, Barlow Condensed, and Fira Sans Condensed for a unique and professional aesthetic.
*   **🌗 next-themes:** Enables seamless dark mode integration for enhanced user experience.

### Backend (External API)
*   **🐍 Flask (Python):** NeuralHire communicates with a dedicated Flask backend API responsible for all AI processing, data storage, and email automation tasks.
*   **API Endpoint:** `http://13.233.146.66:5000` (Note: This is an external server; ensure it's operational or configure your own.)

---

## 🚀 Getting Started

Follow these steps to get NeuralHire up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

*   [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
*   A package manager: [npm](https://www.npmjs.com/get-npm) (comes with Node.js), [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/), [pnpm](https://pnpm.io/installation), or [Bun](https://bun.sh/docs/installation).

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/19doors/19doors-neuralhire.git
    cd 19doors-neuralhire
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the Development Server

1.  **Ensure the Backend API is accessible:**
    The application relies on an external Flask API server running at `http://13.233.146.66:5000`. Please ensure this server is operational or configure your own backend to match the API endpoints defined in `src/app/lib/actions.ts`.

2.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

3.  **Access the application:**

    Open [http://localhost:3000](http://localhost:3000) in your web browser. The page will auto-update as you make edits to the files within `src/app/`.

---

## 🧑‍💻 Usage Guide

NeuralHire offers a streamlined workflow for managing job requisitions and candidate screening:

1.  **Navigate to the Dashboard:**
    *   From the home page, click on the "See NeuralHire in Action" button, or directly access the dashboard at `/dashboard`.

2.  **Add Job Descriptions:**
    *   On the dashboard, click the **"Add Job"** button.
    *   You have two options for input:
        *   **CSV:** Provide a comma-separated list of job titles and descriptions (e.g., `Job Title,Job Description`).
        *   **JSON:** Input job details in a structured JSON array format (e.g., `[{"jobTitle": "...", "jobDescr": "..."}]`).
    *   The system will process and store these job descriptions.

3.  **Manage Existing Jobs:**
    *   All your added job summaries will be displayed in the table on the left side of the dashboard.
    *   Click on any job entry in the table to view its comprehensive details (title, description, educational qualifications, required experience, responsibilities, and key skills) in a slide-out panel.
    *   To remove a job, click the **"Remove Job"** button and enter the corresponding `JobID`.

4.  **Initiate Candidate Recruitment:**
    *   Select a job from the table to open its detailed view in the side panel.
    *   Click on **"Begin Recruitment"**.
    *   **Upload Candidate CVs:** Drag and drop or select PDF or plain text files containing candidate resumes. The system will automatically extract relevant text for analysis.
    *   **Set Match Score:** Specify a minimum match score threshold. Only candidates whose profiles meet or exceed this score will be shortlisted.
    *   **Shortlist:** Click "Shortlist" to initiate the AI-powered matching process. The system will then identify and present a list of suitable candidates.
    *   **Automated Interview Email:** Following shortlisting, you will see the emails of the shortlisted candidates. You can then compose and send personalized interview invitation emails directly from the application, using your recruiting email credentials.
