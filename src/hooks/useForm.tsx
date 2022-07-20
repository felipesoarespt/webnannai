import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormReturn, UseFormRegisterReturn } from 'react-hook-form';

interface NewRegisterOption extends UseFormRegisterReturn {
    message?: string;
    feedback?: string;
}
interface UseFormReactProps {
    resolver?: any;
    defaultValues?: any | null;
}

function useFormReact<T>(params?: UseFormReactProps): any {
    const { resolver, defaultValues } = params || {};
    const form = useForm<T>({
        defaultValues,
        resolver: resolver ? yupResolver(resolver) : undefined,
    });
    const getValueByPath = (object: any, path: string): any => {
        return String(path)
            .replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '')
            .split('.')
            .reduce((acc: any, part) => acc && acc[part], object);
    };
    const register = (path: any, options?: any): NewRegisterOption => {
        const erro = getValueByPath(form?.formState?.errors, path);

        return {
            message: erro?.message,
            feedback: erro ? 'error' : '',
            ...form.register(path as any, options),
        };
    };
    return {
        ...form,
        register,
    };
}

export default useFormReact;

