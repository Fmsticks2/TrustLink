import { cookieStorage, createStorage } from 'wagmi';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, arbitrum } from '@reown/appkit/networks';

export const projectId = "0984754765402db365a7c5938a42e46d"


if (!projectId) {
  throw new Error('REACT_PUBLIC_PROJECT_ID is not defined.');
}

export const networks = [mainnet, arbitrum];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  networks,
  projectId,
})

export const config = wagmiAdapter.wagmiConfig