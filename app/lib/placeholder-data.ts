const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: 'User',
        email: 'user@nextmail.com',
        password: 'password',
    },
];

const customers = [
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        name: 'Alice',
        email: 'alice@nextmail.com',
        image_url: '/customers/alice.png',
    },
    {
        id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
        name: 'Evil Rabbit',
        email: 'evil@nextmail.com',
        image_url: '/customers/evil-rabbit.png',
    },
];

const invoices = [
    {
        customer_id: customers[0].id,
        amount: 15795,
        status: 'pending',
        date: '2022-12-06',
    },
    {
        customer_id: customers[1].id,
        amount: 20348,
        status: 'paid',
        date: '2022-11-14',
    },
];

const revenue = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 2500 },
    { month: 'Mar', revenue: 3000 },
    { month: 'Apr', revenue: 3500 },
    { month: 'May', revenue: 5000 },
    { month: 'Jun', revenue: 5000 },
    { month: 'Jul', revenue: 5000 },
    { month: 'Aug', revenue: 5000 },
    { month: 'Sep', revenue: 5000 },
    { month: 'Oct', revenue: 5000 },
    { month: 'Nov', revenue: 5000 },
    { month: 'Dec', revenue: 5000 },
];

export { users, customers, invoices, revenue };
