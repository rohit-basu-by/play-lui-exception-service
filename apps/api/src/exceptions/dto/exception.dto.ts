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
    EXCEPTION_TYPE: string;
    SUBTITILE: string;
    CREATED_AT: Date;
    UPDATED_AT: Date;
    READ_BY: string;
    DELETED_BY: string;

}