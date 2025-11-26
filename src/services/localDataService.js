// Servicio simulado para GitHub Pages usando localStorage
class LocalDataService {
    constructor() {
        this.initializeData();
    }

    initializeData() {
        // Solo inicializar si no existe
        if (!localStorage.getItem('rentadmin_properties')) {
            localStorage.setItem('rentadmin_properties', JSON.stringify([
                {
                    id: '1',
                    nombre: 'Apartamento Centro',
                    direccion: 'Av. Principal 123',
                    tipo: 'apartamento',
                    habitaciones: 2,
                    precio: 1500,
                    estado: 'disponible',
                    descripcion: 'Apartamento en el centro de la ciudad'
                },
                {
                    id: '2',
                    nombre: 'Casa Residencial',
                    direccion: 'Calle Secundaria 456',
                    tipo: 'casa',
                    habitaciones: 3,
                    precio: 2200,
                    estado: 'ocupada',
                    descripcion: 'Casa familiar en zona residencial'
                }
            ]));
        }

        if (!localStorage.getItem('rentadmin_clients')) {
            localStorage.setItem('rentadmin_clients', JSON.stringify([
                {
                    id: '1',
                    nombre: 'Juan Pérez',
                    email: 'juan@example.com',
                    telefono: '+1234567890',
                    documento: '12345678',
                    direccion: 'Calle Ejemplo 123'
                },
                {
                    id: '2',
                    nombre: 'María García',
                    email: 'maria@example.com',
                    telefono: '+0987654321',
                    documento: '87654321',
                    direccion: 'Avenida Test 456'
                }
            ]));
        }

        if (!localStorage.getItem('rentadmin_rentals')) {
            localStorage.setItem('rentadmin_rentals', JSON.stringify([
                {
                    id: '1',
                    propiedad_id: '2',
                    cliente_id: '1',
                    fecha_inicio: '2024-01-01',
                    fecha_fin: '2024-12-31',
                    precio_mensual: 2200,
                    estado: 'activa',
                    observaciones: 'Contrato anual'
                }
            ]));
        }

        if (!localStorage.getItem('rentadmin_expenses')) {
            localStorage.setItem('rentadmin_expenses', JSON.stringify([
                {
                    id: '1',
                    descripcion: 'Reparación Plumbing',
                    monto: 350,
                    categoria: 'mantenimiento',
                    fecha: '2024-11-20',
                    propiedad_id: '1'
                },
                {
                    id: '2',
                    descripcion: 'Seguro Anual',
                    monto: 1200,
                    categoria: 'seguros',
                    fecha: '2024-11-15',
                    propiedad_id: null
                }
            ]));
        }

        if (!localStorage.getItem('rentadmin_maintenance')) {
            localStorage.setItem('rentadmin_maintenance', JSON.stringify([
                {
                    id: '1',
                    descripcion: 'Revisión sistema eléctrico',
                    tipo: 'preventivo',
                    prioridad: 'media',
                    estado: 'pendiente',
                    fecha_programada: '2024-12-01',
                    propiedad_id: '2'
                }
            ]));
        }
    }

    // Propiedades
    async getProperties() {
        return JSON.parse(localStorage.getItem('rentadmin_properties')) || [];
    }

    async createProperty(property) {
        const properties = await this.getProperties();
        const newProperty = {
            ...property,
            id: Date.now().toString(),
            created_at: new Date().toISOString()
        };
        properties.push(newProperty);
        localStorage.setItem('rentadmin_properties', JSON.stringify(properties));
        return newProperty;
    }

    async updateProperty(id, property) {
        const properties = await this.getProperties();
        const index = properties.findIndex(p => p.id === id);
        if (index !== -1) {
            properties[index] = { ...properties[index], ...property };
            localStorage.setItem('rentadmin_properties', JSON.stringify(properties));
            return properties[index];
        }
        return null;
    }

    async deleteProperty(id) {
        const properties = await this.getProperties();
        const filtered = properties.filter(p => p.id !== id);
        localStorage.setItem('rentadmin_properties', JSON.stringify(filtered));
        return true;
    }

    // Clientes
    async getClients() {
        return JSON.parse(localStorage.getItem('rentadmin_clients')) || [];
    }

    async createClient(client) {
        const clients = await this.getClients();
        const newClient = {
            ...client,
            id: Date.now().toString(),
            created_at: new Date().toISOString()
        };
        clients.push(newClient);
        localStorage.setItem('rentadmin_clients', JSON.stringify(clients));
        return newClient;
    }

