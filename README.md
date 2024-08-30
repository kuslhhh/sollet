# SOLLET

SOLLET is a streamlined web application designed for seamless interaction with the Solana blockchain. Users can effortlessly check wallet balances and perform airdrops with a user-friendly interface.

## Features

- **Check Wallet Balance**: Instantly fetch the balance of any Solana wallet by entering its public address.
- **Airdrop SOL**: Simplified airdrop functionality to transfer SOL tokens to a specified wallet address.
- **Modern UI**: Built with Tailwind CSS and ShadCN UI for a clean and responsive user interface.
- **Error Handling**: Provides clear and informative error messages for invalid inputs and failed transactions.

## Getting Started

Follow these instructions to set up SOLLET on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kuslhhh/sollet.git
   cd sollet
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Start the Development Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

4. **Access the Application**

   Open your browser and navigate to `http://localhost:3000` to view and interact with SOLLET.

## Usage

### Balance Tab

- Enter a valid Solana wallet address in the input field.
- Click **Get Balance** to retrieve the current balance of the wallet.

### Airdrop Tab

- Enter a valid Solana wallet address and the amount of SOL to airdrop.
- Click **Airdrop** to execute the transaction.

## Built With

- **[Next.js](https://nextjs.org/)** - A React framework for server-rendered applications.
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed programming language that builds on JavaScript.
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapid UI development.
- **[ShadCN UI](https://shadcn.dev/)** - UI components for building fast and accessible web applications.
- **[Solana Web3.js](https://solana-labs.github.io/solana-web3.js/)** - JavaScript API for interacting with the Solana blockchain.


## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.