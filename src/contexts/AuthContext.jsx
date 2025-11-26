import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Verificar si hay un usuario guardado en localStorage
        const savedUser = localStorage.getItem('rentadmin_user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        // Simulación de login - en una app real esto sería una llamada al backend
        if (email === 'admin@rentadmin.com' && password === 'admin123') {
            const userData = {
                id: '1',
                email: 'admin@rentadmin.com',
                nombre: 'Administrador',
                role: 'admin'
            };
            setUser(userData);
            localStorage.setItem('rentadmin_user', JSON.stringify(userData));
            return { success: true, user: userData };
        } else {
            throw new Error('Credenciales inválidas');
        }
    };

    const register = async (userData) => {
        // Simulación de registro
        const newUser = {
            ...userData,
            id: Date.now().toString(),
            role: 'user'
        };
        setUser(newUser);
        localStorage.setItem('rentadmin_user', JSON.stringify(newUser));
        return { success: true, user: newUser };
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('rentadmin_user');
    };

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};