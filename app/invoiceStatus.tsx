import clsx from 'clsx';

export default function InvoiceStatus({
        status,
        children,
    }: {
        status: string;
        children?: React.ReactNode; // Soporta contenido adicional como texto o elementos
    }) {
        return (
        <span
            className={clsx(
                'inline-flex items-center justify-center rounded-full px-2 py-1 text-2xl',
                {
                'bg-yellow-300 text-black': status === 'pending',
                'bg-green-500 text-white': status === 'paid',
                },
            )}
        >
        {children}
        </span>
        );
    }
