// Inside '@/lib/logic.ts'
import { 
    Connection,
    PublicKey,
    Transaction,
    SystemProgram,
    Keypair,
    sendAndConfirmTransaction
  } from '@solana/web3.js';

// Function to get the wallet balance
export const getWalletBalance = async (address: string): Promise<number> => {
  const connection = new Connection('https://api.mainnet-beta.solana.com');

  // Convert the string address to a PublicKey instance
  const publicKey = new PublicKey(address);

  // Get the balance in lamports and convert to SOL
  const balance = await connection.getBalance(publicKey);
  return balance / 1e9; // Convert lamports to SOL
};

// Logic for airdrop
export const airdrop = async (address: string, amount: number) => {
  const connection = new Connection('https://api.mainnet-beta.solana.com');

  // Convert the string address to a PublicKey instance
  const recipientPublicKey = new PublicKey(address);

  // Generate a Keypair for the payer (this should be replaced with your actual payer's Keypair)
  const payer = Keypair.generate(); // In production, replace this with a real payer's Keypair

  // Create a new transaction
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: payer.publicKey, // Use the payer's public key
      toPubkey: recipientPublicKey,
      lamports: amount * 1e9, // Convert SOL to lamports
    })
  );

  // Send and confirm the transaction
  const signature = await sendAndConfirmTransaction(connection, transaction, [payer]);

  return signature;
};
