import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {getToken} from "../helpers/client";


export default function Token(){

    const [token, setToken] = useState<string|null>(null);

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        setToken(token);
    }, []);

    const getAndStoreToken = async () => {
        try {
            const {auth_token} = await getToken();
            if (auth_token) {
                localStorage.setItem('auth_token', auth_token);
                setToken(auth_token);
            }
        }catch (e) {
            console.error(e);
            if(e instanceof Error) {
                alert(`Failed to get token: ${e.message}`);
            }
        }
    }

    return (
        <div>
            {token && <h1>{token}</h1>}
            {!token && <button onClick={getAndStoreToken}>Get Token</button>}
        </div>
    )
}