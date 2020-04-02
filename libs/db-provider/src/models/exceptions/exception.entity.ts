import { Model, Table, TableOptions, Column, CreatedAt, DataType, UpdatedAt } from "sequelize-typescript";
import { EXCEPTIONS_TABLENAME } from "@jda/db-provider/utils/constants";

const tableOptions: TableOptions = {
    tableName: EXCEPTIONS_TABLENAME
} as TableOptions

@Table(tableOptions)
export class Exception extends Model<Exception>{
    @Column({
        type: 'UNIQUEIDENTIFIER',
        primaryKey: true,
        defaultValue: DataType.UUIDV4,
    })
    ID: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    TENANT_ID: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    SOURCE_ID: string;
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    REFERENCE_ID: string;
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    REF_TYPE: string;
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    NAV_PROPS: string;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    TITLE: string;
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    SUB_TITLE: string;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    DESCRIPTION: string;
    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    EXT_FIELDS: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'O'
    })
    STATUS: string;
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 6
    })
    SEVERITY: number;
    @CreatedAt
    CREATED_DATE: Date;
    @UpdatedAt
    LAST_MODIFIED_DATE: Date;
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    READ_BY: string;
    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    DELETED_BY: string;
}