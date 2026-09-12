<div align="center">
  
  # 🚀 DevStack

  <p>
    <strong>A modern, interactive platform for exploring and building custom software technology stacks.</strong>
  </p>

  <!-- Tech Stack Badges -->
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />

</div>

<br />


<!-- Project Screenshot -->
<div align="center">
  <img width="827" height="602" alt="image" src="https://github.com/user-attachments/assets/0b441533-812f-4ff8-a0a8-62bd2da5fcb1" />
</div>

## 📖 Project Overview

DevStack is a dynamic, responsive web application designed to help developers seamlessly explore frontend, backend, database, and tooling options. By offering an intuitive interface, users can compare different technologies side-by-side and curate a personalized stack tailored perfectly to their next software project. The application utilizes a highly responsive grid layout, state-driven UI updates, and instant visual feedback to ensure a smooth user experience.

## ✨ Key Features

* **Interactive Stack Builder:** Users can browse through various technology categories and instantly add or remove tools from their personalized development stack with a single click.
* **Real-Time Visual Feedback:** Features dynamic UI states, including gradient borders on selected cards, disabled buttons for already-added technologies, and instant toast notifications for user actions.
* **Fully Responsive Design:** A mobile-first approach ensuring the application looks beautiful and functions flawlessly across desktop monitors, tablets, and mobile screens.

## 🛠️ Built With (Technologies)

This project leverages modern web development tools for optimal performance and developer experience.

| Category | Technology |
| :--- | :--- |
| **Frontend Library** | React (v18) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Component Library** | DaisyUI |
| **Build Tool** | Vite |

## 📦 Core Dependencies

Below are the primary packages essential for running and building this application:

* `react` & `react-dom` - Core UI rendering.
* `react-toastify` - For beautiful, lightweight popup notifications.
* `tailwindcss` - Utility-first CSS framework for rapid UI development.
* `daisyui` - Tailwind CSS component plugin for semantic class names.
* `lucide-react` / `react-icons` - SVG icon integration.

## 🚀 Getting Started (Local Setup)

Follow these instructions to set up the project locally on your machine.

**1. Clone the repository**
```bash
git clone [https://github.com/hakim-azizul/DevStack.git](https://github.com/hakim-azizul/DevStack.git)
```
**2. Navigate to the project directory**
```bash
cd DevStack
```
**3. Install dependencies**
```bash
npm install
```
**4. Start the development server**
```bash
npm run dev
```
**5. Open your browser**
Navigate to the local URL provided in your terminal. usually ```http://localhost:5173``` to view the application

## 💡 React Learning & Q&A

**1. What is JSX, and why is it used in React?**

* JSX means JavaScript XML. It is a syntax extension that allows us to write codes like HTML-directly inside JavaScript. We can visualize the UI structure right alongside the logic. It helps us to making React components easily and makes it more readable because.

**2. What is the difference between props and state?**

* Props (Parameter of special function in React called Component): like any other parameters, its used to pass data from a parent component down to a child component. They are read-only, we cant modify it in the receiving child.

* State: we can say that state is a local memory of a Component, we use it to manage data inside a component. when state changes, the component re-renders. It is local, mutable, and controlled inside the component itself.

**3. What does the useState hook do, and where did you use it in this project?**

* We can add state (variables that trigger UI updates when changed) to functional components by useState hook. In this project, I used it to manage the addedTechs array—keeping track of which technologies a user has added to their stack, and updating the UI instantly when a card is added or removed.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**

* The useEffect hook helps us to perform side effects in our components, such as fetching data from an API etc. we can use it to fetch the data from the JSON file exactly once when the component first mounts, ensuring the data is loaded and ready before rendering the UI cards. But in this project i did this job by async awaite function.

**5. Why does every item in a .map() list need a unique key prop?**

* React uses the key prop to keep track of situation's of individual elements in a list. If items are added, removed, or reordered, unique keys help React identify exactly which items changed, allowing it to update the DOM efficiently without re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.**

* Conditional rendering means displaying different UI elements based on a specific condition (like an if-else statement). i used it many times in this project, one of them is: like in stack section, i have to render the UI based on the stack state is it empty or not so i used it like that:
```
src/Components/Technologies/Stack.tsx

            {addedTechs.length === 0 ? (
                <div className="border-2 border-dashed border-slate-200 rounded-xl py-12 flex items-center justify-center">
                <p className="text-sm font-medium text-slate-400">Your stack is empty.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {addedTechs.map((tech) => (
                        <AddedCard
                        key={tech.name}
                        tech={tech}
                        handleRemove={() => handleRemove(tech.name)}
                        />
                    ))}
                    <button 
                        onClick={() => {setAddedTechs([]); toast.error("The stack is cleared! 🗑️")}}
                        className="font-medium text-xl border-2 border-red-500 bg-white hover:bg-red-600 text-red-500 hover:text-white py-2 px-4 rounded-lg transition-colors"
                    >
                        Remove All
                    </button>
                </div>
            )}
```
**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

* Parent to Child: We can pass data down using props. like i did in this project```<AddedCard tech={technologyData} />```

* Child to Parent: We can pass a function as a prop from the parent. Then we can call that function from the child when an event happens (like a button click), its effectively send a signal or data back up to the parent. like in my project ```<AddedCard onRemove={() => handleRemove(tech.name)} />```
