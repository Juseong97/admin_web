interface BaseEntity {
    id? : string | number | null,
    createdAt? : string,
    updateAt? : string | null,
    useYn? : string
}

interface ValidationResult {
    type : boolean;
    message : string;
    target : string;
}

export type {BaseEntity,ValidationResult}