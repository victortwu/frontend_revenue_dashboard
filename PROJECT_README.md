<h1>Custom Restaurant Dashboard</h1>


3rd PARTY ORDER APP DASHBOARD FOR THE RESTAURANT OWNER

<img src='/src/images/Screen Shot 2021-06-03 at 7.09.53 PM.png'/>

https://custom-restaurant-dashboard.herokuapp.com/

APP INFO:

Problem: third party vendors like UberEats and Doordash all have DIFFERENT sets of reporting data.

In order to file tax returns or create other types of reports, a restaurant owner/manager must log in to each vendor's portal and perform calculations one by one.

This can be up to several vendors!

This dashboard app parses Doordash, UberEats, Postmates, Grubhub and Kiosk Buddy's data
and provides the client with the MOST useful information in ONE dashboard.

In fact, this iteration is set to provide instant Department of Revenue reporting information for restaurants in the Seattle, King County, Washington State area.

.....it also has SOUNDWAVE


USER STORY:

User can log in and click on search bar to search a date range.

The data in the specified date range will render on the dashboard.

User can also upload transaction csv files from Doordash, Grubhub, UberEats and Postmates by clicking or dragging and dropping.

The User can also choose different backgrounds.

Since the user will be saving a lot of time from using this app, a procrastination feature has been added.

User can click the 'Transform' button and transform Soundwave, the Procrastinatacon.

When user logs out or is logged out, search bar and uploading file feature is unavailable.


TECHNOLOGIES USED:

Flask, Python, peewee

PosgreSQL

React.js

React packages: react-dropzone component, react-datepicker calendar

Deployed on Heroku
