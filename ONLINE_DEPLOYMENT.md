# WizPlanning Online Deployment

## Backend

Google Apps Script backend:

```text
https://script.google.com/macros/s/AKfycbyIIw0m25ZfrkLAaiowfQ4iovQmWGe_AVTvNzzo0cFsU67mNo56M-CPk9Q-TDdnI3ZA/exec
```

The frontend reads this URL from `frontend/js/config.js`.

Paste the full backend from:

```text
google-apps-script/WizPlanningOnlineBackend.gs
```

Then deploy a new Web App version in Apps Script.

## What Is Online In Google Sheets

- Users
- Profile name and bio
- Lesson plans
- Community activities
- Community likes
- Points and leaderboard
- Medals and badges
- Notifications and unread/read status

The Apps Script backend creates these extra sheets automatically if they do not exist:

```text
LessonPlans
Activities
ActivityLikes
Rewards
```

## Frontend Hosting

This project can be hosted as a static site. No build step is required.

Recommended quick path:

1. Open Netlify.
2. Create a new site.
3. Drag and drop the entire `WIZPLANNING` folder.
4. Open the generated public URL.
5. Create an account in the app.

GitHub Pages also works if this folder is pushed to a GitHub repository and Pages is configured to serve from the repository root.

## Apps Script Login Note

The published Google Sheets backend does not store passwords or emails. In Apps Script mode:

- Create Account creates a row in the `Users` sheet.
- Login uses the exact user name or user ID from Google Sheets.
- Password fields are hidden in the frontend.

## Community Materials

Community posts accept a public material URL, such as a Google Drive share link. Binary file upload is intentionally not used on GitHub Pages.

## Performance Notes

The optimized frontend now avoids loading every module at startup. Opening the app loads the profile and one dashboard summary request; community, notifications, profile details, and leaderboard load when their tabs are opened.

The Apps Script backend also:

- checks/creates sheet structure only once per deployed schema version;
- reads users, likes, rewards, and medals in batches for community and leaderboard views;
- uses one dashboard summary endpoint instead of multiple large list requests;
- avoids writing to Sheets during normal read-only dashboard requests.
