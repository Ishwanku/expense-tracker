# Expense Tracker

Expense Tracker is a React-based web application that allows users to manage their expenses efficiently. The application provides features to add, edit, delete expenses, and view summaries with visual charts.

## Features

1. **Wallet Balance Management**
   - Default wallet balance set to `$5000`.
   - Users can add income to increase the wallet balance.
   - Alerts users when trying to spend more than the available balance.

2. **Expense Management**
   - Add expenses with details like title, amount, category, and date.
   - Edit or delete existing expenses.

3. **Expense Summaries and Trends**
   - View total expenses categorized using a pie chart.
   - Analyze spending trends with a bar chart based on categories.

4. **Persistent Data**
   - All data is stored in `localStorage` to ensure it persists even after page refresh.

5. **Responsive Design**
   - Optimized for different screen sizes.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Charting Libraries**: Recharts
- **UI Enhancements**: react-modal, notistack, react-icons

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Ishwanku/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000/`.

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

1. **Add Income**: Use the "Add Income" button to increase your wallet balance.
2. **Add Expense**: Fill in the expense form with details and click "Add Expense."
3. **Edit/Delete Expense**: Modify or remove expenses using the respective buttons.
4. **View Summaries**: Use the charts to analyze expenses by category and trends.

## Deployment

The app can be deployed using [Vercel](https://vercel.com/) or any other hosting platform:
1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy using Vercel:
   ```bash
   vercel deploy
   ```

## Folder Structure

```
expense-tracker/
├── src/
│   ├── components/
│   │   └── ExpenseTracker.jsx
│   ├── App.css
│   ├── App.jsx
│   └── index.js
├── .gitignore
├── package.json
├── README.md
```

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute by submitting issues or pull requests!

