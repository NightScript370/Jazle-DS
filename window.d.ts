export {};

declare global {
	interface Window {
        // Process - Cross-Compatibility with React
        process: {
            env: Record<string, unknown>
        }
	}
}