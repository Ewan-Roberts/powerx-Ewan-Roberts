import fs from 'fs';

export interface Reading {
  time:  Date
  name:  string
  value: string
}

let database: Record<string, Reading> = {};

/**
 * Store a reading in the database using the given key
 */
export const postReading = (key: string, reading: Reading): Reading => {
  database[key] = reading;
  return reading;
};

/**
 * Retrieve a reading from the database using the given key
 */
export const getReading = (key: string): Reading | undefined => {
  return database[key];
};

export const purgeReading = (): void => {
  database = {};
};

export const getAll = (): Record<string, Reading>=> {
  return database;
};

export default {
  postReading,
  getReading,
  purgeReading,
  getAll
}

