import { 
    Connection,
    PublicKey,
    Transaction,
    SystemProgram,
    Keypair,
    sendAndConfirmTransaction
  } from '@solana/web3.js';

export const getWalletBalance = async (address: string): Promise<number> => {
  const connection = new Connection('https://api.mainnet-beta.solana.com');

  const publicKey = new PublicKey(address);

  const balance = await connection.getBalance(publicKey);
  return balance / 1e9; 
};

// Logic for airdrop
export const airdrop = async (address: string, amount: number) => {
  const connection = new Connection("https://api.mainnet-beta.solana.com");

  const recipientPublicKey = new PublicKey(address);

  const payer = Keypair.generate(); 

  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: payer.publicKey, 
      toPubkey: recipientPublicKey,
      lamports: amount * 1e9, 
    })
  );

  const signature = await sendAndConfirmTransaction(connection, transaction, [payer]);

  return signature;
};
