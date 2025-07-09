# NeuralHire: AI-Powered Recruitment Revolution 🚀

Welcome to **NeuralHire**, an intelligent multi-agent AI system designed to streamline and revolutionize your recruitment process. From intelligent job description analysis to precision candidate matching and automated interview scheduling, NeuralHire empowers companies to efficiently find the best talent.

## ✨ Features

NeuralHire automates and optimizes the entire candidate screening workflow, allowing you to focus on strategic hiring decisions.

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
    *   Manage calendar availability and send timely reminders, accelerating your time-to-hire.

*   **Real-time Activity Logs** ✅
    *   Monitor all system activities, including job additions, deletions, and recruitment progress, through a dynamic log display.

## 🛠️ Technologies Used

NeuralHire is built with a modern and robust technology stack, ensuring a fast, scalable, and user-friendly experience.

*   **Frontend:**
    *   [**Next.js 15**](https://nextjs.org/) - A React framework for building performant web applications.
    *   [**React 19**](https://react.dev/) - For building interactive user interfaces.
    *   [**TypeScript**](https://www.typescriptlang.org/) - For type-safe code.
    *   [**Tailwind CSS 4**](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
    *   [**shadcn/ui**](https://ui.shadcn.com/) - Beautifully designed and accessible UI components (built on Radix UI).
    *   [**Framer Motion**](https://www.framer.com/motion/) - For smooth and engaging animations.
    *   [**Zustand**](https://zustand-demo.pmnd.rs/) - A small, fast, and scalable bearbones state-management solution.
    *   [**pdfjs-dist**](https://mozilla.github.io/pdf.js/) - For efficient PDF text extraction from resumes.
    *   [**react-dropzone**](https://react-dropzone.js.org/) - For intuitive drag-and-drop file uploads.
    *   [**Lucide React**](https://lucide.dev/icons/) - A collection of beautiful and customizable open-source icons.
    *   [**Sonner**](https://sonner.emilkowalski.com/) - For elegant toast notifications.
    *   **Custom Fonts:** Founders Grotesk, Space Grotesk, Inter, Barlow Condensed, Fira Sans Condensed for a unique aesthetic.
    *   [**next-themes**](https://github.com/pacocoursey/next-themes) - For seamless dark mode integration.

*   **Backend (External API):**
    *   NeuralHire communicates with a dedicated Flask backend API for AI processing, data storage, and email automation.
    *   **Backend API Endpoint:** `http://13.233.146.66:5000`

## 🚀 Getting Started

Follow these steps to get NeuralHire up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

*   Node.js (LTS version recommended)
*   npm, Yarn, pnpm, or Bun (choose one)

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

3.  **Open in your browser:**

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

    The page will auto-update as you edit the files in `src/app/`.

## 🧑‍💻 Usage

NeuralHire offers a straightforward workflow for managing job requisitions and candidate screening:

1.  **Navigate to the Dashboard:** From the home page, click on "See NeuralHire in Action" or directly go to `/dashboard`.
2.  **Add Job Descriptions:**
    *   Click on the **"Add Job"** button.
    *   You can input job details manually in a structured **JSON** format or provide multiple jobs via **CSV** with `Job Title, Job Description` columns.
    *   The system will process and store these JDs.
3.  **Manage Jobs:**
    *   View all added job summaries in the table on the left.
    *   Click on any job entry to see its detailed description, extracted skills, and responsibilities in a side panel.
    *   You can also **"Remove Job"** by entering its `JobID`.
4.  **Begin Recruitment for a Job:**
    *   Select a job from the table to open its details panel.
    *   Click on **"Begin Recruitment"**.
    *   **Upload Candidate CVs:** Drag and drop or select PDF/text files containing candidate resumes. The system will extract text for analysis.
    *   **Set Match Score:** Define a minimum match score for shortlisting candidates.
    *   **Shortlist:** Initiate the shortlisting process. The AI will compare CVs against the job description and identify matching candidates.
    *   **Interview Email:** After shortlisting, you will see a list of shortlisted candidates' emails. You can then compose and send interview emails directly from the application using your recruiting email credentials.

---
