import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('654a5123055ee1836601'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
