import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { createConfig, fallback, http, WagmiProvider } from 'wagmi';
import { holesky } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  walletConnectWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [metaMaskWallet, walletConnectWallet, coinbaseWallet],
    },
  ],
  {
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
  }
);

export const config = createConfig({
  chains: [holesky],
  connectors,
  transports: {
    [holesky.id]: http(),
  },
});

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider
        coolMode
        modalSize="compact"
        theme={lightTheme({
          accentColor: '#7c3bed',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'system',
        })}
      >
        <App />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
