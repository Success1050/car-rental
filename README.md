Car Rental Company Dashboard

A modern and responsive car rental company dashboard built with Next.js, Tailwind CSS, ShadCN UI, and Recharts. This project provides a clean and intuitive interface for managing car bookings, drivers, reports, and financial summaries.

Features

Dashboard Overview
View real-time statistics on income, expenses, and fleet performance.

Car Availability Checker
Filter available cars by brand, date, and time.

Live Car Status Table
Displays current status of vehicles including:

Driver details

Car number

Status (e.g., Completed, Pending, In Route)

Earnings

Earnings & Expenses Charts
Visual summaries powered by Recharts to compare data over time.

Sidebar Navigation
Quick access to:

Drivers

Bookings

Payments

Transactions

Reports

Notifications

Settings


Responsive UI
Fully responsive and mobile-friendly layout using Tailwind and ShadCN components.


Tech Stack

Next.js – React framework for building scalable web apps

Tailwind CSS – Utility-first CSS for rapid UI development

ShadCN UI – Accessible and customizable component library

Recharts – React charting library for data visualization

Getting Started

Prerequisites

Node.js (v18+ recommended)

npm or yarn

Installation

1. Clone the repository:

git clone https://github.com/your-username/car-rent-dashboard.git
cd car-rent-dashboard

2. Install dependencies:

npm install
# or
yarn install

3. Run the development server:

npm run dev
# or
yarn dev

4. Open http://localhost:3000 to view the dashboard.

Folder Structure

/components      # Reusable UI components
/pages           # Next.js pages
/styles          # Tailwind base styles
/utils           # Utility functions
/public          # Static assets

Customization

You can easily extend this dashboard by:

Adding more car filters (e.g., model, location)

Integrating APIs for real-time data

Adding authentication & role-based access
