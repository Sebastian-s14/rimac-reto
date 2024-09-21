import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { useSummaryStore } from '@/store/store'

type FormData = z.infer<typeof formDataSchema>

export const formDataSchema = z.object({
    document: z
        .string()
        .min(1, '*Es necesario que ingreses tu Nro. de documento')
        .regex(/^[0-9]+$/, '*Formato de documento incorrecto'),
    cellphone: z
        .string()
        .min(1, '*Es necesario que ingreses tu número de celular')
        .max(9, '*Debe tener 9 dígitos')
        .regex(/^9\d{8}$/, '*Formato de número de celular incorrecto'),
    privacyPolicy: z.boolean().refine((privacyPolicy) => privacyPolicy, {
        message: '*Debes aceptar la Política de Privacidad',
    }),
    marketingPolicy: z.boolean().refine((marketingPolicy) => marketingPolicy, {
        message: '*Debes aceptar la Política Comunicaciones Comerciales',
    }),
})

export const useQuoteForm = () => {
    const navigate = useNavigate()
    const updateSummaryData = useSummaryStore(
        (state) => state.updateSummaryData
    )
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formDataSchema),
        defaultValues: {
            document: '',
            cellphone: '',
            privacyPolicy: false,
            marketingPolicy: false,
        },
    })

    const onSubmit: SubmitHandler<FormData> = (data) => {
        updateSummaryData({
            document: data.document,
            cellphone: data.cellphone,
        })
        navigate('/planes')
    }

    return {
        register,
        handleSubmit,
        formState: { errors },
        onSubmit,
    } as const
}
