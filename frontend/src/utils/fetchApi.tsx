import { useCallback } from 'react';

import { useAuth } from '@/hooks';

interface APIError {
  message: string;
  code: string;
  statusCode: number;
}

export const useFetchApi = () => {
  const { jwt, logout } = useAuth();

  const fetchApi = useCallback(
    async (
      route: string,
      method = 'GET',
      auth = true,
      body?: unknown,
      headers?: object
    ) => {
      const url = `${import.meta.env.VITE_API_URL}${route}`;

      let defaultHeaders: HeadersInit = {};
      if (!(body instanceof FormData)) {
        defaultHeaders = {
          'Content-Type': 'application/json',
        };
      }

      if (auth && jwt) {
        defaultHeaders = { ...defaultHeaders, Authorization: `Bearer ${jwt}` };
      }

      defaultHeaders = { ...defaultHeaders, ...headers };

      const options: RequestInit = {
        method,
        headers: defaultHeaders,
        ...(body
          ? {
              body: body instanceof FormData ? body : JSON.stringify(body),
            }
          : {}),
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          let errorData: APIError;
          try {
            errorData = await response.json();
          } catch {
            errorData = {
              message: response.statusText,
              code: response.statusText,
              statusCode: response.status,
            };
          }
          throw errorData;
        }
        return await response.json();
      } catch (error: unknown | APIError) {
        if ((error as APIError)?.statusCode === 401) {
          logout();
        }
        throw error;
      }
    },
    [jwt, logout]
  );

  return { fetchApi };
};
