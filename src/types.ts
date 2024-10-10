export type WithClassName<TProps = unknown> = TProps & {
    /**
     * Additional class name to pass from parent component
     */
    className?: string;
};

export type WithChildren<TProps = unknown> = TProps & {
    /**
     * COmmon children prop
     */
    children?: React.ReactNode;
};

export type FCProps<TProps = unknown> = WithClassName<WithChildren<TProps>>;
