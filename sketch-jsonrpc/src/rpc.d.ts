declare global {
    interface Window {
        message(message: any): void;
    }
}
export declare const setup: (_methods: any) => void;
export declare const sendNotification: (method: any, params: any) => void;
export declare const sendRequest: (method: any, params: any, timeout: any) => Promise<unknown>;
