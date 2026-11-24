const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers() : Promise<User[]> {
    const response = await fetch(URL_USERS);
    if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    const users = await response.json();
    return users;
}

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };  
    };
}