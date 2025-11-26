import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';

const DashboardLayout = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const { user, logout } = useAuth();

    const navigationItems = [
        { id: 'dashboard', name: 'Dashboard', icon: '📊' },
        { id: 'properties', name: 'Propiedades', icon: '🏠' },
        { id: 'clients', name: 'Clientes', icon: '👥' },
        { id: 'rentals', name: 'Rentas', icon: '📋' },
        { id: 'expenses', name: 'Gastos', icon: '💰' },
        { id: 'maintenance', name: 'Mantenimiento', icon: '🔧' },
    ];

    const renderContent = () => {
        switch (currentPage) {
            case 'dashboard':
                return <DashboardPage />;
            case 'properties':
                return <div className="p-6 bg-white rounded-lg shadow">Gestión de Propiedades - Próximamente</div>;
            case 'clients':
                return <div className="p-6 bg-white rounded-lg shadow">Gestión de Clientes - Próximamente</div>;
            case 'rentals':
                return <div className="p-6 bg-white rounded-lg shadow">Gestión de Rentas - Próximamente</div>;
            case 'expenses':
                return <div className="p-6 bg-white rounded-lg shadow">Gestión de Gastos - Próximamente</div>;
            case 'maintenance':
                return <div className="p-6 bg-white rounded-lg shadow">Gestión de Mantenimiento - Próximamente</div>;
            default:
                return <DashboardPage />;
        }
    };

    if (!user) {
        return <LoginPage />;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-semibold text-gray-900">RentAdmin</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-700">
                                Bienvenido, {user.nombre || user.email}
                            </span>
                            <button
                                onClick={logout}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex">
                {/* Sidebar */}
                <nav className="w-64 bg-white shadow-sm h-screen">
                    <div className="p-4">
                        <ul className="space-y-2">
                            {navigationItems.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => setCurrentPage(item.id)}
                                        className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                            currentPage === item.id
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        <span className="mr-3">{item.icon}</span>
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;