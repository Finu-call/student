# StudentSave — Track. Save. Grow.

StudentSave is a mobile-first student finance PWA built with HTML5, CSS3, Vanilla JavaScript, Firebase Authentication, Firestore and Chart.js.

## Features
- Email/password + Google authentication
- Private user-scoped Firestore data
- Dashboard: balance, income, expenses and savings rate
- Transaction add/edit/delete, search, filters and sorting
- Monthly/category budgets with over-limit warnings
- Savings goals and contributions
- Recurring expenses
- Financial calendar
- Dynamic notifications and financial insights based on actual data
- Analytics charts
- Profile editing
- Light/dark/system appearance
- Currency selection: INR, USD, EUR, GBP, AED
- Protected account deletion requiring exact DELETE MY ACCOUNT confirmation
- PWA manifest + service worker + installable shell
- Responsive desktop sidebar and mobile bottom navigation

## Firebase setup
1. Create a Firebase project.
2. Enable Authentication → Email/Password and Google.
3. Create a Firestore database.
4. Add a Web App under Project Settings.
5. Copy its Web SDK configuration into firebase.js, replacing the YOUR_* placeholders.
6. Deploy firestore.rules.
7. Add your deployed domain to Firebase Authentication → Settings → Authorized domains.
8. Deploy with Firebase Hosting or another static host.

The browser-side Firebase Web config is intentionally a placeholder. Never put Firebase service-account/private keys in browser code.

## Firestore structure
users/{uid} stores the profile. Finance data is scoped under:
- users/{uid}/transactions
- users/{uid}/budgets
- users/{uid}/goals
- users/{uid}/recurring

This structure aligns directly with the supplied security rules so one signed-in user cannot read another user's finance records.

## Firebase Hosting
Use firebase init hosting, select this directory as the public folder, then deploy with firebase deploy.

## Privacy
See privacy.html. StudentSave does not intentionally publish financial information and supports permanent account deletion.
