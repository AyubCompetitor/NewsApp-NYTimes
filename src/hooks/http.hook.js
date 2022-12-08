import { useState, useCallback } from "react";

const useHttp = () => {
	const [error, setError] = useState(null);

	const request = useCallback(
		async (
			url,
			method = "GET",
			body = null,
			headers = { "Content-Type": "application/json" }
		) => {
			try {
				const response = await fetch(url, { method, body, headers });

				if (!response.ok) {
					throw new Error(
						`Could not fetch ${url}, status: ${response.status}`
					);
				}

				const data = await response.json();

				return data;
			} catch (error) {
				setError(error.message);
				throw error;
			}
		},
		[]
	);

	const clearError = useCallback(() => {
		setError(null);
	}, []);

	return { error, request, clearError };
};

export { useHttp };
