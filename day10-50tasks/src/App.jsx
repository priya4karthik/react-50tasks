import React, { useState } from 'react';

// --- IMPORT YOUR NEW TASKS ---
import Task1 from './tasks_v2/Task1_AdvancedTodo';
import Task2 from './tasks_v2/Task2_AuthFlow';
import Task3 from './tasks_v2/Task3_SearchableProductList';
import Task4 from './tasks_v2/Task4_UndoRedoCounter';
import Task5 from './tasks_v2/Task5_PersistentTheme';
import Task6 from './tasks_v2/Task6_ReusableModal';
import Task7 from './tasks_v2/Task7_Pagination';
import Task8 from './tasks_v2/Task8_FormValidation';
import Task9 from './tasks_v2/Task9_TabNavigation';
import Task10 from './tasks_v2/Task10_StarRating';
import Task11 from './tasks_v2/Task11_MiniShoppingCart';
import Task12 from './tasks_v2/Task12_PasswordStrength';
import Task13 from './tasks_v2/Task13_AdvancedTimer';
import Task14 from './tasks_v2/Task14_FAQAccordion';
import Task15 from './tasks_v2/Task15_DependentDropdown';
import Task16 from './tasks_v2/Task16_ReusableInput';
import Task17 from './tasks_v2/Task17_NotificationSystem';
import Task18 from './tasks_v2/Task18_ControlledMultiInput';
import Task19 from './tasks_v2/Task19_HighlightSearch';
import Task20 from './tasks_v2/Task20_SidebarToggle';
import Task21 from './tasks_v2/Task21_SimpleDashboard';
import Task22 from './tasks_v2/Task22_CharacterCounter';
import Task23 from './tasks_v2/Task23_FileUploadUi';
import Task24 from './tasks_v2/Task24_SelectAllCheckbox';
import Task25 from './tasks_v2/Task25_StepperComponent';
import Task26 from './tasks_v2/Task26_CurrencyConverter';
import Task27 from './tasks_v2/Task27_ToggleSwitch';
import Task28 from './tasks_v2/Task28_ListSorting';
import Task29 from './tasks_v2/Task29_QuizApp';
import Task30 from './tasks_v2/Task30_ReusableButtonVariants';
import Task31 from './tasks_v2/Task31_SearchAndFilter';
import Task32 from './tasks_v2/Task32_DataTableColumns';
import Task33 from './tasks_v2/Task33_CountdownEvent';
import Task34 from './tasks_v2/Task34_FormReset';
import Task35 from './tasks_v2/Task35_LikeDislike';
import Task36 from './tasks_v2/Task36_LoadingSpinner';
import Task37 from './tasks_v2/Task37_ToolTip';
import Task38 from './tasks_v2/Task38_BreadCrumbs';
import Task39 from './tasks_v2/Task39_ImageCarousel';
import Task40 from './tasks_v2/Task40_ResponsiveNavbar';
import Task41 from './tasks_v2/Task41_NotesApp';
import Task42 from './tasks_v2/Task42_MockAuth';
import Task43 from './tasks_v2/Task43_TogglePassword';
import Task44 from './tasks_v2/Task44_ProductCard';
import Task45 from './tasks_v2/Task45_SearchHistory';
import Task46 from './tasks_v2/Task46_ConfirmModal';
import Task47 from './tasks_v2/Task47_TextFormatter';
import Task48 from './tasks_v2/Task48_ColorPicker';
import Task49 from './tasks_v2/Task49_ExpenseTracker';
import Task50 from './tasks_v2/Task50_TheUltimateComponent';
// ... import others as you build them

