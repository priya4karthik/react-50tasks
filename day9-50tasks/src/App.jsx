import React, { useState } from 'react';
import Task1 from './tasks/Task1_Welcome';
import Task2 from './tasks/Task2_ProfileCard';
import Task3 from './tasks/Task3_Counter';
import Task4 from './tasks/Task4_DynamicDate';
import Task5 from './tasks/Task5_ToggleText';
import Task6 from './tasks/Task6_InputDisplay';
import Task7 from './tasks/Task7_ColorSwitcher';
import Task8 from './tasks/Task8_FruitList';
import Task9 from './tasks/Task9_BooleanToggle';
import Task10 from './tasks/Task10_ClickCounter';
import Task11 from './tasks/Task11_ReusableButton';
import Task12 from './tasks/Task12_CheckboxWarning';
import Task13 from './tasks/Task13_UpdateAge';
import Task14 from './tasks/Task14_LikeButton';
import Task15 from './tasks/Task15_HeaderFooter';
import Task16 from './tasks/Task16_ConditionalImage';
import Task17 from './tasks/Task17_GreetingApp';
import Task18 from './tasks/Task18_StudentList';
import Task19 from './tasks/Task19_LoadingState';
import Task20 from './tasks/Task20_CalculatorUi';
import Task21 from './tasks/Task21_TodoList';
import Task22 from './tasks/Task22_SimpleForm';
import Task23 from './tasks/Task23_PasswordToggle';
import Task24 from './tasks/Task24_SearchFilter';
import Task25 from './tasks/Task25_CharacterCounter';
import Task26 from './tasks/Task26_LoginForm';
import Task27 from './tasks/Task27_ThemeToggle';
import Task28 from './tasks/Task28_DynamicDropdown';
import Task29 from './tasks/Task29_CheckableList';
import Task30 from './tasks/Task30_TabInterface';
import Task31 from './tasks/Task31_ModalPopup';
import Task32 from './tasks/Task32_StarRating';
import Task33 from './tasks/Task33_FormReset';
import Task34 from './tasks/Task34_ReusableCard';
import Task35 from './tasks/Task35_ImageGallery';
import Task36 from './tasks/Task36_RenderCounter';
import Task37 from './tasks/Task37_TimedNotification';
import Task38 from './tasks/Task38_DisableSubmit';
import Task39 from './tasks/Task39_Accordion';
import Task40 from './tasks/Task40_AutoCloseDropdown';
//import React, { useState } from 'react';

// --- IMPORT ALL 50 TASKS ---
// (Grouping them for organization)

import Task41 from './tasks/Task41_NotesApp';
import Task42 from './tasks/Task42_ShoppingCart';
import Task43 from './tasks/Task43_BMICalculator';
import Task44 from './tasks/Task44_WeatherUi';
import Task45 from './tasks/Task45_TimerApp';
import Task46 from './tasks/Task46_FormWizard';
import Task47 from './tasks/Task47_EmojiFeedback';
import Task48 from './tasks/Task48_DashboardCards';
import Task49 from './tasks/Task49_QuizApp';
import Task50 from './tasks/Task50_ReusableLayout';


