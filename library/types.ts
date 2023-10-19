import { z } from 'zod'
import { sub } from 'date-fns'
import type {
  FieldValues,
  UseFormRegister,
  FieldErrors,
  UseFormGetValues,
  UseFormWatch,
} from 'react-hook-form'
import PersonalInfo from '@/components/Multi/Stage/PersonalInfo'
import Plan from '@/components/Multi/Stage/Plan'
import AddOns from '@/components/Multi/Stage/AddOns'
import Finalise from '@/components/Multi/Stage/Finalise'

export type SectionName = 'personalInfo' | 'planType' | 'addOns' | 'finalise'


export const SignInFormSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(7, 'Error: Password must be at least 10 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

export type TSignInFormSchema = z.infer<typeof SignInFormSchema>

const MAX_FILE_SIZE = 1000000

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]

export const CommentFormSchema = z.object({
  message: z.string().min(1, { message: 'Error: message is required' }),
  attachment: z
    // .optional(z.instanceof(FileList)) TODO getting error server ReferenceError: FileList is not defined
    .optional(z.any())
    .refine((file) => {
      if (file && file[0]?.size <= MAX_FILE_SIZE) {
        return {
          message: `Max image size is 10MB.`,
        }
      }
      return true
    })
    .refine((file) => {
      if (file && ACCEPTED_IMAGE_TYPES.includes(file[0]?.type))
        return {
          message: `Error: Only .jpg, .jpeg, .png and .webp formats are supported.`,
        }
      return true
    }),
})

export type TCommentFormSchema = z.infer<typeof CommentFormSchema>

export const AVAILABILITY_SLOT = ['10:00 am', '12:00 am', '1:00 pm', '2:00 pm']

export const YESTERDAY_DATE = sub(new Date(), { days: 1 })

export const AppointmentSchema = z.object({
  date: z.string().min(1, 'Error: Please select a date'),
  time: z.string({
    invalid_type_error: 'Error: Please select a time',
  }),
})

export type TAppointmentSchema = z.infer<typeof AppointmentSchema>

export const OrderFormSchema = z.object({
  base: z.string({
    required_error: 'Error: A base is required',
    invalid_type_error: 'Error: A base is required',
  }),
  sauce: z.string({
    required_error: 'Error: A sauce is required',
    invalid_type_error: 'Error: A sauce is required',
  }),
  topping: z
    .array(z.string())
    .max(5, 'Error: You can only Select a maximun of 5 toppings.')
    .optional()
    .or(z.boolean().refine((value) => value === false)),
  delivery: z.string().nonempty('Error: Please choose a valid delivery time.'),
})

export type TOrderFormSchema = z.infer<typeof OrderFormSchema>

const REQUIRED_FIELD = 'Error: This field is required'

export type CommonProps = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

type ComponentWithProps<T> = (props: T) => React.ReactNode

export const PersonalInfoSchema = z.object({
  name: z.string().min(1, REQUIRED_FIELD),
  email: z.string().email(),
  phone: z.string().min(1, REQUIRED_FIELD),
})
// export type TPersonalInfo = z.infer<typeof PersonalInfoSchema>

export const PlanSchema = z.object({
  plan: z.string().min(1, REQUIRED_FIELD),
  isYearly: z.boolean(),
})

export type TPlanSchema = z.infer<typeof PlanSchema>

export const AddOnsSchema = z.object({
  addOns: z.array(z.string()),
})

export const FinaliseSchema =
  PersonalInfoSchema.merge(PlanSchema).merge(AddOnsSchema)

export type TFinaliseSchema = z.infer<typeof FinaliseSchema>

export const MultiFormSchema = z.union([
  PersonalInfoSchema,
  PlanSchema,
  AddOnsSchema,
  FinaliseSchema,
])
export type TMultiFormSchema = z.infer<typeof MultiFormSchema>

export type TFormStageOptions = {
  [key: string]: {
    heading: string
    subHeading: string
    component: ComponentWithProps<{
      register: UseFormRegister<TMultiFormSchema>
      errors: any
      isYearly?: boolean
      getValues: UseFormGetValues<TMultiFormSchema>
      watch: UseFormWatch<TMultiFormSchema>
    }>
    schema: z.ZodTypeAny
    // schema: TMultiFormSchema
  }
}
export const PLAN_OPTION = ['arcade', 'advanced', 'pro']
export const ADD_ONS = [
  { type: 'onlineService', description: 'Access to multiplayer games' },
  { type: 'largerStorage', description: 'Extra 1TB of cloud save' },
  { type: 'customizableProfile', description: 'Custom theme on your profile' },
]

export type TPricing = {
  [key: string]: {
    monthly: number
    yearly: number
  }
}

export const PRICING: TPricing = {
  arcade: {
    monthly: 9,
    yearly: 90,
  },
  advanced: {
    monthly: 12,
    yearly: 120,
  },
  pro: {
    monthly: 15,
    yearly: 150,
  },
  onlineService: {
    monthly: 1,
    yearly: 10,
  },
  largerStorage: {
    monthly: 2,
    yearly: 20,
  },
  customizableProfile: {
    monthly: 2,
    yearly: 20,
  },
}


export const formStageOptions: TFormStageOptions = {
  personalInfo: {
    heading: 'Personal info',
    subHeading: 'Please provide your name, email address, and phone number.',
    component: PersonalInfo,
    schema: PersonalInfoSchema,
  },
  planType: {
    heading: 'Select your plan',
    subHeading: 'You have the option of monthly or yearly billing.',
    component: Plan,
    schema: PlanSchema,
  },
  addOns: {
    heading: 'Pick add-ons',
    subHeading: 'Add-ons help enhance your gaming experience.',
    component: AddOns,
    schema: AddOnsSchema,
  },
  finalise: {
    heading: 'Finishing up',
    subHeading: 'Double-check everything looks OK before confirming.',
    component: Finalise,
    schema: FinaliseSchema,
  },
}