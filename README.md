# Tria Contact Book 📞

This is a single-page contact list application built using React, designed to assess frontend development skills.

## ✨ Features Implemented

The application successfully meets all core and optional requirements:

1.  **View Contact List:** Displays a list of contacts with personal details.
2.  **Search Contacts:** Implements real-time, case-insensitive filtering by contact name.
3.  **Add New Contact:** Allows users to add a new contact via a clean modal interface.

-----

## 🚀 Live Application & Source

| Description | Link |
| :--- | :--- |
| **Live Demo URL** | https://tria-contact-list-two.vercel.app/ |
| **Source Code Repository** | https://github.com/jaiprakash850/Tria-Contact-List |

-----

## 🛠️ Local Setup and Run Instructions

Follow these steps to get the project running on your local machine:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/jaiprakash850/Tria-Contact-List.git
    cd tria-contact-list
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Run the Development Server (Vite):**

    ```bash
    npm run dev
    ```

4.  **Access the Application:**
    Open your web browser and navigate to the address shown in the terminal (usually `http://localhost:5173/`).

-----

## 💡 Technical and Design Highlights

### Engineering Assumptions & Implementation Choices

| Focus Area | Choice | Rationale |
| :--- | :--- | :--- |
| **API Interaction** | **Mimicked Fetching with Local Storage** | Since no external API was provided, data fetching is simulated using a custom hook (`useContactsPersistence`). This hook includes a `setTimeout` of 500ms to mimic network latency, allowing for the correct implementation of a **Loading State**. |
| **Search Performance** | **`useMemo` Hook** | The filtering logic in `App.jsx` is wrapped in `useMemo`. This performance optimization ensures the contact list is only re-filtered when the list itself or the search term changes, preventing unnecessary recalculations and ensuring a smooth, real-time search experience. |
| **State Management** | **Prop Passing & Custom Hooks** | State is managed centrally in `App.jsx` and distributed using standard React prop passing. The creation of `useContactsPersistence` demonstrates separation of concerns by isolating the data fetching and storage logic. |

### Design and UX Choices

| UX Feature | Implementation | Rationale |
| :--- | :--- | :--- |
| **Layout** | Centered, fixed-width content (`max-w-xl`). | Provides a clean, focused reading experience, prioritizing readability over screen-filling elements. |
| **Styling** | **Tailwind CSS** with elevated cards. | Utilizes modern, utility-first styling for rapid development and delivers a professional, polished aesthetic with clear focus states and interactive hover effects. |
| **Adding Contact** | **Modal Dialog** (`AddContactModal.jsx`). | Using a modal provides a dedicated, focused user flow for data entry, minimizing distractions and improving form completion rates. |

-----

## 📦 Libraries Chosen

| Library | Type | Reason for Selection |
| :--- | :--- | :--- |
| **React (Vite)** | Framework/Tooling | Mandatory requirement and chosen for its speed and modern tooling. |
| **Tailwind CSS** | Styling | Chosen for rapid, utility-first development and easy creation of responsive, professional designs. |
| **Lucide-React** | Icons | A lightweight and modern icon library used to enhance UX in the Contact Cards, Search Bar, and Modal. |
