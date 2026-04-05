#  Expense Tracker Dashboard (React)

A **Expense Tracker Dashboard** built with **React + Tailwind CSS + Chart.js** 


# Features

*  Dynamic Expense & Income Tracking
*  Trend Analysis with Charts
*  Smart UI (Glassmorphism + Gradients)
*  Transaction Management
*  Add Expense Form
*  Context API State Management

---

#  Project Structure

src/
│
├── components/
│   ├── dashboard/
│   │   ├── TopCards.jsx
│   │   ├── Transactions.jsx
│   │   ├── TrendChart.jsx
│   │   └── AddExpense.jsx
│   │
│   └── ui/
│       └── Card.jsx
│
├── context/
│   └── ExpenseContext.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

#  Project Flow (How Everything Works)

# 1. Global State (Context API)

The app uses **React Context API** to manage transactions globally.

```
User Action (Add Expense)
        ↓
AddExpense Component
        ↓
addTransaction() function
        ↓
ExpenseContext (Global State Updated)
        ↓
All Components Re-render Automatically
```

---

##  Data Flow Diagram

```
           ┌────────────────────┐
           │   AddExpense.jsx   │
           └─────────┬──────────┘
                     │
                     ▼
        ┌──────────────────────────┐
        │ ExpenseContext (State)   │
        │ transactions[]           │
        └─────────┬────────────────┘
                  │
   ┌──────────────┼──────────────┬──────────────┐
   ▼              ▼              ▼              ▼
TopCards     Transactions   TrendChart     Other UI
(Income)     (List View)    (Graph)        (Future)
```

---

#  Component Breakdown

# ExpenseContext.jsx

* Stores transactions in state
* Provides:

  * `transactions`
  * `addTransaction()`

 Acts as **central data source**

---

# AddExpense.jsx

* Form to add new transactions
* On submit:

  * Calls `addTransaction()`

```
Input → Form Submit → Context Update
```

---

# TopCards.jsx

Calculates:

*  Total Income
*  Total Expense
*  Balance

Logic:

```js
income = sum(amount > 0)
expense = sum(amount < 0)
balance = income + expense
```

---

# Transactions.jsx

* Displays all transactions
* Highlights:

  * Green → Income
  * Red → Expense

---

# TrendChart.jsx

* Uses **Chart.js**
* Shows spending trend over time

```
transactions → extract dates & amounts → chart
```

---

# Card.jsx

Reusable UI wrapper

* Glass effect
* Border + shadow
* Used across all components

---

#  UI Design System

* Dark theme (`#050810`)
* Glassmorphism (`backdrop-blur`)
* Gradient accents (violet → indigo)
* Rounded components
* Smooth transitions

---

#  How to Run Project

```bash
npm install
npm run dev
```

---

#  Example Flow

### Step 1

User adds:

```
Title: Food
Amount: -200
```

### Step 2

Stored in context:

```js
{ title: "Food", amount: -200 }
```

### Step 3

UI Updates:

* Expense increases
* Balance decreases
* Chart updates

---

#  Tech Stack

*  React
*  Tailwind CSS
*  Chart.js
*  Context API

---

#  Future Improvements

*  Authentication
*  Backend (Node + MongoDB)
*  Filters (Monthly/Yearly)
*  AI Insights

---

#  Author

Made with  by Gopal Prajapati

---

#  Final Note

This project demonstrates:

✔ Clean architecture
✔ Component reusability
✔ State management
✔ Modern UI design

---


