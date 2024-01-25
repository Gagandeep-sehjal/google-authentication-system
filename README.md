

# Google Authentication System

This guide provides instructions for implementing Google Authentication in your web application using OAuth 2.0.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Google Developer Console Setup](#google-developer-console-setup)
3. [Integrate Google Sign-In in your Web App](#integrate-google-sign-in-in-your-web-app)
4. [User Authentication Flow](#user-authentication-flow)

## Prerequisites

Before you begin, make sure you have the following:

- A Google account.
- Access to the Google Developer Console.
- A web application with HTML, CSS, and JavaScript.

## Google Developer Console Setup

1. **Create a Project:**
   - Go to the [Google Developer Console](https://console.developers.google.com/).
   - Create a new project.

2. **Enable the Google Sign-In API:**
   - Inside your project, navigate to the "APIs & Services" > "Dashboard".
   - Click on "+ ENABLE APIS AND SERVICES".
   - Search for "Google Sign-In" and enable it.

3. **Create OAuth 2.0 Credentials:**
   - Inside your project, navigate to the "APIs & Services" > "Credentials".
   - Click on "Create Credentials" and choose "OAuth client ID".
   - Configure the consent screen.
   - Choose the application type (Web application), add authorized redirect URIs, and create.

4. **Retrieve Client ID:**
   - Once the OAuth client is created, note down the "Client ID". You will use this in your web application.

## Integrate Google Sign-In in your Web App

1. **Include Google Sign-In Library:**
   - Add the attached scripts to include the Google Sign-In library in your project.

