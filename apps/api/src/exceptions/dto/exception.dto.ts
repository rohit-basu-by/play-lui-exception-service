import { IsNotEmpty, IsUUID, IsJSON, IsNumber, } from "class-validator";
export class CreateExceptionDto {
    @IsNotEmpty()
    @IsUUID()
    TENANT_ID: string;

    @IsNotEmpty()
    @IsUUID()
    SOURCE_ID: string;

    @IsNotEmpty()
    TITLE: string;

    @IsNotEmpty()
    DESCRIPTION: string;

    @IsJSON()
    EXT_FIELDS: string;

    @IsNotEmpty()
    STATUS: string;

    @IsNotEmpty()
    @IsNumber()
    SEVERITY: number;
    REFERENCE_ID: string;
    REF_TYPE: string;
    NAV_PROPS: string;
    SUB_TITLE: string;
    CREATED_DATE: Date;
    LAST_MODIFIED_DATE: Date;
    READ_BY: string;
    DELETED_BY: string;
}

export class CreateExceptionResponse {
    _id: string;
}