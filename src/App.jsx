import { AuthProvider } from './contexts/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import './index.css';

function App() {
    return (
        <AuthProvider>
            <DashboardLayout />
        </AuthProvider>
    );
}

export default App;