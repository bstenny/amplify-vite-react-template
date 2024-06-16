import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PatientForm } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PatientFormUpdateFormInputValues = {
    name?: string;
    age?: string;
    injury?: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
};
export declare type PatientFormUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    age?: ValidationFunction<string>;
    injury?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientFormUpdateFormOverridesProps = {
    PatientFormUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    age?: PrimitiveOverrideProps<TextFieldProps>;
    injury?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatientFormUpdateFormProps = React.PropsWithChildren<{
    overrides?: PatientFormUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    patientForm?: PatientForm;
    onSubmit?: (fields: PatientFormUpdateFormInputValues) => PatientFormUpdateFormInputValues;
    onSuccess?: (fields: PatientFormUpdateFormInputValues) => void;
    onError?: (fields: PatientFormUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientFormUpdateFormInputValues) => PatientFormUpdateFormInputValues;
    onValidate?: PatientFormUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PatientFormUpdateForm(props: PatientFormUpdateFormProps): React.ReactElement;