const App = () => {
  const [activeTask, setActiveTask] = useState(1);
  // const [completedTasks, setCompletedTasks] = useState([1]); // Track progress

  const taskList = [
    { id: 1, title: "Advanced Todo App", component: <Task1 /> },
    { id: 2, title: "Auth Flow (Login/Logout)", component: <Task2 /> },
    { id: 3, title: "Searchable Product List", component: <Task3 /> },
    { id: 4, title: "Undo/Redo Counter", component: <Task4 /> },
    { id: 5, title: "Persistent Theme Switcher", component: <Task5 /> },
    { id: 6, title: "Reusable Modal", component: <Task6 /> },
    { id: 7, title: "Pagination Logic", component: <Task7 /> },
    { id: 8, title: "Form Validation", component: <Task8 /> },
    { id: 9, title: "Tab Navigation", component: <Task9 /> },
    { id: 10, title: "Star Rating UI", component: <Task10 /> },
   { id: 11, title: "Shopping Cart App", component: <Task11 /> },
    { id: 12, title: "Password Strength UI", component: <Task12 /> },
    { id: 13, title: "Timer (Start/Pause)", component: <Task13 /> },
    { id: 14, title: "FAQ Accordion", component: <Task14 /> },
    { id: 15, title: "Dependent Dropdowns", component: <Task15 /> },
    { id: 16, title: "Reusable Input & Error", component: <Task16 /> },
    { id: 17, title: "Notification Toast", component: <Task17 /> },
    { id: 18, title: "Controlled Form (Multi)", component: <Task18 /> },
    { id: 19, title: "Highlight Search Text", component: <Task19 /> },
    { id: 20, title: "Sidebar Toggle Layout", component: <Task20 /> },
    { id: 21, title: "Dashboard Stats UI", component: <Task21 /> },
    { id: 22, title: "Character Counter", component: <Task22 /> },
    { id: 23, title: "File Upload & Preview", component: <Task23 /> },
    { id: 24, title: "Select All Checkboxes", component: <Task24 /> },
    { id: 25, title: "Multi-step Stepper", component: <Task25 /> },
    { id: 26, title: "Currency Converter", component: <Task26 /> },
    { id: 27, title: "Toggle Switch (Custom)", component: <Task27 /> },
    { id: 28, title: "List Sorting (A-Z/Z-A)", component: <Task28 /> },
    { id: 29, title: "Quiz App Logic", component: <Task29 /> },
    { id: 30, title: "Reusable Button Variants", component: <Task30 /> },
    { id: 31, title: "Search + Filter Combo", component: <Task31 /> },
    { id: 32, title: "Data Table Column Toggle", component: <Task32 /> },
    { id: 33, title: "Event Countdown", component: <Task33 /> },
    { id: 34, title: "Form Reset & Clear", component: <Task34 /> },
    { id: 35, title: "Like / Dislike Counter", component: <Task35 /> },
    { id: 36, title: "Loading Spinner", component: <Task36 />, cat: "Feedback" },
    { id: 37, title: "Tooltip Component", component: <Task37 />, cat: "UI" },
    { id: 38, title: "Breadcrumbs", component: <Task38 />, cat: "Nav" },
    { id: 39, title: "Image Carousel", component: <Task39 />, cat: "Media" },
    { id: 40, title: "Responsive Navbar", component: <Task40 />, cat: "Nav" },
    { id: 41, title: "Notes App (Storage)", component: <Task41 />, cat: "Data" },
    { id: 42, title: "Mock Authentication", component: <Task42 />, cat: "Security" },
    { id: 43, title: "Toggle Password Visibility", component: <Task43 />, cat: "UI" },
    { id: 44, title: "Product Card Prop", component: <Task44 />, cat: "UI" },
    { id: 45, title: "Search History", component: <Task45 />, cat: "Data" },
    { id: 46, title: "Confirm Delete Modal", component: <Task46 />, cat: "Feedback" },
    { id: 47, title: "Text Formatter", component: <Task47 />, cat: "Logic" },
    { id: 48, title: "Color Picker", component: <Task48 />, cat: "UI" },
    { id: 49, title: "Expense Tracker", component: <Task49 />, cat: "Data" },
    { id: 50, title: "The Ultimate Component", component: <Task50 />, cat: "Logic" },
    // Placeholder for future tasks 6-50
  ];

  //const progress = Math.round((completedTasks.length / 50) * 100);

  return (
    <div style={styles.dashboard}>
      {/* 1. Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logoArea}>
          <h2 style={styles.logo}> React Day 10-50Tasks</h2>
          {/* <div style={styles.progressBarWrapper}>
            <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
          </div> */}
          {/* <small>{progress}% of 50 tasks completed</small> */}
        </div>

        <nav style={styles.navList}>
          {taskList.map((task) => (
            <button
              key={task.id}
              onClick={() => setActiveTask(task.id)}
              style={{
                ...styles.navItem,
                backgroundColor: activeTask === task.id ? '#e0f2fe' : 'transparent',
                color: activeTask === task.id ? '#0369a1' : '#4b5563',
                fontWeight: activeTask === task.id ? '600' : '400',
              }}
            >
              <span style={styles.taskNumber}>{task.id}</span> {task.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. Content Area */}
      <main style={styles.mainContent}>
        <header style={styles.topBar}>
          <div>
            <span style={styles.breadcrumb}>Dashboard / Task {activeTask}</span>
            <h1 style={styles.taskTitle}>
              {taskList.find(t => t.id === activeTask)?.title || "Developing..."}
            </h1>
          </div>
          {/* <button 
            style={styles.doneBtn}
            onClick={() => !completedTasks.includes(activeTask) && setCompletedTasks([...completedTasks, activeTask])}
          >
            Mark as Done
          </button> */}
        </header>

        <section style={styles.canvas}>
          {taskList.find(t => t.id === activeTask)?.component || (
            <div style={styles.emptyState}>
              <h3>Task {activeTask} coming soon...</h3>
              <p>Keep coding! You're doing great.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

// --- MODERN DASHBOARD STYLES ---
const styles = {
  dashboard: { display: 'flex', height: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Inter, sans-serif' },
  sidebar: { width: '300px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' },
  logoArea: { padding: '24px', borderBottom: '1px solid #f1f5f9' },
  logo: { margin: 0, fontSize: '1.25rem', color: '#1e293b' },
  progressBarWrapper: { height: '6px', background: '#f1f5f9', borderRadius: '3px', margin: '12px 0 4px 0', overflow: 'hidden' },
  progressBar: { height: '100%', background: '#3b82f6', transition: 'width 0.4s ease' },
  navList: { flex: 1, overflowY: 'auto', padding: '16px' },
  navItem: { display: 'flex', alignItems: 'center', width: '100%', padding: '12px', border: 'none', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', marginBottom: '4px', transition: '0.2s' },
  taskNumber: { background: '#f1f5f9', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', marginRight: '12px', fontSize: '0.75rem', fontWeight: 'bold' },
  mainContent: { flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' },
  topBar: { padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0' },
  breadcrumb: { fontSize: '0.875rem', color: '#64748b' },
  taskTitle: { margin: '4px 0 0 0', fontSize: '1.5rem', color: '#0f172a' },
  doneBtn: { padding: '8px 16px', background: '#0f172a', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' },
  canvas: { flex: 1, padding: '40px', overflowY: 'auto', display: 'flex', justifyContent: 'center' },
  emptyState: { textAlign: 'center', color: '#94a3b8', marginTop: '100px' }
};

export default App;
