
# Tower app

Bootstrapped using create react app typescript

What's been done:
The LO-FI has been implemented using react and typescript (first time user of typescript)


What could have been done:
- Better state management using ContextAPI, card details will be lifted to global state , like in a real world app
- Responsiveness (assuming a different design for desktop where menu is on the LHS, possibly could have also done some transitions for the menu to make it appear slide in/out)
- Tests , also run into issues related to node version with tests ATM (first time using react testing library, generally use enzyme and jest)
- Attempt at the backend/API but using Express and Mongo as I am not familiar with .NetCore and MSSQL so would take a week to learn and implement it at minimum.
- To make the app more real-world, a login flow implementation on client side, and usage of third party credit card validation and storage services (Stripe/Paypal) including the client side form as well as best practices for security would mean not dealing with the card details at all on our end
- Usage of bootstrap or materialUI library if preferred for consistent APP UI styles



## Run Locally

Clone the project

```bash
  git clone https://github.com/savithapremkumar/towerapp.git
```

Go to the project directory

```bash
  cd towerapp
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