const App = () => {
  const [activeTask, setActiveTask] = useState(1);

  const tasks = [
    { id: 1, title: "1. Welcome Message", component: <Task1 /> },
    { id: 2, title: "2. Profile Card", component: <Task2 /> },
    { id: 3, title: "3. Counter App", component: <Task3 /> },
    { id: 4, title: "4. Dynamic Date", component: <Task4 /> },
    { id: 5, title: "5. Toggle Switch", component: <Task5 /> },
    { id: 6, title: "6. Input Display", component: <Task6 /> },
  { id: 7, title: "7. Color Switcher", component: <Task7 /> },
  { id: 8, title: "8. Fruit List", component: <Task8 /> },
  { id: 9, title: "9. Boolean Toggle", component: <Task9 /> },
  { id: 10, title: "10. Click Counter", component: <Task10 /> },
  { id: 11, title: "11. Reusable Button", component: <Task11 /> },
  { id: 12, title: "12. Checkbox Warning", component: <Task12 /> },
  { id: 13, title: "13. Update Age", component: <Task13 /> },
  { id: 14, title: "14. Like Button", component: <Task14 /> },
  { id: 15, title: "15. Header & Footer", component: <Task15 /> },
  { id: 16, title: "16. Toggle Image", component: <Task16 /> },
{ id: 17, title: "17. Time Greeting", component: <Task17 /> },
{ id: 18, title: "18. Student List", component: <Task18 /> },
{ id: 19, title: "19. Loading Simulation", component: <Task19 /> },
{ id: 20, title: "20. Calculator UI", component: <Task20 /> },
{ id: 21, title: "21. Todo List", component: <Task21 /> },
{ id: 22, title: "22. Simple Form", component: <Task22 /> },
{ id: 23, title: "23. Show/Hide Password", component: <Task23 /> },
{ id: 24, title: "24. Search Filter", component: <Task24 /> },
{ id: 25, title: "25. Character Counter", component: <Task25 /> },
{ id: 26, title: "26. Login Validation", component: <Task26 /> },
{ id: 27, title: "27. Theme Toggle", component: <Task27 /> },
{ id: 28, title: "28. Dynamic Dropdown", component: <Task28 /> },
{ id: 29, title: "29. Completable List", component: <Task29 /> },
{ id: 30, title: "30. Tab Interface", component: <Task30 /> },
{ id: 31, title: "31. Modal Popup", component: <Task31 /> },
{ id: 32, title: "32. Star Rating", component: <Task32 /> },
{ id: 33, title: "33. Form Reset", component: <Task33 /> },
{ id: 34, title: "34. Reusable Card", component: <Task34 /> },
{ id: 35, title: "35. Image Gallery", component: <Task35 /> },
{ id: 36, title: "36. Render Counter", component: <Task36 /> },
{ id: 37, title: "37. Auto-hide Alert", component: <Task37 /> },
{ id: 38, title: "38. Disable Submit", component: <Task38 /> },
{ id: 39, title: "39. FAQ Accordion", component: <Task39 /> },
{ id: 40, title: "40. Auto-close Menu", component: <Task40 /> },
{ id: 41, title: "41. NotesApp", component:<Task41/>},
{ id: 42, title: "42. ShoppingCart", component:<Task42/>},
{ id: 43, title: "43. BMI Calculator", component:<Task43/>},
{ id: 44, title: "44. Weather Ui", component:<Task44/>},
{ id: 45, title: "45. Timer App", component:<Task45/>},
{ id: 46, title: "46. Form Wizard", component:<Task46/>},
{ id: 47, title: "47. Emoji Feedback", component:<Task47/>},
{ id: 48, title: "48. Dashboard Status", component:<Task48/>},
{ id: 49, title: "49. Quiz App", component:<Task49/>},
{ id: 50, title: "50. Layout Composition", component:<Task50/>},

    // You will add 6-50 here later
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <nav style={styles.sidebar}>
        <h2 style={styles.logo}>React 50</h2>
        <div style={styles.scrollArea}>
          {tasks.map((task) => (
            <button
              key={task.id}
              onClick={() => setActiveTask(task.id)}
              style={{
                ...styles.navItem,
                backgroundColor: activeTask === task.id ? '#3b82f6' : 'transparent',
                color: activeTask === task.id ? '#fff' : '#333'
              }}
            >
              {task.title}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h1>Task {activeTask}</h1>
        </header>
        <div style={styles.card}>
          {tasks.find(t => t.id === activeTask)?.component}
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: { display: 'flex', height: '100vh', backgroundColor: '#f3f4f6' },
  sidebar: { width: '260px', backgroundColor: '#fff', borderRight: '1px solid #ddd', display: 'flex', flexDirection: 'column' },
  logo: { padding: '20px', borderBottom: '1px solid #eee', margin: 0, color: '#3b82f6' },
  scrollArea: { overflowY: 'auto', flex: 1, padding: '10px' },
  navItem: { display: 'block', width: '100%', padding: '12px', marginBottom: '5px', textAlign: 'left', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', transition: '0.2s' },
  mainContent: { flex: 1, padding: '40px', overflowY: 'auto' },
  header: { marginBottom: '20px' },
  card: { backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }
};

export default App;