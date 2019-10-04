export interface IAuthorizationHandler {
    getToken(force?: boolean, args?: string[]): Promise<string>;
    subscriptionID: string;
    baseUrl: string;
}