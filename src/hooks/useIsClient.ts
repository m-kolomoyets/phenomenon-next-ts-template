import { useEffect, useState } from 'react';

/**
 * Hook to check if the code is running on the client side.
 * @returns Whether the code is running on the client side.
 */
const useIsClient = () => {
    const [isClient, setClient] = useState(false);

    useEffect(() => {
        setClient(true);
    }, []);

    return isClient;
};

export default useIsClient;