    async updateClient(id, client) {
        const clients = await this.getClients();
        const index = clients.findIndex(c => c.id === id);
        if (index !== -1) {
            clients[index] = { ...clients[index], ...client };
            localStorage.setItem('rentadmin_clients', JSON.stringify(clients));
            return clients[index];
        }
        return null;
    }

    async deleteClient(id) {
        const clients = await this.getClients();
        const filtered = clients.filter(c => c.id !== id);
        localStorage.setItem('rentadmin_clients', JSON.stringify(filtered));
        return true;
    }

    // Rentas
    async getRentals() {
        return JSON.parse(localStorage.getItem('rentadmin_rentals')) || [];
    }

    async createRental(rental) {
        const rentals = await this.getRentals();
        const newRental = {
            ...rental,
            id: Date.now().toString(),
            created_at: new Date().toISOString()
        };
        rentals.push(newRental);
        localStorage.setItem('rentadmin_rentals', JSON.stringify(rentals));
        return newRental;
    }

    async updateRental(id, rental) {
        const rentals = await this.getRentals();
        const index = rentals.findIndex(r => r.id === id);
        if (index !== -1) {
            rentals[index] = { ...rentals[index], ...rental };
            localStorage.setItem('rentadmin_rentals', JSON.stringify(rentals));
            return rentals[index];
        }
        return null;
    }

    async deleteRental(id) {
        const rentals = await this.getRentals();
        const filtered = rentals.filter(r => r.id !== id);
        localStorage.setItem('rentadmin_rentals', JSON.stringify(filtered));
        return true;
    }

    // Gastos
    async getExpenses() {
        return JSON.parse(localStorage.getItem('rentadmin_expenses')) || [];
    }

    async createExpense(expense) {
        const expenses = await this.getExpenses();
        const newExpense = {
            ...expense,
            id: Date.now().toString(),
            created_at: new Date().toISOString()
        };
        expenses.push(newExpense);
        localStorage.setItem('rentadmin_expenses', JSON.stringify(expenses));
        return newExpense;
    }

    async updateExpense(id, expense) {
        const expenses = await this.getExpenses();
        const index = expenses.findIndex(e => e.id === id);
        if (index !== -1) {
            expenses[index] = { ...expenses[index], ...expense };
            localStorage.setItem('rentadmin_expenses', JSON.stringify(expenses));
            return expenses[index];
        }
        return null;
    }

    async deleteExpense(id) {
        const expenses = await this.getExpenses();
        const filtered = expenses.filter(e => e.id !== id);
        localStorage.setItem('rentadmin_expenses', JSON.stringify(filtered));
        return true;
    }

    // Mantenimiento
    async getMaintenance() {
        return JSON.parse(localStorage.getItem('rentadmin_maintenance')) || [];
    }

    async createMaintenance(maintenance) {
        const maintenanceList = await this.getMaintenance();
        const newMaintenance = {
            ...maintenance,
            id: Date.now().toString(),
            created_at: new Date().toISOString()
        };
        maintenanceList.push(newMaintenance);
        localStorage.setItem('rentadmin_maintenance', JSON.stringify(maintenanceList));
        return newMaintenance;
    }

    async updateMaintenance(id, maintenance) {
        const maintenanceList = await this.getMaintenance();
        const index = maintenanceList.findIndex(m => m.id === id);
        if (index !== -1) {
            maintenanceList[index] = { ...maintenanceList[index], ...maintenance };
            localStorage.setItem('rentadmin_maintenance', JSON.stringify(maintenanceList));
            return maintenanceList[index];
        }
        return null;
    }

    async deleteMaintenance(id) {
        const maintenanceList = await this.getMaintenance();
        const filtered = maintenanceList.filter(m => m.id !== id);
        localStorage.setItem('rentadmin_maintenance', JSON.stringify(filtered));
        return true;
    }

    // Dashboard stats
    async getDashboardStats() {
        const properties = await this.getProperties();
        const rentals = await this.getRentals();
        const expenses = await this.getExpenses();
        
        const totalProperties = properties.length;
        const occupiedProperties = rentals.filter(r => r.estado === 'activa').length;
        const totalRevenue = rentals.reduce((sum, r) => sum + (r.precio_mensual || 0), 0);
        const totalExpenses = expenses.reduce((sum, e) => sum + (e.monto || 0), 0);
        const netIncome = totalRevenue - totalExpenses;

        return {
            totalProperties,
            occupiedProperties,
            availableProperties: totalProperties - occupiedProperties,
            occupancyRate: totalProperties > 0 ? Math.round((occupiedProperties / totalProperties) * 100) : 0,
            totalRevenue,
            totalExpenses,
            netIncome
        };
    }
}

export default new LocalDataService();