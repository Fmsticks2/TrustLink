import { wagmiAdapter, projectId } from "../../config/index";
import { createAppKit } from "@reown/appkit";
import { mainnet, arbitrum } from "@reown/appkit/networks";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cookieToInitialState, WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("REACT_PUBLIC_PROJECT_ID is not defined.");
}

export const modal = createAppKit({
  adapters: [wagmiAdapter] ,
  projectId,
  networks: [mainnet, arbitrum],
  defaultNetwork: mainnet,
  features: {
    analytics: true,
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'farcaster'],
    emailShowWallets: true,
  },
  themeMode: "light",
});

function ContextProvider({ children, cookies }) {
  const initialState = cookieToInitialState({
    storage: wagmiAdapter.wagmiConfig,
    cookies,
  });
  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;