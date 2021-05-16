import express, { Express } from 'express';

export const config = (app: Express) => {
  app.use(express.static(__dirname));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
