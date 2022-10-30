export declare class ParseError extends Error {
    data: any;
    statusCode: number;
    constructor(data: any);
}
export declare class InvalidRequest extends Error {
    data: any;
    statusCode: number;
    constructor(data: any);
}
export declare class MethodNotFound extends Error {
    data: any;
    statusCode: number;
    constructor(data: any);
}
export declare class InvalidParams extends Error {
    data: any;
    statusCode: number;
    constructor(data: any);
}
export declare class InternalError extends Error {
    data: any;
    statusCode: number;
    constructor(data: any);
}
