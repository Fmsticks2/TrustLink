## Project Overview

This is a freelance platform where users can sign up as either Freelancers or Clients.

Freelancers go through an onboarding process to set up their profiles.

Clients get directed to a homepage displaying relevant information.

The app follows a structured authentication system to determine user roles and navigate them accordingly.

## Features

Authentication: Users can log in or sign up.

# Role-Based Navigation:
  Freelancers go through a multi-step form to provide profile details.
  Clients are directed to a homepage with job postings.

Dashboard: Users land on a dashboard with navigation options.

Profile Page: Freelancers have dedicated profile pages.

Job Listings: Clients can browse and post job opportunities.

## How It Works

Loading the App

The app starts at the dashboard.

# Authentication

Clicking Login redirects users to the Login Page, where they can enter their credentials.

If they don’t have an account, they can Sign Up.

# Signup Process

The backend stores new user data in the database.

In the signup page, users choose between Freelancer or Client.

Freelancers complete a multi-step form to provide details about their skills, experience, and preferences. I created a context(OnboardiingContext.jsx) to store this information which i used in the summary page after the multi-step form.
Freelancers are redirected to the their homepage(freelancerHome) after sign-up

Clients are redirected to their homepage after sign-up.

# User Role Handling

The backend verifies if a user is a Freelancer or Client and redirects accordingly:

Freelancers → Freelancer HomePage

Clients → Client Homepage

# Dashboard Features

Freelancers can see job listings, manage contracts, and track bids.

Clients can browse freelancers and post jobs.

nstallation & Setup

# Clone the repository:
git clone https://github.com/Fmsticks2/TrustLink
cd Frontend

# Install dependencies:
npm create vite@latest
npm install
npm install react-router-dom
npm install react-icons
npm install react-hot-toast
npm install headlessui
npm install heroicons

# Start the application:
npm start