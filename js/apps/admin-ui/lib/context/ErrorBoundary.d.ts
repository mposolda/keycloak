import { Component, ComponentType, FunctionComponent, GetDerivedStateFromError, ReactNode } from 'react';

export interface ErrorBoundaryContextValue {
    error?: Error;
    showBoundary: (error: Error) => void;
}
export declare const useErrorBoundary: () => ErrorBoundaryContextValue;
export interface ErrorBoundaryProviderProps {
    children: ReactNode;
}
export interface ErrorBoundaryProviderState {
    error?: Error;
}
export declare class ErrorBoundaryProvider extends Component<ErrorBoundaryProviderProps, ErrorBoundaryProviderState> {
    state: ErrorBoundaryProviderState;
    static getDerivedStateFromError: GetDerivedStateFromError<ErrorBoundaryProviderProps, ErrorBoundaryProviderState>;
    showBoundary: (error: Error) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export interface FallbackProps {
    error: Error;
}
export interface ErrorBoundaryFallbackProps {
    fallback: ComponentType<FallbackProps>;
    children: ReactNode;
}
export declare const ErrorBoundaryFallback: FunctionComponent<ErrorBoundaryFallbackProps>;
