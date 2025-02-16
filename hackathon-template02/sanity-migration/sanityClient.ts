import { createClient } from '@sanity/client';
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

export const client = createClient({
  projectId: 'rjlk3aki', // Replace with your project ID
  dataset: 'production',
  apiVersion: '2025-01-13',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // Use env variable securely
});
