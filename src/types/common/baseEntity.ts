interface BaseEntity {
    id : string | number,
    createdAt : string,
    updateAt : string,
    useYn : string
}

interface ValidationResult {
    type : boolean;
    message : string;
    target : string;
}

export type {BaseEntity,ValidationResult}